const {
	config
} = require("vuepress-theme-hope");

module.exports = config({
	title: "白山",
	description: "前端知识体系图谱",

	base: "/fontEnd/",

	dest: "./dist",

	// remove this if you are not using Vue and React in "markdownEnhance: code demo"
	head: [
		[
			"script",
			{
				src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
			},
		],
		[
			"script",
			{
				src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
			},
		],
		["script", {
			src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"
		}],
		[
			"script",
			{
				src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"
			},
		],
	],

	// locales: {
	//   "/": {
	//     title: "Theme Demo",
	//     description: "vuepress-theme-hope 的 demo",
	//   },
	// },

	themeConfig: {
		logo: "/logo.svg",
		hostname: "https://hbuecx.com",

		author: "白山",
		repo: "https://github.com/AWhiteMouse/fontEnd",
		docsRepo: "https://github.com/AWhiteMouse/fontEnd",
		docsDir: "src",
		baseLang: "zh-CN",

		nav: [{
				text: "首页",
				link: "/",
				icon: "home"
			},
			{
				text: "知识图谱",
				icon: "creative",
				link: "/guide/",
			},
			{
				text: "每日学习",
				icon: "enum",
				link: "/learning/",
			},
			{
				text: "帮助",
				icon: "note",
				items: [
					{
						text: "图谱来源",
						icon: "creative",
						link: "https://bitable.feishu.cn/app8Ok6k9qafpMkgyRbfgxeEnet",
					},
					{
						text: "建站工具",
						icon: "home",
						link: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",
					},
				]
			},
		],

		sidebar: {
			"/": [
				// "",
				// "home",
				// "slides",
				"guide/",
				{
					title: "前端基础",
					children: [
						{
							title: "Javascript",
							prefix: "javascript/",
							children: [
								"",
								"clone",
								"prototype",
								"extends",
								"scope",
								"closure",
								"variableAscension",
								"this",
								"executedImmediately",
								"typeof",
								"bind",
								"call",
								"currie",
								"v8",
								"float",
								"new",
								"loop",
								"promise",
								"generator",
								"cross",
							],
						},
						{
							title: "CSS",
							prefix: "css/",
							children: [
								"",
								"box",
								"selector",
								"BFC",
								"position",
								"flex",
								"layout",
								"newFeatures",
								"module",
								"performance",
								"context",
								"center",
								"float",
							],
						},
						{
							title: "HTML&浏览器",
							prefix: "html/",
							children: [
								"",
								"communication",
								"router",
								"DOM",
								"event",
								"cache",
								"browserArchitecture",
								"memory",
								"browserRun"
							],
						},
						{
							title: "性能",
							prefix: "performance/",
							children: [
								"",
								"hang",
								"indicator",
								"redraw",
								"optimize",
								"images",
								"url",
								"animation",
								"render",
								"report"
							],
						},
						{
							title: "工程化",
							prefix: "engineering/",
							children: [
								"",
								"module",
								"treeShaking",
								"uglify",
								"babel",
								"webpack",
								"microService",
							],
						},
					],
				},
				{
					title: "框架",
					children: [{
							title: "React",
							prefix: "react/",
							children: [
								"",
								"synthetic",
								"VDom",
								"setState",
								"fiber",
								"HOC",
								"error",
								"performance",
							],
						},
						{
							title: "Redux",
							prefix: "redux/",
							children: [
								"",
								"rule",
								"logic",
							],
						},
						{
							title: "Vue",
							prefix: "vue/",
							children: [
								"",
								"data",
								"bind",
								"computed",
								"slot",
								"nextTick",
								"keepAlive",
								"css",
							],
						},
						{
							title: "Vuex",
							prefix: "vuex/",
							children: [
								"",
								"computed"
							],
						},
					],
				},
				{
					title: "算法",
					children: [{
							title: "算法",
							prefix: "algorithm/",
							children: [],
						},
						{
							title: "编程题",
							prefix: "programming/",
							children: [],
						},
					],
				},
				{
					title: "基础",
					children: [{
							title: "操作系统",
							prefix: "system/",
							children: [
								"",
								"process",
								"communication",
								"schedule",
								"lock",
								"io",
							],
						},
						{
							title: "网络",
							prefix: "network/",
							children: [
								"",
								"http2.0",
								"http3.0",
								"websocket",
								"model",
								"https",
								"http",
								"tcp",
								"udp",
							],
						},
					],
				},
				{
					title: "大前端",
					children: [{
						title: "Node",
						prefix: "node/",
						children: [
							"",
							"module",
							"require",
							"loop",
							"cluster",
							"stream",
							"pipe",
							"provide",
							"communication",
							"catch",
						],
					}, ],
				},
				{
					title: "其他",
					children: [{
							title: "设计模式",
							prefix: "designMode/",
							children: [
								"",
								"common",
								"reconstitution",
								"MVVM",
								"MVC",
								"MVP",
							],
						},
						{
							title: "其他",
							prefix: "others/",
							children: [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
							],
						},
					],
				},
			],
		},

		// locales: {
		//   "/zh/": {
		//     nav: [
		//       { text: "博客主页", link: "/zh/", icon: "home" },
		//       { text: "项目主页", link: "/zh/home/", icon: "home" },
		//       {
		//         text: "如何使用",
		//         icon: "creative",
		//         link: "/zh/guide/",
		//       },
		//       {
		//         text: "主题文档",
		//         icon: "note",
		//         link: "https://vuepress-theme-hope.github.io/zh/",
		//       },
		//     ],
		//     sidebar: {
		//       "/zh/": [
		//         "",
		//         "home",
		//         "slides",
		//         {
		//           title: "如何使用",
		//           icon: "creative",
		//           prefix: "guide/",
		//           children: ["", "page", "markdown", "disable", "encrypt"],
		//         },
		//       ],
		//     },
		//   },
		// },

		blog: {
			intro: "/intro/",
			sidebarDisplay: "mobile",
			links: {
				// Zhihu: "https://zhihu.com",
				// Baidu: "https://baidu.com",
				Github: "https://github.com/AWhiteMouse/fontEnd",
			},
		},

		footer: {
			display: true,
			content: "有趣的人生，一半是山川湖海",
		},

		comment: {
			type: "valine",
			appId: "MTKVkpGxrwDShjFx96MeTgPQ-gzGzoHsz",
			appKey: "kIeeY0Vz3lVvWaef7uHwvxa6",
		},

		copyright: true,

		lastUpdate: {
			timezone: "Asia/Shanghai",
		},

		mdEnhance: {
			// please only enable the features you need
			enableAll: true,
			presentation: {
				plugins: [
					"highlight",
					"math",
					"search",
					"notes",
					"zoom",
					"anything",
					"audio",
					"chalkboard",
				],
			},
		},

		pwa: {
			favicon: "/favicon.ico",
			cachePic: true,
			apple: {
				icon: "/assets/icon/apple-icon-152.png",
				statusBarColor: "black",
			},
			msTile: {
				image: "/assets/icon/ms-icon-144.png",
				color: "#ffffff",
			},
			manifest: {
				icons: [{
						src: "/assets/icon/chrome-mask-512.png",
						sizes: "512x512",
						purpose: "maskable",
						type: "image/png",
					},
					{
						src: "/assets/icon/chrome-mask-192.png",
						sizes: "192x192",
						purpose: "maskable",
						type: "image/png",
					},
					{
						src: "/assets/icon/chrome-512.png",
						sizes: "512x512",
						type: "image/png",
					},
					{
						src: "/assets/icon/chrome-192.png",
						sizes: "192x192",
						type: "image/png",
					},
				],
				shortcuts: [{
					name: "Guide",
					short_name: "Guide",
					url: "/guide/",
					icons: [{
							src: "/assets/icon/guide-maskable.png",
							sizes: "192x192",
							purpose: "maskable",
							type: "image/png",
						},
						{
							src: "/assets/icon/guide-monochrome.png",
							sizes: "192x192",
							purpose: "monochrome",
							type: "image/png",
						},
					],
				}, ],
			},
		},
	},
});