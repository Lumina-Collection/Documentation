# Lumina Collection Documentation

The content of this repository is published to [docs.luminacollection.net](docs.luminacollection.net) for viewing.

## Getting Started

How to get docs running on your local machine for development.

### Prerequisites

- [node](https://nodejs.org)
- [yarn](https://yarnpkg.com/getting-started/install)

### Local Development

1. Clone the repository. If you plan to make changes, create a fork first!

```bash
$ git clone https://github.com/Lumina-Collection/Documentation
```

2. Install all required dependencies.

```bash
$ yarn
```

3. Start the development server

```bash
$ yarn dev
```

This will start a local development server and open a browser window. The majority of changes will
be instantly reflected live without the need to restart the development server or reload the page in
your browser. Edit away!

### Building

```bash
$ yarn build
```

This command builds a production-ready deployment into the `build` directory. These files are ready
to be hosted on any static content server.

## License

The Lumina Collection Documentation (e.g., `.md` files in the `/docs` folder) is
[CC-BY-SA-4.0](https://github.com/PaperMC/docs/blob/main/LICENSE-docs) licensed.

The supporting code is
[BSD-2-Clause](https://github.com/PaperMC/docs/blob/main/LICENSE) licensed.
