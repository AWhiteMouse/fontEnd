if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,d,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(d.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-a3b6cda6"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.2cc7328b.css",revision:"3fc5aad59eae0ddadfb4347c94339c07"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/131.7d1b4c0e.js",revision:"a1cc80e8401ca4d7880b2875c5410f47"},{url:"assets/js/132.7aa2db1e.js",revision:"6745b2250363aaafcee091ff09a80214"},{url:"assets/js/133.72075d73.js",revision:"d70b9cd73e18a81e64f88fa1275c4318"},{url:"assets/js/134.1893049f.js",revision:"38d77f6f25f5aeea1ac85f2077e5ca6e"},{url:"assets/js/135.52278a05.js",revision:"fe5ff22c18d23191072458418475d681"},{url:"assets/js/app.cfc82a30.js",revision:"2e2c0517bb2199a00479a843e0a6f13d"},{url:"assets/js/layout-Blog.edbcb42f.js",revision:"c3af3cba5af5d56cf7816c18e33b1d71"},{url:"assets/js/layout-Layout.8693f67d.js",revision:"3a2bc81498eedbd9d3c8e72e20055232"},{url:"assets/js/layout-NotFound.40d48033.js",revision:"6ae02932508eaee0db16b8013efe8a4a"},{url:"assets/js/layout-Slide.f03a8ed6.js",revision:"e71a692470a387d957f82c9c9608b83d"},{url:"assets/js/page-apply和call.8189c714.js",revision:"6ec1bb0a603ac0ad6f90cd5f8880548f"},{url:"assets/js/page-babel原理.700ffdf3.js",revision:"73806a32117f4976509f6254120a5c2f"},{url:"assets/js/page-BFC.092ae860.js",revision:"0f7f7320852c1c27fc53495f1d6c8d47"},{url:"assets/js/page-bind的实现.d7432bb1.js",revision:"7a9043bf0f1b5d80ef4f602c851ab8b7"},{url:"assets/js/page-cluster原理.c9c8b9da.js",revision:"b49cb98130fa05b29474446b3e2f9f8e"},{url:"assets/js/page-computed和watch.e647626e.js",revision:"7b4a6951f3aca35fc394007fd9596b52"},{url:"assets/js/page-CSS.879a34d0.js",revision:"17d2bb3cd79162ed1caf33245b46ab62"},{url:"assets/js/page-CSS性能优化.3d3a166b.js",revision:"1003333cb54fd9e42d5c09875c3c82a3"},{url:"assets/js/page-CSS新特性.ff59fb04.js",revision:"f32a4a22f5fb88c5269ecfbf6d7464a5"},{url:"assets/js/page-CSS样式隔离.59724566.js",revision:"dd30a4721c867f4ecf865b7ce19a394e"},{url:"assets/js/page-CSS选择器及优先级.88ab2916.js",revision:"f3da9a9cdfd72cf003e48de0c3b86b1a"},{url:"assets/js/page-data函数.9ec16546.js",revision:"8e755b68de1c15b7777ee460ca5b1b68"},{url:"assets/js/page-div垂直居中.64e71066.js",revision:"16fecbef45a645c37769c74585862c77"},{url:"assets/js/page-DOM树.f57c6894.js",revision:"e978179c7ba8193ff9c97d6535adfb31"},{url:"assets/js/page-fiber.f753b29d.js",revision:"68307787563bc72f9e97aa28a1b2d53e"},{url:"assets/js/page-flex布局.59ad07ad.js",revision:"e6232d12c68e29fecccd01cce1dbf1fb"},{url:"assets/js/page-generator原理.f3f587ee.js",revision:"b6fe429a3da58d6c3ab8705d22536790"},{url:"assets/js/page-history和hash两种路由.e0ce095c.js",revision:"ff7dcb21f73d193df128b4e91f93783d"},{url:"assets/js/page-HTML.f8ba15e1.js",revision:"3799e9dc5be0eaf3485f93695e2944b8"},{url:"assets/js/page-http.331c8abb.js",revision:"c1d54d68c480c3a761756f0074cf91e6"},{url:"assets/js/page-http20.9faeccdb.js",revision:"b15395eaa266faed21f92f767a481c3a"},{url:"assets/js/page-http30.54cab852.js",revision:"55da2881ffd6ba04904084e0a0278655"},{url:"assets/js/page-https.271677a9.js",revision:"8938dac49bf05554f8d5e93f9da66bf7"},{url:"assets/js/page-IntroPage.a4692c5a.js",revision:"8db0f9def183e524bff4421aab332c97"},{url:"assets/js/page-IO多路复用.21eca37b.js",revision:"2802c75b84bd2fc598c08bad08a61249"},{url:"assets/js/page-Javascript.0f4c60fa.js",revision:"e77e1b3893301d6cc165949703de68ba"},{url:"assets/js/page-keepalive.8a18ddd5.js",revision:"d461e7e6ee96bcffa3d90d5a9b0922b8"},{url:"assets/js/page-Markdown增强.04e4bcd3.js",revision:"54833553fb56572ecad95c0485743254"},{url:"assets/js/page-MVC.d44a568b.js",revision:"92df5c342cedd150c4d439138500f47a"},{url:"assets/js/page-MVP.168207cd.js",revision:"379b41291a29b781947dd6698b96eefc"},{url:"assets/js/page-MVVM.c4e2b81e.js",revision:"627f17ce519823463e86be520ad0a193"},{url:"assets/js/page-new操作符.13639dcb.js",revision:"9b80bfeb4326c8ad6f995a12d8341eb3"},{url:"assets/js/page-nexttick原理.1ca45a15.js",revision:"8547730dbd7078afb8432a7adbc1f463"},{url:"assets/js/page-Node.23ec478b.js",revision:"89d342dba29112cf71c904b49ed5d27b"},{url:"assets/js/page-pipe原理.77cf0609.js",revision:"aa4b7d1f3b74a6bce8731e70477998b0"},{url:"assets/js/page-position.b2d6f4ee.js",revision:"109333b130c0f6998c60c1d350475212"},{url:"assets/js/page-promise原理.baee41cd.js",revision:"2a844c0b00fb7c49e2e023d1a5a440cb"},{url:"assets/js/page-React.bef7c8f1.js",revision:"43ad26e940c09ad1e3fda22339037c24"},{url:"assets/js/page-Redux.be374f40.js",revision:"656948a31ee00e05cd6fd977c1968c39"},{url:"assets/js/page-redux核心原则.dbcf99f2.js",revision:"0a32bd33986e522ce149b291d0ea9aa9"},{url:"assets/js/page-redux核心逻辑.03356c57.js",revision:"c1afb1910f04848d7570726fe651d08e"},{url:"assets/js/page-require原理.c69dddc2.js",revision:"639bc1782235bcd69a435826d2bf3e40"},{url:"assets/js/page-setState过程.a9cc40c0.js",revision:"1825457253b5cd0c5689dbfcca762112"},{url:"assets/js/page-slot.593abf45.js",revision:"046171990a7df9f3f08b19e1e4689ac6"},{url:"assets/js/page-tcp.675a8bef.js",revision:"b0a4e9801b322c5cd2e6279a7dd13ab2"},{url:"assets/js/page-this的指向.fd2f0190.js",revision:"ae57dd72c5a862b9a498a757549851fd"},{url:"assets/js/page-treeshaking.9ed8c049.js",revision:"155294903ba043919d8e7a4cf70f86c7"},{url:"assets/js/page-udp.c7c659ef.js",revision:"d55b8953912ae1c556f39289314c9a8f"},{url:"assets/js/page-uglify原理.f8fbdf44.js",revision:"458bd1f17d3d61b15821b1d81817fabe"},{url:"assets/js/page-v8垃圾回收机制.324743a7.js",revision:"f3c560e46d8ec9f3031f41018f787077"},{url:"assets/js/page-virtualdom.2107becd.js",revision:"23681989243524bde680e15a0f9ae517"},{url:"assets/js/page-Vue.4e96b8dc.js",revision:"b02a160ff0679dd854c635a486eb0a98"},{url:"assets/js/page-webpack.f286df5b.js",revision:"6b36d92cb4da03e044add65f8c8307c1"},{url:"assets/js/page-webpackloader机制.b1addc7d.js",revision:"b6d9493202e8ffc857a41a3d24a11801"},{url:"assets/js/page-websocket.6fad302d.js",revision:"b6f5da2479779d2b90577801d5befef3"},{url:"assets/js/page-七层网络模型.193b3915.js",revision:"22f7366888d2bbda499b8c68fd785a05"},{url:"assets/js/page-事件循环.f0def2ae.js",revision:"a1de2d6570b48491757f10b1cc111b8c"},{url:"assets/js/page-事件循环机制.d084fae8.js",revision:"6b77dead34698d1328b7cf96a24cfe58"},{url:"assets/js/page-事件模型.85ee8be8.js",revision:"08df81608fed946f5e57a06979fb6709"},{url:"assets/js/page-从输入URL到浏览器渲染的全过程.7c9a82a9.js",revision:"ed9314f5007e4e358c8a3fed20345848"},{url:"assets/js/page-作用域.64ff03f2.js",revision:"4fa92b8fd5124f26bc5c676c3c96f876"},{url:"assets/js/page-其他.2e728895.js",revision:"1abdc9624976c2bc07c04d541ad83eeb"},{url:"assets/js/page-内存泄漏.28bc9fe0.js",revision:"6546c88f558468fbdd4b1d11d8526dbf"},{url:"assets/js/page-前端微服务.e74340bb.js",revision:"7ed1d4f763115fea35c06d338a15049c"},{url:"assets/js/page-前端性能优化手段.c2557317.js",revision:"600cd64fd5105fbaaa59a99539428001"},{url:"assets/js/page-前端性能优化指标RAIL.4126cd06.js",revision:"3a368478a4369b9b52a9d7acb459f550"},{url:"assets/js/page-功能介绍.8e583f72.js",revision:"30c831e7075bdf81818eaf9ef0179111"},{url:"assets/js/page-动画性能.d5d6eaa0.js",revision:"116a30923e226ce41805c92353539d43"},{url:"assets/js/page-博客主页.2b3853d8.js",revision:"e378c5a016c37ebef1500d167042f467"},{url:"assets/js/page-原型链.b98c392f.js",revision:"66959e9c1716530dd09fea69afe81157"},{url:"assets/js/page-变量提升.7a04204a.js",revision:"c2ef3de065466c2dcbdf7cf4fc5dcedb"},{url:"assets/js/page-合成事件.3a26fb59.js",revision:"5528793322c159abc6920d78a3fef3fc"},{url:"assets/js/page-圣杯双飞翼布局.097c9030.js",revision:"e0eddcf6e22c92f336219a025138e214"},{url:"assets/js/page-大量图片加载优化.01077230.js",revision:"7ece01865d224da000a97afb1b4a26bd"},{url:"assets/js/page-守护进程.0972013f.js",revision:"2bb19b6337e65d88c40d952c1aabe87d"},{url:"assets/js/page-密码加密的文章.dcf5c1d7.js",revision:"cc11ce570675d7c08aac57b892627b1c"},{url:"assets/js/page-层叠上下文.9c2523e5.js",revision:"5741ec415d72ec35475e5e02dbbc3bd4"},{url:"assets/js/page-工程化.f2ca0ff2.js",revision:"749f3f7e2588ac5f826509169ad48d56"},{url:"assets/js/page-常用设计模式.a0d9ff7b.js",revision:"c4c1620ea50c447eb6cf99d885d6581e"},{url:"assets/js/page-幻灯片页.717a413c.js",revision:"c6b64db14929d5943384d4d62576aa33"},{url:"assets/js/page-异常处理.b04b5681.js",revision:"653d36b0e86672dd74d1d669cef37a5e"},{url:"assets/js/page-性能.aa4c5da1.js",revision:"a5836e17b84ee9b0e995ffdc85124012"},{url:"assets/js/page-性能优化.543b3fe2.js",revision:"ad6a7aa8737e5a216e78bbe1c51f9a55"},{url:"assets/js/page-操作系统.cb121ca4.js",revision:"35ea69b541dde61fc0ebd005fe8fed24"},{url:"assets/js/page-数据类型判断.496b1967.js",revision:"55e0ccbb5344935f52ad0c1c7c8cce62"},{url:"assets/js/page-数据绑定原理.7f65cbf9.js",revision:"263c01fb0d788fdd0af980fa3be0e07c"},{url:"assets/js/page-柯里化.63bab03f.js",revision:"a5eba9c58a27acda2e1c7f27b378055a"},{url:"assets/js/page-样式隔离.44495ff3.js",revision:"61e79bad1b3b1b15b67f9ae5be2d274b"},{url:"assets/js/page-模块化机制.2c42bb7f.js",revision:"841c222a8edc1c914ff9a62bdc9fa757"},{url:"assets/js/page-模块机制.90b90d96.js",revision:"01239ad8e50b138a1348a8ab98dff211"},{url:"assets/js/page-死锁.d645b34c.js",revision:"320353f74218cd1cfe5f3eac1c1124f3"},{url:"assets/js/page-每日学习.c4698432.js",revision:"d7a86a0f690cd9471db24ad544124e12"},{url:"assets/js/page-流机制.f8377fd5.js",revision:"a6b9a09d00f2a33dd6508b81e2b714dc"},{url:"assets/js/page-浏览器架构.b6b11af4.js",revision:"744498afaa41d77d43f6962885903d3a"},{url:"assets/js/page-浏览器运行原理.6a07ce65.js",revision:"eb0e6fc74bf90d4c9fbaccad499e0ded"},{url:"assets/js/page-浮动.6fd55bc1.js",revision:"54f26bb56d03f3f67dd5710d85b402fd"},{url:"assets/js/page-浮点数精度.4a1bc026.js",revision:"e9d4360107cd376d149724acee5b78ea"},{url:"assets/js/page-渲染合成层.91741d7e.js",revision:"cc1b0c6d06fea021cee4408e49dffa05"},{url:"assets/js/page-白屏.d90f65dc.js",revision:"65dc1b7d5b89309f9e05343e33d60738"},{url:"assets/js/page-盒子模型.f9aad738.js",revision:"afc11546d4369613d631755576ed0ca7"},{url:"assets/js/page-立即执行函数.0fab29bb.js",revision:"1f6186c7784521c1cfdec0c68ba5c5e6"},{url:"assets/js/page-组件禁用.596dc021.js",revision:"d54aa21d6204e59057e1af99075f92fd"},{url:"assets/js/page-继承.bebcc613.js",revision:"7a0c84c7ec9671f404769849104b37af"},{url:"assets/js/page-缓存策略.8d801136.js",revision:"1ba2ed6cbf37c85b68f3f0c45767c921"},{url:"assets/js/page-网络.561330f1.js",revision:"94bda3702ade618b0ebf4d41a3fbd5e4"},{url:"assets/js/page-设计模式.cc9b3506.js",revision:"ba7657da7dc982e1d4dcdb2732175fc1"},{url:"assets/js/page-跨域.82ae5f7e.js",revision:"895d98f47e56989e69760d49e65475ef"},{url:"assets/js/page-跨标签页通信.db778e6e.js",revision:"f511569dc0aeff4b78b5d92c83211374"},{url:"assets/js/page-进程与线程.c427f6e0.js",revision:"4c64a62ba297308679de189844e7f0f3"},{url:"assets/js/page-进程调度策略.2163ba82.js",revision:"7b4e8e12922f4311b94917859a85a983"},{url:"assets/js/page-进程通信.4e595d92.js",revision:"2fde3ecdbe87568821a37151c33c690d"},{url:"assets/js/page-重构.4f42d072.js",revision:"97aab0fbcb476aea95067d51a4fc7ca2"},{url:"assets/js/page-重绘和重排.17ac4ce0.js",revision:"5fc46a1908b75fd55fb8e50ca6d44444"},{url:"assets/js/page-错误处理.bfc44c86.js",revision:"bb375dd79327796fbc9e37f68aa0f215"},{url:"assets/js/page-闭包.2964bd6a.js",revision:"9448edcee9e091bc43519fcc986770a1"},{url:"assets/js/page-页面配置.3c091cad.js",revision:"c450e5e25d8167c055d07874ad7c4c31"},{url:"assets/js/page-项目主页.8f23e6d2.js",revision:"9c2c9876dee1eb37f66b6cce65dc1a9e"},{url:"assets/js/page-高阶组件.f0109f93.js",revision:"bd7afddcb0563582fa307959c0089d4e"},{url:"assets/js/vendors~flowchart.ad7c23f1.js",revision:"a6a0c7c7de01b330c7ae73b67e07a148"},{url:"assets/js/vendors~layout-Blog~layout-Layout.11a58ae6.js",revision:"f5f237e1c0bd6b773bf29ef2297be407"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.568b53c3.js",revision:"5f4ed5e3bb303d79e5527de4fc86d0c5"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.cf1dbb0b.js",revision:"16cd575776dff09c50c4d5059c8ebd23"},{url:"assets/js/vendors~photo-swipe.2ed0b7e4.js",revision:"01f83b9edcada9bd677d87403e557194"},{url:"assets/js/vendors~reveal.83b271ce.js",revision:"e189591eb44502da06a3b26c8b46a851"},{url:"assets/js/vendors~valine.8704f47a.js",revision:"4abdb182538267f11817b801ab899140"},{url:"logo.svg",revision:"c1cc507c5ecf9ef91f5bc8e94d15f94e"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"6ec37dd4bab1f091d8684f8cb1c45a87"},{url:"article/index.html",revision:"979ef7a1233d5805d9c1b9684964ee8c"},{url:"category/index.html",revision:"2fd7ef66a05c7eea1d51b351a19806b9"},{url:"category/使用指南/index.html",revision:"3167736ad491be5cb27f4a5ae51c5c79"},{url:"css/BFC/index.html",revision:"a36b42c5a09160dd56dda440360a3285"},{url:"css/box/index.html",revision:"5f9c38f467fa1e95b24e7b6d669f6e5b"},{url:"css/center/index.html",revision:"84b177820fa8fbf14413b3406dbda5cd"},{url:"css/context/index.html",revision:"44391727c556a553c4c5658ad8573695"},{url:"css/flex/index.html",revision:"964f2635770bba4a21c3b9bc2fa40f57"},{url:"css/float/index.html",revision:"e97ac6a7f8b56bbe6449e16dfc6ab176"},{url:"css/index.html",revision:"45a9d6213c91b42024189e2a93d72d18"},{url:"css/layout/index.html",revision:"ad57ad69e8af7178f7f5e48ea3be9696"},{url:"css/module/index.html",revision:"47a872234a09a2165b264baa150b97f8"},{url:"css/newFeatures/index.html",revision:"b9ded67668e3b4aeba2b14bede860cbe"},{url:"css/performance/index.html",revision:"b0f8885fe5f0e87f2c75a8ac62dbb2e2"},{url:"css/position/index.html",revision:"c1600d9e175be22b85c01b9013bd6541"},{url:"css/selector/index.html",revision:"5e0793af12e12465bec94829f806c27b"},{url:"designMode/common/index.html",revision:"0f6b81b40b394d95b107b8936ba003d2"},{url:"designMode/index.html",revision:"a0fd0918111515bda950c7612752dadd"},{url:"designMode/MVC/index.html",revision:"24e12bfd4699bc47b90318e69799033a"},{url:"designMode/MVP/index.html",revision:"0e2c5c5d19ccd3a0ece013a7b01481ee"},{url:"designMode/MVVM/index.html",revision:"26ba5dd820898f5e6280129425bfcb28"},{url:"designMode/reconstitution/index.html",revision:"53b3ca9a70c620e0af115f5458b37a38"},{url:"encrypt/index.html",revision:"488010eb3f1c27544d054cef431bdc7f"},{url:"engineering/babel/index.html",revision:"fcef7febbb215e519c713ea0021ce453"},{url:"engineering/index.html",revision:"5f83737cec136e6f59c3422a7b0c8254"},{url:"engineering/loader/index.html",revision:"beb1951bfa9c377b9300cf19b86bf2d9"},{url:"engineering/microService/index.html",revision:"5d101fb3f4fb4f6f2b35fbbf23b2a66f"},{url:"engineering/module/index.html",revision:"212e30890b9e2169d1588394f777e994"},{url:"engineering/treeShaking/index.html",revision:"bd99a26ae6e15de6a3cc947b34317027"},{url:"engineering/uglify/index.html",revision:"0d8fdc85075a08a46cb84c27149abda4"},{url:"engineering/webpack/index.html",revision:"3205fef63a2b7a1df03a9118a23ea85e"},{url:"guide/disable/index.html",revision:"4466a621a9f69611ec64e9d3029492a4"},{url:"guide/encrypt/index.html",revision:"ee2f8add0e06169495778bef4946ec66"},{url:"guide/index.html",revision:"ccdfd7f71c6a90e84901b2b0a2bf9158"},{url:"guide/markdown/index.html",revision:"51ca27f36dab25d5dabea1dafa8e001d"},{url:"guide/page/index.html",revision:"49c54262473eea39fcfaa39e07bf1843"},{url:"home/index.html",revision:"34bc8aa6441d7236bf73809241b15a3a"},{url:"html/browserArchitecture/index.html",revision:"9770517ce1e351d34ed89a91ecee9a92"},{url:"html/browserRun/index.html",revision:"1e5d066dba30ba83bea8d856dfdf0eb9"},{url:"html/cache/index.html",revision:"e5c9a36bf95335874e3aed82dc28893f"},{url:"html/communication/index.html",revision:"5bea126b37f0ed39cc3cfced12325443"},{url:"html/DOM/index.html",revision:"c3ce5eb3f49937d82fbc5ed77f669e2b"},{url:"html/event/index.html",revision:"9f3623c256c04891236b831a543775ff"},{url:"html/index.html",revision:"2769c5c5c6a35120222a25d60e45acbe"},{url:"html/memory/index.html",revision:"8b8ad33841da257564703363dd450291"},{url:"html/router/index.html",revision:"52ac8d1cdb3d492791688ff5ae06e929"},{url:"index.html",revision:"343227c6d75b1600f04e4f5dffd8b37c"},{url:"intro/index.html",revision:"3644915d97e2e48e176a0a0dd06e0e12"},{url:"javascript/bind/index.html",revision:"8b3202bf9108790f23c093c4c5ff2f1a"},{url:"javascript/call/index.html",revision:"7acb62def138f66ee93edce9b2b683ce"},{url:"javascript/closure/index.html",revision:"0a197eab4764bd98581c16b6d5e5e5b6"},{url:"javascript/cross/index.html",revision:"07a16f5c08d8ad1841976db25beba1d4"},{url:"javascript/currie/index.html",revision:"ee754349ec538bdc76a744feb270e823"},{url:"javascript/executedImmediately/index.html",revision:"9890175fdd31546e1f76cc1db77f0cdb"},{url:"javascript/extends/index.html",revision:"80daf2fd1162f8f4839509e416944ab7"},{url:"javascript/float/index.html",revision:"317993964d0d30794c8e488771a2bf8a"},{url:"javascript/generator/index.html",revision:"b725a7bbadd20f6edd4e1439791a1211"},{url:"javascript/index.html",revision:"5eb3ce180f0cd6963d6beed7eeb2e871"},{url:"javascript/loop/index.html",revision:"f3d37ea9201f77b6587f10ec20d6975c"},{url:"javascript/new/index.html",revision:"b90ce4bf78ef1e7bc3c386ea90794a4e"},{url:"javascript/promise/index.html",revision:"2578d17b234464bd083a7f28d750e01f"},{url:"javascript/prototype/index.html",revision:"b97c44cf557b99ff1071d87ba63ad174"},{url:"javascript/scope/index.html",revision:"bdc11e98c89f7ed441e20d64566b4042"},{url:"javascript/this/index.html",revision:"68ef37ff80a60fddbd07254030e47305"},{url:"javascript/typeof/index.html",revision:"df4551adb89c23d5e5326a894f502c0c"},{url:"javascript/v8/index.html",revision:"4db6a13276f6050f898b81820fb5676c"},{url:"javascript/variableAscension/index.html",revision:"8c87c681bb52cf165b9e72a6b40dd040"},{url:"learning/index.html",revision:"b0c3bbc99ad778e985a6b587808747c4"},{url:"network/http/index.html",revision:"6d9c5ad7f17001c29a7e528058485dfa"},{url:"network/http2.0/index.html",revision:"49a708ad41a7a82f51faf90123d034df"},{url:"network/http3.0/index.html",revision:"41f34c23ac32eb90a48b03240ec2e111"},{url:"network/https/index.html",revision:"74179a8031f249faf6b23deee0887329"},{url:"network/index.html",revision:"18e5908a3623656e926577c6e0c92a86"},{url:"network/model/index.html",revision:"76d42b1369792bc888555aa2daf3785e"},{url:"network/tcp/index.html",revision:"819fda3fa27b34dfdffc7b1f0ffa9bb8"},{url:"network/udp/index.html",revision:"4a2361df65be0d04b50974077550b11c"},{url:"network/websocket/index.html",revision:"e14bec5eb210abcd4ca13d66e83bac75"},{url:"node/catch/index.html",revision:"9be7733b3ebfbf5175b5e1e4aec1182a"},{url:"node/cluster/index.html",revision:"baaff3a1a986d8d16bb2a10b9b475a84"},{url:"node/communication/index.html",revision:"766db9ee07dc994afaca3158843212b1"},{url:"node/index.html",revision:"21b5bbf49399aeaf72bcf8adfa82408a"},{url:"node/loop/index.html",revision:"7e3de237b0836709f851f033ddf5593c"},{url:"node/module/index.html",revision:"864a663dc38727f8b5ed691e09660025"},{url:"node/pipe/index.html",revision:"3bbda7068f4354189dfa17d5608b925a"},{url:"node/provide/index.html",revision:"63a1cf201e660236e9ae1905e2253566"},{url:"node/require/index.html",revision:"f276b13ed5310c8417246c69ca4a0f0b"},{url:"node/stream/index.html",revision:"b3d200c55b49148274712037a11e582e"},{url:"others/index.html",revision:"e81d9d3f3d24ec33997d6b3f7954ae2f"},{url:"performance/animation/index.html",revision:"21d29d30eb58de900fcee9144b05f89e"},{url:"performance/hang/index.html",revision:"c686539032feaa594620230fcbda1f4c"},{url:"performance/images/index.html",revision:"9115ddf7ac5079ddab1aef2944370790"},{url:"performance/index.html",revision:"b33d9bee7a675e0d27259c62b98e6400"},{url:"performance/indicator/index.html",revision:"82a50d3e01356b35c208df0ebb1a4638"},{url:"performance/optimize/index.html",revision:"c839ee6c3a775ca62a6bc332322053d1"},{url:"performance/redraw/index.html",revision:"4187a8b8d66fe44a1c1071539f292318"},{url:"performance/render/index.html",revision:"c1cc7f63c67daed9cda676fddb67233e"},{url:"performance/url/index.html",revision:"8230e1cc635cf2ef1fd4ea082ce8cefb"},{url:"react/error/index.html",revision:"1240ffbc19785a4e8369f069a129f7a8"},{url:"react/fiber/index.html",revision:"945c2cbe92a3af30404abfef38a73b2f"},{url:"react/HOC/index.html",revision:"89cbec0838c113db24c91dcfa93051f0"},{url:"react/index.html",revision:"3a1e93097f56bc2a2752061420c82458"},{url:"react/performance/index.html",revision:"291a37441e4715f92733d77ed7c38623"},{url:"react/setState/index.html",revision:"ddc79b8e69f98e405cb02e565389c689"},{url:"react/synthetic/index.html",revision:"d54fe6a124a135674b1d8b44a98fdd36"},{url:"react/VDom/index.html",revision:"c0f2034d03432d2708e77d9fc95411c4"},{url:"redux/index.html",revision:"9ad6e24a2fbac8a8d9dc68c8157c7d10"},{url:"redux/logic/index.html",revision:"092342deacbd68005264a6c8e2d53e4a"},{url:"redux/rule/index.html",revision:"76bfea1f73bf397db54eb74d2fef774a"},{url:"slide/index.html",revision:"5e6c26511ee13561b5f53abba77f2664"},{url:"slides/index.html",revision:"67c772ecbe279f3b9e7ac69e7b39b8dd"},{url:"star/index.html",revision:"039fed2e05d464af6da4d2eb33dd9776"},{url:"system/communication/index.html",revision:"2a5f1cf73d1db0282911dc2c8c1c7701"},{url:"system/index.html",revision:"84e2d1cbc2a5cb8150303f620173d816"},{url:"system/io/index.html",revision:"110318a9c171e1db1af43fa7e0f6d2d8"},{url:"system/lock/index.html",revision:"db0dafb18018110da030f72dea5065f9"},{url:"system/process/index.html",revision:"5c495ec7211ca289216317b8f8eca3b8"},{url:"system/schedule/index.html",revision:"575d197b3fc58fe21e935ae0a21ede82"},{url:"tag/index.html",revision:"766245676ee2e0aaf5912560abee926d"},{url:"tag/markdown/index.html",revision:"6d4791d69c41e0a248256198f3a6f4de"},{url:"tag/使用指南/index.html",revision:"ff301d49356e6d9e47de0a7259ea65de"},{url:"tag/文章加密/index.html",revision:"12b4d762efae2298f350375aa25a066b"},{url:"tag/页面配置/index.html",revision:"0858f0e82672db0d6447700f1cc0683f"},{url:"timeline/index.html",revision:"3effa2ecb425727140a53d5953f40470"},{url:"vue/bind/index.html",revision:"5d23d4216f0fc46ef36f2d5936279db8"},{url:"vue/computed/index.html",revision:"8050f8c29fd33840f63d44bc573f596a"},{url:"vue/css/index.html",revision:"faca8f6966e42255046de9d68926abf6"},{url:"vue/data/index.html",revision:"4edc54ca3e1ac71237cf54da8a9e6877"},{url:"vue/index.html",revision:"8fb0257850e29d70ad2b809e00464120"},{url:"vue/keepAlive/index.html",revision:"a019ba4ed48274f41054a387eaa42dfc"},{url:"vue/nextTick/index.html",revision:"80dc0514709204fbbe2b6b9f2c455a5d"},{url:"vue/slot/index.html",revision:"b2ff8c8ecac9018d5ca8a8fc75b0cd5e"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
