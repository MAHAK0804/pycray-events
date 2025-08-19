# Mini Event Manager (Next.js + Next-Forge Turbo)

This project is a **Mini Event Manager** built using the **Next-Forge Turbo Template**  
(monorepo with Turborepo + pnpm).

It includes a `/events` page where you can add, list, and delete events (client-side only).

---

## 🚀 Tech Stack

- [Next.js (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [pnpm](https://pnpm.io/) (monorepo package manager)
- (Optional) Zustand / React Hook Form — not required

---

## 🛠 Setup & Run

Clone the repo and install dependencies:
pnpm install

Run:
pnpm --filter web dev


## 📂 Path of the Page

- Code location: `/apps/web/app/[locale]/events/page.tsx`
- Accessible at: [http://localhost:3001/events](http://localhost:3001/events)

---

## 📝 Notes / Assumptions

- Built with **Next.js (App Router)** using the **Next-Forge Turbo monorepo** template.
- The `web` app is under `/apps/web` (default app from the template).
- State management is done with `zustand` (no backend, no API routes).
- Events are **stored in-memory only** (reset on refresh).
- Styling is done with **TailwindCSS** for a clean, mobile-friendly UI.
- Requires **pnpm** installed globally (`npm install -g pnpm`).
- Bonus features like localStorage persistence or search are optional and not included in the base implementation.

<img width="1920" height="1080" alt="Screenshot 2025-08-19 100706" src="https://github.com/user-attachments/assets/067bba6f-95e1-431e-a95d-051440659315" />

<img width="1920" height="1080" alt="Screenshot 2025-08-19 100822" src="https://github.com/user-attachments/assets/78bc58ae-0d9e-4657-b156-9ac343079958" />


