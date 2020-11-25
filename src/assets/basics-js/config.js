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
