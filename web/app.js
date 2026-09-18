const EXPERTS = [
  {
    id: "product",
    name: "唐·诺曼",
    nameEn: "Don Norman",
    icon: "🎯",
    color: "var(--product)",
    role: "Product Design",
    skill: "don-norman",
    credential: "《设计心理学》作者 · 人机交互奠基人",
    summary: "以用户为中心的设计思维，定义「做什么」以及「为什么做」",
    duties: [
      "澄清目标用户、使用场景与核心痛点",
      "定义功能范围与优先级（MoSCoW）",
      "设计核心用户流程、交互要点与信息架构",
      "划定 MVP 范围与「不做清单」",
      "制定可衡量的验收标准与成功指标",
      "评估对产品路线图与用户习惯的影响",
    ],
    focus: { yes: "需求合理性、用户体验、MVP 范围", no: "技术架构选型、安全攻防细节" },
    sample: "用户需要安全便捷的登录方式，MVP 应覆盖邮箱+密码登录、会话保持和找回密码。设计应自解释，减少认知负担。",
  },
  {
    id: "architect",
    name: "马丁·福勒",
    nameEn: "Martin Fowler",
    icon: "🏗️",
    color: "var(--architect)",
    role: "Architecture",
    skill: "martin-fowler",
    credential: "《企业应用架构模式》作者 · ThoughtWorks 首席科学家",
    summary: "演进式架构与模式语言，设计可持续的系统结构",
    duties: [
      "设计系统模块划分、边界与依赖",
      "评估技术选型与架构模式",
      "定义核心接口契约、数据模型与集成方式",
      "制定性能、可用性、扩展性等非功能目标",
      "设计关键链路的失效模式与降级策略",
      "识别技术债，给出演进式演进路径",
    ],
    focus: { yes: "系统结构、接口契约、演进策略", no: "具体代码实现、排期分配" },
    sample: "建议 JWT + Refresh Token 双令牌方案，认证服务独立模块。先简单后演进，支持后续 SSO 扩展。",
  },
  {
    id: "developer",
    name: "林纳斯·托瓦兹",
    nameEn: "Linus Torvalds",
    icon: "⚙️",
    color: "var(--developer)",
    role: "Development",
    skill: "linus-torvalds",
    credential: "Linux 与 Git 创造者",
    summary: "Talk is cheap, show me the code — 务实评估实现与交付",
    duties: [
      "评估实现复杂度，直指过度设计",
      "按模块拆分工作量并标注置信度",
      "给出 realistic 排期、里程碑与关键路径",
      "识别技术风险、依赖与能力缺口",
      "定义测试策略与 CI/CD 工程要求",
      "制定灰度发布与回滚方案",
    ],
    focus: { yes: "实现成本、排期、工程质量", no: "产品优先级独断、安全策略制定" },
    sample: "核心认证模块约 8 人天，含单元测试和集成测试。最大风险是 Refresh Token 轮换逻辑的边界情况。",
  },
  {
    id: "security",
    name: "布鲁斯·施奈尔",
    nameEn: "Bruce Schneier",
    icon: "🛡️",
    color: "var(--security)",
    role: "Security",
    skill: "bruce-schneier",
    credential: "《应用密码学》作者 · 国际顶尖安全思想家",
    summary: "威胁建模优先，安全是一场过程而非产品",
    duties: [
      "建立威胁模型：资产、攻击面、攻击者画像",
      "审查认证、授权、加密与审计日志设计",
      "评估数据分级与全生命周期隐私保护",
      "检查等保、GDPR、个保法等合规约束",
      "区分 Blocker 与建议项，附攻击场景与修复方案",
      "制定渗透测试等安全验收标准",
    ],
    focus: { yes: "威胁分析、合规要求、安全验收", no: "产品功能取舍独断、架构方向独断" },
    sample: "密码须 bcrypt 存储，Token 需 HttpOnly Cookie 传输。发现 2 项 Blocker：缺少登录频率限制和审计日志。",
  },
  {
    id: "cto",
    name: "维尔纳·沃格尔",
    nameEn: "Werner Vogels",
    icon: "⚖️",
    color: "var(--cto)",
    role: "CTO · 一票否决",
    skill: "werner-vogels",
    credential: "Amazon CTO · Everything fails all the time",
    summary: "综合审阅各专家意见，做出最终决策。拥有一票否决权",
    duties: [
      "综合四方意见，提炼共识点与分歧点",
      "判断技术、安全、成本、进度的整体可接受性",
      "评估残留风险与故障恢复能力",
      "裁决冲突目标间的最终取舍",
      "做出通过 / 有条件通过 / 否决决定",
      "输出行动项、风险登记与复盘机制",
    ],
    focus: { yes: "跨领域综合判断、否决与拍板", no: "各领域细节（委托对应专家）" },
    vetoReasons: [
      "安全红线：未解决的 Blocker 级安全问题",
      "架构硬伤：不可演进或高概率失败的设计",
      "成本失真：工作量估算严重偏离现实",
      "方向偏离：与产品目标或公司战略不符",
      "依赖阻塞：关键外部依赖未确认且无法降级",
    ],
    sample: "综合四方意见，方案整体可行。安全 Blocker 须在上线前修复，否则行使否决权。",
    isCto: true,
  },
];

const PHASES = [
  { id: "input", label: "议题输入", expert: null },
  { id: "product", label: "唐·诺曼", expert: "product" },
  { id: "architect", label: "马丁·福勒", expert: "architect" },
  { id: "developer", label: "林纳斯·托瓦兹", expert: "developer" },
  { id: "security", label: "布鲁斯·施奈尔", expert: "security" },
  { id: "discuss", label: "交叉讨论", expert: null },
  { id: "cto", label: "维尔纳·沃格尔", expert: "cto" },
  { id: "conclusion", label: "结论输出", expert: null },
];

let meetingState = {
  active: false,
  phaseIndex: 0,
  topic: {},
  discussed: false,
};

// ── Render expert cards ──
function renderExpertCards() {
  const grid = document.getElementById("experts-grid");
  grid.innerHTML = EXPERTS.map((e) => `
    <article
      class="expert-card${e.isCto ? " expert-card--cto" : ""}"
      style="--accent: ${e.color}"
      tabindex="0"
      role="button"
      aria-label="查看${e.name}详情"
      data-id="${e.id}"
    >
      <span class="expert-icon">${e.icon}</span>
      <h3>${e.name}</h3>
      <div class="expert-name-en">${e.nameEn}</div>
      <div class="expert-role">${e.role} · <code>${e.skill}</code></div>
      <p class="expert-summary">${e.summary}</p>
    </article>
  `).join("");

  grid.querySelectorAll(".expert-card").forEach((card) => {
    card.addEventListener("click", () => openExpertModal(card.dataset.id));
    card.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        openExpertModal(card.dataset.id);
      }
    });
  });
}

function openExpertModal(id) {
  const expert = EXPERTS.find((e) => e.id === id);
  if (!expert) return;

  const content = document.getElementById("modal-content");
  let vetoHtml = "";
  if (expert.vetoReasons) {
    vetoHtml = `
      <div class="modal-veto-box">
        <h4>一票否决 · 可否决情形</h4>
        <ul>${expert.vetoReasons.map((r) => `<li>${r}</li>`).join("")}</ul>
      </div>
    `;
  }

  content.innerHTML = `
    <h3>${expert.icon} ${expert.name}</h3>
    <span class="modal-tag" style="color: ${expert.color}">${expert.role}</span>
    <div class="modal-section">
      <h4>核心职责</h4>
      <ul>${expert.duties.map((d) => `<li>${d}</li>`).join("")}</ul>
    </div>
    <div class="modal-section">
      <h4>关注边界</h4>
      <p><strong>应深入：</strong>${expert.focus.yes}</p>
      <p><strong>不应独断：</strong>${expert.focus.no}</p>
    </div>
    ${vetoHtml}
  `;

  document.getElementById("expert-modal").showModal();
}

// ── Pipeline highlight ──
function updatePipeline(phaseId, options = {}) {
  const pipeline = document.querySelector(".pipeline");
  pipeline.classList.add("active");

  document.querySelectorAll(".pipeline-step").forEach((step) => {
    const stepId = step.dataset.step;
    step.classList.remove("active", "done", "vetoed");

    const stepIndex = PHASES.findIndex((p) => p.id === stepId);
    const currentIndex = PHASES.findIndex((p) => p.id === phaseId);

    if (stepIndex < currentIndex) step.classList.add("done");
    if (stepId === phaseId) {
      step.classList.add("active");
      if (options.vetoed) step.classList.add("vetoed");
    }
  });
}

function updateProgress() {
  const pct = (meetingState.phaseIndex / (PHASES.length - 1)) * 100;
  document.getElementById("progress-fill").style.width = `${pct}%`;
}

function now() {
  return new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });
}

function addLogEntry({ icon, name, color, body, type = "" }) {
  const log = document.getElementById("meeting-log");
  const empty = log.querySelector(".log-empty");
  if (empty) empty.remove();

  const entry = document.createElement("div");
  entry.className = `log-entry${type ? ` log-entry--${type}` : ""}`;
  entry.style.setProperty("--accent", color || "var(--text-muted)");
  entry.innerHTML = `
    <div class="log-entry-header">
      <span class="log-entry-icon">${icon}</span>
      <span class="log-entry-name">${name}</span>
      <span class="log-entry-time">${now()}</span>
    </div>
    <div class="log-entry-body">${body}</div>
  `;
  log.appendChild(entry);
  log.scrollTop = log.scrollHeight;
}

// ── Meeting flow ──
function startMeeting(topic) {
  meetingState = { active: true, phaseIndex: 0, topic, discussed: false };

  document.getElementById("meeting-log").innerHTML = "";
  document.getElementById("meeting-controls").hidden = false;
  document.getElementById("cto-decision").hidden = true;
  document.getElementById("btn-next").disabled = false;
  document.getElementById("btn-discuss").hidden = true;

  updatePipeline("input");
  updateProgress();
  document.getElementById("phase-indicator").textContent = "议题输入";

  addLogEntry({
    icon: "📋",
    name: "议题",
    color: "var(--input)",
    body: `<strong>${topic.title}</strong><br>背景：${topic.bg || "—"}<br>目标：${topic.goal || "—"}<br>约束：${topic.constraints || "—"}`,
  });

  meetingState.phaseIndex = 1;
  highlightNextPhase();
}

function highlightNextPhase() {
  const phase = PHASES[meetingState.phaseIndex];
  if (!phase) return;

  updatePipeline(phase.id);
  updateProgress();
  document.getElementById("phase-indicator").textContent = phase.label;

  if (phase.id === "discuss") {
    document.getElementById("btn-discuss").hidden = false;
    document.getElementById("btn-next").textContent = "跳过交叉讨论";
  } else if (phase.id === "cto") {
    document.getElementById("btn-next").hidden = true;
    document.getElementById("btn-discuss").hidden = true;
  } else if (phase.id === "conclusion") {
    document.getElementById("meeting-controls").hidden = true;
  } else {
    document.getElementById("btn-next").textContent = "下一位专家发言";
    document.getElementById("btn-discuss").hidden = true;
  }
}

function advancePhase() {
  const phase = PHASES[meetingState.phaseIndex];

  if (phase.expert) {
    const expert = EXPERTS.find((e) => e.id === phase.expert);
    addLogEntry({
      icon: expert.icon,
      name: expert.name,
      color: expert.color,
      body: expert.sample,
    });
  }

  if (phase.id === "discuss") {
    meetingState.discussed = false;
  }

  meetingState.phaseIndex++;

  if (meetingState.phaseIndex >= PHASES.length) return;

  const nextPhase = PHASES[meetingState.phaseIndex];

  if (nextPhase.id === "discuss" && meetingState.discussed) {
    meetingState.phaseIndex++;
  }

  if (PHASES[meetingState.phaseIndex]?.id === "cto") {
    highlightNextPhase();
    document.getElementById("meeting-controls").hidden = true;
    document.getElementById("cto-decision").hidden = false;
    return;
  }

  if (PHASES[meetingState.phaseIndex]?.id === "conclusion") {
    return;
  }

  highlightNextPhase();
}

function enterDiscussion() {
  meetingState.discussed = true;
  addLogEntry({
    icon: "💬",
    name: "交叉讨论",
    color: "var(--discuss)",
    body: "安全专家与开发专家就登录频率限制的实现成本进行讨论，达成妥协：MVP 采用 IP 级别限流，V2 升级为用户级别。",
    type: "system",
  });
  meetingState.phaseIndex++;
  highlightNextPhase();
}

function conclude(decision) {
  const isApprove = decision === "approve";
  updatePipeline(isApprove ? "conclusion" : "product", { vetoed: !isApprove });
  document.getElementById("phase-indicator").textContent = isApprove ? "会议通过" : "会议否决";
  document.getElementById("progress-fill").style.width = "100%";
  document.getElementById("cto-decision").hidden = true;

  if (isApprove) {
    addLogEntry({
      icon: "✅",
      name: "技术总监 · 通过",
      color: "var(--conclusion)",
      body: "方案整体可行。安全 Blocker 须在 Sprint 1 完成修复。下一步：架构专家输出接口文档，开发专家启动 Sprint 规划。",
      type: "approve",
    });
    addLogEntry({
      icon: "📄",
      name: "结论输出",
      color: "var(--conclusion)",
      body: "会议记录已生成。行动项 3 条，P0 安全修复 2 项，P1 架构文档 1 项。",
      type: "approve",
    });
  } else {
    addLogEntry({
      icon: "🚫",
      name: "技术总监 · 否决",
      color: "var(--security)",
      body: "否决依据：安全红线 — 存在 2 项未解决的 Blocker。<br>退回环节：开发专家 + 网络安全专家<br>必须修改：① 实现登录频率限制 ② 补充审计日志",
      type: "veto",
    });
  }

  meetingState.active = false;
}

function resetMeeting() {
  meetingState = { active: false, phaseIndex: 0, topic: {}, discussed: false };
  document.getElementById("meeting-form").reset();
  document.getElementById("meeting-log").innerHTML = `
    <div class="log-empty">
      <span class="log-empty-icon">🪑</span>
      <p>专家们已就位，等待议题提交</p>
    </div>
  `;
  document.getElementById("meeting-controls").hidden = true;
  document.getElementById("cto-decision").hidden = true;
  document.getElementById("btn-next").hidden = false;
  document.getElementById("phase-indicator").textContent = "等待开始";
  document.getElementById("progress-fill").style.width = "0%";
  document.querySelector(".pipeline").classList.remove("active");
  document.querySelectorAll(".pipeline-step").forEach((s) => s.classList.remove("active", "done", "vetoed"));
}

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  renderExpertCards();

  document.getElementById("meeting-form").addEventListener("submit", (ev) => {
    ev.preventDefault();
    startMeeting({
      title: document.getElementById("topic-title").value,
      bg: document.getElementById("topic-bg").value,
      goal: document.getElementById("topic-goal").value,
      constraints: document.getElementById("topic-constraints").value,
    });
  });

  document.getElementById("btn-next").addEventListener("click", advancePhase);
  document.getElementById("btn-discuss").addEventListener("click", enterDiscussion);
  document.getElementById("btn-approve").addEventListener("click", () => conclude("approve"));
  document.getElementById("btn-veto").addEventListener("click", () => conclude("veto"));
  document.getElementById("btn-reset").addEventListener("click", resetMeeting);

  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("expert-modal").close();
  });

  document.getElementById("expert-modal").addEventListener("click", (ev) => {
    if (ev.target === ev.currentTarget) ev.currentTarget.close();
  });
});
