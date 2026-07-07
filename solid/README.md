# The 5 SOLID architecture principles

> The SOLID principles explained through concrete examples: spot the design smells (rigidity, fragility, immobility, viscosity, needless complexity, needless repetition, opacity) and apply the five principles to keep software easy to change.

View the presentation online:

- [English version](https://xballoy.github.io/presentations/solid/en/)
- [French version](https://xballoy.github.io/presentations/solid/fr/)

## Development

From the repository root:

- `pnpm install`
- `pnpm dev:solid`
- visit [http://localhost:3030](http://localhost:3030)

`pnpm dev:solid` opens the French deck. To open a specific language directly:

- `pnpm --filter solid dev:en`
- `pnpm --filter solid dev:fr`

The demo lives in [`demo`](./demo). From the repository root, run `pnpm --filter @xballoy/presentation-solid test`.

## License

The presentation and its demo code are licensed under [MIT](../LICENCE.md) by Xavier Balloy.
