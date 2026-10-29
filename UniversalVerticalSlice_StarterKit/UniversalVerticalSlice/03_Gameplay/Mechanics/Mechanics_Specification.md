# Gameplay Mechanics Specification

## Core loop
Explore the station → identify a blocked system → interact with power routing → navigate the drone encounter → access relay chamber → transmit warning → discover anomaly.

## Interaction
- Detect interactables using a forward ray/trace or proximity volume.
- Show a prompt only when the target is valid and in range.
- Use one interaction contract: `can_interact`, `get_prompt`, `interact`.
- Re-check validity when the button is pressed.
- Fire a single event on successful state change.
- Provide visual, audio, and UI feedback.

## Auxiliary power panel
- Initial state: OFF
- Required action: hold or press interact (choose one and use consistently)
- Success: power state becomes ON, local lights change, relay door can unlock
- Repeat activation: safe no-op or clear status message
- Failure case: player leaves range; interaction cancels safely

## Security drone
- States: PATROL, INVESTIGATE, PURSUE, SEARCH, RETURN
- Detection inputs: line of sight and/or noise radius
- Clear warning: sensor light + audio cue + HUD indication
- Resolution: evade and reach the relay door, or use the panel to disable the drone
- Keep perception, navigation, and damage separate from mission objective code
- Ensure the drone cannot block the only required path indefinitely

## Mission state
- `MISSION_NOT_STARTED`
- `MISSION_ACTIVE`
- `POWER_RESTORED`
- `RELAY_ACCESSIBLE`
- `TRANSMISSION_ACTIVE`
- `MISSION_COMPLETE`
- Failure/retry is a controlled reset to a valid checkpoint

## HUD
- Current objective
- Contextual interaction prompt
- Optional stamina bar
- Drone alert indicator
- Pause/restart controls
- Subtitles for all critical voiced information

## Feedback principles
Every important player action should provide at least one immediate feedback channel; critical events should use two or more where practical (e.g. sound + light + UI).
