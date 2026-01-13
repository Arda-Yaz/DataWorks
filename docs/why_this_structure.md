# Why This Project Is Structured This Way

This file exists purely for future-me.

Not for recruiters.
Not for contributors.
Not as documentation.

Just so I can come back months later and immediately remember
why things are split the way they are.

---

## The One Big Idea

The project is split to keep **thinking**, **experimenting**, and **shipping**
from stepping on each other.

If everything lived together, I’d constantly hesitate:
“Is this safe to touch?”
“Is this production code or just an experiment?”

This structure removes that doubt.

---

## Frontend vs Backend

They are separate because they solve different problems.

- Frontend = what the user sees, clicks, and navigates.
- Backend = data handling, logic, ML prep, and rules.

Keeping them apart means:
- UI changes don’t risk breaking logic.
- Backend changes don’t force UI rewrites.

If this split didn’t exist, every change would feel risky and coupled.

---

## Frontend (`src/`)

The frontend is organized around **clarity, not cleverness**.

- There’s one obvious entry point.
- Pages represent screens/routes.
- Components are reusable building blocks.
- API logic lives in exactly one place.

This prevents:
- Fetch logic leaking everywhere.
- Giant files that “do everything”.
- Guessing where new code should go.

If I didn’t do this, frontend changes would slowly turn into cleanup tasks.

---

## Backend (`app/`)

The backend is split by responsibility, not by feature hype.

- `main.py` answers: “Where does the app start?”
- `api/` handles HTTP only.
- `core/` holds real logic.
- `models/` define data shapes.
- `config.py` centralizes settings.

This keeps:
- Routes thin
- Logic testable
- Config predictable

Without this, every new feature would add more mess to existing endpoints.

---

## Docs, Notebooks, Scripts

These folders exist to **protect the main codebase**.

- `docs/` holds decisions and reasoning.
- `notebooks/` holds exploration and dead ends.
- `scripts/` holds one-off or repeatable tasks.

They prevent:
- “Why did I do this?” moments.
- Experiments accidentally becoming dependencies.
- Important commands being lost in terminal history.

If these didn’t exist, I’d slowly rebuild the same knowledge from scratch.

---

## Final Reminder to Future-Me

This structure isn’t about being perfect.
It’s about making future changes **feel safe**.

If something feels hard to place,
that’s a signal to either refine the structure
or question the feature — not to dump it somewhere random.
