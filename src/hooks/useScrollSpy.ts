import { useEffect, useRef, useState } from "react";

import { useLatest } from "./useLatest";

/**
 * Tracks which anchor section is currently in the viewport's reading area.
 *
 * THRESHOLD = 0.3 — a section becomes active once its top crosses 30% from the
 * viewport's top edge. Tuned to feel natural while scrolling: high enough that
 * a section is in the reading area before being marked active, low enough that
 * the active state updates well before the section reaches the top.
 *
 * LOCK_MS = 1000 — when setActiveAnchorId is called (e.g. on nav click), the
 * scroll-spy ignores updates for this duration so intermediate sections
 * sweeping past during smooth-scroll don't flicker the active state.
 */
const THRESHOLD = 0.3;
const LOCK_MS = 1000;

export function useScrollSpy(anchorIdList: string[]) {
  const [activeAnchorId, setActiveAnchorId] = useState<string | null>(null);
  const lockedUntilRef = useRef(0);
  const anchorIdListRef = useLatest(anchorIdList);

  useEffect(() => {
    let animationFrameId = 0;

    const update = () => {
      animationFrameId = 0;

      if (Date.now() < lockedUntilRef.current) {
        return;
      }

      const threshold = window.innerHeight * THRESHOLD;
      let current: string | null = null;

      for (const anchorId of anchorIdListRef.current) {
        const element = document.getElementById(anchorId);

        if (!element) {
          continue;
        }

        if (element.getBoundingClientRect().top <= threshold) {
          current = anchorId;
        }
      }

      setActiveAnchorId(current);
    };

    const onScroll = () => {
      if (animationFrameId) {
        return;
      }

      animationFrameId = requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [anchorIdListRef]);

  return {
    activeAnchorId,
    setActiveAnchorId: (id: string) => {
      setActiveAnchorId(id);
      lockedUntilRef.current = Date.now() + LOCK_MS;
    },
  };
}
