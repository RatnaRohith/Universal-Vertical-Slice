# Audio Event Map

| Event ID | Trigger | Asset ID | Bus/category | Spatial | Priority | Subtitle | Concurrency/loop |
|---|---|---|---|---|---|---|---|
| EVT_POWER_RESTORED | Power panel state changes to ON | AST_AUD_001 | SFX | 3D | High | No | Play once |
| EVT_DRONE_ALERTED | Drone begins pursuit | AST_AUD_002 | SFX | 3D | High | No | Cooldown prevents spam |
| EVT_TRANSMISSION_COMPLETE | Relay transmission completes | AST_VO_001 | VO | 2D/radio | Critical | Yes | Play once |
