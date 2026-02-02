---
title: Obtener Link de Descarga
description: Como obtener URL de descarga para usarlo en MineColab
---

## Cómo obtener URL para descargar mods/plugins/modpacks en MineColab

Esta sección explica cómo obtener y usar enlaces directos de descarga para tu servidor de Minecraft en Colab. Esto aplica únicamente si seleccionas la opción `"url"` en la celda de descarga.

---

## 1. Curseforge

1. **Seleccionar la versión:**  
   Haz clic en la versión del mod/plugin/modpack que quieres descargar.

2. **Ir al botón de descarga:**  
   Haz clic en el **botón de descarga**. Esto te llevará a una página intermedia.  
   <img src="/assets/images/plugin-mod/Curseforge.png" alt="Curseforge" />

3. **Esperar unos segundos:**  
   Espera aproximadamente **4 segundos** hasta que aparezca el mensaje:

```

If your download didn’t start, try again

```

4. **Copiar el enlace directo:**  
Haz **clic derecho en “try again” → Copiar enlace**.  
El enlace debe tener un formato similar a este:

```

[https://www.curseforge.com/api/v1/mods/238222/files/6614392/download](https://www.curseforge.com/api/v1/mods/238222/files/6614392/download)

```

---

## 2. Modrinth

1. **Buscar el mod/plugin/modpack:**  
Encuentra el proyecto que deseas descargar en Modrinth. Al hacer click te llevará a la página del proyecto.  
<img src="/assets/images/plugin-mod/Modrinth.png" alt="Modrinth" />

2. **Seleccionar versión y plataforma:**  
Haz clic en **Download → Selecciona la versión** y el software de tu Minecraft (por ejemplo, `your_software`).

3. **Copiar enlace directo:**  
Haz **clic derecho en el botón “Download” → Copiar enlace**.  
El enlace debe tener un formato similar a este:

```

[https://cdn.modrinth.com/data/u6dRKJwZ/versions/x/jei-1.21.7-your\_software-x.jar](https://cdn.modrinth.com/data/u6dRKJwZ/versions/x/jei-1.21.7-your_software-x.jar)

```

:::caution
Algunos tipos de archivos como **shaderpacks, resourcepacks y datapacks** podrían no funcionar correctamente usando la opción `"url"`. Para ellos se recomienda usar la opción `"upload_manually"`.
:::

:::note
Los mods que requieren instalación en el **cliente** no funcionan en el servidor y podrían ocasionar errores.  
Para más información, visita: [Información sobre mods](/minecolab/guide/mods-plugins/info/mod-info)
:::
