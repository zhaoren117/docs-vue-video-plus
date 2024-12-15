import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs-vue-video-plus/",
  //美化地址栏icon
  head: [["link", { rel: "icon", href: "/docs-vue-video-plus/logo.png" }]],
  title: "vueVideo++",
  description: "vue video",
  srcDir: "docs",

  themeConfig: {
    //用于替代On this page
    outlineTitle: "目录",
    //outline定义展示的标题级别，这里定义2-6级
    outline: [2, 6],
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "快速开始", link: "/setup" },
      {
        text: "API参考",
        items: [
          {
            text: "api",
            link: "/configs",
          },
        ],
      },
    ],

    sidebar: [
      {
        text: "快速开始",
        items: [
          { text: "安装", link: "/setup" },
          { text: "使用", link: "/start" },
          { text: "基本案例", link: "/basicExamples" },
        ],
      },
      {
        text: "配置",
        items: [{ text: "播放器配置", link: "/configs" }],
      },
      {
        text: "事件",
        items: [{ text: "播放器事件", link: "/emits" }],
      },
      {
        text: "历史",
        items: [{ text: "更新历史", link: "/lishi" }],
      },
    ],

    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },

    //

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
