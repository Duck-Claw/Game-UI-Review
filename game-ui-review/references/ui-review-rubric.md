# Game UI Review Rubric

Use these standards to keep scoring stable. Scores are based on the visible screenshot and provided context.

## Score Bands

Use these bands unless a dimension has special market-dependent logic:

- 90-100: Strong, production-ready, only minor polish needed.
- 75-89: Generally solid, with localized risks or clear optimization opportunities.
- 60-74: Usable but unstable; several issues may affect comprehension, conversion, or implementation.
- Below 60: Serious quality or usability risk; players may struggle to understand or act.

## Dimension Standards

### 层级清晰度

- 90-100: Main action, key information, and secondary entries are immediately clear.
- 75-89: Overall hierarchy is clear, but local entries or decoration compete for attention.
- 60-74: Primary and secondary relationships are unstable; players need to search.
- Below 60: Visual focus is chaotic and the main action is unclear.

Look at scale, brightness, contrast, spacing, center/peripheral weight, motion implication, color emphasis, and whether decorative elements steal focus.

### 一致性

- 90-100: Buttons, icons, materials, strokes, shadows, glow, and decorative language are highly unified.
- 75-89: Mostly unified with a few local style shifts.
- 60-74: Multiple modules look like they come from different rules.
- Below 60: No clear shared visual language.

Check whether components can be governed by a small set of reusable rules.

### 可读性

- 90-100: Main text, numbers, buttons, and labels are clearly readable in the screenshot.
- 75-89: Main content is readable, but small text or complex backgrounds create risk.
- 60-74: Multiple text areas need larger size, stronger contrast, or cleaner backgrounds.
- Below 60: Reading cost visibly harms use.

Pay special attention to thin fonts, glowing text, busy art under text, compressed numbers, and low-resolution runtime rendering.

### 信息密度

- 90-100: Rich information is organized into clear scan paths.
- 75-89: Slightly dense, but players can still understand priorities.
- 60-74: Entrances, rewards, decoration, and text stack together; scanning pressure is high.
- Below 60: The UI feels crowded and players cannot make quick decisions.

Judge density by grouping, whitespace, repeated modules, number of competing CTAs, and whether the eye can rest.

### 主行动清晰度

- 90-100: The player instantly knows the next useful action.
- 75-89: The main action exists but could be stronger.
- 60-74: Several elements compete with the main action.
- Below 60: Key operation is ambiguous or visually buried.

For commerce, event, onboarding, and flow-blocking screens, weight this dimension heavily.

### 目标市场适配度

Use market-specific judgment rather than a universal taste standard.

欧美:

- Prefer rational hierarchy, readable typography, controlled material weight, restrained glow, clear function grouping, and less promotional pressure.
- Penalize excessive metal, overloaded frames, saturated glow, Chinese-mobile font feel, complex realistic icons, large aggressive CTAs, and weak information order.

日本/韩国:

- Prefer emotional tone, character atmosphere, polish, refined decoration, rhythm in text blocks, delicate material and color handling.
- Penalize crude material, flat emotional delivery, careless spacing, and decoration that is dense but not refined.

东南亚/全球:

- Prefer direct information, clear contrast, low-end device readability, robust multilingual space, and culturally neutral symbols.
- Penalize tiny text, ambiguous icons, fragile localization, over-heavy monetization signals, and effects that fail on low-end devices.

### 风格成熟度

Judge whether the UI feels intentionally directed rather than assembled from effects.

High scores require:

- Controlled material system
- Clear ornament logic
- Deliberate color rhythm
- Detail polish without clutter
- Strong relationship between game genre and interface tone

Lower scores often come from mismatched icon rendering, inconsistent bevels, uncontrolled glow, generic fantasy/sci-fi decoration, or excessive layer effects.

### 落地风险

Higher score means lower risk.

- 90-100: Easy to reproduce in engine; assets are reusable; text and safe areas are robust.
- 75-89: Some effects or text areas need validation, but risk is contained.
- 60-74: Multiple implementation risks around blur, glow, slicing, adaptation, or localization.
- Below 60: Likely to diverge in Unity/runtime or require costly rework.

Check:

- Additive glow, alpha blending, blur, gradients, and masks
- Font rendering at actual device scale
- Nine-slice feasibility and atlas cost
- Safe area, notch, ultrawide, tablet, and low-resolution layouts
- Multi-language expansion for English, German, Russian, Thai, Japanese, Korean, and Chinese
- Whether repeated resources can be parameterized

## Risk Severity

High risk:

- Blocks comprehension, primary action, monetization flow, launch quality, localization, or runtime implementation.
- Should be fixed before final delivery.

Medium risk:

- Reduces polish, scan efficiency, market fit, or maintainability.
- Should be addressed in the next revision if schedule allows.

Low risk:

- Mostly visual preference, minor polish, or style tuning.
- Mention only when it helps the designer prioritize.

## Review Discipline

- Always identify location precisely: top bar, left navigation, reward strip, center hero, CTA cluster, bottom safe area, etc.
- Prefer concrete changes: enlarge by relative amount, reduce competing glow, group entries, add neutral backing plate, reserve 30-50% more text width, simplify icon silhouette, unify corner radius/stroke/shadow rules.
- Mention uncertainty when text is unreadable, screenshot is compressed, or source states are missing.
- Suggest checking real-device capture when judging small text, glow, blend modes, safe area, and multi-language.
