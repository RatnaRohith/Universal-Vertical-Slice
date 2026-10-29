# Asset Pipeline and Standards

## Asset lifecycle
Brief → reference → blockout/prototype → source asset → engine import → integration → QA → approved.

## Asset naming
`AST_<CATEGORY>_<SUBJECT>_<VARIANT>_<NN>`
Examples: `AST_ENV_RelayDoor_A_01`, `AST_CHR_FieldOperator_A_01`, `AST_AUD_DroneAlert_A_01`.
Files use lowercase snake_case where engine naming conventions allow. Keep IDs stable even if filenames change.

## Models
- Real-world scale; documented forward axis and unit scale.
- Apply transforms where appropriate before export.
- Clean topology and UVs; separate collision from render mesh where needed.
- LODs only when justified by camera distance/performance.
- Use consistent pivots for doors, panels, and moving props.
- Keep source files separate from engine-imported assets.

## Textures
- Base Color / Albedo
- Normal
- Roughness
- Metallic where needed
- Ambient occlusion or packed masks if supported
- Emissive for lights/screens
- Default hero/environment props: 1K or 2K based on screen coverage; small props can use 512 or shared atlases.
- Use consistent color space: base color typically sRGB; data maps typically linear/non-color.
- Avoid unique high-resolution textures for tiny objects without a reason.

## Materials
- Define surface families: painted metal, brushed metal, rubber, glass, emissive display, ceramic composite.
- Prefer shared master materials/shaders with per-asset instances.
- Document parameters, tiling, UV assumptions, and transparency requirements.
- Avoid expensive shader features on large numbers of small objects.

## Animation
- Establish a consistent skeleton and retargeting plan.
- List required clips before production.
- Decide in-place versus root motion per controller.
- Validate loop seams, foot sliding, scale, and bone orientation.
- Ensure imported animation track/skeleton paths resolve in the target engine.

## Audio
- Maintain original source masters and engine-ready exports.
- Use WAV for source/master where practical; use compressed formats for shipped content based on engine support and platform.
- Name audio by event and variation; record duration, loop status, loudness target, spatial/2D intent, and subtitle ID.
- Avoid clipping; mix against the loudest expected gameplay event.
- Make music ducking and subtitle behavior explicit.

## Optimization
- Reuse materials and texture atlases.
- Check overdraw/transparency, shadow casting, collision complexity, draw calls, and audio concurrency.
- Profile in a packaged build, not only in editor.
