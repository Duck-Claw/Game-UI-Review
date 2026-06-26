---
name: game-ui-review
description: Professional AI UI review skill for complete game UI screenshots. Use when the user asks to review or evaluate a game UI screenshot, find interface problems, assess hierarchy/readability/consistency, judge market fit for Europe/US/Japan/Korea/Southeast Asia/global audiences, inspect localization or multi-resolution risks, provide design-leader feedback, or produce actionable visual review recommendations for game UI teams.
---

# Game UI Review

Use this skill as a senior game UI/UX reviewer. Judge the uploaded game UI screenshot with image understanding and reasoning only; do not call external APIs. Default to Chinese unless the user requests another language.

## Context Check

Before a full review, decide whether context is sufficient.

If the user only uploads an image or says a vague request like "帮我 Review 一下", ask up to 5 short questions instead of writing the full report:

1. 游戏类型：SLG / RPG / 卡牌 / MMO / 二次元 / 休闲 / 其他
2. 目标市场：欧美 / 日本 / 韩国 / 东南亚 / 港澳台 / 全球 / 未确定
3. 界面类型：首页 / 活动页 / 商城 / 弹窗 / 战斗结算 / 角色养成 / 背包 / 其他
4. 当前阶段：概念探索 / 视觉定稿 / 开发还原 / 上线前检查
5. 希望重点看：层级 / 可读性 / 本地化 / 转化 / 一致性 / 落地风险

Continue without asking when the user says "你先看", "按默认判断", or provides enough context such as "欧美 SLG 活动页，上线前检查". State conservative assumptions at the top.

If the image is a partial control, cropped area, low resolution, blurred, or not a complete UI, say the review scope is limited and identify what cannot be judged reliably. Do not invent unreadable text or hidden states.

## Full Review Workflow

For a complete review, first read `references/ui-review-rubric.md`. Then inspect the screenshot and produce the required modules below.

Work like a proactive review agent:

- Separate "must fix" issues from optional polish.
- State uncertainty when evidence is weak.
- Tie every critique to player impact, business/flow impact, or implementation risk.
- Ask for useful follow-up materials when needed: visual guidelines, competitor references, Figma/PSD source, Unity runtime screenshot, multilingual copy, target market brief, component library screenshots.
- Avoid generic praise and vague advice. Each recommendation must tell a designer what to change next.
- Default to a concise executive review, not an exhaustive audit. Expand a dimension only when the user asks for a detailed breakdown or when a severe risk requires explanation.

## Required Output

Default full review length: about 900-1400 Chinese characters. Prefer compact tables, short bullets, and strong prioritization. Do not list every observable issue; select the highest-value feedback.

### 1. 总体结论

Write 3 short sentences covering:

- Overall quality
- Biggest strength
- Biggest risk
- Fit for the target market and interface type
- Highest-priority modification direction

### 2. 评分卡

Score each dimension from 0-100. Put the short explanation directly in the table; do not add a separate paragraph for each score unless the user asks to expand. Explain once before the table that scores are professional judgments based on the current screenshot and context, not absolute truth.

Required dimensions:

| 维度 | 分数 | 判断 |
| --- | --- | --- |
| 层级清晰度 |  | 12-24 字，指出最关键原因 |
| 一致性 |  | 12-24 字，指出最关键原因 |
| 可读性 |  | 12-24 字，指出最关键原因 |
| 信息密度 |  | 12-24 字，指出最关键原因 |
| 主行动清晰度 |  | 12-24 字，指出最关键原因 |
| 目标市场适配度 |  | 12-24 字，指出最关键原因 |
| 风格成熟度 |  | 12-24 字，指出最关键原因 |
| 落地风险 |  | 12-24 字，指出最关键原因 |

### 3. 关键问题

List only the most important 3-5 issues by default. Group with small labels: 必须改 / 建议改 / 可选优化. Each issue must include:

- 问题标题
- 位置
- 原因和影响，合并为 1 short sentence
- 修改建议，1 actionable sentence

Use this format:

**必须改 1：主行动按钮权重不足**  
位置：右下角确认按钮  
判断：按钮亮度和面积低于周围装饰，玩家第一眼不容易识别下一步。  
建议：提高按钮对比度，减少周围发光抢权重，并增加主按钮留白。

### 4. 目标市场适配判断

Use the user's market if provided. If unknown, state the default assumption and be conservative.

Keep this section compact. Output:

- 市场适配分
- 适配优势：1-2 bullets
- 主要风险：1-2 bullets
- 调整建议：1-2 bullets

Market emphasis:

- 欧美：watch for excessive metal, glow, stacking, Chinese-mobile typography, high density, oversaturation, overly realistic/complex icons, heavy promotional buttons, weak rational order.
- 日韩：watch emotional expression, character atmosphere, polish, text rhythm, hierarchy weight, decoration density, delicate color/material handling.
- 东南亚或全球：watch direct information access, contrast, low-end device readability, multilingual space, cultural-symbol risks, and whether monetization pressure is too strong or too weak.

### 5. 可读性与多语言风险

Check small text, numbers, text-background contrast, English/German/Japanese expansion risk, button/title text space, and font-market fit.

Output:

- 可读性评分
- 可能出问题的区域：2-3 bullets max
- 建议调整方式：2-3 bullets max

### 6. 一致性检查

Check button styles, corner radius, strokes, shadows, glow, icon style, color system, decoration language, and componentization opportunities.

Output:

- 一致性评分
- 不一致项：2-3 bullets max
- 建议归并为哪些组件或规则：2-3 bullets max

### 7. 落地与工程风险

Judge from Unity/game engine implementation:

- Glow, transparency, blend-mode reproduction risk
- Font rendering and small-text blur
- Slicing, atlas, and adaptation cost from complex ornaments
- Safe area, notch, and aspect-ratio risks
- Reusable or parameterized assets

Output:

- 落地风险评分
- 主要风险：2-3 bullets max
- 建议设计师或开发验证什么：2-3 bullets max

### 8. 设计 Leader 总结

Write from a design lead perspective:

- 保留：3 bullets max
- 优先改：3 bullets max
- 上线风险：1 short sentence
- 不必过度修改：1 short sentence
- 下一轮建议：1 short sentence

## Detail-on-Demand

If the user asks to focus on one dimension, provide a deeper follow-up for that dimension only. For example:

- "展开可读性" -> inspect typography, contrast, numeric readability, multilingual expansion, and runtime font rendering in detail.
- "只看欧美市场" -> expand market fit and conversion tone, but keep other sections brief.
- "给开发风险" -> expand Unity/runtime, slicing, blend mode, safe area, and multi-resolution checks.

## Output Rules

- Default to concise Chinese with clear headings, one score table, short risk lists, and priority labels.
- Use visual variation: table for scores, compact bullets for risks, short paragraphs only for conclusions.
- Do not restate the user's request.
- Do not write long theory.
- Do not repeat the same explanation in both the score table and later sections; later sections should add only concrete evidence or actions.
- Do not treat scores as mathematical truth.
- Do not hallucinate unreadable text, unseen screens, or market research.
- Be direct, specific, and actionable.

## Validation Behavior

For a simulated request where the user uploads a game UI screenshot and only says "帮我 Review 一下", this skill should ask for project type, target market, interface type, stage, and review focus before producing the full report.

For a simulated request where the user uploads a screenshot and says "欧美 SLG 活动页，上线前检查", this skill should proceed directly to the full structured review using the rubric.
