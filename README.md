# E-Shopp Product Catalog

**Live Demo:** <https://e-com-product-catalog.vercel.app>

------------------------------------------------------------------------

## Overview

E-Shopp is a **React + Tailwind CSS** product catalog application.\
It provides a responsive interface for browsing products, searching,
paginating, and managing a shopping cart with persistent state across
sessions.

This project is structured as a starting point for an e-commerce
front-end, focusing on clean UI, reusable components, and scalable state
management.

------------------------------------------------------------------------

## Features

-   **Responsive Product Grid** --- Adaptive layout using Tailwind's
    grid utilities.\
-   **Live Search** --- Instant results displayed in a dropdown as the
    user types.\
-   **Product Details** --- Product detail pages with reviews and ratings\

-   **Pagination** --- Fully styled pagination with active/disabled
    states and ellipses.\
-   **Cart Management**
    -   Add/remove items\
    -   Quantity tracking\
    -   Persistent storage via `localStorage`\
-   **Navbar** --- Includes search input, cart badge, and responsive
    menu.

------------------------------------------------------------------------

## Tech Stack

-   **Framework:** [React](https://react.dev/)\
-   **Build Tool:** [Vite](https://vitejs.dev/)\
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)\
-   **Routing:** [React Router](https://reactrouter.com/)\
-   **State Management:** React Context API + Local Storage persistence

------------------------------------------------------------------------

## Project Structure

    src/
     ├─ components/      # Reusable UI components (Navbar, ProductCard, Pagination, etc.)
     ├─ context/         # Cart context and provider
     ├─ api/             # static mock data provider
     ├─ pages/           # Route-based views (Products, Cart, etc.)
     ├─ assets/          # Static assets
     ├─ App.jsx          # Root application component
     └─ main.jsx         # Entry point

------------------------------------------------------------------------

## Getting Started

1.  Clone the repository:

    ``` bash
    git clone <your_repo_url>
    cd e-com-product-catalog
    ```

2.  Install dependencies:

    ``` bash
    npm install
    ```

3.  Run development server:

    ``` bash
    npm run dev
    ```

4.  Open in browser:

        http://localhost:5173

------------------------------------------------------------------------

## Deployment

This project is deployed on **Vercel**. To deploy your own instance:

1.  Push the repo to GitHub.\
2.  Import the repo into [Vercel](https://vercel.com/).\
3.  Build command: `npm run build`\
4.  Output directory: `dist/`

------------------------------------------------------------------------

## Future Improvements

-   Checkout flow and payment integration\
-   Authentication for user accounts\
-   Backend integration with a product API

------------------------------------------------------------------------
