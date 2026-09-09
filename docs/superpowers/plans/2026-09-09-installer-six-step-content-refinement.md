# Installer Six-Step Content Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine six Installer guidance articles so their prose and media accurately reflect the supplied training slides.

**Architecture:** Retain the existing six stable MDX URLs. Each article owns its readable instructions; screenshots are static assets referenced at the relevant point in the sequence. The content remains source-bound to the supplied slides and approved user direction.

**Tech Stack:** Docusaurus 3, MDX, Playwright, Vitest.

---

### Task 1: Write and prove the reader-visible regression test

**Files:**

- Modify: `tests/e2e/help-center.spec.ts`

- [ ] Add an E2E test asserting that Bước 1 has no login heading and that the Bước 3 image falls between its equipment and quotation headings.
- [ ] Run the focused test and verify it fails against the current content.

### Task 2: Replace the source-bound article content and final screenshot

**Files:**

- Modify: `docs/nha-lap-dat/su-dung-nen-tang/sau-buoc/tiep-nhan.mdx`
- Modify: `docs/nha-lap-dat/su-dung-nen-tang/sau-buoc/chot-lich.mdx`
- Modify: `docs/nha-lap-dat/su-dung-nen-tang/sau-buoc/khao-sat-bao-gia.mdx`
- Modify: `docs/nha-lap-dat/su-dung-nen-tang/sau-buoc/hop-dong.mdx`
- Modify: `docs/nha-lap-dat/su-dung-nen-tang/sau-buoc/lich-thi-cong.mdx`
- Modify: `docs/nha-lap-dat/su-dung-nen-tang/sau-buoc/ban-giao.mdx`
- Create: `static/img/installer/sau-buoc/buoc-6-nghiem-thu-nguoi-dung-cung-cap.png`

- [ ] Remove Bước 1 login instructions and retain its operational sections.
- [ ] Add the approved outside-system quotation note to Bước 2.
- [ ] Reorder Bước 3 media and transcribe its slide callouts into readable headings and lists.
- [ ] Replace Bước 4 and Bước 5 prose with the corresponding slide callouts without introducing new policy.
- [ ] Copy the supplied Bước 6 screenshot into the public image directory and update its MDX reference.

### Task 3: Verify and publish

**Files:**

- Verify: all files listed above

- [ ] Run focused E2E coverage after implementation.
- [ ] Run `npm run typecheck`, `npm test`, `npm run build`, and `npm run test:e2e`.
- [ ] Commit and push the content refinement to `feat/installer-guide-structure`.
