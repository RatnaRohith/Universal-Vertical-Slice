# Material Standards

| Material family | Main properties | Notes |
|---|---|---|
| Painted metal | Medium roughness, subtle edge wear | Primary walls and panels |
| Brushed metal | Directional roughness, metallic response | Trim, handles |
| Rubber | High roughness, low metallic | Seals, grips, cable sleeves |
| Glass | Controlled transparency/reflection | Use sparingly; mind overdraw |
| Emissive display | Emission plus readable base graphics | Do not rely on bloom alone |
| Ceramic composite | Matte, light neutral base | Suit panels and clean equipment |
| Hazard stripe | High-contrast amber/dark pattern | Use consistently at hazards |

- Define a shared master material/shader per family.
- Keep base-color textures in the correct color space.
- Keep normal/roughness/metallic data linear.
- Avoid excessive material variants that differ only slightly.
- Validate under final lighting and in a neutral material-check scene.
