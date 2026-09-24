# Project 4: A Mini-Textbook (Newton's Third Law of Motion)

## Project Purpose
This project is a process-driven AI learning project focused on **directing, questioning, evaluating, and correcting AI** to produce high-quality, pedagogical educational content. Rather than accepting default AI outputs, this project documents the iterative process of steering an AI from weak initial prompts to a complete, pedagogically sound physics mini-textbook chapter.

## Topic & Target Audience
- **Topic:** Newton's Third Law of Motion ($\vec{F}_{\text{A on B}} = -\vec{F}_{\text{B on A}}$)
- **Target Audience:** High school students (Introductory / Conceptual Physics)

## Learning & Teaching Approach
- **Selected Approach:** **Option C — Predict, Test, Explain (Problem-Solving / Inquiry)**
  - Encourages active learning by prompting students to make predictions before explanations are revealed.
- **Rejected Approach:** **Option B — Force Pairs on Paper (Diagram-Centered)**
  - *Rejection Reason:* A diagram-centered approach may feel too dry at the beginning and may be harder to understand before the core concept is intuitive.
- **Selected Outline:** **Outline 2 — Guided Inquiry (Prediction + Light Visual Support)**

## Chapter Structure & Contents (`chapter/draft.md`)
1. **The Skateboard Mystery:** Stop & Predict prompt.
2. **Testing the Prediction:** Observation + light visual ASCII force diagram.
3. **Formalizing Newton's Third Law:** Definition, notation breakdown, and simultaneity callout.
4. **The Big Misconception:** Why action-reaction forces do not cancel out (forces act on *different objects*).
5. **The Bug vs. The Windshield:** Equal forces with unequal accelerations ($a = F/m$) + collision diagram.
6. **Conceptual Checkpoint:** Self-reflection questions.
7. **Chapter Recap:** Summary of core principles.
8. **Flashcards:** 5 key term/concept active recall cards.
9. **Quick Quiz:** 3 multiple-choice questions with full answer keys and explanations.
10. **7-Day High School Revision Plan:** Spaced study schedule.

## Evaluation & Quality Control
- **Rubric Evaluation (`evaluation/rubric.md`):** Assessed Clarity (8/10), Accuracy (9/10), Age-fit (8/10), and Usefulness for Revision (4/10 initial, leading to targeted improvements).
- **Improvements Applied (`evaluation/improvements.md`):** Added ASCII visual support, notation explanations, simultaneity clarifications, recap, flashcards, quiz, and 7-day revision schedule.
- **Fact-Check (`evaluation/fact-check.md`):** 8 core claims checked (8 Accepted, 0 Rejected, 0 Modified, 0 Needs checking).
- **Final QA (`evaluation/final-qa.md`):** Complete requirement audit showing **COMPLETE**.

## Fact-Check & Sources Status
- **Process History:** No external sources were used during early drafting phases. For the final submission verification stage, two authoritative external sources were integrated:
  1. [OpenStax College Physics 2e, Section 4.4](https://openstax.org/books/college-physics-2e/pages/4-4-newtons-third-law-of-motion-symmetry-in-forces) (Symmetry in forces, interaction pairs, and system boundaries).
  2. [NASA Glenn Research Center](https://www.grc.nasa.gov/www/k-12/airplane/newton3.html) (Newton's Third Law and rocket thrust in a vacuum).
- **Claim 8 Resolution:** Successfully verified via NASA Glenn Research Center documentation; all 8 claims in the chapter are accepted.

## Student Reflection
- The personal reflection has been integrated into Section 18 of `process/process-notebook.md`, capturing reflections on prompt evolution, human steering, rubric evaluations, and human judgment in AI collaboration.

---

## Optional Self-Added Enhancement: Interactive Mini Book

After completing all required assignment deliverables, an interactive web-based **Mini Book UI** was independently added as an optional enhancement to make the completed chapter more polished, interactive, and presentable.

**Key distinctions:**
- The Agent Factory assignment required the mini textbook chapter (`chapter/draft.md`) and the process notebook (`process/process-notebook.md`).
- The interactive Mini Book UI (`chapter/mini-book.html`) was **NOT** a required assignment option.
- It was independently added as a self-directed enhancement after all assignment work was complete.
- The UI is a **presentation layer** over the existing chapter — it displays the same educational content in an interactive web format.
- No new educational content, physics claims, or unsupported facts were intentionally added beyond what exists in the verified chapter.
- The UI respects the project's Predict → Test → Explain guided inquiry structure.
- All original chapter sections, flashcards, quiz questions, and the 7-day revision plan are preserved faithfully.

---

## Final Status
**COMPLETE** — All requirements met, drafts improved, claims verified with genuine sources, and process documented.

---

## Directory Layout
```
project-4/
├── README.md                          # Project overview and status
├── notes/
│   ├── topic.md                       # Topic definition and learning objectives
│   ├── decisions.md                   # Pedagogical decisions and rejection reasons
│   └── sources.md                     # Source record & verified external citations
├── prompts/
│   ├── 01-weak-prompt.md              # Initial open-ended prompt
│   ├── 02-context-prompt.md           # High school context-aware prompt
│   ├── 03-options-prompt.md           # 3 original pedagogical options
│   ├── 04-feedback.md                 # Decision: Option C chosen, Option B rejected
│   ├── 05-revised-outlines.md         # 3 revised inquiry outlines
│   └── 06-final-outline.md            # Final choice: Outline 2 (Guided Inquiry)
├── chapter/
│   ├── draft.md                       # Complete enhanced mini-textbook chapter
│   └── mini-book.html                 # Optional: Interactive Mini Book UI
├── evaluation/
│   ├── rubric.md                      # 4-metric pedagogical evaluation
│   ├── improvements.md                # Record of chapter improvements & fact-check outcomes
│   ├── fact-check.md                  # 8-claim fact-check table
│   └── final-qa.md                    # Comprehensive assignment QA audit
└── process/
    └── process-notebook.md            # 18-stage process record & student reflection
```
