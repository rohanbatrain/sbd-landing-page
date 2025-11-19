'use client';

/**
 * Widget Container - Base wrapper for all dashboard widgets
 * Provides drag handle, settings menu, and visibility controls
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GripVertical, Settings, Eye, EyeOff, Trash2 } from 'lucide-react';
import { useState } from 'react';
import type { ReactNode } from 'react';

interface WidgetContainerProps {
    title: string;
    icon?: ReactNode;
    children: ReactNode;
    onDelete?: () => void;
    onToggleVisibility?: () => void;
    onSettings?: () => void;
    isDragging?: boolean;
    visible?: boolean;
}

export function WidgetContainer({
    title,
    icon,
    children,
    onDelete,
    onToggleVisibility,
    onSettings,
    isDragging = false,
    visible = true,
}: WidgetContainerProps) {
    const [showActions, setShowActions] = useState(false);

    return (
        <Card
            className={`bg-white/5 backdrop-blur-sm border-white/10 transition-all duration-200 ${isDragging ? 'opacity-50 scale-95' : ''
                } ${!visible ? 'opacity-40' : ''}`}
            onMouseEnter={() => setShowActions(true)}
            onMouseLeave={() => setShowActions(false)}
        >
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-base flex items-center gap-2">
                        <div className="cursor-grab active:cursor-grabbing text-white/40 hover:text-white/60 transition-colors">
                            <GripVertical className="w-4 h-4" />
                        </div>
                        {icon && <span className="text-blue-400">{icon}</span>}
                        {title}
                    </CardTitle>

                    {showActions && (
                        <div className="flex items-center gap-1">
                            {onSettings && (
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-7 w-7 text-white/60 hover:text-white hover:bg-white/10"
                                    onClick={onSettings}
                                >
                                    <Settings className="w-4 h-4" />
                                </Button>
                            )}
                            {onToggleVisibility && (
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-7 w-7 text-white/60 hover:text-white hover:bg-white/10"
                                    onClick={onToggleVisibility}
                                >
                                    {visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                </Button>
                            )}
                            {onDelete && (
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-7 w-7 text-red-400/60 hover:text-red-400 hover:bg-red-500/10"
                                    onClick={onDelete}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    );
}
