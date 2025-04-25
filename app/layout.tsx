import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Novafem",
    description: "Novafem application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
            </body>
        </html>
    );
}
