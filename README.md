# Why Do People Commit Crimes? — An Investigative Editorial Feature
### Senior English Seminar Capstone Project

> An award-winning editorial scrollytelling experience crafted in the visual tradition of *The Pudding*, *The New York Times* investigative essays, and documentary title design.

---

## 🖋 Design System (10-Line Specification)

1. **Display Typography**: `Instrument Serif` and `Fraunces` high-contrast serif headlines clamped from `3.5rem` up to `12vw` with tight negative letter-spacing (`-0.03em`) and `0.88–1.1` line height.
2. **Body Typography**: `Geist` and `Inter Tight` grotesk set at `18px–20px` with a relaxed `1.65` line height and a strict `65ch` maximum line length for effortless long-form reading.
3. **Canvas Palette**: Warm newsprint paper `#F4F0E8` with a subtle tactile fractal paper grain; muted secondary paper `#EAE5DB`.
4. **Ink Palette**: Primary ink black `#111111`, soft secondary ink `#3A3A38`, and muted ink `#7A7873`. Zero neon or generic gray.
5. **Singular Accent**: Deep journalistic red `#B3261E`, deployed with extreme restraint—strictly limited to one rule line, one key statistic, or a single emphasized word per chapter.
6. **Nocturne Mode**: Deep full-bleed black `#0D0E10` reserved exclusively for dramatic moments (the Cold Open prologue and Chapter II: Enron).
7. **Spatial Rhythm**: Asymmetric editorial layout with generous whitespace (`py-24 sm:py-36`), wide margins, and off-center content columns (`col-span-7` narrative vs. `col-span-5` margin commentary).
8. **Borders & Dividers**: Hairline 1px rules only (`border-t border-[#111]/15`); zero drop-shadows, zero glassmorphism, zero card grids.
9. **Editorial Motion**: Mask-revealed title typography line-by-line, smooth momentum scrolling powered by Lenis, and single-trigger cubic ease-out reveals.
10. **Data Visualization**: Big raw typographic statistics that count up without bouncing, paired with an honest, minimal SVG line chart drawn dynamically as the reader scrolls.

---

## 📖 Chapter Breakdown (One Continuous Narrative)

1. **Prologue (Cold Open)**: Full-screen black nocturne; epigraph fades in, followed by a dramatic line-by-line masked title reveal: *"Why Do People Commit Crimes?"*.
2. **01 — The Question**: Wide-margin premise dismantling the myth of the "innate villain" through courtroom field reporting and an editorial thesis pull quote.
3. **02 — Typology of Deviance**: An interactive horizontal tabbed editorial gallery analyzing *Property & Theft*, *Violent Crime*, *Cybercrime*, *Corporate/White-Collar*, and *Organized Crime* with real historical case anchors.
4. **03 — The Causes**: A vertical timeline featuring large typographic dates (`1938`, `1939`, `1969`, `1981`, `Present`) tracing Merton's Strain Theory, Sutherland's Differential Association, Hirschi's Social Bonds, Deinstitutionalization, and Chemical Dependence.
5. **04 — Three Case Chapters**:
   - *Case I: The Watergate Break-in (1972)* — Asymmetric investigative spread with evidentiary facts.
   - *Case II: The Enron Corporation (2001)* — Full-bleed dark dramatic layout exploring corporate debt concealment.
   - *Case III: D.B. Cooper (1971)* — Stark aviation telemetry layout exploring the Cooper Vane legacy.
6. **05 — By The Numbers**: Big typographic stats (-49% violent crime decline, $12.5B cyber losses, -43% recidivism via education, $45.7k annual inmate cost) paired with an SVG line chart tracking the 34-year crime rate.
7. **06 — What Works**: Solutions structured as contrasting pairs: *The Retributive Dogma* vs. *The Documented Alternative* across pretrial bail, prison education, street intervention, and restorative circles.
8. **07 — The Investigative Inquiry (Quiz)**: Minimalist, large-type, one-question-per-screen inquiry testing reader understanding against empirical facts.
9. **08 — The Analytical Verdict (My Opinion)**: Calm, wide-margin editorial essay featuring a classic drop cap, byline block, and a centerpiece pull quote.
10. **09 — Works Cited**: Clean MLA 9th Edition bibliography with hanging indents and one-click copy buttons.

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Launch local development server
npm run dev
```

Visit `http://localhost:3000` to view the scrollytelling experience.

```bash
# 3. Build optimized production bundle
npm run build
```

---

## ✏️ How to Edit Content

All reporting copy is isolated in pure JavaScript files inside `src/data/`:
- `src/data/opinion.js` — Student name, teacher, course, essay paragraphs, and pull quote.
- `src/data/typesOfCrime.js` — The five crime typologies and historical case anchors.
- `src/data/causes.js` — Timeline dates, theorists, and causation summaries.
- `src/data/caseFiles.js` — The three narrative case studies (Watergate, Enron, DB Cooper).
- `src/data/statistics.js` — Key metrics and SVG line chart coordinates.
- `src/data/solutions.js` — The four contrasting pairs and field proof.
- `src/data/quizQuestions.js` — Inquiry questions, options, and journalistic annotations.
- `src/data/sources.js` — MLA citations and research notes.
