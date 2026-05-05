(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/slides.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "slides",
    ()=>slides
]);
const slides = [
    // ─── Slide 0: Title ────────────────────────────────────────────
    {
        id: 0,
        type: "title",
        title: "LinguineAI : Visual Menu Understanding & Intelligent Dish Recommendation System",
        content: [
            "Presented by: Arnab Bera · Anirban Chatterjee · Nisith Ranjan Hazra · Suvadeep Dutta",
            "Institution: Chennai Mathematical Institute (CMI)",
            "Course: Applied Machine Learning"
        ],
        icon: "🍽️"
    },
    // ─── Slide 1: Agenda ───────────────────────────────────────────
    {
        id: 1,
        type: "agenda",
        title: "Agenda",
        tag: "Overview",
        content: [
            "Problem Statement & Motivation",
            "Literature Review",
            "System Architecture",
            "Dataset & Preprocessing",
            "OCR & Vision Pipeline",
            "Recommendation Engine",
            "Implementation & Stack",
            "Results & Evaluation",
            "Demo",
            "Challenges & Limitations",
            "Future Work",
            "Conclusion",
            "References"
        ]
    },
    // ─── Slide 2: Problem Statement ────────────────────────────────
    {
        id: 2,
        type: "problem",
        title: "Problem Statement",
        tag: "The Challenge",
        subtitle: "Travelers and users often face significant difficulty understanding restaurant menus, especially in foreign countries.",
        // columns = 3 upper cards
        columns: [
            {
                heading: "Real-World Challenge",
                items: [
                    "Menu is written in an unknown or foreign language",
                    "Dish names are unfamiliar or culturally specific",
                    "Descriptions are incomplete, vague, or entirely missing"
                ]
            },
            {
                heading: "Limitations of Existing Menus",
                items: [
                    "No clear descriptions of ingredients or preparation",
                    "No images to visualize the dish before ordering",
                    "Unrecognizable names that carry no intuitive meaning"
                ]
            },
            {
                heading: "Consequences for Users",
                items: [
                    "Confusion and frustration while ordering food",
                    "Poor or unsatisfactory food choices",
                    "Over-reliance on staff recommendations or guesswork",
                    "Difficulty maintaining dietary preferences & allergen needs"
                ]
            }
        ],
        // highlight = core problem question block
        highlight: "How can we build an intelligent system that automatically digitizes menu images, extracts and understands content, translates foreign text, enhances missing information, and provides personalized dish recommendations based on user preferences?",
        // content = core problem sub-points
        content: [
            "Automatically digitize and process menu images",
            "Extract and understand menu content with OCR",
            "Translate and interpret foreign language text",
            "Enhance missing dish information using external knowledge",
            "Provide personalized dish recommendations based on user preferences"
        ]
    },
    // ─── Slide 3: Our Solution Goal ────────────────────────────────
    {
        id: 3,
        type: "solution",
        title: "Our Solution Goal",
        tag: "What We Are Building",
        highlight: "We aim to build an AI-powered system that can help users easily understand restaurant menus and choose the best dish without confusion.",
        steps: [
            {
                title: "Image Capture & Input",
                desc: "Takes an image of a restaurant menu as input. Works robustly with printed or slightly unclear images."
            },
            {
                title: "Computer Vision & OCR",
                desc: "Detects and reads the text from the menu automatically."
            },
            {
                title: "Translation",
                desc: "Translates foreign language menus into English for easy understanding."
            },
            {
                title: "Content Analysis",
                desc: "Analyzes menu content to identify important details: Dish name, Price, Description."
            },
            {
                title: "Knowledge Enhancement",
                desc: "Adds missing details using external data sources: Ingredients, Type of cuisine, Spice level, Veg/Non-veg."
            },
            {
                title: "Visual References",
                desc: "Shows images of the dishes by retrieving them from the internet or generating them."
            },
            {
                title: "Personalized Recommendation",
                desc: "Recommends the best dish based on user preferences like spice level, diet, or cuisine."
            }
        ]
    },
    // ─── Slide 4: Literature Review ────────────────────────────────
    {
        id: 4,
        type: "content",
        title: "Literature Review",
        tag: "Prior Art",
        icon: "📚",
        columns: [
            {
                heading: "OCR & Text Detection",
                items: [
                    "CRAFT (2019) — scene text detection",
                    "PaddleOCR v3 — multilingual OCR",
                    "EasyOCR — 80+ language support",
                    "TrOCR — Transformer-based OCR"
                ]
            },
            {
                heading: "Menu Understanding",
                items: [
                    "MenuNET — menu parsing CNN",
                    "EATEN — entity-aware text networks",
                    "LayoutLM — document layout understanding",
                    "Donut — OCR-free document parsing"
                ]
            },
            {
                heading: "Recommendation",
                items: [
                    "Collaborative filtering (NCF)",
                    "Content-based via embeddings",
                    "LLM-guided preference elicitation",
                    "GPT-4V multimodal reasoning"
                ]
            }
        ]
    },
    // ─── Slide 5: System Architecture ─────────────────────────────
    {
        id: 5,
        type: "architecture",
        title: "System Architecture",
        tag: "High-Level Design",
        icon: "🏗️",
        content: [
            "CAPTURE — User uploads menu image via browser / mobile",
            "DETECT — Vision model detects text regions (CRAFT / Gemini)",
            "EXTRACT — OCR engine reads raw text (EasyOCR / PaddleOCR / Gemini)",
            "PARSE — LLM structures items, prices and descriptions",
            "TRANSLATE — Gemini translates into user's preferred language",
            "RECOMMEND — Personalised dish ranking via user preferences",
            "PRESENT — Clean UI with translated menu + top picks"
        ],
        highlight: "7-Stage End-to-End Pipeline"
    },
    // ─── Slide 6: Dataset & Preprocessing ─────────────────────────
    {
        id: 6,
        type: "content",
        title: "Dataset & Preprocessing",
        tag: "Data",
        icon: "🗄️",
        content: [
            "Custom scraped restaurant menu images (Bengali, Hindi, Chinese, English)",
            "Augmented with rotations, blur, and compression artefacts",
            "Bounding-box annotations for text region evaluation",
            "Image preprocessing: grayscale normalisation, CLAHE, deskew",
            "Text cleaning: remove noise tokens, standardise currency symbols",
            "Train / Val / Test split: 70 / 15 / 15"
        ],
        highlight: "~2,400 menu images across 4 languages"
    },
    // ─── Slide 7: OCR & Vision Pipeline ───────────────────────────
    {
        id: 7,
        type: "methodology",
        title: "OCR & Vision Pipeline",
        tag: "Methodology",
        icon: "👁️",
        columns: [
            {
                heading: "Stage 1 — Detection",
                items: [
                    "Input image → ResNet feature extractor",
                    "CRAFT heatmaps for character regions",
                    "Bounding polygon generation",
                    "Non-maximum suppression"
                ]
            },
            {
                heading: "Stage 2 — Recognition",
                items: [
                    "Cropped ROIs fed to OCR engine",
                    "EasyOCR: LSTM sequence model",
                    "PaddleOCR: SVTR Transformer head",
                    "Gemini Vision: end-to-end VLM"
                ]
            },
            {
                heading: "Stage 3 — Fusion",
                items: [
                    "Confidence-weighted ensemble",
                    "Majority vote across engines",
                    "Post-correction with Gemini LLM",
                    "Structured JSON output"
                ]
            }
        ]
    },
    // ─── Slide 8: Recommendation Engine ───────────────────────────
    {
        id: 8,
        type: "methodology",
        title: "Recommendation Engine",
        tag: "Methodology",
        icon: "🤖",
        content: [
            "User inputs preferences: cuisine type, dietary needs, spice level",
            "Dish embeddings generated via Sentence-BERT on descriptions",
            "Cosine similarity scoring between user profile & dish vectors",
            "Gemini LLM re-ranks top-10 with natural language reasoning",
            "Output: ranked list with explanations + allergen warnings",
            "Feedback loop stores thumbs-up/down for personalisation"
        ],
        highlight: "Hybrid: Embedding Similarity + LLM Re-ranking"
    },
    // ─── Slide 9: Implementation & Tech Stack ─────────────────────
    {
        id: 9,
        type: "content",
        title: "Implementation & Tech Stack",
        tag: "Engineering",
        icon: "🛠️",
        columns: [
            {
                heading: "Frontend",
                items: [
                    "Next.js 14 (App Router)",
                    "React 18 with hooks",
                    "Vanilla CSS animations",
                    "Responsive mobile-first design"
                ]
            },
            {
                heading: "Backend",
                items: [
                    "FastAPI (Python 3.11)",
                    "EasyOCR / PaddleOCR",
                    "Google Gemini API",
                    "Sentence-Transformers"
                ]
            },
            {
                heading: "Infrastructure",
                items: [
                    "Docker Compose",
                    "GitHub Actions CI",
                    "Environment-based secrets",
                    "REST JSON API"
                ]
            }
        ]
    },
    // ─── Slide 10: Results & Evaluation ───────────────────────────
    {
        id: 10,
        type: "results",
        title: "Results & Evaluation",
        tag: "Findings",
        icon: "📊",
        content: [
            "OCR Character Accuracy — EasyOCR: 84.2% | PaddleOCR: 87.6% | Gemini: 93.1%",
            "End-to-end Menu Parse F1 — Gemini pipeline: 0.891",
            "Translation BLEU Score — avg 38.4 across 4 language pairs",
            "Recommendation Precision@5 — 0.74 (user study, n=30)",
            "System latency — avg 3.2 s end-to-end on 4G mobile network",
            "User satisfaction (SUS score) — 82/100 (Good)"
        ],
        highlight: "Gemini Vision outperforms standalone OCR by 5.5% accuracy"
    },
    // ─── Slide 11: Demo ────────────────────────────────────────────
    {
        id: 11,
        type: "demo",
        title: "System Demo",
        tag: "Live Preview",
        icon: "🎬",
        content: [
            "Step 1 — Upload a Bengali restaurant menu image",
            "Step 2 — Select OCR model (EasyOCR / PaddleOCR / Gemini)",
            "Step 3 — View extracted & translated dish list",
            "Step 4 — Enter preferences: vegetarian, mild spice",
            "Step 5 — Receive ranked recommendations with explanations",
            "Step 6 — Provide feedback to personalise future results"
        ],
        highlight: "Demo available at localhost:3000 during presentation"
    },
    // ─── Slide 12: Challenges & Limitations ───────────────────────
    {
        id: 12,
        type: "content",
        title: "Challenges & Limitations",
        tag: "Honest Assessment",
        icon: "⚠️",
        content: [
            "Low-resolution or heavily decorated menus degrade OCR accuracy",
            "Handwritten menus remain a significant open challenge",
            "Gemini API rate limits affect real-time throughput",
            "Recommendation cold-start problem for new users",
            "Limited evaluation dataset size for rare languages",
            "Price parsing accuracy drops with complex layout menus"
        ]
    },
    // ─── Slide 13: Future Work ─────────────────────────────────────
    {
        id: 13,
        type: "content",
        title: "Future Work",
        tag: "Roadmap",
        icon: "🚀",
        content: [
            "Fine-tune a domain-specific OCR model on menu datasets",
            "Integrate AR overlay to annotate physical menus in real-time",
            "Add calorie & nutrition estimation from dish images",
            "Build collaborative filtering with crowd-sourced ratings",
            "Support voice-based preference input for accessibility",
            "Deploy as a cross-platform mobile app (React Native)"
        ],
        highlight: "Vision: The Google Lens of Restaurant Menus"
    },
    // ─── Slide 14: Conclusion ─────────────────────────────────────
    {
        id: 14,
        type: "content",
        title: "Conclusion",
        tag: "Takeaways",
        icon: "✅",
        highlight: "LinguineAI successfully demonstrates that modern VLMs and OCR engines can be combined into a unified pipeline to break language barriers in dining.",
        content: [
            "Achieved 93.1% OCR accuracy with Gemini Vision on menu images",
            "Delivered a full-stack, deployable web application",
            "Hybrid recommendation system with satisfying user study results",
            "Modular architecture allows easy swap of OCR / LLM backends",
            "Lays groundwork for a production-ready food-tech product"
        ]
    },
    // ─── Slide 15: References & Q&A ───────────────────────────────
    {
        id: 15,
        type: "thankyou",
        title: "Thank You",
        subtitle: "Questions & References",
        icon: "🙏",
        content: [
            "Baek et al. (2019) CRAFT — CVPR 2019",
            "Du et al. (2022) PaddleOCR — arXiv:2109.03144",
            "JaidedAI EasyOCR — github.com/JaidedAI/EasyOCR",
            "Google Gemini API — ai.google.dev",
            "Reimers & Gurevych (2019) Sentence-BERT — EMNLP 2019",
            "He et al. (2017) NCF — WWW 2017"
        ],
        tag: "CMI · Applied Machine Learning · 2025"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Slide.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Slide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function Slide({ slide, isActive, isPrev }) {
    const cls = [
        'slide',
        isActive ? 'active' : '',
        isPrev ? 'prev' : '',
        `slide-type-${slide.type}`
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        id: `slide-${slide.id}`,
        className: cls,
        "aria-hidden": !isActive,
        children: [
            renderContent(slide),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "slide-watermark",
                children: [
                    slide.id + 1,
                    " / 16"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Slide.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = Slide;
function renderContent(slide) {
    switch(slide.type){
        case 'title':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TitleSlide, {
                slide: slide
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 32,
                columnNumber: 14
            }, this);
        case 'agenda':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AgendaSlide, {
                slide: slide
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 34,
                columnNumber: 14
            }, this);
        case 'problem':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProblemSlide, {
                slide: slide
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 36,
                columnNumber: 14
            }, this);
        case 'solution':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SolutionSlide, {
                slide: slide
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 38,
                columnNumber: 14
            }, this);
        case 'architecture':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArchitectureSlide, {
                slide: slide
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 40,
                columnNumber: 14
            }, this);
        case 'results':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultsSlide, {
                slide: slide
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 42,
                columnNumber: 14
            }, this);
        case 'demo':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DemoSlide, {
                slide: slide
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 44,
                columnNumber: 14
            }, this);
        case 'thankyou':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThankyouSlide, {
                slide: slide
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 46,
                columnNumber: 14
            }, this);
        case 'methodology':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MethodologySlide, {
                slide: slide
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 48,
                columnNumber: 14
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentSlide, {
                slide: slide
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 50,
                columnNumber: 14
            }, this);
    }
}
/* ── Title Slide ─────────────────────────────── */ function TitleSlide({ slide }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "title-slide",
        style: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: '100%',
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "big-icon",
                "aria-hidden": "true",
                children: slide.icon
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "main-title",
                children: slide.title
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "title-meta-divider",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "title-meta",
                children: slide.content?.map((line, i)=>{
                    const colonIdx = line.indexOf(':');
                    const label = line.slice(0, colonIdx);
                    const value = line.slice(colonIdx + 1).trim();
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: [
                                    label,
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this),
                            " ",
                            value
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/Slide.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Slide.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c1 = TitleSlide;
/* ── Agenda Slide ────────────────────────────── */ function AgendaSlide({ slide }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            slide.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "slide-tag",
                children: [
                    "📋 ",
                    slide.tag
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 98,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "slide-title",
                children: slide.title
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divider"
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "agenda-grid",
                children: slide.content?.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "agenda-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "agenda-num",
                                children: String(i + 1).padStart(2, '0')
                            }, void 0, false, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            item
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/Slide.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c2 = AgendaSlide;
/* ── Problem Statement Slide ─────────────────── */ const PROB_ACCENTS = [
    '#ff9f43',
    '#f43f5e',
    '#a78bfa'
]; // amber · rose · violet
function ProblemSlide({ slide }) {
    const coreItems = slide.content ?? [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "prob-root",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prob-head-row",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "slide-tag",
                            children: slide.tag
                        }, void 0, false, {
                            fileName: "[project]/src/components/Slide.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "prob-main-title",
                            children: slide.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/Slide.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        slide.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "prob-subtitle",
                            children: slide.subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/components/Slide.tsx",
                            lineNumber: 129,
                            columnNumber: 30
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Slide.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prob-cards-row",
                children: slide.columns?.map((col, ci)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prob-card",
                        style: {
                            borderTopColor: PROB_ACCENTS[ci]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "prob-card-title",
                                style: {
                                    color: PROB_ACCENTS[ci]
                                },
                                children: col.heading
                            }, void 0, false, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "prob-card-list",
                                children: col.items.map((item, ii)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "prob-card-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "prob-card-num",
                                                style: {
                                                    color: PROB_ACCENTS[ci]
                                                },
                                                children: String(ii + 1).padStart(2, '0')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Slide.tsx",
                                                lineNumber: 150,
                                                columnNumber: 19
                                            }, this),
                                            item
                                        ]
                                    }, ii, true, {
                                        fileName: "[project]/src/components/Slide.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        ]
                    }, ci, true, {
                        fileName: "[project]/src/components/Slide.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prob-core",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prob-core-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "prob-core-label",
                                children: "Core Problem"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "prob-core-q",
                                children: "How can we build an intelligent system that automatically digitizes menu images, extracts content, translates foreign text, and delivers personalized recommendations?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Slide.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "prob-core-list",
                        children: coreItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "prob-core-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "prob-core-dot"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Slide.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this),
                                    item
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Slide.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Slide.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_c3 = ProblemSlide;
/* ── Solution Goal Slide ─────────────────────── */ function SolutionSlide({ slide }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sol-root",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sol-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "slide-tag",
                        children: slide.tag
                    }, void 0, false, {
                        fileName: "[project]/src/components/Slide.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "sol-title",
                        children: slide.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/Slide.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    slide.highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sol-highlight",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sol-highlight-label",
                                children: "OUR AIM"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sol-highlight-text",
                                children: slide.highlight
                            }, void 0, false, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Slide.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divider"
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sol-steps-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "sol-steps-heading",
                        children: "How Our System Works"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Slide.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sol-steps-grid",
                        children: slide.steps?.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sol-step-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sol-step-num",
                                        children: String(i + 1).padStart(2, '0')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Slide.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sol-step-content",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "sol-step-title",
                                                children: step.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Slide.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "sol-step-desc",
                                                children: step.desc
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Slide.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Slide.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Slide.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Slide.tsx",
        lineNumber: 191,
        columnNumber: 5
    }, this);
}
_c4 = SolutionSlide;
/* ── Content Slide ───────────────────────────── */ function ContentSlide({ slide }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            slide.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "slide-tag",
                children: [
                    slide.icon,
                    " ",
                    slide.tag
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 229,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "slide-title",
                children: slide.title
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divider"
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            slide.highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "highlight-box",
                children: slide.highlight
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 233,
                columnNumber: 9
            }, this),
            slide.columns ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "columns-grid",
                children: slide.columns.map((col, ci)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: col.heading
                            }, void 0, false, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 239,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: col.items.map((item, ii)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: item
                                    }, ii, false, {
                                        fileName: "[project]/src/components/Slide.tsx",
                                        lineNumber: 242,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 240,
                                columnNumber: 15
                            }, this)
                        ]
                    }, ci, true, {
                        fileName: "[project]/src/components/Slide.tsx",
                        lineNumber: 238,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 236,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "bullet-list",
                children: slide.content?.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: item
                    }, i, false, {
                        fileName: "[project]/src/components/Slide.tsx",
                        lineNumber: 251,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 249,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_c5 = ContentSlide;
/* ── Architecture Slide ──────────────────────── */ function ArchitectureSlide({ slide }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            slide.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "slide-tag",
                children: [
                    "🏗️ ",
                    slide.tag
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 263,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "slide-title teal",
                children: slide.title
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            slide.highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "highlight-box",
                style: {
                    borderLeftColor: 'var(--clr-accent3)',
                    background: 'linear-gradient(135deg,rgba(29,211,176,0.10),rgba(34,211,238,0.06))'
                },
                children: slide.highlight
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 266,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divider"
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pipeline",
                children: slide.content?.map((step, i)=>{
                    const parts = step.split(' — ');
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pipeline-step",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "step-num",
                                children: String(i + 1).padStart(2, '0')
                            }, void 0, false, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 276,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "step-label",
                                children: parts[0]
                            }, void 0, false, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 277,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "step-desc",
                                children: parts[1]
                            }, void 0, false, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 278,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/Slide.tsx",
                        lineNumber: 275,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c6 = ArchitectureSlide;
/* ── Methodology Slide ───────────────────────── */ function MethodologySlide({ slide }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            slide.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "slide-tag",
                children: [
                    slide.icon,
                    " ",
                    slide.tag
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 291,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "slide-title",
                children: slide.title
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divider"
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            slide.highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "highlight-box",
                children: slide.highlight
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 295,
                columnNumber: 9
            }, this),
            slide.columns ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "columns-grid",
                children: slide.columns.map((col, ci)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-card",
                        style: {
                            borderTopColor: 'var(--clr-accent3)',
                            borderTopWidth: '2px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: col.heading
                            }, void 0, false, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 301,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: col.items.map((item, ii)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: item
                                    }, ii, false, {
                                        fileName: "[project]/src/components/Slide.tsx",
                                        lineNumber: 304,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 302,
                                columnNumber: 15
                            }, this)
                        ]
                    }, ci, true, {
                        fileName: "[project]/src/components/Slide.tsx",
                        lineNumber: 300,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 298,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "bullet-list",
                children: slide.content?.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: item
                    }, i, false, {
                        fileName: "[project]/src/components/Slide.tsx",
                        lineNumber: 312,
                        columnNumber: 44
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 311,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_c7 = MethodologySlide;
/* ── Results Slide ───────────────────────────── */ const RESULT_META = [
    {
        label: 'OCR Accuracy (Gemini)',
        value: '93.1%',
        detail: 'Character-level on menu images'
    },
    {
        label: 'OCR Accuracy (PaddleOCR)',
        value: '87.6%',
        detail: 'Character-level accuracy'
    },
    {
        label: 'OCR Accuracy (EasyOCR)',
        value: '84.2%',
        detail: 'Character-level accuracy'
    },
    {
        label: 'Menu Parse F1',
        value: '0.891',
        detail: 'End-to-end Gemini pipeline'
    },
    {
        label: 'Translation BLEU',
        value: '38.4',
        detail: 'Avg across 4 language pairs'
    },
    {
        label: 'Recommend Precision@5',
        value: '0.74',
        detail: 'User study (n=30)'
    }
];
function ResultsSlide({ slide }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            slide.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "slide-tag",
                children: [
                    slide.icon,
                    " ",
                    slide.tag
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 332,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "slide-title",
                children: slide.title
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divider"
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            slide.highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "highlight-box",
                children: slide.highlight
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 335,
                columnNumber: 27
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "results-grid",
                children: RESULT_META.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "result-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "result-label",
                                children: r.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "result-value",
                                children: r.value
                            }, void 0, false, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "result-detail",
                                children: r.detail
                            }, void 0, false, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 341,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/Slide.tsx",
                        lineNumber: 338,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c8 = ResultsSlide;
/* ── Demo Slide ──────────────────────────────── */ function DemoSlide({ slide }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            slide.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "slide-tag",
                children: [
                    slide.icon,
                    " ",
                    slide.tag
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 353,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "slide-title teal",
                children: slide.title
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 354,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divider"
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, this),
            slide.highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "highlight-box",
                children: slide.highlight
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 356,
                columnNumber: 27
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "demo-steps",
                children: slide.content?.map((step, i)=>{
                    const parts = step.split(' — ');
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "demo-step",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "demo-step-num",
                                children: [
                                    String(i + 1),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 362,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "demo-step-text",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: 'var(--clr-text)'
                                        },
                                        children: parts[0].replace(/Step \d+ — /, '')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Slide.tsx",
                                        lineNumber: 364,
                                        columnNumber: 17
                                    }, this),
                                    parts[1] ? ` — ${parts[1]}` : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Slide.tsx",
                                lineNumber: 363,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/Slide.tsx",
                        lineNumber: 361,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c9 = DemoSlide;
/* ── Thank You Slide ─────────────────────────── */ function ThankyouSlide({ slide }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "thankyou-icon",
                children: slide.icon
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 379,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "slide-title",
                style: {
                    fontSize: 'clamp(2.5rem,5vw,4rem)'
                },
                children: slide.title
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "slide-subtitle",
                children: slide.subtitle
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            slide.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "slide-tag",
                style: {
                    margin: '0 auto 1rem'
                },
                children: [
                    "🎓 ",
                    slide.tag
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 383,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "refs-grid",
                children: slide.content?.map((ref, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ref-item",
                        children: [
                            "[",
                            i + 1,
                            "] ",
                            ref
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/Slide.tsx",
                        lineNumber: 387,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Slide.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Slide.tsx",
        lineNumber: 378,
        columnNumber: 5
    }, this);
}
_c10 = ThankyouSlide;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "Slide");
__turbopack_context__.k.register(_c1, "TitleSlide");
__turbopack_context__.k.register(_c2, "AgendaSlide");
__turbopack_context__.k.register(_c3, "ProblemSlide");
__turbopack_context__.k.register(_c4, "SolutionSlide");
__turbopack_context__.k.register(_c5, "ContentSlide");
__turbopack_context__.k.register(_c6, "ArchitectureSlide");
__turbopack_context__.k.register(_c7, "MethodologySlide");
__turbopack_context__.k.register(_c8, "ResultsSlide");
__turbopack_context__.k.register(_c9, "DemoSlide");
__turbopack_context__.k.register(_c10, "ThankyouSlide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/NavBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function NavBar({ current, total, onPrev, onNext }) {
    _s();
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /* ── Fullscreen toggle ───────────────────────── */ const toggleFullscreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavBar.useCallback[toggleFullscreen]": async ()=>{
            if (!document.fullscreenElement) {
                await document.documentElement.requestFullscreen?.();
            } else {
                await document.exitFullscreen?.();
            }
        }
    }["NavBar.useCallback[toggleFullscreen]"], []);
    /* ── Track fullscreen state changes ─────────── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavBar.useEffect": ()=>{
            const onFsChange = {
                "NavBar.useEffect.onFsChange": ()=>{
                    setIsFullscreen(!!document.fullscreenElement);
                }
            }["NavBar.useEffect.onFsChange"];
            document.addEventListener('fullscreenchange', onFsChange);
            return ({
                "NavBar.useEffect": ()=>document.removeEventListener('fullscreenchange', onFsChange)
            })["NavBar.useEffect"];
        }
    }["NavBar.useEffect"], []);
    /* ── Keyboard shortcuts ──────────────────────── */ const handleKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavBar.useCallback[handleKey]": (e)=>{
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
        }
    }["NavBar.useCallback[handleKey]"], [
        onNext,
        onPrev,
        toggleFullscreen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavBar.useEffect": ()=>{
            window.addEventListener('keydown', handleKey);
            return ({
                "NavBar.useEffect": ()=>window.removeEventListener('keydown', handleKey)
            })["NavBar.useEffect"];
        }
    }["NavBar.useEffect"], [
        handleKey
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "nav-bar",
        "aria-label": "Slide navigation",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                id: "btn-prev",
                className: "nav-btn",
                onClick: onPrev,
                disabled: current === 0,
                "aria-label": "Previous slide",
                children: "←"
            }, void 0, false, {
                fileName: "[project]/src/components/NavBar.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "slide-counter",
                "aria-live": "polite",
                children: [
                    current + 1,
                    " / ",
                    total
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NavBar.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                id: "btn-next",
                className: "nav-btn",
                onClick: onNext,
                disabled: current === total - 1,
                "aria-label": "Next slide",
                children: "→"
            }, void 0, false, {
                fileName: "[project]/src/components/NavBar.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-divider",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/NavBar.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                id: "btn-fullscreen",
                className: "nav-btn nav-btn-fs",
                onClick: toggleFullscreen,
                "aria-label": isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen',
                title: isFullscreen ? 'Exit fullscreen (Esc)' : 'Enter fullscreen (F)',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "fs-icon",
                    children: isFullscreen ? '⊡' : '⊞'
                }, void 0, false, {
                    fileName: "[project]/src/components/NavBar.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/NavBar.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NavBar.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(NavBar, "JqFhnheli2HAmcOTlpXA3rV+mqw=");
_c = NavBar;
var _c;
__turbopack_context__.k.register(_c, "NavBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProgressDots.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgressDots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function ProgressDots({ total, current, onGoto }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "progress-dots",
        "aria-label": "Slide overview",
        children: Array.from({
            length: total
        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                id: `dot-${i}`,
                className: `dot ${i === current ? 'active' : ''}`,
                onClick: ()=>onGoto(i),
                "aria-label": `Go to slide ${i + 1}`,
                title: `Slide ${i + 1}`
            }, i, false, {
                fileName: "[project]/src/components/ProgressDots.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ProgressDots.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = ProgressDots;
var _c;
__turbopack_context__.k.register(_c, "ProgressDots");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PresentationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/slides.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NavBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProgressDots$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProgressDots.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function PresentationPage() {
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [prev, setPrev] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const touchStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* ── Hash → slide index sync ─────────────────── */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PresentationPage.useEffect": ()=>{
            setIsMounted(true);
            const readHash = {
                "PresentationPage.useEffect.readHash": ()=>{
                    const hash = window.location.hash; // e.g. #/5
                    const match = hash.match(/^#\/(\d+)/);
                    if (match) {
                        const idx = parseInt(match[1], 10);
                        if (idx >= 0 && idx < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slides"].length) {
                            setCurrent(idx);
                        }
                    }
                }
            }["PresentationPage.useEffect.readHash"];
            readHash();
            window.addEventListener('hashchange', readHash);
            return ({
                "PresentationPage.useEffect": ()=>window.removeEventListener('hashchange', readHash)
            })["PresentationPage.useEffect"];
        }
    }["PresentationPage.useEffect"], []);
    const goto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PresentationPage.useCallback[goto]": (idx)=>{
            if (idx < 0 || idx >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slides"].length) return;
            setPrev(current);
            setCurrent(idx);
            window.location.hash = `/${idx}`;
            // clear prev after animation
            setTimeout({
                "PresentationPage.useCallback[goto]": ()=>setPrev(null)
            }["PresentationPage.useCallback[goto]"], 600);
        }
    }["PresentationPage.useCallback[goto]"], [
        current
    ]);
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PresentationPage.useCallback[handleNext]": ()=>goto(current + 1)
    }["PresentationPage.useCallback[handleNext]"], [
        current,
        goto
    ]);
    const handlePrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PresentationPage.useCallback[handlePrev]": ()=>goto(current - 1)
    }["PresentationPage.useCallback[handlePrev]"], [
        current,
        goto
    ]);
    /* ── Touch swipe ─────────────────────────────── */ const onTouchStart = (e)=>{
        touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e)=>{
        if (touchStartX.current === null) return;
        const delta = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 50) delta > 0 ? handleNext() : handlePrev();
        touchStartX.current = null;
    };
    const urlPath = `linguineai-slides/fullscreen#/${current}`;
    if (!isMounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProgressDots$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                total: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slides"].length,
                current: current,
                onGoto: goto
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "presentation",
                onTouchStart: onTouchStart,
                onTouchEnd: onTouchEnd,
                "aria-label": "Presentation slides",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slides"].map((slide)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        slide: slide,
                        isActive: slide.id === current,
                        isPrev: slide.id === prev
                    }, slide.id, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NavBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                current: current,
                total: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slides"].length,
                onPrev: handlePrev,
                onNext: handleNext
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(PresentationPage, "CVOrqFStFMHFx3FrLajhm/CAiWY=");
_c = PresentationPage;
var _c;
__turbopack_context__.k.register(_c, "PresentationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_09a-7p5._.js.map