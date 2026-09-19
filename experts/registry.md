# 专家名册

每位专家对应一个独立 Skill。与 `start-meeting`（会议室主持人）一并安装。

**按需参会**：完整会议不必九人全到。主持人先深度解读想法，再按真实问题编排（见 [workflow/meeting-router.md](../workflow/meeting-router.md)）。

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
| 技术总监 | **维尔纳·沃格尔** Werner Vogels | `werner-vogels` | Amazon CTO（三道闸门 + 终审否决权） |

## 调用方式

```
@start-meeting 我要给 SaaS 产品加一个用户登录系统
@marty-cagan 我们要不要做 AI 客服？
@don-norman 用户登录功能 MVP 怎么定？
@ron-kohavi 怎么证明登录改版有效？需要 A/B 吗？
@martin-fowler 消息推送模块架构怎么设计？
@linus-torvalds 这套权限系统多少人天？
@bruce-schneier 支付功能安全审查
@charity-majors 这套服务 SLI/SLO 怎么定？on-call 怎么排？
@michael-feathers 订单 ID 改成雪花算法，会影响哪里？
@werner-vogels 立项闸门：...
```

安装：`./install.sh` · 详见 [README.md](../README.md)
