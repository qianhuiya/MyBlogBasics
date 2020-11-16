const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "Song-QiEn"; // 个人网站名字

const BASICS_LOGO = "https://i2.tiimg.com/729639/a15b88932e446a70.png" //引导页默认LOGO,此项添加需将下一项置为空,本地照片引用require
const LOGO_CENTER = ""; //更换引导页LOGO

//  已有图标库@mdi/font&font-awesome,如若找不到所要的图标,推荐iconfont阿里巴巴矢量图标库
const LOGO_TOP_RIGHT = [    //右上角图标链接，留空不显示
  { class: "fa fa fa-github", title: "github", url: "https://github.com/qianhuiya" },
  { class: "iconfont icon-gitee-fill-round", title: "gitee", url: "https://gitee.com/qianhuiya" }
]

const BLOG_URL = "https://qianhuiya.gitee.io"; // 个人网站链接（请填写完整链接）

const BACKGROUND_IMG_URL = [    // 背景图片url,留空为默认背景色
  "https://i1.fuimg.com/729639/3ad10bcd8f7d4f81.jpg",
  "https://i1.fuimg.com/729639/aa108f67c64ccf4b.jpg",
  "https://i1.fuimg.com/729639/a85ee5b40c9e4ae8.jpg",
  "https://i1.fuimg.com/729639/36f1104c8677ba2b.jpg",
  "https://i1.fuimg.com/729639/baa837ef4257e592.jpg",
  "https://i1.fuimg.com/729639/7728fce9de1d3970.jpg"
];

const SLOGAN = [  // Logo下方显示的标题
  "我们都留在美丽的经年",
  "还有温度,还似迷途",
  "我追着风  抓不住一个梦",
  "你说幸福会缤纷",
  "那些期盼在渐行渐远",
  "多少次跌跌撞撞才学会坚强"
];

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

const BASICS_ICONFONT = "https://i1.fuimg.com/729639/73a88a33ab843bd3.png"

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
    icon: "http://i1.fuimg.com/729639/41efabb79a58bcd4.png",
  },
  {
    pageId: 2,
    sortId: 2,
    title: "Gitee",
    subtitle: "Song-QiEn  Gitee",
    url: "https://gitee.com/qianhuiya/",
    icon: "https://i1.fuimg.com/729639/8397da6493ce8e09.jpg",
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
  RECORD_NUMBER
};
