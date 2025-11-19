"use client";

import React from "react";

type RibbonProps = {
  children: React.ReactNode;
  color?: string; // Tailwind bg color class, e.g. 'bg-green-600'
  className?: string;
  /**
   * If `inset` is true the ribbon will be placed inside the card corner
   * with a smaller size and reduced rotation so it 'fits' without overflowing.
   */
  inset?: boolean;
};

export default function Ribbon({ children, color = "bg-purple-600", className = "", inset = false }: RibbonProps) {
  // two placement modes: inset (fits inside card) or floating (original)
  const wrapperClass = inset
    ? `absolute right-4 top-4 transform -translate-y-0 rotate-6 pointer-events-none ${className}`
    : `absolute -right-8 top-3 transform rotate-12 pointer-events-none ${className}`;

  const innerClass = inset
    ? `px-3 py-1 rounded-md text-xs font-semibold text-white shadow-sm ${color} opacity-95 pointer-events-none`
    : `px-4 py-1 rounded-md text-xs font-semibold text-white shadow-md ${color} opacity-95 pointer-events-none`;

  return (
    <div className={wrapperClass} style={{ zIndex: 9999 }}>
      <div className={innerClass}>{children}</div>
    </div>
  );
}
