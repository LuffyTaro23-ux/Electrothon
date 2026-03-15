// ══════════════════════════════════════════
//  INTERNSHIP DATABASE

const INTERNSHIPS = [
  // ── Software Dev ──
  {
    id:1, title:"Frontend Developer Intern", company:"Razorpay", logo:"RZ",
    field:"software", type:"hybrid", paid:true, fresher:true,
    location:"Bangalore, India", stipend:"₹25,000/mo", duration:"3 months",
    posted:"2 days ago",
    desc:"Work with the product team to build beautiful, performant React interfaces for India's leading fintech platform.",
    tags:["React", "TypeScript", "CSS", "REST APIs", "Figma"],
    link:"https://razorpay.com/jobs"
  },
  {
    id:2, title:"Backend Engineering Intern", company:"Zepto", logo:"ZP",
    field:"software", type:"onsite", paid:true, fresher:true,
    location:"Mumbai, India", stipend:"₹30,000/mo", duration:"6 months",
    posted:"1 day ago",
    desc:"Build and scale microservices powering one of India's fastest growing quick commerce platforms.",
    tags:["Node.js", "MongoDB", "Docker", "Kafka", "AWS"],
    link:"https://www.zepto.team/careers"
  },
  {
    id:3, title:"Full Stack Intern", company:"Postman", logo:"PM",
    field:"software", type:"remote", paid:true, fresher:false,
    location:"Remote", stipend:"₹40,000/mo", duration:"4 months",
    posted:"3 days ago",
    desc:"Join Postman's engineering team to work on developer tooling used by 30M+ developers worldwide.",
    tags:["React", "Node.js", "GraphQL", "PostgreSQL", "Git"],
    link:"https://www.postman.com/company/careers/"
  },
  {
    id:4, title:"Android Developer Intern", company:"ShareChat", logo:"SC",
    field:"software", type:"hybrid", paid:true, fresher:true,
    location:"Bangalore, India", stipend:"₹20,000/mo", duration:"3 months",
    posted:"5 days ago",
    desc:"Build features for India's largest regional language social media platform with 180M+ users.",
    tags:["Kotlin", "Android SDK", "Jetpack Compose", "Firebase", "REST"],
    link:"https://sharechat.com/careers"
  },

  // ── Data Science ──
  {
    id:5, title:"Data Science Intern", company:"Flipkart", logo:"FK",
    field:"data", type:"onsite", paid:true, fresher:false,
    location:"Bangalore, India", stipend:"₹35,000/mo", duration:"6 months",
    posted:"1 week ago",
    desc:"Use ML and statistical modeling to power product recommendations and demand forecasting at scale.",
    tags:["Python", "SQL", "scikit-learn", "Spark", "Tableau"],
    link:"https://www.flipkartcareers.com"
  },
  {
    id:6, title:"Business Analyst Intern", company:"OYO Rooms", logo:"OY",
    field:"data", type:"hybrid", paid:true, fresher:true,
    location:"Gurgaon, India", stipend:"₹18,000/mo", duration:"3 months",
    posted:"4 days ago",
    desc:"Analyze operational data to drive efficiency improvements across OYO's 40+ country presence.",
    tags:["Excel", "SQL", "Power BI", "Python", "Presentation"],
    link:"https://www.oyorooms.com/careers"
  },
  {
    id:7, title:"Data Analytics Intern", company:"Swiggy", logo:"SW",
    field:"data", type:"remote", paid:true, fresher:true,
    location:"Remote", stipend:"₹22,000/mo", duration:"3 months",
    posted:"2 days ago",
    desc:"Crunch delivery and restaurant data to surface insights that improve customer experience for 10M+ daily orders.",
    tags:["Python", "Pandas", "SQL", "Looker", "A/B Testing"],
    link:"https://careers.swiggy.com"
  },

  // ── Design ──
  {
    id:8, title:"UI/UX Design Intern", company:"Zomato", logo:"ZM",
    field:"design", type:"hybrid", paid:true, fresher:true,
    location:"Gurgaon, India", stipend:"₹20,000/mo", duration:"3 months",
    posted:"3 days ago",
    desc:"Design intuitive experiences for Zomato's consumer app used by millions of food lovers daily.",
    tags:["Figma", "Prototyping", "User Research", "Design Systems", "Motion"],
    link:"https://www.zomato.com/careers"
  },
  {
    id:9, title:"Product Design Intern", company:"CRED", logo:"CR",
    field:"design", type:"onsite", paid:true, fresher:false,
    location:"Bangalore, India", stipend:"₹35,000/mo", duration:"4 months",
    posted:"6 days ago",
    desc:"Craft premium experiences for CRED's discerning user base. Work alongside top-tier designers.",
    tags:["Figma", "Motion Design", "After Effects", "Interaction Design"],
    link:"https://careers.cred.club"
  },

  // ── Marketing ──
  {
    id:10, title:"Digital Marketing Intern", company:"boAt", logo:"BT",
    field:"marketing", type:"hybrid", paid:true, fresher:true,
    location:"Delhi, India", stipend:"₹15,000/mo", duration:"3 months",
    posted:"1 day ago",
    desc:"Run campaigns across social media and paid channels for India's #1 wearables and audio brand.",
    tags:["Meta Ads", "Google Ads", "SEO", "Content", "Analytics"],
    link:"https://www.boat-lifestyle.com/pages/careers"
  },
  {
    id:11, title:"Content & Growth Intern", company:"Unacademy", logo:"UN",
    field:"marketing", type:"remote", paid:true, fresher:true,
    location:"Remote", stipend:"₹12,000/mo", duration:"2 months",
    posted:"2 days ago",
    desc:"Create compelling educational content and growth experiments for India's largest learning platform.",
    tags:["Content Writing", "SEO", "Social Media", "Video Scripts", "Analytics"],
    link:"https://unacademy.com/careers"
  },

  // ── Finance ──
  {
    id:12, title:"Investment Banking Intern", company:"Kotak Mahindra", logo:"KM",
    field:"finance", type:"onsite", paid:true, fresher:false,
    location:"Mumbai, India", stipend:"₹30,000/mo", duration:"2 months",
    posted:"5 days ago",
    desc:"Assist the IB team with financial modeling, pitch decks, and deal execution across M&A and ECM transactions.",
    tags:["Excel", "Financial Modeling", "PowerPoint", "Valuation", "Bloomberg"],
    link:"https://www.kotak.com/careers"
  },
  {
    id:13, title:"Finance Analyst Intern", company:"Paytm", logo:"PT",
    field:"finance", type:"hybrid", paid:true, fresher:true,
    location:"Noida, India", stipend:"₹20,000/mo", duration:"3 months",
    posted:"3 days ago",
    desc:"Support financial planning and analysis for one of India's largest fintech companies.",
    tags:["Excel", "Financial Analysis", "SQL", "Power BI", "Reporting"],
    link:"https://paytm.com/careers"
  },

  // ── Machine Learning ──
  {
    id:14, title:"ML Research Intern", company:"Google India", logo:"GG",
    field:"ml", type:"onsite", paid:true, fresher:false,
    location:"Hyderabad, India", stipend:"₹60,000/mo", duration:"3 months",
    posted:"1 week ago",
    desc:"Contribute to cutting-edge ML research projects. Work with world-class researchers on real-world AI problems.",
    tags:["Python", "TensorFlow", "PyTorch", "NLP", "Research", "Papers"],
    link:"https://careers.google.com"
  },
  {
    id:15, title:"AI/ML Intern", company:"Microsoft India", logo:"MS",
    field:"ml", type:"hybrid", paid:true, fresher:false,
    location:"Hyderabad, India", stipend:"₹55,000/mo", duration:"6 months",
    posted:"4 days ago",
    desc:"Build and deploy intelligent features for Microsoft's cloud and productivity products.",
    tags:["Python", "Azure ML", "PyTorch", "Computer Vision", "NLP"],
    link:"https://careers.microsoft.com"
  },

  // ── Management ──
  {
    id:16, title:"Product Management Intern", company:"Meesho", logo:"ME",
    field:"management", type:"hybrid", paid:true, fresher:true,
    location:"Bangalore, India", stipend:"₹25,000/mo", duration:"3 months",
    posted:"2 days ago",
    desc:"Own features end-to-end on Meesho's social commerce platform serving 140M+ users.",
    tags:["Product Strategy", "SQL", "User Research", "Figma", "A/B Testing"],
    link:"https://meesho.io/careers"
  },
  {
    id:17, title:"Operations Intern", company:"Delhivery", logo:"DL",
    field:"management", type:"onsite", paid:false, fresher:true,
    location:"Delhi, India", stipend:"Unpaid + Certificate", duration:"2 months",
    posted:"3 days ago",
    desc:"Learn logistics operations at India's largest fully-integrated logistics company with 18,000+ pin codes.",
    tags:["Operations", "Excel", "Process Optimization", "Logistics", "ERP"],
    link:"https://www.delhivery.com/careers"
  },
  {
    id:18, title:"Strategy & Consulting Intern", company:"BCG India", logo:"BC",
    field:"management", type:"onsite", paid:true, fresher:false,
    location:"Mumbai, India", stipend:"₹50,000/mo", duration:"2 months",
    posted:"1 week ago",
    desc:"Work on high-impact consulting projects for Fortune 500 clients across industries.",
    tags:["Strategy", "Excel", "PowerPoint", "Research", "Problem Solving"],
    link:"https://careers.bcg.com"
  }
];

// ══════════════════════════════
//  STATE
// ══════════════════════════════
let activeFilter = 'all';
let currentResults = [];

// ══════════════════════════════
//  PARTICLE BACKGROUND
// ══════════════════════════════
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function initParticles() {
  particles = [];
  const count = Math.floor((canvas.width * canvas.height) / 18000);
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.7 ? '#f0b429' : '#ffffff'
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.fill();
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;
  });
  ctx.globalAlpha = 1;

  // Draw connecting lines
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(240,180,41,${0.05 * (1 - dist / 100)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawParticles);
}

resizeCanvas();
initParticles();
drawParticles();
window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });

// ══════════════════════════════
//  SEARCH & FILTER
// ══════════════════════════════
function searchInternships() {
  const keyword = document.getElementById('keywordInput').value.trim().toLowerCase();
  const location = document.getElementById('locationInput').value.trim().toLowerCase();
  const field = document.getElementById('fieldSelect').value;

  showLoading();

  // Simulate API call delay
  setTimeout(() => {
    let results = [...INTERNSHIPS];

    if (keyword) {
      results = results.filter(j =>
        j.title.toLowerCase().includes(keyword) ||
        j.company.toLowerCase().includes(keyword) ||
        j.desc.toLowerCase().includes(keyword) ||
        j.tags.some(t => t.toLowerCase().includes(keyword))
      );
    }

    if (location) {
      results = results.filter(j =>
        j.location.toLowerCase().includes(location) ||
        (location === 'remote' && j.type === 'remote')
      );
    }

    if (field) {
      results = results.filter(j => j.field === field);
    }

    // Apply quick filter
    results = applyQuickFilter(results, activeFilter);

    currentResults = results;
    renderCards(results, keyword || location || field ? `Results for your search` : 'All Internships');
    updateStats(results);
  }, 500);
}

function quickFilter(el, filter) {
  document.querySelectorAll('.fchip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  activeFilter = filter;
  searchInternships();
}

function applyQuickFilter(data, filter) {
  if (filter === 'all') return data;
  if (filter === 'remote') return data.filter(j => j.type === 'remote');
  if (filter === 'onsite') return data.filter(j => j.type === 'onsite');
  if (filter === 'hybrid') return data.filter(j => j.type === 'hybrid');
  if (filter === 'stipend') return data.filter(j => j.paid);
  if (filter === 'fresher') return data.filter(j => j.fresher);
  return data;
}

function updateStats(data) {
  document.getElementById('statTotal').textContent = data.length;
  document.getElementById('statRemote').textContent = data.filter(j => j.type === 'remote').length;
  document.getElementById('statPaid').textContent = data.filter(j => j.paid).length;
  const companies = new Set(data.map(j => j.company));
  document.getElementById('statCompanies').textContent = companies.size;
}

// ══════════════════════════════
//  RENDER
// ══════════════════════════════
function renderCards(data, title = 'All Internships') {
  const container = document.getElementById('cardsContainer');
  const bar = document.getElementById('resultsBar');
  const countEl = document.getElementById('resultsCount');
  const titleEl = document.getElementById('resultsTitle');

  if (!data.length) {
    bar.style.display = 'none';
    container.innerHTML = `
      <div class="empty">
        <div class="big">🔍</div>
        <h3>NO RESULTS FOUND</h3>
        <p>Try different keywords or remove some filters.</p>
      </div>`;
    return;
  }

  bar.style.display = 'flex';
  titleEl.textContent = title;
  countEl.textContent = `${data.length} result${data.length !== 1 ? 's' : ''}`;

  const getInitials = (name) => name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  container.innerHTML = `<div class="cards-grid">` + data.map((j, i) => `
    <div class="job-card" style="animation-delay:${i * 0.05}s">
      <div class="card-head">
        <div class="company-logo">${j.logo}</div>
        <div class="card-title-wrap">
          <div class="job-title">${j.title}</div>
          <div class="company-name">${j.company}</div>
        </div>
        <span class="badge-remote ${j.type}">${j.type}</span>
      </div>
      <div class="card-desc">${j.desc}</div>
      <div class="card-tags">
        ${j.tags.map(t => `<span class="ctag">${t}</span>`).join('')}
      </div>
      <div class="card-footer">
        <div class="card-meta-row">
          <span class="meta-item">📍 ${j.location}</span>
          <span class="meta-item">💰 ${j.stipend} &nbsp;·&nbsp; ⏱ ${j.duration}</span>
          <span class="meta-item">🕐 Posted ${j.posted}</span>
        </div>
        <a class="apply-btn" href="${j.link}" target="_blank">Apply →</a>
      </div>
    </div>
  `).join('') + `</div>`;
}

function showLoading() {
  document.getElementById('resultsBar').style.display = 'none';
  document.getElementById('cardsContainer').innerHTML = `
    <div class="loading">
      <div class="loader-ring"></div>
      <span>SEARCHING OPPORTUNITIES…</span>
    </div>`;
}

// ══════════════════════════════
//  KEYBOARD SEARCH
// ══════════════════════════════
document.getElementById('keywordInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') searchInternships();
});
document.getElementById('locationInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') searchInternships();
});

// ══════════════════════════════
//  INIT
// ══════════════════════════════
window.onload = () => {
  searchInternships();
};