const SKILLS_DB = {
    software: [
      {
        icon: "💻", title: "Full-Stack Web Development",
        level: "intermediate", color: "#00f5c4",
        desc: "Build complete web applications using modern frontend and backend frameworks. Essential for product and startup internships.",
        tags: ["HTML/CSS", "JavaScript", "React", "Node.js", "REST APIs", "Git"],
        duration: "3–4 months", resources: 14,
        link: "https://roadmap.sh/full-stack"
      },
      {
        icon: "📱", title: "Mobile App Development",
        level: "intermediate", color: "#7b61ff",
        desc: "Create cross-platform mobile apps. High demand at product companies and startups building consumer apps.",
        tags: ["React Native", "Flutter", "Dart", "iOS", "Android", "Firebase"],
        duration: "4–5 months", resources: 11,
        link: "https://roadmap.sh/react-native"
      },
      {
        icon: "🧩", title: "Data Structures & Algorithms",
        level: "beginner", color: "#ffd166",
        desc: "Foundation for cracking technical interviews at top tech companies. Critical for any software engineering role.",
        tags: ["Arrays", "Trees", "Graphs", "Dynamic Programming", "LeetCode"],
        duration: "2–3 months", resources: 20,
        link: "https://leetcode.com"
      },
      {
        icon: "🔧", title: "System Design Basics",
        level: "advanced", color: "#ff6b6b",
        desc: "Understand scalable architectures. Increasingly asked even in internship interviews at FAANG companies.",
        tags: ["Databases", "Load Balancing", "Caching", "Microservices", "CAP Theorem"],
        duration: "2 months", resources: 9,
        link: "https://github.com/donnemartin/system-design-primer"
      }
    ],
    data: [
      {
        icon: "📊", title: "Data Analysis with Python",
        level: "beginner", color: "#00f5c4",
        desc: "Use Python to clean, analyze, and visualize data. Core skill for data analyst and business intelligence internships.",
        tags: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL", "Jupyter"],
        duration: "2–3 months", resources: 18,
        link: "https://www.kaggle.com/learn"
      },
      {
        icon: "🗄️", title: "SQL & Database Management",
        level: "beginner", color: "#7b61ff",
        desc: "Write complex queries and understand relational databases. Required for nearly every data-related internship.",
        tags: ["SQL", "MySQL", "PostgreSQL", "Joins", "Aggregations", "Indexing"],
        duration: "1–2 months", resources: 15,
        link: "https://sqlzoo.net"
      },
      {
        icon: "📈", title: "Data Visualization & Storytelling",
        level: "intermediate", color: "#ffd166",
        desc: "Turn raw numbers into compelling insights. Essential for presenting findings to stakeholders.",
        tags: ["Tableau", "Power BI", "D3.js", "Seaborn", "Plotly", "Excel"],
        duration: "1–2 months", resources: 10,
        link: "https://www.tableau.com/learn/training"
      }
    ],
    design: [
      {
        icon: "🎨", title: "UI/UX Fundamentals",
        level: "beginner", color: "#ff6b6b",
        desc: "Learn user-centered design principles, wireframing, and prototyping. Gateway skill for product design internships.",
        tags: ["Figma", "Wireframing", "Prototyping", "User Research", "Usability"],
        duration: "2–3 months", resources: 13,
        link: "https://www.figma.com/resources/learn-design/"
      },
      {
        icon: "✏️", title: "Visual Design & Branding",
        level: "intermediate", color: "#7b61ff",
        desc: "Create brand identities, marketing materials, and consistent visual systems for companies.",
        tags: ["Adobe XD", "Illustrator", "Color Theory", "Typography", "Branding"],
        duration: "3 months", resources: 8,
        link: "https://www.canva.com/learn/design"
      },
      {
        icon: "🖥️", title: "Design Systems",
        level: "advanced", color: "#00f5c4",
        desc: "Build and maintain component libraries. In-demand skill at mid-to-large product companies.",
        tags: ["Storybook", "Tokens", "Component Library", "Accessibility", "Figma Variables"],
        duration: "2 months", resources: 7,
        link: "https://storybook.js.org"
      }
    ],
    marketing: [
      {
        icon: "📣", title: "Digital Marketing Fundamentals",
        level: "beginner", color: "#ffd166",
        desc: "Understand SEO, paid ads, email marketing, and content strategy. Core for any marketing internship.",
        tags: ["SEO", "Google Ads", "Meta Ads", "Email Marketing", "Analytics"],
        duration: "1–2 months", resources: 16,
        link: "https://grow.google/certificates/digital-marketing-ecommerce/"
      },
      {
        icon: "📝", title: "Content & Copywriting",
        level: "beginner", color: "#00f5c4",
        desc: "Write compelling copy for social media, blogs, and ad campaigns. Universally valued across industries.",
        tags: ["Copywriting", "Brand Voice", "Social Media", "Blogging", "A/B Testing"],
        duration: "1 month", resources: 12,
        link: "https://copyhackers.com"
      },
      {
        icon: "📉", title: "Growth & Analytics",
        level: "intermediate", color: "#7b61ff",
        desc: "Use data to drive marketing decisions. Bridges marketing and data roles at growth-stage startups.",
        tags: ["Google Analytics", "Mixpanel", "Funnel Analysis", "Retention", "A/B Testing"],
        duration: "2 months", resources: 9,
        link: "https://www.reforge.com"
      }
    ],
    finance: [
      {
        icon: "💰", title: "Financial Modeling",
        level: "intermediate", color: "#ffd166",
        desc: "Build Excel-based financial models for valuation and forecasting. Core for investment banking internships.",
        tags: ["Excel", "DCF", "LBO", "Valuation", "Three Statement Model"],
        duration: "2–3 months", resources: 11,
        link: "https://corporatefinanceinstitute.com"
      },
      {
        icon: "📋", title: "Accounting Fundamentals",
        level: "beginner", color: "#00f5c4",
        desc: "Understand financial statements, bookkeeping, and GAAP. Required for finance and accounting internships.",
        tags: ["Balance Sheet", "Income Statement", "Cash Flow", "GAAP", "QuickBooks"],
        duration: "1–2 months", resources: 14,
        link: "https://www.coursera.org/learn/wharton-accounting"
      }
    ],
    ml: [
      {
        icon: "🤖", title: "Machine Learning Fundamentals",
        level: "intermediate", color: "#7b61ff",
        desc: "Understand core ML algorithms and apply them using scikit-learn. Entry point for AI/ML research internships.",
        tags: ["Python", "scikit-learn", "Regression", "Classification", "Feature Engineering"],
        duration: "3–4 months", resources: 19,
        link: "https://www.coursera.org/learn/machine-learning"
      },
      {
        icon: "🧠", title: "Deep Learning & Neural Networks",
        level: "advanced", color: "#ff6b6b",
        desc: "Build neural networks for vision, NLP, and generative tasks. Hot skill for AI research labs and big tech.",
        tags: ["TensorFlow", "PyTorch", "CNNs", "Transformers", "NLP", "Computer Vision"],
        duration: "4–6 months", resources: 17,
        link: "https://fast.ai"
      },
      {
        icon: "📦", title: "MLOps & Model Deployment",
        level: "advanced", color: "#00f5c4",
        desc: "Deploy and monitor ML models in production. Rare and highly valued skill that bridges ML and engineering.",
        tags: ["Docker", "FastAPI", "MLflow", "Kubernetes", "CI/CD", "Monitoring"],
        duration: "2–3 months", resources: 8,
        link: "https://mlops.community"
      }
    ],
    devops: [
      {
        icon: "⚙️", title: "Cloud Computing Basics",
        level: "beginner", color: "#00f5c4",
        desc: "Get comfortable with AWS, GCP, or Azure. Increasingly required even for software dev internships.",
        tags: ["AWS", "EC2", "S3", "Lambda", "IAM", "Cloud Architecture"],
        duration: "2–3 months", resources: 15,
        link: "https://aws.amazon.com/training/"
      },
      {
        icon: "🐳", title: "Docker & Containerization",
        level: "intermediate", color: "#7b61ff",
        desc: "Package applications in containers for consistent deployment. Standard skill at modern tech companies.",
        tags: ["Docker", "Docker Compose", "Kubernetes", "Containers", "Microservices"],
        duration: "1–2 months", resources: 10,
        link: "https://docs.docker.com/get-started/"
      },
      {
        icon: "🔁", title: "CI/CD Pipelines",
        level: "intermediate", color: "#ffd166",
        desc: "Automate testing and deployment. Valued skill for DevOps and backend engineering internships.",
        tags: ["GitHub Actions", "Jenkins", "GitLab CI", "Testing", "Automation"],
        duration: "1 month", resources: 8,
        link: "https://docs.github.com/en/actions"
      }
    ]
  };

  // Combine all for "all" category
  SKILLS_DB.all = Object.values(SKILLS_DB).flat();

  let currentCategory = 'all';
  let currentQuery = '';

  // ── Render cards ──
  function renderCards(skills) {
    const container = document.getElementById('skillsContainer');
    const header = document.getElementById('resultsHeader');
    const countEl = document.getElementById('resultsCount');
    const titleEl = document.getElementById('resultsTitle');

    if (!skills.length) {
      header.style.display = 'none';
      container.innerHTML = `
        <div class="empty">
          <div class="emoji">🔍</div>
          <p>No skills found for "<strong>${currentQuery}</strong>".<br>Try a different search term.</p>
        </div>`;
      return;
    }

    header.style.display = 'flex';
    countEl.textContent = `${skills.length} skill${skills.length !== 1 ? 's' : ''}`;
    titleEl.textContent = currentQuery ? `Results for "${currentQuery}"` : getCategoryLabel(currentCategory);

    container.innerHTML = skills.map((s, i) => `
      <div class="skill-card" style="--card-color:${s.color}; animation-delay:${i * 0.06}s">
        <div class="card-top">
          <div class="card-icon">${s.icon}</div>
          <span class="card-level level-${s.level}">${s.level}</span>
        </div>
        <div class="card-title">${s.title}</div>
        <div class="card-desc">${s.desc}</div>
        <div class="skill-tags">
          ${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="card-footer">
          <div class="card-meta">⏱ ${s.duration} &nbsp;·&nbsp; 📚 ${s.resources} resources</div>
          <a class="card-cta" href="${s.link}" target="_blank">Learn →</a>
        </div>
      </div>
    `).join('');

    // Wrap in grid
    container.innerHTML = `<div class="skills-grid">${container.innerHTML}</div>`;
  }

  function getCategoryLabel(cat) {
    const map = {
      all: 'All Skills', software: 'Software Development',
      data: 'Data Science', design: 'UI/UX Design',
      marketing: 'Digital Marketing', finance: 'Finance',
      ml: 'Machine Learning', devops: 'DevOps & Cloud'
    };
    return map[cat] || 'Skills';
  }

  function showLoading() {
    document.getElementById('resultsHeader').style.display = 'none';
    document.getElementById('skillsContainer').innerHTML = `
      <div class="loading">
        <div class="spinner"></div>
        <span>Fetching skill data…</span>
      </div>`;
  }

  // ── Simulate API fetch with slight delay ──
  function fetchSkills(category, query = '') {
    showLoading();
    setTimeout(() => {
      let data = SKILLS_DB[category] || SKILLS_DB.all;
      if (query.trim()) {
        const q = query.toLowerCase();
        data = SKILLS_DB.all.filter(s =>
          s.title.toLowerCase().includes(q) ||
          s.desc.toLowerCase().includes(q) ||
          s.tags.some(t => t.toLowerCase().includes(q))
        );
      }
      renderCards(data);
    }, 600); // simulate network delay
  }

  // ── Category chip click ──
  function selectChip(el, category) {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    currentCategory = category;
    currentQuery = '';
    document.getElementById('searchInput').value = '';
    fetchSkills(category);
  }

  // ── Search ──
  function handleSearch() {
    const q = document.getElementById('searchInput').value.trim();
    if (!q) { fetchSkills(currentCategory); return; }
    currentQuery = q;
    fetchSkills('all', q);
  }

  document.getElementById('searchInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') handleSearch();
  });

  // ── Init ──
  fetchSkills('all');