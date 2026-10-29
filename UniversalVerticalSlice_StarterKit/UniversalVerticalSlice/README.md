# Universal Vertical Slice (UVS) — Sci-Fi Starter Kit

A beginner-friendly, engine-agnostic production template for a **small sci-fi vertical slice** that can be implemented in Godot 4, Unity, or Unreal Engine.

## Included
- Master production guide and example story
- Logline, six-sequence screenplay plan, and requirement traceability
- Controller and gameplay-mechanics specifications
- Asset taxonomy and production register
- Level Design Document (LDD), heightmap brief, ART brief, lighting, color themes, materials, post-processing
- QA test cases, production gates, and release checklist
- Local HTML planning dashboard
- Excel workbook with editable trackers
- CSV starter data

## Starter concept: *Signal at Kepler-9*
A lone field operator enters a silent orbital relay station after its distress beacon repeats a message that should be impossible. The player restores auxiliary power, investigates a locked communications bay, avoids a malfunctioning security drone, and transmits a warning before the station's orbit decays.

### Small-scope vertical-slice target
- 1 playable character
- 1 compact station level with 3 connected spaces
- 1 basic security drone encounter
- 1 traversal/interact loop
- 1 objective chain and 1 ending beat
- 5–8 minutes of target playtime
- 1 polished gameplay loop, not a complete game

## Start here
1. Read `00_ProjectManagement/UVS_MasterPlan.md`.
2. Review `01_Narrative/StoryBible.md` and `02_Screenplay/SequenceList.csv`.
3. Open `dashboard/index.html` in a modern browser for a local tracker.
4. Open `trackers/UVS_Production_Tracker.xlsx` for spreadsheet tracking.
5. Replace example IDs and values as your design evolves.

## Cross-engine rule
Keep the design intent and requirement IDs engine-agnostic. Implement them using native engine features; do not expect scene, prefab, or asset files to be directly interchangeable between engines.

## Definition of done
A vertical slice is done when the target sequence can be completed from start to finish, all critical requirements pass, no blocking bugs remain, performance is acceptable on target hardware, and a reproducible build is packaged with release notes.
