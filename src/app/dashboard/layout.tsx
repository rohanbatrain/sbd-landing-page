'use client';

import { Sidebar } from '@/components/Sidebar';
import { useWorkspaceStore } from '@/lib/store/workspace-store';
import { useAuthStore } from '@/lib/store/auth-store';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { currentWorkspace, setWorkspace, isCollapsed } = useWorkspaceStore();
    const { user, logout, isAuthenticated } = useAuthStore();
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#040508] via-[#0C0F16] to-[#040508]">
            <Sidebar
                currentWorkspace={currentWorkspace}
                onWorkspaceChange={setWorkspace}
                onLogout={handleLogout}
            />

            <div className={`flex flex-col min-h-screen transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-72'}`}>
                {/* Header removed as per user request (sidebar handles navigation and context) */}

                {/* Main Content */}
                <main className="p-6 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
