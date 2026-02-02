---
title: Get Download Link
description: How to obtain a direct download URL to use in MineColab
---

## How to Get a URL to Download Mods/Plugins/Modpacks in MineColab

This section explains how to get and use direct download links for your Minecraft server in Colab.  
This applies only if you select the `"url"` option in the download cell.

---

## 1. Curseforge

1. **Select the version:**  
   Click on the version of the mod/plugin/modpack you want to download.

2. **Go to the download button:**  
   Click the **download button**. This will take you to an intermediate page.  
   <img src="/assets/images/plugin-mod/Curseforge.png" alt="Curseforge" />

3. **Wait a few seconds:**  
   Wait approximately **4 seconds** until you see the message:

```
If your download didn’t start, try again
```

4. **Copy the direct link:**  
   Right-click on **“try again” → Copy link**.  
   The link should look like this:

```
[https://www.curseforge.com/api/v1/mods/238222/files/6614392/download](https://www.curseforge.com/api/v1/mods/238222/files/6614392/download)
```

---

## 2. Modrinth

1. **Find the mod/plugin/modpack:**  
   Go to the project you want to download on Modrinth. Clicking it will take you to the project page.  
   <img src="/assets/images/plugin-mod/Modrinth.png" alt="Modrinth" />

2. **Select version and platform:**  
   Click **Download → Select the version** and the software for your Minecraft (e.g., `your_software`).

3. **Copy the direct link:**  
   Right-click the **“Download” button → Copy link**.  
   The link should look like this:

```
[https://cdn.modrinth.com/data/u6dRKJwZ/versions/x/jei-1.21.7-your_software-x.jar](https://cdn.modrinth.com/data/u6dRKJwZ/versions/x/jei-1.21.7-your_software-x.jar)
```

:::caution
Some file types like **shaderpacks, resourcepacks, and datapacks** may not work correctly using the `"url"` option.  
For these, it is recommended to use the `"upload_manually"` option.
:::

:::note
Mods that require **client-side installation** will not work on the server and may cause errors.  
For more information, visit: [Mod Information](/minecolab/guide/mods-plugins/info/mod-info)
:::
