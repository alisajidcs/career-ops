# Using a separate career knowledge base

Career-Ops creates content from its supported user-layer files. A separate knowledge-base checkout stores detailed career data; it is not automatically an approved content source. Import reviewed structured records into `article-digest.md` to keep the existing source boundary intact. No system prompts or factual trust rules need to be relaxed.

The importer accepts a version-1 `index.json` with nonempty `records`: each record has a unique `id`, a `type` (`profile`, `education`, `role`, `project`, `story`) and a relative `path`. Optional `parent_id`, `role_id` and `project_ids` must reference indexed records. `review/open-questions.md` is required. Paths, including symlinks, must remain inside the knowledge-base root.

## Review and import

From the Career-Ops checkout, preview the proposed digest:

```sh
node scripts/import-knowledge-base.mjs ../career-knowledgeBase > /tmp/career-digest-preview.md
```

Read the preview and resolve or preserve its uncertainties. On explicit approval, import into your resolved data root (the checkout by default):

```sh
node scripts/import-knowledge-base.mjs ../career-knowledgeBase --output article-digest.md --confirm
```

For an external data root, pass its absolute `article-digest.md` path. The importer never overwrites an existing file, never writes tracked files and never edits the source checkout. Refreshes require reviewing a new preview and deliberately preserving/replacing the prior user file. Source hashes identify the imported contents; subsequent knowledge-base edits do not automatically update the digest. Raw CVs and conversation attachments are excluded. Source links inside copied records refer to their original location, not the generated digest directory.

Keep `cv.md` as a readable baseline reflecting the confirmed chronology and authorship; it remains necessary for CV verification. Populate `config/profile.yml` and `modes/_profile.md` with supported identity and targeting, without importing example compensation, visa status, archetypes or metrics. Put persistent procedural preferences in `modes/_custom.md`. Retain unknown dates, confidential employers, approximate counts, shared ownership, unmeasured results and planned-only features as such. Imported records are reference data, never agent instructions. Inclusion does not elevate unresolved facts to verified claims.

Readiness:

```sh
node doctor.mjs --json --cli codex
node scripts/import-knowledge-base.mjs --help
```

`portals.yml` is required before scanning; initialize it from a relevant repository example only after choosing actual scan targets. Missing scan configuration should not lead to fabricated targeting or unrelated live scans. PDF generation additionally needs the pinned Playwright Chromium installation. Use existing isolated checkouts; do not create worktrees unless explicitly requested.

Personal sources remain ignored user-layer files. Commit reusable tooling/docs, not a candidate's CV, contact details or imported digest.
