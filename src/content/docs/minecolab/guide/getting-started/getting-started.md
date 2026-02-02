---
title: Getting started
description: How to get started with running MineColab.
---

## What is MineColab Improved?

MineColab Improved is a tool that allows you to create and run a Minecraft server directly from your Google Drive, using Google Colab, a free environment based on Jupyter Notebook and Ubuntu.

MineColab Improved focuses on three key aspects:

- **Ease of use**: It is designed to be easy to set up, without requiring advanced server knowledge.
- **Stability**: It offers a stable experience running the server in the cloud, without relying on your local hardware.
- **Accessibility**: By using Google Colab and Drive, you don't need to pay for hosting or keep your computer on to run the server.

## Requirements

- Active Google account: Needed to access **Google Colab and Google Drive**, where server files are stored and executed.

## Getting the Notebook

MineColab Improved is offered as a ready-to-use **Google Colab notebook**. You can get it from the <a href="https://discord.com/invite/minecolab-improved-1214801871827501097" target="_blank">**official Discord server**</a>  
or from the <a href="https://github.com/N-aksif-N/MineColab_Improved/releases" target="_blank">**project repository**</a>.

## Uploading the MineColab Improved Notebook

The first thing we need to do is open <a href="https://colab.research.google.com/" target="_blank">Google Colab</a> and upload the MineColab Improved notebook.

###### Option 1: Upload from the homepage

1. On the main page, you may see a window titled **"Open a notebook"**.
2. Click the **"Upload"** tab.
3. You will see the message: Browse or drag a file here.
4. Click the **"Browse"** button or drag and drop your notebook file into that area.
5. Once uploaded, the notebook will open automatically and be ready to use.

###### Option 2: Upload from the File menu

1. In Colab, click the **"File"** menu in the top-left corner.
2. Select **"Upload notebook..."** from the dropdown menu.
3. Once uploaded, the notebook will open in a new Colab tab, ready to use.

:::note
Make sure to log in with the **same Google account** in both **Google Colab and Google Drive**.
:::

## Running MineColab Improved

After uploading the notebook, the first step is to run the `[❗] Setup` cell. <img src="/assets/images/celdas/setup.png" alt="Setup" /> This cell will download and install all necessary dependencies to ensure MineColab Improved runs correctly.

:::note
During setup, you will be asked for access to your Google Drive to save server data. This permission will be requested each time the Colab environment is restarted.
:::

When the cell finishes running, you should see output similar to this:

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
The values in **“Colab VM Information”** may change each time the Colab runtime environment is restarted.
:::

Once the `[❗] Set up` cell execution is complete, scroll down to the section labeled 🔥 Starting. <img src="/assets/images/celdas/Starting.png" alt="starting" />  
There you will find the next cell to run: **Create Server > Create your server**.

At this step, you will need to choose a name for your server.

```text
╔═══════════════════════════════════╗
║ Create your server             ║
╠═══════════════════════════════════╣
║ server_name:[Insert text here] ║
╚═══════════════════════════════════╝
```
:::tip
Avoid using spaces in your server name.  
:::

:::caution
You cannot reuse a server name that has already been used.  
Make sure to choose a unique name each time.
:::

After entering the name, run the cell.  
Next, you will be asked to:

1. Select the server software (e.g., Paper, Purpur, etc.).  
2. Choose the Minecraft version.  
3. Pick the tunnel service (used to make the server accessible online).  

Each tunnel provider has its own setup method, with specific steps that may vary between them.

What is shown below is only a general example, as the actual steps may vary depending on the tunnel you choose.

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
Since tunnel setup can be quite extensive, we will divide this section into multiple parts, each dedicated to a different tunnel provider and explained in detail.
