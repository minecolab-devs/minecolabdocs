---
title: Upload Minecraft World
description: How to upload a world or map to your Minecraft server in MineColab
---

## Upload World to MineColab

<img src="/assets/images/celdas/upload_world.png" alt="upload_seve" />

This cell allows you to **upload a previously generated world** to your Minecraft server in Colab. You can upload it from your computer or via a direct link (`URL`).

### Available Options:

1. **Upload manually (`upload_manually`)**
   - Allows you to select a file from your computer.
   - Accepted file types:
     - `.zip`
     - `.mcworld` (Bedrock only)
   - The file will be automatically extracted into the corresponding server folder.
   - For Bedrock worlds (`bedrock_mcworld`), the file is automatically converted to ZIP before extraction.

2. **Use direct URL (`url`)**
   - Enter a direct link to a ZIP file containing the world files.
   - The file will be downloaded to the server and extracted automatically.
   - Make sure the link is direct and that the ZIP does not contain filenames with special characters.

### World Selection

- `world` → Main world (Overworld)  
- `world_nether` → Nether  
- `world_the_end` → End  
- `bedrock_mcworld` → Bedrock world  
- `see all available` → Shows all available worlds on the server for selection

:::caution
The options `world_nether` and `world_the_end` only work on certain server types.
:::

### Upload Process:

1. Select the **server** you want to upload the world to.  
2. Choose the **upload method** (`upload_manually` or `url`).  
3. Select or enter the **world to replace or upload**.  
4. The system will automatically extract the files to the correct folder and delete the temporary ZIP.  
5. It is recommended to wait a few seconds for the extraction to complete before using the world.

---

### Important Notes:

- Files with special characters such as `/ ? ( )` may cause errors during extraction.  
- For Bedrock worlds, only `.zip` or `.mcworld` files are accepted.  
- If there are errors during upload or extraction, check the file and ensure it has the correct format.  
- For assistance, join our Discord: [MineColab Discord](https://discord.com/invite/minecolab-improved-1214801871827501097)
