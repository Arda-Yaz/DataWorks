# Project Roadmap (Self-Guided)

This roadmap exists so I can move forward **without asking for help every step**.
It’s not a promise, not a deadline, and not a spec.
It’s a sequence that keeps me unblocked.

The rule:
Finish one phase before thinking too much about the next.

---

## Phase 0 – Ground Rules (Before Writing Code)

Goal: Prevent overthinking and architecture paralysis.

- I will not chase perfection.
- I will not refactor early.
- I will not design for imaginary users.
- I will build for *myself first*.

If something feels unclear, I pick the simplest option and move on.

---

## Phase 1 – Backend Skeleton (Make It Exist)

Goal: Have a running backend that does almost nothing.

Tasks:
- Create `backend/app/main.py`
- Start the server (FastAPI or equivalent)
- Add a `/health` or `/ping` endpoint that returns `{ "ok": true }`

Done when:
- I can run the backend.
- I can hit one endpoint and get a response.

No ML. No data logic. Just existence.

---

## Phase 2 – Frontend Skeleton (Make It Visible)

Goal: Have a frontend that talks to the backend.

Tasks:
- Create the React app inside `frontend/`
- Add one page that loads
- Call the backend `/health` endpoint from the browser

Done when:
- Browser shows *something*
- Frontend ↔ backend connection works

Ignore styling. Ignore structure debates.

---

## Phase 3 – Data In, Data Shape

Goal: Load a dataset and understand its basic shape.

Tasks:
- Backend:
  - Add file upload endpoint
  - Load dataset into memory
  - Extract:
    - row count
    - column names
    - column types
- Frontend:
  - Upload file
  - Show metadata only (no charts yet)

Done when:
- I can upload a dataset
- I can see its basic structure

This is the first *real* functionality.

---

## Phase 4 – “Is This Worth Analyzing?” Layer

Goal: Answer the first real question of the tool.

Tasks:
- Backend:
  - Missing values per column
  - Basic stats for numeric columns
- Frontend:
  - One page showing summaries
  - Simple tables or text output

Done when:
- I can look at a dataset and quickly judge its quality
- No ML yet

If this phase works, the project already has value.

---

## Phase 5 – ML Readiness (Not Training)

Goal: Say *whether* ML makes sense, not run it.

Tasks:
- Backend:
  - Detect label column
  - Check class imbalance
  - Flag obvious issues
- Frontend:
  - Show warnings / readiness indicators

Done when:
- The system explains constraints instead of making decisions
- User still chooses everything

---

## Phase 6 – Image Tools (Optional Track)

Goal: Handle visual data separately.

Tasks:
- Backend:
  - Image loading
  - Resize / augmentation utilities
- Frontend:
  - Simple preview + options

Done when:
- I can prepare images without writing scripts manually

This phase can be skipped or delayed.

---

## Phase 7 – Clean Pass (Only Once)

Goal: Make the code readable, not clever.

Tasks:
- Rename confusing files
- Move misplaced logic
- Add minimal comments where future-me would pause

No new features here.

---

## Phase 8 – Documentation Pass

Goal: Lock in understanding.

Tasks:
- Update:
  - `docs/why_this_structure.md`
  - `docs/decisions_log.md`
- Write down:
  - What I intentionally did NOT build
  - What surprised me

---

## Definition of “Finished”

This project is finished when:
- It solves *my* problem
- I can explain it without hand-waving
- Adding features feels optional, not necessary

Anything after this is iteration, not completion.

---

## Final Reminder

Momentum > Elegance  
Working > Perfect  
Clear > Clever  

If I’m stuck, I move forward anyway.
