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
      <span className="slide-watermark">{slide.id + 1} / 15</span>
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
    case 'ocr-math':
      return <OcrMathSlide slide={slide} />;
    case 'gemini-pipeline':
      return <GeminiPipelineSlide slide={slide} />;
    case 'dataset-example':
      return <DatasetExampleSlide slide={slide} />;
    default:
      return <ContentSlide slide={slide} />;
  }
}

/* ── Dataset Example Slide (Single-Screen Dashboard) ── */
function DatasetExampleSlide({ slide }: { slide: SlideData }) {
  // Helper to parse the ASCII/Markdown table into rows for a real HTML table
  const parseTable = (tableStr: string) => {
    if (!tableStr) return { headers: [], rows: [] };
    const lines = tableStr.trim().split('\n');
    const rows = lines
      .filter(l => l.includes('|') && !l.includes('---'))
      .map(l => l.split('|').filter(c => c.trim() !== '').map(c => c.trim()));
    
    if (rows.length === 0) return { headers: [], rows: [] };
    const headers = rows[0];
    const dataRows = rows.slice(1).filter(r => r[0] !== 'Dish Name' && r[0] !== '');
    return { headers, rows: dataRows };
  };

  const { headers, rows } = parseTable(slide.table || '');

  return (
    <div className="dataset-modern-root" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%', 
      width: '100%',
      overflow: 'hidden',
      padding: '0.75rem 1.5rem 2rem',
      background: 'radial-gradient(circle at 50% 50%, #0d1117 0%, #05070a 100%)'
    }}>
      {/* Header Area */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
        <div>
          <div className="slide-tag" style={{ background: 'rgba(0, 255, 255, 0.1)', color: 'var(--clr-accent1)', border: '1px solid var(--clr-accent1)', padding: '0.1rem 0.6rem', borderRadius: '20px', fontSize: '0.65rem', display: 'inline-block', marginBottom: '0.25rem' }}>
            {slide.icon} {slide.tag}
          </div>
          <h2 className="slide-title" style={{ margin: 0, fontSize: '1.6rem', background: 'linear-gradient(90deg, #fff, var(--clr-accent1))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {slide.title}
          </h2>
        </div>
      </div>
      
      {/* Immersive Dashboard Grid (No Scroll) */}
      <div className="dashboard-grid-modern" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '0.75rem', 
        flex: 1, 
        minHeight: 0,
        width: '100%',
        overflow: 'hidden'
      }}>
        
        {/* PANEL 1: Methodology (Compressed) */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.03)', 
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)', 
          borderRadius: '12px', 
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          overflow: 'hidden'
        }}>
          <h3 style={{ fontSize: '0.85rem', color: 'var(--clr-accent2)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.4rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--clr-accent2)' }}></span>
            Methodology
          </h3>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem', overflow: 'hidden' }}>
            {slide.columns?.map((col, ci) => (
              <div key={ci} style={{ 
                background: 'rgba(255, 255, 255, 0.02)', 
                border: '1px solid rgba(255,255,255,0.05)', 
                borderRadius: '8px', 
                padding: '0.6rem 0.8rem' 
              }}>
                <h4 style={{ fontSize: '0.75rem', color: 'var(--clr-accent2)', marginBottom: '0.25rem', fontWeight: '600' }}>{col.heading}</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                  {col.items.map((item, ii) => (
                    <li key={ii} style={{ fontSize: '0.75rem', color: 'var(--clr-text)', opacity: 0.8, lineHeight: 1.25, display: 'flex', gap: '0.4rem' }}>
                      <span style={{ color: 'var(--clr-accent1)' }}>▶</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* PANEL 2: Visual Evidence (Compressed) */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.03)', 
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)', 
          borderRadius: '12px', 
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          overflow: 'hidden'
        }}>
          <h3 style={{ fontSize: '0.85rem', color: 'var(--clr-accent1)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.4rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--clr-accent1)' }}></span>
            Raw Input
          </h3>
          <div style={{ 
            flex: 1, 
            background: 'rgba(0,0,0,0.3)', 
            borderRadius: '10px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            overflow: 'hidden',
            padding: '1rem',
            position: 'relative'
          }}>
            <img 
              src={slide.image || '/dataset-example.png'} 
              alt="Menu" 
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '4px', boxShadow: '0 10px 40px rgba(0,0,0,0.7)' }}
            />
          </div>
        </div>

        {/* PANEL 3: Ground Truth (Compressed) */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.03)', 
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)', 
          borderRadius: '12px', 
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          overflow: 'hidden'
        }}>
          <h3 style={{ fontSize: '0.85rem', color: 'var(--clr-accent3)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.4rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--clr-accent3)' }}></span>
            Ground Truth
          </h3>
          <div style={{ 
            flex: 1, 
            background: 'rgba(0,0,0,0.2)', 
            borderRadius: '10px', 
            overflow: 'hidden'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)' }}>
              <thead style={{ background: '#0d1117' }}>
                <tr>
                  {headers.map((h, i) => (
                    <th key={i} style={{ 
                      padding: '0.4rem 0.75rem', 
                      textAlign: i === 0 ? 'left' : 'right', 
                      fontSize: '0.7rem', 
                      color: 'var(--clr-accent3)', 
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                      textTransform: 'uppercase'
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={ri} style={{ background: ri % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ 
                        padding: '1px 0.75rem', 
                        fontSize: '0.72rem', 
                        color: ci === 0 ? '#fff' : 'var(--clr-accent3)', 
                        textAlign: ci === 0 ? 'left' : 'right',
                        borderBottom: '1px solid rgba(255,255,255,0.01)'
                      }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
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
                <span className="fc-label" style={{ top: '-1.8rem', whiteSpace: 'normal', width: '80px', lineHeight: 1.1 }}>preprocessing<br />on the image</span>
                <div className="fc-arrow-line"></div>
              </div>
              <div className="fc-node rect" style={{ gridColumn: 3, gridRow: 1 }}>
                <div className="fc-node-title">Preprocessed<br />Image</div>
              </div>
              <div className="fc-arrow right" style={{ gridColumn: 4, gridRow: 1 }}>
                <span className="fc-label" style={{ top: '-2.4rem', whiteSpace: 'normal', width: '80px', lineHeight: 1.1 }}>it goes to<br />OCR engine<br />for text extraction</span>
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
                <div className="fc-node-title">Menu Card<br />Image</div>
              </div>
              <div className="fc-arrow right" style={{ gridColumn: 2, gridRow: 1 }}>
                <div className="fc-arrow-line"></div>
              </div>

              {/* ROW 3 */}
              <div className="fc-node rect" style={{ gridColumn: 1, gridRow: 3 }}>
                <div className="fc-node-title">User<br />Preferences</div>
              </div>
              <div className="fc-arrow right" style={{ gridColumn: 2, gridRow: 3 }}>
                <div className="fc-arrow-line"></div>
              </div>

              {/* ROW 1 to 3 -> Gemini API */}
              <div className="fc-node ellipse" style={{ gridColumn: 3, gridRow: '1 / 4', height: '120px', display: 'flex', alignItems: 'center' }}>
                <div className="fc-node-title" style={{ fontSize: '0.95rem' }}>Google<br />Gemini<br />API</div>
              </div>

              {/* ROW 2 Arrow from Gemini to Recommended */}
              <div className="fc-arrow right" style={{ gridColumn: 4, gridRow: 2 }}>
                <div className="fc-arrow-line"></div>
              </div>

              {/* ROW 1 to 3 -> Recommended Dishes */}
              <div className="fc-node rect" style={{ gridColumn: 5, gridRow: '1 / 4', height: '100%', minHeight: '160px' }}>
                <div className="fc-node-title">Recomended<br />Dishes<br />and<br />Generate<br />Images</div>
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
    <div className="formal-results-root">
      {slide.tag && <div className="slide-tag formal">{slide.icon} {slide.tag}</div>}
      <h2 className="formal-slide-title">{slide.title}</h2>
      <div className="formal-divider" />

      <div className="formal-split-view">
        {/* LEFT COLUMN: Evaluation Methodology */}
        <div className="formal-col metrics-col">
          <h3 className="formal-col-heading">I. Evaluation Methodology</h3>

          <div className="formal-metric-section">
            <div className="formal-metric-item">
              <div className="f-metric-head">
                <span className="f-metric-name">Character Error Rate (CER)</span>
              </div>
              <p className="f-metric-desc">Measures the accuracy of OCR output at the individual character level by calculating the Levenshtein distance between prediction and ground truth.</p>
              <div className="f-metric-body">
                <div className="f-formula-row">
                  <span className="f-label">Formula:</span>
                  <code>CER = (S + D + I) / N</code>
                </div>
                <div className="f-notation-row">
                  <span className="f-label">Notations:</span>
                  <span className="f-notation-text"><strong>S:</strong> Substitutions | <strong>D:</strong> Deletions | <strong>I:</strong> Insertions | <strong>N:</strong> Total Chars</span>
                </div>
                <div className="f-example-row">
                  <span className="f-label">Example:</span>
                  <div className="f-ex-path">
                    <span>"HELLO"</span>
                    <span className="f-arrow-min">&rarr;</span>
                    <span>"HELO"</span>
                    <span className="f-res">CER: <strong>20%</strong></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="formal-metric-item">
              <div className="f-metric-head">
                <span className="f-metric-name">Word Error Rate (WER)</span>
              </div>
              <p className="f-metric-desc">Evaluates recognition quality at the word level, providing a better measure of readability for menus and sentences.</p>
              <div className="f-metric-body">
                <div className="f-formula-row">
                  <span className="f-label">Formula:</span>
                  <code>WER = (S + D + I) / N</code>
                </div>
                <div className="f-notation-row">
                  <span className="f-label">Notations:</span>
                  <span className="f-notation-text"><strong>S:</strong> Word Subs | <strong>D:</strong> Word Del | <strong>I:</strong> Word Ins | <strong>N:</strong> Total Words</span>
                </div>
                <div className="f-example-row">
                  <span className="f-label">Example:</span>
                  <div className="f-ex-path">
                    <span>"I love ML"</span>
                    <span className="f-arrow-min">&rarr;</span>
                    <span>"I like ML"</span>
                    <span className="f-res">WER: <strong>33.33%</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* RIGHT COLUMN: Benchmarking Results */}
        <div className="formal-col results-col">
          <h3 className="formal-col-heading">II.  Results</h3>

          <div className="formal-table-wrapper">
            <table className="formal-results-table">
              <thead>
                <tr>
                  <th>Model / Metric</th>
                  <th>Accuracy</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>EasyOCR</td>
                  <td className="accent-val">54%</td>
                  <td>Character-level</td>
                </tr>
                <tr>
                  <td>PaddleOCR</td>
                  <td className="accent-val">57%</td>
                  <td>Standard benchmark</td>
                </tr>
                <tr className="highlight-row">
                  <td><strong>Gemini API</strong></td>
                  <td className="accent-val highlight"><strong>98%</strong></td>
                  <td><strong>VLM Multi-modal</strong></td>
                </tr>
              </tbody>
            </table>
          </div>



          {slide.highlight && (
            <div className="formal-conclusion">
              <strong>Conclusion:</strong> {slide.highlight}
            </div>
          )}
        </div>
      </div>
    </div>
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
/* ── Ocr Math Slide ──────────────────────────── */
function OcrMathSlide({ slide }: { slide: SlideData }) {
  const [activeStep, setActiveStep] = React.useState<number | null>(null);

  const handleStepClick = (step: number) => {
    setActiveStep(activeStep === step ? null : step);
    // Smooth scroll to math details on mobile
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setTimeout(() => {
        document.querySelector('.crnn-right-panel')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  return (
    <div className="crnn-ctc-root">
      {/* ── Header ── */}
      <div className="crnn-header">
        <div className="crnn-title-area">
          {slide.tag && <div className="slide-tag">{slide.icon} {slide.tag}</div>}
          <h2 className="slide-title teal">{slide.title}</h2>
          <p className="crnn-goal-text">
            <strong>The fundamental goal of OCR (Optical Character Recognition) is:</strong><br />
            To automatically convert images of text into machine-readable text with maximum accuracy
          </p>
        </div>

      </div>

      <div className="divider" style={{ margin: '0.2rem 0 0.5rem' }} />

      <div className="crnn-body">
        {/* ── LEFT PANEL: Architecture Flow ── */}
        <div className="crnn-left-panel">
          <h3 className="crnn-panel-title">Complete OCR Architecture</h3>
          <div className="crnn-flow new-minimalist-flow">
            <div className="min-flow-step raw-input">Raw Input Image</div>
            <div className="crnn-arrow">↓</div>

            <div
              className={`min-flow-card clickable ${activeStep === 1 ? 'active' : ''}`}
              onClick={() => handleStepClick(1)}
            >
              <div className="min-flow-header">Step 1: Image Acquisition & Preprocessing</div>
              <ul className="min-flow-desc">
                <li>Load image, resize, normalize, denoise</li>
                <li>Convert to grayscale, enhance contrast</li>
              </ul>
            </div>
            <div className="crnn-arrow">↓</div>

            <div
              className={`min-flow-card clickable ${activeStep === 2 ? 'active' : ''}`}
              onClick={() => handleStepClick(2)}
            >
              <div className="min-flow-header">Step 2: Feature Extraction with CNN</div>
              <ul className="min-flow-desc">
                <li>Convolution layers extract visual patterns</li>
                <li>Pooling reduces spatial dimensions</li>
                <li>Output: Feature maps &rarr; Feature sequence</li>
              </ul>
            </div>
            <div className="crnn-arrow">↓</div>

            <div
              className={`min-flow-card clickable ${activeStep === 3 ? 'active' : ''}`}
              onClick={() => handleStepClick(3)}
            >
              <div className="min-flow-header">Step 3: Converting CNN Output to Sequence</div>
              <ul className="min-flow-desc">
                <li>Collapse height dimension</li>
                <li>Each column = one time step feature vector</li>
                <li>Output: (T &times; d) sequence for RNN</li>
              </ul>
            </div>
            <div className="crnn-arrow">↓</div>

            <div
              className={`min-flow-card clickable ${activeStep === 4 ? 'active' : ''}`}
              onClick={() => handleStepClick(4)}
            >
              <div className="min-flow-header">Step 4: Sequence Modeling with BiLSTM</div>
              <ul className="min-flow-desc">
                <li>Forward LSTM: left-to-right context</li>
                <li>Backward LSTM: right-to-left context</li>
                <li>Captures character dependencies</li>
              </ul>
            </div>
            <div className="crnn-arrow">↓</div>

            <div
              className={`min-flow-card clickable ${activeStep === 5 ? 'active' : ''}`}
              onClick={() => handleStepClick(5)}
            >
              <div className="min-flow-header">Step 5: Output Layer (Softmax)</div>
              <ul className="min-flow-desc">
                <li>Linear transformation</li>
                <li>Softmax activation</li>
                <li>Output: p<sub>t</sub>(char) for each time step</li>
              </ul>
            </div>
            <div className="crnn-arrow">↓</div>

            <div
              className={`min-flow-card clickable ${activeStep === 6 ? 'active' : ''}`}
              onClick={() => handleStepClick(6)}
            >
              <div className="min-flow-header">Step 6: Connectionist Temporal Classification (CTC)</div>
              <ul className="min-flow-desc">
                <li>Solves alignment problem (T &ne; L)</li>
                <li>Sum probabilities over all valid paths</li>
                <li>Output: P(text | image)</li>
              </ul>
            </div>
            <div className="crnn-arrow">↓</div>

            <div
              className={`min-flow-card clickable ${activeStep === 7 ? 'active' : ''}`}
              onClick={() => handleStepClick(7)}
            >
              <div className="min-flow-header">Step 7: Training Loss</div>
              <ul className="min-flow-desc">
                <li>Negative log-likelihood of CTC probability</li>
                <li>Backpropagate gradients through all layers</li>
                <li>Update weights: W &larr; W - &eta;&middot;&part;L/&part;W</li>
              </ul>
            </div>
            <div className="min-flow-arrow">↓</div>

            <div
              className={`min-flow-card clickable ${activeStep === 8 ? 'active' : ''}`}
              onClick={() => handleStepClick(8)}
            >
              <div className="min-flow-header">Step 8: Inference (Decoding)</div>
              <ul className="min-flow-desc">
                <li>Greedy: argmax at each time step</li>
                <li>Beam search: keep top-B hypotheses</li>
                <li>Apply CTC collapse: remove blanks &amp; duplicates</li>
              </ul>
            </div>
            <div className="crnn-arrow">↓</div>

            <div className="min-flow-step final-output">Final Output Text: "Hello World"</div>
          </div>
        </div>

        {/* ── RIGHT PANEL: Math Cards ── */}
        <div className="crnn-right-panel">
          {activeStep === 1 && (
            <div className="crnn-math-card fade-in">
              <h4 style={{ color: 'var(--clr-accent3)' }}>Details: Image Acquisition & Preprocessing</h4>
              <div className="table-responsive">
                <table className="crnn-table">
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>Mathematical Formulation</th>
                      <th>Why Needed</th>
                      <th>Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Resize</strong></td>
                      <td>
                        <div className="crnn-eq-inline">I' = Resize(I, H', W')</div>
                      </td>
                      <td>Standardize input size for CNN</td>
                      <td>Consistent feature extraction</td>
                    </tr>
                    <tr>
                      <td><strong>Normalize</strong></td>
                      <td>
                        <div className="crnn-eq-inline flex-frac" style={{ display: 'inline-flex' }}>
                          <span>I<sub>norm</sub> = </span>
                          <div className="frac"><span>I - &mu;</span><span className="frac-line"></span><span>&sigma;</span></div>
                        </div>
                      </td>
                      <td>Stabilize input distribution</td>
                      <td>Faster convergence, better gradients</td>
                    </tr>
                    <tr>
                      <td><strong>Grayscale</strong></td>
                      <td>
                        <div className="crnn-eq-inline">I<sub>gray</sub> = 0.299R + 0.587G + 0.114B</div>
                      </td>
                      <td>Remove color redundancy</td>
                      <td>Focus on text structure</td>
                    </tr>
                    <tr>
                      <td><strong>Denoise</strong></td>
                      <td>
                        <div className="crnn-eq-inline" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
                          <span>I<sub>denoise</sub> = I<sub>gray</sub> * G</span>
                          <span className="flex-frac">
                            <span>G(i,j) = </span>
                            <div className="frac" style={{ margin: '0 0.3rem' }}><span>1</span><span className="frac-line"></span><span>2&pi;&sigma;<sup>2</sup></span></div>
                            <span> e<sup> -(i<sup>2</sup>+j<sup>2</sup>) / 2&sigma;<sup>2</sup></sup></span>
                          </span>
                        </div>
                      </td>
                      <td>Remove high-frequency noise</td>
                      <td>Cleaner edges, less false detection</td>
                    </tr>
                    <tr>
                      <td><strong>Enhance</strong></td>
                      <td>
                        <div className="crnn-eq-inline">I<sub>enh</sub> = CDF(I<sub>denoise</sub>) &middot; (L-1)</div>
                      </td>
                      <td>Improve contrast</td>
                      <td>Better text-background separation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="crnn-math-card fade-in">
              <h4 style={{ color: 'var(--clr-accent3)' }}>Details: Feature Extraction with CNN</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--clr-text)', marginBottom: '0.2rem' }}>
                <strong>Objective:</strong> Transform the preprocessed image into high-level visual features (edges &rarr; strokes &rarr; characters).
              </p>
              <div className="table-responsive">
                <table className="crnn-table">
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>Mathematical Formulation</th>
                      <th>Why Needed</th>
                      <th>Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Convolution</strong></td>
                      <td>
                        <div className="crnn-eq-inline">F = I * K</div>
                      </td>
                      <td>Extract local patterns</td>
                      <td>Detect edges &amp; strokes</td>
                    </tr>
                    <tr>
                      <td><strong>Activation</strong></td>
                      <td>
                        <div className="crnn-eq-inline">A = max(0, F)</div>
                      </td>
                      <td>Add non-linearity</td>
                      <td>Capture complex shapes</td>
                    </tr>
                    <tr>
                      <td><strong>Pooling</strong></td>
                      <td>
                        <div className="crnn-eq-inline">P = max(A)</div>
                      </td>
                      <td>Reduce size &amp; noise</td>
                      <td>Robust features</td>
                    </tr>
                    <tr>
                      <td><strong>Deep Layers</strong></td>
                      <td>
                        <div className="crnn-eq-inline">F<sub>final</sub></div>
                      </td>
                      <td>Learn hierarchy</td>
                      <td>Characters detected</td>
                    </tr>
                    <tr>
                      <td><strong>Sequence Conversion</strong></td>
                      <td>
                        <div className="crnn-eq-inline">x<sub>t</sub> = F[:,:,t]</div>
                      </td>
                      <td>Convert to sequence</td>
                      <td>Ready for RNN/CTC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="crnn-insight-box">
                <strong>💡 Why CNN in OCR?</strong>
                <p>CNN extracts hierarchical spatial features like edges, strokes, and character shapes, which are then converted into sequences for recognition models like RNN or Transformers.</p>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="crnn-math-card fade-in">
              <h4 style={{ color: 'var(--clr-accent3)' }}>Details: Converting CNN Output to Sequence</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--clr-text)', marginBottom: '0.2rem' }}>
                <strong>Objective:</strong> Convert 2D CNN feature maps into a 1D sequence suitable for RNN/CTC.
              </p>
              <div className="table-responsive">
                <table className="crnn-table">
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>Mathematical Formulation</th>
                      <th>Why Needed</th>
                      <th>Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Collapse height</strong></td>
                      <td>
                        <div className="crnn-eq-inline">x<sub>t</sub> = Flatten(F[:,:,t])</div>
                      </td>
                      <td>Convert 2D &rarr; 1D</td>
                      <td>Sequential representation</td>
                    </tr>
                    <tr>
                      <td><strong>Column as timestep</strong></td>
                      <td>
                        <div className="crnn-eq-inline">t = 1 &hellip; W</div>
                      </td>
                      <td>Preserve left&rarr;right order</td>
                      <td>Maintains text structure</td>
                    </tr>
                    <tr>
                      <td><strong>Sequence output</strong></td>
                      <td>
                        <div className="crnn-eq-inline">X &isin; &#8477;<sup>T &times; d</sup></div>
                      </td>
                      <td>Input to RNN/CTC</td>
                      <td>Enables sequence learning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="crnn-insight-box">
                <strong>💡 How does OCR convert image to sequence?</strong>
                <p>The CNN feature map is sliced along the width dimension, where each column is flattened into a feature vector representing one time step. This converts the 2D spatial representation into a 1D sequence for sequential models like BiLSTM.</p>
              </div>
            </div>
          )}

          {activeStep === 4 && (
            <div className="crnn-math-card fade-in">
              <h4 style={{ color: 'var(--clr-accent3)' }}>Details: Sequence Modeling with BiLSTM</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--clr-text)', marginBottom: '0.2rem' }}>
                <strong>Objective:</strong> Model contextual dependencies in text sequence (e.g., "C" followed by "A" &rarr; likely "T").
              </p>
              <div className="table-responsive">
                <table className="crnn-table">
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>Mathematical Formulation</th>
                      <th>Why Needed</th>
                      <th>Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Forward LSTM</strong></td>
                      <td>
                        <div className="crnn-eq-inline">h&#8407;<sub>t</sub> = LSTM(x<sub>t</sub>, h<sub>t-1</sub>)</div>
                      </td>
                      <td>Capture past context</td>
                      <td>Understand sequence flow</td>
                    </tr>
                    <tr>
                      <td><strong>Backward LSTM</strong></td>
                      <td>
                        <div className="crnn-eq-inline">h&#8406;<sub>t</sub> = LSTM(x<sub>t</sub>, h<sub>t+1</sub>)</div>
                      </td>
                      <td>Capture future context</td>
                      <td>Improve prediction accuracy</td>
                    </tr>
                    <tr>
                      <td><strong>Combine</strong></td>
                      <td>
                        <div className="crnn-eq-inline">h<sub>t</sub> = [ h&#8407;<sub>t</sub> ; h&#8406;<sub>t</sub> ]</div>
                      </td>
                      <td>Use full context</td>
                      <td>Rich representation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="crnn-insight-box">
                <strong>💡 Why BiLSTM in OCR?</strong>
                <p>BiLSTM captures both past and future context in the character sequence, which helps resolve ambiguities and improves recognition accuracy, especially for similar-looking characters.</p>
              </div>
            </div>
          )}

          {activeStep === 5 && (
            <div className="crnn-math-card fade-in">
              <h4 style={{ color: 'var(--clr-accent3)' }}>Details: Output Layer (Softmax)</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--clr-text)', marginBottom: '0.2rem' }}>
                <strong>Objective:</strong> Convert the BiLSTM feature representation into a probability distribution over all possible characters at each time step.
              </p>
              <div className="table-responsive">
                <table className="crnn-table">
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>Mathematical Formulation</th>
                      <th>Why Needed</th>
                      <th>Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Linear Transformation</strong></td>
                      <td>
                        <div className="crnn-eq-inline">z<sub>t</sub> = W h<sub>t</sub> + b</div>
                      </td>
                      <td>Convert features to raw scores</td>
                      <td>Produces logits for each character</td>
                    </tr>
                    <tr>
                      <td><strong>Softmax Activation</strong></td>
                      <td>
                        <div className="crnn-eq-inline flex-frac" style={{ display: 'inline-flex' }}>
                          <span>p<sub>t</sub>(k) = </span>
                          <div className="frac">
                            <span>e<sup>z<sub>t</sub>(k)</sup></span>
                            <span className="frac-line"></span>
                            <span>&sum;<sub>j</sub> e<sup>z<sub>t</sub>(j)</sup></span>
                          </div>
                        </div>
                      </td>
                      <td>Convert scores into probabilities</td>
                      <td>Normalized probability distribution</td>
                    </tr>
                    <tr>
                      <td><strong>Output</strong></td>
                      <td>
                        <div className="crnn-eq-inline">p<sub>t</sub>(char) &forall; t</div>
                      </td>
                      <td>Represent character likelihood</td>
                      <td>Probability per character per step</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeStep === 6 && (
            <div className="crnn-math-card fade-in">
              <h4 style={{ color: 'var(--clr-accent3)' }}>Details: Connectionist Temporal Classification (CTC)</h4>
              <div className="table-responsive">
                <table className="crnn-table">
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>Mathematical Formulation</th>
                      <th>Why Needed</th>
                      <th>Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Alignment Problem</strong></td>
                      <td>
                        <div className="crnn-eq-inline">T &ne; L</div>
                      </td>
                      <td>Input length &ne; label length</td>
                      <td>Handles variable-length sequences</td>
                    </tr>
                    <tr>
                      <td><strong>Path Probability</strong></td>
                      <td>
                        <div className="crnn-eq-inline">P(&pi; | X) = &prod;<sub>t=1</sub><sup>T</sup> p<sub>t</sub>(&pi;<sub>t</sub>)</div>
                      </td>
                      <td>Compute probability of each path</td>
                      <td>Models all possible alignments</td>
                    </tr>
                    <tr>
                      <td><strong>Summation over Paths</strong></td>
                      <td>
                        <div className="crnn-eq-inline">P(Y | X) = &sum;<sub>&pi; &isin; B<sup>-1</sup>(Y)</sub> P(&pi; | X)</div>
                      </td>
                      <td>Combine all valid paths</td>
                      <td>Alignment-free sequence prediction</td>
                    </tr>
                    <tr>
                      <td><strong>Final Output</strong></td>
                      <td>
                        <div className="crnn-eq-inline">P(text | image)</div>
                      </td>
                      <td>Predict final text sequence</td>
                      <td>End-to-end OCR recognition</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeStep === 7 && (
            <div className="crnn-math-card fade-in">
              <h4 style={{ color: 'var(--clr-accent3)' }}>Details: Training Loss</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--clr-text)', marginBottom: '0.2rem' }}>
                <strong>Objective:</strong> Minimize the difference between predicted text and ground truth by optimizing model parameters using CTC loss.
              </p>
              <div className="table-responsive">
                <table className="crnn-table">
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>Mathematical Formulation</th>
                      <th>Why Needed</th>
                      <th>Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Loss Function</strong></td>
                      <td>
                        <div className="crnn-eq-inline">&#8466; = -log P(Y | X)</div>
                      </td>
                      <td>Measure prediction error</td>
                      <td>Penalizes incorrect predictions</td>
                    </tr>
                    <tr>
                      <td><strong>CTC Probability</strong></td>
                      <td>
                        <div className="crnn-eq-inline">P(Y | X) = &sum;<sub>&pi; &isin; B<sup>-1</sup>(Y)</sub> P(&pi; | X)</div>
                      </td>
                      <td>Use all valid alignments</td>
                      <td>Alignment-free training</td>
                    </tr>
                    <tr>
                      <td><strong>Gradient Computation</strong></td>
                      <td>
                        <div className="crnn-eq-inline flex-frac" style={{ display: 'inline-flex' }}>
                          <div className="frac">
                            <span>&part;&#8466;</span>
                            <span className="frac-line"></span>
                            <span>&part;W</span>
                          </div>
                        </div>
                      </td>
                      <td>Compute parameter updates</td>
                      <td>Enables learning</td>
                    </tr>
                    <tr>
                      <td><strong>Weight Update</strong></td>
                      <td>
                        <div className="crnn-eq-inline flex-frac" style={{ display: 'inline-flex' }}>
                          <span>W &larr; W - &eta; &middot; </span>
                          <div className="frac">
                            <span>&part;&#8466;</span>
                            <span className="frac-line"></span>
                            <span>&part;W</span>
                          </div>
                        </div>
                      </td>
                      <td>Optimize model parameters</td>
                      <td>Improves accuracy over time</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeStep === 8 && (
            <div className="crnn-math-card fade-in">
              <h4 style={{ color: 'var(--clr-accent3)' }}>Details: Inference (Decoding)</h4>
              <div className="table-responsive">
                <table className="crnn-table">
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>Mathematical Formulation</th>
                      <th>Why Needed</th>
                      <th>Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Greedy Decoding</strong></td>
                      <td>
                        <div className="crnn-eq-inline">y&#770;<sub>t</sub> = argmax<sub>k</sub> p<sub>t</sub>(k)</div>
                      </td>
                      <td>Select most probable char at each step</td>
                      <td>Fast but may miss global optimum</td>
                    </tr>
                    <tr>
                      <td><strong>Beam Search</strong></td>
                      <td>
                        <div className="crnn-eq-inline">Y&#770; = argmax<sub>Y</sub> P(Y | X)</div>
                      </td>
                      <td>Consider multiple hypotheses</td>
                      <td>More accurate sequence prediction</td>
                    </tr>
                    <tr>
                      <td><strong>CTC Collapse</strong></td>
                      <td>
                        <div className="crnn-eq-inline">B(&pi;)</div>
                      </td>
                      <td>Convert raw sequence to valid text</td>
                      <td>Final readable output</td>
                    </tr>
                    <tr>
                      <td><strong>Final Output</strong></td>
                      <td>
                        <div className="crnn-eq-inline">Y&#770; = text</div>
                      </td>
                      <td>Generate final prediction</td>
                      <td>Recognized text from image</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Gemini Pipeline Slide ─────────────────────── */
function GeminiPipelineSlide({ slide }: { slide: SlideData }) {
  return (
    <div className="gemini-pipe-slide">
      <div className="slide-tag">✨ {slide.tag}</div>
      <h2 className="slide-title teal">{slide.title}</h2>

      <div className="gp-outer-container">
        <div className="gp-inner-border">
          <div className="gp-grid">
            {/* LEFT: Inputs */}
            <div className="gp-section gp-inputs">
              <div className="gp-node rect food-menu">
                <div className="gp-node-title">FOOD MENU<br />CARD IMAGE</div>
              </div>

              <div className="gp-node rect user-prefs">
                <div className="gp-node-title">User<br />Preferences</div>
                <div className="gp-node-list">
                  <div>1. Language</div>
                  <div>2. Veg/Non-veg</div>
                  <div>3. Spices</div>
                </div>
              </div>
            </div>

            {/* CONNECTORS: Left to Center */}
            <div className="gp-connectors gp-left-to-center">
              <svg className="gp-svg-lines" style={{ overflow: 'visible' }}>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7"
                    refX="10" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                  </marker>
                </defs>
                {/* Top line to Gemini API */}
                <line x1="0" y1="20%" x2="105%" y2="45%" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
                {/* Bottom line to Gemini API */}
                <line x1="0" y1="80%" x2="105%" y2="55%" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
              </svg>
            </div>

            {/* CENTER: Gemini API & Prompt */}
            <div className="gp-section gp-central">
              <div className="gp-central-box">
                <div className="gp-node circle gemini-api">
                  <div className="gp-node-title">Gemini API</div>
                </div>

                <div className="gp-arrow-up-svg">
                  <svg width="20" height="40" style={{ overflow: 'visible' }}>
                    <line x1="10" y1="40" x2="10" y2="5" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  </svg>
                </div>

                <div className="gp-node rect prompt-node">
                  <div className="gp-node-title">Prompt</div>
                </div>
              </div>
            </div>

            {/* CONNECTORS: Center to Right */}
            <div className="gp-connectors gp-center-to-right">
              <svg className="gp-svg-lines" style={{ overflow: 'visible' }}>
                <line x1="-5%" y1="50%" x2="100%" y2="50%" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
              </svg>
            </div>

            {/* RIGHT: Results */}
            <div className="gp-section gp-outputs">
              <div className="gp-node rect results-large">
                <div className="results-content">
                  <p>Translated Dish Names</p>
                  <p className="results-and">and</p>
                  <p>Recommended Dish name<br />Based on User Preferences</p>
                  <div className="results-divider"></div>
                  <p className="results-also">also<br />user can generate dish image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
