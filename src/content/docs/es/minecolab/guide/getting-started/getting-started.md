---
title: Comenzando
description: Cómo empezar a usar MineColab.
---

## ¿Qué es MineColab Improved?

MineColab Improved es una herramienta que te permite crear y ejecutar un servidor de Minecraft directamente desde tu Google Drive, utilizando Google Colab, un entorno gratuito basado en Jupyter Notebook y Ubuntu.

MineColab Improved se enfoca en tres aspectos clave:

- **Facilidad de uso**: Está diseñado para ser fácil de configurar, sin necesidad de conocimientos avanzados sobre servidores.
- **Estabilidad**: Ofrece una experiencia estable al ejecutar el servidor en la nube, sin depender de tu hardware local.
- **Accesibilidad**: Al usar Google Colab y Drive, no es necesario pagar por alojamiento ni mantener tu computadora encendida para ejecutar el servidor.

## Requisitos

- Cuenta de Google activa: Necesaria para acceder a **Google Colab y Google Drive**, donde se alojan y ejecutan los archivos del servidor.

## Obtener el cuadernok

MineColab Improved se ofrece como un cuaderno de **Google Colab** listo para usar. Puedes obtenerlo desde el <a href="https://discord.com/invite/minecolab-improved-1214801871827501097" target="_blank">**servidor oficial de Discord**</a>
o desde el <a href="https://github.com/N-aksif-N/MineColab_Improved/releases" target="_blank">**repositorio del proyecto**</a>.


## Subir el cuaderno de MineColab Improved

Lo primero que necesitamos hacer es abrir <a href="https://colab.research.google.com/" target="_blank">Google Colab</a> y subir el cuaderno de MineColab Improved.

###### Opción 1: Subir desde la página de inicio

1. En la página principal, puede que veas una ventana titulada **"Abrir un cuaderno"**.
2. Haz clic en la pestaña **"Subir"**.
3. Verás el mensaje: Explora o arrastra un archivo aquí.
4. Haz clic en el botón **"Examinar"** o arrastra y suelta tu archivo del cuaderno en esa área.
5. Una vez subido, el cuaderno se abrirá automáticamente y estará listo para usar.

###### Opción 2: Subir desde el menú Archivo

1. En Colab, haz clic en el menú **"Archivo"** en la esquina superior izquierda.
2. Selecciona **"Subir cuaderno..."** en el menú desplegable.
3. Selecciona "Subir cuaderno..." en el menú desplegable.
4. Una vez subido, el cuaderno se abrirá en una nueva pestaña de Colab, listo para usar.

:::note
Asegúrate de iniciar sesión con la **misma cuenta de Google** tanto en **Google Colab como en Google Drive**.
:::

## Ejecutar MineColab Improved

Después de subir el cuaderno, el primer paso es ejecutar la celda `[❗] Setup`. <img src="/assets/images/celdas/setup.png" alt="Setup" /> Esta celda descargará e instalará todas las dependencias necesarias para asegurarse de que MineColab Improved funcione correctamente.

:::note
Durante la configuración, se te pedirá acceso a tu Google Drive para guardar los datos del servidor. Este permiso se solicitará cada vez que se reinicie el entorno de Colab.
:::

Cuando la celda termine de ejecutarse, deberías ver una salida similar a esta:

```log
Latest version available: x.x.x
Yehaa! Version up to date, you can continue using this notebook!
Downloading required libraries... Please wait.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ xxx.x/xxx.x kB x.x MB/s eta 0:00:00
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ xxx.x/xxx.x kB xx.x MB/s eta 0:00:00
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ x.x/x.x MB xx.x MB/s eta 0:00:00
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ xx.x/xx.x kB x.x MB/s eta 0:00:00
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ xxx.x/xxx.x kB x.x MB/s eta 0:00:00
Mounted at /content/drive
[ LOG ] Colab Version: x.x.x
[ LOG ] Getting VM Info
+----------------------------------------+
|       Colab VM Information             |
|       ----------------------           |
|       IP: xxx.xxx.xxx.xxx              |
|       City: [Your City]                |
|       Region: [Your Region]            |
|       Country: [Your Country]          |
+----------------------------------------+
[ LOG ] Upgrading VM packages
apt cache successfully updated
apt cache successfully upgraded
/content/drive/MyDrive/minecraft
[ LOG ] Completed
```

:::caution
Los valores de **“Colab VM Information”** pueden cambiar cada vez que se reinicia el entorno de ejecución en Google Colab.
:::

Cuando se complete la ejecución de la celda [❗] Set up, desplázate hacia abajo hasta la sección etiquetada como 🔥 Starting. <img src="/assets/images/celdas/Starting.png" alt="starting" />
Allí encontrarás la siguiente celda que debes ejecutar: **Create Server > Create your server**.

En este paso, deberás elegir un nombre para tu servidor.

```text
╔═══════════════════════════════════╗
║ Create your server             ║
╠═══════════════════════════════════╣
║ server_name:[Insert text here] ║
╚═══════════════════════════════════╝
```

:::tip
Evita usar espacios en el nombre de tu servidor.  
:::

:::caution
No puedes volver a usar un nombre de servidor que ya haya sido utilizado.
Asegúrate de elegir un nombre único cada vez.
:::

Después de ingresar el nombre, ejecuta la celda.
A continuación, se te pedirá que:

1. Selecciona el software del servidor (por ejemplo, Paper, Purpur, etc.).
2. Elige la versión de Minecraft.
3. Escoge el servicio de túnel (se utiliza para hacer que el servidor sea accesible en línea).

Cada proveedor de túnel tiene su propia forma de configurarse, con pasos específicos que pueden variar entre uno y otro.

Lo que se muestra a continuación es solo un ejemplo general, ya que los pasos reales pueden variar según el túnel que elijas.

```log
[ LOG ] Colab Version: x.x.x
[ LOG ] Directory /content/drive/MyDrive/minecraft/test created  
[ LOG ] Checking if folder created. Please wait.  

[ LOG ] Select your server type:  
╔════════════════════════════════╗  
║     Select server type      ║  
╚════════════════════════════════╝  

[ LOG ] Chosen server type: your_software  

[ LOG ] Select your server version:  
╔════════════════════════════════╗  
║    Select server version    ║  
╚════════════════════════════════╝  

[ LOG ] Chosen server version: 1.x.x  

[ LOG ] Select a Tunnel provider:  
╔════════════════════════════════╗  
║    Select tunnel provider   ║  
╚════════════════════════════════╝  

[ LOG ] Chosen Tunnel service: your_tunnel  
[ LOG ] Downloading your_software.jar  
[ LOG ] Completed!
```

Dado que la configuración del tunnel puede ser bastante extensa, dividiremos esta sección en varias partes, cada una dedicada a un proveedor de túnel distinto y explicada en detalle.
