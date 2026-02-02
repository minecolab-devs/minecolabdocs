---
title: How to Backup Worlds
description: Quickly backup your Minecraft worlds in MineColab.
---

## World Backup in MineColab

<img src="/assets/images/celdas/backup_world.png" alt="backup_world" />

This cell allows you to **backup one, multiple, or all worlds** from your server (`world`, `world_nether`, `world_the_end`).

---

### How to Use:

1. **Detect available worlds**  
   The cell automatically identifies the worlds present on your server.

2. **Select the world to backup**  
   - If there is **only one world**, it will be backed up automatically.  
   - If there are **multiple worlds**, a dropdown menu will appear to choose one or select **All** to backup all worlds.

3. **Backup folder:**  
   All backups are saved in:

```text
backup/world/server_name_worlds_YYYY-MM-DDTHHMMSS
```

4. **Backup process:**  
   - The cell copies the selected worlds to the corresponding subfolder.  
   - Real-time progress logs are displayed.

---

### Quick Notes:

- The backup includes **Nether and The End** if they exist.  
- It is recommended to **make backups before major changes** to the server.  
- Previous backups **are not overwritten** thanks to the unique timestamp.  

:::note
To restore a world, copy the files from the backup subfolder to the server's main folder.
:::
