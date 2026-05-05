'use client';
import { useCallback, useEffect, useState } from 'react';

interface Props {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function NavBar({ current, total, onPrev, onNext }: Props) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  /* ── Fullscreen toggle ───────────────────────── */
  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen?.();
    } else {
      await document.exitFullscreen?.();
    }
  }, []);

  /* ── Track fullscreen state changes ─────────── */
  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  /* ── Keyboard shortcuts ──────────────────────── */
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        onNext();
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        onPrev();
      }
      // F key → toggle fullscreen (browsers block ESC for entering fullscreen)
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      }
    },
    [onNext, onPrev, toggleFullscreen]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  return (
    <nav className="nav-bar" aria-label="Slide navigation">
      <button
        id="btn-prev"
        className="nav-btn"
        onClick={onPrev}
        disabled={current === 0}
        aria-label="Previous slide"
      >
        ←
      </button>
      <span className="slide-counter" aria-live="polite">
        {current + 1} / {total}
      </span>
      <button
        id="btn-next"
        className="nav-btn"
        onClick={onNext}
        disabled={current === total - 1}
        aria-label="Next slide"
      >
        →
      </button>

      {/* Separator */}
      <div className="nav-divider" aria-hidden="true" />

      {/* Fullscreen toggle button */}
      <button
        id="btn-fullscreen"
        className="nav-btn nav-btn-fs"
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        title={isFullscreen ? 'Exit fullscreen (Esc)' : 'Enter fullscreen (F)'}
      >
        <span className="fs-icon">{isFullscreen ? '⊡' : '⊞'}</span>
      </button>
    </nav>
  );
}
