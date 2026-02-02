---
title: Backup de Archivos o Servidor
description: Cómo respaldar archivos específicos o todo el servidor en MineColab
---

## Backup de Archivos o Servidor en MineColab

<img src="/assets/images/celdas/backup_files.png" alt="backup_files" />

Esta celda permite **respaldar un archivo específico** o **todo el servidor** de Minecraft y descargarlo opcionalmente en tu computadora.

---

### Cómo usar:

1. **Selecciona el servidor:**  
   - Aparecerá un menú desplegable con todos los servidores disponibles.  
   - Selecciona el servidor que deseas respaldar.

2. **Elige el tipo de backup:**  
   - `"server"` → Respalda **todo el servidor** en un archivo ZIP.  
   - `"file"` → Respalda un **archivo o carpeta específica** dentro del servidor.

3. **Opciones al respaldar un archivo:**
   - **Compress as .zip:** Comprime el archivo o carpeta seleccionada en un ZIP.  
   - **Save in server-named folder:** Guarda el archivo o carpeta en una subcarpeta dentro de `backup/`.

4. **Descargar el respaldo:**  
   - Después de crear el backup, puedes elegir si quieres **descargarlo** a tu computadora.  
   - Los archivos ZIP se descargan directamente desde Google Colab.

5. **Carpeta de respaldo:**  
   - Todos los backups se almacenan en:

```

backup/\<nombre\_servidor>-backup-YYYY-MM-DDTHHMMSS/

```

- Para backups de todo el servidor: `backup/<nombre_servidor>-YYYY-MM-DDTHHMMSS.zip`

---

### Notas importantes:

- Si existe un backup previo con el mismo nombre, se **previene sobrescribirlo**.  
- Para restaurar, simplemente copia los archivos desde la carpeta de respaldo al servidor correspondiente.  
- Se recomienda hacer backups antes de realizar **cambios importantes** en el servidor o en archivos críticos.

:::note
El sistema permite elegir si usar una carpeta de backup existente o crear una nueva automáticamente.
:::

