"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain, BookOpen, ClipboardList, Trophy } from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Brain },
  { href: "/weeks", label: "Study", icon: BookOpen },
  { href: "/quiz", label: "Quiz", icon: ClipboardList },
  { href: "/mock", label: "Mock Exam", icon: Trophy },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-primary">
          <Brain className="h-5 w-5" />
          <span className="hidden sm:inline">AC Prep</span>
        </Link>

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
      </div>
    </header>
  );
}
