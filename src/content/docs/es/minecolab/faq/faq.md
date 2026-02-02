---
title: FAQ — MineColab
description: MineColab Preguntas frecuentes y respuestas.
---
## ¿Por qué demora tanto en instalarse?

En algunos softwares como Forge, NeoForge y otros similares, es completamente normal que la instalación tome más tiempo.
Esto se debe a que MineColab aplica un cooldown de verificación, el cual asegura que el proceso se haya completado correctamente y evita posibles errores durante la instalación o carga de mods.

El tiempo promedio de instalación puede variar entre 10 y 40 minutos, dependiendo de la conexión y los recursos asignados en Google Colab.

## ¿Por qué a veces no se guarda mi progreso de Minecraft?

Esto ocurre por una **pérdida temporal de conexión entre Google Colab y Google Drive**.
Cuando eso pasa, el entorno de Colab no puede sincronizar los archivos del mundo o del servidor en tiempo real, por lo que los últimos cambios no se guardan.

**Solución:**
Si es un servidor con **mods** o **plugins**, instala uno que realice **guardados automáticos (autosave)** periódicos.
No existe otra solución definitiva, ya que la causa depende directamente de la conexión entre Colab y Drive.

Siendo algunos que puedes usar son estos (puede que existan más, pero estos son los más comunes):

* **[AutoSaveServer](https://www.curseforge.com/minecraft/bukkit-plugins/autosaveserver)** – Guarda automáticamente el mundo y los datos del jugador en intervalos configurables.
* **[SilentAutoSave](https://modrinth.com/plugin/silent-auto-save)** – Realiza guardados sin mostrar mensajes al jugador ni en consola.
* **[AutoSaveWorld](https://www.curseforge.com/minecraft/bukkit-plugins/autosaveworld)** – Incluye autosave, backups y reinicios automáticos.
* **[AutoBackup](https://modrinth.com/plugin/autobackup)** – Crea copias de seguridad programadas de mundos completos.

:::caution
Antes de instalar cualquiera de estos plugins o mods, **verifica su compatibilidad** con la versión del servidor que estés usando (**Spigot**, **Paper**, **Forge** o **Fabric**).
Algunos autosaves pueden generar lag si los intervalos son muy cortos o si el mundo es muy grande.
:::


## ¿Por qué me sale el error getsockopt o SocketException?

Este error ocurre cuando **Minecraft no puede establecer o mantener conexión con el túnel** (por ejemplo, Playit) o con el **servidor remoto**.
No es un problema de MineColab, sino de **red o conectividad externa**, ya sea por el túnel, el firewall o el proveedor de internet (ISP).

### Causas comunes

* Fallos temporales o bloqueos en el túnel (Playit, Ngrok, etc.).
* IP o puerto incorrecto en la conexión.
* Bloqueo del tráfico por parte del ISP o del firewall local.
* Configuración incorrecta de IPv6 o uso de proxy no soportado.
* Incompatibilidad de mods o plugins con la versión actual del servidor.

### Posibles soluciones

1. **Comprueba el túnel de Playit**

   * Usa la **IP numérica y puerto**, no el dominio.

     ```
     209.141.32.15:25565
     ```
   * Si no conecta, **reinicia o recrea el túnel**.
   * Si tu **ISP bloquea conexiones**, considera usar un **túnel regional premium**.

2. **Verifica tu conectividad de red**

   * En Windows, abre **CMD** o **PowerShell**, y ejecuta:

     ```
     ping 209.141.32.15
     ```
   * Si obtienes **100% pérdida de paquetes**, tu conexión está bloqueada o filtrada.
   * Prueba conectarte desde otra red (por ejemplo, **hotspot móvil** o **VPN temporal**).

3. **Revisa firewall y antivirus**

   * Permite **Java** y **Playit** en el firewall.
   * En Windows:

     ```
     Panel de control → Firewall → Permitir app → Java y Playit
     ```
   * Desactiva antivirus adicionales (Avast, McAfee, etc.) solo para probar.

4. **Desactiva IPv6 o proxy si no son necesarios**

   * Algunos proxies o redes IPv6 pueden interferir.
   * Si usas **Proxy Protocol**, asegúrate que el servidor lo soporte:
     [Proxy Protocol Support (GitHub)](https://github.com/PanSzelescik/proxy-protocol-support)

5. **Comprueba compatibilidad de mods y versiones**

   * Mods, plugins o resource packs incompatibles pueden generar **SocketException**.
   * Usa siempre versiones estables y acordes con el servidor.

6. **Confirma que Playit Agent esté activo**

   * Si el servidor funciona localmente, pero no mediante el túnel, es casi seguro que hay un **bloqueo del ISP** o un **problema en el túnel**.

:::note
Este error **no proviene de MineColab**, sino de factores externos.
MineColab solo proporciona el entorno de ejecución —la estabilidad de la conexión depende de tu red, túnel y configuración local.
:::

## Me sale un error en los mods o plugins, ¿cómo lo soluciono?

Si el error proviene de un mod o plugin, MineColab no brinda soporte directo a esos casos, salvo que se confirme que el problema fue causado por una interferencia del propio entorno de MineColab.

Si un moderador del servidor desea ayudarte con la solución y MineColab no está involucrado, su asistencia es opcional, no obligatoria.

## ¿Qué túnel recomienda MineColab?

La elección del túnel depende completamente del usuario.
MineColab es compatible con varios servicios como Playit, Localtonet, Ngrok o Zrok.

Sin embargo, si se tuviera que recomendar uno, sería Playit, debido a su facilidad de configuración, compatibilidad con Minecraft y estabilidad en conexiones públicas sin necesidad de puertos abiertos.

## ¿Cuánto tiempo dura MineColab en Google Colab?

MineColab depende directamente de los **límites de ejecución y actividad de Google Colab**.
A continuación se detalla cómo funciona y cuánto tiempo puede mantenerse activo:

### Duración máxima aproximada: 12 horas

Google Colab puede mantenerse activo un máximo de **12 horas seguidas** antes de apagarse automáticamente, incluso si el entorno está funcionando correctamente.
Una vez finalizado ese tiempo, el servidor se desconecta y debe reiniciarse manualmente.

### Si cierras o dejas inactiva la página, se apaga en pocos minutos

* Si **cierras la pestaña del navegador**, Colab se apaga entre **10 y 20 minutos** después.
* Si **no realizas ninguna acción visible** (sin mover el mouse ni interactuar con la notebook), Colab puede cerrar los procesos automáticamente.
* Si **apagas tu computadora o pierdes conexión**, el entorno se detiene **de inmediato**, incluso si estaba ejecutando MineColab.

#### Usar una máquina virtual (VM) puede alargar el tiempo de ejecución

Es posible usar una **máquina virtual** con un **navegador activo** y un **script de actividad simulada** para evitar la desconexión por inactividad.
Esto **no elimina el límite máximo de 12 horas**, pero permite mantener la sesión activa durante muchas horas sin tener tu computadora encendida directamente.

### Límite de uso mensual (versión gratuita)

Google no publica un límite mensual oficial para la versión gratuita de Colab.
Los recursos **no son ilimitados ni garantizados**, y los límites pueden **variar según la demanda y el patrón de uso**.

En la práctica:

* Algunos usuarios experimentan **bloqueos o restricciones temporales** tras un uso intensivo.
* **No hay un número fijo** de horas o sesiones mensuales visibles para el usuario común.

:::note
**Colab tiene límites dinámicos y automáticos**, pero **no un límite mensual fijo o documentado oficialmente**.
:::

## ¿Puedo apoyar en el proyecto?

Por supuesto que sí.
Si deseas colaborar con MineColab, solo necesitas abrir un ticket en el servidor oficial de MineColab y explicar en qué área te gustaría apoyar (desarrollo, documentación, soporte, pruebas, etc.).

El equipo revisará tu solicitud y te indicará los pasos a seguir.

## ¿Cómo puedo tener un ping bajo en Playit?

Un ping bajo depende de varios factores:

Tu conexión a Internet: una red inestable o con poca velocidad aumenta la latencia.

La ubicación del agente de Playit: si el nodo está lejos de tu país, el ping sube; usa uno cercano.

Cantidad de jugadores en el servidor: muchos jugadores pueden generar sobrecarga de red.

Número de mods y plugins: demasiados aumentan el procesamiento y la latencia.

Para lograr un ping bajo, usa un agente de Playit cercano, evita sobrecargar el servidor con mods o jugadores, y asegúrate de tener una conexión estable.
Puedes optimizar el servidor ajustando los mods, plugins u otras configuraciones, pero eso queda bajo tu propia investigación.

El soporte de MineColab no se encarga de este tipo de optimizaciones personalizadas.