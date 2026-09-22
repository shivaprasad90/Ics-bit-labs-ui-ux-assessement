export const featuredProjects = [
  {
    id: "ai-agricultural-intelligence",
    title: "AI Agricultural Intelligence Platform",
    category: "Agriculture • AI • Machine Learning",
    filterCategories: ["AI", "Machine Learning", "Agriculture"],
    badge: "Smart Farming",
    description: "An advanced agro-advisory ecosystem leveraging predictive machine learning models to analyze soil composition, weather metrics, and historical crop yields to deliver high-precision recommendations to farmers.",
    features: [
      "Crop recommendation engine based on NPK soil chemistry and meteorological forecasts",
      "Real-time agricultural analytics and historical yield trajectory visualization",
      "AI crop disease prediction and pest vulnerability indicators",
      "Multilingual farmer dashboard with low-bandwidth offline caching capability",
      "Interactive data visualization charts for soil moisture, humidity, and rainfall"
    ],
    technologies: ["Python", "Machine Learning", "React", "JavaScript", "HTML", "CSS", "Django", "MySQL"],
    githubUrl: null, // Shows "Coming Soon"
    liveUrl: null, // Shows "Coming Soon"
    status: "Production Architecture",
    architecture: "Django REST Framework backend connected to a Scikit-learn predictive pipeline, served to a high-reactivity React UI via tokenized endpoints."
  },
  {
    id: "ai-student-scholarship-grievance",
    title: "AI Student Scholarship & Grievance Management System",
    category: "Education • AI • RAG",
    filterCategories: ["AI", "Education", "Full Stack"],
    badge: "EdTech & GovTech",
    description: "An enterprise institutional portal transforming financial aid distribution and campus dispute resolution through Retrieval-Augmented Generation (RAG) and automated semantic categorization.",
    features: [
      "Secure student authentication, profile onboarding, and verification portal",
      "End-to-end scholarship application workflow with automated eligibility scoring",
      "Multi-format document upload and OCR-based certificate verification",
      "Real-time application tracking with milestone timeline notifications",
      "Grievance submission desk with AI complaint categorization & sentiment urgency scoring",
      "Institutional administrator dashboard with role-based audit logs and resolution workflows",
      "Built-in AI chatbot powered by RAG assistant architecture for 24/7 student guidance"
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "Python", "Django", "MySQL", "AI", "RAG"],
    githubUrl: null,
    liveUrl: null,
    status: "Enterprise Ready",
    architecture: "Vectorized policy documents searched via cosine similarity, paired with Django auth and MySQL normalized student records."
  },
  {
    id: "ai-face-recognition-attendance",
    title: "AI Face Recognition Attendance System",
    category: "AI • Computer Vision",
    filterCategories: ["AI", "Machine Learning"],
    badge: "Biometric Vision",
    description: "A contactless biometric attendance monitoring suite powered by deep learning and OpenCV, engineered for real-time multi-subject verification with anti-spoofing countermeasures.",
    features: [
      "Sub-second face detection and 128-d landmark facial embedding extraction",
      "High-accuracy 1:N face recognition with dynamic lighting tolerance",
      "Automated real-time attendance logging with timestamps and geo-fencing markers",
      "Comprehensive analytics reporting exportable to PDF, Excel, and CSV",
      "Student & faculty user management module with photo enrolment pipeline",
      "Full administrative dashboard with live camera feed audit and manual override controls"
    ],
    technologies: ["Python", "OpenCV", "React", "JavaScript", "HTML", "CSS", "Django", "MySQL"],
    githubUrl: null,
    liveUrl: null,
    status: "Field Tested",
    architecture: "Client-side WebRTC video streaming processed by an OpenCV + dlib recognition service connected to Django REST and MySQL."
  },
  {
    id: "pharmacy-management-system",
    title: "Pharmacy Management System",
    category: "Healthcare • Software",
    filterCategories: ["Healthcare", "Full Stack"],
    badge: "Healthcare ERP",
    description: "A comprehensive digital pharmacy ERP platform automating batch inventory tracking, expiry alerts, GST-compliant point-of-sale invoicing, and patient prescription archives.",
    features: [
      "Medicine catalogue management with salt formulation search and substitute finder",
      "Multi-warehouse inventory tracking with real-time stock deductions and reorder thresholds",
      "Automated near-expiry warnings and batch quarantine mechanisms",
      "Customer directory with purchase history and chronic medication reminders",
      "Rapid point-of-sale (POS) barcode-driven billing and invoice generation",
      "Full audit reports, financial turnover analytics, and administrator control panel"
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "Python", "Django", "MySQL"],
    githubUrl: null,
    liveUrl: null,
    status: "Commercial Grade",
    architecture: "Optimized relational database schema in MySQL with indexed search queries, Django business logic, and React point-of-sale frontend."
  },
  {
    id: "b2b-rfq-marketplace",
    title: "B2B RFQ Marketplace",
    category: "B2B • Marketplace • Full Stack",
    filterCategories: ["B2B", "Full Stack"],
    badge: "Procurement Tech",
    description: "A high-efficiency enterprise Request for Quotation (RFQ) procurement engine connecting industrial buyers with verified component suppliers for rapid quote negotiations.",
    features: [
      "Distinct buyer and supplier registration workflows with business tax verification",
      "Structured requirement posting engine with technical spec-sheet attachments",
      "Supplier requirement discovery portal with categorical search and delivery radius filters",
      "Granular quote submission module with tiered volume pricing and milestone terms",
      "Side-by-side quote comparison matrix with automated cost-per-unit analysis",
      "Interactive messaging channel, dashboard analytics, and procurement lifecycle status"
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "Python", "Django", "MySQL"],
    githubUrl: null,
    liveUrl: null,
    status: "Enterprise Scaled",
    architecture: "Decoupled React single-page frontend interfacing with Django REST endpoints, background quote notification handlers, and MySQL relational store."
  }
];

export const projectFilterOptions = [
  "All",
  "AI",
  "Machine Learning",
  "Agriculture",
  "Education",
  "Healthcare",
  "B2B",
  "Full Stack"
];

