import React from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50">
      <nav className="container flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold">
          Second Brain
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/features">Features</Link>
          <Link href="/demo">Demo</Link>
          <Link href="/docs">Docs</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline">Contact Us</Button>
          <Button variant="primary">Get Started</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
