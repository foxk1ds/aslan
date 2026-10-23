# Graph Report - aslan  (2026-10-22)

## Corpus Check
- 51 files · ~20,541 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 1, .toml 1, .css 1)

## Summary
- 167 nodes · 330 edges · 15 communities (9 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0c07d01a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- framer-motion
- App.jsx
- package.json
- react
- Statistics.jsx
- dependencies
- Solutions.jsx
- Why Do People Commit Crimes? — An Investigative Editorial Feature
- SectionNumbers.jsx
- SectionCases.jsx
- SectionCauses.jsx
- SectionQuiz.jsx
- vercel.json

## God Nodes (most connected - your core abstractions)
1. `react` - 37 edges
2. `framer-motion` - 23 edges
3. `CrimeTapeDivider()` - 21 edges
4. `lucide-react` - 17 edges
5. `App()` - 15 edges
6. `react-router-dom` - 6 edges
7. `Why Do People Commit Crimes? — An Investigative Editorial Feature` - 6 edges
8. `projectMeta` - 5 edges
9. `scripts` - 4 edges
10. `SectionNumbers()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `SectionNumbers()`  [EXTRACTED]
  src/App.jsx → src/components/SectionNumbers.jsx
- `Causes()` --calls--> `CrimeTapeDivider()`  [EXTRACTED]
  src/pages/Causes.jsx → src/components/CrimeTapeDivider.jsx
- `Home()` --calls--> `CrimeTapeDivider()`  [EXTRACTED]
  src/pages/Home.jsx → src/components/CrimeTapeDivider.jsx
- `MyOpinion()` --calls--> `CrimeTapeDivider()`  [EXTRACTED]
  src/pages/MyOpinion.jsx → src/components/CrimeTapeDivider.jsx
- `NotFound()` --calls--> `CrimeTapeDivider()`  [EXTRACTED]
  src/pages/NotFound.jsx → src/components/CrimeTapeDivider.jsx

## Import Cycles
- None detected.

## Communities (15 total, 6 thin omitted)

### Community 0 - "framer-motion"
Cohesion: 0.13
Nodes (18): framer-motion, lucide-react, react-router-dom, CrimeTapeDivider(), DossierModal(), FlipCard(), iconMap, projectMeta (+10 more)

### Community 1 - "App.jsx"
Cohesion: 0.12
Nodes (17): react-dom, App(), EditorialFooter(), chapters, ReadingRail(), SectionCases(), SectionCauses(), SectionColdOpen() (+9 more)

### Community 2 - "package.json"
Cohesion: 0.07
Nodes (26): devDependencies, autoprefixer, postcss, tailwindcss, @types/react, @types/react-dom, vite, @vitejs/plugin-react (+18 more)

### Community 3 - "react"
Cohesion: 0.23
Nodes (6): react, Navbar(), ScrollProgress(), ThemeContext, useTheme(), useScrollProgress()

### Community 4 - "Statistics.jsx"
Cohesion: 0.24
Nodes (4): recharts, AnimatedCounter(), CustomTooltip(), Statistics()

### Community 5 - "dependencies"
Cohesion: 0.20
Nodes (10): dependencies, clsx, framer-motion, lenis, lucide-react, react, react-dom, react-router-dom (+2 more)

### Community 6 - "Solutions.jsx"
Cohesion: 0.31
Nodes (4): iconMap, SolutionsAccordion(), solutionPairs, Solutions()

### Community 7 - "Why Do People Commit Crimes? — An Investigative Editorial Feature"
Cohesion: 0.29
Nodes (6): 📖 Chapter Breakdown (One Continuous Narrative), 🖋 Design System (10-Line Specification), ✏️ How to Edit Content, 🚀 How to Run Locally, Senior English Seminar Capstone Project, Why Do People Commit Crimes? — An Investigative Editorial Feature

### Community 8 - "SectionNumbers.jsx"
Cohesion: 0.53
Nodes (4): SectionNumbers(), StatCounter(), bigStats, lineTrendPoints

## Knowledge Gaps
- **7 isolated node(s):** `clsx`, `tailwind-merge`, `@types/react`, `@types/react-dom`, `autoprefixer` (+2 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 60 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `framer-motion`, `App.jsx`, `package.json`, `Statistics.jsx`, `Solutions.jsx`, `SectionNumbers.jsx`, `SectionCases.jsx`, `SectionCauses.jsx`, `SectionQuiz.jsx`?**
  _High betweenness centrality (0.396) - this node is a cross-community bridge._
- **What connects `clsx`, `tailwind-merge`, `@types/react` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `framer-motion` be split into smaller, more focused modules?**
  _Cohesion score 0.12802275960170698 - nodes in this community are weakly interconnected._
- **Why does `framer-motion` connect `framer-motion` to `App.jsx`, `package.json`, `react`, `Statistics.jsx`, `Solutions.jsx`, `SectionNumbers.jsx`, `SectionCases.jsx`, `SectionCauses.jsx`, `SectionQuiz.jsx`?**
  _High betweenness centrality (0.128) - this node is a cross-community bridge._
- **Should `App.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12183908045977011 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._