/**
 * React hooks for dashboard functionality.
 */

import { useState, useEffect, useCallback } from 'react';
import { dashboardApi } from '@/lib/api/dashboard';
import type {
    DashboardContext,
    DashboardPreferencesResponse,
    WidgetConfig,
    CreateWidgetRequest,
    UpdateWidgetRequest,
    WidgetType,
} from '@/types/dashboard';

export function useDashboardPreferences(context: DashboardContext, contextId?: string) {
    const [preferences, setPreferences] = useState<DashboardPreferencesResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const loadPreferences = useCallback(async () => {
        try {
            setLoading(true);
            const data = await dashboardApi.getPreferences(context, contextId);
            setPreferences(data);
            setError(null);
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    }, [context, contextId]);

    useEffect(() => {
        loadPreferences();
    }, [loadPreferences]);

    const updateLayout = useCallback(
        async (widgets: WidgetConfig[], gridColumns?: number) => {
            try {
                const updated = await dashboardApi.updateLayout(
                    context,
                    { widgets, grid_columns: gridColumns },
                    contextId
                );
                setPreferences(updated);
                return updated;
            } catch (err) {
                setError(err as Error);
                throw err;
            }
        },
        [context, contextId]
    );

    return {
        preferences,
        loading,
        error,
        reload: loadPreferences,
        updateLayout,
    };
}

export function useWidgets(context: DashboardContext, contextId?: string) {
    const { preferences, loading, error, reload, updateLayout } = useDashboardPreferences(
        context,
        contextId
    );

    const addWidget = useCallback(
        async (widgetType: WidgetType, settings?: Record<string, unknown>) => {
            try {
                const request: CreateWidgetRequest = {
                    context,
                    context_id: contextId,
                    widget_type: widgetType,
                    settings: settings || {},
                };
                await dashboardApi.addWidget(request);
                await reload();
            } catch (err) {
                throw err;
            }
        },
        [context, contextId, reload]
    );

    const updateWidget = useCallback(
        async (widgetId: string, update: UpdateWidgetRequest) => {
            try {
                await dashboardApi.updateWidget(widgetId, update, context, contextId);
                await reload();
            } catch (err) {
                throw err;
            }
        },
        [context, contextId, reload]
    );

    const deleteWidget = useCallback(
        async (widgetId: string) => {
            try {
                await dashboardApi.deleteWidget(widgetId, context, contextId);
                await reload();
            } catch (err) {
                throw err;
            }
        },
        [context, contextId, reload]
    );

    const toggleWidgetVisibility = useCallback(
        async (widgetId: string, visible: boolean) => {
            await updateWidget(widgetId, { visible });
        },
        [updateWidget]
    );

    return {
        widgets: preferences?.widgets || [],
        gridColumns: preferences?.grid_columns || 12,
        loading,
        error,
        addWidget,
        updateWidget,
        deleteWidget,
        toggleWidgetVisibility,
        updateLayout,
    };
}
