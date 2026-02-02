---
title: Cambiar Java
description: Como cambiar el java en MineColab.
---
## Custom Java Version / Build

<img src="/assets/images/celdas/custom_java.png" alt="custom_java" />

**Descripción:**
Esta celda permite al usuario **establecer un build o versión personalizada de Java** según la versión del servidor Minecraft que se está ejecutando en Colab.

:::caution
Asegúrate de seleccionar una versión de Java compatible con la versión de tu servidor, de lo contrario podría no funcionar correctamente.
> Para verificar qué versión de Java debes usar, visita la siguiente página: `minecolab/server-setup/console`
:::

**Opciones principales:**

* `CustomJavaEnabled`: Permite activar o desactivar la selección personalizada de Java.

  * `"True"` → El usuario puede elegir un build y versión de Java.
  * `"False"` → Se mantiene la configuración predeterminada de Java.

**Qué esperar al ejecutar la celda:**

1. Si `CustomJavaEnabled` está en `"True"`, aparecerán menús interactivos para:

   * **Seleccionar el build de Java** disponible, por ejemplo:

     * OpenJDK - Default
     * Amazon Corretto
     * Azul Zulu
   * **Seleccionar la versión de Java** compatible con el build elegido y la versión del servidor.
2. La elección se guarda automáticamente en la configuración del servidor (`colabconfig`).
3. Se mostrará un mensaje final indicando la versión y build de Java seleccionados:

```log
DONE. Custom java set to True
Build: Azul Zulu. Version: 21
```

:::note
Esta configuración se aplica solo al servidor actualmente en uso y se mantendrá para futuras ejecuciones hasta que se cambie nuevamente.
:::
