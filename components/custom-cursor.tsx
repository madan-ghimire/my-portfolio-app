"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Portfolio cursor: a precise dot + a softly trailing ring.
 *
 * - Uses `mix-blend-mode: difference` with white, so it is automatically dark
 *   on light backgrounds and light on dark ones. No theme logic needed, and it
 *   stays visible on top of coloured buttons and badges too.
 * - Ring expands over interactive elements (links, buttons, tabs).
 * - Ring contracts on press.
 * - Native cursor is kept for text inputs and the PDF iframe, where a custom
 *   cursor would hurt usability.
 * - Only active for devices with a fine pointer (mouse / trackpad).
 */

const INTERACTIVE =
  "a, button, [role='button'], [role='tab'], label, summary, select, [data-cursor='hover']";
const TEXT_INPUT = "input, textarea, [contenteditable='true']";

const RING = 34;
const DOT = 6;

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let mx = -100,
      my = -100,
      rx = -100,
      ry = -100,
      scale = 1,
      targetScale = 1,
      visible = false,
      native = false,
      raf = 0;

    const show = (v: boolean) => {
      visible = v;
      const o = v ? "1" : "0";
      ring.style.opacity = o;
      dot.style.opacity = o;
    };

    const tick = () => {
      rx += (mx - rx) * 0.2;
      ry += (my - ry) * 0.2;
      scale += (targetScale - scale) * 0.18;
      dot.style.transform = `translate3d(${mx - DOT / 2}px, ${my - DOT / 2}px, 0)`;
      ring.style.transform = `translate3d(${rx - RING / 2}px, ${ry - RING / 2}px, 0) scale(${scale})`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible && !native) {
        // snap ring to the pointer on first move so it doesn't fly in
        rx = mx;
        ry = my;
        show(true);
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (!t) return;

      native = !!t.closest(`${TEXT_INPUT}, iframe`);
      if (native) {
        show(false);
        return;
      }
      if (!visible) {
        rx = mx;
        ry = my;
        show(true);
      }

      const interactive = !!t.closest(INTERACTIVE);
      targetScale = interactive ? 1.55 : 1;
      ring.style.backgroundColor = interactive
        ? "rgba(255,255,255,0.18)"
        : "transparent";
      dot.style.scale = interactive ? "0" : "1";
    };

    const onDown = () => (targetScale = Math.max(0.75, targetScale * 0.6));
    const onUp = () => {
      const t = document.elementFromPoint(mx, my);
      targetScale = t?.closest(INTERACTIVE) ? 1.55 : 1;
    };
    const onLeave = () => show(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  const base: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none",
    zIndex: 2147483647,
    borderRadius: "9999px",
    opacity: 0,
    mixBlendMode: "difference",
    willChange: "transform",
  };

  return (
    <>
      <style>{`
        html, html * { cursor: none !important; }
        html input, html textarea, html [contenteditable='true'] { cursor: text !important; }
        html iframe { cursor: auto !important; }
      `}</style>

      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          ...base,
          width: RING,
          height: RING,
          border: "1.5px solid #fff",
          backgroundColor: "transparent",
          transition: "opacity 200ms ease, background-color 200ms ease",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          ...base,
          width: DOT,
          height: DOT,
          backgroundColor: "#fff",
          transition: "opacity 200ms ease, scale 200ms ease",
        }}
      />
    </>
  );
}
