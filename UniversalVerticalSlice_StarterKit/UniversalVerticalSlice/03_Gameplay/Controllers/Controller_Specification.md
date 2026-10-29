# Controller Specification — Engine-Agnostic

## Primary controller: Third-person field operator
### Input actions
Use semantic action names; map them to keyboard, controller, and accessibility remaps in the engine.
- `move_left`, `move_right`, `move_forward`, `move_back`
- `jump`
- `sprint`
- `crouch` (optional for the slice; implement only if used by level design)
- `interact`
- `pause`
- `restart`

### Baseline tunables (starting points, playtest required)
- Walk speed: 4.5 m/s
- Sprint speed: 7.0 m/s
- Ground acceleration: 18 m/s²
- Ground deceleration: 22 m/s²
- Jump height target: 1.1 m
- Interaction range: 2.0 m
- Camera sensitivity: user-adjustable
- Sprint stamina: 100 maximum; drain 22/s; recovery 16/s
- Coyote time / jump buffer: optional polish, not required for first graybox

### Responsibilities
- Read input and produce movement intent.
- Own collision and character locomotion.
- Expose stable events such as `landed`, `sprint_started`, `sprint_stopped`.
- Do not own mission objective state or dialogue sequencing.
- Keep camera logic separate from movement where practical.
- Animation reads controller state; it must not independently move the character unless root motion is an explicit project decision.

### Camera
- Third-person follow camera with collision avoidance.
- Clamp pitch to a comfortable range.
- Avoid clipping through walls and preserve objective visibility.
- Pause menu releases or redirects input; resume restores expected control.

### Acceptance checks
- Diagonal input is normalized.
- Character cannot jump indefinitely or jump while in an invalid state.
- Collision resizing, if implemented, preserves the capsule bottom.
- Camera and character recover correctly after restart.
- Controller remains usable at low frame rates.
