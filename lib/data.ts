export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  year: number;
  hasDetail?: boolean;
  link?: string;
  github?: string;
};

export type InteriorProject = {
  slug: string;
  title: string;
  description: string;
  year: number;
  category: "Residential" | "Commercial" | "Concept" | "Academic";
  location?: string;
  area?: string;
  images: string[];
};

export type Drawing = {
  slug: string;
  title: string;
  description: string;
  year: number;
  src: string;
  medium?: string;
};

export type Post = {
  slug: string;
  title: string;
  titleTR?: string;
  excerpt: string;
  date: string;
  readTime: number;
  tags: string[];
  hasDetail?: boolean;
};

export const projects: Project[] = [
  {
    slug: "philosophy-research",
    title: "Philosophical Research System",
    description:
      "A multi-agent AI system where three crewAI agents collaboratively research philosophical questions using selectable frameworks, Analytic, Phenomenology, AQAL and more.",
    tags: ["Python", "crewAI", "Flask", "Claude API", "SSE"],
    year: 2025,
    hasDetail: true,
    link: "https://philosophy-research-kxlv-production.up.railway.app",
  },
  {
    slug: "targetmind-ai",
    title: "TargetMind AI",
    description:
      "A bias-aware data optimization system where seven self-aware agents analyze a customer dataset, evaluate their own bias contributions, critique each other's decisions, apply corrections, and produce two separate reports, a process audit and an optimal target audience list.",
    tags: ["Python", "pandas", "Flask", "SSE", "Bias Detection", "Self-Aware Agents"],
    year: 2025,
    hasDetail: true,
    link: "https://targetmind-ai-production.up.railway.app",
  },
  {
    slug: "websites",
    title: "Websites I've Built",
    description:
      "A collection of websites and web applications designed and developed from scratch, combining visual thinking with code.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind", "HTML/CSS"],
    year: 2025,
    hasDetail: true,
  },
  {
    slug: "experimental-food-lab",
    title: "Experimental FoodLab",
    description:
      "A social platform for food experimenters, share unexpected recipes, strange ingredient combinations, and creative failures. Features vote-based collections, private saved recipe tabs, social follow system, and ingredient search.",
    tags: ["Next.js", "TypeScript", "Supabase", "React", "Social Platform"],
    year: 2025,
    hasDetail: true,
    link: "https://experimental-food-lab.vercel.app",
  },
  {
    slug: "val-nspe-lm",
    title: "VAL-NSPE LM",
    description:
      "A working prototype of a neuro-symbolic bias auditing layer for LLMs, using Adam Smith's Impartial Spectator theory and Ken Wilber's Four Quadrants framework to detect and reduce subjective bias in AI outputs. Evaluated across 100 queries in 10 bias categories.",
    tags: ["Python", "Claude API", "Neuro-Symbolic AI", "Bias Detection", "AI Ethics"],
    year: 2025,
    hasDetail: true,
  },
  {
    slug: "devguard",
    title: "DevGuard",
    description:
      "A multi-agent security monitoring system built with crewAI, designed for developers who build with AI tools and need a safety net. DevGuard scans GitHub repositories for leaked API keys, passwords, and sensitive credentials across the full commit history, monitors account activity for unauthorized access, and sends real-time email alerts when something suspicious is detected. Built for early-stage developers who move fast and need a system that watches their back.",
    tags: ["Python", "crewAI", "Claude API", "GitHub API", "Security", "Multi-Agent"],
    year: 2025,
    hasDetail: true,
    github: "https://github.com/valerihemsi/devguard",
  },
  {
    slug: "nature-window",
    title: "Natura Vue",
    description:
      "A product concept developed during my interior architecture thesis. Natura Vue is a transparent OLED-based window system that transforms urban views into personalized nature experiences, designed for hospitals, apartments, wellness clinics, and spaces where access to nature is limited.",
    tags: ["Concept Design", "OLED Technology", "Interior Architecture", "Product Design", "Wellbeing"],
    year: 2025,
    hasDetail: true,
    link: "https://nature-window-kohl.vercel.app",
  },
  {
    slug: "interior-design",
    title: "Interior Design Projects",
    description:
      "A collection of residential, commercial, and concept design projects developed during my academic years and beyond, spatial thinking, material research, and human-centered environments.",
    tags: ["Interior Design", "Spatial Design", "AutoCAD", "SketchUp", "Concept"],
    year: 2024,
    hasDetail: true,
  },
];

export const interiorProjects: InteriorProject[] = [
  {
    slug: "glimpse-into-the-virtual-nature",
    title: "Glimpse Into The Virtual Nature",
    description:
      "A degree project exploring a future where living spaces are in perfect harmony with the mesmerizing patterns found in the natural world. Drawing from fractal geometry and computational design, the concept proposes a futuristic house whose structure, lighting, and spatial flow are all inspired by nature's own mathematical language. Visuals generated with Midjourney AI.",
    year: 2023,
    category: "Academic",
    images: [
      "/interior/images/glimpse-cover-01.png",
      "/interior/images/glimpse-p3-03.png",
      "/interior/images/glimpse-p5-05.png",
      "/interior/images/glimpse-p8-08.png",
    ],
  },
  {
    slug: "gucci-immersive-smell-experience",
    title: "Gucci Immersive Smell Experience",
    description:
      "A pop-up store concept titled \"Path to Aftertime\", designed to make visitors lose their sense of reality through all five senses. Located in front of the Uffizi Gallery in Florence, the space takes the form of a Virtual Botanical Garden, creating an extreme contrast between the city's historical streets and a fully immersive, futuristic interior. A collaboration project at Istituto Marangoni.",
    year: 2023,
    category: "Commercial",
    location: "Florence, Italy",
    images: [
      "/interior/images/gucci-cover-01.png",
      "/interior/images/gucci-p3-03.png",
      "/interior/images/gucci-p5-05.png",
    ],
  },
  {
    slug: "futuristic-gold",
    title: "Futuristic Gold, Versace Home",
    description:
      "A flagship store redesign concept for Versace Home on Via Durini, Milan. The project targets Generation Z with a futuristic aesthetic rooted in Versace's heritage of spirit and value, blending bold geometry, gold tones, and an open, tech-forward retail experience. A group project developed at Istituto Marangoni, 2022/2023.",
    year: 2023,
    category: "Commercial",
    location: "Milan, Italy",
    images: [
      "/interior/images/futuristic-cover-01.png",
      "/interior/images/futuristic-p2-02.png",
      "/interior/images/futuristic-p4-04.png",
      "/interior/images/futuristic-p5-05.png",
    ],
  },
];

export const drawings: Drawing[] = [
  {
    slug: "she-and-the-city",
    title: "She and the City",
    description: "A face dissolves into architecture, ink lines trace both skin and skyline, watercolor bleeds where the boundary breaks.",
    year: 2023,
    src: "/drawings/she-and-the-city.jpg",
    medium: "Ink & watercolor",
  },
  {
    slug: "emergence",
    title: "Emergence",
    description: "A figure in graphite rises through a field of red and coral acrylic, body and background in tension, neither fully claiming the other.",
    year: 2023,
    src: "/drawings/emergence.jpg",
    medium: "Graphite & acrylic",
  },
  {
    slug: "cities-on-paper",
    title: "Cities on Paper",
    description: "Watercolor sketches of European facades mounted on torn newspaper, five architectural scenes arranged like memory fragments on black.",
    year: 2023,
    src: "/drawings/cities-on-paper.jpg",
    medium: "Watercolor & collage",
  },
  {
    slug: "primate",
    title: "Primate",
    description: "Two works made separately, brought together digitally, a graphite portrait of a primate drawn by hand, layered over an acrylic-painted background. Pencil line and poured paint, unified into a single composition.",
    year: 2023,
    src: "/drawings/primate.jpg",
    medium: "Graphite & acrylic, digital composite",
  },
  {
    slug: "between-worlds",
    title: "Between Worlds",
    description: "To exist at the threshold: animal and human, structure and dissolution. The body wears what it cannot name, standing between a bridge built by reason and a world the dream remembers.",
    year: 2023,
    src: "/drawings/between-worlds.jpg",
    medium: "Watercolor & ink",
  },
  {
    slug: "stairways",
    title: "Stairways",
    description: "Architectural ink drawing layered with gold leaf and photography, staircases spiral into space, a solitary figure descends into depth.",
    year: 2023,
    src: "/drawings/stairways.jpg",
    medium: "Ink, gold leaf & photography",
  },
  {
    slug: "urban-fragments",
    title: "Urban Fragments",
    description: "A digital collage fusing hand-drawn architectural perspective lines with layered photography, city grids dissolving into landscape.",
    year: 2023,
    src: "/drawings/urban-fragments.jpg",
    medium: "Digital collage",
  },
  {
    slug: "gravity",
    title: "Gravity",
    description: "Giraffes drift weightlessly between skyscrapers, a surreal 3D composition questioning what belongs where in a vertical world.",
    year: 2023,
    src: "/drawings/gravity.jpg",
    medium: "Digital / 3D",
  },
  {
    slug: "kolaj-1",
    title: "Emergent Substrate",
    description: "The moment consciousness surfaces through layers it did not choose, organic memory tangled in a technical frame, neither fully belonging to the body nor to the system. A figure dissolving into architecture that was never built for it.",
    year: 2023,
    src: "/drawings/kolaj-1.jpg",
    medium: "Mixed media collage",
  },
  {
    slug: "nautilus",
    title: "Nautilus",
    description: "Gold spirals curl through a dark field of blue and bronze, a digital painting drawn from the geometry of shells and galaxies.",
    year: 2023,
    src: "/drawings/nautilus.png",
    medium: "Acrylic painting on canvas",
  },
  {
    slug: "kolaj-2",
    title: "The Interface",
    description: "A figure reaches toward a curved wall of glowing screens, the moment before touch, before the boundary between user and system dissolves.",
    year: 2023,
    src: "/drawings/kolaj-2.jpg",
    medium: "Digital collage",
  },
  {
    slug: "kolaj-3",
    title: "Analog Memory",
    description: "Before encoding, there was weight. The curve of an instrument, the texture of stone, matter that held meaning through touch, not data. What the body knew before it was asked to become efficient.",
    year: 2023,
    src: "/drawings/kolaj-3.jpg",
    medium: "Ink & digital",
  },
  {
    slug: "kolaj-4",
    title: "Post-Canonical",
    description: "Vermeer's girl recontextualized, art history collides with consumer culture inside a pink exhibition space that has already forgotten its own walls.",
    year: 2023,
    src: "/drawings/kolaj-4.jpg",
    medium: "Digital collage",
  },
  {
    slug: "kolaj-6",
    title: "Interior Static",
    description: "An architectural render explodes outward, neon lines cut through organic forms and a room that can no longer contain itself.",
    year: 2023,
    src: "/drawings/kolaj-6.jpg",
    medium: "Digital collage",
  },
  {
    slug: "kolaj-7",
    title: "Sleep, Bosch, Forest",
    description: "The unconscious as an archive that refuses to be updated, Bosch's medieval visions of sin and ecstasy collapsing into a sleep pill, a UFO, bare winter trees. The inner world still runs on older software. The sedated body dreams in mythologies it inherited without choosing.",
    year: 2023,
    src: "/drawings/kolaj-7.jpg",
    medium: "Digital collage",
  },
  {
    slug: "kolaj-8",
    title: "Three Rooms",
    description: "Three registers of being, held side by side: the sensory, desire, disorder, the raw fact of hunger. The intellectual, centuries of archived thought, knowledge compressed into spine after spine. The posthuman, chrome organisms where biology folds into machine. We inhabit all three simultaneously, without knowing which one is home.",
    year: 2023,
    src: "/drawings/kolaj-8.jpg",
    medium: "Digital collage",
  },
  {
    slug: "kolaj-5",
    title: "Overflow",
    description: "A vertical torrent of images, art history, protest, myth, and media collapsed into a single column. Everything at once.",
    year: 2023,
    src: "/drawings/kolaj-5.png",
    medium: "Photomontage",
  },
  {
    slug: "oneness",
    title: "Oneness",
    description: "A cosmic tree rises between night and day, woven through with chakra, symbol, and celestial fire, the self dissolving at last into everything it was never separate from.",
    year: 2024,
    src: "/drawings/oneness.jpg",
    medium: "Digital illustration",
  },
];

export const posts: Post[] = [
  {
    slug: "dissertation-2024",
    title: "On Artificial Intelligence Ethics",
    excerpt:
      "Imitation of Nature With AI Technology & Possible Outcomes On Its Integration To The Societal Structure Of Our World, Bachelor's dissertation, Istituto Marangoni Milano.",
    date: "2024-03-01",
    readTime: 30,
    tags: ["AI Ethics", "Philosophy", "Dissertation"],
    hasDetail: true,
  },
  {
    slug: "teknolojinin-modern-topluma-girisi-ii",
    title: "The Integration of Technology into Modern Society, II",
    titleTR: "Teknolojinin Modern Topluma Girişi, II",
    excerpt:
      "Yapay zekanın bilgi üzerindeki kontrol gücü, model collapse riski, black box problemi ve agentic sistemlerin toplumsal düşünce çeşitliliğine etkileri üzerine.",
    date: "2025-02-01",
    readTime: 15,
    tags: ["Philosophy", "Technology", "AI", "Society"],
    hasDetail: true,
  },
  {
    slug: "the-integration-of-technology-into-modern-society",
    title: "The Integration of Technology into Modern Society",
    titleTR: "Teknolojinin Modern Topluma Girişi",
    excerpt:
      "How the shift from social constructivism to techno-determinism, accelerated by AI, is restructuring not just how we produce, but how we believe, what we value, and who controls the narratives we live by.",
    date: "2025-01-01",
    readTime: 12,
    tags: ["Philosophy", "Technology", "Society"],
    hasDetail: true,
  },
];
