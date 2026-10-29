# Level Design Document — LVL-001 Kepler Relay Station

## Level purpose
Deliver the complete 5–8 minute vertical-slice experience and teach the player the interaction loop before the security encounter.

## Spatial plan
1. **Docking Airlock** — safe onboarding, establish beacon and station mood.
2. **Service Corridor** — power panel, route choice, drone patrol and readable cover/side spaces.
3. **Relay Chamber** — visual focal point, transmission interaction, ending beat.

## Flow
Airlock → Corridor entrance → Power panel → Drone encounter → Relay door → Relay chamber → Transmission → Ending.

## Graybox rules
- The main route must be visually legible without waypoint spam.
- Every mandatory door has a visible reason to be locked and a clear unlock response.
- Avoid jumps or precision platforming on the critical path.
- Keep at least one safe observation position before the drone route.
- Provide a recovery route if the drone detects the player.
- The relay console is the dominant focal point in the final room.

## Encounter design
- Drone patrol route is visible or inferable from sound/light.
- Detection has a readable wind-up and a fair response window.
- The drone cannot permanently occupy a doorway.
- The player can evade or disable the drone; do not require combat unless explicitly chosen.

## Navigation and collision
- Use simple collision on blockout geometry.
- Mark walkable areas and out-of-bounds edges.
- Verify door frames do not trap the capsule/camera.
- Ensure interactables can be reached from a natural standing position.
- Validate AI navigation in the actual level, not only on a test floor.

## Checkpoints and failure
Checkpoint before the drone encounter. Retry restores player, drone, power, door, objective, and audio states to a consistent snapshot.

## Level acceptance
- Three full playthroughs without softlock.
- First-time tester identifies the power panel and relay objective.
- Drone can be understood without a text tutorial.
- Ending trigger fires once.
