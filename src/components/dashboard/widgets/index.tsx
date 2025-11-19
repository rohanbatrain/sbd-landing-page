'use client';

/**
 * Widget Registry - Maps widget types to components
 */

import type { WidgetType } from '@/types/dashboard';
import { MoodTrackerWidget } from './MoodTrackerWidget';
import { QuickCaptureWidget } from './QuickCaptureWidget';
import { TokenBalanceWidget } from './TokenBalanceWidget';

// Placeholder component for widgets not yet implemented
function PlaceholderWidget({ type }: { type: string }) {
    return (
        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-white/60 text-sm">
                {type} widget - Coming soon!
            </p>
        </div>
    );
}

export const WIDGET_COMPONENTS: Record<WidgetType, React.ComponentType<any>> = {
    // Personal widgets
    profile: PlaceholderWidget,
    token_balance: TokenBalanceWidget,
    documents: PlaceholderWidget,
    skills: PlaceholderWidget,
    chat_sessions: PlaceholderWidget,
    shop: PlaceholderWidget,
    mood_tracker: MoodTrackerWidget,
    quick_capture: QuickCaptureWidget,
    tasks: PlaceholderWidget,
    recent_notes: PlaceholderWidget,

    // Family widgets
    family_overview: PlaceholderWidget,
    family_members: PlaceholderWidget,
    family_tokens: PlaceholderWidget,
    purchase_requests: PlaceholderWidget,
    family_activity: PlaceholderWidget,

    // Team widgets
    workspace_overview: PlaceholderWidget,
    team_members: PlaceholderWidget,
    team_wallet: PlaceholderWidget,
    clubs: PlaceholderWidget,
    team_activity: PlaceholderWidget,
};
