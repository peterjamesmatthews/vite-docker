# Vite-Docker

This repository contains sensible configurations to base a new TypeScript React project on.

Such configurations include:
  - Makefile one-liners.
  - Docker Compose profiles for development and production.
  - Dockerfile build stages for excellent caching.
  - Vite configuration for TypeScript React.
  - Linting and formatting provided by Biome and Prettier.

# Usage

## Development

To start developing, simply run:
```sh
make
````

A development server will begin listening on port `80` and will hot reload changes you make.

## Production

To start a production server, simply run:
```sh
make production
```

A nginx server will listen on port `80` and serve the production build of your application.

