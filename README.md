# 专家会议室

围绕一个议题，九位世界级专家经**战略定向 + 两阶段会议 + 三道闸门**协作决策，终审通过后经影响面复查，产出可直接开工的《开发设计方案》。

## 专家席位

| 席位 | 专家 | Skill | 领域标杆 |
|------|------|-------|----------|
| 产品战略 | **马蒂·卡根** Marty Cagan | `marty-cagan` | 《启示录》《赋能》作者 |
| 产品设计 | **唐·诺曼** Don Norman | `don-norman` | 《设计心理学》作者 |
| 度量实验 | **罗恩·科哈维** Ron Kohavi | `ron-kohavi` | 《在线可控实验》合著者 |
| 架构设计 | **马丁·福勒** Martin Fowler | `martin-fowler` | 《企业应用架构模式》作者 |
| 开发工程 | **林纳斯·托瓦兹** Linus Torvalds | `linus-torvalds` | Linux 与 Git 创造者 |
| 网络安全 | **布鲁斯·施奈尔** Bruce Schneier | `bruce-schneier` | 《应用密码学》作者 |
| 运营 SRE | **Charity Majors** | `charity-majors` | Honeycomb 联合创始人 |
| 变更影响 | **迈克尔·费瑟斯** Michael Feathers | `michael-feathers` | 《修改代码的艺术》作者 |
| 技术总监 | **维尔纳·沃格尔** Werner Vogels | `werner-vogels` | Amazon CTO（**三道闸门 + 终审否决权**） |

完整名册见 [experts/registry.md](experts/registry.md)。

## 会议流程

**否决权留在最后，红线发现要前移。** 主持人会根据议题**自动编排**参会专家与发言顺序（不必全员出场）。

```
想法 → [诉求深挖] → [智能编排] → 按需 invoke 专家 → 三道闸门 → 按类型交付
```

完整协议见 [workflow/meeting-protocol.md](workflow/meeting-protocol.md) · **智能编排规则** [workflow/meeting-router.md](workflow/meeting-router.md) · 红线模板 [workflow/red-lines-template.md](workflow/red-lines-template.md) · 设计方案骨架 [templates/dev-design.md](templates/dev-design.md)。

## 使用方式

### 安装到各工具

安装**会议室 + 九位专家**共 10 个 Skill 到 Cursor / ZCode / Codex / Grok / Kimi：

```bash
./install.sh           # 安装 / 更新（覆盖旧版本）
./install.sh --list    # 查看安装状态
./install.sh --remove  # 卸载
```

修改流程或专家模板后，重跑 `./install.sh` 即可五端同步。

### 可视化页面

```bash
cd web && python3 -m http.server 8080
# 访问 http://localhost:8080
```

### 一键开会（推荐）

```
@start-meeting 我要给 SaaS 产品加一个多租户的消息通知中心
```

主持人会 **先深度解读你的想法**（表面诉求 vs 真实问题、隐含领域），再输出编排方案（参会专家 + 发言顺序 + 跳过理由），然后 invoke 各专家 Skill、走闸门，按议题类型交付相应文档。一句话想法也能开——缺失信息会标为「工作假设」，不追问阻塞。选人看真实问题，不看你有没有写出「安全」「架构」等词。

编排示例：

| 议题类型 | 典型参会 | 常跳过 |
|----------|----------|--------|
| 新功能 | 卡根、诺曼、福勒、林纳斯、施奈尔、沃格尔 | 梅杰斯（不上生产时） |
| 改动/重构 | 诺曼、福勒、林纳斯、**费瑟斯**、沃格尔 | 卡根、科哈维 |
| 战略决策 | 卡根、沃格尔 | 大部分技术专家 |
| 极小事项 | 林纳斯、沃格尔 | 几乎全员 |

### 单独咨询某位专家

任意项目均可直接 `@` 专家，不必开完整会议：

```
@marty-cagan 我们要不要做 AI 客服？战略上值不值得投入？
@don-norman 我需要一个用户登录功能，支持邮箱+密码和找回密码
@ron-kohavi 怎么证明登录改版有效？需要 A/B 吗？
@martin-fowler 给单体应用加消息推送模块，怎么设计？
@linus-torvalds 多租户权限系统大概多少人天？
@bruce-schneier 支付功能帮忙做安全审查
@charity-majors 这套服务 SLI/SLO 怎么定？
@michael-feathers 订单 ID 从自增改成雪花算法，会影响哪里？
@werner-vogels 这个方案能不能上：...
```

### 手动会议（可选）

打开 `prompts/start-meeting.md` 填好议题与红线，粘贴到对话并说明按流程执行。

## 目录结构

```
专家会议室/
├── README.md
├── install.sh                # 五端同步安装脚本
├── experts/registry.md       # 专家名册
├── .cursor/skills/           # Skill 唯一源（会议室 + 九位专家）
│   ├── start-meeting/
│   ├── marty-cagan/
│   ├── don-norman/
│   ├── ron-kohavi/
│   ├── martin-fowler/
│   ├── linus-torvalds/
│   ├── bruce-schneier/
│   ├── charity-majors/
│   ├── michael-feathers/
│   └── werner-vogels/
├── web/                      # 可视化会议页面
├── roles/                    # 角色定义（与 Skill 同步）
├── workflow/                 # 会议流程与规则
├── templates/                # 交付物模板（开发设计方案骨架）
├── prompts/                  # 会议启动提示
└── examples/                 # 示例议题
```
