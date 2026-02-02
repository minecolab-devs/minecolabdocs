---
title: Cómo hacer Backup de Mundos
description: Respalda tus mundos de Minecraft en MineColab de forma rápida.
---

## Backup de Mundos en MineColab

<img src="/assets/images/celdas/backup_world.png" alt="backup_world" />

Esta celda permite **respaldar uno, varios o todos los mundos** de tu servidor (`world`, `world_nether`, `world_the_end`).

---

### Cómo usar:

1. **Detecta los mundos disponibles**  
   La celda identifica automáticamente los mundos presentes en tu servidor.

2. **Selecciona el mundo a respaldar**  
   - Si hay **un solo mundo**, se respalda automáticamente.  
   - Si hay **varios mundos**, aparecerá un menú desplegable para elegir uno o seleccionar **All** para respaldar todos.

3. **Carpeta de respaldo:**  
   Todos los respaldos se guardan en:

   ```text
   backup/world/server_name_worlds_YYYY-MM-DDTHHMMSS
   ```

4. **Proceso de respaldo:**  
   - La celda copia los mundos seleccionados a la subcarpeta correspondiente.  
   - Se muestran logs de progreso en tiempo real.

---

### Notas rápidas:

- La copia incluye **Nether y The End** si existen.  
- Se recomienda **hacer backups antes de cambios importantes** en el servidor.  
- Los respaldos anteriores **no se sobrescriben** gracias al timestamp único.  

:::note
Para restaurar un mundo, copia los archivos desde la subcarpeta del respaldo a la carpeta principal del servidor.
:::