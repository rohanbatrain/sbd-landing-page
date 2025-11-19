'use client';

/**
 * TokenBalanceWidget - Display SBD token balance
 */

import { useEffect, useState } from 'react';
import { WidgetContainer } from '../WidgetContainer';
import { Coins, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import axios from 'axios';

interface TokenBalanceWidgetProps {
    onDelete?: () => void;
    onToggleVisibility?: () => void;
    visible?: boolean;
}

export function TokenBalanceWidget({ onDelete, onToggleVisibility, visible }: TokenBalanceWidgetProps) {
    const [balance, setBalance] = useState<number>(0);
    const [loading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState<Array<{
        type: string;
        description?: string;
        amount: number;
    }>>([]);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const token = localStorage.getItem('access_token');
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/sbd-tokens/balance`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                setBalance(response.data.balance || 0);

                // Fetch recent transactions
                const txResponse = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/sbd-tokens/transactions?limit=3`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                setTransactions(txResponse.data.transactions || []);
            } catch (error) {
                console.error('Failed to fetch token balance:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBalance();
    }, []);

    return (
        <WidgetContainer
            title="SBD Tokens"
            icon={<Coins className="w-5 h-5" />}
            onDelete={onDelete}
            onToggleVisibility={onToggleVisibility}
            visible={visible}
        >
            <div className="space-y-4">
                {loading ? (
                    <div className="text-white/40 text-sm">Loading...</div>
                ) : (
                    <>
                        <div className="text-center py-4">
                            <div className="text-4xl font-bold text-white mb-1">{balance.toLocaleString()}</div>
                            <div className="text-white/60 text-sm">Available Balance</div>
                        </div>

                        {transactions.length > 0 && (
                            <div className="space-y-2">
                                <div className="text-white/60 text-xs font-medium">Recent Transactions</div>
                                {transactions.map((tx, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                    >
                                        <div className="flex items-center gap-2">
                                            {tx.type === 'credit' ? (
                                                <ArrowDownRight className="w-4 h-4 text-green-400" />
                                            ) : (
                                                <ArrowUpRight className="w-4 h-4 text-red-400" />
                                            )}
                                            <span className="text-white/90 text-sm">{tx.description || 'Transaction'}</span>
                                        </div>
                                        <span
                                            className={`text-sm font-medium ${tx.type === 'credit' ? 'text-green-400' : 'text-red-400'
                                                }`}
                                        >
                                            {tx.type === 'credit' ? '+' : '-'}
                                            {tx.amount}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </WidgetContainer>
    );
}
