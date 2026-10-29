# Screenplay and Sequence Guide

## Format
Every sequence contains: ID, location, estimated duration, dramatic purpose, entry condition, player objective, beats, dialogue, events, required assets, exit condition, fail/retry behavior, and acceptance tests.

## Screenplay conventions
- `INT.` / `EXT.` identifies the environment and time when useful.
- `ACTION:` describes visible/heard events, not internal code.
- `DIALOGUE:` names speaker and line.
- `GAMEPLAY:` specifies what the player can control.
- `EVENT:` stable event identifier fired by gameplay.
- `OBJECTIVE:` objective-state change.
- `EXIT:` explicit sequence completion condition.
- Dialogue must never be the only way to communicate a critical gameplay instruction.

## Example dialogue
FIELD OPERATOR (RADIO): “Kepler relay, this is field team. Respond.”
RELAY AI: “Auxiliary power… unavailable. Signal integrity… unknown.”
SURVEY CONTROL (RADIO): “We are receiving your carrier. Whatever you found, transmit it.”
RELAY AI: “Incoming message timestamp exceeds current station time.”
FIELD OPERATOR: “That’s my voice.”
