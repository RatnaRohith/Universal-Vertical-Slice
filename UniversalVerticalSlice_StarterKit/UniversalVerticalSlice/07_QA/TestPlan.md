# QA Test Plan

## Test levels
1. Unit/component: stamina math, interaction validity, mission-state transitions.
2. Integration: controller + collision + camera; panel + mission manager; drone + navigation.
3. End-to-end: complete mission from launch to ending.
4. Regression: rerun critical cases after any change to movement, objectives, collision, AI, audio events, or build settings.
5. Performance: profile packaged build at target resolution and quality.
6. Accessibility/usability: subtitle readability, prompt clarity, remapping where supported, reduced motion options.

## Severity
- Blocker: cannot launch or cannot complete the slice.
- Critical: core feature broken, data/state corruption, repeatable softlock.
- Major: substantial gameplay or presentation defect with workaround.
- Minor: small visual/audio/UI defect.
- Trivial: cosmetic issue with negligible impact.

## Bug report template
- Bug ID:
- Build/version:
- Platform/hardware:
- Severity:
- Preconditions:
- Steps to reproduce:
- Expected result:
- Actual result:
- Reproducibility:
- Evidence:
- Suspected area:
- Status / owner:
