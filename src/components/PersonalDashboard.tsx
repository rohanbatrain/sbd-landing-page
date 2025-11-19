'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Settings } from 'lucide-react';
import { DashboardGrid } from '@/components/dashboard/DashboardGrid';
import { WidgetGallery } from '@/components/dashboard/WidgetGallery';
import { WIDGET_COMPONENTS } from '@/components/dashboard/widgets';
import { useWidgets } from '@/hooks/useDashboard';
import type { WidgetType } from '@/types/dashboard';

export function PersonalDashboard() {
  const [showGallery, setShowGallery] = useState(false);
  const {
    widgets,
    gridColumns,
    loading,
    error,
    addWidget,
    deleteWidget,
    toggleWidgetVisibility,
    updateLayout,
  } = useWidgets('personal');

  const handleAddWidget = async (widgetType: WidgetType) => {
    try {
      await addWidget(widgetType);
    } catch (err) {
      console.error('Failed to add widget:', err);
    }
  };

  const handleDeleteWidget = async (widgetId: string) => {
    if (confirm('Are you sure you want to remove this widget?')) {
      try {
        await deleteWidget(widgetId);
      } catch (err) {
        console.error('Failed to delete widget:', err);
      }
    }
  };

  const handleToggleVisibility = async (widgetId: string, currentVisibility: boolean) => {
    try {
      await toggleWidgetVisibility(widgetId, !currentVisibility);
    } catch (err) {
      console.error('Failed to toggle widget visibility:', err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-white/60">Loading dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-red-400">Failed to load dashboard. Please try again.</div>
      </div>
    );
  }

  const visibleWidgets = widgets.filter((w) => w.visible);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Personal Dashboard</h1>
          <p className="text-white/60 mt-1">Customize your workspace with widgets</p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => setShowGallery(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Widget
          </Button>
        </div>
      </div>

      {/* Empty State */}
      {visibleWidgets.length === 0 && (
        <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-white/10 rounded-lg">
          <div className="text-white/40 text-center">
            <Settings className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No widgets yet</h3>
            <p className="text-sm mb-4">Add widgets to customize your dashboard</p>
            <Button
              onClick={() => setShowGallery(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Widget
            </Button>
          </div>
        </div>
      )}

      {/* Dashboard Grid */}
      {visibleWidgets.length > 0 && (
        <DashboardGrid
          widgets={widgets}
          onLayoutChange={updateLayout}
          gridColumns={gridColumns}
        >
          {visibleWidgets.map((widget) => {
            const WidgetComponent = WIDGET_COMPONENTS[widget.widget_type];
            return (
              <div key={widget.widget_id}>
                <WidgetComponent
                  onDelete={() => handleDeleteWidget(widget.widget_id)}
                  onToggleVisibility={() =>
                    handleToggleVisibility(widget.widget_id, widget.visible)
                  }
                  visible={widget.visible}
                  settings={widget.settings}
                />
              </div>
            );
          })}
        </DashboardGrid>
      )}

      {/* Widget Gallery Modal */}
      <WidgetGallery
        open={showGallery}
        onClose={() => setShowGallery(false)}
        onAddWidget={handleAddWidget}
        context="personal"
      />
    </div>
  );
}