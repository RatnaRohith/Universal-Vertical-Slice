# UVS Master Plan

## 1. Project snapshot
- Project name: Signal at Kepler-9
- Genre: Sci-fi exploration / light stealth-action
- Scope: One compact mission, one level, one core loop
- Target playtime: 5–8 minutes
- Supported implementation paths: Godot 4, Unity, Unreal Engine
- Primary player fantasy: Be the only person able to interpret and act on a failing station's final signal.

## 2. Player experience pillars
1. **Read the space:** navigation and environmental clues should communicate what matters.
2. **Act with intent:** every interaction has clear feedback and a meaningful result.
3. **Tension without overload:** one security-drone encounter, with a readable avoidance or disable option.
4. **Finish with consequence:** transmitting the warning resolves the mission and creates a story hook.

## 3. In-scope
- Third-person character controller
- Walk, sprint, jump, camera look, interact
- One simple security drone with patrol/investigate/chase states
- One power-routing interaction
- One locked door and one objective item/console
- Basic health or detection failure, checkpoint/retry
- HUD objective text, interaction prompt, pause/restart
- Three connected spaces: Docking Airlock, Service Corridor, Relay Chamber
- Ambient audio, interaction SFX, short music cues, a few radio lines
- Final lighting/material pass and basic post-processing

## 4. Out of scope
- Open world, crafting, inventory grid, branching dialogue system
- Multiple weapons, complex combat, vehicles, multiplayer
- Full cinematic pipeline, facial animation, extensive voice acting
- Persistent campaign save system, procedural generation
- Multiple levels or multiple enemy archetypes

## 5. Success criteria
- A first-time player can identify the objective within 30 seconds.
- Player can complete the mission in 5–8 minutes.
- No critical softlocks; restart returns to a valid playable state.
- All critical requirements have passing tests.
- Visual and audio cues clearly distinguish objective, hazard, and interactable.
- Performance meets the agreed target on the chosen test machine.

## 6. Production order
1. Confirm story, scope, and requirements.
2. Graybox the complete level.
3. Implement controller, interaction, objective state, and drone.
4. Test the full loop with placeholder assets.
5. Produce and integrate final/representative assets and audio.
6. Apply lighting, color theme, VFX, and post-processing.
7. Run regression, accessibility, and performance tests.
8. Package a release candidate and record known issues.

## 7. Engine-neutral architecture
- Input layer: maps device input to named actions.
- Character controller: movement, collision, camera intent.
- Interaction system: detects valid targets and dispatches an interaction.
- Mission/objective manager: owns objective state and sequence progression.
- Enemy AI: perception and state transitions; does not own mission progression.
- UI layer: displays state from gameplay systems; does not become the source of truth.
- Audio event layer: gameplay events trigger audio; avoid hard-coding sound playback into unrelated systems.
- Data/config layer: tunable speeds, ranges, timings, and health values.

## 8. Cross-engine mapping
| Concern | Godot 4 | Unity | Unreal Engine |
|---|---|---|---|
| Character | CharacterBody3D + script | CharacterController or Rigidbody | Character + CharacterMovementComponent |
| Input | Input Map actions | Input System Actions | Enhanced Input |
| Camera | Camera3D + SpringArm3D | Camera + Cinemachine (optional) | CameraComponent + SpringArmComponent |
| Interactables | Area3D / ray query | Collider / raycast | Trace / collision |
| State/AI | Script state machine | C# state machine / Animator | StateTree / Behavior Tree / Blueprint or C++ |
| Materials | StandardMaterial3D / ShaderMaterial | URP/HDRP shaders | Material Editor |
| Audio | AudioStreamPlayer / 3D | AudioSource / AudioMixer | Audio Components / MetaSounds |
| UI | Control nodes | Canvas UI / UI Toolkit | UMG |
| Terrain | Terrain mesh / plugins / custom mesh | Terrain system | Landscape + heightmap |
| Build | Export presets | Build Profiles | Packaging settings |

## 9. Naming and IDs
Use stable IDs: `SEQ-###`, `REQ-AREA-###`, `AST-AREA-###`, `TST-###`, `BUG-###`, `EVT-VERB_NOUN`.
Use readable filenames with lowercase snake_case for implementation files. Do not reuse an ID after deletion; mark it retired instead.
