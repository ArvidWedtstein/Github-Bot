# Github Bot

Project under construction

https://octokit.github.io/rest.js/


## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t github .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> github
```

## Contributing

If you have suggestions for how github could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2022 ArvidWedtstein <71834553+ArvidWedtstein@users.noreply.github.com>
