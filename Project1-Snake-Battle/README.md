# Snake Battle — Agentic Coding Experiment

## 1. Project Overview

**Snake Battle** is a modern, client-side HTML5 canvas arcade game built using vanilla JavaScript, HTML, and CSS. The player commands a dynamic snake in competitive grid arenas called **Realms**, navigating obstacles, collecting power-ups and fruits, and engaging in tactical head-to-head combat with autonomous, AI-driven rival snakes.

```
       ┌────────────────────────────────────────────────────────┐
       │                 SNAKE BATTLE ARENA                     │
       │                                                        │
       │   [Rank #1] Emerald Goliath (Len: 12)  👑              │
       │   [Rank #2] You (Player)    (Len: 8)   ●━━━━━>         │
       │   [Rank #3] Shadow Hunter   (Len: 6)   ▲               │
       │                                        ┃               │
       │   🍇 [Starfruit +25]                   ┃ AI Rival      │
       │                    🛡️ [Shield Buff]   ▼               │
       └────────────────────────────────────────────────────────┘
```

### What We Were Trying to Learn
This project was **not** conceived as a commercial game designed to compete with commercial studios. Instead, it was an intentional **agentic coding learning experiment** created to answer a fundamental software engineering question in the age of AI:

> *How does software development change when an engineer partners with an autonomous AI coding agent in a continuous, empirical feedback loop?*

### The Core Learning Goal
The goal was to practice **iterative development with an AI coding agent**. Rather than attempting to write a rigid 50-page technical specification upfront, the project evolved through direct interaction: playing the game, noticing friction points, translating observations into targeted prompts, and letting the AI agent incrementally expand and refactor the architecture.

---

## 2. The Agentic Coding Workflow

Traditional software development often relies on waterfall planning or speculative design. In contrast, working with an AI coding agent thrives on an **empirical discovery loop**:

```
                  ┌──────────────────────┐
                  │        Idea          │
                  └──────────┬───────────┘
                             ▼
                  ┌──────────────────────┐
                  │        Build         │
                  └──────────┬───────────┘
                             ▼
                  ┌──────────────────────┐
                  │     Run / Play       │
                  └──────────┬───────────┘
                             ▼
                  ┌──────────────────────┐
                  │       Observe        │
                  └──────────┬───────────┘
                             ▼
                  ┌──────────────────────┐
                  │   Notice a Problem   │
                  └──────────┬───────────┘
                             ▼
                  ┌──────────────────────┐
                  │ Turn into Requirement│
                  └──────────┬───────────┘
                             ▼
                  ┌──────────────────────┐
                  │ Give Prompt to Agent │
                  └──────────┬───────────┘
                             ▼
                  ┌──────────────────────┐
                  │ AI Modifies Project  │
                  └──────────┬───────────┘
                             ▼
                  ┌──────────────────────┐
                  │      Test Again      │
                  └──────────┬───────────┘
                             ▼
                  ┌──────────────────────┐
                  │    Repeat / Refine   │
                  └──────────────────────┘
```

### Why This Workflow Matters
1. **Low Cost of Experimentation:** In traditional coding, refactoring an entire sub-system (such as moving from a single speed to a multi-tiered speed system) takes significant manual effort. With an AI coding agent, architectural adjustments can be executed and tested within minutes.
2. **Empirical Quality Over Theoretical Design:** You cannot easily predict whether an arcade game feels responsive, fast, or fair until you play it. Direct hands-on testing surfaces real UX issues immediately.
3. **Adaptive Architecture:** Code evolves organically around genuine user needs rather than speculative over-engineering.

---

## 3. Project Evolution

The development of Snake Battle progressed across seven major evolutionary milestones.

---

### Step 1 — Initial Snake Battle Game

#### 1. What the project had before this step
Nothing existed. The workspace was empty.

#### 2. What we noticed while actually using/testing the game
We needed a baseline playable canvas prototype to establish the core coordinate system, grid rendering, snake body array, food spawning, keyboard event listeners, and collision detection.

#### 3. The problem or new requirement that emerged
A working, standalone HTML5 game loop needed to be established with crisp 60fps rendering, clean boundary collisions, and basic scoring.

#### 4. The exact prompt given to Claude / Claude Code
```text
Create a classic Snake game in a single self-contained HTML file using HTML5 Canvas, CSS, and vanilla JavaScript. Include score tracking, food consumption, smooth grid movement, wall collisions, self-collision detection, and a game over state with restart capability.
```

#### 5. What the AI was asked to change
Generate the foundational `index.html` file containing the HTML canvas, CSS styling for centering the arena, standard grid configuration (`28x28` tiles at `20px` each), and the core JavaScript animation/tick loops (`requestAnimationFrame` and `setTimeout`).

#### 6. What should be tested after implementation
- Canvas renders properly in the browser.
- Arrow keys and WASD steer the snake.
- Eating food increments the score and grows the snake tail.
- Crashing into walls or self-body triggers the Game Over overlay.
- Clicking restart resets the board cleanly.

#### 7. What this teaches about agentic coding
Start with a **minimal working baseline**. Creating a functional, end-to-end prototype first provides an immediate anchor for all subsequent iterative improvements.

---

### Step 2 — Snake Customization (Color Picker)

#### 1. What the project had before this step
A functioning single-player snake with hardcoded green colors.

#### 2. What we noticed while actually using/testing the game
The single static green color felt generic and lacked visual identity, especially for a game with "Battle" in its title.

#### 3. The problem or new requirement that emerged
The player needed the ability to personalize their snake with custom visual palettes (Cyber Neon, Plasma Violet, Solar Flare, Emerald Viper, Crimson Fury) before launching into the arena.

#### 4. The exact prompt given to Claude / Claude Code
```text
Add a visual color customization feature to the start menu. Allow the player to pick from multiple distinct snake skin themes (such as Neon Green, Cyber Cyan, Solar Gold, Plasma Purple, Crimson Red). Update the snake's head, body segments, and glow effects to match the selected skin.
```

#### 5. What the AI was asked to change
- Add skin configuration objects with head colors, body RGB values for gradient rendering, and glow accents.
- Add an interactive color-picker element to the start menu overlay.
- Update the canvas rendering function to dynamically shade body segments based on the chosen skin.

#### 6. What should be tested after implementation
- Selecting different color swatches updates the active selection indicator.
- Launching the game renders the snake in the chosen color scheme with matching segment gradients and glow effects.

#### 7. What this teaches about agentic coding
Visual feedback and user customization can be added cleanly when configuration objects are separated from rendering logic.

---

### Step 3 — Reusable Settings & In-Game Configuration

#### 1. What the project had before this step
Color selection existed, but it was locked to the initial start menu. Once the game began, there was no way to adjust preferences without refreshing the page.

#### 2. What we noticed while actually using/testing the game
Players often want to change color, view keybindings, or alter game parameters mid-session without losing their high score or having to reload the browser.

#### 3. The problem or new requirement that emerged
We needed a dedicated, modal-based **Settings System** accessible from both the Main Menu and the active game HUD via a persistent Settings button.

#### 4. The exact prompt given to Claude / Claude Code
```text
Refactor the settings so that customization is reusable. Add a dedicated Settings modal with a Settings button accessible from both the start menu and the active game screen. When opened during gameplay, pause the game. Allow the player to change settings and seamlessly return to the game.
```

#### 5. What the AI was asked to change
- Implement a reusable modal overlay `#settingsOverlay` with close handlers.
- Add a top-right Settings button `⚙️ Settings` to the in-game HUD.
- Synchronize pickers so that selections made in the Main Menu reflect in the Settings modal and vice versa.
- Automatically pause the game tick loop when the Settings modal opens, and resume when closed.

#### 6. What should be tested after implementation
- Clicking `⚙️ Settings` during active gameplay pauses the snake.
- Modifying skin or realm options in Settings updates the active game immediately upon closing.
- Closing Settings resumes game ticks without unintended speed bursts or input drops.

#### 7. What this teaches about agentic coding
**Features often require structural elevation.** What begins as a simple menu widget (color picker) often needs to be refactored into a reusable, state-aware system (Settings Modal) once practical UX demands it.

---

### Step 4 — Movement Speed Calibration & Multiple Speed Levels

#### 1. What the project had before this step
The snake moved at a single fixed tick rate (~100ms), which felt too fast for newcomers and too slow for seasoned players.

#### 2. What we noticed while actually using/testing the game
Players have different reaction speeds and device refresh rates. Having only one speed made early learning frustrating and advanced play monotonous.

#### 3. The problem or new requirement that emerged
The game needed configurable **Speed Levels** (Casual/Slow, Normal/Standard, Turbo/Fast) that could be selected on the start screen or adjusted inside Settings.

#### 4. The exact prompt given to Claude / Claude Code
```text
Add multiple speed levels to the game (Casual, Normal, Turbo). Allow the player to select their preferred speed in both the start menu and settings. Ensure game tick timing dynamically adjusts to the selected speed level.
```

#### 5. What the AI was asked to change
- Define a `SPEED_LEVELS` configuration matrix (`Casual: 130ms`, `Normal: 95ms`, `Turbo: 65ms`).
- Create interactive speed selector buttons in both the Start Menu and Settings Modal.
- Update `getCurrentTickMs()` to calculate interval delays based on `selectedSpeed`.

#### 6. What should be tested after implementation
- Selecting "Casual" noticeably slows snake velocity, making navigation easier.
- Selecting "Turbo" creates high-intensity gameplay.
- Changing speed in the Settings modal takes effect as soon as the modal is closed.

#### 7. What this teaches about agentic coding
Exposing core mechanics (like tick speed) as user-configurable settings improves accessibility and replayability with minimal code overhead.

---

### Step 5 — Deepening Gameplay: Realms, Dynamic Obstacles, Fruits & Power-ups

#### 1. What the project had before this step
A basic single-player snake moving around an empty grid eating generic food items.

#### 2. What we noticed while actually using/testing the game
Collecting one type of food in an empty box became repetitive after 60 seconds. The game lacked strategic depth, variety, and a sense of progression.

#### 3. The problem or new requirement that emerged
We needed a multi-tier item and environment system:
1. Diverse fruit types with differing point values and growth rates.
2. Dynamic power-ups (Shield, Speed Boost, Slow Motion Freeze, Magnet).
3. Themed arena Realms (Verdant Forest, Dune Desert, Abyssal Ocean with drift currents, Cosmic Space with nebula anomalies).
4. Combo scoring and survival bonuses.

#### 4. The exact prompt given to Claude / Claude Code
```text
Enhance the gameplay depth of Snake Battle:
1. Add multiple fruit types (Apple, Orange, Grape, Starfruit, Dragon Fruit) with varying point values, growth multipliers, and spawn rarities.
2. Add collectible power-ups (Shield Aura, Speed Boost, Time Freeze, Fruit Magnet) with visual timers on the HUD.
3. Implement multiple Arena Realms (Forest, Desert, Ocean, Space) with distinct color schemes, procedural obstacle density, and environmental hazards (e.g., ocean drift currents).
4. Add a combo multiplier system for rapid fruit collection and periodic survival bonuses.
```

#### 5. What the AI was asked to change
- Add `FRUITS_CONFIG` and `POWERUP_TYPES` data definitions.
- Implement particle bursts and floating combat text for item collection.
- Implement `REALMS` configurations and dynamic obstacle generation with safe spawn buffers.
- Create HUD badges for active power-up timers, current realm, and combo meters.

#### 6. What should be tested after implementation
- Special fruits (Starfruit, Dragon Fruit) award higher points and trigger prominent particle effects.
- Collecting a Shield creates a visible cyan aura around the snake head that deflects one fatal collision.
- The Magnet power-up pulls nearby fruit toward the snake head.
- Changing realms loads new grid colors, obstacles, and environmental zones.

#### 7. What this teaches about agentic coding
**Data-driven design scales cleanly with AI agents.** By defining items and realms as structured configuration arrays, the AI can build rich gameplay variations on top of a single rendering pipeline.

---

### Step 6 — Making the "Battle" Meaningful: Intelligent AI Enemy Snakes

#### 1. What the project had before this step
A feature-rich single-player arcade game, but the "Battle" aspect was missing—there were no opponents to fight.

#### 2. What we noticed while actually using/testing the game
A game called *Snake Battle* needed actual rivals on the board competing for food, setting traps, and creating risk-versus-reward combat moments.

#### 3. The problem or new requirement that emerged
Autonomous AI-controlled enemy snakes needed to be introduced. These snakes could not be mere background animations—they had to actively seek food, grow, navigate around obstacles, outflank the player, and participate in slither-style combat.

#### 4. The exact prompt given to Claude / Claude Code
```text
Continue improving the current Snake Battle game.

The game is now working with reusable settings, multiple speed levels, different levels, food, power-ups, scoring, and other gameplay features.

Now make the "Battle" part of Snake Battle much more meaningful.

Add intelligent AI-controlled enemy snakes.

Requirements:
1. Enemy Snakes: Spawn autonomous rival snakes with distinct visual colors and personalities (e.g., Harvester, Viper Dart, Shadow Hunter, Goliath Titan).
2. Different Enemy Behaviors: Some prioritize food collecting, others actively stalk the player or defend territory.
3. Battle Mechanics: Implement competitive combat rules:
   - Flank Cut-Off: If an enemy crashes into your snake body, they are eliminated and drop valuable Energy Essence food.
   - Interception Defeat: If you crash into an enemy snake's body, you are defeated (unless shielded).
   - Head-On Clash: When two heads collide, the longer snake overpowers the shorter snake; equal lengths bounce back.
   - Shield Deflection: A shield absorbs one enemy collision.
4. Arena Hazards: Ensure AI navigates realm obstacles and dynamic environmental zones.
5. AI Difficulty: Add a difficulty selector (Easy, Medium, Hard, Extreme) that scales AI intelligence, lookahead accuracy, enemy count, and hazard density.
6. Rewards: Defeating enemy snakes awards bounty points and drops Energy Essence along their remains.
7. Improve the HUD: Add a live arena leaderboard ranking all active snakes by length, enemy kill counter, and combat statistics on the Game Over screen.
8. Keep the game fair: Ensure safe spawn distances away from the player.
9. Polish: Keep movement smooth and performant.

After implementation, test: Main Menu -> Settings -> choose level -> choose speed -> Play -> encounter AI snakes -> collect food -> use power-ups -> interact/collide with enemies -> earn score -> survive/lose -> restart -> verify that all settings and scoring still work correctly. Fix any bugs or confusing interactions you discover during testing.
```

#### 5. What the AI was asked to change
- Implement the `getAIDirection(enemy)` heuristic decision engine:
  - Avoid boundary walls, solid obstacles, self-body segments, and rival snake bodies.
  - Predict player trajectory for hunter-type enemies (`Shadow Hunter`).
  - Score candidate moves with lookahead exit-path evaluations to prevent dead-end self-trapping.
- Implement combat resolution logic (`eliminateEnemy`, flank cut-offs, head-on size comparisons).
- Add `DIFFICULTY_LEVELS` (Easy, Medium, Hard, Extreme) to the Main Menu and Settings.
- Build the real-time arena leaderboard HUD showing live snake rankings.
- Spawn Energy Essence drops along eliminated snakes' bodies.

#### 6. What should be tested after implementation
- AI snakes independently navigate the arena and collect food to grow longer.
- Outflanking an AI snake so its head hits your body destroys the enemy and drops energy orbs.
- Crashing into an enemy's body triggers Game Over (or breaks shield).
- Head-on clashes reward the larger snake.
- Live HUD updates rank in real-time as snakes grow and perish.

#### 7. What this teaches about agentic coding
Complex multi-agent AI systems can be integrated into an existing codebase if the prompt defines **clear game rules, collision precedence, and fallback behaviors**.

---

### Step 7 — Final Focused Polish, Testing & Edge-Case Hardening

#### 1. What the project had before this step
A complete, fully functional combat game with AI rivals, power-ups, and settings. However, deep testing revealed subtle edge-case bugs:
- Pressing Space to pause had no visual banner on screen.
- Arrow keys and Space could cause browser viewport scrolling on smaller screens.
- Deflecting an obstacle with a Shield could cause tail segments to pop without moving.
- LocalStorage calls could throw errors in sandboxed iframes.
- Close tail-following could trigger false-positive self-collisions.

#### 2. What we noticed while actually using/testing the game
To achieve a production-ready feel, the game needed a focused hardening pass to resolve these subtle edge cases without adding scope or unnecessary new systems.

#### 3. The problem or new requirement that emerged
Execute a comprehensive polish pass: fix keyboard scrolling, add a visual Pause overlay, ensure safe `localStorage` access, harden shield collision recovery, and synchronize all pickers across menus.

#### 4. The exact prompt given to Claude / Claude Code
```text
Now do a focused polish and testing pass on the current Snake Battle project.

Do NOT add major new features.

Test the existing functionality:
- Main menu
- Play
- Settings
- Snake color
- Multiple speed levels
- Difficulty
- Level selection
- Food
- Score
- Power-ups
- Enemy snakes / battle
- Pause
- Game over
- Restart
- Leaderboard

Fix any obvious bugs, broken buttons, confusing interactions, or visual issues you find.

Keep the project lightweight.

Do not add XP systems, achievements, missions, multiple new game modes, or other major features.

The goal is to make the current Snake Battle project stable, playable, and polished without expanding its scope.
```

#### 5. What the AI was asked to change
- Add `e.preventDefault()` for navigation keys (`ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `Space`, `WASD`).
- Render a stylish `⏸️ GAME PAUSED` overlay on canvas when paused.
- Create resilient `getSavedHighScore()` and `setSavedHighScore()` helpers wrapped in `try/catch`.
- Refactor player collision resolution so shield deflection prevents false tail shrinkage.
- Update self-collision lookahead to `snake.slice(0, -1)` so trailing tail moves don't trigger false deaths.

#### 6. What should be tested after implementation
- Complete end-to-end loop: Menu $\rightarrow$ Settings $\rightarrow$ Play $\rightarrow$ Pause $\rightarrow$ Combat $\rightarrow$ Game Over $\rightarrow$ Restart.
- Verify high score persistence across browser reloads.
- Verify pause overlay clearly communicates state.

#### 7. What this teaches about agentic coding
**A dedicated polish pass is essential.** Once major features are built, explicitly prompting the AI agent to focus strictly on stability, edge cases, and testing prevents feature creep while dramatically elevating software quality.

---

## 4. Prompt History

Below is the complete, chronological record of the exact prompts used during this agentic coding experiment.

---

### Prompt 1 — Foundational Prototype
- **Environment:** Claude
- **Problem that led to prompt:** Need for an initial, working HTML5 canvas Snake game engine.

```text
Create a classic Snake game in a single self-contained HTML file using HTML5 Canvas, CSS, and vanilla JavaScript. Include score tracking, food consumption, smooth grid movement, wall collisions, self-collision detection, and a game over state with restart capability.
```

---

### Prompt 2 — Visual Customization
- **Environment:** Claude
- **Problem that led to prompt:** The default green snake was visually plain and lacked identity.

```text
Add a visual color customization feature to the start menu. Allow the player to pick from multiple distinct snake skin themes (such as Neon Green, Cyber Cyan, Solar Gold, Plasma Purple, Crimson Red). Update the snake's head, body segments, and glow effects to match the selected skin.
```

---

### Prompt 3 — Reusable Settings Modal
- **Environment:** Claude
- **Problem that led to prompt:** Players could not change color or review options once the game started without reloading.

```text
Refactor the settings so that customization is reusable. Add a dedicated Settings modal with a Settings button accessible from both the start menu and the active game screen. When opened during gameplay, pause the game. Allow the player to change settings and seamlessly return to the game.
```

---

### Prompt 4 — Multiple Speed Tiers
- **Environment:** Claude
- **Problem that led to prompt:** Fixed movement speed was either too fast for beginners or too slow for advanced players.

```text
Add multiple speed levels to the game (Casual, Normal, Turbo). Allow the player to select their preferred speed in both the start menu and settings. Ensure game tick timing dynamically adjusts to the selected speed level.
```

---

### Prompt 5 — Item & Realm Depth
- **Environment:** Claude
- **Problem that led to prompt:** Gameplay became monotonous eating only one food type in an empty arena.

```text
Enhance the gameplay depth of Snake Battle:
1. Add multiple fruit types (Apple, Orange, Grape, Starfruit, Dragon Fruit) with varying point values, growth multipliers, and spawn rarities.
2. Add collectible power-ups (Shield Aura, Speed Boost, Time Freeze, Fruit Magnet) with visual timers on the HUD.
3. Implement multiple Arena Realms (Forest, Desert, Ocean, Space) with distinct color schemes, procedural obstacle density, and environmental hazards (e.g., ocean drift currents).
4. Add a combo multiplier system for rapid fruit collection and periodic survival bonuses.
```

---

### Prompt 6 — Intelligent AI Enemy Snakes & Battle Engine
- **Environment:** Claude Code
- **Problem that led to prompt:** The game was called *Snake Battle* but lacked actual opponents to fight.

```text
Continue improving the current Snake Battle game.

The game is now working with reusable settings, multiple speed levels, different levels, food, power-ups, scoring, and other gameplay features.

Now make the "Battle" part of Snake Battle much more meaningful.

Add intelligent AI-controlled enemy snakes.

Requirements:
1. Enemy Snakes: Spawn autonomous rival snakes with distinct visual colors and personalities (e.g., Harvester, Viper Dart, Shadow Hunter, Goliath Titan).
2. Different Enemy Behaviors: Some prioritize food collecting, others actively stalk the player or defend territory.
3. Battle Mechanics: Implement competitive combat rules:
   - Flank Cut-Off: If an enemy crashes into your snake body, they are eliminated and drop valuable Energy Essence food.
   - Interception Defeat: If you crash into an enemy snake's body, you are defeated (unless shielded).
   - Head-On Clash: When two heads collide, the longer snake overpowers the shorter snake; equal lengths bounce back.
   - Shield Deflection: A shield absorbs one enemy collision.
4. Arena Hazards: Ensure AI navigates realm obstacles and dynamic environmental zones.
5. AI Difficulty: Add a difficulty selector (Easy, Medium, Hard, Extreme) that scales AI intelligence, lookahead accuracy, enemy count, and hazard density.
6. Rewards: Defeating enemy snakes awards bounty points and drops Energy Essence along their remains.
7. Improve the HUD: Add a live arena leaderboard ranking all active snakes by length, enemy kill counter, and combat statistics on the Game Over screen.
8. Keep the game fair: Ensure safe spawn distances away from the player.
9. Polish: Keep movement smooth and performant.

After implementation, test: Main Menu -> Settings -> choose level -> choose speed -> Play -> encounter AI snakes -> collect food -> use power-ups -> interact/collide with enemies -> earn score -> survive/lose -> restart -> verify that all settings and scoring still work correctly. Fix any bugs or confusing interactions you discover during testing.
```

---

### Prompt 7 — Focused Polish and Hardening Pass
- **Environment:** Claude Code
- **Problem that led to prompt:** Edge-case friction (pause banner missing, default key scrolling, shield recovery glitches) needed resolution without expanding project scope.

```text
Now do a focused polish and testing pass on the current Snake Battle project.

Do NOT add major new features.

Test the existing functionality:

- Main menu
- Play
- Settings
- Snake color
- Multiple speed levels
- Difficulty
- Level selection
- Food
- Score
- Power-ups
- Enemy snakes / battle
- Pause
- Game over
- Restart
- Leaderboard

Fix any obvious bugs, broken buttons, confusing interactions, or visual issues you find.

Keep the project lightweight.

Do not add XP systems, achievements, missions, multiple new game modes, or other major features.

The goal is to make the current Snake Battle project stable, playable, and polished without expanding its scope.
```

---

## 5. Requirements That Emerged Through Use

One of the most important takeaways from this experiment is understanding how requirements actually form during software development.

| Initial Observation During Play | Emergent Realization | Resulting Architectural Requirement |
| :--- | :--- | :--- |
| *"I picked a color on the start screen, but I want to switch colors without restarting the page."* | Skin selection cannot be a one-time start screen variable. | **Reusable Settings Modal** accessible anytime via HUD button or menu. |
| *"The default speed feels overwhelming for testing new mechanics."* | Player skill and testing styles vary widely. | **Configurable Speed Tiers** (`Casual`, `Normal`, `Turbo`) with dynamic tick scaling. |
| *"Moving in an empty arena gets dull after 30 seconds."* | A single food item is insufficient for long-term engagement. | **Multi-Tier Fruits & Power-ups** with timed visual buffs and particle effects. |
| *"The title is Snake Battle, but I am the only snake in the arena."* | The core value proposition of the game was unfulfilled. | **Autonomous AI Rival Snakes** with tactical pathfinding and slither-style combat. |
| *"Crashing head-on into an enemy should feel different from cutting them off."* | Binary death collisions feel unfair and confusing. | **Tactical Combat Rules** (Size-based Head-On Clashes, Flank Cut-Offs, Shield Deflections). |
| *"Pressing spacebar stopped the game, but the screen looks frozen."* | Lack of visual state feedback creates confusion. | **Canvas Pause Overlay Banner** and key event default suppression. |

### Upfront Specification vs. Iterative Requirements Discovery

```
UPFRONT SPECIFICATION (Traditional)
┌───────────────────────────────────────────────────────────────┐
│ Attempt to predict every feature, edge case, and mechanic    │
│ before running a single line of code.                        │
│ ❌ High risk of building unwanted or overcomplicated features. │
└───────────────────────────────────────────────────────────────┘

ITERATIVE REQUIREMENTS DISCOVERY (Agentic)
┌───────────────────────────────────────────────────────────────┐
│ Build minimal baseline → Play & observe → Identify friction  │
│ → Formulate precise prompt → Refactor with AI agent.         │
│ ✅ Every feature solves a tested, verified problem.            │
└───────────────────────────────────────────────────────────────┘
```

---

## 6. Current Features

The following features are **fully implemented, tested, and verified** in `index.html`:

### 🎮 Game Flow & Overlays
- **Main Menu Screen:** Pre-game lobby with real-time skin preview, speed selector, difficulty selector, and realm starter.
- **In-Game HUD:** Live Score, High Score, Snake Length, Kills Counter, Realm Badge, Difficulty Badge, Arena Rank Badge, Buff Timers, and Combo Bar.
- **Reusable Settings Modal:** Accessible from both the Main Menu and during active gameplay (with automatic pause).
- **Pause System:** Toggle pause via `Spacebar` with a dimmed canvas overlay banner (`⏸️ GAME PAUSED`).
- **Game Over Screen:** Displays detailed combat statistics (Final Score, Rivals Defeated, Max Length, Highest Combo, Realm Conquered, Final Rank).

### 🐍 Snake Customization & Controls
- **5 Visual Skins:**
  - `Cyber Emerald` (#2ea043)
  - `Plasma Cyan` (#58a6ff)
  - `Solar Gold` (#e3b341)
  - `Void Purple` (#bc8cff)
  - `Crimson Fury` (#f85149)
- **Responsive Controls:** Arrow Keys, WASD, and touch-ready canvas events with automatic scroll prevention (`preventDefault`).

### ⚙️ Speed & Difficulty Systems
- **3 Speed Levels:**
  - `Casual` (130ms base tick)
  - `Normal` (95ms base tick)
  - `Turbo` (65ms base tick)
- **4 AI Difficulty Levels:**
  - `Easy` (1 AI snake, basic pathfinding, low hazard density)
  - `Medium` (2 AI snakes, standard pathfinding, normal hazards)
  - `Hard` (3 AI snakes, aggressive hunting behavior, high hazard density)
  - `Extreme` (4 AI snakes, Titan boss spawns, ruthless intercept pathfinding)

### 🌍 Arena Realms & Dynamic Hazards
- **4 Themed Realms:**
  - **Verdant Forest (Lvl 1):** Sparse foliage obstacles.
  - **Dune Desert (Lvl 2):** Dense sandstone rock formations.
  - **Abyssal Ocean (Lvl 3):** Directional drift current zones (`🌊 Drift Current`) that push entities.
  - **Cosmic Space (Lvl 4):** Hazardous pulsar nebula anomaly fields (`⚡ Nebula Field`).

### 🍎 Fruit Varieties & Drops
| Item | Color | Points | Growth | Special Trait |
| :--- | :--- | :--- | :--- | :--- |
| **Apple** | Red (#f85149) | 10 pts | +1 | Standard nourishment |
| **Orange** | Orange (#db6d28) | 15 pts | +1 | Fast energy |
| **Grape** | Purple (#bc8cff) | 25 pts | +2 | High yield |
| **Starfruit** | Gold (#ffd700) | 40 pts | +2 | Rare spawn, glowing aura |
| **Dragon Fruit** | Magenta (#ff4499) | 65 pts | +3 | Epic spawn, intense particles |
| **Energy Essence**| Cyan (#58a6ff) | 35 pts | +2 | Drops along defeated enemy remains |

### ⚡ Collectible Power-Ups
- **🛡️ Shield Aura (14s on board):** Absorbs one fatal collision with obstacles, arena walls, or enemy snakes.
- **⚡ Speed Boost (7s active):** Increases movement speed by 35% with dynamic score multiplier.
- **❄️ Time Freeze (6s active):** Immobilizes all AI rival snakes while player moves freely.
- **🧲 Fruit Magnet (8s active):** Gravitationally pulls nearby fruit and energy drops directly into the player.

### ⚔️ AI Rivals & Tactical Combat Engine
- **5 Enemy Personalities:**
  1. `Crawler Scout` (Basic wandering & safe food collection)
  2. `Harvester Boa` (Greedy high-value fruit seeker)
  3. `Viper Dart` (High-speed opportunist)
  4. `Shadow Hunter` (Aggressive player trajectory interceptor)
  5. `Goliath Titan` (Massive, high-bounty boss snake)
- **Combat Resolution Rules:**
  - **Flank Cut-Off:** If an enemy crashes its head into the player's body segments, the enemy is destroyed, awarding score and scattering Energy Essence drops.
  - **Interception Defeat:** If the player crashes into an enemy snake's body, the player is eliminated (unless protected by a Shield).
  - **Head-On Clash:** Direct head-to-head collisions compare snake lengths: the longer snake crushes the shorter snake; equal lengths trigger a rebound deflection.
- **Live Arena Mini-Leaderboard:** Live HUD component ranking all active snakes by body length in real time.

---

## 7. What We Learned

### 1. Requirements Emerge from Real Use
You cannot design the perfect game from a blank text document. The need for reusable settings, casual speed options, and visual pause overlays only became obvious after hands-on playtesting.

### 2. Prompts Convert Observations into Concrete Code
The key to productive agentic coding is converting vague impressions (*"this feels too hard"*) into explicit technical specifications (*"add a 3-tier speed selector with base ticks at 130ms, 95ms, and 65ms"*).

### 3. AI Coding Agents Refactor Existing Systems
An AI coding agent does not simply generate standalone snippets; it can intelligently refactor existing event loops, hoist state variables, and integrate new modals into established rendering pipelines without breaking legacy behavior.

### 4. Features Are Interconnected
Adding AI enemy snakes was not just a rendering change. It directly impacted:
- Item collision loops (AI can eat fruit before the player).
- HUD components (live leaderboard ranking).
- Scoring systems (enemy bounty points and essence drops).
- Game over conditions (combat defeats vs. wall smashes).

### 5. Testing Is an Integral Part of Development
Every code modification must be verified immediately against the active game loop. Catching edge cases (like shield deflection tail-shrinkage) early prevents architectural regressions.

### 6. Small Iterative Steps Outperform Massive Monolithic Requests
Building the foundation, then adding customization, then adding settings, then adding items, and finally adding AI enemies produced a clean, maintainable, single-file architecture. Attempting to build everything in one giant prompt would have increased bug density and architectural confusion.

### 7. Scope Control Matters
Knowing what **not** to build is as critical as knowing what to build. Resisting feature bloat keeps codebases readable, responsive, and easy to maintain.

---

## 8. Final Project Checklist

Use this checklist to verify that all systems in Snake Battle operate correctly:

- [x] **Main Menu:** Title, instructions, and interactive pickers render cleanly.
- [x] **Skin Customization:** Selecting any of the 5 skins updates the player snake in real time.
- [x] **Speed Levels:** Casual, Normal, and Turbo modes apply correct game tick timings.
- [x] **Difficulty Modes:** Easy, Medium, Hard, and Extreme correctly adjust enemy counts and AI smartness.
- [x] **Realm Selection:** Forest, Desert, Ocean, and Space load correct backgrounds, obstacles, and hazards.
- [x] **In-Game Settings:** Opening settings pauses gameplay; changes apply immediately on modal close.
- [x] **Controls:** WASD and Arrow Keys steer cleanly without browser window scrolling.
- [x] **Pause System:** Spacebar toggles pause state with a visible canvas banner.
- [x] **Food & Combos:** All 5 fruit varieties award correct points, growth, and combo multiplier bonuses.
- [x] **Power-ups:** Shield, Speed, Freeze, and Magnet activate correctly with live HUD countdown tags.
- [x] **AI Rivals:** Autonomous snakes navigate around obstacles and collect food.
- [x] **Combat - Cut-Offs:** Cutting off enemy snakes destroys them and spawns Energy Essence drops.
- [x] **Combat - Head-On Clashes:** Longer snake overpowers shorter snake; equal lengths deflect.
- [x] **Combat - Shields:** Active shield absorbs one fatal collision with obstacles, walls, or enemies.
- [x] **Live Leaderboard:** Real-time HUD accurately tracks rank and lengths of all active snakes.
- [x] **Game Over & Statistics:** Displays accurate combat recap (Score, Kills, Length, Combo, Rank).
- [x] **Restart:** Restart button resets arena, snakes, items, and state without page refresh.
- [x] **High Score Persistence:** High scores persist across browser reloads using safe `localStorage` helpers.
- [x] **Zero Console Errors:** Clean JavaScript execution with zero broken buttons or syntax errors.

---

## 9. What We Intentionally Did NOT Build

To maintain clarity as an educational project, several complex systems were intentionally avoided:

- **❌ Complex Account/Login Systems:** Would add server dependencies and auth overhead without improving the core agentic learning experiment.
- **❌ Persistent Multiplayer WebSockets:** Would introduce network latency, server synchronization, and hosting complexity, detracting from client-side AI behavior design.
- **❌ Microtransactions, Gacha, or Unlock Grind:** Adds artificial friction without pedagogical value.
- **❌ Bloated Quest / Achievement Systems:** Diverts attention away from core arcade mechanics and physics.
- **❌ Heavy External Game Frameworks (Phaser, Three.js):** Keeping the project in pure vanilla HTML5/Canvas guarantees zero external dependencies and 100% transparent code readability.

Keeping the project scoped to a single self-contained `index.html` file proves that rich, engaging games with intelligent AI can be built cleanly and transparently with an AI coding partner.

---

## 10. Final Takeaway

The most valuable outcome of this project is not merely the game itself—it is the mastery of the **Agentic Development Loop**:

$$\text{BUILD} \longrightarrow \text{USE} \longrightarrow \text{OBSERVE} \longrightarrow \text{REQUIREMENT} \longrightarrow \text{PROMPT} \longrightarrow \text{IMPLEMENT} \longrightarrow \text{TEST} \longrightarrow \text{REFINE}$$

By treating the AI coding agent as an interactive pair programmer—testing changes empirically, communicating observations with precision, and embracing iterative refinement—developers can rapidly bring creative ideas from initial concept to polished reality. This workflow represents the future of software engineering.
