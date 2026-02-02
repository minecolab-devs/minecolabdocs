---
title: Mod Information
description: Differences between client and server mods, and how to use them in MineColab.
---

## Mod Information for Minecraft in MineColab

In Minecraft, there are two main types of mods depending on where they run: **client mods** and **server mods**.  
It is important to understand this difference to avoid errors on your server.

---

### 1. Client Mods

- Installed only on the **player’s Minecraft client**.
- Affect the visual or interface experience (e.g., shaders, textures, HUD mods, minimaps, etc.).
- **Cannot run directly on a server**.
- Attempting to upload or install client mods on the server may **cause errors or prevent the server from starting**.

---

### 2. Server Mods

- Installed directly on the **Minecraft server**.
- Add gameplay features that affect all players (e.g., plugins, mods that change game mechanics, new mobs, etc.).
- These are the only mods that can be downloaded, uploaded, and installed through MineColab.
- Always check compatibility with your server version before installing.

---

### 3. Compatible Server Platforms

- Forge  
- Fabric  
- NeoForge  
- Arclight  
- Mohist  
- Banner  

---

### 4. Recommendations

- **Never upload client mods to the server.**
- Use MineColab to install compatible server mods.
- If client mods are needed, each player must install them locally on their own Minecraft.
- Always keep a **backup of your server** before installing new mods.

:::caution
Installing incompatible mods can break the server. Always check compatibility and follow the mod developer's instructions.
:::
