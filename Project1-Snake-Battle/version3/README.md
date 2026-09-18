# Snake Game — Version 3

🌐 **Live Demo:** [https://ai-prompting-in-2026-projects-cgzu.vercel.app/](https://ai-prompting-in-2026-projects-cgzu.vercel.app/)

## 1. Project Overview

This project is a browser-based snake game built through an interactive, AI-assisted game-building exercise as part of the Agent Factory / agentic coding curriculum.

The core idea of the game:
- A snake eats fruit balls scattered around the board.
- The snake grows in length as it consumes fruit balls.
- The player controls their snake using keyboard inputs.
- The game was iteratively modified based on actual hands-on gameplay and feedback.
- Computer-controlled (AI bot) snakes were added to create a multi-snake arena.
- When any snake dies, its body turns into fruit balls that other surviving snakes can eat.

---

## 2. Learning Goal

The primary objective of this exercise was not to design or write a massive, fully specified software requirements document up front. 

Instead, the goal was to practice an **iterative agentic coding workflow**:

```
Play
  ↓
Notice something
  ↓
Express the wish
  ↓
AI modifies the existing game
  ↓
Play again
  ↓
Repeat
  ↓
AI critiques the game
  ↓
Improve
  ↓
Ship
```

### Why this workflow matters for Agentic Coding
In agentic coding, requirements emerge through direct interaction with working software. Rather than guessing UX edge cases or over-engineering features before testing, developer-agent pairs achieve faster and higher-quality results by deploying working increments, observing actual behavior, expressing natural-language intentions, and refining the product continuously.

---

## 3. Development Journey

### Step 1 — Initial Game

**Exact Prompt:**
```text
Let's build and play a game where a snake eats fruit balls to grow.
```

**What was built:**
- A basic 2D grid canvas where a green snake moves continuously.
- Arrow key and `W/A/S/D` player movement controls.
- Randomly spawning colored fruit balls.
- Snake length growth and score increment (+10) when eating fruits.
- Wall collision and self-collision game over detection with a restart button.

The game was played for at least one minute to experience the basic mechanics before deciding on the next improvement.

---

### Step 2 — First Wish

**Exact Prompt:**
```text
Can I pick my snake's color before the game starts?
```

**What changed:**
- A visual color picker palette was added above the game board offering multiple color choices (Green, Blue, Purple, Orange, Pink, Cyan).
- Selecting a color dynamically updates the snake's body and head tone before and during gameplay.

---

### Step 3 — Change the Game Rule

**Exact Prompt:**
```text
Now make it a battle: add computer-controlled snakes, and when a
snake dies its body turns into fruit the others can eat.
```

**What changed:**
- Transformed the single-player game into a real-time Battle Arena.
- Added 3 autonomous computer-controlled AI bot snakes that navigate the grid, search for fruits, and avoid collisions.
- Expanded the arena size to 600x600 to accommodate multiple snakes.
- Implemented the death-to-fruit mechanic: when any snake (player or bot) crashes into a wall or another snake, all its body segments instantly convert into fruit balls.
- Bot snakes automatically respawn after a short delay to keep the arena active.

---

### Step 4 — AI Self-Critique

**Exact Prompt:**
```text
Score this game 1-10 on three things: is it fun, is it clear
what to do, and does it feel finished or rough? One sentence
each. Then make the single change that would raise the lowest
score, and do it.
```

**AI Critique & Scores Recorded:**
1. **Is it fun:** `8/10` — The battle arena mechanics where snakes turn into fruit on death create engaging and competitive gameplay against bots.
2. **Is it clear what to do:** `8/10` — Controls and goals (eat fruits, trap enemies, grow) are immediately intuitive.
3. **Does it feel finished or rough:** `5/10` — The initial presentation lacked modern polish, visual identity, glowing effects, snake facial features/eyes, and in-game battle feedback like leaderboards or kill tracking.

**Single Improvement Made:**
To address the lowest score (**"Finished vs. Rough"**), a complete visual and UI polish pass was implemented:
- Added a real-time in-game **Leaderboard** tracking snake lengths and statuses.
- Added directional **eyes** to all snakes for personality and clear heading indication.
- Added **glowing fruit shaders**, subtle background arena grid lines, rounded snake body segments, kill tracking, and modern dark-mode styling.

---

## 4. Final Features

### Core Gameplay
- Grid-based snake movement and growth mechanics.
- Real-time collision detection against arena boundaries and snake bodies.
- Continuous fruit generation.

### Player Controls
- Responsive keyboard navigation via **Arrow Keys** or **W / A / S / D**.
- Color selection buttons for player customization.
- Restart button to instantly replay upon defeat.

### Battle Mechanics
- 3 computer-controlled AI bot snakes (*Red Viper*, *Blaze Snake*, *Shadow Drake*).
- Death-to-fruit conversion: body segments transform into collectible fruit balls upon death.
- Timed bot respawning to maintain constant action.
- Kill counter awarding bonus score (+50) when outmaneuvering bots.

### Visual/UI Features
- Live Leaderboard widget displaying current rankings by length.
- Direction-aware eyes on all snake heads.
- Glowing fruit balls with shadow blur effects.
- Rounded snake body segments.
- Subdued grid-line background.
- Clean header, score counter, and dark-themed game-over modal with kill summary.

---

## 5. What I Learned

- **Start Simple:** Avoid massive initial specifications; start with a minimal playable slice.
- **Play Early and Often:** Directly interacting with the running software exposes UX gaps that code reviews miss.
- **Natural Language Intent:** Communicate *what* the desired outcome is rather than dictating implementation specifics.
- **Continuous Evolution:** Software can be smoothly reshaped in small, verifiable iterations.
- **Self-Critique as a Tool:** Asking AI to evaluate its own output provides an objective quality benchmark and drives targeted improvements.
- **Ship the Working Result:** Completing the loop with a self-contained, playable artifact reinforces end-to-end delivery.

---

## 6. The Iterative Loop

```
Human builds with AI
        ↓
   Human plays
        ↓
Human notices something
        ↓
Human expresses a wish
        ↓
AI implements the change
        ↓
 Human plays again
        ↓
 AI critiques the result
        ↓
AI improves the weakest area
        ↓
      Ship
```

- **Build**: Initialize the baseline prototype quickly.
- **Play & Observe**: Experience gameplay directly to identify missing elements.
- **Wish & Implement**: Formulate focused requests and let the agent apply targeted code updates.
- **Critique & Improve**: Leverage structured evaluation criteria to elevate polish and user experience.
- **Ship**: Package the finalized deliverable for use and sharing.

---

## 7. Prompts Used

### Prompt 1 — Base Game
```text
Let's build and play a game where a snake eats fruit balls to grow.
```
*Accomplished: Created the initial single-player HTML5 canvas snake game with movement, fruit spawning, score tracking, and collision detection.*

### Prompt 2 — Player Color Customization
```text
Can I pick my snake's color before the game starts?
```
*Accomplished: Added a color selection toolbar and linked player snake rendering to the chosen palette.*

### Prompt 3 — Battle Arena Transformation
```text
Now make it a battle: add computer-controlled snakes, and when a
snake dies its body turns into fruit the others can eat.
```
*Accomplished: Transformed the game into a multi-snake battle arena with AI bot opponents, respawns, and the death-to-fruit mechanic.*

### Prompt 4 — Self-Critique & Polish
```text
Score this game 1-10 on three things: is it fun, is it clear
what to do, and does it feel finished or rough? One sentence
each. Then make the single change that would raise the lowest
score, and do it.
```
*Accomplished: Evaluated the game across three dimensions and delivered a major polish pass (live leaderboard, snake eyes, glowing fruits, and kill counters).*

---

## 8. Publishing

The game is delivered as a standalone, zero-dependency web application:
- **File:** `index.html`
- **Live URL:** [https://ai-prompting-in-2026-projects-cgzu.vercel.app/](https://ai-prompting-in-2026-projects-cgzu.vercel.app/)

It runs in any modern web browser by opening the file directly or visiting the deployed link.

---

## 9. Version 1 vs Version 3

- **Version 1**: An earlier multi-file implementation exploring snake battle concepts.
- **Version 3**: A focused, self-contained single-file exercise following the step-by-step iterative agentic coding methodology from the book/curriculum.

---

## 10. Project Structure

```
version3/
├── index.html
└── README.md
```

---

## 11. Final Reflection

The key takeaway from this project was not merely producing another snake game, but mastering the agentic development feedback loop:

$$\text{build} \longrightarrow \text{play} \longrightarrow \text{observe} \longrightarrow \text{wish} \longrightarrow \text{modify} \longrightarrow \text{critique} \longrightarrow \text{improve} \longrightarrow \text{ship}$$

By treating development as a continuous conversation anchored in real gameplay, high-quality software emerges rapidly, naturally, and enjoyably.
