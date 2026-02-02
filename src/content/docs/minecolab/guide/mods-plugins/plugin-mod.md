---
title: Manage Server Add-ons
description: How to download, upload, or install mods, plugins, modpacks, resourcepacks, and shaderpacks in MineColab.
---

## Download and Install Minecraft Mods/Plugins/Modpacks

<img src="/assets/images/celdas/mods.png" alt="mods" />

This cell allows you to **download, upload, or install mods, plugins, modpacks, resourcepacks, and shaderpacks** for your Minecraft server in Colab. It supports different sources like **Curseforge, Modrinth, direct URL**, as well as special installations for **GeyserMC and Dynmap**.

---

**Main Options:**

1. **Choice (Installation method):**
   * `"search"` → Search for a mod/plugin/modpack by name.
   * `"url"` → Download directly from a URL.
   * `"upload_manually"` → Upload a ZIP or individual files from your computer.
   * `"install_geysermc"` → Install GeyserMC and Floodgate according to server type.
   * `"dynmap support"` → Download Dynmap for real-time map visualization.

2. **Search Name or URL:**  
   Name of the mod/plugin/modpack to search for, or direct URL if `choice` is `"url"`.

3. **Software (Download/Upload Source):**  
   * `"Curseforge"` or `"Modrinth"` depending on the platform of the project.  
   :::caution
   It is important to select the correct software according to the source of the project; otherwise, the download or installation may fail.
   :::

4. **Categories, Versions, and Project Types:**  
   Define **compatibility with your server**:  
   * Categories: `vanilla`, `fabric`, `forge`, `paper`, `purpur`, etc.  
   * Versions: `"default"` uses the server's version.  
   * Project Types: `mods`, `plugins`, `modpacks`, `resourcepacks`, `shaderpacks`, `datapacks`.

5. **Index:**  
   Sorting criteria when searching: `relevance`, `downloads`, `follows`, `newest`, `updated`.

:::caution
> Make sure that the mods, plugins, or modpacks are **compatible with your server type and version**, otherwise they may **break your server or not work properly**.

> The options `resourcepacks`, `shaderpacks`, and `datapacks` **only work with `upload_manually`**. Attempting to download them automatically may cause errors.

> Some options, like `GeyserMC` and `Dynmap`, require your server to have **specific plugins or mods** and an active tunnel (`ngrok`, `playit`, `zrok`, etc.).
:::

**What to expect when running the cell:**

1. **If `"upload_manually"` is selected:**  
   A file picker will open to upload from your computer. Large files (+5MB) are supported. ZIPs are automatically extracted and placed in the correct folder (`mods/`, `plugins/`, `tmp/`, `resourcepacks/`, etc.).

2. **If `"url"` is selected:**  
   You will be asked for the download link and optionally the file name and format. The file will be downloaded directly into the corresponding server folder.

3. **If `"search"` is selected:**  
   The chosen platform (Curseforge or Modrinth) will be searched according to the category, version, and project type filters. Results will be listed for you to select the desired project.

4. **If `"install_geysermc"` is selected:**  
   Automatically downloads and installs **GeyserMC and Floodgate** according to your server (`Fabric`, `Paper`, `Velocity`, etc.). Version compatibility with your server is checked.

5. **If `"dynmap support"` is selected:**  
   Downloads the compatible Dynmap plugin/mod and places it in the correct folder. Additional installation information for Linux will be displayed.

---

:::note
* Necessary folders are automatically created if they do not exist (`mods`, `plugins`, `tmp`, etc.).  
* Modpack ZIP files are extracted, and contents are distributed into the correct folders according to type.  
* Progress logs are generated for each action, and common download or compatibility errors are handled.
:::

:::note
Mods that require **client-side installation** will not work on the server and may cause errors.  
For more information, visit:  
[Mod Information](/minecolab/guide/mods-plugins/info/mod-info)
:::
