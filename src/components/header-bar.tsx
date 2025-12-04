"use client";

import { BookOpen, Github, Mail, Moon, Sun } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatTimestamp } from "@/lib/time";

interface HeaderBarProps {
  lastUpdated?: string;
  onToggleTheme: () => void;
  theme: "light" | "dark";
}

export function HeaderBar({
  lastUpdated,
  onToggleTheme,
  theme,
}: HeaderBarProps) {
  const [manualOpen, setManualOpen] = useState(false);
  return (
    <header className="rounded-2xl border bg-card p-4 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="ZJU Charger Logo"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <div className="flex items-end gap-3">
            <h1 className="text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
              ZJU Charger
            </h1>
            <span className="text-sm text-muted-foreground">by PhilFan</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="text-muted-foreground">
            {formatTimestamp(lastUpdated)}
          </span>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Phil-Fan/ZJU-Charger"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-emerald-500/70 bg-emerald-50 p-2 text-emerald-600 shadow-sm transition hover:bg-emerald-500 hover:text-white dark:bg-emerald-500/10 dark:text-emerald-300"
              aria-label="GitHub 仓库"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="mailto:hw.phil.fan@gmail.com"
              className="rounded-full border border-muted-foreground/40 p-2 text-muted-foreground transition hover:bg-muted-foreground/10 dark:border-muted-foreground/40 dark:text-muted-foreground"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <Dialog open={manualOpen} onOpenChange={setManualOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border border-muted-foreground/40 p-2 text-muted-foreground transition hover:bg-muted-foreground/10 dark:border-muted-foreground/40 dark:text-muted-foreground"
                  aria-label="使用说明书"
                >
                  <BookOpen className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="space-y-4" hideCloseButton>
                <DialogHeader>
                  <DialogTitle>使用说明书</DialogTitle>
                </DialogHeader>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <ol className="space-y-2 list-decimal pl-5">
                    <li>点击校区卡片切换校区，点击服务商列表可以筛选服务商。</li>
                    <li>长按或双击地图上到站点进入导航面板。</li>
                    <li>站点列表点击星标关注站点。</li>
                    <li>点击右上角按钮切换颜色模式。</li>
                    <li>
                      点击 Safari 分享 - 添加到主屏幕可以将站点添加到桌面。
                    </li>
                  </ol>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button size="sm">了解！</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <Button
            variant="secondary"
            size="icon"
            onClick={onToggleTheme}
            aria-label="切换主题"
          >
            {theme === "dark" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
