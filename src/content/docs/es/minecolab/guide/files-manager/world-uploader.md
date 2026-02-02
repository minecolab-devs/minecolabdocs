---
title: Subir Mundo de Minecraft
description: Cómo subir un mundo o mapa a tu servidor en MineColab
---

## Subir Mundo a MineColab

<img src="/assets/images/celdas/upload_world.png" alt="upload_seve" />

Esta celda permite **subir un mundo generado previamente** a tu servidor de Minecraft en Colab. Puedes subirlo desde tu computadora o mediante un enlace directo (`URL`).

### Opciones disponibles:

1. **Subir manualmente (`upload_manually`)**
   - Permite seleccionar un archivo desde tu computadora.
   - Archivos aceptados:
     - `.zip`
     - `.mcworld` (solo para Bedrock)
   - El archivo se descomprimirá automáticamente en la carpeta correspondiente del servidor.
   - Para mundos de Bedrock (`bedrock_mcworld`), se convierte automáticamente a ZIP antes de extraerlo.

2. **Usar URL directa (`url`)**
   - Ingresa un enlace directo a un archivo ZIP que contenga los archivos del mundo.
   - El archivo se descargará en el servidor y se extraerá automáticamente.
   - Asegúrate de que el enlace sea directo y que el ZIP no tenga nombres de archivo con caracteres especiales.


### Selección de Mundo

- `world` → Mundo principal (Overworld)
- `world_nether` → Nether
- `world_the_end` → End
- `bedrock_mcworld` → Mundo de Bedrock
- `see all available` → Muestra todos los mundos disponibles en el servidor para seleccionar

:::caution
Las opciones `world_nether` y `world_the_end` solo funcionan en ciertos tipos de servidores.
:::


### Proceso de subida:

1. Selecciona el **servidor** al que deseas subir el mundo.  
2. Elige el **método de subida** (`upload_manually` o `url`).  
3. Selecciona o ingresa el **mundo a reemplazar o subir**.  
4. El sistema extraerá automáticamente los archivos en la carpeta correspondiente y eliminará el ZIP temporal.  
5. Se recomienda esperar unos segundos para que la extracción se complete antes de usar el mundo.

---

### Notas importantes:

- Archivos con caracteres especiales como `/ ? ( )` pueden causar errores al extraer.  
- Para mundos de Bedrock, solo se aceptan `.zip` o `.mcworld`.  
- Si hay errores al subir o descomprimir, revisa el archivo y asegúrate de que cumpla con el formato correcto.  
- Consulta asistencia en nuestro Discord si encuentras problemas: [Discord MineColab](https://discord.com/invite/minecolab-improved-1214801871827501097)
