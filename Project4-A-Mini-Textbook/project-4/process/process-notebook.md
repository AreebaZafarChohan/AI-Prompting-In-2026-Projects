# Process Notebook: Directing, Questioning, Evaluating, and Correcting AI

---

## 1. Topic Brief
- **Topic:** Newton's Third Law of Motion
- **Core Principle:** For every action force, there is an equal and opposite reaction force ($\vec{F}_{\text{A on B}} = -\vec{F}_{\text{B on A}}$).
- **Core Learning Goals:** Understand interaction pairs, recognize that forces act on different bodies, understand why action-reaction forces do not cancel out, and connect force pairs to varying accelerations via Newton's Second Law ($a = F/m$).

---

## 2. Audience
- **Target Audience:** High school students (Introductory / Conceptual Physics).

---

## 3. Why This Topic Was Chosen
- Newton's Third Law is a foundational physics concept that is deceptively simple in phrasing ("equal and opposite reaction") but notorious for deep-seated conceptual misconceptions (e.g., belief that forces cancel out to zero, or that larger/faster objects exert more force). It provides an ideal domain for process-driven prompt steering and guided inquiry.

---

## 4. Weak Prompt
```text
Explain Newton's Third Law of Motion.
```
*(Documented in `prompts/01-weak-prompt.md`)*

---

## 5. Context-Aware Prompt
```text
I am a high school student learning about Newton's Third Law of Motion. Explain it to me clearly at my level, then tell me what is still unclear and what I might misunderstand.
```
*(Documented in `prompts/02-context-prompt.md`)*

---

## 6. Comparison of Weak vs. Context-Aware Prompting
- **Weak Prompt:** Open-ended and underspecified. Produces generic textbook definitions without audience calibration, engagement, or identification of common pitfalls.
- **Context-Aware Prompt:** Specifies persona/grade-level (high school student), requests clarity tailored to that level, and proactively asks the AI to surface misconceptions and areas of ambiguity.

---

## 7. Three Approaches Proposed
*(Documented in `prompts/03-options-prompt.md`)*
1. **Option A:** Everyday Physics — Intuition-First
2. **Option B:** Force Pairs on Paper — Diagram-Centered
3. **Option C:** Predict, Test, Explain — Problem-Solving / Inquiry

---

## 8. Selected Approach and Why
- **Selected:** **Option C — Predict, Test, Explain**
- **Reason:** Engages students through active prediction and cognitive dissonance before formalizing laws, making conceptual learning interactive.

---

## 9. Rejected Approach and Why
- **Rejected:** **Option B — Force Pairs on Paper / Diagram-Centered**
- **Actual Reason for Rejection:** A diagram-centered approach may feel too dry at the beginning and may be harder to understand before the core concept is intuitive.

---

## 10. Three Revised Outlines
*(Documented in `prompts/05-revised-outlines.md`)*
1. **Outline 1:** Minimal Scaffolding — Pure Inquiry
2. **Outline 2:** Guided Inquiry — Prediction + Light Visual Support
3. **Outline 3:** Story-Driven Inquiry — Prediction + Narrative Thread

---

## 11. Selected Final Outline
- **Selected:** **Outline 2 — Guided Inquiry (Prediction + Light Visual Support)**
- **Note on Final Directive Prompt:** Exact wording of the final generation prompt is: *"Not available in current project evidence."* (Documented in `prompts/06-final-outline.md`).

---

## 12. Chapter Generation Stage
- Drafted the initial mini-textbook chapter following Outline 2, structuring the text into prediction hooks (skateboard push), observations, formalization, misconception resolution (non-cancellation), unequal mass effects (truck vs. mosquito), and conceptual checkpoints.

---

## 13. Rubric Evaluation
Evaluated `chapter/draft.md` in `evaluation/rubric.md` across four core metrics:
- **Clarity:** 8/10
- **Accuracy:** 9/10
- **Age-fit:** 8/10
- **Usefulness for Revision:** 4/10
- Identified missing revision components (recap, flashcards, quiz, 7-day revision plan) and weak visual support after predictions.

---

## 14. Improvements Applied
Applied focused updates to `chapter/draft.md` (recorded in `evaluation/improvements.md`):
1. Added ASCII interaction diagrams after predictions (skateboarder and truck/mosquito).
2. Clarified subscript notation ($\vec{F}_{\text{A on B}}$ and negative sign).
3. Explicitly clarified that action and reaction are simultaneous, not cause-and-effect delays.
4. Added an end-of-chapter Recap.
5. Added 5 conceptual Flashcards.
6. Added a 3-question Quick Quiz with answer keys and explanations.
7. Added a structured 7-Day High School Revision Plan.

---

## 15. Fact-Check Process
- Fact-checked 8 core claims in `evaluation/fact-check.md`.
- During the initial fact-check pass, Claims 1–7 were accepted based on project scope and Newtonian mechanics, while Claim 8 (Rocket propulsion in a vacuum) was flagged as *Needs checking* because no external sources were present at that stage.
- During the final submission verification stage, genuine external sources ([OpenStax College Physics 2e](https://openstax.org/books/college-physics-2e/pages/4-4-newtons-third-law-of-motion-symmetry-in-forces) and [NASA Glenn Research Center](https://www.grc.nasa.gov/www/k-12/airplane/newton3.html)) were introduced, successfully verifying Claim 8 and confirming all 8 claims as **Accepted**.

---

## 16. Final Correction Pass
- Verified that all 8 accepted claims are faithfully represented in the text without requiring factual rewrites.
- Preserved the integrity of `chapter/draft.md` without unnecessary modifications.

---

## 17. Remaining Unresolved Items
- **Status:** All project elements, including external source verification (OpenStax College Physics 2e and NASA Glenn Research Center) and student reflection, have been fully completed and resolved for final submission.

---

## 18. Student Reflection

### 1. Prompt Evolution

I learned that a generic prompt such as "Explain Newton's Third Law of Motion" gives the AI very little direction. When I added my level as a high school student and asked the AI to explain the topic clearly and identify possible misunderstandings, the response became more focused on my learning needs. This showed me that giving context helps the AI produce a more useful response.

### 2. Decision-Making & Steering

It was important to evaluate the different teaching approaches instead of allowing the AI to automatically choose one. I selected Predict, Test, Explain because I wanted students to think and make predictions before receiving the formal explanation. I rejected the diagram-centered approach because I felt it could be too dry at the beginning and harder to understand before the main idea became intuitive. This showed me that the human should make important design decisions rather than simply accepting the AI's first suggestion.

### 3. Evaluation & Quality Control

The rubric showed me that an AI-generated chapter can look good while still missing useful learning features. The initial chapter needed stronger visual support and was missing a recap, flashcards, quiz, and 7-day revision plan. The fact-check also showed the importance of checking factual claims instead of automatically trusting AI-generated content. One claim about rocket propulsion in a vacuum remained flagged because the project did not contain an external source to verify it.

### 4. Key Takeaway

My biggest lesson from this project is that AI should be treated as a tool that I direct, evaluate, question, and correct. Better results did not come only from asking AI to write the chapter. They came from improving the prompt, comparing different approaches, making my own decisions, evaluating the output, checking important claims, and applying focused corrections. Human judgment remained important throughout the process.

---

## Optional Self-Added Enhancement: Interactive Mini Book

After completing all required assignment deliverables, an interactive web-based Mini Book UI (`chapter/mini-book.html`) was added as an optional, self-directed enhancement.

**Why it was added:** To make the completed chapter feel more polished, interactive, and presentable — transforming a Markdown document into a self-contained digital reading experience with navigation, flashcards, an interactive quiz, and a visual revision timeline.

**Key facts:**
- This was **optional** and not part of the required Agent Factory assignment.
- The assignment required the mini textbook chapter and process notebook only.
- The Mini Book is a **presentation layer** — it displays the existing chapter content in a web UI.
- No new unsupported educational content was intentionally added.
- All original chapter content (sections, diagrams, flashcards, quiz, revision plan) is preserved faithfully.
- The Predict → Test → Explain guided inquiry structure is maintained in the UI.
