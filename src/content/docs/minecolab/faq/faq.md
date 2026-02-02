---
title: FAQ — MineColab
description: MineColab FAQ and answers.
---
## Why does it take so long to install?

For some software like Forge, NeoForge, and similar, it is completely normal for the installation to take longer.  
This is because MineColab applies a verification cooldown, which ensures that the process has completed correctly and prevents possible errors during mod installation or loading.

The average installation time can vary between 10 and 40 minutes, depending on your connection and the resources allocated in Google Colab.

## Why is my Minecraft progress sometimes not saved?

This happens due to a **temporary loss of connection between Google Colab and Google Drive**.  
When this occurs, the Colab environment cannot synchronize world or server files in real time, so the latest changes are not saved.

**Solution:**  
If it is a server with **mods** or **plugins**, install one that performs **periodic autosaves**.  
There is no other definitive solution, as the cause depends directly on the connection between Colab and Drive.

Some that you can use include (there may be more, but these are the most common):

* **[AutoSaveServer](https://www.curseforge.com/minecraft/bukkit-plugins/autosaveserver)** – Automatically saves the world and player data at configurable intervals.  
* **[SilentAutoSave](https://modrinth.com/plugin/silent-auto-save)** – Performs saves without displaying messages to players or in the console.  
* **[AutoSaveWorld](https://www.curseforge.com/minecraft/bukkit-plugins/autosaveworld)** – Includes autosave, backups, and automatic restarts.  
* **[AutoBackup](https://modrinth.com/plugin/autobackup)** – Creates scheduled backups of entire worlds.

:::caution
Before installing any of these plugins or mods, **check their compatibility** with the server version you are using (**Spigot**, **Paper**, **Forge**, or **Fabric**).  
Some autosaves may cause lag if the intervals are too short or if the world is very large.
:::

## Why do I get a getsockopt or SocketException error?

This error occurs when **Minecraft cannot establish or maintain a connection with the tunnel** (e.g., Playit) or with the **remote server**.  
It is not a MineColab problem but an **external network or connectivity issue**, either due to the tunnel, firewall, or internet service provider (ISP).

### Common causes

* Temporary failures or blockages in the tunnel (Playit, Ngrok, etc.)  
* Incorrect IP or port in the connection  
* Traffic blocked by ISP or local firewall  
* Incorrect IPv6 configuration or unsupported proxy usage  
* Mods or plugins incompatible with the current server version

### Possible solutions

1. **Check the Playit tunnel**

   * Use the **numeric IP and port**, not the domain.

     ```
     209.141.32.15:25565
     ```
   * If it does not connect, **restart or recreate the tunnel**.  
   * If your **ISP blocks connections**, consider using a **regional premium tunnel**.

2. **Check your network connectivity**

   * On Windows, open **CMD** or **PowerShell**, and run:

     ```
     ping 209.141.32.15
     ```
   * If you get **100% packet loss**, your connection is blocked or filtered.  
   * Try connecting from another network (e.g., **mobile hotspot** or **temporary VPN**).

3. **Check firewall and antivirus**

   * Allow **Java** and **Playit** in the firewall.  
   * On Windows:

     ```
     Control Panel → Firewall → Allow app → Java and Playit
     ```
   * Temporarily disable additional antivirus software (Avast, McAfee, etc.) for testing.

4. **Disable IPv6 or proxy if not needed**

   * Some proxies or IPv6 networks can interfere.  
   * If using **Proxy Protocol**, make sure the server supports it:  
     [Proxy Protocol Support (GitHub)](https://github.com/PanSzelescik/proxy-protocol-support)

5. **Check mods and version compatibility**

   * Incompatible mods, plugins, or resource packs can generate **SocketException**.  
   * Always use stable versions compatible with the server.

6. **Ensure Playit Agent is active**

   * If the server works locally but not through the tunnel, there is likely an **ISP blockage** or a **tunnel issue**.

:::note
This error **does not come from MineColab**, but from external factors.  
MineColab only provides the execution environment; connection stability depends on your network, tunnel, and local configuration.
:::

## I get errors in mods or plugins, how do I fix them?

If the error comes from a mod or plugin, MineColab does not provide direct support for those cases unless it is confirmed that the issue was caused by interference from the MineColab environment itself.

If a server moderator wants to help you solve it and MineColab is not involved, their assistance is optional, not mandatory.

## Which tunnel does MineColab recommend?

The tunnel choice depends entirely on the user.  
MineColab is compatible with several services like Playit, Localtonet, Ngrok, or Zrok.

However, if one were to be recommended, it would be Playit, due to its ease of setup, compatibility with Minecraft, and stability for public connections without the need to open ports.

## How long does MineColab last on Google Colab?

MineColab depends directly on **Google Colab's execution and activity limits**.  
Here’s how it works and how long it can stay active:

### Approximate maximum duration: 12 hours

Google Colab can stay active for a maximum of **12 consecutive hours** before automatically shutting down, even if the environment is working correctly.  
Once that time ends, the server disconnects and must be restarted manually.

### If you close or leave the page inactive, it shuts down in minutes

* If you **close the browser tab**, Colab shuts down between **10 and 20 minutes** afterward.  
* If you **perform no visible actions** (no mouse movement or notebook interaction), Colab may close processes automatically.  
* If you **turn off your computer or lose connection**, the environment stops **immediately**, even if MineColab was running.

#### Using a virtual machine (VM) can extend runtime

It is possible to use a **virtual machine** with an **active browser** and a **simulated activity script** to avoid disconnection due to inactivity.  
This **does not remove the 12-hour maximum limit**, but it allows you to keep the session active for many hours without your computer being on directly.

### Monthly usage limit (free version)

Google does not publish an official monthly limit for the free version of Colab.  
Resources **are not unlimited or guaranteed**, and limits can **vary depending on demand and usage patterns**.

In practice:

* Some users experience **temporary blocks or restrictions** after heavy use.  
* There is **no fixed number** of hours or monthly sessions visible to the average user.

:::note
**Colab has dynamic and automatic limits**, but **not a fixed monthly limit officially documented**.
:::

## Can I support the project?

Absolutely.  
If you want to collaborate with MineColab, just open a ticket in the official MineColab server and explain in which area you would like to contribute (development, documentation, support, testing, etc.).

The team will review your request and provide the steps to follow.

## How can I get low ping on Playit?

Low ping depends on several factors:

* Your internet connection: an unstable or slow network increases latency.  
* Playit agent location: if the node is far from your country, ping rises; use one nearby.  
* Number of players on the server: many players can overload the network.  
* Number of mods and plugins: too many increase processing and latency.

To achieve low ping, use a nearby Playit agent, avoid overloading the server with mods or players, and ensure a stable connection.  
You can optimize the server by adjusting mods, plugins, or other settings, but that is your responsibility.

MineColab support does not handle these types of custom optimizations.
