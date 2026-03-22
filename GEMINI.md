# Anna Kupiec - Psychotherapy Project

This is a professional psychotherapy portfolio website for Anna Kupiec, based in Poznań, Poland. The project is a modern Next.js 15+ application designed with a focus on trauma therapy, EMDR, and NARM.

## Project Overview

- **Purpose:** Professional portfolio and service landing page for a psychotherapist.
- **Key Features:**
    - Therapeutic methods (EMDR, NARM).
    - Specialization and symptoms sections.
    - Info tiles for psychotherapy benefits.
    - Pricing and contact sections.
    - Responsive design with polished animations.
- **Main Technologies:**
    - **Framework:** [Next.js 15+](https://nextjs.org/) (App Router).
    - **Language:** [TypeScript](https://www.typescriptlang.org/).
    - **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with Vanilla CSS.
    - **Animations:** [Framer Motion](https://www.framer.com/motion/) (v12).
    - **Icons:** [Lucide React](https://lucide.dev/).
    - **API Integration:** `@google/genai` (Gemini API).

## Project Structure

- `app/`: Contains the Next.js App Router pages and global styles.
    - `metody-pracy/`: A separate page for therapeutic methods.
- `components/`: Organized UI components.
    - `sections/`: Full-page sections (Hero, About, Contact, etc.).
    - `ui/`: Reusable, lower-level UI components (e.g., `FadeIn`).
- `hooks/`: Custom React hooks (e.g., `use-mobile`).
- `lib/`: Utility functions (e.g., `clsx` and `tailwind-merge` helpers).
- `public/`: Static assets like images and branding.

## Building and Running

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Commands

| Command | Description |
| :--- | :--- |
| `npm install` | Install project dependencies. |
| `npm run dev` | Start the development server at `http://localhost:3000`. |
| `npm run build` | Build the application for production. |
| `npm run start` | Start the production server after building. |
| `npm run lint` | Run ESLint to check for code quality issues. |
| `npm run clean` | Clean the `.next` build cache. |

### Configuration

- Create a `.env.local` file based on `.env.example`.
- Set the `GEMINI_API_KEY` for AI features.

## Development Conventions

- **Component-Driven:** Sections are located in `components/sections/` to keep `app/page.tsx` clean.
- **TypeScript:** Strict typing is used throughout the project.
- **Styling:** Utility-first Tailwind CSS, with custom configuration in `next.config.ts` and `postcss.config.mjs`.
- **Animations:** Use `motion` for consistent entry and interactive animations.
- **Localization:** The site is primary in Polish (`pl`).
