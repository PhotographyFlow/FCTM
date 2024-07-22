import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TOGAPhotos上传指南",
  themeConfig: {
    footer: {
      message: "Built with VitePress",
      copyright: "Copyright © 2023-present TOGAPhotos",
    },
    nav: [
      { text: "图库", link: "https://togaphotos.com" },
      { text: "Blog", link: "https://blog.togaphotos.com" }
    ],

    sidebar: [
  
      { text: "上传指南说明", link: "/README" },
      { text: "我们是如何审核一张图片的", link: "/screening" },

        
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
          { text: "角度不佳", link: "/reject/angle" },
          { text: "错误信息", link: "/reject/badinfo" },
          { text: "主体不居中", link: "/reject/center" },
          { text: "色彩不佳", link: "/reject/color" },
          { text: "对比度不佳", link: "/reject/contrast" },
          { text: "裁切", link: "/reject/cut" },
          { text: "传感器/镜头脏点", link: "/reject/dusty" },
          { text: "曝光", link: "/reject/expose" },
          { text: "地平不正", link: "/reject/horizon" },
          { text: "热浪", link: "/reject/hotwave" },
          { text: "违规内容", link: "/reject/illegal-content" },
          { text: "JPEG压缩/过度处理", link: "/reject/jpeg" },
          { text: "光线", link: "/reject/light" },
          { text: "质量不佳", link: "/reject/lowquality" },
          { text: "前景杂乱", link: "/reject/mess" },
          { text: "噪点/杂色过多", link: "/reject/noise" },
          { text: "遮挡", link: "/reject/occlusion" },
          { text: "机身反光", link: "/reject/reflect" },
          { text: "锐度", link: "/reject/sharpness" },
          { text: "暗角/光晕", link: "/reject/vignette" },
          
        ],
      },
    ],
  },
});
