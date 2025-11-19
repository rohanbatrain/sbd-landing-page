'use client';

/**
 * WidgetGallery - Modal for selecting and adding widgets
 */

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { WIDGET_METADATA, type WidgetType, type DashboardContext } from '@/types/dashboard';
import * as Icons from 'lucide-react';

interface WidgetGalleryProps {
    open: boolean;
    onClose: () => void;
    onAddWidget: (widgetType: WidgetType) => void;
    context: DashboardContext;
}

export function WidgetGallery({ open, onClose, onAddWidget, context }: WidgetGalleryProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const availableWidgets = Object.values(WIDGET_METADATA).filter((widget) =>
        widget.availableIn.includes(context)
    );

    const categories = ['all', ...new Set(availableWidgets.map((w) => w.category))];

    const filteredWidgets =
        selectedCategory === 'all'
            ? availableWidgets
            : availableWidgets.filter((w) => w.category === selectedCategory);

    const getIcon = (iconName: string) => {
        const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[iconName];
        return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl bg-gray-900 border-white/10 text-white">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Add Widget</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    {/* Category Filter */}
                    <div className="flex gap-2 flex-wrap">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setSelectedCategory(category)}
                                className={
                                    selectedCategory === category
                                        ? 'bg-blue-600 hover:bg-blue-700'
                                        : 'border-white/10 text-white/70 hover:text-white hover:bg-white/10'
                                }
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Button>
                        ))}
                    </div>

                    {/* Widget Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[60vh] overflow-y-auto pr-2">
                        {filteredWidgets.map((widget) => (
                            <Card
                                key={widget.type}
                                className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
                                onClick={() => {
                                    onAddWidget(widget.type);
                                    onClose();
                                }}
                            >
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="text-blue-400">{getIcon(widget.icon)}</div>
                                            <CardTitle className="text-white text-base">{widget.name}</CardTitle>
                                        </div>
                                        <Plus className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-white/60 text-sm">
                                        {widget.description}
                                    </CardDescription>
                                    <div className="mt-2 text-xs text-white/40">
                                        Size: {widget.defaultSize.w} × {widget.defaultSize.h}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
