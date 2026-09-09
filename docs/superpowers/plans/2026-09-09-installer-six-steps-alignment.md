# Installer Six-Step Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the six-step Installer sequence match the DAT Universal workflow shown in the September 2026 training material.

**Architecture:** Keep `src/data/installerContent.ts` as the single source of labels used by both the navigation cards and the left sidebar. Keep existing six MDX file paths unchanged so links remain valid, and only update their frontmatter titles.

**Tech Stack:** Docusaurus 3, MDX, TypeScript, Vitest.

---

## File structure

- Modify `src/data/installerContent.ts`: official step titles in display order.
- Modify `docs/nha-lap-dat/su-dung-nen-tang/sau-buoc/*.mdx`: matching page titles while retaining their filenames and URLs.
- Modify `tests/unit/ambassador-content.test.ts`: explicit regression coverage for the Installer six-step data and sidebar order.

### Task 1: Specify the Installer sequence in an automated check

**Files:**
- Modify: `tests/unit/ambassador-content.test.ts`

- [ ] **Step 1: Add the Installer data import and the expected sequence test**

```ts
import {installerSteps} from '../../src/data/installerContent';

it('keeps the Installer workflow in the approved six-step order', () => {
  expect(installerSteps.map((step) => step.title)).toEqual([
    'Bước 1: Liên hệ và chốt lịch khảo sát',
    'Bước 2: Khảo sát và báo giá',
    'Bước 3: Thông tin hợp đồng',
    'Bước 4: Thi công',
    'Bước 5: Bàn giao',
    'Bước 6: Nghiệm thu (Hoàn thành)',
  ]);
});
```

- [ ] **Step 2: Run the focused unit test to verify it fails**

Run: `npm run test -- tests/unit/ambassador-content.test.ts`

Expected: FAIL because the current data includes “Tiếp nhận Phiếu khảo sát” and different labels.

### Task 2: Align data and existing article titles

**Files:**
- Modify: `src/data/installerContent.ts`
- Modify: `docs/nha-lap-dat/su-dung-nen-tang/sau-buoc/tiep-nhan.mdx`
- Modify: `docs/nha-lap-dat/su-dung-nen-tang/sau-buoc/chot-lich.mdx`
- Modify: `docs/nha-lap-dat/su-dung-nen-tang/sau-buoc/khao-sat-bao-gia.mdx`
- Modify: `docs/nha-lap-dat/su-dung-nen-tang/sau-buoc/hop-dong.mdx`
- Modify: `docs/nha-lap-dat/su-dung-nen-tang/sau-buoc/lich-thi-cong.mdx`
- Modify: `docs/nha-lap-dat/su-dung-nen-tang/sau-buoc/ban-giao.mdx`

- [ ] **Step 1: Replace the six display titles without renaming IDs or files**

```ts
export const installerSteps = [
  {id: 'tiep-nhan', title: 'Bước 1: Liên hệ và chốt lịch khảo sát'},
  {id: 'chot-lich', title: 'Bước 2: Khảo sát và báo giá'},
  {id: 'khao-sat-bao-gia', title: 'Bước 3: Thông tin hợp đồng'},
  {id: 'hop-dong', title: 'Bước 4: Thi công'},
  {id: 'lich-thi-cong', title: 'Bước 5: Bàn giao'},
  {id: 'ban-giao', title: 'Bước 6: Nghiệm thu (Hoàn thành)'},
];
```

- [ ] **Step 2: Apply the same title to the frontmatter of each corresponding MDX page**

Each page keeps its `Coming soon` content and filename. The filename serves as the stable URL; only the visible page title changes.

- [ ] **Step 3: Run the focused test to verify it passes**

Run: `npm run test -- tests/unit/ambassador-content.test.ts`

Expected: PASS.

- [ ] **Step 4: Commit the aligned data, page titles, and test**

```bash
git add src/data/installerContent.ts docs/nha-lap-dat/su-dung-nen-tang/sau-buoc tests/unit/ambassador-content.test.ts
git commit -m "fix: align installer workflow six steps"
```

### Task 3: Validate the published navigation

**Files:**
- Verify: `sidebars.ts`
- Verify: `src/components/InstallerContent/index.tsx`

- [ ] **Step 1: Run type and production validation**

Run: `npm run typecheck; npm run build`

Expected: both commands exit with code 0 and the build reports no duplicate routes or broken links.

- [ ] **Step 2: Inspect the local Installer six-step page**

Open: `/huong-dan/nha-lap-dat/su-dung-nen-tang/sau-buoc`

Expected: cards and the left menu display the six approved labels in order, with no “Tiếp nhận Phiếu khảo sát” or “Đồng bộ dự án” card.

- [ ] **Step 3: Push the branch and update Pull Request #29**

Run: `git push origin feat/installer-guide-structure`

Expected: PR #29 receives the new commit and awaits the existing required review before merging.
