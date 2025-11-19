/**
 * Dashboard API client for backend communication.
 */

import axios from 'axios';
import type {
    CreateWidgetRequest,
    DashboardPreferencesResponse,
    UpdateLayoutRequest,
    UpdateWidgetRequest,
    WidgetResponse,
    DashboardContext,
} from '@/types/dashboard';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const dashboardApi = {
    /**
     * Get dashboard preferences for a context
     */
    async getPreferences(
        context: DashboardContext,
        contextId?: string
    ): Promise<DashboardPreferencesResponse> {
        const params = contextId ? { context_id: contextId } : {};
        const response = await api.get(`/dashboard/preferences/${context}`, { params });
        return response.data;
    },

    /**
     * Update dashboard layout
     */
    async updateLayout(
        context: DashboardContext,
        layout: UpdateLayoutRequest,
        contextId?: string
    ): Promise<DashboardPreferencesResponse> {
        const params = contextId ? { context_id: contextId } : {};
        const response = await api.put(`/dashboard/preferences/${context}`, layout, { params });
        return response.data;
    },

    /**
     * Add a widget to the dashboard
     */
    async addWidget(widget: CreateWidgetRequest): Promise<WidgetResponse> {
        const response = await api.post('/dashboard/widgets', widget);
        return response.data;
    },

    /**
     * Update a widget configuration
     */
    async updateWidget(
        widgetId: string,
        update: UpdateWidgetRequest,
        context: DashboardContext,
        contextId?: string
    ): Promise<WidgetResponse> {
        const params: Record<string, string> = { context };
        if (contextId) params.context_id = contextId;

        const response = await api.put(`/dashboard/widgets/${widgetId}`, update, { params });
        return response.data;
    },

    /**
     * Delete a widget from the dashboard
     */
    async deleteWidget(
        widgetId: string,
        context: DashboardContext,
        contextId?: string
    ): Promise<void> {
        const params: Record<string, string> = { context };
        if (contextId) params.context_id = contextId;

        await api.delete(`/dashboard/widgets/${widgetId}`, { params });
    },
};
