const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "钱辉"; // 个人网站名字

const BASICS_LOGO = "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/kavaer/1.3o4ilcabcrq0.png" //引导页默认LOGO,此项添加需将下一项置为空,本地照片引用require
const LOGO_CENTER = "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/kavaer/4.ip7pncglxio.png"; //更换引导页LOGO

//  已有图标库@mdi/font&font-awesome,如若找不到所要的图标,推荐iconfont阿里巴巴矢量图标库
const LOGO_TOP_RIGHT = [    //右上角图标链接，留空不显示
  { class: "fa fa-github", title: "github", url: "https://github.com/qianhuiya" },
  { class: "iconfont icon-gitee-fill-round", title: "gitee", url: "https://gitee.com/qianhuiya" }
]

const BLOG_URL = "https://qianhuiya.gitee.io"; // 个人网站链接（请填写完整链接）

const BACKGROUND_IMG_URL = [    // 背景图片url
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/1.61h6mp78b6s0.jpg",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/2.17eqkieq1ta8.png",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/3.4zsg5h2crz80.jpg",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/4.200h324qf96o.png",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/5.1drrjtv2h3vk.jpg",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/6.6sxkddz62nk0.png",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/7.5v6bmspf4uk0.png",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/8.2jgr0sh2af40.png",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/9.3i0jq3com8s0.png",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/10.5v17b4055rk0.png",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/11.58p8srttppo0.png"
];

const BACKGROUND_IMG_URL_PHONE = [
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/1.21ixb239z7ls.png",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/2.66e4gp8iifk0.png",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/3.2vhw6a3rxay0.png",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/4.5sqhr7w4xpo0.png",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/5.436ra117dhq0.png",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/6.1xj61dnmfaw0.jpg",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/7.45kz4m2uq8c.jpg",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/8.1z5y85zosdog.png",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/9.6arkg2uva8k0.png",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/10.3ap23gslarc0.png",
  "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/11.3d7qronk8vc0.jpg"
]

const SLOGAN = [  // Logo下方显示的标题
  "不忘初心,方得始终.",
  "幸亏时光不会倒流，否则万物一定会朝旧岁月里疾步奔跑.",
  "最最好的,和最最痛苦的,是一样的",
  "让留下的人，笑着活下去",
  "我也是二十岁的大人了~",
  "人生在世必遇患难,如同火星飞腾.",
  "有耳可听的,就应当听.",
  "一言，一思，一走，一生.",
  "纵观世界无非就两件事最火：断章取义和美名其曰."
];

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

const BASICS_ICONFONT = "https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/avaer/4.49p04o5mdw20.png"//icon

const SORT_DATA = [ // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写
  { sortId: 1, title: "导航" },
  { sortId: 2, title: "常用" }
];

const AUTHOR = "钱辉";

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "百度翻译",
    subtitle: "百度翻译",
    url: "https://fanyi.baidu.com/translate?aldtype=16047&query=&keyfrom=baidu&smartresult=dict&lang=auto2zh#auto/zh/",
    icon: "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/4.6sv3r4fabeg0.png",
  },
  {
    pageId: 2,
    sortId: 1,
    title: "花瓣网",
    subtitle: "图片素材网",
    url: "https://huaban.com/",
    icon: "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/5.7642at7umy80.png",
  }, {
    pageId: 3,
    sortId: 1,
    title: "CSDN",
    subtitle: "开发者社区",
    url: "https://www.csdn.net/",
    icon: "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/6.4fyhi367hb00.png",
  }, {
    pageId: 4,
    sortId: 1,
    title: "Github",
    subtitle: "Github",
    url: "https://github.com/",
    icon: "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/2.2a793w51mv6s.png",
  }, {
    pageId: 5,
    sortId: 1,
    title: "Gitee",
    subtitle: "Github",
    url: "https://gitee.com/",
    icon: "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/3.1fup2jujy7eo.png",
  }, {
    pageId: 6,
    sortId: 1,
    title: "Element-plus",
    subtitle: "Element-plus",
    url: "https://element-plus.gitee.io/#/zh-CN",
    icon: "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/8.432iuu0a69m0.png",
  }, {
    pageId: 7,
    sortId: 1,
    title: "hexo-theme-melody",
    subtitle: "hexo-theme-melody",
    url: "https://molunerfinn.com/hexo-theme-melody-doc/zh-Hans/quick-start.html",
    icon: "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/9.6gdf382bbao0.png",
  }, {
    pageId: 8,
    sortId: 1,
    title: "NeteaseCloudMusicApi",
    subtitle: "NeteaseCloudMusicApi",
    url: "https://neteasecloudmusicapi.vercel.app/",
    icon: "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/image.5bf0p4uu0xo0.png",
  }, {
    pageId: 9,
    sortId: 1,
    title: "Greasy Fork",
    subtitle: "Greasy Fork",
    url: "https://greasyfork.org/zh-CN/scripts",
    icon: "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/image.3jdojfpjjcs0.png",
  }, {
    pageId: 10,
    sortId: 1,
    title: "Hitokoto",
    subtitle: "Hitokoto",
    url: "https://hitokoto.cn/",
    icon: "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/image.2j9nt71mgtu0.png",
  },  {
    pageId: 1,
    sortId: 2,
    title: "Github",
    subtitle: `Github`,
    url: "https://github.com/qianhuiya",
    icon: "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/2.2a793w51mv6s.png",
  },
  {
    pageId: 2,
    sortId: 2,
    title: "Gitee",
    subtitle: `Gitee`,
    url: "https://gitee.com/qianhuiya/",
    icon: "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/3.1fup2jujy7eo.png",
  },
  {
    pageId: 3,
    sortId: 2,
    title: "Coding",
    subtitle: `Coding`,
    url: "https://qianhuiya.coding.net/public/",
    icon: "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/1.7d0l4t590s00.png",
  }, {
    pageId: 4,
    sortId: 2,
    title: "一言",
    subtitle: `一言`,
    url: "https://coding-pages-bucket-3495601-8075853-6855-401178-1303851664.cos-website.ap-beijing.myqcloud.com",
    icon: "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/10.3mcwppjkwvq0.png",
  },{
    pageId: 5,
    sortId: 2,
    title: "picx",
    subtitle: `picx图床`,
    url: "https://picx.xpoet.cn/",
    icon: "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/F@Z`JZ[5BTPU2)EE1SMM$IE.5bo2t6zvjzg0.png",
  }, {
    pageId: 6,
    sortId: 2,
    title: "电影",
    subtitle: `vip电影&api`,
    url: "https://vip.bljiex.com/",
    icon: "https://vip.bljiex.com/favicon.ico",
  }, {
    pageId: 7,
    sortId: 2,
    title: "路过",
    subtitle: `路过图床`,
    url: "https://imgtu.com/",
    icon: "https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/image.7e204o6que00.png",
  },
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
  RECORD_NUMBER,
  AUTHOR
};
