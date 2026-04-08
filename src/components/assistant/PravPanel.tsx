"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Minus, SendHorizonal, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PravIcon } from "./PravIcon";
import { usePrav } from "./PravProvider";
import {
  getSiteGuideReply,
  siteGuideQuickActions,
  siteGuideWelcome,
  type SiteGuideLink,
} from "@/lib/site-guide";
import { MENNIE_NAME } from "@/lib/mennie";

type Message = {
  id: string;
  role: "guide" | "user";
  content: string;
  suggestions?: SiteGuideLink[];
};

function MessageActions({
  suggestions,
  onNavigate,
}: {
  suggestions?: SiteGuideLink[];
  onNavigate: () => void;
}) {
  if (!suggestions?.length) {
    return null;
  }

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {suggestions.map((suggestion) => {
        const isExternalAction =
          suggestion.href.startsWith("mailto:") || suggestion.href.startsWith("tel:");

        if (isExternalAction) {
          return (
            <a
              key={`${suggestion.label}-${suggestion.href}`}
              href={suggestion.href}
              className="rounded-full border border-border/50 bg-background/55 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/35 hover:bg-primary/10 hover:text-primary"
            >
              {suggestion.label}
            </a>
          );
        }

        return (
          <Link
            key={`${suggestion.label}-${suggestion.href}`}
            href={suggestion.href}
            onClick={onNavigate}
            className="rounded-full border border-border/50 bg-background/55 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/35 hover:bg-primary/10 hover:text-primary"
          >
            {suggestion.label}
          </Link>
        );
      })}
    </div>
  );
}

export function PravPanel() {
  const { isOpen, closeGuide, minimizeGuide } = usePrav();
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState<Message[]>([
    {
      id: "welcome",
      role: "guide",
      content: siteGuideWelcome,
      suggestions: [
        { label: "What we build", href: "/" },
        { label: "Explore domains", href: "/domains" },
        { label: MENNIE_NAME, href: "/healthmate" },
        { label: "Founder insights", href: "/blog" },
        { label: "Contact us", href: "/contact" },
      ],
    },
  ]);
  const [isKeyboardHintVisible, setIsKeyboardHintVisible] = useState(true);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickActions = useMemo(() => siteGuideQuickActions, []);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [history]);

  const submitQuery = (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;

    const reply = getSiteGuideReply(trimmed);
    setHistory((current) => [
      ...current,
      { id: `user-${current.length}`, role: "user", content: trimmed },
      {
        id: `guide-${current.length + 1}`,
        role: "guide",
        content: reply.message,
        suggestions: reply.suggestions,
      },
    ]);
    setMessage("");
    setIsKeyboardHintVisible(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-5 left-3 right-3 z-50 h-[72vh] max-h-[640px] overflow-hidden rounded-[30px] border border-border/60 bg-card/90 shadow-2xl backdrop-blur-xl sm:bottom-6 sm:left-auto sm:right-6 sm:w-[420px]"
          role="dialog"
          aria-label="Praverse site guide"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(57,187,166,0.18),transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),transparent_36%)]" />
          <div className="relative z-10 flex h-full flex-col">
            <header className="flex items-start justify-between border-b border-border/40 p-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2.5 ring-1 ring-primary/20">
                  <PravIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/85">
                    Guided site navigation
                  </p>
                  <h3 className="mt-2 text-base font-semibold">Praverse Site Guide</h3>
                  <p className="mt-1 max-w-[250px] text-xs leading-relaxed text-muted-foreground">
                    Deterministic website guidance for pages, offerings,
                    founder insights, and contact routes.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-background/40"
                  onClick={minimizeGuide}
                  aria-label="Minimize site guide"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-background/40"
                  onClick={closeGuide}
                  aria-label="Close site guide"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </header>

            <div
              ref={scrollAreaRef}
              className="flex-1 space-y-4 overflow-y-auto p-4"
            >
              {history.map((entry) => (
                <div
                  key={entry.id}
                  className={`flex ${entry.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-7 shadow-sm ${
                      entry.role === "user"
                        ? "rounded-br-md bg-primary text-primary-foreground"
                        : "rounded-bl-md border border-border/50 bg-background/45 text-foreground backdrop-blur-sm"
                    }`}
                  >
                    {entry.content}
                    {entry.role === "guide" && (
                      <MessageActions
                        suggestions={entry.suggestions}
                        onNavigate={closeGuide}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border/40 bg-background/20 p-4">
              <div className="mb-3 flex flex-wrap gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    type="button"
                    onClick={() => submitQuery(action.query)}
                    className="rounded-full border border-border/50 bg-background/55 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/35 hover:bg-primary/10 hover:text-primary"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
              <div className="relative">
                <Input
                  ref={inputRef}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      submitQuery(message);
                    }
                  }}
                  placeholder={`Ask about pages, offerings, ${MENNIE_NAME}, or contact...`}
                  aria-label="Ask the site guide a question"
                  className="h-12 rounded-2xl border-border/60 bg-background/55 pr-11 focus-visible:ring-primary focus-visible:ring-offset-0"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full hover:bg-primary/10"
                  onClick={() => submitQuery(message)}
                  disabled={!message.trim()}
                  aria-label="Send question"
                >
                  <SendHorizonal className="h-4 w-4" />
                </Button>
              </div>
              {isKeyboardHintVisible && (
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span>Tip: press Ctrl+K to open this guide from anywhere on the site.</span>
                </div>
              )}
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
