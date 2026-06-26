# game-ui-review

![game-ui-review intro](assets/game-ui-review-intro.png)

`game-ui-review` is a Codex Skill for professional AI review of complete game UI screenshots. It helps game UI designers, Design Leaders, and UX owners quickly evaluate visual hierarchy, readability, consistency, target-market fit, localization risk, and Unity/runtime implementation risk.

默认输出中文，适合用于游戏 UI 团队的截图评审、上线前检查、欧美/日韩/全球市场适配判断，以及设计 Leader 视角的修改建议。

## What It Reviews

- 层级与可读性
- 主行动清晰度
- 信息密度
- 视觉一致性
- 目标市场适配
- 多语言与文本溢出风险
- Unity / 引擎落地风险
- Design Leader 视角的优先级总结

## Install

Copy the skill folder into your Codex skills directory:

```bash
mkdir -p ~/.codex/skills
cp -R game-ui-review ~/.codex/skills/game-ui-review
```

Restart Codex after installation.

## Usage

Invoke the skill with:

```text
$game-ui-review 帮我 Review 这张游戏 UI
```

Recommended prompt with context:

```text
$game-ui-review 欧美 SLG 活动页，上线前检查。重点看层级、可读性、多语言和 Unity 落地风险。
```

If the user only uploads a screenshot and says "帮我 Review 一下", the skill will first ask for minimal context: game type, target market, screen type, production stage, and review focus.

## Repository Structure

```text
.
├── README.md
├── assets/
│   └── game-ui-review-intro.png
└── game-ui-review/
    ├── SKILL.md
    ├── agents/
    │   └── openai.yaml
    └── references/
        └── ui-review-rubric.md
```

## Notes

This skill does not require external APIs. It relies on Codex's current image understanding and reasoning ability.
