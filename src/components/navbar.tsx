"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Brain,
  BookOpen,
  FileText,
  ClipboardList,
  Trophy,
  ScrollText,
  Sun,
  Moon,
  Monitor,
  Bookmark,
  Layers,
} from "lucide-react";
import {
  getStoredTheme,
  setStoredTheme,
  applyTheme,
  type Theme,
} from "@/lib/theme";

const links = [
  { href: "/", label: "Home", icon: Brain },
  { href: "/weeks", label: "Study", icon: BookOpen },
  { href: "/notes", label: "Notes", icon: FileText },
  { href: "/assignments", label: "PYQs", icon: ScrollText },
  { href: "/quiz", label: "Quiz", icon: ClipboardList },
  { href: "/flashcards", label: "Flashcards", icon: Layers },
  { href: "/bookmarks", label: "Saved", icon: Bookmark },
  { href: "/mock", label: "Mock Exam", icon: Trophy },
];

function nextTheme(current: Theme): Theme {
  if (current === "system") return "light";
  if (current === "light") return "dark";
  return "system";
}

export function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const stored = getStoredTheme();
    setTheme(stored);
    applyTheme(stored);
  }, []);

  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-primary">
          <Brain className="h-5 w-5" />
          <span className="hidden sm:inline">AC Prep</span>
        </Link>

        <div className="flex items-center gap-1">
          <nav className="flex items-center gap-1">
            {links.map(({ href, label, icon: Icon }) => {
              const active =
                href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(href);

              return (
                <Link
                  key={href}
                  href={href}
                  aria-label={label}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => {
              const t = nextTheme(theme);
              setTheme(t);
              setStoredTheme(t);
            }}
            aria-label={
              theme === "system"
                ? "Color theme: system (click to use light)"
                : theme === "light"
                  ? "Color theme: light (click to use dark)"
                  : "Color theme: dark (click to use system)"
            }
            className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {theme === "system" ? (
              <Monitor className="h-5 w-5" />
            ) : theme === "light" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
