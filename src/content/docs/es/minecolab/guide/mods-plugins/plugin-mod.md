---
title: Administrar Complementos del Servidor
description: Cómo descargar, subir o instalar mods, plugins, modpacks, resourcepacks y shaderpacks en MineColab.
---

## Descargar e Instalar Mods/Plugins/Modpacks de Minecraft

<img src="/assets/images/celdas/mods.png" alt="mods" />

Esta celda permite **descargar, subir o instalar mods, plugins, modpacks, resourcepacks y shaderpacks** para tu servidor de Minecraft en Colab. Soporta diferentes fuentes como **Curseforge, Modrinth, URL directa**, así como instalaciones especiales de **GeyserMC y Dynmap**.

---

**Opciones principales:**

1. **Choice (Método de instalación):**
   * `"search"` → Buscar un mod/plugin/modpack por nombre.
   * `"url"` → Descargar directamente desde un enlace.
   * `"upload_manually"` → Subir un archivo ZIP o individual desde tu computadora.
   * `"install_geysermc"` → Instalar GeyserMC y Floodgate según el tipo de servidor.
   * `"dynmap support"` → Descargar Dynmap para visualización de mapas en tiempo real.

2. **Search Name or URL:**  
   Nombre del mod/plugin/modpack a buscar o enlace directo si `choice` es `"url"`.

3. **Software (Fuente de descarga o subida):**  
   * `"Curseforge"` o `"Modrinth"` según la plataforma de descarga o de subida.  
   :::caution
   Es importante seleccionar el software correcto según la fuente de descarga del proyecto, de lo contrario la descarga o instalación podría fallar.
   :::


4. **Categories, Versions y Project Types:**  
   Definen **compatibilidad con tu servidor**:  
   * Categories: `vanilla`, `fabric`, `forge`, `paper`, `purpur`, etc.  
   * Versions: `"default"` usa la versión del servidor.  
   * Project Types: `mods`, `plugins`, `modpacks`, `resourcepacks`, `shaderpacks`, `datapacks`.

5. **Index:**  
   Criterio de ordenamiento al buscar: `relevance`, `downloads`, `follows`, `newest`, `updated`.

:::caution
> Asegúrate de que los mods, plugins o modpacks sean **compatibles con la versión y tipo de tu servidor**, de lo contrario podrían **romper tu servidor o no funcionar correctamente**.

> Las opciones `resourcepacks`, `shaderpacks` y `datapacks` **solo funcionan con `upload_manually`**. Intentar descargarlas automáticamente puede generar errores.

> Algunas opciones, como `GeyserMC` y `Dynmap`, requieren que tu servidor tenga **plugins o mods específicos** y que el túnel esté activo (`ngrok`, `playit`, `zrok`, etc.).
:::

**Qué esperar al ejecutar la celda:**

1. **Si eliges `"upload_manually"`:**  
   Se abrirá un selector de archivos para subir desde tu computadora. Archivos grandes (+5MB). ZIPs se descomprimen automáticamente y se colocan en la carpeta correcta (`mods/`, `plugins/`, `tmp/`, `resourcepacks/`, etc.).

2. **Si eliges `"url"`:**  
   Se pedirá el enlace de descarga y opcionalmente el nombre y formato del archivo. Se descargará directamente en la carpeta correspondiente del servidor.

3. **Si eliges `"search"`:**  
   Se buscará en la plataforma elegida (Curseforge o Modrinth) según los filtros de categoría, versión y tipo. Se listarán los resultados y se te pedirá seleccionar el proyecto.

4. **Si eliges `"install_geysermc"`:**  
   Descarga e instala automáticamente **GeyserMC y Floodgate** según tu servidor (`Fabric`, `Paper`, `Velocity`, etc.). Comprueba compatibilidad de la versión del servidor.

5. **Si eliges `"dynmap support"`:**  
   Descarga el plugin/mod Dynmap compatible y lo coloca en la carpeta correcta. Se mostrará información de instalación adicional para Linux.

---


:::note
* Se crean automáticamente las carpetas necesarias si no existen (`mods`, `plugins`, `tmp`, etc.).  
* Archivos ZIP de modpacks se descomprimen y sus contenidos se distribuyen en las carpetas correctas según tipo.  
* Se generan logs de progreso para cada acción y se manejan errores comunes de descarga o compatibilidad.
:::

:::note
Los mods que requieren instalación en el **cliente** no funcionan en el servidor y podrían ocasionar errores.  
Para más información, visita:
[Información sobre mods](/minecolab/guide/mods-plugins/info/mod-info)
:::

