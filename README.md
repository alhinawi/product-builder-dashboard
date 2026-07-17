# Product Builder Dashboard

A modern React + Vite dashboard for browsing product cards and opening a modal to add new products. Built with TypeScript, Tailwind CSS, and Headless UI, this project showcases a clean, responsive product management interface with room to grow into a full CRUD experience.

## Overview

Product Builder Dashboard is designed as a lightweight product catalog UI. It displays products in a responsive grid, supports a modal-based add-product flow, and uses reusable components to keep the codebase organized and easy to extend.

## Features

- Responsive product grid layout
- Product cards with image, title, description, price, and actions
- Add Product modal powered by Headless UI
- TypeScript-based data and component structure
- Tailwind CSS styling for a modern, consistent UI
- Easy-to-extend component architecture

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

### Installation

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

## Usage

- Open the app in your browser after starting the dev server.
- Browse the product cards displayed on the dashboard.
- Use the add-product button to open the modal and view the form flow.
- Extend the form and actions to connect with real create, edit, and delete functionality.

## Project Structure

- `src/App.tsx` renders the dashboard and modal trigger
- `src/components/` contains reusable UI and product components
- `src/data/` stores the sample product and form data
- `src/assets/images/` contains the local product images

## Data and UI Notes

- The current UI uses mock product data.
- The modal and form controls are wired for presentation.
- The structure is ready to be extended with API-backed product management.

## Future Improvements

- Connect the product form to a backend API
- Add create, edit, and delete product flows
- Add form validation and error handling
- Persist products with local storage or a database
- Add filtering, sorting, and search
- Include screenshots or a demo GIF in this README

## Contributing

Contributions are welcome. If you want to improve the dashboard, consider opening an issue or submitting a pull request with your changes.

## License

Add your preferred license here if the project should be open source.
