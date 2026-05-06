export interface SlideData {
  id: number;
  type:
    | "title"
    | "agenda"
    | "content"
    | "problem"
    | "solution"
    | "architecture"
    | "methodology"
    | "results"
    | "demo"
    | "thankyou"
    | "ocr-math"
    | "gemini-pipeline";
  title: string;
  subtitle?: string;
  content?: string[];
  columns?: { heading: string; items: string[] }[];
  steps?: { title: string; desc: string }[];
  highlight?: string;
  icon?: string;
  tag?: string;
}

export const slides: SlideData[] = [
  // ─── Slide 0: Title ────────────────────────────────────────────
  {
    id: 0,
    type: "title",
    title: "LinguineAI : Visual Menu Understanding & Intelligent Dish Recommendation System",
    content: [
      "Presented by: Arnab Bera · Anirban Chatterjee · Nisith Ranjan Hazra · Suvadeep Dutta",
      "Institution: Chennai Mathematical Institute (CMI)",
      "Course: Applied Machine Learning",
    ],
    icon: "🍽️",
  },

  // ─── Slide 1: Agenda ───────────────────────────────────────────
  {
    id: 1,
    type: "agenda",
    title: "Agenda",
    tag: "Overview",
    content: [
      "Problem Statement & Motivation",
      "System Architecture",
      "Dataset & Preprocessing",
      "OCR & Vision Pipeline",
      "Gemini API Pipeline",
      "Implementation & Stack",
      "Results & Evaluation",
      "Demo",
      "Challenges & Limitations",
      "Future Work",
      "Conclusion",
      "References",
    ],
  },

  // ─── Slide 2: Problem Statement ────────────────────────────────
  {
    id: 2,
    type: "problem",
    title: "Problem Statement",
    tag: "The Challenge",
    subtitle: "Travelers and users often face significant difficulty understanding restaurant menus, especially in foreign countries.",
    columns: [
      {
        heading: "Real-World Challenge",
        items: [
          "Menu is written in an unknown or foreign language",
          "Dish names are unfamiliar or culturally specific",
          "Descriptions are incomplete, vague, or entirely missing",
        ],
      },
      {
        heading: "Limitations of Existing Menus",
        items: [
          "No clear descriptions of ingredients or preparation",
          "No images to visualize the dish before ordering",
          "Unrecognizable names that carry no intuitive meaning",
        ],
      },
      {
        heading: "Consequences for Users",
        items: [
          "Confusion and frustration while ordering food",
          "Poor or unsatisfactory food choices",
          "Over-reliance on staff recommendations or guesswork",
          "Difficulty maintaining dietary preferences & allergen needs",
        ],
      },
    ],
    highlight: "How can we build an intelligent system that automatically digitizes menu images, extracts and understands content, translates foreign text, enhances missing information, and provides personalized dish recommendations based on user preferences?",
    content: [
      "Automatically digitize and process menu images",
      "Extract and understand menu content with OCR",
      "Translate and interpret foreign language text",
      "Enhance missing dish information using external knowledge",
      "Provide personalized dish recommendations based on user preferences",
    ],
  },

  // ─── Slide 3: Our Solution Goal ────────────────────────────────
  {
    id: 3,
    type: "solution",
    title: "Our Solution Goal",
    tag: "What We Are Building",
    highlight:
      "We aim to build an AI-powered system that can help users easily understand restaurant menus and choose the best dish without confusion.",
    steps: [
      {
        title: "Image Capture & Input",
        desc: "Takes an image of a restaurant menu as input. Works robustly with printed or slightly unclear images.",
      },
      {
        title: "Computer Vision & OCR",
        desc: "Detects and reads the text from the menu automatically.",
      },
      {
        title: "Translation",
        desc: "Translates foreign language menus into English for easy understanding.",
      },
      {
        title: "Content Analysis",
        desc: "Analyzes menu content to identify important details: Dish name, Price, Description.",
      },
      {
        title: "Knowledge Enhancement",
        desc: "Adds missing details using external data sources: Ingredients, Type of cuisine, Spice level, Veg/Non-veg.",
      },
      {
        title: "Visual References",
        desc: "Shows images of the dishes by retrieving them from the internet or generating them.",
      },
      {
        title: "Personalized Recommendation",
        desc: "Recommends the best dish based on user preferences like spice level, diet, or cuisine.",
      },
    ],
  },

  // ─── Slide 4: System Architecture ─────────────────────────────
  {
    id: 4,
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
      "PRESENT — Clean UI with translated menu + top picks",
    ],
    highlight: "7-Stage End-to-End Pipeline",
  },

  // ─── Slide 5: Dataset & Preprocessing ─────────────────────────
  {
    id: 5,
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
      "Train / Val / Test split: 70 / 15 / 15",
    ],
    highlight: "~2,400 menu images across 4 languages",
  },

  // ─── Slide 6: OCR & Vision Pipeline ───────────────────────────
  {
    id: 6,
    type: "ocr-math",
    title: "OCR Pipeline : Mathematical Formulation",
    tag: "Under the Hood",
    icon: "🧮",
  },

  // ─── Slide 7: Gemini API Pipeline ─────────────────────────────
  {
    id: 7,
    type: "gemini-pipeline",
    title: "Gemini API Pipeline",
    tag: "Multi-Stage Intelligence",
    icon: "✨",
    content: [
      "Visual Input Analysis — Direct multimodal menu understanding",
      "Structured Extraction — Parsing raw visual text into clean JSON data",
      "Semantic Translation — Intelligent language translation with context",
      "Knowledge Augmentation — Inferring ingredients and spice levels",
      "Reasoning-based Recommendation — Mapping dishes to user preferences",
    ],
    highlight: "End-to-End Multimodal Intelligence via Gemini 1.5 Flash / Pro",
  },

  // ─── Slide 8: Implementation & Tech Stack ─────────────────────
  {
    id: 8,
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
          "Responsive mobile-first design",
        ],
      },
      {
        heading: "Backend",
        items: [
          "FastAPI (Python 3.11)",
          "EasyOCR / PaddleOCR",
          "Google Gemini API",
          "Sentence-Transformers",
        ],
      },
      {
        heading: "Infrastructure",
        items: [
          "Docker Compose",
          "GitHub Actions CI",
          "Environment-based secrets",
          "REST JSON API",
        ],
      },
    ],
  },

  // ─── Slide 9: Results & Evaluation ───────────────────────────
  {
    id: 9,
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
      "User satisfaction (SUS score) — 82/100 (Good)",
    ],
    highlight: "Gemini Vision outperforms standalone OCR by 5.5% accuracy",
  },

  // ─── Slide 10: Demo ────────────────────────────────────────────
  {
    id: 10,
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
      "Step 6 — Provide feedback to personalise future results",
    ],
    highlight: "Demo available at localhost:3000 during presentation",
  },

  // ─── Slide 11: Challenges & Limitations ───────────────────────
  {
    id: 11,
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
      "Price parsing accuracy drops with complex layout menus",
    ],
  },

  // ─── Slide 12: Future Work ─────────────────────────────────────
  {
    id: 12,
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
      "Deploy as a cross-platform mobile app (React Native)",
    ],
    highlight: "Vision: The Google Lens of Restaurant Menus",
  },

  // ─── Slide 13: Conclusion ─────────────────────────────────────
  {
    id: 13,
    type: "content",
    title: "Conclusion",
    tag: "Takeaways",
    icon: "✅",
    highlight:
      "LinguineAI successfully demonstrates that modern VLMs and OCR engines can be combined into a unified pipeline to break language barriers in dining.",
    content: [
      "Achieved 93.1% OCR accuracy with Gemini Vision on menu images",
      "Delivered a full-stack, deployable web application",
      "Hybrid recommendation system with satisfying user study results",
      "Modular architecture allows easy swap of OCR / LLM backends",
      "Lays groundwork for a production-ready food-tech product",
    ],
  },

  // ─── Slide 14: References ─────────────────────────────────────
  {
    id: 14,
    type: "content",
    title: "References",
    tag: "Further Reading",
    icon: "📚",
    content: [
      "Baek et al. (2019) CRAFT — CVPR 2019",
      "Du et al. (2022) PaddleOCR — arXiv:2109.03144",
      "JaidedAI EasyOCR — github.com/JaidedAI/EasyOCR",
      "Google Gemini API — ai.google.dev",
      "Reimers & Gurevych (2019) Sentence-BERT — EMNLP 2019",
      "He et al. (2017) NCF — WWW 2017",
    ],
  },

  // ─── Slide 15: Thank You ──────────────────────────────────────
  {
    id: 15,
    type: "thankyou",
    title: "Thank You!",
    subtitle: "Questions? We'd love to hear them.",
    tag: "The End",
    icon: "🤝",
    content: [
      "Arnab Bera · Anirban Chatterjee",
      "Nisith Ranjan Hazra · Suvadeep Dutta",
    ],
  },
];
