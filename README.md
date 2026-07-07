# Presentations

A collection of Xavier Balloy's technical presentations.

| Presentation | Language | Folder |
| --- | --- | --- |
| Managing Technical Debt with AI | English / Français | [`ai-tech-debt`](./ai-tech-debt) |
| The 5 SOLID architecture principles | English / Français | [`solid`](./solid) |
| Opaque Types | English / Français | [`opaque-types`](./opaque-types) |

## Development

This is a [pnpm](https://pnpm.io/) workspace. Each presentation shares the same tooling version through the workspace catalog.

- `pnpm install`
- `pnpm dev:ai-tech-debt` - start the AI technical debt talk
- `pnpm dev:solid` - start the SOLID talk
- `pnpm dev:opaque-types` - start the opaque types talk

Each presentation opens at [http://localhost:3030](http://localhost:3030).

The runnable example code for a presentation lives in its `demo` folder.

## License

Licensed under [MIT](./LICENCE.md). Individual presentations may include demo code under their own license. See each `demo` folder.
