import type { Metadata } from "next";
import "./globals.css";
import { ClarityScript } from "@/components/clarity";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "ZJU Charger",
  description: "便捷高效的充电桩查询助手",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="bg-background font-sans antialiased">
        {children}
        <Toaster position="top-center" richColors />
        <ClarityScript />
      </body>
    </html>
  );
}
