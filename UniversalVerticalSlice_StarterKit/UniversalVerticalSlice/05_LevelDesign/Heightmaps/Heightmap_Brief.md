# Heightmap / Terrain Brief

This slice is an interior orbital station; a heightmap is **optional**, not a requirement. Use this brief only if the exterior approach, moon surface, or a future outdoor section needs terrain.

- Terrain dimensions: define in meters before sculpting.
- Heightmap format: document grayscale range, bit depth, axis orientation, and import scale.
- Resolution: choose based on terrain size and target hardware; avoid oversampling a small play area.
- Composition: silhouette landmarks, approach route, sightlines, safe/unsafe areas.
- Traversal: define maximum walkable slope and intended jump gaps.
- Materials: base rock/soil, secondary variation, decals, vertex blend or splat maps.
- Collision: validate walkable surface and edge behavior.
- Optimization: terrain chunking/LOD/streaming only if required by scope.
- Validation: compare imported terrain against source image and test collision in packaged build.
