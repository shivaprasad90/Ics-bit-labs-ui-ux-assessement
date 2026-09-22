export const technologyCategories = [
  {
    category: "Frontend",
    description: "Modern, responsive, accessible interfaces built for fluid speed and visual brilliance.",
    icon: "Layout",
    skills: ["HTML5", "CSS3", "JavaScript", "React"]
  },
  {
    category: "Backend-ready",
    description: "Robust, decoupled architectures prepared for high-throughput production services.",
    icon: "Server",
    skills: ["Python", "Django", "REST APIs"]
  },
  {
    category: "Database",
    description: "Structured relational models and flexible document stores for reliable data integrity.",
    icon: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    category: "AI",
    description: "State-of-the-art predictive intelligence, cognitive vision, and contextual language agents.",
    icon: "Brain",
    skills: ["Python AI", "Machine Learning", "Computer Vision", "RAG", "LLM", "AI APIs"]
  },
  {
    category: "Cloud",
    description: "Scalable containerization and distributed cloud infrastructure with automated deployments.",
    icon: "Cloud",
    skills: ["AWS", "Docker", "Render"]
  },
  {
    category: "Development",
    description: "Industry-standard version control, developer toolchains, and collaborative engineering.",
    icon: "Terminal",
    skills: ["Git", "GitHub", "VS Code"]
  }
];

export const networkNodes = [
  { id: "react", label: "React", category: "Frontend", color: "#38bdf8", angle: 0, distance: 180 },
  { id: "javascript", label: "JavaScript", category: "Frontend", color: "#facc15", angle: 36, distance: 195 },
  { id: "python", label: "Python", category: "Backend", color: "#60a5fa", angle: 72, distance: 175 },
  { id: "django", label: "Django", category: "Backend", color: "#34d399", angle: 108, distance: 190 },
  { id: "mysql", label: "MySQL", category: "Database", color: "#fb923c", angle: 144, distance: 185 },
  { id: "ai", label: "AI", category: "AI", color: "#c084fc", angle: 180, distance: 175 },
  { id: "machine-learning", label: "Machine Learning", category: "AI", color: "#f472b6", angle: 216, distance: 200 },
  { id: "rag", label: "RAG", category: "AI", color: "#a78bfa", angle: 252, distance: 180 },
  { id: "docker", label: "Docker", category: "Cloud", color: "#38bdf8", angle: 288, distance: 195 },
  { id: "aws", label: "AWS", category: "Cloud", color: "#fbbf24", angle: 324, distance: 185 }
];

