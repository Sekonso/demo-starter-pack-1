# Starter pack product demo

Demo page of starter pack product

A simple Astro-based landing page for a coffee shop or café.

## Features

- Astro with Tailwind CSS
- Responsive layout for desktop and mobile
- Hero section with background image and overlay
- Sections for about, featured menu, gallery, and reviews
- Reusable layout and container components

## Requirements

- Node.js 22.12 or newer
- npm

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local preview in your browser:
   ```text
   http://localhost:4321
   ```

## Project Scripts

- `npm run dev` — start the local development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally

## Project Structure

```text
src/
  components/
    *all components here
  layouts/
    *all layouts here
  pages/
    index.astro
    _sections/
      * all section of single landing page here
  styles/
    global.css
  assets/
    images/
```

## How to Customize the Site

### 1. Change colors and theme

The main theme colors are defined in `src/styles/global.css`.

You can edit values such as:

- `--color-background`
- `--color-foreground`
- `--color-brand`
- `--color-brand-secondary`
- `--color-background-secondary`

### 2. Change fonts

Fonts are configured in `astro.config.mjs`.

You can switch the display font and body font by updating the `fonts` section there.

### 3. Update navigation links

The top navigation and footer navigation are defined in the relevant components:

- `src/components/Navbar.tsx`
- `src/components/Footer.astro`
