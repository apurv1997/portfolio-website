# Portfolio Website

Personal portfolio site for Apurv Vyas — Cloud, Platform & Backend Engineer. Built with plain HTML, CSS, and JavaScript, and deployed live via Netlify.

## Project Structure

```
.
├── index.html   # Main page
├── styles.css   # Styling
├── script.js    # Interactivity
└── .github/
    ├── workflows/   # CI security scanning workflows
    └── dependabot.yml
```

## Security Scanning (GitHub Actions)

This repo runs automated security checks on every push and pull request to `main`. Results are visible under the **Security** and **Actions** tabs on GitHub.

| Check | Type | Workflow | What it does |
|---|---|---|---|
| **Gitleaks** | Secret scanning | [`.github/workflows/gitleaks.yml`](.github/workflows/gitleaks.yml) | Scans full git history for hardcoded secrets, API keys, tokens, and credentials. |
| **Trivy** | SCA (dependency vulnerability scanning) | [`.github/workflows/sca-scan.yml`](.github/workflows/sca-scan.yml) | Scans the filesystem for known vulnerabilities (CVEs) in dependencies. Fails the build on HIGH/CRITICAL findings. Currently a no-op since the project has no dependency manifest yet — it activates automatically if one (e.g. `package.json`) is added later. |
| **CodeQL** | SAST (static application security testing) | [`.github/workflows/codeql.yml`](.github/workflows/codeql.yml) | Analyzes `script.js` for security vulnerabilities and coding flaws (e.g. XSS, injection patterns). Also runs weekly on a schedule to catch newly disclosed vulnerability patterns. |
| **Dependabot** | Dependency updates | [`.github/dependabot.yml`](.github/dependabot.yml) | Weekly checks for updates to the GitHub Actions used in the workflows above (`actions/checkout`, `gitleaks-action`, `trivy-action`, `codeql-action`), opening a PR automatically when a new version (including security fixes) is available. |

### Triggers

- **Gitleaks, Trivy, CodeQL**: run on every `push` and `pull_request` targeting `main`. All are also runnable manually from the **Actions** tab.
- **CodeQL**: additionally runs weekly (`cron: '30 1 * * 0'`).
- **Dependabot**: checks weekly for outdated GitHub Actions.

## Deployment

The site is deployed and hosted live on [Netlify](https://www.netlify.com/), auto-deploying from the `main` branch.
