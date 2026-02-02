import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import starlightLinksValidator from "starlight-links-validator";
import starlightSidebarTopics from "starlight-sidebar-topics";

export default defineConfig({
  output: "server",
  adapter: vercel(),

  integrations: [
    {
      name: "docs:config-md",
      hooks: {
        "astro:config:setup": ({ config }) => {
          globalThis.markdownConfig = { ...config.markdown };
        },
      },
    },

    starlight({
      title: "MineColab Docs",

      defaultLocale: "root",
      locales: {
        root: { label: "English", lang: "en" },
        es: { label: "Español", lang: "es" },
      },

      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/N-aksif-N/MineColab_Improved",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.com/invite/minecolab-improved-1214801871827501097",
        },
      ],

      customCss: [
        "@fontsource/poppins/400.css",
        "@fontsource/jetbrains-mono/400.css",
        "@fontsource/jetbrains-mono/600.css",
        "./src/styles/custom.css",
      ],

      components: {
        Head: "./src/components/overrides/Head.astro",
        SiteTitle: "./src/components/overrides/SiteTitle.astro",
        PageFrame: "./src/components/overrides/PageFrame.astro",
        Footer: "./src/components/overrides/Footer.astro",
        Banner: "./src/components/overrides/Banner.astro",
        SocialIcons: "./src/components/overrides/SocialIcons.astro",
        Sidebar: "@astrojs/starlight/components/Sidebar.astro",
      },

      plugins: [
        starlightLinksValidator({
          errorOnInvalidHashes: false,
        }),

        starlightSidebarTopics([
          {
            id: "minecolab",
            label: "MineColab Improved",
            icon: "star",
            link: "/minecolab/",
            items: [
              {
                label: "MineColab Guide",
                items: [
                  {
                    label: "Getting Started",
                    items: [
                      "minecolab/guide/getting-started/getting-started",
                    ],
                  },

                  {
                    label: "Tunnels",
                    items: [
                      "minecolab/guide/tunnel/tunnels",
                      {
                        label: "Tunnel Configuration",
                        collapsed: true,
                        items: [
                          "minecolab/guide/tunnel/tunnel-configuration/tunnel-ngrok",
                          "minecolab/guide/tunnel/tunnel-configuration/tunnel-playit",
                          "minecolab/guide/tunnel/tunnel-configuration/tunnel-zrok",
                          "minecolab/guide/tunnel/tunnel-configuration/tunnel-localtonet",
                          "minecolab/guide/tunnel/tunnel-configuration/tunnel-tailscale",
                          "minecolab/guide/tunnel/tunnel-configuration/tunnel-minekube-gate",
                          {
                            label: "Extra Configuration",
                            collapsed: true,
                            items: [
                              "minecolab/guide/tunnel/tunnel-configuration/tunnel-extra/tunnel-change",
                              "minecolab/guide/tunnel/tunnel-configuration/tunnel-extra/tunnel-token",
                              "minecolab/guide/tunnel/tunnel-configuration/tunnel-extra/minekube-yml",
                            ],
                          },
                        ],
                      },
                    ],
                  },

                  {
                    label: "Server Setup",
                    collapsed: true,
                    items: [
                      "minecolab/guide/server-setup/consola-servidor",
                      "minecolab/guide/server-setup/customization",
                      "minecolab/guide/server-setup/server-properties",
                    ],
                  },

                  {
                    label: "Change Server / Java",
                    collapsed: true,
                    items: [
                      "minecolab/guide/change-server/change-sever",
                      "minecolab/guide/change-server/change-java",
                    ],
                  },

                  {
                    label: "Plugins & Mods",
                    collapsed: true,
                    items: [
                      "minecolab/guide/mods-plugins/plugin-mod",
                      "minecolab/guide/mods-plugins/plugin-mod-url",
                      {
                        label: "Information",
                        collapsed: true,
                        items: [
                          "minecolab/guide/mods-plugins/info/mod-info",
                          "minecolab/guide/mods-plugins/info/modpacks-info",
                          "minecolab/guide/mods-plugins/info/plugin-info",
                          "minecolab/guide/mods-plugins/info/resources-info",
                        ],
                      },
                    ],
                  },

                  {
                    label: "File Manager",
                    collapsed: true,
                    items: [
                      "minecolab/guide/files-manager/worl-backup",
                      "minecolab/guide/files-manager/world-uploader",
                      "minecolab/guide/files-manager/file-server-backup",
                    ],
                  },
                ],
              },

              {
                label: "FAQ — MineColab",
                items: ["minecolab/faq/faq"],
              },
            ],
          },
        ])

      ],

      expressiveCode: {
        frames: {
          extractFileNameFromCode: false,
        },
        emitExternalStylesheet: false,
      },
    }),
  ],

  build: {
    inlineStylesheets: "always",
  },
});
