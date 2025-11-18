'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store/auth-store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, User, Settings, LogOut } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const { user, logout, isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, router]);

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#040508] via-[#0C0F15] to-[#040508] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#040508] via-[#0C0F15] to-[#040508] p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full">
              <Database className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Second Brain Database</h1>
              <p className="text-white/70">Welcome back, {user?.username}!</p>
            </div>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile
              </CardTitle>
              <CardDescription className="text-white/70">
                Manage your account settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/60">
                Email: {user?.email}
              </p>
              <p className="text-sm text-white/60">
                Username: {user?.username}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Database className="w-5 h-5" />
                Database
              </CardTitle>
              <CardDescription className="text-white/70">
                Access your knowledge base
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/60">
                Your Second Brain Database is ready to use.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Settings
              </CardTitle>
              <CardDescription className="text-white/70">
                Configure your preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/60">
                Customize your experience.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Coming Soon Message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
            <Database className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Dashboard Coming Soon</h2>
          <p className="text-white/70 max-w-md mx-auto">
            The full Second Brain Database dashboard is currently under development.
            Authentication is working correctly!
          </p>
        </div>
      </div>
    </div>
  );
}