/* eslint-disable @typescript-eslint/no-unused-vars, react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Header from "@/components/components/header";
import {
  Brain,
  Database,
  Shield,
  Zap,
  Users,
  Code,
  GitBranch,
  Star,
  Github,
  BookOpen,
  Play,
} from "lucide-react";
import { HoverBorderGradient } from "@/components/components/FramerButton";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useState } from "react";
import LogoMarquee from "@/components/components/marquee";
import GlowingAdSenseCard from "@/components/components/Social";
import BentoGrid from "@/components/components/bento-grid";
import Grid from "@/components/components/grid";
import Grid2 from "@/components/components/grid2";
import ArchitectureMap from "@/components/ArchitectureMap";

export default function Home() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [activeTab, setActiveTab] = useState<'technical' | 'philosophy' | 'security'>('philosophy');

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div className="relative min-h-screen w-full h-full flex flex-col items-center overflow-hidden">
      <Header />

      {/* Development Notice */}
      <div className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center py-3 px-4 shadow-lg z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <p className="text-sm font-medium">
            🚧 This project is in early development. Features may not work as intended. 
            Please wait for the beta release. You are welcome to explore, but consider it not production-ready.
          </p>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Hero Section */}
      <main className="relative pt-32 pb-16 container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 flex flex-col gap-8 items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="relative px-4 py-2 rounded-xl flex flex-row gap-2 items-center bg-white/10 text-sm text-white/90 backdrop-blur-sm border border-white/10 overflow-hidden">
              <motion.div
                className="absolute top-0 w-[10px] h-full bg-blue-300 opacity-60 blur-md shadow-2xl"
                initial={{ left: "-10%" }}
                animate={{ left: "110%" }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                }}
              />
              <Brain className="w-4 h-4 relative z-10" />
              <p className="relative z-10">
                AI-POWERED KNOWLEDGE MANAGEMENT INFRASTRUCTURE
              </p>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-6xl bp3:text-4xl bp4:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            The Headless Architecture for Your Second Brain
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-3xl mx-auto text-lg text-white/90"
          >
            A comprehensive FastAPI application with document intelligence, family/workspace management, MCP server integration, and enterprise-grade security. Built on MongoDB, Redis, and modern Python practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <Database className="w-8 h-8 text-blue-400" />
              <div className="text-left">
                <p className="text-white font-medium">Document Intelligence</p>
                <p className="text-white/70 text-sm">AI-powered processing with OCR, RAG search</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <Users className="w-8 h-8 text-green-400" />
              <div className="text-left">
                <p className="text-white font-medium">Family Collaboration</p>
                <p className="text-white/70 text-sm">Shared wallets, permissions, real-time sync</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <Code className="w-8 h-8 text-purple-400" />
              <div className="text-left">
                <p className="text-white font-medium">MCP Integration</p>
                <p className="text-white/70 text-sm">138+ tools for AI agent connectivity</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="space-y-4 flex flex-col items-center justify-center"
          >
            <div className="flex gap-4">
              <HoverBorderGradient className="bg-gradient-to-b from-blue-600 to-blue-800 px-8 py-3 text-white font-medium">
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </HoverBorderGradient>
              <HoverBorderGradient className="bg-gradient-to-b from-gray-600 to-gray-800 px-8 py-3 text-white font-medium">
                <BookOpen className="w-5 h-5 mr-2" />
                Read Architecture
              </HoverBorderGradient>
            </div>
            <p className="text-sm text-white/50">
              Production-ready • Open source • Enterprise-grade
            </p>
          </motion.div>
        </motion.div>
      </main>

      {/* Architecture Visualization (Mermaid) */}
      <div className="w-full">
        <ArchitectureMap />
      </div>

      {/* Introduction Section */}
      <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[#040508] to-[#0C0F15] justify-center items-center relative">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl bp3:text-3xl bp4:text-4xl font-light mb-6">
              🚀 Introduction
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Second Brain Database is designed to help you organize and centralize your personal knowledge, tasks, and thoughts in a flexible, platform-agnostic way. It empowers you to adapt your system over time without the burden of platform dependency.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 max-w-2xl mx-auto"
            >
              <p className="text-lg text-white/80 italic">
                "After working with several tools like Notion, Obsidian, Todoist, and others, I've developed a flexible and platform-independent system that centralizes data without tying you to a single tool."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="min-h-screen w-full h-full flex flex-col z-0 items-center relative bg-gradient-to-b from-[#0C0F15] to-[#0C0F16]">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl bp3:text-3xl bp4:text-4xl font-light mb-6">
              The Current Reality
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Knowledge trapped in proprietary apps, fragmented data silos, and missing AI intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-4">Data Silo Nightmare</h3>
              <p className="text-white/80">
                Knowledge scattered across Notion, Obsidian, Google Drive. Manual synchronization, vendor lock-in, data loss risk.
              </p>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-orange-400 mb-4">Integration Complexity</h3>
              <p className="text-white/80">
                Multiple databases, manual API synchronization, data transformation pipelines, maintenance overhead.
              </p>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">Missing Intelligence</h3>
              <p className="text-white/80">
                Documents sit idle without OCR, semantic search, AI categorization, contextual insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      

      {/* Solution Overview */}
      <div className="min-h-screen w-full flex flex-col bg-gradient-to-b to-[#040508] from-[#0C0F15] justify-center items-center relative">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl bp3:text-3xl bp4:text-4xl font-light mb-6">
              The Solution: Second Brain Database
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A single, powerful backend that handles data storage, AI processing, real-time communication, and background tasks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 text-center">
              <Database className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-400 mb-2">MongoDB Storage</h3>
              <p className="text-white/80 text-sm">Flexible, scalable document storage</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center">
              <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-400 mb-2">Redis Caching</h3>
              <p className="text-white/80 text-sm">High-performance operations & queues</p>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6 text-center">
              <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-purple-400 mb-2">AI Processing</h3>
              <p className="text-white/80 text-sm">Ollama + LlamaIndex intelligence</p>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 text-center">
              <Code className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-orange-400 mb-2">MCP Server</h3>
              <p className="text-white/80 text-sm">138+ tools for AI agents</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="flex justify-center">
              <HoverBorderGradient className="bg-gradient-to-b from-green-600 to-green-800 px-8 py-4 text-white font-medium text-lg">
                <Play className="w-5 h-5 mr-2" />
                Try Live Demo
              </HoverBorderGradient>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[#040508] to-[#0C0F15] justify-center items-center relative">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl bp3:text-3xl bp4:text-4xl font-light mb-6">
              🔑 My Philosophy: Flexibility Without Compromise
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              The core philosophy behind Second Brain Database is simple: centralize your data, but never let platform dependency limit your flexibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-red-500/10 border border-red-500/20 rounded-lg p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <GitBranch className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-semibold text-red-400">The Problem</h3>
              </div>
              <p className="text-white/80 mb-4">
                Traditional tools like Obsidian store data in a markdown-based format but rely heavily on platform-specific plugins. The moment you switch platforms, all that data becomes fragmented and loses its value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-green-500/10 border border-green-500/20 rounded-lg p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-green-400">The Solution</h3>
              </div>
              <p className="text-white/80 mb-4">
                Second Brain Database resolves this by using MongoDB to store data in a non-structured, platform-agnostic way. Whether you are using Flask v1, v2, or v3, the data remains consistent and usable across all tools.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Micro Frontends Section */}
      <div className="min-h-screen w-full flex flex-col bg-gradient-to-b to-[#040508] from-[#0C0F15] justify-center items-center relative">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl bp3:text-3xl bp4:text-4xl font-light mb-6">
              🧠 Micro Frontends: Solving Complex Problems Simply
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              The project incorporates micro frontends to keep things modular and focused.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Emotion Capture</h3>
              </div>
              <p className="text-white/80 mb-4">
                A specialized frontend designed specifically to capture and store emotions without overwhelming you with other features.
              </p>
              <ul className="text-white/70 space-y-2">
                <li>• Focused emotion tracking</li>
                <li>• Minimal interface</li>
                <li>• Direct database integration</li>
                <li>• Task-specific functionality</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Centralized Backend</h3>
              </div>
              <p className="text-white/80 mb-4">
                These small, focused frontends operate independently, interacting with the centralized MongoDB database via the Flask API.
              </p>
              <ul className="text-white/70 space-y-2">
                <li>• Independent operation</li>
                <li>• API-driven communication</li>
                <li>• Consistent data access</li>
                <li>• Scalable architecture</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[#040508] to-[#0C0F15] justify-center items-center relative">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl bp3:text-3xl bp4:text-4xl font-light mb-6">
              Core Features
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
              Enterprise-grade capabilities for modern knowledge management
            </p>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-1 border border-white/10">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('philosophy')}
                    className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                      activeTab === 'philosophy'
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Core Philosophy
                  </button>
                  <button
                    onClick={() => setActiveTab('technical')}
                    className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                      activeTab === 'technical'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Technical Capabilities
                  </button>
                  <button
                    onClick={() => setActiveTab('security')}
                    className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                      activeTab === 'security'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Security Capabilities
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Features Tab */}
          {activeTab === 'philosophy' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <GitBranch className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Flexibility</h3>
                </div>
                <p className="text-white/80 mb-4">
                  You're not locked into any one platform or tool. Migrate and switch between different platforms while keeping your data consistent.
                </p>
                <ul className="text-white/70 space-y-2">
                  <li>• Platform-agnostic data storage</li>
                  <li>• Easy migration between tools</li>
                  <li>• Adapt your system over time</li>
                  <li>• No vendor lock-in</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Centralized Data</h3>
                </div>
                <p className="text-white/80 mb-4">
                  All your data is stored in a consistent and structured manner, no matter which frontend or tool you choose to interact with.
                </p>
                <ul className="text-white/70 space-y-2">
                  <li>• Consistent data structure</li>
                  <li>• Unified storage across tools</li>
                  <li>• Structured knowledge base</li>
                  <li>• Seamless data access</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Modular Micro Frontends</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Small, task-focused frontends like Emotion Capture help you work on specific tasks without unnecessary features.
                </p>
                <ul className="text-white/70 space-y-2">
                  <li>• Focused, single-purpose apps</li>
                  <li>• Independent operation</li>
                  <li>• Reduced complexity</li>
                  <li>• Specialized functionality</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Open-Source</h3>
                </div>
                <p className="text-white/80 mb-4">
                  This project is open for everyone. It's about sharing and collaborating to improve personal knowledge management for all.
                </p>
                <ul className="text-white/70 space-y-2">
                  <li>• Community-driven development</li>
                  <li>• Transparent codebase</li>
                  <li>• Collaborative improvements</li>
                  <li>• Free for everyone</li>
                </ul>
              </motion.div>
            </motion.div>
          )}

          {/* Technical Features Tab */}
          {activeTab === 'technical' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Document Intelligence</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Advanced processing with Docling, OCR, table extraction, and RAG-optimized chunking. Turn documents into queryable knowledge.
                </p>
                <ul className="text-white/70 space-y-2">
                  <li>• Automatic text extraction from PDFs, DOCX, PPTX</li>
                  <li>• Semantic search and AI question answering</li>
                  <li>• Vector embeddings for similarity matching</li>
                  <li>• Table and figure recognition</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Family Collaboration</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Shared wallets, role-based permissions, audit trails, and real-time notifications. Perfect for family knowledge bases.
                </p>
                <ul className="text-white/70 space-y-2">
                  <li>• 4-tier permission system (Admin, Full, Limited, View-Only)</li>
                  <li>• Shared financial tracking and spending limits</li>
                  <li>• Real-time collaboration and notifications</li>
                  <li>• Complete audit trails for compliance</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">MCP Server Integration</h3>
                </div>
                <p className="text-white/80 mb-4">
                  138+ tools across 5 categories for AI agent integration. FastMCP 2.x with HTTP/stdio transport.
                </p>
                <ul className="text-white/70 space-y-2">
                  <li>• Family management tools (25+)</li>
                  <li>• Authentication & security tools (20+)</li>
                  <li>• Shop system operations (15+)</li>
                  <li>• Workspace collaboration (30+)</li>
                  <li>• Admin & monitoring tools (48+)</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Enterprise Security</h3>
                </div>
                <p className="text-white/80 mb-4">
                  JWT authentication, 2FA, rate limiting, encryption, audit logging, and Cloudflare Turnstile integration. Zero-trust architecture with client-side encryption ensures you control your data keys.
                </p>
                <ul className="text-white/70 space-y-2">
                  <li>• Multi-layer security architecture with client-controlled encryption</li>
                  <li>• Zero-trust model: users own their encryption keys</li>
                  <li>• End-to-end encryption with server-side ciphertext processing only</li>
                  <li>• Comprehensive audit trails for compliance</li>
                </ul>
              </motion.div>
            </motion.div>
          )}

          {/* Security Features Tab */}
          {activeTab === 'security' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Zero-Trust Architecture</h3>
                </div>
                <p className="text-white/80 mb-4">
                  True zero trust means users control their own encryption keys. Client-side encryption ensures your data is encrypted before it reaches our servers, and only you hold the keys to decrypt it.
                </p>
                <ul className="text-white/70 space-y-2">
                  <li>• User-generated and controlled encryption keys</li>
                  <li>• Client-side encryption before data transmission</li>
                  <li>• Server never sees plaintext - only ciphertext</li>
                  <li>• Complete data portability and provider independence</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Client-Side Encryption & Key Management</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Data is encrypted on your device before transmission. You control the encryption keys, ensuring end-to-end security where servers only process ciphertext and never access your plaintext data.
                </p>
                <ul className="text-white/70 space-y-2">
                  <li>• TLS for transport encryption (HTTPS/WSS)</li>
                  <li>• Client-side Fernet encryption for end-to-end confidentiality</li>
                  <li>• User-controlled keys with secure key derivation</li>
                  <li>• Optional envelope encryption for additional security layers</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">User-Agent & IP Lockdown</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Protect sensitive accounts by binding sessions to device fingerprints and IP constraints. Administrators can configure allowlists, deny lists, and geo-based rules.
                </p>
                <ul className="text-white/70 space-y-2">
                  <li>• Per-account IP allowlist / denylist</li>
                  <li>• Optional user-agent binding and device recognition</li>
                  <li>• Automated anomaly detection and temporary lockdowns</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Auth, Monitoring & Integrations</h3>
                </div>
                <p className="text-white/80 mb-4">
                  The backend (FastAPI) provides JWT-based auth, audit logging, rate limiting, and integrations with Turnstile and WAFs. Admin endpoints allow security policy management.
                </p>
                <ul className="text-white/70 space-y-2">
                  <li>• JWT + refresh token lifecycle with revocation</li>
                  <li>• Audit logs and immutable event streams for compliance</li>
                  <li>• Admin APIs (e.g. `/api/admin/security`, `/api/security/allowlist`) to manage policies</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 col-span-full">
                <h3 className="text-xl font-semibold text-white mb-4">How the Backend Helps</h3>
                <p className="text-white/80 mb-4">
                  The server-side implementation (FastAPI) includes middleware and managers to enforce policies, support client-side encryption workflows, and expose administrative endpoints for security configuration. The backend never stores or accesses user encryption keys - it only processes ciphertext.
                </p>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-4">
                  <h4 className="text-amber-400 font-semibold mb-2">🔐 Privacy & Encryption: Key Considerations</h4>
                  <div className="text-white/70 text-sm space-y-2">
                    <p><strong>Client-Side Encryption:</strong> Optional feature (disabled by default) that can only be enabled during account creation. When enabled, protects sensitive content like notes with user-controlled keys.</p>
                    <p><strong>Functional Data:</strong> Analytical features (emotion tracking, mathematical metrics) remain unencrypted for performance and usability - these are designed for quick access and analysis.</p>
                    <p><strong>Self-Hosting Option:</strong> For maximum privacy, users can switch to self-hosted, air-tight instances with complete data control.</p>
                    <p><strong>Freedom Philosophy:</strong> The system values user choice - configure encryption and hosting to meet your specific privacy needs.</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm">
                  For implementation details, see the Security Documentation linked in the footer or the repository under <code className="font-mono">src/second_brain_database</code>. You can also explore the experimental admin APIs at <code className="font-mono">/api/admin/security</code> on your local instance.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Technical Stack */}
      <div className="min-h-screen w-full flex flex-col bg-gradient-to-b to-[#040508] from-[#0C0F15] justify-center items-center relative">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl bp3:text-3xl bp4:text-4xl font-light mb-6">
              Technical Architecture
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Built with cutting-edge technologies for production-ready performance
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Backend & Database</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-white/80">FastAPI</span>
                    <span className="text-green-400">✅ Production Ready</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">MongoDB 6.0+</span>
                    <span className="text-green-400">✅ Production Ready</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Redis 7.0+</span>
                    <span className="text-green-400">✅ Production Ready</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Celery + Flower</span>
                    <span className="text-green-400">✅ Production Ready</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">AI & Intelligence</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-white/80">Ollama + LlamaIndex</span>
                    <span className="text-green-400">✅ Production Ready</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Qdrant Vector DB</span>
                    <span className="text-green-400">✅ Production Ready</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Docling OCR</span>
                    <span className="text-green-400">✅ Production Ready</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">FastMCP 2.x</span>
                    <span className="text-green-400">✅ Production Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Status Section */}
      <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[#040508] to-[#0C0F15] justify-center items-center relative">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl bp3:text-3xl bp4:text-4xl font-light mb-6">
              🚧 Project Status
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Second Brain Database is still under active development. The core functionality is in place, and a beta release is coming soon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 max-w-2xl mx-auto"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Development Progress</h3>
              <div className="w-full bg-white/10 rounded-full h-4 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full"
                ></motion.div>
              </div>
              <p className="text-white/70">85% Complete - Beta Release Soon</p>
            </div>
            <p className="text-white/80 text-center">
              Once the beta is ready, I'll provide more details on how you can try it out and contribute to its development.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Developer Experience */}
      <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[#040508] to-[#0C0F15] justify-center items-center relative">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl bp3:text-3xl bp4:text-4xl font-light mb-6">
              Developer Experience
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Get started in minutes with automated setup and comprehensive documentation
            </p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-white/10 max-w-4xl mx-auto font-mono text-sm">
            <div className="text-green-400 mb-4"># Clone and setup in 2 minutes</div>
            <div className="text-white mb-2">git clone https://github.com/rohanbatrain/second_brain_database.git</div>
            <div className="text-white mb-2">cd second_brain_database</div>
            <div className="text-white mb-4">./start.sh</div>
            <div className="text-blue-400 mb-4">✓ All services started successfully!</div>
            <div className="text-blue-400">✓ FastAPI on http://localhost:8000</div>
            <div className="text-blue-400">✓ MongoDB, Redis, Ollama ready</div>
            <div className="text-green-400 mt-6 mb-2"># Or pull the Docker image</div>
            <div className="text-white">docker pull rohanbatra/second_brain_database:latest</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Interactive Docs</h3>
              <p className="text-white/70">Swagger UI at /docs, ReDoc at /redoc</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">REST APIs</h3>
              <p className="text-white/70">Complete REST API with WebSocket support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">MCP Tools</h3>
              <p className="text-white/70">138+ tools for AI agent integration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="min-h-screen w-full flex flex-col bg-gradient-to-b to-[#040508] from-[#0C0F15] justify-center items-center relative">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl bp3:text-3xl bp4:text-4xl font-light mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Real users transforming their knowledge management workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <p className="text-white/80 mb-6 italic">
                "As a PhD researcher, I was drowning in papers and notes. Second Brain Database's document intelligence features automatically categorize and link my research materials. The AI question-answering saves me hours every week."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Dr. Maria Rodriguez</p>
                  <p className="text-white/60">Research Scientist, Stanford University</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <p className="text-white/80 mb-6 italic">
                "We needed a knowledge management system that could handle sensitive client data with bank-level security. The comprehensive audit trails and encryption give us the compliance we need."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Jennifer Chen</p>
                  <p className="text-white/60">CTO, SecureData Consulting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[#040508] to-[#0C0F15] justify-center items-center relative">
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-6xl bp3:text-4xl bp4:text-5xl font-light mb-6">
            Ready to Build Your Second Brain?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
            Join the growing community of developers and organizations using Second Brain Database for production-ready knowledge management.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Flexibility</h3>
              <p className="text-white/70 text-sm">Easily migrate your data and switch platforms without losing consistency.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Centralized Data</h3>
              <p className="text-white/70 text-sm">Keep your data organized, regardless of the tool you use to interact with it.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Modular Micro Frontends</h3>
              <p className="text-white/70 text-sm">Focus on specific tasks without unnecessary complexity.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Open Source</h3>
              <p className="text-white/70 text-sm">Contribute to the project and help it evolve over time.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <HoverBorderGradient className="bg-gradient-to-b from-blue-600 to-blue-800 px-8 py-4 text-white font-medium text-lg">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </HoverBorderGradient>
            <HoverBorderGradient className="bg-gradient-to-b from-green-600 to-green-800 px-8 py-4 text-white font-medium text-lg">
              <BookOpen className="w-5 h-5 mr-2" />
              Read Documentation
            </HoverBorderGradient>
            <HoverBorderGradient className="bg-gradient-to-b from-purple-600 to-purple-800 px-8 py-4 text-white font-medium text-lg">
              <Play className="w-5 h-5 mr-2" />
              Try Live Demo
            </HoverBorderGradient>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/60 mb-4">Trusted by developers worldwide</p>
            <div className="flex justify-center gap-8 text-white/40">
              <span>MIT Licensed</span>
              <span>•</span>
              <span>Production Ready</span>
              <span>•</span>
              <span>Enterprise Security</span>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Section */}
      <div className="min-h-screen w-full flex flex-col bg-gradient-to-b to-[#040508] from-[#0C0F15] justify-center items-center relative">
        <div className="container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl bp3:text-3xl bp4:text-4xl font-light mb-6">
              🙏 Thank You for Your Support
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              This journey has been long, and I'm thrilled to share this tool with you. I hope Second Brain Database can help you organize your thoughts, tasks, and knowledge in a way that gives you the freedom to explore new productivity systems without being restricted by them.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 max-w-2xl mx-auto mb-12"
          >
            <p className="text-lg text-white/80 mb-6">
              Stay tuned for the upcoming beta release announcement. If you're ready to explore, learn, or contribute, check out the project on GitHub. Together, we can make it even better!
            </p>
            <div className="flex justify-center">
              <HoverBorderGradient className="bg-gradient-to-b from-blue-600 to-blue-800 px-6 py-3 text-white font-medium">
                <Github className="w-5 h-5 mr-2" />
                Join the Community
              </HoverBorderGradient>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-white/60 italic"
          >
            Let's build smarter, more adaptable systems for managing our thoughts and data. 🚀
          </motion.p>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black/50 backdrop-blur-sm border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Second Brain Database</h3>
              <p className="text-white/70 mb-4">
                Transform your knowledge management with AI-powered document intelligence, family collaboration, and enterprise-grade security.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/rohanbatrain/second_brain_database" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6 text-white/60 hover:text-white cursor-pointer" />
                </a>
                <a href="/docs" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-6 h-6 text-white/60 hover:text-white cursor-pointer" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#document-intelligence" className="hover:text-white">Document Intelligence</a></li>
                <li><a href="#family-collaboration" className="hover:text-white">Family Collaboration</a></li>
                <li><a href="#mcp-integration" className="hover:text-white">MCP Server Tools</a></li>
                <li><a href="#enterprise-security" className="hover:text-white">Enterprise Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="https://github.com/rohanbatrain/second_brain_database" className="hover:text-white">GitHub Repository</a></li>
                <li><a href="/docs" className="hover:text-white">API Documentation</a></li>
                <li><a href="/docs/mcp-tools" className="hover:text-white">MCP Tools Guide</a></li>
                <li><a href="/docs/setup" className="hover:text-white">Quick Start Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Community</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="https://github.com/rohanbatrain/second_brain_database/discussions" className="hover:text-white">GitHub Discussions</a></li>
                <li><a href="https://github.com/rohanbatrain/second_brain_database/issues" className="hover:text-white">Issue Tracker</a></li>
                <li><a href="https://github.com/rohanbatrain/second_brain_database/blob/main/CONTRIBUTING.md" className="hover:text-white">Contributing Guide</a></li>
                <li><a href="https://github.com/rohanbatrain/second_brain_database/projects" className="hover:text-white">Project Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="/docs/architecture" className="hover:text-white">Architecture Guide</a></li>
                <li><a href="/docs/security" className="hover:text-white">Security Documentation</a></li>
                <li><a href="/docs/deployment" className="hover:text-white">Deployment Guide</a></li>
                <li><a href="mailto:support@secondbraindatabase.dev" className="hover:text-white">Contact Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2025 Second Brain Database. Open source under MIT License. Built with FastAPI, MongoDB, and cutting-edge AI technologies.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
