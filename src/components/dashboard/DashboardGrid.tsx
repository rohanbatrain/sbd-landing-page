'use client';

/**
 * DashboardGrid - Responsive grid layout with drag-and-drop
 */

import { useCallback } from 'react';
import { Responsive, WidthProvider, Layout } from 'react-grid-layout';
import type { WidgetConfig } from '@/types/dashboard';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface DashboardGridProps {
    widgets: WidgetConfig[];
    onLayoutChange: (widgets: WidgetConfig[]) => void;
    children: React.ReactNode;
    gridColumns?: number;
}

export function DashboardGrid({
    widgets,
    onLayoutChange,
    children,
    gridColumns = 12,
}: DashboardGridProps) {
    const layout: Layout[] = widgets.map((w) => ({
        i: w.widget_id,
        x: w.position.x,
        y: w.position.y,
        w: w.position.w,
        h: w.position.h,
        minW: 2,
        minH: 2,
    }));

    const handleLayoutChange = useCallback(
        (newLayout: Layout[]) => {
            const updatedWidgets = widgets.map((widget) => {
                const layoutItem = newLayout.find((l) => l.i === widget.widget_id);
                if (layoutItem) {
                    return {
                        ...widget,
                        position: {
                            x: layoutItem.x,
                            y: layoutItem.y,
                            w: layoutItem.w,
                            h: layoutItem.h,
                        },
                    };
                }
                return widget;
            });
            onLayoutChange(updatedWidgets);
        },
        [widgets, onLayoutChange]
    );

    return (
        <ResponsiveGridLayout
            className="layout"
            layouts={{ lg: layout }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: gridColumns, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={80}
            onLayoutChange={handleLayoutChange}
            draggableHandle=".cursor-grab"
            isDraggable={true}
            isResizable={true}
            margin={[16, 16]}
            containerPadding={[0, 0]}
        >
            {children}
        </ResponsiveGridLayout>
    );
}
