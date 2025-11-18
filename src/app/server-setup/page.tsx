'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useServerStore } from '@/lib/store/server-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function ServerSetupPage() {
  const router = useRouter();
  const { setServerUrl, isConfigured } = useServerStore();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    apiUrl: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.apiUrl) {
      newErrors.apiUrl = 'API URL is required';
    } else if (!formData.apiUrl.startsWith('http://') && !formData.apiUrl.startsWith('https://')) {
      newErrors.apiUrl = 'API URL must start with http:// or https://';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // For now, just set the API URL. In a real implementation, this would
      // validate and save all server configuration to the backend
      setServerUrl(formData.apiUrl);
      toast.success('Server configured successfully!');
      router.push('/auth/login');
    } catch (error) {
      console.error('Server configuration error:', error);
      toast.error('Failed to configure server. Please check your settings.');
      setIsLoading(false);
    }
  };

  if (isConfigured) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#040508] via-[#0C0F15] to-[#040508] flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-2xl border-0 bg-white/5 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mb-4 mx-auto">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl font-semibold text-white">Server Configured</CardTitle>
            <CardDescription className="text-white/70">
              Your Second Brain Database server is already configured and ready to use.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button
              onClick={() => router.push('/auth/login')}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              Go to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#040508] via-[#0C0F15] to-[#040508] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mb-4">
            <Server className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Server Setup</h1>
          <p className="text-white/70">Point the app at an existing Second Brain Database API</p>
          <p className="text-sm text-white/50 mt-1">Only the API URL is required</p>
        </div>

        <Card className="shadow-2xl border-0 bg-white/5 backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-xl font-semibold text-center text-white">Configuration</CardTitle>
            <CardDescription className="text-center text-white/70">
              Enter your server configuration details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="apiUrl" className="text-sm font-medium text-white flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  API URL
                </Label>
                <Input
                  id="apiUrl"
                  type="text"
                  placeholder="http://localhost:8000"
                  value={formData.apiUrl}
                  onChange={(e) => setFormData({ ...formData, apiUrl: e.target.value })}
                  disabled={isLoading}
                  className={`h-11 transition-all duration-200 bg-white/10 border-white/20 text-white placeholder:text-white/50 ${
                    errors.apiUrl ? 'border-red-300 focus:border-red-500' : 'border-white/20 focus:border-orange-500'
                  }`}
                />
                {errors.apiUrl && (
                  <p className="text-sm text-red-400 flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                    {errors.apiUrl}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Configuring server...
                  </div>
                ) : (
                  'Configure Server'
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-white/60">
                Need help with configuration?{' '}
                <a
                  href="/docs"
                  className="text-orange-400 hover:text-orange-300 font-medium transition-colors hover:underline"
                >
                  View documentation
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}