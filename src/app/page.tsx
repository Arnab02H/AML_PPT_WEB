'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { slides } from '@/data/slides';
import Slide from '@/components/Slide';
import ProgressDots from '@/components/ProgressDots';

export default function PresentationPage() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const touchStartX = useRef<number | null>(null);

  /* ── Hash → slide index sync ─────────────────── */
  useEffect(() => {
    setIsMounted(true);
    const readHash = () => {
      const hash = window.location.hash; // e.g. #/5
      const match = hash.match(/^#\/(\d+)/);
      if (match) {
        const idx = parseInt(match[1], 10);
        if (idx >= 0 && idx < slides.length) {
          setCurrent(idx);
        }
      }
    };
    readHash();
    window.addEventListener('hashchange', readHash);
    return () => window.removeEventListener('hashchange', readHash);
  }, []);

  const goto = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= slides.length) return;
      setPrev(current);
      setCurrent(idx);
      window.location.hash = `/${idx}`;
      // clear prev after animation
      setTimeout(() => setPrev(null), 600);
    },
    [current]
  );

  const handleNext = useCallback(() => goto(current + 1), [current, goto]);
  const handlePrev = useCallback(() => goto(current - 1), [current, goto]);

  /* ── Touch swipe ─────────────────────────────── */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? handleNext() : handlePrev();
    touchStartX.current = null;
  };

  /* ── Keyboard navigation ─────────────────────── */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key.toLowerCase() === 'f') {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch((err) => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
          });
        } else {
          document.exitFullscreen();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const urlPath = `linguineai-slides/fullscreen#/${current}`;

  if (!isMounted) return null;

  return (
    <>

      {/* Progress dots */}
      <ProgressDots total={slides.length} current={current} onGoto={goto} />

      {/* Slide container */}
      <main
        className="presentation"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        aria-label="Presentation slides"
      >
        {slides.map((slide) => (
          <Slide
            key={slide.id}
            slide={slide}
            isActive={slide.id === current}
            isPrev={slide.id === prev}
          />
        ))}
      </main>

    </>
  );
}
