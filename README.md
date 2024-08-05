# Mr Tee

Welcome to Mr Tee Luxury Store an ecommerce platform specializing in sales of high quality fashionable goods. Our mission is to provide you with convenient, high-quality designers that suits your needs.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication**: Secure sign-up and login for customers.
- **Product Listings**: Browse a wide variety of products available in different sizes.
- **Order Management**: Place, view, and manage orders seamlessly.
- **Responsive Design**: Fully responsive design to ensure usability on all devices.
- **Admin Dashboard**: Manage products, orders, and customer details from an intuitive admin interface.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Steps

1. **Clone the repository**

   ```sh
   git clone https://github.com/deasytech/mrtee.git
   cd mrtee
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up environment variables**

   Create a .env.local file in the root of your project and add the following:

   ```sh
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_URL=/dashboard
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_URL=/dashboard

   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
   NEXT_PUBLIC_CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=

   NEXT_PUBLIC_CLOUDINARY_SECURE_DISTRIBUTION=

   MONGODB_URI=

   NEXT_PUBLIC_API_URL=http://localhost:3001/api
   NEXT_PUBLIC_STORE_URL=http://localhost:3001

   NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY=
   NEXT_PUBLIC_STRIPE_TEST_SECRET_KEY=
   NEXT_PUBLIC_STRIPE_LIVE_PUBLISHABLE_KEY=

   STRIPE_LIVE_SECRET_KEY=
   STRIPE_WEBHOOK_SECRET=
   ```

4. **Run the development server**

   ```sh
   npm run dev
   ```

   Open http://localhost:3000 to view it in your browser.

## Usage

### Browsing Products

- Navigate through our collection categories to find your favorite product.
- View product details, including price, description, and available sizes.

### Placing an Order

- Add desired product to your cart.
- Proceed to checkout and provide your shipping information.
- Review your order and complete the payment process.

### Managing Orders

- View your order history in your account dashboard.
- Track the status of your current orders.

## API Documentation

Our API allows developers to interact with the Mr Tee platform programmatically. Below is a brief overview of available endpoints:

### Products

- GET **`/api/products`**: Retrieve a list of all products.
- GET **`/api/products/:id`**: Retrieve details of a specific product.

### Orders

- POST **`/api/orders`**: Create a new order.
- GET **`/api/orders/:id`**: Retrieve details of a specific order.

### Authentication

- POST **`/api/auth/signup`**: Register a new user.
- POST **`/api/auth/login`**: Authenticate a user.

For detailed API documentation, please refer to the [API Docs](https://nextjs.org/docs/pages/building-your-application/routing/api-routes).

### Contributing

We welcome contributions from the community. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with a descriptive message.
4. Push your changes to your fork and submit a pull request.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

### Contact

For any inquiries, please contact us at:

- Email: [deasytechsolutions](mailto:deasytechsolutions@gmail.com)
- Twitter: [@deasytechsolutions](https://instagram.com/deasytechsolutions)

Thank you for visiting Lexi Kitchen. Enjoy your meals!
