# Personal Professional Website — Areeba Zafar Chohan

An evidence-grounded, responsive personal website developed through a structured AI-assisted iterative workflow as part of the **Panaversity Agent Factory: AI Prompting in 2026** series.

---

## Project Goal

The primary goal of this project was to design and build a modern, clean, and professional personal website for **Areeba Zafar Chohan**. 

The website needed to:
- Present a clear professional identity to anyone visiting—including recruiters, classmates, friends, relatives, businesses, and potential collaborators.
- Avoid looking like a generic template or filler-heavy student portfolio.
- Be grounded strictly in real, verifiable evidence without exaggerating or fabricating achievements, degrees, companies, or work experience.
- Provide a direct, responsive platform for visitors to play shipped interactive work and explore practical AI engineering capabilities.

---

## Step 1 — Initial Brief

The project began with an initial design brief that defined the requirements and asked the AI to make fundamental design decisions before assembling the full site:

1. **Website Colors**: Establishing high-contrast, accessible light and dark color schemes (deep midnight slate backgrounds with indigo/violet accents).
2. **Background and Overall Visual Design**: Selecting a modern Bento Grid modular layout with glassmorphism navigation and ambient glow elements.
3. **Text Size and Writing Style**: Pairing clean sans-serif typography (*Plus Jakarta Sans* for headings, *Inter* for body copy, and *JetBrains Mono* for technical metadata) with direct, concise phrasing.
4. **Information to Include**: Defining spaces for personal identity, shipped projects, practical AI tooling, verified curriculum learning, guidance abilities, credentials, and contact channels.
5. **Professional Presentation**: Organizing information hierarchically so visitors can quickly navigate and understand core capabilities without cognitive overload.

---

## Step 2 — Initial Website

The first version established the core static web architecture:
- **Semantic HTML5 & Vanilla CSS3**: A single-page layout structured with a header, hero introduction, about section, projects section, capabilities area, credentials block, contact form, and footer.
- **Dark/Light Theme Engine**: A client-side theme switcher reading from and writing to browser `localStorage` (`theme-preference`).
- **Mobile Drawer Navigation**: A responsive collapsible navigation menu with smooth-scrolling anchor links.
- **Initial Placeholders**: Clean structure ready for real evidence, links, and credentials to be integrated.

---

## Step 3 — Adding Real Evidence

In the second iteration, all placeholder content was replaced with real, checkable facts across five distinct evidence categories:

1. **Shipped Projects (Built & Shipped)**:
   - Showcased the live **Classic Snake Web Game** deployed on Netlify: [`https://snake-game-by-junaid.netlify.app/`](https://snake-game-by-junaid.netlify.app/).
   - Highlighted HTML5 canvas rendering, responsive controls, state management, and real-time collision detection.

2. **Practical AI Assistant Fluency (Tools in Practice)**:
   - **ChatGPT (OpenAI)**: Multi-step logic breakdown, test case generation, code reviews, and structured JSON schema outputs.
   - **Claude (Anthropic)**: Large-context codebase ingestion, workspace artifact generation, multi-file refactoring, and extended reasoning.
   - **Gemini (Google)**: Multimodal inspection (visual mockups and documents), fast factual verification, and cross-model evaluation.

3. **Panaversity Agent Factory — AI Prompting (2026) (Studied Curriculum)**:
   - Grounded directly in verified course material from [`https://agentfactory.panaversity.org/docs/ai-prompting-2026`](https://agentfactory.panaversity.org/docs/ai-prompting-2026):
     - *Part 1: How AI Knows Things* (Pretrained knowledge boundaries, 3 retrieval modes).
     - *Part 2: Talking to AI Well* (6-layer context stack, extended deliberate reasoning, anti-sycophancy prompts, brainstorm-iterate loop).
     - *Part 3: Beyond Text* (Multimodal inputs, single-prompt interactive apps, code-driven data validation).
     - *Part 4: Working Safely* (Desktop agent permission ladders, media economics, cross-model peer evaluation).

4. **Guidance Capability (Advisory & Guidance)**:
   - Practical mentorship for peers and collaborators in context engineering, debiasing/anti-sycophancy prompt formulation, structured iteration cycles, and model selection.

5. **Certification & Credentials (Verified Credential)**:
   - Documented completion of the structured **Summer Camp Curriculum** and successfully passing the comprehensive final examination.

---

## Step 4 — Design Iterations

Throughout the development process, iterative refinements were made in response to specific feedback:

- **Matching Action Button Colors**: Harmonized the prominent hero "Play Live Snake Game" button styling to match the site's accent theme tokens in both dark and light modes.
- **Hero Streamlining & Identity Focus**: Removed redundant large headings and full-name repetition, adding a short `AZ` initials badge, a concise status pill (*"Web Game Developer & Practical AI Practitioner"*), and above-the-fold action pathways.
- **Visual Evidence Taxonomy Bar**: Added an interactive "Evidence-Grounded Portfolio Map" legend with colored pills (`.evidence-built`, `.evidence-studied`, `.evidence-tool`, `.evidence-advisory`, `.evidence-credential`) so visitors instantly recognize what is built vs. studied vs. certified.
- **Scroll Offset Optimization**: Added `scroll-padding-top: 80px` to ensure smooth-scroll anchor links do not get obscured beneath the fixed glass navbar.
- **Defensive Text Wrapping**: Added `overflow-wrap: anywhere; word-break: break-all;` on live URLs and contact strings to prevent mobile layout clipping.

---

## Step 5 — Stranger Testing

To ensure the page communicated clearly under tight time constraints, two simulated 8-second evaluation passes were conducted:

### 1. Recruiter Perspective (8-Second Scan)
- **Evaluation**: Focused on immediate identity recognition, clarity of the desired next action, and eliminating generic filler.
- **Feedback & Action**: Added direct, prominent action buttons in the hero section—**Play Live Snake Game** and **Connect & Collaborate**—so recruiters immediately have a clear path to test working code or get in touch within the first 5 seconds.

### 2. Classmate Perspective (8-Second Scan)
- **Evaluation**: Focused on peer relatability, understanding what shared skills exist, and discovering actionable ways to collaborate.
- **Feedback & Action**: Clarified the guidance section with relatable mentorship points (context engineering, anti-sycophancy prompts, iterative refinement) and made the live game link directly accessible from multiple touchpoints.

---

## Step 6 — Final Polish

The final pass refined overall consistency without adding unnecessary complexity:
- **Visual Hierarchy**: Standardized Bento grid card elevations, borders, and hover transitions.
- **Typography Consistency**: Verified font weights, line heights, and contrast ratios across both color themes.
- **Component Robustness**: Verified Lucide SVG icon rendering, safe DOM event listeners, and form input validation.
- **Mobile Adaptation**: Confirmed proper touch target sizing, mobile drawer mechanics, and responsive single-column collapse on small screens.

---

## Final Features

- **Responsive Bento Grid Layout**: Modular, card-based layout designed for desktop, tablet, and mobile screens.
- **Dark / Light Theme Toggle**: Persistent theme switching with automatic system preference detection.
- **Interactive Shipped Game Showcase**: Dedicated showcase featuring the live Netlify-deployed Snake game with direct launch actions.
- **Evidence-Grounded Classification System**: Distinct visual pill badges clearly delineating built projects, studied coursework, practical tooling, mentorship, and credentials.
- **AI Tooling Matrix**: Detailed breakdown of workflows for ChatGPT, Claude, and Gemini.
- **Panaversity 2026 Curriculum Breakdown**: Four-part summary covering foundational model mechanics, context stacks, multimodal tools, and agent safety.
- **Advisory & Mentorship Spotlight**: Clear overview of practical prompting guidance offered to peers.
- **Verified Credential Section**: Clear documentation of the Summer Camp final examination.
- **Interactive Contact Card**: Contact channel links (GitHub, live game, course reference) and a simulated message submission form.
- **Mobile Navigation Drawer**: Smooth slide-down navigation drawer with auto-close upon link selection.

---

## Lessons Learned

- **Starting with a Brief**: Defining visual tokens, typography, and content boundaries before writing code provides clear constraints and prevents generic defaults.
- **Giving the AI Decisions to Work With**: Asking the assistant to reason through specific aesthetic and structural choices produces cleaner, more coherent design systems.
- **Using Real Evidence**: Grounding portfolios in checkable links, live deployments, and actual curriculum materials builds genuine credibility rather than relying on buzzwords.
- **Attaching Files as Context**: Referencing actual curriculum documentation ensures technical descriptions reflect real concepts (e.g., 6-layer context stacks, anti-sycophancy rubrics).
- **Iterative Design**: Building in stages—structure first, real content second, targeted refinements third—avoids sprawling regressions.
- **Reading a Page as a Visitor**: Evaluating layout hierarchy from the perspective of external readers reveals hidden friction points and missing calls to action.
- **Stranger Testing**: Simulating recruiter and classmate personas highlights what is immediately obvious versus what gets lost in dense text.
- **AI-Assisted Development**: AI functions best as an active pair programmer when given explicit, verified constraints and clear review criteria.
- **Shipping**: Focusing on clean, dependency-light code (vanilla HTML/CSS/JS) results in fast load times, zero build complexity, and seamless deployment.

---

## Project Structure

```text
Project3-A-Page-That-Is-You/
├── index.html       # Semantic HTML5 page structure, sections, and Bento grid layout
├── style.css        # Responsive CSS custom properties, theme tokens, and animations
├── script.js        # Theme toggle, mobile drawer navigation, and form interaction logic
└── README.md        # Complete project documentation and iterative development history
```

---

## Publishing & Local Preview

### Local Preview
To run the website locally:

```bash
# Using Python 3 built-in HTTP server
python -m http.server 3000
```
Then navigate to `http://localhost:3000` in any modern browser.

### Shipped Project Reference
- **Live Snake Game**: [https://snake-game-by-junaid.netlify.app/](https://snake-game-by-junaid.netlify.app/)
- **Course Material Reference**: [https://agentfactory.panaversity.org/docs/ai-prompting-2026](https://agentfactory.panaversity.org/docs/ai-prompting-2026)
