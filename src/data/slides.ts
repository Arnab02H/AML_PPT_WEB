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
  | "gemini-pipeline"
  | "dataset-example";
  title: string;
  subtitle?: string;
  content?: string[];
  columns?: { heading: string; items: string[] }[];
  steps?: { title: string; desc: string }[];
  image?: string;
  table?: string;
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
    type: "dataset-example",
    title: "Dataset & Preprocessing",
    tag: "Methodology",
    icon: "🗄️",
    columns: [
      {
        heading: "Collection",
        items: [
          "Custom restaurant menu images were collected and scraped from the web.",
          "Ground truth annotations were prepared for each image to evaluate OCR performance.",
        ],
      },
      {
        heading: "Augmentation",
        items: [
          "Image rotation & Blur addition",
          "Compression artefacts",
          "Brightness and noise variations",
          "Objective: Improved robustness for real-world menu images.",
        ],
      },
      {
        heading: "Preprocessing",
        items: [
          "Grayscale conversion",
          "Image normalization",
          "Contrast enhancement",
          "Noise reduction",
          "Effect: Improved text visibility and OCR accuracy.",
        ],
      },
    ],
    image: "/dataset-example.png",
    table: `| Dish Name           | Half | Full |
| ------------------- | ---: | ---: |
| Chicken Tikka       |  120 |  200 |
| Mutton Seekh        |  120 |  200 |
| Tandoori Chicken    |  225 |  450 |
| Chicken Kebab       |   90 |  150 |
| Paneer Tikka        |  100 |  190 |
| Tandoori Aloo       |   60 |  100 |
| Tandoori Pampret     |  180 |  250 |
| Malai Soya Chaap    |  100 |  190 |
| Tandoori Soya Chaap |   90 |  180 |

| Dish Name           | Price |
| ------------------- | ----: |
| Dal Tadka           |    60 |
| Dal Makhani         |    80 |
| Kadhai Paneer       |    80 |
| Pindi Chole         |    80 |
| Paneer Makhani      |    80 |
| Paneer Tikka Masala |    80 |
| Palak Paneer        |    80 |
| Tawa Paneer         |    80 |
| Mix Veg             |    80 |
| Dal Fry             |    70 |
| Tawa Mushroom       |    90 |
| Mattar Paneer       |    90 |
| Aloo Gobi Matar     |    90 |`,
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
    highlight: "Compared to EasyOCR and PaddleOCR, Gemini Vision demonstrates stronger OCR and document understanding capabilities.",
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
    tag: "Technical Assessment",
    icon: "⚠️",
    columns: [
      {
        heading: "Data & Recognition",
        items: [
          "Dataset Complexity — Menu variety in fonts, layouts, and multilingual text makes preprocessing difficult.",
          "OCR Accuracy Constraints — Recognition drops with font variations, lighting, blur, and low resolution.",
          "Handwritten Challenges — Irregular styles and noisy backgrounds remain a significant hurdle for extraction.",
        ],
      },
      {
        heading: "Infrastructure & Generation",
        items: [
          "API Dependencies — Limitations in request rate, latency, internet dependency, and usage cost constraints.",
          "Generative Constraints — Dish image generation is computationally expensive, requiring high-end GPUs and memory.",
          "Real-time Bottlenecks — High computational power needs make real-time generation difficult in low-resource environments.",
        ],
      },
    ],
    highlight: "Achieving high-accuracy VLM results requires overcoming dataset scarcity and hardware bottlenecks.",
  },

  // ─── Slide 12: Future Work ─────────────────────────────────────
  {
    id: 12,
    type: "content",
    title: "Future Work",
    tag: "Roadmap",
    icon: "🚀",
    columns: [
      {
        heading: "Advanced Research",
        items: [
          "Transformer-based OCR — Improve accuracy for blurred, low-quality, and complex multilingual menu cards.",
          "Handwritten Recognition — Extend support for irregular handwriting styles using large-scale VLM datasets.",
          "Generative Visualization — Integrate Diffusion Models to create realistic dish images for visual-less menus.",
        ],
      },
      {
        heading: "Ecosystem Integration",
        items: [
          "Delivery Platforms — Partner with Zomato/Swiggy for direct ordering and live menu updates.",
          "Mobile Ecosystem — Develop native Android/iOS apps for instant scanning and smart tourism assistance.",
        ],
      },
      {
        heading: "Accessibility & Performance",
        items: [
          "Edge Deployment — Implement lightweight models for offline usage and low-latency inference on mobile.",
          "Conversational AI — Add voice assistants for hands-free dish inquiries and pronunciation help.",
        ],
      },
    ],
    highlight: "Vision: Evolving LinguineAI into a comprehensive AI-powered global dining assistant.",
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
