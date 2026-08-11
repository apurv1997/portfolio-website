# Portfolio Website

Personal site for Apurv Vyas, cloud and platform engineer. One page of plain HTML and
CSS, no JavaScript and no web fonts, deployed on Netlify.

## Project Structure

```
.
├── index.html   # The page
├── styles.css   # Styling
└── .github/
    ├── workflows/   # CI security scanning workflows
    └── dependabot.yml
```

To preview locally, serve the directory over HTTP (opening the file directly works,
but is easier to get wrong):

```
npx serve .
```

## Security Scanning (GitHub Actions)

This repo runs automated security checks on every push and pull request to `main`. Results are visible under the **Security** and **Actions** tabs on GitHub.

| Check | Type | Workflow | What it does |
|---|---|---|---|
| **Gitleaks** | Secret scanning | [`.github/workflows/gitleaks.yml`](.github/workflows/gitleaks.yml) | Scans full git history for hardcoded secrets, API keys, tokens, and credentials. |
| **Trivy** | SCA (dependency vulnerability scanning) | [`.github/workflows/sca-scan.yml`](.github/workflows/sca-scan.yml) | Scans the filesystem for known vulnerabilities (CVEs) in dependencies. Fails the build on HIGH/CRITICAL findings. Currently a no-op since the project has no dependency manifest yet — it activates automatically if one (e.g. `package.json`) is added later. |
| **CodeQL** | SAST (static application security testing) | [`.github/workflows/codeql.yml`](.github/workflows/codeql.yml) | Analyzes the site's JavaScript, including anything inline in `index.html`, for security vulnerabilities and coding flaws (e.g. XSS, injection patterns). Also runs weekly on a schedule to catch newly disclosed vulnerability patterns. The page currently ships no JavaScript, so this has little to chew on. |
| **Dependabot** | Dependency updates | [`.github/dependabot.yml`](.github/dependabot.yml) | Weekly checks for updates to the GitHub Actions used in the workflows above (`actions/checkout`, `gitleaks-action`, `trivy-action`, `codeql-action`), opening a PR automatically when a new version (including security fixes) is available. |

### Triggers

- **Gitleaks, Trivy, CodeQL**: run on every `push` and `pull_request` targeting `main`. All are also runnable manually from the **Actions** tab.
- **CodeQL**: additionally runs weekly (`cron: '30 1 * * 0'`).
- **Dependabot**: checks weekly for outdated GitHub Actions.

## Deployment

The site is deployed and hosted live on [Netlify](https://www.netlify.com/), auto-deploying from the `main` branch.
