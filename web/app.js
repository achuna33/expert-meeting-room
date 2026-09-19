const EXPERTS = [
  {
    id: "strategy",
    name: "马蒂·卡根",
    nameEn: "Marty Cagan",
    icon: "🧭",
    color: "var(--strategy)",
    role: "Product Strategy",
    skill: "marty-cagan",
    summary: "阶段 0：宏观调控产品方向 · Outcome over Output",
    sampleA: "▶️ 战略推进：Beta 期统一账号体系是 P0 Outcome，与多租户战略对齐。核心 Outcome：30 天内注册转化率 +15%。战略 Won't：不做 SSO、不做社交登录。",
    duties: ["机会评估与战略契合", "Outcome 定义与战略边界", "宏观优先级与说「不」", "红线对照与 CTO 风险预警"],
    focus: { yes: "战略方向、商业 Outcome", no: "MVP 细节、架构、排期" },
  },
  {
    id: "product",
    name: "唐·诺曼",
    nameEn: "Don Norman",
    icon: "🎯",
    color: "var(--product)",
    role: "Product Design",
    skill: "don-norman",
    summary: "阶段 A：MVP 范围与 MoSCoW",
    sampleA: "MVP：邮箱+密码登录、会话保持、找回密码。不做 SSO（V2）。Must 3 项，Won't 2 项。",
    duties: ["澄清用户需求", "定义 MVP 与 MoSCoW", "验收标准", "红线对照与 CTO 风险预警"],
    focus: { yes: "需求合理性、MVP 范围", no: "技术架构、安全细节" },
  },
  {
    id: "metrics",
    name: "罗恩·科哈维",
    nameEn: "Ron Kohavi",
    icon: "📊",
    color: "var(--metrics)",
    role: "Metrics & Experiment",
    skill: "ron-kohavi",
    summary: "阶段 A 轻量度量 · 阶段 B 完整方案",
    sampleA: "North Star：注册转化率。可测性 ✅。需上线后 2 周观察，暂不做 A/B（流量不足）。Guardrail：登录失败率不得上升。",
    sampleB: "完整指标表 5 项，埋点 P0 共 8 个事件。实验：MVP 后观察期 14 天，样本量约 2000 可判显著性。",
    duties: ["指标定义与可测性", "实验设计", "埋点与数据采集需求", "红线对照与 CTO 风险预警"],
    focus: { yes: "度量、实验、因果验证", no: "功能取舍、架构、排期" },
  },
  {
    id: "architect",
    name: "马丁·福勒",
    nameEn: "Martin Fowler",
    icon: "🏗️",
    color: "var(--architect)",
    role: "Architecture · 阶段 B",
    skill: "martin-fowler",
    summary: "阶段 B：完整架构（粗方案闸门 ▶️ 后）",
    sampleB: "JWT + Refresh Token 双令牌，认证服务独立模块。先简单后演进，支持后续 SSO。",
    duties: ["模块划分与选型", "Trade-off 分析", "NFR 目标", "红线对照与 CTO 风险预警"],
    focus: { yes: "系统结构、演进策略", no: "排期、安全攻防细节" },
  },
  {
    id: "developer",
    name: "林纳斯·托瓦兹",
    nameEn: "Linus Torvalds",
    icon: "⚙️",
    color: "var(--developer)",
    role: "Development",
    skill: "linus-torvalds",
    summary: "阶段 A：T-shirt · 阶段 B：人天明细",
    sampleA: "量级：M（约 2–3 周，2 后端 + 1 前端）。约束匹配 ✅。最大风险：Token 轮换边界。",
    sampleB: "总工作量 18 人天（±20%）。关键路径：认证模块 8 人天。预计第 4 周交付。",
    duties: ["T-shirt / 人天估算", "风险登记", "测试与 CI/CD", "红线对照与 CTO 风险预警"],
    focus: { yes: "实现成本、排期", no: "产品优先级独断" },
  },
  {
    id: "security",
    name: "布鲁斯·施奈尔",
    nameEn: "Bruce Schneier",
    icon: "🛡️",
    color: "var(--security)",
    role: "Security",
    skill: "bruce-schneier",
    summary: "阶段 A：轻量威胁草图 · 阶段 B：完整审查",
    sampleA: "预判 Blocker 2 项：无登录频率限制、无审计日志。合规粗判：等保二级 ⚠️ 待确认。",
    sampleB: "Blocker 2 项（频率限制、审计日志）。密码 bcrypt，Token HttpOnly Cookie。等保二级 ⚠️ 有条件通过。",
    duties: ["威胁模型", "Blocker 识别", "合规检查", "红线对照与 CTO 风险预警"],
    focus: { yes: "威胁分析、合规", no: "产品功能取舍独断" },
  },
  {
    id: "sre",
    name: "Charity Majors",
    nameEn: "Charity Majors",
    icon: "📡",
    color: "var(--sre)",
    role: "SRE & Observability",
    skill: "charity-majors",
    summary: "阶段 B：SLI/SLO、可观测性、on-call",
    sampleB: "SLO：可用性 99.9%，P99 登录延迟 <300ms。可观测性：trace 必带 user_id/request_id。灰度 5%→50%→100%，回滚触发：错误率 >1%。on-call：后端轮值，P0 告警 3 条。",
    duties: ["SLI/SLO 与 error budget", "可观测性设计", "发布回滚与 on-call", "红线对照与 CTO 风险预警"],
    focus: { yes: "运维、可观测性、生产可靠性", no: "产品功能、架构选型独断" },
  },
  {
    id: "impact",
    name: "迈克尔·费瑟斯",
    nameEn: "Michael Feathers",
    icon: "🔍",
    color: "var(--discuss)",
    role: "Impact Review · 阶段 C",
    skill: "michael-feathers",
    summary: "阶段 C：开发设计方案定稿前的影响面复查",
    sample: "⚠️ 有遗漏 2 项：Token 结构变更波及网关鉴权中间件（🔴 未列入任务表）；用户表加字段需同步迁移脚本与文档（🟡）。退回福勒补契约影响、林纳斯补 2 人天任务。回归范围：登录、网关鉴权、会话刷新。",
    duties: ["影响面扫描（调用方/契约/数据/测试/文档/配置）", "遗漏比对与退回建议", "修改顺序与回归范围"],
    focus: { yes: "影响面、联动修改、波及分级", no: "功能取舍、架构方向独断" },
  },
  {
    id: "cto",
    name: "维尔纳·沃格尔",
    nameEn: "Werner Vogels",
    icon: "⚖️",
    color: "var(--cto)",
    role: "CTO · 三道闸门",
    skill: "werner-vogels",
    summary: "立项闸门 / 粗方案闸门 / 终审（否决权）",
    sampleGateInit: "▶️ 继续：议题方向值得讨论，4 周约束紧张但可尝试，红线 3 项已确认。",
    sampleGateCoarse: "▶️ 进入细设计：MVP 清晰，M 量级可接受，预判 Blocker 可解。",
    sampleFinal: "⚠️ 有条件通过：方案可行，2 项安全 Blocker 须在 Sprint 1 修复后方可上线。",
    duties: ["立项闸门", "粗方案闸门", "终审决策", "最小退回点"],
    focus: { yes: "跨领域裁决、闸门与否决", no: "各领域细节" },
    vetoReasons: [
      "安全红线：未解决的 Blocker",
      "架构硬伤：不可演进的设计",
      "成本失真：估算严重偏离",
      "方向偏离：与战略不符",
      "依赖阻塞：关键依赖未确认",
    ],
    isCto: true,
  },
];

const ALL_PHASES = [
  { id: "input", label: "诉求深挖", type: "system" },
  { id: "strategy", label: "卡根 · 战略定向", expert: "strategy", mode: "a" },
  { id: "gate-init", label: "沃格尔 · 立项闸门", type: "gate", gateKind: "init" },
  { id: "product-a", label: "唐·诺曼 · 阶段 A", expert: "product", mode: "a" },
  { id: "metrics-light", label: "科哈维 · 轻量度量", expert: "metrics", mode: "a" },
  { id: "security-light", label: "施奈尔 · 轻量", expert: "security", mode: "a" },
  { id: "dev-tshirt", label: "林纳斯 · T-shirt", expert: "developer", mode: "a" },
  { id: "gate-coarse", label: "沃格尔 · 粗方案闸门", type: "gate", gateKind: "coarse" },
  { id: "architect", label: "马丁·福勒 · 阶段 B", expert: "architect", mode: "b" },
  { id: "dev-detail", label: "林纳斯 · 明细", expert: "developer", mode: "b" },
  { id: "metrics-full", label: "科哈维 · 完整度量", expert: "metrics", mode: "b" },
  { id: "security-full", label: "施奈尔 · 完整", expert: "security", mode: "b" },
  { id: "sre", label: "梅杰斯 · 运维", expert: "sre", mode: "b" },
  { id: "discuss", label: "交叉讨论", type: "discuss" },
  { id: "gate-final", label: "沃格尔 · 终审", type: "gate", gateKind: "final" },
  { id: "conclusion", label: "结论输出", type: "system" },
  { id: "design", label: "阶段 C · 详细设计", type: "system" },
];

const PHASE_BY_ID = Object.fromEntries(ALL_PHASES.map((p) => [p.id, p]));

const EXPERT_PHASES = {
  strategy: ["strategy"],
  product: ["product-a"],
  metrics: ["metrics-light", "metrics-full"],
  security: ["security-light", "security-full"],
  developer: ["dev-tshirt", "dev-detail"],
  architect: ["architect"],
  sre: ["sre"],
  impact: ["design"],
  cto: ["gate-init", "gate-coarse", "gate-final"],
};

const TOPIC_SIGNALS = {
  greenfield: ["新做", "从零", "mvp", "新功能", "新系统", "新模块", "上线新", "没有现有"],
  change: ["改", "重构", "迁移", "替换", "升级", "影响面", "联动", "现有", "字段", "接口变更", "改表"],
  strategy: ["要不要做", "值不值得", "方向", "优先级", "战略", "路线图", "是否投入"],
  security: ["安全", "渗透", "合规", "等保", "漏洞", "认证", "授权", "隐私", "gdpr"],
  architecture: ["架构", "技术选型", "拆分", "微服务", "性能架构", "模块设计"],
  ops: ["slo", "sli", "告警", "on-call", "可观测", "容量", "故障", "稳定性", "运维", "可靠性"],
  metrics: ["a/b", "ab测试", "指标", "转化率", "怎么证明", "实验", "埋点", "north star"],
  minimal: ["改文案", "改配置", "一行", "纯文档", "错别字", "小修复", "半人天", "极小"],
};

/** 隐含领域：原文没写「安全/架构」等词，真实问题仍可能碰到。 */
const DOMAIN_HINTS = [
  {
    keys: ["登录", "登陆", "账号", "注册", "认证", "密码", "sso", "会话", "token", "鉴权"],
    types: ["greenfield", "security"],
    experts: ["product", "security", "architect", "developer", "metrics"],
    insight: "身份与会话是信任边界和转化漏斗，不只是一个表单。",
  },
  {
    keys: ["支付", "收银台", "退款", "订单金额"],
    types: ["security", "greenfield"],
    experts: ["product", "security", "architect", "developer", "sre"],
    insight: "资金链路涉及完整性、审计与对账，安全与可靠性默认入场。",
  },
  {
    keys: ["通知", "消息", "推送", "邮件", "短信"],
    types: ["greenfield"],
    experts: ["product", "architect", "developer"],
    insight: "触达能力要划清渠道、失败重试与用户偏好，避免做成一次性脚本。",
  },
  {
    keys: ["要不要", "值不值得", "值不值", "方向", "优先级", "战略", "做不做"],
    types: ["strategy"],
    experts: ["strategy", "cto"],
    insight: "核心是投不投入，不是怎么实现。",
  },
  {
    keys: ["重构", "迁移", "替换", "升级现有", "改接口", "改表", "字段"],
    types: ["change"],
    experts: ["impact", "developer", "architect"],
    insight: "改的是已有系统，影响面与回归范围是第一问题。",
  },
  {
    keys: ["slo", "告警", "on-call", "可观测", "容量", "故障", "稳定性"],
    types: ["ops"],
    experts: ["sre", "developer"],
    insight: "上线后怎么跑，比再加功能更关键。",
  },
  {
    keys: ["a/b", "实验", "转化", "指标", "埋点", "怎么证明"],
    types: ["metrics"],
    experts: ["metrics", "product"],
    insight: "要先能证明做成了，再谈做多大。",
  },
];

const EXPERT_META = {
  strategy: { name: "马蒂·卡根", reason: "战略方向与 Outcome 对齐" },
  product: { name: "唐·诺曼", reason: "用户功能与 MVP 边界" },
  metrics: { name: "罗恩·科哈维", reason: "指标验证与实验设计" },
  security: { name: "布鲁斯·施奈尔", reason: "安全边界与合规" },
  developer: { name: "林纳斯·托瓦兹", reason: "实现成本与排期" },
  architect: { name: "马丁·福勒", reason: "架构与模块划分" },
  sre: { name: "Charity Majors", reason: "生产可靠性与可观测性" },
  impact: { name: "迈克尔·费瑟斯", reason: "改动影响面与联动修改" },
  cto: { name: "维尔纳·沃格尔", reason: "闸门把关与终审（必选）" },
};

const SKIP_REASONS = {
  strategy: "范围明确，非战略决策",
  product: "纯技术/运维专项，不涉及产品功能",
  metrics: "无指标或效果验证需求",
  security: "无用户数据/对外 API/合规要求",
  developer: "纯战略讨论，暂不评估实现",
  architect: "不改系统结构的小改动",
  sre: "不上生产或无运维影响",
  impact: "全新代码库，无既有调用方",
};

function unique(arr) {
  return [...new Set(arr)];
}

function analyzeBrief(topic) {
  const raw = [topic.title, topic.bg, topic.goal, topic.constraints, topic.redlines]
    .filter(Boolean)
    .join("\n");
  const t = raw.toLowerCase();
  const hits = DOMAIN_HINTS.filter((h) => h.keys.some((k) => t.includes(k.toLowerCase())));

  const impliedTypes = unique(hits.flatMap((h) => h.types));
  const impliedExperts = unique(hits.flatMap((h) => h.experts));
  const insights = unique(hits.map((h) => h.insight));

  const assumptions = [];
  if (!topic.bg) assumptions.push("背景未给，按字面议题理解");
  if (!topic.goal) assumptions.push("目标未给，按「形成可执行结论」理解");
  if (!topic.constraints) assumptions.push("约束未给，按常规产品迭代节奏理解");
  if (!topic.redlines) assumptions.push("红线未给，将从议题隐含风险推断");

  const surface = (topic.title || "").trim() || "（未填写标题）";
  const realNeed = insights.length
    ? insights.join(" ")
    : topic.bg
      ? topic.bg.trim()
      : "把一句话想法拆成可决策问题：为谁、解决什么摩擦、成功如何被看见。";
  const success = (topic.goal || "").trim()
    || "相关专家给出可执行结论，并按议题类型交付对应文档。";
  const impliedLabel = impliedTypes.length
    ? impliedTypes.join("、")
    : "按新功能默认展开（工作假设）";

  return {
    surface,
    realNeed,
    success,
    impliedTypes,
    impliedExperts,
    impliedLabel,
    insights,
    assumptions,
    raw,
  };
}

function classifyTopic(text, brief) {
  const t = text.toLowerCase();
  const scores = {};
  for (const [type, signals] of Object.entries(TOPIC_SIGNALS)) {
    scores[type] = signals.reduce((n, s) => n + (t.includes(s.toLowerCase()) ? 1 : 0), 0);
  }
  if (brief?.impliedTypes) {
    for (const ty of brief.impliedTypes) {
      scores[ty] = (scores[ty] || 0) + 2;
    }
  }
  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const primary = ranked[0][1] > 0 ? ranked[0][0] : "greenfield";
  const secondary = ranked.filter(([k, v]) => v > 0 && k !== primary).map(([k]) => k);
  return { primary, secondary, scores };
}

function pickTemplate(primary, secondary) {
  if (primary === "strategy" && !secondary.includes("change")) return "T3";
  if (primary === "minimal") return "T7";
  if (primary === "security" && !secondary.includes("greenfield")) return "T4";
  if (primary === "architecture") return "T5";
  if (primary === "ops") return "T6";
  if (primary === "change" || secondary.includes("change")) return "T2";
  return "T1";
}

function selectExperts(primary, secondary, text, brief) {
  const t = text.toLowerCase();
  const has = (keys) => keys.some((k) => t.includes(k));
  const experts = new Set(["cto"]);
  (brief?.impliedExperts || []).forEach((id) => experts.add(id));

  if (primary === "strategy" && !secondary.includes("change")) {
    experts.add("strategy");
    if (has(["mvp", "范围", "功能", "用户"])) experts.add("product");
    return experts;
  }

  if (primary === "minimal") {
    experts.add("developer");
    if (secondary.includes("change") || has(["改", "重构", "迁移", "接口", "字段"])) experts.add("impact");
    return experts;
  }

  if (primary === "security") {
    experts.add("security");
    experts.add("developer");
    if (has(["用户", "登录", "产品", "功能"])) experts.add("product");
    if (has(["架构", "模块", "服务", "api"])) experts.add("architect");
    return experts;
  }

  if (primary === "architecture") {
    experts.add("architect");
    experts.add("developer");
    experts.add("product");
    if (has(["用户", "登录", "密码", "支付", "隐私", "数据", "等保", "合规", "api"])) experts.add("security");
    if (has(["上线", "生产", "部署", "slo", "告警"])) experts.add("sre");
    return experts;
  }

  if (primary === "ops") {
    experts.add("sre");
    experts.add("developer");
    if (has(["架构", "拆分", "模块", "重构"])) experts.add("architect");
    if (has(["指标", "转化", "实验", "a/b"])) experts.add("metrics");
    return experts;
  }

  if (primary === "metrics") {
    experts.add("metrics");
    experts.add("product");
    return experts;
  }

  // greenfield / change default
  if (primary === "greenfield" || !secondary.includes("change")) experts.add("strategy");
  if (primary !== "minimal") experts.add("product");
  experts.add("developer");

  if (has(["指标", "转化", "实验", "a/b", "证明", "north star", "埋点"]) || primary === "metrics") {
    experts.add("metrics");
  }
  if (has(["用户", "登录", "密码", "支付", "隐私", "数据", "等保", "合规", "token", "鉴权", "api"]) || primary === "security") {
    experts.add("security");
  }
  if (has(["架构", "模块", "选型", "微服务", "拆分"]) || primary === "architecture") {
    experts.add("architect");
  }
  if (has(["上线", "生产", "部署", "slo", "告警", "on-call", "灰度"]) || primary === "ops") {
    experts.add("sre");
  }
  if (primary === "change" || secondary.includes("change") || has(["重构", "迁移", "影响", "联动", "改接口", "改表"])) {
    experts.add("impact");
  }

  return experts;
}

function buildPhaseFlow(experts, template) {
  const phaseIds = new Set(["input"]);

  if (template === "T3") {
    if (experts.has("strategy")) phaseIds.add("strategy");
    phaseIds.add("gate-init");
    if (experts.has("product")) phaseIds.add("product-a");
    phaseIds.add("gate-final");
    phaseIds.add("conclusion");
    return ALL_PHASES.filter((p) => phaseIds.has(p.id));
  }

  if (template === "T7") {
    if (experts.has("developer")) phaseIds.add("dev-tshirt");
    phaseIds.add("gate-final");
    phaseIds.add("conclusion");
    if (experts.has("impact")) phaseIds.add("design");
    return ALL_PHASES.filter((p) => phaseIds.has(p.id));
  }

  if (experts.has("strategy")) phaseIds.add("strategy");
  phaseIds.add("gate-init");

  if (experts.has("product")) phaseIds.add("product-a");
  if (experts.has("metrics")) phaseIds.add("metrics-light");
  if (experts.has("security")) phaseIds.add("security-light");
  if (experts.has("developer")) phaseIds.add("dev-tshirt");

  const needsCoarse = experts.has("architect") || experts.has("metrics") || experts.has("security") || template === "T1" || template === "T2";
  if (needsCoarse && template !== "T4") phaseIds.add("gate-coarse");

  if (experts.has("architect")) phaseIds.add("architect");
  if (experts.has("developer") && template !== "T7") phaseIds.add("dev-detail");
  if (experts.has("metrics")) phaseIds.add("metrics-full");
  if (experts.has("security")) phaseIds.add("security-full");
  if (experts.has("sre")) phaseIds.add("sre");

  if (template === "T1" || template === "T2") phaseIds.add("discuss");
  phaseIds.add("gate-final");
  phaseIds.add("conclusion");

  const needsDesign = (experts.has("architect") || experts.has("impact")) && template !== "T3";
  if (needsDesign) phaseIds.add("design");

  return ALL_PHASES.filter((p) => phaseIds.has(p.id));
}

function routeMeeting(topic) {
  const text = [topic.title, topic.bg, topic.goal, topic.constraints, topic.redlines].filter(Boolean).join(" ");
  const brief = analyzeBrief(topic);
  const { primary, secondary } = classifyTopic(text, brief);
  const template = pickTemplate(primary, secondary);
  const selected = selectExperts(primary, secondary, text, brief);
  const phases = buildPhaseFlow(selected, template);
  const speaking = new Set(phases.filter((p) => p.expert).map((p) => p.expert));
  if (phases.some((p) => p.id === "design") && selected.has("impact")) speaking.add("impact");
  speaking.add("cto");
  const experts = new Set([...selected].filter((id) => speaking.has(id)));
  const activeExpertIds = [...experts];
  const skipped = Object.keys(EXPERT_META)
    .filter((id) => !experts.has(id))
    .map((id) => ({ id, name: EXPERT_META[id].name, reason: SKIP_REASONS[id] || "与议题无关" }));

  const deliverable =
    template === "T3" ? "战略结论备忘录" :
    template === "T7" ? "轻量结论" :
    "《开发设计方案》";

  return {
    brief,
    primary,
    secondary,
    template,
    templateLabel: { T1: "标准新功能", T2: "改动/重构", T3: "战略决策", T4: "安全专项", T5: "架构专项", T6: "运维专项", T7: "极小事项" }[template],
    experts: activeExpertIds,
    phases,
    skipped,
    deliverable,
    roster: phases
      .filter((p) => p.expert)
      .map((p, i) => ({
        order: i + 1,
        phase: p.label,
        expertId: p.expert,
        name: getExpert(p.expert)?.name,
        reason: EXPERT_META[p.expert]?.reason,
      })),
  };
}

let meetingState = {
  active: false,
  phaseIndex: 0,
  topic: {},
  discussed: false,
  waitingGate: false,
  activePhases: ALL_PHASES,
  routingPlan: null,
};

function getPhases() {
  return meetingState.activePhases?.length ? meetingState.activePhases : ALL_PHASES;
}

function getExpert(id) {
  return EXPERTS.find((e) => e.id === id);
}

function getSample(expert, mode) {
  if (!expert) return "";
  if (mode === "a") return expert.sampleA || expert.sample;
  if (mode === "b") return expert.sampleB || expert.sample;
  return expert.sample || "";
}

function renderExpertCards() {
  const grid = document.getElementById("experts-grid");
  grid.innerHTML = EXPERTS.map((e) => `
    <article class="expert-card${e.isCto ? " expert-card--cto" : ""}" style="--accent: ${e.color}"
      tabindex="0" role="button" aria-label="查看${e.name}详情" data-id="${e.id}">
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
  const expert = getExpert(id);
  if (!expert) return;

  let vetoHtml = "";
  if (expert.vetoReasons) {
    vetoHtml = `
      <div class="modal-veto-box">
        <h4>终审否决 · 可否决情形</h4>
        <ul>${expert.vetoReasons.map((r) => `<li>${r}</li>`).join("")}</ul>
        <p style="margin-top:0.5rem;font-size:0.8125rem;color:var(--text-secondary)">
          方向错误在立项/粗方案闸门停止；终审否决应罕见。
        </p>
      </div>`;
  }

  document.getElementById("modal-content").innerHTML = `
    <h3>${expert.icon} ${expert.name}</h3>
    <span class="modal-tag" style="color: ${expert.color}">${expert.role}</span>
    <div class="modal-section"><h4>核心职责</h4><ul>${expert.duties.map((d) => `<li>${d}</li>`).join("")}</ul></div>
    <div class="modal-section"><h4>关注边界</h4>
      <p><strong>应深入：</strong>${expert.focus.yes}</p>
      <p><strong>不应独断：</strong>${expert.focus.no}</p>
    </div>${vetoHtml}`;
  document.getElementById("expert-modal").showModal();
}

function applyPipelineRouting(plan) {
  const activeIds = new Set(plan.phases.map((p) => p.id));
  document.querySelectorAll(".pipeline-step").forEach((step) => {
    const skipped = !activeIds.has(step.dataset.step);
    step.classList.toggle("pipeline-step--skipped", skipped);
    step.setAttribute("aria-hidden", skipped ? "true" : "false");
  });
}

function renderRoutingPlan(plan) {
  const el = document.getElementById("routing-plan");
  if (!el) return;
  el.hidden = false;
  const typeLabel = plan.secondary.length
    ? `主 ${plan.primary} · 次 ${plan.secondary.join("、")}`
    : plan.primary;
  const brief = plan.brief;
  const briefHtml = brief ? `
    <div class="brief-block">
      <p class="brief-kicker">诉求简报</p>
      <p><strong>表面诉求</strong> ${escapeHtml(brief.surface)}</p>
      <p><strong>真实问题</strong> ${escapeHtml(brief.realNeed)}</p>
      <p><strong>成功长什么样</strong> ${escapeHtml(brief.success)}</p>
      <p><strong>隐含领域</strong> ${escapeHtml(brief.impliedLabel)}</p>
      ${brief.assumptions.length ? `<p><strong>工作假设</strong> ${brief.assumptions.map(escapeHtml).join("；")}</p>` : ""}
    </div>` : "";
  el.innerHTML = `
    <div class="routing-head">
      <strong>智能编排</strong>
      <span class="routing-badge">${plan.template} · ${plan.templateLabel}</span>
    </div>
    ${briefHtml}
    <p class="routing-meta">议题类型：${typeLabel} · 参会 ${plan.experts.length} 人 · 交付：${plan.deliverable}</p>
    <details class="routing-details">
      <summary>发言顺序（${plan.phases.length} 步）· 跳过 ${plan.skipped.length} 人</summary>
      <table class="routing-table">
        <thead><tr><th>#</th><th>环节</th><th>入选理由</th></tr></thead>
        <tbody>
          ${plan.roster.map((r) => `<tr><td>${r.order}</td><td>${r.phase}</td><td>${r.reason || "—"}</td></tr>`).join("")}
        </tbody>
      </table>
      ${plan.skipped.length ? `<p class="routing-skipped"><strong>跳过：</strong>${plan.skipped.map((s) => `${s.name}（${s.reason}）`).join("；")}</p>` : ""}
    </details>`;
}

function updatePipeline(phaseId, options = {}) {
  document.querySelector(".pipeline").classList.add("active");
  const phases = getPhases();
  const currentIndex = phases.findIndex((p) => p.id === phaseId);

  document.querySelectorAll(".pipeline-step").forEach((step) => {
    const stepId = step.dataset.step;
    const stepIndex = phases.findIndex((p) => p.id === stepId);
    step.classList.remove("active", "done", "vetoed", "stopped");

    if (stepIndex >= 0 && stepIndex < currentIndex) step.classList.add("done");
    if (stepId === phaseId) {
      step.classList.add("active");
      if (options.vetoed) step.classList.add("vetoed");
      if (options.stopped) step.classList.add("stopped");
    }
  });
}

function updateProgress() {
  const phases = getPhases();
  const pct = phases.length > 1 ? (meetingState.phaseIndex / (phases.length - 1)) * 100 : 0;
  document.getElementById("progress-fill").style.width = `${pct}%`;
}

function now() {
  return new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function addLogEntry({ icon, name, color, body, type = "" }) {
  const log = document.getElementById("meeting-log");
  log.querySelector(".log-empty")?.remove();

  const entry = document.createElement("div");
  entry.className = `log-entry${type ? ` log-entry--${type}` : ""}`;
  entry.style.setProperty("--accent", color || "var(--text-muted)");
  entry.innerHTML = `
    <div class="log-entry-header">
      <span class="log-entry-icon">${icon}</span>
      <span class="log-entry-name">${name}</span>
      <span class="log-entry-time">${now()}</span>
    </div>
    <div class="log-entry-body">${body}</div>`;
  log.appendChild(entry);
  log.scrollTop = log.scrollHeight;
}

function hideAllDecisions() {
  document.getElementById("gate-decision").hidden = true;
  document.getElementById("cto-decision").hidden = true;
}

function showGateDecision(kind) {
  hideAllDecisions();
  document.getElementById("meeting-controls").hidden = true;
  document.getElementById("gate-decision").hidden = false;
  const goBtn = document.getElementById("btn-gate-go");
  goBtn.textContent = kind === "coarse" ? "▶️ 进入细设计" : "▶️ 继续";
  document.getElementById("gate-prompt").textContent =
    kind === "init" ? "沃格尔 · 立项闸门：" :
    kind === "coarse" ? "沃格尔 · 粗方案闸门：" : "沃格尔 · 终审：";
  meetingState.waitingGate = kind;
}

function showFinalDecision() {
  hideAllDecisions();
  document.getElementById("meeting-controls").hidden = true;
  document.getElementById("cto-decision").hidden = false;
  meetingState.waitingGate = "final";
}

function highlightNextPhase() {
  const phases = getPhases();
  const phase = phases[meetingState.phaseIndex];
  if (!phase) return;

  updatePipeline(phase.id);
  updateProgress();
  document.getElementById("phase-indicator").textContent = phase.label;

  hideAllDecisions();

  if (phase.type === "gate") {
    if (phase.gateKind === "final") {
      showFinalDecision();
    } else {
      showGateDecision(phase.gateKind);
    }
    return;
  }

  if (phase.id === "discuss") {
    document.getElementById("meeting-controls").hidden = false;
    document.getElementById("btn-discuss").hidden = false;
    document.getElementById("btn-next").textContent = "跳过交叉讨论";
    return;
  }

  if (phase.id === "conclusion") {
    document.getElementById("meeting-controls").hidden = true;
    return;
  }

  document.getElementById("meeting-controls").hidden = false;
  document.getElementById("btn-next").hidden = false;
  document.getElementById("btn-discuss").hidden = true;
  document.getElementById("btn-next").textContent = "下一位发言";
}

function startMeeting(topic) {
  const plan = routeMeeting(topic);
  meetingState = {
    active: true,
    phaseIndex: 0,
    topic,
    discussed: false,
    waitingGate: false,
    activePhases: plan.phases,
    routingPlan: plan,
  };

  document.getElementById("meeting-log").innerHTML = "";
  hideAllDecisions();
  document.getElementById("meeting-controls").hidden = false;
  document.getElementById("btn-next").disabled = false;

  applyPipelineRouting(plan);
  renderRoutingPlan(plan);
  updatePipeline("input");
  document.getElementById("phase-indicator").textContent = "诉求深挖";

  const brief = plan.brief;
  addLogEntry({
    icon: "🧠",
    name: "诉求深挖",
    color: "var(--input)",
    body: `<strong>${escapeHtml(topic.title)}</strong><br>
      表面诉求：${escapeHtml(brief.surface)}<br>
      真实问题：${escapeHtml(brief.realNeed)}<br>
      成功长什么样：${escapeHtml(brief.success)}<br>
      隐含领域：${escapeHtml(brief.impliedLabel)}<br>
      工作假设：${brief.assumptions.length ? brief.assumptions.map(escapeHtml).join("；") : "无"}<br>
      原文背景 / 目标 / 约束 / 红线：${escapeHtml(topic.bg || "—")} / ${escapeHtml(topic.goal || "—")} / ${escapeHtml(topic.constraints || "—")} / ${escapeHtml(topic.redlines || "—")}`,
  });

  addLogEntry({
    icon: "🧭",
    name: "会议编排方案",
    color: "var(--strategy)",
    body: `<strong>${plan.template} ${plan.templateLabel}</strong> · 参会 ${plan.experts.length} 人 · 跳过 ${plan.skipped.length} 人<br>
      交付物：${plan.deliverable}<br>
      ${plan.skipped.length ? `跳过：${plan.skipped.map((s) => s.name).join("、")}` : "全员相关，无跳过"}`,
    type: "system",
  });

  meetingState.phaseIndex = 1;
  highlightNextPhase();
}

function advancePhase() {
  const phases = getPhases();
  const phase = phases[meetingState.phaseIndex];

  if (phase.expert) {
    const expert = getExpert(phase.expert);
    addLogEntry({
      icon: expert.icon,
      name: `${expert.name}${phase.mode === "a" ? " · 阶段 A" : " · 阶段 B"}`,
      color: expert.color,
      body: getSample(expert, phase.mode),
    });
  }

  if (phase.type === "gate" && phase.gateKind !== "final") {
    const cto = getExpert("cto");
    const sample = phase.gateKind === "init" ? cto.sampleGateInit : cto.sampleGateCoarse;
    addLogEntry({ icon: cto.icon, name: phase.label, color: cto.color, body: sample, type: "system" });
  }

  if (phase.id === "discuss") meetingState.discussed = false;

  meetingState.phaseIndex++;
  if (meetingState.phaseIndex >= phases.length) return;

  if (phases[meetingState.phaseIndex]?.id === "discuss" && meetingState.discussed) {
    meetingState.phaseIndex++;
  }

  highlightNextPhase();
}

function enterDiscussion() {
  meetingState.discussed = true;
  addLogEntry({
    icon: "💬",
    name: "交叉讨论",
    color: "var(--discuss)",
    body: "施奈尔 Blocker（频率限制）vs 林纳斯成本：妥协为 MVP IP 级限流，V2 升级用户级。",
    type: "system",
  });
  meetingState.phaseIndex++;
  highlightNextPhase();
}

function handleGateGo() {
  const kind = meetingState.waitingGate;
  const cto = getExpert("cto");
  const label = kind === "coarse" ? "▶️ 进入细设计" : "▶️ 继续";
  addLogEntry({ icon: cto.icon, name: `沃格尔 · ${kind === "init" ? "立项" : "粗方案"}闸门`, color: cto.color, body: label + " — 按闸门结论推进。", type: "approve" });
  meetingState.waitingGate = false;
  hideAllDecisions();
  document.getElementById("meeting-controls").hidden = false;
  meetingState.phaseIndex++;
  highlightNextPhase();
}

function handleGateNarrow() {
  const cto = getExpert("cto");
  addLogEntry({ icon: cto.icon, name: "沃格尔 · 收窄", color: cto.color, body: "🔽 收窄：MVP 范围过大，退回唐·诺曼缩小 Must 项至 3 个以内。", type: "system" });
  meetingState.phaseIndex = getPhases().findIndex((p) => p.id === "product-a");
  meetingState.waitingGate = false;
  hideAllDecisions();
  document.getElementById("meeting-controls").hidden = false;
  highlightNextPhase();
}

function handleGateStop() {
  const cto = getExpert("cto");
  addLogEntry({ icon: cto.icon, name: "沃格尔 · 停止", color: "var(--security)", body: "⏹️ 停止：方向与约束冲突，会议结束。成本极低，未进入细设计。", type: "veto" });
  const phases = getPhases();
  updatePipeline(phases[meetingState.phaseIndex].id, { stopped: true });
  document.getElementById("phase-indicator").textContent = "会议停止";
  document.getElementById("progress-fill").style.width = `${phases.length > 1 ? (meetingState.phaseIndex / (phases.length - 1)) * 100 : 100}%`;
  hideAllDecisions();
  document.getElementById("meeting-controls").hidden = true;
  meetingState.active = false;
  meetingState.waitingGate = false;
}

function conclude(decision) {
  const cto = getExpert("cto");
  const isApprove = decision === "approve";
  const isConditional = decision === "conditional";

  updatePipeline(isApprove || isConditional ? "conclusion" : "dev-detail", { vetoed: !isApprove && !isConditional });
  document.getElementById("phase-indicator").textContent =
    isApprove ? "✅ 通过" : isConditional ? "⚠️ 有条件通过" : "❌ 否决";
  document.getElementById("progress-fill").style.width = "100%";
  hideAllDecisions();

  const plan = meetingState.routingPlan;
  const deliverable = plan?.deliverable || "《开发设计方案》";

  if (isApprove || isConditional) {
    addLogEntry({
      icon: "✅",
      name: `沃格尔 · ${isConditional ? "有条件通过" : "通过"}`,
      color: "var(--conclusion)",
      body: cto.sampleFinal + (isConditional ? " P0：2 项 Blocker 须在 Sprint 1 修复。" : ""),
      type: "approve",
    });
    addLogEntry({ icon: "📄", name: "结论输出", color: "var(--conclusion)", body: "会议记录已生成。交付：" + deliverable, type: "approve" });

    if (getPhases().some((p) => p.id === "design")) {
      addLogEntry({
        icon: "📐",
        name: "阶段 C · 详细设计",
        color: "var(--architect)",
        body: "福勒输出系统设计章节；林纳斯输出实施计划章节（按编排按需组装）。",
        type: "approve",
      });
      if (plan?.experts.includes("impact")) {
        addLogEntry({
          icon: "🔍",
          name: "迈克尔·费瑟斯 · 影响面复查",
          color: "var(--discuss)",
          body: "✅ 影响面完整：波及项全部已覆盖任务表；遗漏 0 项。",
          type: "approve",
        });
      }
      addLogEntry({
        icon: "📄",
        name: `${deliverable}定稿交付`,
        color: "var(--conclusion)",
        body: "按实际参会专家章节组装为可直接开工的单一文档。",
        type: "approve",
      });
      updatePipeline("design");
    }
  } else {
    addLogEntry({
      icon: "🚫",
      name: "沃格尔 · 否决",
      color: "var(--security)",
      body: "❌ 否决：安全红线未解决。<br>最小退回：林纳斯 + 施奈尔<br>为何前序未拦住：Blocker 修复方案在阶段 B 才细化暴露。",
      type: "veto",
    });
  }

  meetingState.active = false;
  meetingState.waitingGate = false;
}

function resetMeeting() {
  meetingState = { active: false, phaseIndex: 0, topic: {}, discussed: false, waitingGate: false, activePhases: ALL_PHASES, routingPlan: null };
  const routingEl = document.getElementById("routing-plan");
  if (routingEl) routingEl.hidden = true;
  document.getElementById("meeting-form").reset();
  document.getElementById("meeting-log").innerHTML = `
    <div class="log-empty"><span class="log-empty-icon">🪑</span><p>专家们已就位，等待议题提交</p></div>`;
  hideAllDecisions();
  document.getElementById("meeting-controls").hidden = true;
  document.getElementById("btn-next").hidden = false;
  document.getElementById("phase-indicator").textContent = "等待开始";
  document.getElementById("progress-fill").style.width = "0%";
  document.querySelector(".pipeline").classList.remove("active");
  document.querySelectorAll(".pipeline-step").forEach((s) => {
    s.classList.remove("active", "done", "vetoed", "stopped", "pipeline-step--skipped");
    s.removeAttribute("aria-hidden");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderExpertCards();

  document.getElementById("meeting-form").addEventListener("submit", (ev) => {
    ev.preventDefault();
    startMeeting({
      title: document.getElementById("topic-title").value,
      bg: document.getElementById("topic-bg").value,
      goal: document.getElementById("topic-goal").value,
      constraints: document.getElementById("topic-constraints").value,
      redlines: document.getElementById("topic-redlines").value,
    });
  });

  document.getElementById("btn-next").addEventListener("click", advancePhase);
  document.getElementById("btn-discuss").addEventListener("click", enterDiscussion);
  document.getElementById("btn-gate-go").addEventListener("click", handleGateGo);
  document.getElementById("btn-gate-narrow").addEventListener("click", handleGateNarrow);
  document.getElementById("btn-gate-stop").addEventListener("click", handleGateStop);
  document.getElementById("btn-approve").addEventListener("click", () => conclude("approve"));
  document.getElementById("btn-conditional").addEventListener("click", () => conclude("conditional"));
  document.getElementById("btn-veto").addEventListener("click", () => conclude("veto"));
  document.getElementById("btn-reset").addEventListener("click", resetMeeting);
  document.getElementById("modal-close").addEventListener("click", () => document.getElementById("expert-modal").close());
  document.getElementById("expert-modal").addEventListener("click", (ev) => {
    if (ev.target === ev.currentTarget) ev.currentTarget.close();
  });
});
