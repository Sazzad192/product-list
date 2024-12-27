# Frontend Task - Product Listing with Cart Functionality

## Project Overview

This project implements a product listing and cart functionality UI based on the provided [Figma design](https://www.figma.com/design/x9iVC44evHLzfEUXrewfBH/Frontend-Task?node-id=0-278&t=Z4HcSkxtxoTfK9Nb-0). The application focuses on a clean, user-friendly interface and includes features such as product listing, cart management, pagination, search, and dark mode.

Live demo: [Click Here](https://task-product-list.vercel.app/)

---

## Features

### Core Features

1. **Fetch and Display Products**

   - Products are fetched from the [DummyJSON API](https://dummyjson.com/docs/products) and displayed in a clean, responsive list format.

2. **Add to Cart Functionality**

   - Users can add products to the cart, with the cart state dynamically updating to reflect the "Added in Cart" status.

3. **State Management**
   - Cart functionality is managed using **MobX** for a seamless and reactive user experience.

### Additional Enhancements

1. **Dark Mode Support**

   - A fully functional dark mode toggle has been implemented for a better user experience in low-light environments.

2. **Pagination**

   - Pagination is implemented to load and navigate products in chunks, improving performance and user navigation.

3. **Search and Filter**

   - Users can search for products by name and filter them by category for easier navigation.

---

## Tech Stack

### Frontend

- **React 19**: Core library for building the UI.
- **Next.js 15**: Framework for server-side rendering and static site generation.
- **Tailwind CSS**: For responsive and customizable styling.

### State Management

- **MobX**: For handling reactive global state.

### API Handling

- **Axios**: For making API requests.
- **React Query**: For fetching, caching, and synchronizing server state in React applications.

### Utility Libraries

- **React Icons**: For implementing scalable and consistent icons.
- **React Select**: For advanced dropdown components with custom styles.
- **clsx & tailwind-merge**: For conditional class names and Tailwind class management.
- **use-debounce**: For debouncing user inputs (e.g., search functionality).

### Developer Tools

- **React Query Devtools**: For debugging API calls and query states.
- **PostCSS**: For advanced CSS transformations.
