# API Mock Server

A lightweight mock API server for development and testing purposes.

## Features

- Simple REST API endpoints
- CORS support
- JSON responses
- Easy to configure and extend

## Installation

```bash
npm install
```

## Usage

Start the server:

```bash
npm start
```

For development with auto-reload:

```bash
npm run dev
```

The server runs on port 3000 by default.

## Available Endpoints

- `GET /` - Server info and endpoint list
- `GET /api/users` - Sample users data
- `GET /api/posts` - Sample posts data (with 500ms delay)
- `POST /api/users` - Create new user

## Configuration

The server is configured via `config.json`. You can:

- Set custom port and CORS settings
- Add request logging
- Configure global or per-endpoint delays
- Define custom endpoints with different HTTP methods

## Examples

Check the `examples/` folder for sample configurations:

- `ecommerce.json` - E-commerce API mockup
- `social.json` - Social media API mockup

To use an example:

```bash
cp examples/ecommerce.json config.json
npm start
```

## License

MIT