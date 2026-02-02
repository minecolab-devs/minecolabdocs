---
title: Backup Files or Server
description: How to backup specific files or the entire Minecraft server in MineColab
---

## Backup Files or Server in MineColab

<img src="/assets/images/celdas/backup_files.png" alt="backup_files" />

This cell allows you to **backup a specific file** or **the entire Minecraft server** and optionally download it to your computer.

---

### How to Use:

1. **Select the server:**  
   - A dropdown menu will show all available servers.  
   - Select the server you want to backup.

2. **Choose the type of backup:**  
   - `"server"` → Backs up **the entire server** into a ZIP file.  
   - `"file"` → Backs up a **specific file or folder** within the server.

3. **Options when backing up a file:**
   - **Compress as .zip:** Compress the selected file or folder into a ZIP.  
   - **Save in server-named folder:** Save the file or folder into a subfolder inside `backup/`.

4. **Download the backup:**  
   - After creating the backup, you can choose to **download it** to your computer.  
   - ZIP files are downloaded directly from Google Colab.

5. **Backup folder:**  
   - All backups are stored in:

```
backup/<server_name>-backup-YYYY-MM-DDTHHMMSS/
```

- For full server backups: `backup/<server_name>-YYYY-MM-DDTHHMMSS.zip`

---

### Important Notes:

- If a previous backup with the same name exists, it will **not be overwritten**.  
- To restore, simply copy the files from the backup folder to the corresponding server.  
- It is recommended to create backups before making **important changes** to the server or critical files.

:::note
The system allows you to choose whether to use an existing backup folder or automatically create a new one.
:::
