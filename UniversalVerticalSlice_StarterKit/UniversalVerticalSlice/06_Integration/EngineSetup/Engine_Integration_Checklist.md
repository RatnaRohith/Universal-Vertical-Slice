# Engine Integration Checklist

## All engines
- [ ] Confirm units, scale, forward axis, and import conventions.
- [ ] Configure named input actions.
- [ ] Implement player controller and camera.
- [ ] Implement interaction contract.
- [ ] Implement objective/mission state machine.
- [ ] Implement drone AI states and navigation.
- [ ] Bind audio to gameplay events.
- [ ] Bind HUD to gameplay state.
- [ ] Add checkpoint and deterministic retry/reset.
- [ ] Import and validate materials, rigs, animations, audio, and collision.
- [ ] Create a clean packaged build and test outside the editor.

## Godot 4 notes
Use CharacterBody3D for a scripted character controller; Input Map for actions; RayCast3D or direct-space queries for interaction; AnimationTree/AnimationPlayer for animation; AudioStreamPlayer/AudioStreamPlayer3D for audio; Control nodes for UI; NavigationRegion3D/NavigationAgent3D for navigation where appropriate.

## Unity notes
Choose CharacterController or Rigidbody based on desired physics behavior; use Input System Actions; use raycasts/overlap queries for interaction; use Animator; AudioSource/AudioMixer for audio; Canvas or UI Toolkit for UI; NavMeshAgent for a simple drone.

## Unreal Engine notes
Use Character and CharacterMovementComponent for the player; Enhanced Input; traces/interfaces for interaction; Animation Blueprint; Audio Components or MetaSounds; UMG; NavMesh with AI Controller and Behavior Tree/StateTree as appropriate.

## Important
These are implementation mappings, not drop-in code. Keep requirements and tests stable across engine implementations.
