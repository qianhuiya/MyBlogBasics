#  通用个人博客导航

## About | 关于

![](https://img.shields.io/badge/Base-Vue2.2-brightgreen.svg)
![](https://img.shields.io/badge/Build-Vue--Cli3-orange.svg)
![](https://img.shields.io/badge/Installer-Npm/Yarn-red.svg)

这是一个基于 Vue 的通用网站导航页面，你可以将其放在个人网站的首页作为您博客的引导页面或者是您其他项目的引导页。兼容了多平台的显示效果（基于Flex布局），方便游客浏览您的个人网站.

页面分为两部分，一个是全屏的展示页，一个是导航抽屉页，阅读下面的“使用方法”来为您的网站配置基本信息与导航信息，[点击查看网站示例](https://qianhuiya.github.io/)。

![](https://i2.tiimg.com/729639/e901cc2f218d5e32.png)
![](https://i1.fuimg.com/729639/f9f5b430dfcac45e.png)

## How to use | 使用方法

安装依赖：

```shell
npm install # 如果安装出错请使用cnpm安装
```

开发模式：

```shell
npm run serve
```

本项目中，提供了两种使用方法：

一种是只需要将网站的相关信息按要求填入配置文件，之后再编译整个项目就可以生成一个适用于你的网站的静态导航页面；

另一种则是为页面添加后台数据支持，详情请参阅下文的第2步。

### 1. 配置信息

在 `/src/config.js` 存放了项目的基本配置信息，配置示例如下：

```js
const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "Song-QiEn"; // 个人网站名字

const BASICS_LOGO = "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/kavaer/1.3o4ilcabcrq0.png" //引导页默认LOGO,此项添加需将下一项置为空,本地照片引用require
const LOGO_CENTER = ""; //更换引导页LOGO

//  已有图标库@mdi/font&font-awesome,如若找不到所要的图标,推荐iconfont阿里巴巴矢量图标库
const LOGO_TOP_RIGHT = [    //右上角图标链接，留空不显示
  { class: "fa fa fa-github", title: "github", url: "https://github.com/qianhuiya" },
  { class: "iconfont icon-gitee-fill-round", title: "gitee", url: "https://gitee.com/qianhuiya" }
]

const BLOG_URL = "https://qianhuiya.gitee.io"; // 个人网站链接（请填写完整链接）

const BACKGROUND_IMG_URL = [    // 背景图片url
  "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/blog/1.61h6mp78b6s0.jpg",
  "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/blog/2.7cs0qsexwr40.png",
  "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/blog/3.4zsg5h2crz80.jpg",
  "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/blog/5.1drrjtv2h3vk.jpg",
  "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/blog/6.67ry3157g6o0.jpg",
  "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/blog/4.200h324qf96o.png",
  "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/blog/7.4d7bzgsdgvq0.png",
  "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/blog/8.6dq7cz556f00.png"
];

const BACKGROUND_IMG_URL_PHONE = [
    "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/phone/1.33nwnsqcxus0.JPG",
    "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/blog/7.4d7bzgsdgvq0.png",
    "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/blog/8.6dq7cz556f00.png",
    "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/phone/2.66e4gp8iifk0.png",
    "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/phone/3.2vhw6a3rxay0.png",
    "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/phone/4.5sqhr7w4xpo0.png",
    "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/phone/5.436ra117dhq0.png",
    "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/phone/6.1xj61dnmfaw0.jpg"
]

const SLOGAN = [  // Logo下方显示的标题
  "不忘初心,方得始终.",
  "还有温度,还似迷途.",
  "那些期盼在渐行渐远.",
  "要坚强才有梦想.",
  "诗人不醉."
];

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

const BASICS_ICONFONT = "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/avaer/4.49p04o5mdw20.png"//icon

const SORT_DATA = [ // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写
  { sortId: 1, title: "MyFavorite" },
  { sortId: 2, title: "AboutMe" }
];

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "翻译",
    subtitle: "百度翻译",
    url: "https://fanyi.baidu.com/translate?aldtype=16047&query=&keyfrom=baidu&smartresult=dict&lang=auto2zh#auto/zh/",
    icon: "",
  },
  {
    pageId: 2,
    sortId: 1,
    title: "花瓣",
    subtitle: "图片素材网",
    url: "https://huaban.com/",
    icon: "",
  }, {
    pageId: 3,
    sortId: 1,
    title: "CSDN",
    subtitle: "开发者社区",
    url: "http://www.YourWebPage.com/",
    icon: "",
  }, {
    pageId: 4,
    sortId: 1,
    title: "Github",
    subtitle: "Github",
    url: "https://github.com/",
    icon: "",
  }, {
    pageId: 1,
    sortId: 2,
    title: "Github",
    subtitle: "Song-QiEn  Github",
    url: "https://qianhuiya.github.io/",
    icon: "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/avaer/1.3xuk0ktsviw0.jpg",
  },
  {
    pageId: 2,
    sortId: 2,
    title: "Gitee",
    subtitle: "Song-QiEn  Gitee",
    url: "https://gitee.com/qianhuiya/",
    icon: "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/avaer/3.24vg0vfmd7j4.jpg",
  }
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写
//无icon图标则为默认图标-

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  BASICS_LOGO,
  LOGO_CENTER,
  LOGO_TOP_RIGHT,
  SORT_DATA,
  PAGES_DATA,
  BASICS_ICONFONT,
  SLOGAN,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  BACKGROUND_IMG_URL_PHONE,
  RECORD_NUMBER
};


```

### 2. 添加服务器支持（可选）
如果想要使用后台服务器来加加载和管理数据，请将 `SERVE` 设置为 `true` 并将 `HOST` 填写为你的服务器接口地址，这样前台页面就会使用Ajax来向你添加的服务器地址来请求数据。同时你需要按照 [API.md](./API.md) 规范来编写后台API接口，以及按照 [DataBase.md](./DataBase.md) 规范来创建数据库。

> 连接后台后则无需填写 `config.js` 中的 `PAGES_DATA` 和 `SORT_DATA` 数据。

### 3. 编译
确保已安装 `npm` 以及安装好了项目依赖之后运行：

```
$ npm run build
```

生成的文件将存放在 `/dist` 目录下，Enjoy!

## Log | 更新日志

2020.11.:

- 变化：动态添加右上角徽标,每次进入切换不同背景图
