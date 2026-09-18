# 专家会议室

围绕一个议题，召集五位世界级专家依次发言、交叉讨论，最终由技术总监审阅并输出结论。

## 专家席位

| 席位 | 专家 | Skill | 领域标杆 |
|------|------|-------|----------|
| 产品设计 | **唐·诺曼** Don Norman | `don-norman` | 《设计心理学》作者 |
| 架构设计 | **马丁·福勒** Martin Fowler | `martin-fowler` | 《企业应用架构模式》作者 |
| 开发工程 | **林纳斯·托瓦兹** Linus Torvalds | `linus-torvalds` | Linux 与 Git 创造者 |
| 网络安全 | **布鲁斯·施奈尔** Bruce Schneier | `bruce-schneier` | 《应用密码学》作者 |
| 技术总监 | **维尔纳·沃格尔** Werner Vogels | `werner-vogels` | Amazon CTO（**一票否决权**） |

完整名册见 [experts/registry.md](experts/registry.md)。

## 会议流程

```
议题输入 → 唐·诺曼 → 马丁·福勒 → 林纳斯 → 施奈尔 → 交叉讨论 → 沃格尔审阅 → 结论 / 否决退回
```

详见 [workflow/meeting-protocol.md](workflow/meeting-protocol.md)。

## 使用方式

### 可视化页面

```bash
cd web && python3 -m http.server 8080
# 访问 http://localhost:8080
```

### 调用单个专家

在 Cursor 中 invoke 对应 skill：

```
@don-norman 请就以下议题发表产品意见：...
@martin-fowler 请设计架构方案：...
@linus-torvalds 请评估开发工作量：...
@bruce-schneier 请做安全审查：...
@werner-vogels 请综合审阅并做出决策：...
```

### 完整会议

1. 打开 `prompts/start-meeting.md`，填入议题
2. 按顺序 invoke 各专家 Skill
3. 若沃格尔否决，按指定专家修改后重新审阅

## 目录结构

```
专家会议室/
├── README.md
├── experts/registry.md       # 专家名册
├── .cursor/skills/           # 各专家独立 Skill
│   ├── don-norman/
│   ├── martin-fowler/
│   ├── linus-torvalds/
│   ├── bruce-schneier/
│   └── werner-vogels/
├── web/                      # 可视化会议页面
├── roles/                    # 角色定义（与 Skill 同步）
├── workflow/                 # 会议流程与规则
├── prompts/                  # 会议启动提示
└── examples/                 # 示例议题
```
