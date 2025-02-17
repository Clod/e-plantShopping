# E-Plant Shopping - Reference & Educational Project

## Overview

This project is a simple e-commerce application for purchasing plants. It's built using React, Redux Toolkit, and CSS. This project is intended for reference and educational purposes only.

<a href="https://clod.github.io/e-plantShopping/" target="_blank">Live Demo</a>

## Architecture

The project follows a component-based architecture with a Redux store for managing the cart state.

### Key Components:

*   **App.jsx:** The main application component that serves as the entry point. It manages the landing page and the product list.
*   **ProductList.jsx:** Displays a list of plants, categorized by type. It allows users to add plants to their cart.
*   **CartItem.jsx:** Displays the items in the cart, allows users to adjust quantities, and calculates the total cost.
*   **AboutUs.jsx:** Displays information about the fictional Paradise Nursery.

### Redux Store:

*   **store.js:** Configures the Redux store using Redux Toolkit.
*   **CartSlice.jsx:** Defines the Redux slice for managing the cart state, including actions for adding, removing, and updating items in the cart.

### State Management

Redux Toolkit is used for state management. The `CartSlice` manages the cart items and their quantities. The `store.js` configures the Redux store with the `cartReducer`.

### Features:

*   Browse plants by category (Air Purifying, Aromatic Fragrant, Insect Repellent, Medicinal, Low Maintenance).
*   Add plants to the cart.
*   View and manage items in the cart.
*   Calculate the total cost of items in the cart.
*   About Us section with information about the fictional Paradise Nursery.

## File Structure

```
e-plantShopping/
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
├── public/
│   └── vite.svg
└── src/
    ├── AboutUs.css
    ├── AboutUs.jsx
    ├── App.css
    ├── App.jsx
    ├── CartItem.css
    ├── CartItem.jsx
    ├── CartSlice.jsx
    ├── index.css
    ├── main.jsx
    ├── ProductList.css
    ├── ProductList.jsx
    ├── store.js
    └── assets/
        └── react.svg
```

## License

This project has no license. It is intended for reference and educational purposes only.
