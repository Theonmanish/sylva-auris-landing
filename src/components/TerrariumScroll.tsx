"use client";

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const SOURCE_FRAME_MAX = 151;
const FRAME_STRIDE = 2;

const frameIndices: number[] = (() => {
  const out: number[] = [];
  for (let i = 1; i <= SOURCE_FRAME_MAX; i += FRAME_STRIDE) {
    out.push(i);
  }
  if (out[out.length - 1] !== SOURCE_FRAME_MAX) {
    out.push(SOURCE_FRAME_MAX);
  }
  return out;
})();

const FRAME_COUNT = frameIndices.length;

/** Inner scroll track — only this element scrolls while the page is locked. */
const SCROLL_TRACK_VH = 380;

/** Progress thresholds for leaving locked mode (small hysteresis). */
const UNLOCK_FORWARD = 0.985;
const UNLOCK_REVERSE = 0.015;
const AUTO_RETURN_DURATION_MS = 560;

function lockPageScroll() {
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}

function unlockPageScroll() {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
}

export default function TerrariumScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const autoReturnRafRef = useRef<number | null>(null);
  const autoReturnActiveRef = useRef(false);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  /** Locked = page does not move; only inner trap scroll drives frames (both directions). */
  const [locked, setLocked] = useState(true);

  const progress = useMotionValue(0);
  const hintOpacity = useTransform(progress, [0, 0.12, 0.88, 1], [1, 1, 1, 0.9]);

  /** After unlock: 1 = exited fully open, 0 = exited fully closed — used to restore inner scroll when re-locking. */
  const lastExitProgressRef = useRef<0 | 1>(0);
  /** Must scroll the page away from the section before we allow another lock (avoids instant re-lock). */
  const allowReLockRef = useRef(false);

  const layoutRetriesRef = useRef(0);
  /** Prevents instant unlock at p=0 on first paint (0 <= UNLOCK_REVERSE used to fire immediately). */
  const hasUserAdvancedScrollRef = useRef(false);

  function stopAutoReturn() {
    if (autoReturnRafRef.current !== null) {
      cancelAnimationFrame(autoReturnRafRef.current);
      autoReturnRafRef.current = null;
    }
    autoReturnActiveRef.current = false;
  }

  function startAutoReturn() {
    const el = trapRef.current;
    if (!el || autoReturnActiveRef.current) return;

    const max = el.scrollHeight - el.clientHeight;
    if (max < 8) return;

    autoReturnActiveRef.current = true;
    allowReLockRef.current = false;
    hasUserAdvancedScrollRef.current = false;
    lastExitProgressRef.current = 0;

    const startTime = performance.now();
    const startProgress = progress.get();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / AUTO_RETURN_DURATION_MS);
      const eased = 1 - Math.pow(1 - t, 3);
      const nextProgress = startProgress * (1 - eased);

      progress.set(nextProgress);
      const nextScrollTop = (el.scrollHeight - el.clientHeight) * nextProgress;
      el.scrollTop = nextScrollTop;

      if (t < 1) {
        autoReturnRafRef.current = requestAnimationFrame(step);
        return;
      }

      el.scrollTop = 0;
      progress.set(0);
      autoReturnRafRef.current = null;
      autoReturnActiveRef.current = false;
      setLocked(false);
    };

    autoReturnRafRef.current = requestAnimationFrame(step);
  }

  const syncProgressFromTrap = useCallback(() => {
    const el = trapRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    if (max < 8) {
      if (layoutRetriesRef.current < 40) {
        layoutRetriesRef.current += 1;
        requestAnimationFrame(() => syncProgressFromTrap());
      }
      return;
    }
    layoutRetriesRef.current = 0;

    const p = Math.min(1, Math.max(0, el.scrollTop / max));
    progress.set(p);

    if (p > 0.04) {
      hasUserAdvancedScrollRef.current = true;
    }

    if (p >= UNLOCK_FORWARD) {
      if (!autoReturnActiveRef.current) {
        lastExitProgressRef.current = 1;
        allowReLockRef.current = false;
        hasUserAdvancedScrollRef.current = false;
        startAutoReturn();
      }
    } else if (hasUserAdvancedScrollRef.current && p <= UNLOCK_REVERSE) {
      if (!autoReturnActiveRef.current) {
        lastExitProgressRef.current = 0;
        allowReLockRef.current = false;
        hasUserAdvancedScrollRef.current = false;
        startAutoReturn();
      }
    }
  }, [progress]);

  useEffect(() => {
    const loadImages = async () => {
      const loaded: HTMLImageElement[] = [];
      const promises: Promise<unknown>[] = [];

      for (const i of frameIndices) {
        const img = new Image();
        const index = i.toString().padStart(3, "0");
        img.src = `/assets/terrarium-sequence/ezgif-frame-${index}.png`;
        promises.push(
          new Promise((resolve) => {
            img.onload = () => resolve(null);
            img.onerror = () => resolve(null);
          })
        );
        loaded.push(img);
      }

      await Promise.all(promises);
      setImages(loaded);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (locked) {
      lockPageScroll();
      return () => unlockPageScroll();
    }
    unlockPageScroll();
    return undefined;
  }, [locked]);

  useEffect(() => {
    return () => {
      stopAutoReturn();
    };
  }, [stopAutoReturn]);

  useLayoutEffect(() => {
    if (!locked || !isLoaded) return;
    const el = trapRef.current;
    if (!el) return;

    const max = el.scrollHeight - el.clientHeight;
    if (max < 8) return;

    if (lastExitProgressRef.current === 1) {
      el.scrollTop = max;
      progress.set(1);
      hasUserAdvancedScrollRef.current = true;
    } else {
      el.scrollTop = 0;
      progress.set(0);
      hasUserAdvancedScrollRef.current = false;
    }
  }, [locked, isLoaded]);

  useEffect(() => {
    if (!locked || !isLoaded) return;
    const el = trapRef.current;
    if (!el) return;

    const onScroll = () => syncProgressFromTrap();
    el.addEventListener("scroll", onScroll, { passive: true });
    syncProgressFromTrap();

    return () => el.removeEventListener("scroll", onScroll);
  }, [locked, isLoaded, syncProgressFromTrap]);

  useEffect(() => {
    if (locked || !sectionRef.current) return;

    const root = sectionRef.current;
    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e) return;
        const top = e.boundingClientRect.top;

        // User scrolled the page down: section moves up (top goes negative) — arm re-lock.
        if (top < -80) {
          allowReLockRef.current = true;
        }

        if (allowReLockRef.current && top >= -32 && top <= 160) {
          allowReLockRef.current = false;
          setLocked(true);
        }
      },
      { threshold: [0, 0.05, 0.1, 0.2, 0.35, 0.5, 0.75, 1], rootMargin: "0px 0px 0px 0px" }
    );

    obs.observe(root);
    return () => obs.disconnect();
  }, [locked]);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!ctx || !canvas || images.length === 0) {
        rafRef.current = requestAnimationFrame(render);
        return;
      }

      const p = Math.min(1, Math.max(0, progress.get()));
      const slot = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(p * FRAME_COUNT)));
      const img = images[slot];

      if (img?.complete && img.naturalWidth > 0) {
        const sourceHeight = img.height * 0.95;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, sourceHeight, 0, 0, canvas.width, canvas.height);
      }

      rafRef.current = requestAnimationFrame(render);
    };

    if (isLoaded) {
      rafRef.current = requestAnimationFrame(render);
      return () => {
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      };
    }
  }, [images, isLoaded, progress]);

  const terrariumPanel = (
    <div className="flex min-h-svh w-full flex-col overflow-hidden pt-4 lg:pt-15 lg:grid lg:min-h-svh lg:grid-cols-2 lg:gap-0">
      <div className="relative flex h-[55vh] w-full items-center justify-center overflow-hidden lg:h-auto lg:min-h-svh">
        {!isLoaded && (
          <div className="absolute z-10 text-xs font-light uppercase tracking-widest text-white/50">
            Refining Ecosystem…
          </div>
        )}

        <canvas
          ref={canvasRef}
          width={1080}
          height={1440}
          className="pointer-events-none h-auto w-auto max-h-full max-w-full px-4 transition-opacity duration-500 sm:px-6"
          style={{
            opacity: isLoaded ? 1 : 0,
            filter: "contrast(1.05) brightness(0.95)",
          }}
        />

        {locked ? (
          <motion.div
            style={{ opacity: hintOpacity }}
            className="pointer-events-none absolute bottom-6 max-w-[min(100%,28rem)] px-4 text-center text-[11px] uppercase leading-relaxed tracking-widest text-white/55 sm:text-xs lg:bottom-10"
          >
            Scroll inside this panel — page stays still. At the end, the terrarium returns to its original shape
            before the page unlocks.
          </motion.div>
        ) : (
          <div className="pointer-events-none absolute bottom-6 max-w-[min(100%,28rem)] px-4 text-center text-[11px] uppercase leading-relaxed tracking-widest text-white/55 sm:text-xs lg:bottom-10">
            Scroll the page — when this section sits near the top again, scroll locks return for a smooth in-panel
            animation.
          </div>
        )}
      </div>

      <div className="relative flex flex-col items-center justify-center bg-[#0B0F0E] px-6 py-10 sm:px-8 lg:min-h-svh lg:px-10 lg:py-0">
        <div className="w-full max-w-md">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.34em] text-[#C6A85C]">
            Sylva Auris Collection
          </p>
          <h2 className="mb-6 font-[var(--font-playfair)] text-3xl leading-tight text-[#EAEAEA] sm:text-4xl">
            Nature in Motion
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-[#EAEAEA]/75">
            Watch as the terrarium ecosystem unfolds through this immersive visual journey. Each frame
            captures the intricate layers of moss, botanical specimens, and carefully curated elements that make
            Sylva Auris unique.
          </p>
          <p className="mb-8 text-sm leading-relaxed text-[#EAEAEA]/75">
            The animation reveals the depth and complexity of our bioactive compositions, showcasing the precision and
            artistry behind every piece.
          </p>
          <div className="space-y-3 text-sm text-[#EAEAEA]/70">
            <div className="flex gap-3">
              <span className="text-[#C6A85C]">◆</span>
              <span>Handcrafted botanical design</span>
            </div>
            <div className="flex gap-3">
              <span className="text-[#9be7bd]">◆</span>
              <span>Premium bioactive composition</span>
            </div>
            <div className="flex gap-3">
              <span className="text-[#C6A85C]">◆</span>
              <span>Sustainable ecosystems</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={sectionRef} className="relative w-full bg-[#0B0F0E]">
      {locked ? (
        <div className="relative flex h-[100dvh] w-full flex-col">
          <div
            ref={trapRef}
            className="min-h-0 flex-1 touch-pan-y overflow-y-auto overscroll-y-contain"
            style={{ WebkitOverflowScrolling: "touch" as const }}
          >
            <div style={{ minHeight: `${SCROLL_TRACK_VH}vh` }}>
              <div className="sticky top-0 min-h-svh bg-[#0B0F0E]">{terrariumPanel}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full">
          <div className="min-h-svh">{terrariumPanel}</div>
        </div>
      )}
    </div>
  );
}
