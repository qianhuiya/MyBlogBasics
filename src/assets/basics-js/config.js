const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "Song-QiEn"; // 个人网站名字

const LOGO_CENTER = ""; //引导页LOGO

//  已有图标库@mdi/font&font-awesome,如若找不到所要的图标,推荐iconfont阿里巴巴矢量图标库
const LOGO_TOP_RIGHT = [    //右上角图标链接，留空不显示
  { class: "fa fa fa-github", title: "github", url: "https://github.com/qianhuiya" },
  { class: "iconfont icon-gitee-fill-round", title: "gitee", url: "https://gitee.com/qianhuiya" }
]

const BLOG_URL = "https://qianhuiya.gitee.io"; // 个人网站链接（请填写完整链接）

const BACKGROUND_IMG_URL = [    // 背景图片url,留空为默认背景色
  // "https://i1.fuimg.com/729639/3ad10bcd8f7d4f81.jpg",
  // "https://i1.fuimg.com/729639/7728fce9de1d3970.jpg",
  // "https://i1.fuimg.com/729639/015e63b4cf1c104f.jpg",
  // "https://i1.fuimg.com/729639/aa62c053a87165af.jpg",
  // "https://i1.fuimg.com/729639/aa108f67c64ccf4b.jpg"

];

const SLOGAN = [  // 在Logo下方显示的标题
  "清风 离别,逃不过的生死劫",
  "还有温度,还似迷途",
  "流星，落花，萤火",
  "你说幸福会缤纷",
  "宋祁恩&江左&祁宋"
];

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

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
  }
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写
//无icon图标则为默认图标-http://i1.fuimg.com/729639/f67cc02e94b8c44b.png


export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  LOGO_CENTER,
  LOGO_TOP_RIGHT,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
