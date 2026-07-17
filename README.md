# Product Builder Dashboard

A React + Vite dashboard for browsing product cards and opening a modal to add a new product. The app uses Tailwind CSS for styling and Headless UI for the modal dialog.

## Features

- Responsive product grid
- Product cards with image, title, description, price, and action buttons
- Add Product modal powered by Headless UI
- TypeScript-based data and component structure

## Tech Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS
- Headless UI

## Getting Started

### Prerequisites

- Node.js 18 or newer
- pnpm

### Install dependencies

```bash
pnpm install
```

### Run the development server

```bash
pnpm dev
```

### Build for production

```bash
pnpm build
```

### Preview the production build

```bash
pnpm preview
```

### Lint the project

```bash
pnpm lint
```

## Project Structure

- `src/App.tsx` renders the dashboard and modal trigger
- `src/components/` contains reusable UI and product components
- `src/data/` stores the sample product and form data
- `src/assets/images/` contains the local product images

## Notes

- The current UI uses mock product data.
- The modal and form controls are wired for presentation and can be extended with real create, edit, and delete flows.
