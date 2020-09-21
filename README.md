# list-channels-bot

A very simple discord bot to list channels in a server

## Installation

### Using [Podman](https://podman.io/) (recommended)

```bash
podman pull ghcr.io/yamboy1/list-channels-bot
```

### Using [Docker](https://docker.com)

```bash
docker pull ghcr.io/yamboy1/list-channels-bot
```

### Manual Install

Ensure you have a recent version of [nodejs](https://nodejs.org) installed, and [yarn](https://classic.yarnpkg.com/).

```bash
git clone https://github.com/Yamboy1/list-channels-bot/
cd list-channels-bot
yarn
```

## Running the bot

### Podman

```bash
podman run -it list-channels-bot
```

### Docker

```bash
docker run -it list-channels-bot
```

### Manual Install

Ensure you are in the `list-channels-bot` directory from before.

```
node index.js
```

## Command

**!list** - Create a list of channels in the server

Enjoy the bot :)

## License

This bot is licensed under the [MIT License](LICENSE)
