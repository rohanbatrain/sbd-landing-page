/**
 * Dashboard TypeScript types and interfaces.
 */

export type DashboardContext = 'personal' | 'family' | 'team';

export type WidgetType =
    // Personal widgets
    | 'profile'
    | 'token_balance'
    | 'documents'
    | 'skills'
    | 'chat_sessions'
    | 'shop'
    | 'mood_tracker'
    | 'quick_capture'
    | 'tasks'
    | 'recent_notes'
    // Family widgets
    | 'family_overview'
    | 'family_members'
    | 'family_tokens'
    | 'purchase_requests'
    | 'family_activity'
    // Team widgets
    | 'workspace_overview'
    | 'team_members'
    | 'team_wallet'
    | 'clubs'
    | 'team_activity';

export interface WidgetPosition {
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface WidgetConfig {
    widget_id: string;
    widget_type: WidgetType;
    position: WidgetPosition;
    visible: boolean;
    settings: Record<string, unknown>;
}

export interface DashboardLayout {
    context: DashboardContext;
    context_id?: string;
    widgets: WidgetConfig[];
    grid_columns: number;
}

export interface DashboardPreferences {
    user_id: string;
    username: string;
    layouts: Record<string, DashboardLayout>;
    created_at: string;
    updated_at: string;
}

// API Request/Response types

export interface CreateWidgetRequest {
    context: DashboardContext;
    context_id?: string;
    widget_type: WidgetType;
    position?: WidgetPosition;
    settings?: Record<string, unknown>;
}

export interface UpdateWidgetRequest {
    position?: WidgetPosition;
    visible?: boolean;
    settings?: Record<string, unknown>;
}

export interface UpdateLayoutRequest {
    widgets: WidgetConfig[];
    grid_columns?: number;
}

export interface DashboardPreferencesResponse {
    context: DashboardContext;
    context_id?: string;
    widgets: WidgetConfig[];
    grid_columns: number;
}

export interface WidgetResponse {
    widget_id: string;
    widget_type: WidgetType;
    position: WidgetPosition;
    visible: boolean;
    settings: Record<string, unknown>;
}

// Widget metadata for gallery

export interface WidgetMetadata {
    type: WidgetType;
    name: string;
    description: string;
    icon: string;
    category: 'personal' | 'family' | 'team' | 'productivity' | 'analytics';
    defaultSize: { w: number; h: number };
    minSize?: { w: number; h: number };
    maxSize?: { w: number; h: number };
    availableIn: DashboardContext[];
}

export const WIDGET_METADATA: Record<WidgetType, WidgetMetadata> = {
    // Personal widgets
    profile: {
        type: 'profile',
        name: 'Profile',
        description: 'Your profile summary with avatar and bio',
        icon: 'User',
        category: 'personal',
        defaultSize: { w: 4, h: 4 },
        availableIn: ['personal'],
    },
    token_balance: {
        type: 'token_balance',
        name: 'SBD Tokens',
        description: 'Your token balance and recent transactions',
        icon: 'Coins',
        category: 'personal',
        defaultSize: { w: 4, h: 3 },
        availableIn: ['personal'],
    },
    documents: {
        type: 'documents',
        name: 'Documents',
        description: 'Recent document uploads and processing status',
        icon: 'FileText',
        category: 'productivity',
        defaultSize: { w: 6, h: 4 },
        availableIn: ['personal'],
    },
    skills: {
        type: 'skills',
        name: 'Skills',
        description: 'Skill tree and recent logs',
        icon: 'TrendingUp',
        category: 'analytics',
        defaultSize: { w: 6, h: 5 },
        availableIn: ['personal'],
    },
    chat_sessions: {
        type: 'chat_sessions',
        name: 'Chat Sessions',
        description: 'Recent AI chat conversations',
        icon: 'MessageSquare',
        category: 'productivity',
        defaultSize: { w: 6, h: 4 },
        availableIn: ['personal'],
    },
    shop: {
        type: 'shop',
        name: 'Shop',
        description: 'Featured items and recent purchases',
        icon: 'ShoppingBag',
        category: 'personal',
        defaultSize: { w: 4, h: 4 },
        availableIn: ['personal'],
    },
    mood_tracker: {
        type: 'mood_tracker',
        name: 'Mood Tracker',
        description: 'Track your emotional state',
        icon: 'Heart',
        category: 'personal',
        defaultSize: { w: 8, h: 3 },
        availableIn: ['personal'],
    },
    quick_capture: {
        type: 'quick_capture',
        name: 'Quick Capture',
        description: 'Capture thoughts and notes quickly',
        icon: 'Edit',
        category: 'productivity',
        defaultSize: { w: 4, h: 4 },
        availableIn: ['personal'],
    },
    tasks: {
        type: 'tasks',
        name: 'Tasks',
        description: 'Your personal task list',
        icon: 'CheckCircle',
        category: 'productivity',
        defaultSize: { w: 4, h: 4 },
        availableIn: ['personal'],
    },
    recent_notes: {
        type: 'recent_notes',
        name: 'Recent Notes',
        description: 'Recently accessed notes',
        icon: 'Clock',
        category: 'productivity',
        defaultSize: { w: 4, h: 3 },
        availableIn: ['personal'],
    },
    // Family widgets
    family_overview: {
        type: 'family_overview',
        name: 'Family Overview',
        description: 'Family summary and quick stats',
        icon: 'Users',
        category: 'family',
        defaultSize: { w: 6, h: 3 },
        availableIn: ['family'],
    },
    family_members: {
        type: 'family_members',
        name: 'Family Members',
        description: 'List of family members and roles',
        icon: 'Users',
        category: 'family',
        defaultSize: { w: 6, h: 5 },
        availableIn: ['family'],
    },
    family_tokens: {
        type: 'family_tokens',
        name: 'Family Wallet',
        description: 'Family token balance and permissions',
        icon: 'Wallet',
        category: 'family',
        defaultSize: { w: 6, h: 4 },
        availableIn: ['family'],
    },
    purchase_requests: {
        type: 'purchase_requests',
        name: 'Purchase Requests',
        description: 'Pending purchase requests',
        icon: 'ShoppingCart',
        category: 'family',
        defaultSize: { w: 6, h: 5 },
        availableIn: ['family'],
    },
    family_activity: {
        type: 'family_activity',
        name: 'Family Activity',
        description: 'Recent family activity feed',
        icon: 'Activity',
        category: 'family',
        defaultSize: { w: 12, h: 4 },
        availableIn: ['family'],
    },
    // Team widgets
    workspace_overview: {
        type: 'workspace_overview',
        name: 'Workspace Overview',
        description: 'Workspace summary and stats',
        icon: 'Briefcase',
        category: 'team',
        defaultSize: { w: 6, h: 3 },
        availableIn: ['team'],
    },
    team_members: {
        type: 'team_members',
        name: 'Team Members',
        description: 'Workspace members and roles',
        icon: 'Users',
        category: 'team',
        defaultSize: { w: 6, h: 5 },
        availableIn: ['team'],
    },
    team_wallet: {
        type: 'team_wallet',
        name: 'Team Wallet',
        description: 'Team token balance and spending',
        icon: 'Wallet',
        category: 'team',
        defaultSize: { w: 6, h: 4 },
        availableIn: ['team'],
    },
    clubs: {
        type: 'clubs',
        name: 'Clubs',
        description: 'Your clubs and recent events',
        icon: 'Users',
        category: 'team',
        defaultSize: { w: 6, h: 5 },
        availableIn: ['team'],
    },
    team_activity: {
        type: 'team_activity',
        name: 'Team Activity',
        description: 'Recent team activity feed',
        icon: 'Activity',
        category: 'team',
        defaultSize: { w: 12, h: 4 },
        availableIn: ['team'],
    },
};
