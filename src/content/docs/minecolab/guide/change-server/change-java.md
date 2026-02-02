---
title: Change Java
description: How to change Java version in MineColab.
---
## Custom Java Version / Build

<img src="/assets/images/celdas/custom_java.png" alt="custom_java" />

**Description:**  
This cell allows users to **set a custom Java build or version** according to the Minecraft server version running in Colab.

:::caution
Make sure to select a Java version compatible with your server version; otherwise, it may not work correctly.  
> To check which Java version to use, visit: `minecolab/server-setup/console`
:::

**Main Options:**

* `CustomJavaEnabled`: Enables or disables custom Java selection.

  * `"True"` → The user can choose a Java build and version.  
  * `"False"` → The default Java configuration will be used.

**What to expect when running the cell:**

1. If `CustomJavaEnabled` is set to `"True"`, interactive menus will appear to:

   * **Select the available Java build**, for example:

     * OpenJDK - Default  
     * Amazon Corretto  
     * Azul Zulu
   * **Select the Java version** compatible with the chosen build and server version.
2. The selection is automatically saved in the server configuration (`colabconfig`).  
3. A final message will be displayed showing the selected Java version and build:

```log
DONE. Custom Java set to True
Build: Azul Zulu. Version: 21
```

:::note
This configuration only applies to the currently active server and will persist for future runs until changed again.
:::
