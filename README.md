# Nuxt Frontend for Blog Web App

This repository is part of a larger project that demonstrates a blog web application using Laravel, Cloudflare Workers, Nuxt, Vue, and TailwindCSS. This specific repository contains the Nuxt.js frontend application.

## Role in the Larger Project

When visitors visit the blog web application, they will first load this Nuxt app. This web app is server-side rendered to improve SEO and the preview experience of pages. This web app is hosted on Cloudflare Pages, leveraging the Cloudflare Global Network to improve page load times and overall performance. The most recent list of blog articles is fetched from the Cloudflare Worker cache to keep latency low and data near the client.

## Why Build This Part?

The Nuxt.js frontend is crucial for providing an engaging and responsive user interface. We chose Nuxt.js for several reasons:

1. **SEO-Friendly**: Nuxt.js offers server-side rendering (SSR), which improves SEO and social share/preview experience.

2. **Developer Experience**: Nuxt.js provides an excellent developer experience with its modular architecture, making it easy to add new features and maintain the codebase.

3. **Performance**: By leveraging Cloudflare Pages, the Nuxt.js frontend is served from the edge, ensuring fast load times and a smooth user experience for visitors across the globe.

## Technologies Used

- Nuxt.js
- Vue.js
- Tailwind CSS

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rptrainor/shaan-nuxt.git
   cd shaan-nuxt
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Copy the example environment file and set up your environment variables:**

   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your API endpoint and other configuration details.

4. **Run the development server:**

   ```bash
   pnpm run dev
   ```

Your Nuxt.js frontend should now be running at `http://localhost:3000`.

## Available Scripts

- `pnpm run dev` - Start the development server.
- `pnpm run deploy` - Deploy the application for production.

## Structure

The main structure of the project is as follows:

- `pages/` - Contains the application's views and routes.
- `components/` - Reusable Vue components.
- `layouts/` - Layouts for structuring the views.
- `plugins/` - Plugins to extend the functionality of the app.
- `public/` - Static files like images, icons, and fonts.
- `nuxt.config.js` - Nuxt.js configuration file.

## Contributing

If you would like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License.
