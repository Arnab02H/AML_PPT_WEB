'use client';
import React from 'react';
import { SlideData } from '@/data/slides';

interface Props {
  slide: SlideData;
  isActive: boolean;
  isPrev: boolean;
}

export default function Slide({ slide, isActive, isPrev }: Props) {
  const cls = [
    'slide',
    isActive ? 'active' : '',
    isPrev ? 'prev' : '',
    `slide-type-${slide.type}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article id={`slide-${slide.id}`} className={cls} aria-hidden={!isActive}>
      {renderContent(slide)}
      <span className="slide-watermark">{slide.id + 1} / 16</span>
    </article>
  );
}

function renderContent(slide: SlideData) {
  switch (slide.type) {
    case 'title':
      return <TitleSlide slide={slide} />;
    case 'agenda':
      return <AgendaSlide slide={slide} />;
    case 'problem':
      return <ProblemSlide slide={slide} />;
    case 'solution':
      return <SolutionSlide slide={slide} />;
    case 'architecture':
      return <ArchitectureSlide slide={slide} />;
    case 'results':
      return <ResultsSlide slide={slide} />;
    case 'demo':
      return <DemoSlide slide={slide} />;
    case 'thankyou':
      return <ThankyouSlide slide={slide} />;
    case 'methodology':
      return <MethodologySlide slide={slide} />;
    default:
      return <ContentSlide slide={slide} />;
  }
}

/* ── Title Slide ─────────────────────────────── */
function TitleSlide({ slide }: { slide: SlideData }) {
  return (
    <div
      className="title-slide"
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100%',
        width: '100%',
      }}
    >
      <div className="big-icon" aria-hidden="true">{slide.icon}</div>

      {/* Full title — one unified gradient heading */}
      <h1 className="main-title">{slide.title}</h1>

      {/* Thin orange accent divider */}
      <div className="title-meta-divider" aria-hidden="true" />

      <div className="title-meta">
        {slide.content?.map((line, i) => {
          const colonIdx = line.indexOf(':');
          const label = line.slice(0, colonIdx);
          const value = line.slice(colonIdx + 1).trim();
          return (
            <span key={i}>
              <strong>{label}:</strong> {value}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/* ── Agenda Slide ────────────────────────────── */
function AgendaSlide({ slide }: { slide: SlideData }) {
  return (
    <>
      {slide.tag && <div className="slide-tag">📋 {slide.tag}</div>}
      <h2 className="slide-title">{slide.title}</h2>
      <div className="divider" />
      <div className="agenda-grid">
        {slide.content?.map((item, i) => (
          <div key={i} className="agenda-item">
            <span className="agenda-num">
              {String(i + 1).padStart(2, '0')}
            </span>
            {item}
          </div>
        ))}
      </div>
    </>
  );
}

/* ── Problem Statement Slide ─────────────────── */
const PROB_ACCENTS = ['#ff9f43', '#f43f5e', '#a78bfa']; // amber · rose · violet

function ProblemSlide({ slide }: { slide: SlideData }) {
  const coreItems = slide.content ?? [];

  return (
    <div className="prob-root">

      {/* ── Header ── */}
      <div className="prob-head-row">
        <div>
          <div className="slide-tag">{slide.tag}</div>
          <h2 className="prob-main-title">{slide.title}</h2>
          {slide.subtitle && <p className="prob-subtitle">{slide.subtitle}</p>}
        </div>
      </div>

      {/* ── 3 upper cards ── */}
      <div className="prob-cards-row">
        {slide.columns?.map((col, ci) => (
          <div
            key={ci}
            className="prob-card"
            style={{ borderTopColor: PROB_ACCENTS[ci] }}
          >
            <h3
              className="prob-card-title"
              style={{ color: PROB_ACCENTS[ci] }}
            >
              {col.heading}
            </h3>
            <ul className="prob-card-list">
              {col.items.map((item, ii) => (
                <li key={ii} className="prob-card-item">
                  <span
                    className="prob-card-num"
                    style={{ color: PROB_ACCENTS[ci] }}
                  >
                    {String(ii + 1).padStart(2, '0')}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Core Problem full-width section ── */}
      <div className="prob-core">
        <div className="prob-core-left">
          <span className="prob-core-label">Core Problem</span>
          <p className="prob-core-q">
            How can we build an intelligent system that automatically digitizes
            menu images, extracts content, translates foreign text, and delivers
            personalized recommendations?
          </p>
        </div>
        <ul className="prob-core-list">
          {coreItems.map((item, i) => (
            <li key={i} className="prob-core-item">
              <span className="prob-core-dot" />
              {item}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

/* ── Solution Goal Slide ─────────────────────── */
function SolutionSlide({ slide }: { slide: SlideData }) {
  return (
    <div className="sol-root">
      {/* ── Header ── */}
      <div className="sol-header">
        <div className="slide-tag">{slide.tag}</div>
        <h2 className="sol-title">{slide.title}</h2>
        {slide.highlight && (
          <div className="sol-highlight">
            <span className="sol-highlight-label">OUR AIM</span>
            <p className="sol-highlight-text">{slide.highlight}</p>
          </div>
        )}
      </div>

      <div className="divider" />

      {/* ── Steps Grid ── */}
      <div className="sol-steps-container">
        <h3 className="sol-steps-heading">How Our System Works</h3>
        <div className="sol-steps-grid">
          {slide.steps?.map((step, i) => (
            <div key={i} className="sol-step-card">
              <div className="sol-step-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="sol-step-content">
                <h4 className="sol-step-title">{step.title}</h4>
                <p className="sol-step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Content Slide ───────────────────────────── */
function ContentSlide({ slide }: { slide: SlideData }) {
  return (
    <>
      {slide.tag && <div className="slide-tag">{slide.icon} {slide.tag}</div>}
      <h2 className="slide-title">{slide.title}</h2>
      <div className="divider" />
      {slide.highlight && (
        <div className="highlight-box">{slide.highlight}</div>
      )}
      {slide.columns ? (
        <div className="columns-grid">
          {slide.columns.map((col, ci) => (
            <div key={ci} className="col-card">
              <h3>{col.heading}</h3>
              <ul>
                {col.items.map((item, ii) => (
                  <li key={ii}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="bullet-list">
          {slide.content?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}

/* ── Architecture Slide ──────────────────────── */
function ArchitectureSlide({ slide }: { slide: SlideData }) {
  return (
    <>
      {slide.tag && <div className="slide-tag">🏗️ {slide.tag}</div>}
      <h2 className="slide-title teal">{slide.title}</h2>
      
      <div className="architecture-split">
        {/* COLUMN 1: OCR Pipeline */}
        <div className="arch-col">
          <h3 className="arch-col-title">OCR Model Pipeline</h3>
          <div className="fc-container" style={{ padding: '1rem', marginTop: 0 }}>
            <div className="fc-grid">
              {/* ROW 1 */}
              <div className="fc-node rect" style={{ gridColumn: 1, gridRow: 1 }}>
                <span className="fc-floating-input-label">Input</span>
                <div className="fc-node-title">Image</div>
              </div>
              <div className="fc-arrow right" style={{ gridColumn: 2, gridRow: 1 }}>
                <span className="fc-label" style={{ top: '-1.8rem', whiteSpace: 'normal', width: '80px', lineHeight: 1.1 }}>preprocessing<br/>on the image</span>
                <div className="fc-arrow-line"></div>
              </div>
              <div className="fc-node rect" style={{ gridColumn: 3, gridRow: 1 }}>
                <div className="fc-node-title">Preprocessed<br />Image</div>
              </div>
              <div className="fc-arrow right" style={{ gridColumn: 4, gridRow: 1 }}>
                <span className="fc-label" style={{ top: '-2.4rem', whiteSpace: 'normal', width: '80px', lineHeight: 1.1 }}>it goes to<br/>OCR engine<br/>for text extraction</span>
                <div className="fc-arrow-line"></div>
              </div>
              <div className="fc-node ellipse" style={{ gridColumn: 5, gridRow: 1 }}>
                <div className="fc-node-title" style={{ fontSize: '0.8rem' }}>EasyOCR<br />or<br />PaddleOCR</div>
              </div>

              {/* ROW 2 */}
              <div className="fc-arrow down" style={{ gridColumn: 5, gridRow: 2 }}>
                <span className="fc-label" style={{ left: 'auto', right: 'calc(50% + 0.5rem)', transform: 'translateY(-50%)', top: '50%' }}>Translate the dishes<br />into user specific language</span>
                <div className="fc-arrow-line"></div>
              </div>

              {/* ROW 3 */}
              <div className="fc-node rect" style={{ gridColumn: 1, gridRow: 3 }}>
                <div className="fc-node-title">User preference</div>
              </div>
              <div className="fc-arrow right" style={{ gridColumn: 2, gridRow: 3 }}>
                <div className="fc-arrow-line"></div>
              </div>
              <div className="fc-node ellipse" style={{ gridColumn: 3, gridRow: 3, height: '80px' }}>
                <div className="fc-node-title" style={{ fontSize: '0.85rem' }}>Google Gemini API</div>
              </div>
              <div className="fc-arrow left" style={{ gridColumn: 4, gridRow: 3 }}>
                <div className="fc-arrow-line"></div>
              </div>
              <div className="fc-node rect" style={{ gridColumn: 5, gridRow: 3, alignItems: 'flex-start', paddingLeft: '1rem' }}>
                <div className="fc-node-title">Translated Dish name</div>
                <div className="fc-node-list">
                  1.<br />
                  2.<br />
                  3.<br />
                  .
                </div>
              </div>

              {/* ROW 4 */}
              <div className="fc-arrow down" style={{ gridColumn: 3, gridRow: 4 }}>
                <div className="fc-arrow-line"></div>
              </div>

              {/* ROW 5 */}
              <div className="fc-node rect" style={{ gridColumn: '2 / 5', gridRow: 5, padding: '0.8rem', margin: '0 auto', maxWidth: '300px' }}>
                <div className="fc-node-title" style={{ fontSize: '0.75rem' }}>Recomended Dishes and Generate Images</div>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 2: Gemini API Pipeline */}
        <div className="arch-col">
          <h3 className="arch-col-title">Gemini API Pipeline</h3>
          <div className="fc-container" style={{ padding: '1rem', marginTop: 0 }}>
            <div className="fc-grid">
              {/* ROW 1 */}
              <div className="fc-node rect" style={{ gridColumn: 1, gridRow: 1 }}>
                <div className="fc-node-title">Menu Card<br/>Image</div>
              </div>
              <div className="fc-arrow right" style={{ gridColumn: 2, gridRow: 1 }}>
                <div className="fc-arrow-line"></div>
              </div>
              
              {/* ROW 3 */}
              <div className="fc-node rect" style={{ gridColumn: 1, gridRow: 3 }}>
                <div className="fc-node-title">User<br/>Preferences</div>
              </div>
              <div className="fc-arrow right" style={{ gridColumn: 2, gridRow: 3 }}>
                <div className="fc-arrow-line"></div>
              </div>
              
              {/* ROW 1 to 3 -> Gemini API */}
              <div className="fc-node ellipse" style={{ gridColumn: 3, gridRow: '1 / 4', height: '120px', display: 'flex', alignItems: 'center' }}>
                <div className="fc-node-title" style={{ fontSize: '0.95rem' }}>Google<br/>Gemini<br/>API</div>
              </div>
              
              {/* ROW 2 Arrow from Gemini to Recommended */}
              <div className="fc-arrow right" style={{ gridColumn: 4, gridRow: 2 }}>
                <div className="fc-arrow-line"></div>
              </div>
              
              {/* ROW 1 to 3 -> Recommended Dishes */}
              <div className="fc-node rect" style={{ gridColumn: 5, gridRow: '1 / 4', height: '100%', minHeight: '160px' }}>
                <div className="fc-node-title">Recomended<br/>Dishes<br/>and<br/>Generate<br/>Images</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Methodology Slide ───────────────────────── */
function MethodologySlide({ slide }: { slide: SlideData }) {
  return (
    <>
      {slide.tag && <div className="slide-tag">{slide.icon} {slide.tag}</div>}
      <h2 className="slide-title">{slide.title}</h2>
      <div className="divider" />
      {slide.highlight && (
        <div className="highlight-box">{slide.highlight}</div>
      )}
      {slide.columns ? (
        <div className="columns-grid">
          {slide.columns.map((col, ci) => (
            <div key={ci} className="col-card" style={{ borderTopColor: 'var(--clr-accent3)', borderTopWidth: '2px' }}>
              <h3>{col.heading}</h3>
              <ul>
                {col.items.map((item, ii) => (
                  <li key={ii}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="bullet-list">
          {slide.content?.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}
    </>
  );
}

/* ── Results Slide ───────────────────────────── */
const RESULT_META: { label: string; value: string; detail: string }[] = [
  { label: 'OCR Accuracy (Gemini)', value: '93.1%', detail: 'Character-level on menu images' },
  { label: 'OCR Accuracy (PaddleOCR)', value: '87.6%', detail: 'Character-level accuracy' },
  { label: 'OCR Accuracy (EasyOCR)', value: '84.2%', detail: 'Character-level accuracy' },
  { label: 'Menu Parse F1', value: '0.891', detail: 'End-to-end Gemini pipeline' },
  { label: 'Translation BLEU', value: '38.4', detail: 'Avg across 4 language pairs' },
  { label: 'Recommend Precision@5', value: '0.74', detail: 'User study (n=30)' },
];

function ResultsSlide({ slide }: { slide: SlideData }) {
  return (
    <>
      {slide.tag && <div className="slide-tag">{slide.icon} {slide.tag}</div>}
      <h2 className="slide-title">{slide.title}</h2>
      <div className="divider" />
      {slide.highlight && <div className="highlight-box">{slide.highlight}</div>}
      <div className="results-grid">
        {RESULT_META.map((r, i) => (
          <div key={i} className="result-card">
            <span className="result-label">{r.label}</span>
            <span className="result-value">{r.value}</span>
            <span className="result-detail">{r.detail}</span>
          </div>
        ))}
      </div>
    </>
  );
}

/* ── Demo Slide ──────────────────────────────── */
function DemoSlide({ slide }: { slide: SlideData }) {
  return (
    <>
      {slide.tag && <div className="slide-tag">{slide.icon} {slide.tag}</div>}
      <h2 className="slide-title teal">{slide.title}</h2>
      <div className="divider" />
      {slide.highlight && <div className="highlight-box">{slide.highlight}</div>}
      <div className="demo-steps">
        {slide.content?.map((step, i) => {
          const parts = step.split(' — ');
          return (
            <div key={i} className="demo-step">
              <span className="demo-step-num">{String(i + 1)}.</span>
              <span className="demo-step-text">
                <strong style={{ color: 'var(--clr-text)' }}>{parts[0].replace(/Step \d+ — /, '')}</strong>
                {parts[1] ? ` — ${parts[1]}` : ''}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

/* ── Thank You Slide ─────────────────────────── */
function ThankyouSlide({ slide }: { slide: SlideData }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <div className="thankyou-icon">{slide.icon}</div>
      <h2 className="slide-title" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>{slide.title}</h2>
      <p className="slide-subtitle">{slide.subtitle}</p>
      {slide.tag && (
        <div className="slide-tag" style={{ margin: '0 auto 1rem' }}>🎓 {slide.tag}</div>
      )}
      <div className="refs-grid">
        {slide.content?.map((ref, i) => (
          <div key={i} className="ref-item">[{i + 1}] {ref}</div>
        ))}
      </div>
    </div>
  );
}
