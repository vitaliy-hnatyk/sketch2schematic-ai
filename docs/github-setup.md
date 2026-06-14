# Publishing on GitHub

## Create the repository

```bash
git init
git add .
git commit -m "Initial GitHub-ready release"
git branch -M main
git remote add origin <repository-url>
git push -u origin main
```

## Configure About and topics

The recommended description and topics are stored in `.github/repository-metadata.json`. After pushing the repository, run:

```bash
npm run github:metadata -- OWNER/REPOSITORY
```

Set `GITHUB_PAGES_URL` to also configure the homepage URL. See [GitHub repository metadata](repository-metadata.md).

## Repository settings

Recommended settings:

- enable Issues;
- enable Discussions if community support is desired;
- enable branch protection for `main`;
- require the `CI / test-and-build` check before merging;
- use squash merges for focused history;
- enable Dependabot security updates.

## GitHub Pages

1. Open repository **Settings → Pages**.
2. Select **GitHub Actions** as the source.
3. Run the `Deploy GitHub Pages` workflow.

## Release checklist

1. Update `CHANGELOG.md`.
2. Update `APP_VERSION` in `src/config/appMeta.js`.
3. Update `version` in `package.json`.
4. Run `npm run check`.
5. Create a signed or annotated Git tag.
6. Attach the source ZIP and optional production build to the GitHub Release.

Do not attach model weights unless redistribution rights are documented.
