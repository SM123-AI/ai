/* sm-portfolio.js — content + modal + copy-to-clipboard. Renders into slots. */

const SM_DATA = {
  profile: {
    name: "Sowvik Misra",
    role: "AI & Automation Consultant · Creative Artist",
    tagline: "Bridging the gap between structured logic and fluid rhythm.",
    about:
      "With over 5 years in IT and 4+ years at Grant Thornton Indus, I specialize in architecting Agentic AI workflows, Copilot Studio solutions, and complex data pipelines. As a Firm-wide Copilot Champion, I've driven AI adoption at scale. Recognized by Microsoft and Snowflake product teams for early-preview community contributions. By night, I explore the rhythm of language through poetry and the language of rhythm through percussion - performing as a percussionist across instruments like Djembe, Darbuka, Cajon, Khanjira, Dholak, and Tambourine.",
    email: "sowvikmisra2016@gmail.com",
    phone: "+91 86174 90989",
    socials: {
      linkedin: "https://www.linkedin.com/in/sowvik-misra/",
      instagram: "https://www.instagram.com/thoughts_by_sowvik",
      medium: "https://medium.com"
    },
    awards:
      "Golden Socks AI · 10x Innovation (INDUS) · 5x Quarterly Award · People's Choice · Purple Star · High Performer · Super Trouper · AI Innovation Award",
    impactStats: [
      { v: "60+",  l: "Automations & 15+ Agents shipped" },
      { v: "$1M+", l: "Saved - Catalytic to Power Platform" },
      { v: "50%",  l: "Hiring efficiency increase" },
      { v: "10+",  l: "Analysts & consultants mentored" }
    ]
  },
  skills: {
    automation: ["Copilot Studio","Power Automate","Power Apps","Catalytic","Adaptive Cards","Process Orchestration"],
    dataAI:     ["M365 Copilot","Snowflake Cortex AI","Generative AI","Azure OpenAI","AI Builder","Agentic AI","Prompt Engineering"],
    leadership: ["Digital Transformation","Solution Design","Stakeholder Management","Team Mentorship","Thought Leadership"]
  },
  certifications: [
    { id:1,  t:"Microsoft Certified AI Business Professional",                         i:"Microsoft" },
    { id:2,  t:"Microsoft Certified Agentic AI Business Solutions Architect",         i:"Microsoft" },
    { id:3,  t:"Microsoft Certified AI Transformational Leader",                      i:"Microsoft" },
    { id:4,  t:"Microsoft Copilot Agent Academy Certified - Special Ops",             i:"Microsoft" },
    { id:5,  t:"Microsoft Copilot Agent Academy Certified - Cowork Collectives",      i:"Microsoft" },
    { id:6,  t:"Copilot Agent Academy - Operative",                                    i:"Microsoft" },
    { id:7,  t:"Copilot Agent Academy - Recruit",                                      i:"Microsoft" },
    { id:8,  t:"Applied Skills - Create agents in Copilot Studio",                     i:"Microsoft" },
    { id:9,  t:"Applied Skills - Enhance agents with autonomous capabilities",         i:"Microsoft" },
    { id:10, t:"Applied Skills - Streamline workflows with AI chat",                   i:"Microsoft" },
    { id:11, t:"Applied Skills - Generate reports with AI research agents",            i:"Microsoft" },
    { id:12, t:"Google Certified AI Business Professional",                            i:"Google" },
    { id:13, t:"Google Certified AI Essentials",                                       i:"Google" },
    { id:14, t:"Anthropic Certified AI Fluency: Framework & Foundations",              i:"Anthropic" },
    { id:15, t:"Agent Skills with Anthropic",                                          i:"Anthropic" },
    { id:16, t:"AI Fluency & Claude 101",                                              i:"Anthropic" },
    { id:17, t:"Generative AI for Business Leaders",                                   i:"Professional Certificate" },
    { id:18, t:"Snowpro Platform Associate",                                           i:"Snowflake" }
  ],
  thoughtLeadership: [
    {
      id:1, type:"Series", title:"Copilot 101 Series",
      description:"Comprehensive LinkedIn series and newsletter covering Copilot Agents, M365 Copilot, Azure AI, and Power Platform AI.",
      tags:["LinkedIn","Microsoft AI","Newsletter"],
      fullContent:"A dedicated series aimed at demystifying Microsoft's Copilot ecosystem. It covers architectural deep-dives, prompt engineering best practices, and real-world enterprise use cases for Copilot Studio and M365 Copilot."
    },
    {
      id:2, type:"Series", title:"Snowflake AI 101",
      description:"Deep dives into Snowflake Intelligence, Cortex Agents, Cortex functions, and Snowflake AI features.",
      tags:["Data Engineering","Snowflake Cortex","Newsletter"],
      fullContent:"Leveraging my early private preview access invited by the Snowflake Product Team, this series explores the practical applications of Snowflake Cortex AI, vector databases, and LLM integrations directly within data pipelines."
    },
    {
      id:3, type:"Weekly", title:"Wednesday With AI",
      description:"A weekly digest summarizing the 7–8 latest AI industry news and breakthroughs every Wednesday.",
      tags:["Industry News","Generative AI"],
      fullContent:"A highly curated weekly roundup to keep my network updated on the rapidly evolving AI landscape, covering everything from foundational model releases to enterprise AI governance."
    },
    {
      id:4, type:"Series", title:"Google AI Stack Series",
      description:"A 6-part series covering the Google AI ecosystem from personal productivity to enterprise development.",
      tags:["Google AI","Gemini","Enterprise"],
      fullContent:"Explored the capabilities of Google's AI offerings, demonstrating how to integrate tools like Gemini and Vertex AI into scalable business architectures."
    },
    {
      id:5, type:"Series", title:"Claude Playbook Series",
      description:"A running playbook exploring the Claude AI stack - Projects, Artifacts, Computer Use, Agent Skills, and the MCP ecosystem.",
      tags:["Anthropic","Claude","Agentic AI"],
      fullContent:"The Claude Playbook is a deep-dive series on Anthropic's Claude stack and how to actually build with it. Each edition unpacks a specific capability - Claude Projects for long-running context, Artifacts for live generative UI, Computer Use for agentic workflows, Agent Skills for reusable expertise, and the Model Context Protocol (MCP) for connecting Claude to real business systems. Written for practitioners, it blends prompt patterns, architecture notes, and enterprise use cases drawn from my own builds."
    }
  ],
  techProjects: [
    {
      id:1, title:"Catalytic → Power Platform Migration",
      description:"Spearheaded migration of 30+ legacy Catalytic applications to MS Power Platform, saving $1M+ in licensing and improving scalability.",
      tags:["Catalytic","Power Platform","Digital Transformation"],
      fullContent:"Led a firm-wide technology transition initiative. Refactored manual Excel-based processes and legacy workflows into highly optimized Power Automate and Power Apps solutions. Key challenges included mapping unstructured email data to database fields and ensuring rigorous data privacy compliance, ultimately resulting in massive cost savings and a 40% increase in processing speed."
    },
    {
      id:2, title:"Autonomous Sales & Tax Agents",
      description:"Architected multi-modal, autonomous AI chatbots for sales and tax teams using Copilot Studio and Power Automate.",
      tags:["Copilot Studio","Agentic AI","Adaptive Cards"],
      fullContent:"Created comprehensive Conversational and Autonomous AI agents connecting to SharePoint and internal knowledge bases. Features include email monitoring via Power Automate, human-in-the-loop validation, custom PPT generation with embedded visuals, and weekly reporting via Adaptive Cards and Outlook Actionable Messages (OAMs)."
    },
    {
      id:3, title:"HR Hiring Automation Pipeline",
      description:"Orchestrated the automation of the in-house Tax team's hiring process, increasing efficiency by 50%.",
      tags:["Process Orchestration","Power Automate","Compliance"],
      fullContent:"Eliminated the need for external third-party hiring tools, mitigating critical data privacy and compliance risks. This end-to-end automation saved the firm significant capital and drastically reduced the time-to-hire through optimized routing and tracking."
    },
    {
      id:4, title:"Snowflake Cortex Resume Analyzer",
      description:"Power Platform AI & Snowflake Cortex AI based data pipeline analyzing resumes in real-time.",
      tags:["Snowflake","Python","Streamlit","Power Apps"],
      fullContent:"Designed a hybrid pipeline utilizing advanced AISQL functions, custom Python stored procedures, and Power Automate. The system extracts skills and insights from uploaded resumes, allows users to edit the extracted data via a Streamlit/Power Apps UI, and feeds a live, beautified analytics dashboard."
    },
    {
      id:5, title:"Multi-Agent Marketing Orchestration",
      description:"Autonomous multi-agent orchestration for end-to-end marketing team process life cycles.",
      tags:["Copilot Studio","Agentic AI","Power Automate","M365"],
      fullContent:"Architected an end-to-end autonomous multi-agent framework utilizing Copilot Studio, Power Automate, Teams, SharePoint, and Outlook. Fully orchestrates the marketing lifecycle, featuring automated dynamic PPT creation, flowcharts, and document generation. Built with robust Human-In-The-Loop (HITL) checkpoints to ensure quality and control before taking agentic actions."
    }
  ],
  creativeWorks: [
    {
      id:1, type:"Poetry", title:"I...",
      excerpt:"I was an unknown fiction,\nEncircled with its commotion…",
      link:"https://www.instagram.com/p/DIeaANpSUR6/",
      fullContent:"I was an unknown fiction\nEncircled with its commotion,\nLife seldom felt real\nAnd at times too ideal.\n\nI was never there\nNor was i supposed to be,\nI lived like a mere thought\nWhich i had wished to be."
    },
    {
      id:2, type:"Percussion", title:"Rhythmic Convergence Live",
      excerpt:"A fusion performance mixing traditional dholak rhythms with cajon and darbuka.",
      fullContent:"This performance was an experiment in indo-fusion. Using a traditional beat on the dholak against a modern afro beat in cajon & darbuka, I attempted to show how ancient chaotic rhythms can harmonize with modern rigid structures. The set lasted 30 minutes and featured improvisation based on audience reaction."
    },
    {
      id:3, type:"Percussion", title:"Jam Around the Block",
      excerpt:"Regular percussionist doing multiple performances at open jams.",
      fullContent:"I am a recurring percussionist at 'Jam Around the Block'. Participating in these open jam sessions allows me to collaborate with diverse, spontaneous groups of musicians, blending traditional beats with whatever genre the moment demands in a live, unscripted environment."
    },
    {
      id:4, type:"Music", title:"Upcoming Band - Stay Tuned",
      excerpt:"Forming my own band to perform across Bangalore, covering the diverse music of India.",
      fullContent:"I am currently in the process of putting together my own band. We will be doing live shows across Bangalore, specifically focusing on covering the incredibly rich and diverse music of India. From folk roots to modern fusions - stay tuned for upcoming gig dates and announcements."
    },
    {
      id:5, type:"Writing", title:"Circle of Life",
      excerpt:"A bed welcomes a new born,\nThe same bed mourns a departing soul…",
      link:"https://www.instagram.com/reel/DCyu1QuSN0_/",
      fullContent:"A bed welcomes a new born,\nThe same bed mourns a departing soul.\n\nThe stage is same\nOnly the curtain rises and falls."
    },
    {
      id:6, type:"Initiative", title:"Community & CSR Crusader",
      excerpt:"Actively involved in driving multiple Corporate Social Responsibility and fitness initiatives.",
      fullContent:"Beyond technology and art, I am deeply passionate about community impact. I actively participate in and help organize Corporate Social Responsibility (CSR) events, and drive fitness initiatives to promote well-being and balance within the corporate ecosystem."
    }
  ]
};

/* ---------- render helpers ---------- */
const esc = (s="") => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));

function renderHero(){
  const p = SM_DATA.profile;
  const stats = p.impactStats.map(s => `
    <div class="stat"><div class="v">${esc(s.v)}</div><div class="l">${esc(s.l)}</div></div>
  `).join("");
  return `
    <section class="hero sm-hero" data-screen-label="01 Hero">
      <div class="eyebrow">
        <span class="label">Portfolio · 2021 - 2026</span>
        <span class="bar"></span>
        <span class="label mono">build 8c2e1f · status <span style="color:var(--accent)">● live</span></span>
      </div>
      <div class="pretext" data-typewriter>
        <span class="tw-key">$ currently</span>
        <span class="tw-val"></span>
        <span class="tw-cursor"></span>
      </div>
      <h1 class="role">${esc(p.role)}</h1>
      <p class="tagline">${esc(p.tagline)}</p>
      <p class="about-body">${esc(p.about)}</p>
      <div class="awards-strip"><b>Key awards:</b> ${esc(p.awards)}</div>
      <div class="impact">${stats}</div>

      <!-- Terminal + wave block: live system context for Sowvik -->
      <div class="terminal" style="margin-top:36px">
        <div class="term-bar">
          <span class="dot red"></span><span class="dot yel"></span><span class="dot grn"></span>
          <span class="path">sowvik@blr:<b>~/portfolio</b>$</span>
          <span>./sowvik --mode=consulting --since=2014</span>
          <span class="cursor"></span>
          <span style="margin-left:auto;color:var(--fg-3)">tty/1 · 80×24 · utf-8</span>
        </div>
        <div class="wave-wrap">
          <canvas class="wave-canvas" data-wave-canvas="" aria-hidden="true" width="1342" height="260"></canvas>
          <div class="wave-overlay">
            <div class="row" style="justify-content:space-between">
              <div class="row">
                <span><span class="pulse"></span><span class="v">NOW CONSULTING</span></span>
                <span><span class="k">role</span> <span class="v">AI & Automation</span></span>
                <span><span class="k">base</span> <span class="v">Bengaluru, IN</span></span>
                <span><span class="k">years</span> <span class="v">12+</span></span>
              </div>
              <div class="vu" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
            </div>
            <div class="row" style="justify-content:space-between">
              <span><span class="k">automations</span> <span class="v">60+ shipped</span></span>
              <span><span class="k">agents</span> <span class="v">15+ running</span></span>
              <span><span class="k">certs</span> <span class="v">12 active</span></span>
              <span class="badge">Microsoft Copilot · Google · Anthropic · Snowflake · Power Platform · Azure AI</span>
            </div>
          </div>
        </div>
        <div class="boot" aria-hidden="true">
          <span class="ln"><span class="t">[12.04.26 · 09:41]</span> <span class="lvl-ok">OK   </span> <span class="t">copilot   </span> <span class="v">studio agent "finance-ops" deployed · saves ~$420k/yr</span></span>
          <span class="ln"><span class="t">[12.04.26 · 10:02]</span> <span class="lvl-run">RUN  </span> <span class="t">power-auto </span> <span class="v">catalytic → power platform migration · 24/24 flows green</span></span>
          <span class="ln"><span class="t">[12.04.26 · 10:38]</span> <span class="lvl-info">INFO </span> <span class="t">cert       </span> <span class="v">anthropic · applied ai certified · 2025Q4</span></span>
          <span class="ln"><span class="t">[12.04.26 · 11:15]</span> <span class="lvl-ok">OK   </span> <span class="t">thought-ldr</span> <span class="v">medium essay "agentic automation for ops" · 3.2k reads</span></span>
          <span class="ln"><span class="t">[12.04.26 · 11:47]</span> <span class="lvl-info">INFO </span> <span class="t">music      </span> <span class="v">dholak + cajon + darbuka · tabla session recorded</span></span>
          <span class="ln"><span class="t">[12.04.26 · 12:20]</span> <span class="lvl-ok">OK   </span> <span class="t">poetry     </span> <span class="v">published 3 pieces · bilingual (EN/HI)</span></span>
          <span class="ln"><span class="t">[12.04.26 · 13:04]</span> <span class="lvl-run">RUN  </span> <span class="t">eval       </span> <span class="v">llm-guardrails · 142 traces · 0 regressions</span></span>
          <span class="ln"><span class="t">[12.04.26 · 13:29]</span> <span class="lvl-warn">WARN </span> <span class="t">calendar   </span> <span class="v">q3 2026 availability: limited · 2 slots open</span></span>
        </div>
      </div>

      <div class="cta-row">
        <a href="#thought-leadership"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>Thought Leadership</a>
        <a href="#dev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>Engineering</a>
        <a href="#art"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>Artistry</a>
        <a href="../Portfolio%20Ad.html" data-reel-trigger="1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>Watch 60s Intro Reel</a>
      </div>
    </section>`;
}

function renderStack(){
  const s = SM_DATA.skills;
  const block = (name, dot, arr) => `
    <div class="col">
      <h3><span class="d" style="background:${dot}"></span>${name}</h3>
      <div class="chips">${arr.map(x => `<span>${esc(x)}</span>`).join("")}</div>
    </div>`;
  return `
    <section class="sec" id="stack" data-screen-label="02 Stack">
      <div class="sec-head"><span class="tag">01</span><h2>Core Competencies</h2><span class="bar"></span></div>
      <div class="skill-cols">
        ${block("Automation & Scale", "oklch(0.65 0.15 240)", s.automation)}
        ${block("GenAI & Data",       "oklch(0.62 0.18 300)", s.dataAI)}
        ${block("Strategic Leadership","oklch(0.68 0.14 170)", s.leadership)}
      </div>
    </section>`;
}

function renderCerts(){
  const rows = SM_DATA.certifications.map(c => `
    <div class="cert">
      <div><div class="t">${esc(c.t)}</div><div class="i">${esc(c.i)}</div></div>
    </div>
  `).join("");
  return `
    <section class="sec" id="certs" data-screen-label="03 Certs">
      <div class="sec-head"><span class="tag">02</span><h2>Certifications</h2><span class="bar"></span></div>
      <div class="cert-grid">${rows}</div>
    </section>`;
}

function renderCards(list){
  return list.map(it => `
    <div class="card" data-item-id="${it.id}" tabindex="0" role="button" aria-label="Open ${esc(it.title)}">
      <div class="card-tags">${it.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
      <h3 class="card-title">${esc(it.title)}</h3>
      <p class="card-desc">${esc(it.description)}</p>
      <div class="card-more">Read more →</div>
      <div class="card-arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
    </div>
  `).join("");
}

function renderThought(){
  return `
    <section class="sec" id="thought-leadership" data-screen-label="04 Thought Leadership">
      <div class="sec-head"><span class="tag">03</span><h2>Thought Leadership & Community</h2><span class="bar"></span></div>
      <div class="card-grid" data-cards="thought">${renderCards(SM_DATA.thoughtLeadership)}</div>
    </section>`;
}

function renderDev(){
  return `
    <section class="sec" id="dev" data-screen-label="05 Engineering">
      <div class="sec-head"><span class="tag">04</span><h2>Engineering & Architecture</h2><span class="bar"></span></div>
      <div class="card-grid" data-cards="dev">${renderCards(SM_DATA.techProjects)}</div>
    </section>`;
}

function renderArt(){
  const items = SM_DATA.creativeWorks.map(w => `
    <div class="tl-item">
      <span class="tl-type">${esc(w.type)}</span>
      <h3 class="tl-title">${esc(w.title)}</h3>
      <p class="tl-excerpt">${esc(w.excerpt)}</p>
      <button class="tl-cta" data-art-id="${w.id}">View context →</button>
    </div>
  `).join("");
  return `
    <section class="sec" id="art" data-screen-label="06 Artistry">
      <div class="sec-head"><span class="tag">05</span><h2>Creative Works & Initiatives</h2><span class="bar"></span></div>
      <div class="timeline">${items}</div>
    </section>`;
}

function renderContact(){
  const p = SM_DATA.profile;
  return `
    <section class="contact-block" id="contact" data-screen-label="07 Contact">
      <div class="k">Contact · Q3 2026</div>
      <h2>Let's make something<br/><span style="color:var(--fg-3)">that actually ships.</span></h2>
      <p class="sub">Open to conversations about enterprise AI strategy, autonomous agents, or collaborating on creative rhythms. I reply to every thoughtful email.</p>
      <div class="links">
        <a href="${esc(p.socials.linkedin)}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          LinkedIn
        </a>
        <a href="${esc(p.socials.instagram)}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          Instagram
        </a>
        <button id="copyEmail" class="copy-email-btn" style="display:inline-flex;align-items:center;gap:10px;padding:12px 18px;border:1px solid var(--rule);font-family:var(--f-mono);font-size:12px;text-transform:uppercase;letter-spacing:.1em;color:var(--fg);background:var(--bg);cursor:pointer;transition:all 180ms ease">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          Copy Email<span class="copy-toast" id="copyToast">Copied</span>
        </button>
      </div>
      <div class="meta">© ${new Date().getFullYear()} Sowvik Misra · Bengaluru, IN</div>
    </section>`;
}

/* ---------- modal ---------- */
function openModal(item){
  const ov = document.getElementById("smModal");
  ov.querySelector(".type").textContent  = item.type || "Project";
  ov.querySelector(".title").textContent = item.title;
  ov.querySelector(".body").textContent  = item.fullContent || item.description || "";
  const linkWrap = ov.querySelector("footer");
  const link = ov.querySelector("footer a");
  if (item.link && item.link !== "#"){
    link.href = item.link;
    linkWrap.style.display = "flex";
  } else {
    linkWrap.style.display = "none";
  }
  ov.classList.add("open");
  ov.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeModal(){
  const ov = document.getElementById("smModal");
  ov.classList.remove("open");
  ov.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

/* ---------- copy email ---------- */
function copyEmail(){
  const email = SM_DATA.profile.email;
  const done = () => {
    const t = document.getElementById("copyToast");
    if (t){ t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 1600); }
  };
  function fallback(){
    const ta = document.createElement("textarea");
    ta.value = email; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); done(); } catch(e){}
    document.body.removeChild(ta);
  }
  if (navigator.clipboard?.writeText){
    navigator.clipboard.writeText(email).then(done).catch(fallback);
  } else { fallback(); }
}

/* ---------- typewriter (local) ---------- */
const TW_POOL = [
  { k:"whoami",      v:"sowvik - ai & automation consultant · artist" },
  { k:"role",        v:"firm-wide copilot champion · grant thornton indus" },
  { k:"shipping",    v:"autonomous multi-agent marketing orchestration" },
  { k:"reading",     v:"agentic design patterns · copilot studio docs" },
  { k:"listening",   v:"dholak · cajon · darbuka · live jams" },
  { k:"thinking",    v:"structured logic ↔ fluid rhythm" },
  { k:"stack",       v:"copilot studio · power automate · snowflake · azure openai" },
  { k:"coffee",      v:"filter · black · brewed 08:14 ist" },
  { k:"currently",   v:"open to collaborations · q3 2026" },
  { k:"last ship",   v:"snowflake cortex resume analyzer · live" }
];
const wait = (ms) => new Promise(r => setTimeout(r, ms));
async function smTypewriter(el){
  let i = 0;
  while (el.isConnected){
    const { k, v } = TW_POOL[i % TW_POOL.length]; i++;
    el.querySelector(".tw-key").textContent = "$ " + k;
    const target = v;
    const out = el.querySelector(".tw-val"); out.textContent = "";
    for (let c = 0; c <= target.length; c++){
      out.textContent = target.slice(0, c);
      await wait(18 + Math.random()*32);
    }
    await wait(2400);
    for (let c = target.length; c >= 0; c--){
      out.textContent = target.slice(0, c);
      await wait(8 + Math.random()*10);
    }
    await wait(260);
  }
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("smMain");
  main.innerHTML = [
    renderHero(),
    renderStack(),
    renderCerts(),
    renderThought(),
    renderDev(),
    renderArt(),
    renderContact()
  ].join("");

  // manually boot typewriter (waves.js already ran on DOMContentLoaded before main existed)
  document.querySelectorAll("[data-typewriter]").forEach(el => smTypewriter(el));

  // boot the hero wave canvas (waves.js exposes mountWaveCanvas)
  if (window.mountWaveCanvas){
    document.querySelectorAll("[data-wave-canvas]").forEach(c => window.mountWaveCanvas(c));
  }

  // card clicks
  main.addEventListener("click", (e) => {
    const card = e.target.closest("[data-item-id]");
    if (card){
      const id = Number(card.dataset.itemId);
      const parent = card.closest("[data-cards]");
      const list = parent?.dataset.cards === "dev" ? SM_DATA.techProjects : SM_DATA.thoughtLeadership;
      const item = list.find(x => x.id === id);
      if (item) openModal(item);
      return;
    }
    const art = e.target.closest("[data-art-id]");
    if (art){
      const id = Number(art.dataset.artId);
      const item = SM_DATA.creativeWorks.find(x => x.id === id);
      if (item) openModal(item);
      return;
    }
    if (e.target.id === "copyEmail" || e.target.closest("#copyEmail")){
      copyEmail();
    }
  });

  // keyboard accessibility on cards
  main.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target.matches("[data-item-id]")){
      e.preventDefault();
      e.target.click();
    }
  });

  // modal close
  const ov = document.getElementById("smModal");
  ov.addEventListener("click", (e) => { if (e.target === ov) closeModal(); });
  ov.querySelector("header button").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
});
