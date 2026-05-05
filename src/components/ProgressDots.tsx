'use client';

interface Props {
  total: number;
  current: number;
  onGoto: (i: number) => void;
}

export default function ProgressDots({ total, current, onGoto }: Props) {
  return (
    <div className="progress-dots" aria-label="Slide overview">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          id={`dot-${i}`}
          className={`dot ${i === current ? 'active' : ''}`}
          onClick={() => onGoto(i)}
          aria-label={`Go to slide ${i + 1}`}
          title={`Slide ${i + 1}`}
        />
      ))}
    </div>
  );
}
