<!-- Sandworm Logo -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="logo-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="logo-light.png">
  <img alt="Sandworm Audit" src="logo-dark.png" width="478">
</picture>

<!-- A spacer -->
<p>&nbsp;</p>

Beautiful Security & License Compliance Reports For Your App's Dependencies 🪱

## Summary

- Free & open source command-line tool
- Works with any modern JavaScript package manager
- Scans your project & dependencies for vulnerabilities, license, and misc issues
- Supports marking issues as resolved
- Supports [custom license policies](https://docs.sandworm.dev/audit/license-policies)
- [Configurable fail conditions](https://docs.sandworm.dev/audit/fail-policies) for CI / GIT hook workflows
- Outputs:
  - JSON issue & license usage reports
  - Easy to grok SVG dependency tree & treemap visualizations
    - Powered by D3
    - Overlays security vulnerabilities
    - Overlays package license info
  - CSV of all dependencies & license info

### Generate a report

![Running Sandworm Audit](https://assets.sandworm.dev/showcase/audit-terminal-output.gif)

### Navigate charts

![Sandworm treemap and tree dependency charts](https://assets.sandworm.dev/showcase/treemap-and-tree.png)

### CSV output

![Sandworm dependency CSV](https://assets.sandworm.dev/showcase/csv-snip.png)

### JSON output

```json
{
  "createdAt": "...",
  "packageManager": "...",
  "name": "...",
  "version": "...",
  "rootVulnerabilities": [...],
  "dependencyVulnerabilities": [...],
  "licenseUsage": {...},
  "licenseIssues": [...],
  "metaIssues": [...],
  "errors": [...],
}
```

### Get Involved

- Have a support question? [Post it here](https://github.com/sandworm-hq/sandworm-audit/discussions/categories/q-a).
- Have a feature request? [Post it here](https://github.com/sandworm-hq/sandworm-audit/discussions/categories/ideas).
- Did you find a security issue? [See SECURITY.md](SECURITY.md).
- Did you find a bug? [Post an issue](https://github.com/sandworm-hq/sandworm-audit/issues/new/choose).
- Want to write some code? See [CONTRIBUTING.md](CONTRIBUTING.md).

## Get Started

> **Note**
> Sandworm Audit requires Node 14.19+.

> **Note**
> When using npm, Sandworm Audit supports lockfile versions 2 and 3 (npm 7+).

Install `sandworm-audit` globally via your favorite package manager:

```bash
npm install -g @sandworm/audit
# or yarn global add @sandworm/audit
# or pnpm add -g @sandworm/audit
```

Then, run `sandworm-audit` (or run directly without installing via `npx @sandworm/audit@latest`) in the root directory of your application. Make sure there's a manifest and a lockfile.

Available options:

```
Options:
  -v, --version               Show version number                      [boolean]
      --help                  Show help                                [boolean]
  -o, --output-path           The path of the output directory, relative to the
                              application path    [string] [default: "sandworm"]
  -d, --include-dev           Include dev dependencies[boolean] [default: false]
      --sv, --show-versions   Show package versions in chart names
                                                      [boolean] [default: false]
  -p, --path                  The path to the application to audit      [string]
      --md, --max-depth       Max depth to represent in charts          [number]
      --ms, --min-severity    Min issue severity to represent in charts [string]
      --lp, --license-policy  Custom license policy JSON string         [string]
  -f, --from                  Load data from "registry" or "disk"
                                                  [string] [default: "registry"]
      --fo, --fail-on         Fail policy JSON string   [string] [default: "[]"]
  -s, --summary               Print a summary of the audit results to the
                              console                  [boolean] [default: true]
```

### Documentation

> [Read the full docs here](https://docs.sandworm.dev/audit).

## Samples on Sandworm.dev

- [Apollo Client](https://sandworm.dev/npm/package/apollo-client)
- [AWS SDK](https://sandworm.dev/npm/package/aws-sdk)
- [Express](https://sandworm.dev/npm/package/express)
- [Mocha](https://sandworm.dev/npm/package/mocha)
- [Mongoose](https://sandworm.dev/npm/package/mongoose)
- [Nest.js](https://sandworm.dev/npm/package/@nestjs/cli)
- [Redis](https://sandworm.dev/npm/package/redis)
