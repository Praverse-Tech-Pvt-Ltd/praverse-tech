# Animation Performance Skill

## Purpose
Use this skill whenever adding animations, starfields, parallax, particles, 3D, robot motion, or scroll effects.

## Rules
- Prefer CSS and Framer Motion before heavy 3D.
- Use canvas particles only if lightweight.
- Lazy-load heavy visual sections.
- Respect prefers-reduced-motion.
- Keep animation subtle and premium.
- Avoid continuous high CPU animation.
- Use transform and opacity for smooth motion.
- Avoid layout shift.
- Do not block content behind animation.
- Optimize images and SVGs.

## Checklist
Before finishing:
1. Mobile scroll is smooth.
2. No horizontal overflow.
3. Hero loads quickly.
4. Reduced motion fallback works.
5. Animations do not hide content.
6. Build passes.
