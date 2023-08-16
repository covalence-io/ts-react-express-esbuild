# TypeScript React Express ESBuild Boilerplate

Welcome to the TypeScript React Express ESBuild boilerplate, tailored for budding developers learning to craft MERN CRUD applications. However, this boilerplate is also ideal for anyone aiming to switch gears and utilize ESBuild over the conventional webpack.

# TypeScript React Express ESBuild Boilerplate

-   [Overview](#overview)
-   [Features](#features)
-   [Getting Started](#getting-started)
    -   [1. Clone the Repository](#1-clone-the-repository)
    -   [2. Install Dependencies](#2-install-dependencies)
    -   [3. Running in Development](#3-running-in-development)
-   [Directory Structure](#directory-structure)
    -   [Top-Level Overview](#top-level-overview)
-   [YouTube Companion Videos](#youtube-companion-videos)
-   [Why ESBuild over Webpack?](#why-esbuild-over-webpack)
-   [Contributions](#contributions)

## Overview

This boilerplate is designed with simplicity and efficiency in mind. It leverages ESBuild, known for its speed and ease of configuration, to bundle your JavaScript and styles. It provides a structured starting point for both client and server development using popular technologies like React, Express, and TypeScript.

## Features

-   **React**: For crafting intuitive UIs.
-   **Express**: A minimalist web framework for building the server-side.
-   **TypeScript**: Bringing strong typing to JavaScript, enhancing maintainability and developer experience.
-   **ESBuild**: A revolutionary fast JavaScript bundler and minifier.
-   **Bootstrap SASS**: Empower your projects with the world's most popular CSS framework, now in its SASS variant. Tailor designs seamlessly with variables and mixins.

    _Note_: While this boilerplate uses Bootstrap SASS, the flexibility of ESBuild means it's straightforward to switch plugins. For instance, you can easily incorporate PostCSS with TailwindCSS or any other preferred styling solution.

## Getting Started

1. **Clone the Repository**

    ```sh
    git clone https://github.com/covalence-io/ts-react-express-esbuild.git
    cd ts-react-express-esbuild
    ```

2. **Install Dependencies**

    ```sh
    npm install
    ```

3. **Running in Development**
   Start both client and server in development mode:
    ```sh
    npm run dev
    ```

## Directory Structure

Understanding the project's structure is crucial for efficiently navigating and utilizing this boilerplate. Here's a detailed breakdown of the directory tree:

```
dist/
├─ server.js
esbuild/
├─ client.dev.mjs
├─ server.dev.mjs
node_modules/
public/
├─ static/
│  ├─ bundle.js
├─ index.html
src/
├─ client/
│  ├─ styles/
│  │  ├─ app.scss
│  ├─ App.tsx
│  ├─ index.tsx
│  ├─ tsconfig.json
├─ server/
│  ├─ server.ts
│  ├─ tsconfig.json
.gitignore
nodemon.json
package-lock.json
package.json
README.md
tsconfig.json
```

### Top-Level Overview

-   **`dist/`**: The output directory where your server-side TypeScript files get compiled to JavaScript.

    -   `server.js`: The compiled server-side entry point. **Note**: This file and the entire `dist/` directory are not tracked on GitHub as they represent compiled production code.

-   **`esbuild/`**: Houses configuration files for the ESBuild bundler.

    -   `client.dev.mjs`: ESBuild configuration for client-side development.
    -   `server.dev.mjs`: ESBuild configuration for server-side development.

-   **`node_modules/`**: Standard directory for all installed npm packages.

-   **`public/`**: Serves static files and the main `index.html` for your React application.

    -   `static/`: Contains bundled output files for the client side.
        -   `app.js`: Bundled JavaScript for the client. **Note**: The bundled `app.js` is not tracked on GitHub as it is a dynamically generated file based on the source code.
    -   `index.html`: The main HTML file that serves as a shell for your React app.

-   **`src/`**: The core of your application's source code, both client-side and server-side.

    -   `client/`: Contains all client-side React components and styles.
        -   `styles/`: Directory for all your SCSS files.
            -   `app.scss`: Main style file for your application.
        -   `App.tsx`: The main React component for your application.
        -   `index.tsx`: Client-side entry point.
        -   `tsconfig.json`: TypeScript configuration specific to the client side.
    -   `server/`: Houses server-side logic using Express.
        -   `server.ts`: Entry point for the server.
        -   `tsconfig.json`: TypeScript configuration specific to the server side.

-   **`.gitignore`**: Lists files and directories that should not be tracked by Git. This includes the compiled outputs like those in the `dist/` directory and dynamically generated bundles like `app.js`.

-   **`nodemon.json`**: Configuration for Nodemon, a utility that monitors changes in your server code and automatically restarts the server.

-   **`package-lock.json`**: Automatically generated file that describes the exact tree that was generated in `node_modules` as a result of running `npm install`.

-   **`package.json`**: Lists package dependencies and contains various metadata about the project, like scripts.

-   **`README.md`**: This very file, offering a guide to the project.

-   **`tsconfig.json`**: The root TypeScript configuration file.

## YouTube Companion Videos

I coded this boilerplate out across a few YouTube videos if you want the from-scratch-to-end-product building of this repo. Watch and subscribe!
[https://youtu.be/3tEUVpyRYTg](https://youtu.be/3tEUVpyRYTg)

## Why ESBuild over Webpack?

Webpack has been the go-to bundler for many projects over the years. However, ESBuild brings in significant speed improvements due to its Go-based architecture. This makes the build and development processes much faster, enhancing developer experience, especially in larger projects. This boilerplate is meant to introduce developers to this efficient tool and encourage exploration beyond traditional tools.

## Contributions

Feel free to raise issues, send pull requests, or provide feedback to improve this boilerplate. We welcome collaboration and suggestions to make this a more effective learning tool for our students and the community.
