# abojchevski.github.io

Personal academic website of Aleksandar Bojchevski, built with
[al-folio](https://github.com/alshedivat/al-folio) **v1.x**.

In v1.x al-folio is a thin Jekyll _starter_, not a theme: layouts, includes, Sass and Liquid tags
live in versioned gems (`al_folio_core`, `al_citations`, `al_math`, …) pinned in `Gemfile` and
listed again under `plugins:` in `_config.yml`. **Both lists must agree** — a plugin present in only
one of them is silently inert.

## Local development

```bash
bundle install
npm ci
bundle exec jekyll serve      # http://localhost:4000/
```

`baseurl` is intentionally blank (this is a GitHub user page served from the domain root).

## What lives where

| Change                                       | File                                                  |
| -------------------------------------------- | ----------------------------------------------------- |
| Bio, profile photo, news/publication toggles | `_pages/about.md`                                     |
| Publications                                 | `_bibliography/papers.bib` + `_pages/publications.md` |
| News items                                   | `_news/*.md` (one file each, `inline: true`)          |
| Open positions / theses / teaching           | `_pages/{positions,theses,teaching}.md`               |
| Social links                                 | `_data/socials.yml`                                   |
| Co-author links, venue badges                | `_data/{coauthors,venues}.yml`                        |
| Site settings, feature flags                 | `_config.yml`                                         |

Adding a publication needs no other change: the year headings come from jekyll-scholar's
`group_by: year`, so a paper in a new year appears on its own. Set `category` to `conference`,
`workshop` or `thesis` to place it in the right section of `_pages/publications.md`.

## Local overrides

Files under `_layouts/`, `_includes/` and `_sass/` in this repo _shadow_ the gem-owned versions.
Each one is recorded in `.al-folio-overrides.yml` together with the gem checksum it was reviewed
against. After a gem upgrade:

```bash
bundle exec al-folio upgrade audit
bundle exec al-folio upgrade overrides audit
bundle exec al-folio upgrade overrides diff <path>
bundle exec al-folio upgrade overrides accept <path>
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and force-pushes it
to the `gh-pages` branch. GitHub Pages must be configured to serve from `gh-pages` (**not** `main`).
