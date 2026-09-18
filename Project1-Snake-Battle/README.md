# 🐍 Project 1: Snake Battle — The Agentic Coding Evolution

Welcome to **Snake Battle**, an educational and experimental game project developed as part of the **Agent Factory / AI Prompting in 2026** curriculum.

This repository documents the evolutionary journey of building, refining, and scaling a browser-based arcade game using **Agentic Coding Workflows** with AI agents (Claude & Claude Code).

---

## 🎯 What is this Experiment?

Rather than writing traditional upfront 50-page specifications or developing in isolation, this project demonstrates an **Empirical Agentic Feedback Loop**:

```
Play / Test  ──▶  Observe Friction  ──▶  Formulate Prompt  ──▶  AI Modifies Code  ──▶  Verify & Polish
```

Through 3 distinct versions, we explored different architectures, combat mechanics, AI opponent behaviors, procedural arena realms, and self-critique workflows.

---

## 📂 Version Comparison & Overview

| Dimension | 🌿 Version 1 (`version1/`) | ⚡ Version 2 (`version2/`) | 👑 Version 3 (`version3/`) |
| :--- | :--- | :--- | :--- |
| **Concept & Theme** | Deep Tactical Battle & Multi-Realm System | Fruit Frenzy & Arcade Score-Chaser | Iterative Agentic Battle Arena (Curriculum Standard) |
| **Opponents / AI** | 5 Autonomous AI Personalities (`Crawler`, `Harvester`, `Viper`, `Shadow Hunter`, `Goliath Titan`) | Single Player with Hazards & Multi-mode Arenas | 3 Bot Snakes (`Red Viper`, `Blaze Snake`, `Shadow Drake`) with timed respawn |
| **Combat Dynamics** | Flank cut-offs, Head-on size clashes, Shield deflections, Essence drops | Hazard avoidance, Combo multipliers, Frenzy Orb floods | Real-time death-to-fruit transformation & kill counter |
| **Environments / Realms** | 4 Realms: Forest, Desert, Ocean (Drift currents), Space (Nebula anomalies) | 3 Arenas: Classic, Cosmic Wrap (Pass-through), Crystal Maze | Single multi-snake arena (600x600) with glowing grid styling |
| **Items & Power-ups** | 5 Fruit tiers + Shield, Speed, Freeze, Magnet | 7 Fruit varieties + Magnet, Speed, Shield, Tail Trim, 2x Multiplier | Continuous fruit generation + Snake corpse fruit showers |
| **UI & Audio** | Live Leaderboard, Settings modal, Pause overlay, Combat recap | Web Audio API SFX, Visual Combo timer, D-Pad touch controls | Directional snake eyes, Live Leaderboard, Score & Kill counter |
| **Implementation Style** | 7-step enterprise evolution & comprehensive setting synchronization | High-octane arcade mechanics with audio synthesis | Lean 4-step build $\rightarrow$ play $\rightarrow$ wish $\rightarrow$ critique $\rightarrow$ ship loop |

---

## 🚀 Quick Start / How to Play

Each version is completely self-contained with **zero external dependencies**. You can run any version simply by opening its `index.html` file in any modern web browser:

1. **Version 1 (Tactical Battle Realms):**
   - 🌐 **Live Demo:** [https://ai-prompting-in-2026-projects.vercel.app/](https://ai-prompting-in-2026-projects.vercel.app/)
   - File: [`version1/index.html`](version1/index.html)
   - Docs: [`version1/README.md`](version1/README.md)
2. **Version 2 (Snake Fruit Frenzy):**
   - 🌐 **Live Demo:** [https://ai-prompting-in-2026-projects-z5z2.vercel.app/](https://ai-prompting-in-2026-projects-z5z2.vercel.app/)
   - File: [`version2/index.html`](version2/index.html)
   - Docs: [`version2/README.md`](version2/README.md)
3. **Version 3 (Agentic Step-by-Step Curriculum):**
   - 🌐 **Live Demo:** [https://ai-prompting-in-2026-projects-cgzu.vercel.app/](https://ai-prompting-in-2026-projects-cgzu.vercel.app/)
   - File: [`version3/index.html`](version3/index.html)
   - Docs: [`version3/README.md`](version3/README.md)

### Universal Controls
- **Movement:** Arrow Keys (`↑`, `↓`, `←`, `→`) or `W`, `A`, `S`, `D`
- **Pause:** `Spacebar` or on-screen Pause button
- **Touch / Mobile (v2):** Swipe gestures or on-screen D-Pad

---

## 🧠 Key Learnings in Agentic Prompting

1. **Start with a Working Slice:** Start with a minimal end-to-end prototype before adding complex features.
2. **Requirements Emerge from Real Gameplay:** Hands-on playtesting uncovers UX issues (e.g., lack of pause feedback, speed friction) that theoretical planning overlooks.
3. **AI Pair Refactoring:** AI agents excel at hoisting state, adding modals, and integrating real-time leaderboards into existing canvas loops.
4. **AI Self-Critique:** Asking the agent to score its own work on clarity, fun, and polish immediately pinpoints the highest-impact improvements.
5. **Focused Hardening Passes:** Dedicated polish steps (fixing keyboard scrolling, sandboxed `localStorage` protection) make projects production-ready without unnecessary scope creep.

---

## 📁 Repository Structure

```
Project1-Snake-Battle/
├── README.md              # Root documentation & cross-version guide
├── version1/              # Version 1: Multi-Realm Tactical Combat
│   ├── index.html
│   └── README.md
├── version2/              # Version 2: Fruit Frenzy & Arcade Power-ups
│   ├── index.html
│   └── README.md
└── version3/              # Version 3: Iterative Agentic Battle Arena
    ├── index.html
    └── README.md
```
