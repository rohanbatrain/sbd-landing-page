'use client';

/**
 * MoodTrackerWidget - Track emotional state
 */

import { useState } from 'react';
import { WidgetContainer } from '../WidgetContainer';
import { Heart } from 'lucide-react';

const moods = [
    { emoji: '😊', label: 'Happy', color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20' },
    { emoji: '😌', label: 'Calm', color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
    { emoji: '😰', label: 'Stressed', color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/20' },
    { emoji: '😴', label: 'Tired', color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20' },
    { emoji: '🤔', label: 'Focus', color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
];

interface MoodTrackerWidgetProps {
    onDelete?: () => void;
    onToggleVisibility?: () => void;
    visible?: boolean;
}

export function MoodTrackerWidget({ onDelete, onToggleVisibility, visible }: MoodTrackerWidgetProps) {
    const [selectedMood, setSelectedMood] = useState<string | null>(null);

    return (
        <WidgetContainer
            title="Mood Tracker"
            icon={<Heart className="w-5 h-5" />}
            onDelete={onDelete}
            onToggleVisibility={onToggleVisibility}
            visible={visible}
        >
            <div className="space-y-3">
                <p className="text-white/60 text-sm">How are you feeling today?</p>
                <div className="grid grid-cols-5 gap-2">
                    {moods.map((mood) => (
                        <button
                            key={mood.label}
                            onClick={() => setSelectedMood(mood.label)}
                            className={`group relative p-2 rounded-xl border transition-all duration-200 ${selectedMood === mood.label
                                    ? `${mood.bg} ${mood.border} ring-1 ring-white/20`
                                    : 'border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10'
                                }`}
                        >
                            <div className="text-2xl mb-1 transform group-hover:scale-110 transition-transform duration-200">
                                {mood.emoji}
                            </div>
                            <div className={`text-xs font-medium ${mood.color}`}>{mood.label}</div>
                        </button>
                    ))}
                </div>
            </div>
        </WidgetContainer>
    );
}
