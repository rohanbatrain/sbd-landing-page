'use client';

/**
 * QuickCaptureWidget - Quick note capture
 */

import { useState } from 'react';
import { WidgetContainer } from '../WidgetContainer';
import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';

interface QuickCaptureWidgetProps {
    onDelete?: () => void;
    onToggleVisibility?: () => void;
    visible?: boolean;
}

export function QuickCaptureWidget({ onDelete, onToggleVisibility, visible }: QuickCaptureWidgetProps) {
    const [note, setNote] = useState('');

    const handleSave = () => {
        // TODO: Integrate with documents API
        console.log('Saving note:', note);
        setNote('');
    };

    return (
        <WidgetContainer
            title="Quick Capture"
            icon={<Brain className="w-5 h-5" />}
            onDelete={onDelete}
            onToggleVisibility={onToggleVisibility}
            visible={visible}
        >
            <div className="flex flex-col h-full space-y-3">
                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Capture a thought..."
                    className="flex-1 min-h-[100px] bg-black/20 border border-white/10 text-white placeholder:text-white/30 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
                <div className="flex justify-between items-center">
                    <p className="text-white/30 text-xs">{note.length} chars</p>
                    <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20"
                        disabled={!note.trim()}
                        onClick={handleSave}
                    >
                        Save Note
                    </Button>
                </div>
            </div>
        </WidgetContainer>
    );
}
