import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Second Brain Database - Open Source Knowledge Management Platform",
    description: "Production-ready FastAPI application with document intelligence, family collaboration, workspace management, and MCP server integration. Self-host or use our cloud service.",
    keywords: ["knowledge management", "second brain", "document intelligence", "AI", "RAG", "FastAPI", "MongoDB", "self-hosted", "open source"],
    authors: [{ name: "Rohan Batrain", url: "https://github.com/rohanbatrain" }],
    creator: "Rohan Batrain",
    publisher: "Second Brain Database",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://sbd.rohanbatra.in",
        title: "Second Brain Database - Open Source Knowledge Management",
        description: "Production-ready knowledge management platform with AI, document processing, and collaboration features.",
        siteName: "Second Brain Database",
    },
    twitter: {
        card: "summary_large_image",
        title: "Second Brain Database",
        description: "Open source knowledge management platform with AI and collaboration features",
        creator: "@rohanbatrain",
    },
    metadataBase: new URL("https://sbd.rohanbatra.in"),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
