# list-channels-bot

*View this on [Github Packages](https://github.com/users/Yamboy1/packages/container/package/list-channels-bot)*

A very simple discord bot to list channels in a server

## Installation

Obtain your bot token from https://discord.com/developers/applications. This will be needed when running the bot.

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

### Docker

```bash
docker run -it list-channels-bot -e TOKEN=your_token_here
```

### Manual Install

Ensure you are in the `list-channels-bot` directory from before.

```
TOKEN=your_token_here node index.js
```

## Commands

**!list** - Create a list of channels in the server

Enjoy the bot :)

## License

This bot is licensed under the [MIT License](LICENSE)

## Credits

Thanks to [brockbreacher](https://github.com/brockbreacher) for the idea for this bot.
