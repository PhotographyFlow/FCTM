import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TOGAPhotos上传指南",
  // description: "TOGAPhotos上传指南",
  themeConfig: {
    footer: {
      message: "Built with VitePress",
      copyright: "Copyright © 2023-present TOGAPhotos",
    },
    nav: [
      { text: "Blog", link: "https://blog.togaphotos.com" }
    ],

    sidebar: [
      {
        text: "图片上传",
        items: [
          { text: "接受的构图种类", link: "/composition" },
          { text: "违规内容", link: "/reject/illegal-content" },
        ],
      },
      {
        text: "常见拒图原因",
        items: [
          { text: "光线不佳", link: "/reject/light" },
          { text: "热浪", link: "/reject/hotwave" },
          { text: "前景杂乱", link: "/reject/mess" },
        ],
      },
    ],
  },
});
