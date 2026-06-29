# Performance Optimization Plan

## Step 1 — ScrollExperience refactor
- [ ] Merge multiple `useMotionValueEvent(scrollYProgress, 'change', ...)` listeners into a single subscription.
- [ ] Throttle/batch React state updates so they only happen on meaningful changes (segment change / navbar threshold crossing / nudge reset).
- [ ] Add reduced-motion + low-end device gating to disable/limit heavy transforms and auto-snap.

## Step 2 — Lazy load heavy sections
- [x] Convert `ServicesSection`, `SelectedWork`, and `ContactSection` imports in `ScrollExperience.tsx` to `next/dynamic`.
- [ ] Mount sections only when their scroll segment is active/near (e.g., active or within a small threshold window).



## Step 3 — Image optimization
- [ ] Replace `motion.img` in `ServiceSection.tsx` with Next `<Image />`.
- [ ] Move images to `public/images/...` and update `SERVICES` data to local paths.

## Step 4 — Mobile/GPU adjustments
- [ ] Disable hover-driven image scaling and backdrop blur effects on mobile/low-end mode.
- [ ] Reduce animation complexity on mobile (opacity/translate only; avoid rotation/scale where possible).

## Step 5 — Bundle/Lighthouse checks
- [ ] Remove unused dependencies (if found) and verify code-splitting.
- [ ] Run `next build` and Lighthouse/PageSpeed checks.

