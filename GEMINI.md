# GEMINI.md - Anna Kupiec Psychotherapy Project

## Project Overview
This project is a modern, responsive, and visually polished professional website for **Anna Kupiec**, a psychotherapist specializing in trauma therapy (EMDR, NARM) based in Poznań, Poland. It is built as a single-page application using **Next.js 15** and **React 19**.

### Main Technologies:
- **Framework:** Next.js 15 (App Router, Standalone output)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4 (utilizing the new `@import "tailwindcss";` pattern)
- **Animations:** Framer Motion (`motion/react`) for scroll-triggered and interactive animations
- **Icons:** Lucide React
- **Typography:** Google Fonts (Cormorant Garamond for serif headings, Montserrat for sans-serif body text)
- **Development:** TypeScript, ESLint

### Project Structure:
- `app/`: Contains the main application routes and layouts.
    - `layout.tsx`: Root layout with SEO metadata and global font configurations.
    - `page.tsx`: The primary single-page landing with all sections.
    - `globals.css`: Tailwind 4 configuration and font imports.
- `components/`: Reusable React components.
    - `sections/`: Main content sections for the landing page (Hero, About, Methods, Specialization, Pricing, Contact, etc.).
    - `ui/`: Shared UI components (e.g., `FadeIn`).
- `lib/`: Utility functions (e.g., `cn` for Tailwind class merging).
- `hooks/`: Custom React hooks (e.g., `use-mobile`).
- `public/`: Static assets (images, icons).

## Building and Running

### Development
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Environment Setup:**
   - Create a `.env.local` file (copying from `.env.example` if available).
   - Set `GEMINI_API_KEY` if AI features are implemented (the dependency `@google/genai` is present but currently unused).
3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production
1. **Build the project:**
   ```bash
   npm run build
   ```
2. **Start the production server:**
   ```bash
   npm run start
   ```

### Other Commands
- **Linting:** `npm run lint`
- **Clean Cache:** `npm run clean`

## Development Conventions

- **Internationalization:** The content is currently in **Polish** (`pl`).
- **Styling:** Use Tailwind CSS 4 classes. Follow the established color palette (primarily `#5A7358` for the signature green and `#FAFAFA` for backgrounds).
- **Components:** Prefer functional components with hooks. Use the `FadeIn` component in `app/page.tsx` for consistent entrance animations.
- **Images:** Remote images are allowed from `picsum.photos`. If adding new domains, update `next.config.ts`.
- **HMR:** Note that `next.config.ts` includes logic to disable HMR via `DISABLE_HMR` environment variable for specific environments (like AI Studio).
- **SEO:** Metadata is centrally managed in `app/layout.tsx`. Ensure any new pages or significant content changes update these tags for Polish search optimization.
