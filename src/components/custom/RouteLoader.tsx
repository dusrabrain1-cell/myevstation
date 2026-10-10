"use client";

import { useEffect, useRef, useState } from "react";
import { Zap } from "lucide-react";
import { usePathname } from "next/navigation";


/**
 * Lightweight MyEVStation route feedback.
 * Hash links (including /#technology) should scroll to their section without
 * covering the page with a full-screen overlay.
 */
const MIN_VISIBLE_MS = 180;
const SAFETY_MS = 2500;

export function RouteLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const shownAt = useRef(0);
  const previousPath = useRef(pathname);
  const safety = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      const target = anchor.getAttribute("target");
      if (!href || (target && target !== "_self") || anchor.hasAttribute("download")) return;
      if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;

      // Never show a page-blocking loader for same-page section navigation.
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;

      shownAt.current = Date.now();
      setVisible(true);
      if (safety.current) clearTimeout(safety.current);
      safety.current = setTimeout(() => setVisible(false), SAFETY_MS);
    };

    document.addEventListener("click", onClick, true);
    const onPopState = () => {
      setVisible(false);
      if (safety.current) clearTimeout(safety.current);
    };
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPopState);
      if (safety.current) clearTimeout(safety.current);
    };
  }, []);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      previousPath.current = pathname;
      if (visible) {
        const remaining = Math.max(0, MIN_VISIBLE_MS - (Date.now() - shownAt.current));
        const timer = setTimeout(() => {
          setVisible(false);
          if (safety.current) clearTimeout(safety.current);
        }, remaining);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname, visible]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Loading page"
      className="fixed inset-0 z-[200] flex items-center justify-center bg-white/80 backdrop-blur-sm"
    >
      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-[#0b5a42] text-white shadow-lg sm:h-20 sm:w-20"><Zap size={38} fill="currentColor" /></span>
      <span className="sr-only">Loading page…</span>
    </div>
  );
}
