---
icon: markdown
title: 每日学习
---

<template>
    <div class="timeline-container">
        <div v-for="(learn, index) in learnList" :key="index" class="timeline-body">
            <div class="timeline-main">
                <div class="timeline-time">{{learn.time}}</div>
                <div
                    v-for="(content, contentIndex) in learn.contents"
                    :key="contentIndex"
                    class="timeline-content"
                >
                    <div v-html="content"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            learnList: [
                {
                    "time":"2020/02/01",
                    "contents":[
                        {
                            "content":"学习react hooks：#React Hooks学习笔记#useState和useEffect部分",
                            "links":[
                                "http://hbuecx.com/post/react-hooks-xue-xi-bi-ji/"
                            ]
                        }
                    ]
                },
                {
                    "time":"2019/12/23",
                    "contents":[
                        {
                            "content":"学习egg文档：#文档地址#",
                            "links":[
                                "https://eggjs.org/zh-cn/intro/"
                            ]
                        }
                    ]
                },
                {
                    "time":"2019/12/22",
                    "contents":[
                        {
                            "content":"学习Koa2并编写demo：#学习视频地址#",
                            "links":[
                                "https://www.bilibili.com/video/av36421651"
                            ]
                        }
                    ]
                },
                {
                    "time":"2019/10/22",
                    "contents":[
                        {
                            "content":"编写《Nodejs入门》demo：#Github地址#",
                            "links":[
                                "https://github.com/AWhiteMouse/-NodeJs-"
                            ]
                        }
                    ]
                },
                {
                    "time":"2019/10/21",
                    "contents":[
                        "学习《Nodejs入门》"
                    ]
                },
                {
                    "time":"2019/10/20",
                    "contents":[
                        "优化聊天室：加入聊天机器人；优化样式"
                    ]
                },
                {
                    "time":"2019/10/1",
                    "contents":[
                        {
                            "content":"优化#create-wxcool-cli#的脚手架。",
                            "links":[
                                "https://www.npmjs.com/package/create-wxcool-cli"
                            ]
                        }
                    ]
                },
                {
                    "time":"2019/09/29",
                    "contents":[
                        "1、刷了三道算法题，中低难度的；",
                        "2、搭建了安装WxCool的脚手架。"
                    ]
                },
                {
                    "time":"2019/09/27",
                    "contents":[
                        "优化WxCool代码，主要是讲gulpfile.js写法升级。"
                    ]
                },
                {
                    "time":"2019/09/26",
                    "contents":[
                        "升级WxCool依赖"
                    ]
                },
                {
                    "time":"2019/09/25",
                    "contents":[
                        {
                            "content":"1、学习apply和call：#帮你快速理解apply和call#；",
                            "links":[
                                "https://juejin.im/post/5d8b3521e51d457825210a1a"
                            ]
                        },
                        {
                            "content":"2、学习#前端模块化#；",
                            "links":[
                                "http://es6.ruanyifeng.com/#docs/module"
                            ]
                        },
                        "3、手写eventProxy.js。"
                    ]
                },
                {
                    "time":"2019/09/24",
                    "contents":[
                        "1、跟着教程学习用react16、next.js搭建博客，预计可能还会用到koa；",
                        "2、安装Gridea，准备以后遇到困难，将解决问题的过程发布在这里。内容还需要再手动同步一下。"
                    ]
                },
                {
                    "time":"2019/09/23",
                    "contents":[
                        "问：如何解决首页白屏问题？",
                        "答：",
                        "1、webpack打包减少js体积；按需加载；",
                        "2：服务端渲染，服务端的效率高于浏览器；",
                        "3：页面loading和骨架屏。"
                    ]
                },
                {
                    "time":"2019/09/22",
                    "contents":[
                        "问：react里的Link标签和a标签有什么区别？",
                        "答：",
                        "1、Link标签如果绑定了onClick事件，就会默认组件跳转事件；",
                        "2：Link的跳转是使用hash跳转，不是页面跳转，只会更新对应的Router，不会刷新整个页面。"
                    ]
                },
                {
                    "time":"2019/09/14",
                    "contents":[
                        "1、把弹窗组件加到wxcool中，待demo测试。",
                        "2、配置github图床。"
                    ]
                },
                {
                    "time":"2019/08/29",
                    "contents":[
                        {
                            "content":"codepen：#CSS单选框#",
                            "links":[
                                "https://codepen.io/awhitemouse/pen/zYOzZKa"
                            ]
                        }
                    ]
                },
                {
                    time: '2019/08/28',
                    contents: [
                        '1、拆分root和calculator，拆分完后发现有问题。',
                        '拆分后发现root没有war包，也就不能被自动部署到tomcat中。同时，calculator也因为路径问题而无法访问。',
                        '前些天一直在做书院首页的需求，一直到昨天晚上上线，我才算心安了。',
                    ]
                },
                {
                    time: '2019/08/25',
                    contents: [
                        '1、尝试配置钩子程序自动触发jenkins构建，未成功，于是将配置复原。',
                        '2、更新WxCool：添加节流防抖函数；优化Hapi的封装；添加携带promise的请求封装。',
                    ]
                },
                {
                    time: '2019/08/24',
                    contents: [
                        '完成了jenkins自动部署war包到tomcat的功能。',
                    ]
                },
                {
                    time: '2019/08/23',
                    contents: [
                        '1、解决了calculator项目Java代码不能发布到github的问题。',
                        '解决办法是新建了一个文件夹，将代码文件拷贝到新文件夹中，然后在新文件夹跟远程建立连接，把本地代码强制推送到远程，覆盖掉远程的代码。虽然解决了问题，但是我还是没发现在之前的文件夹中java代码没有上传是个什么原因。',
                        '2、修改了jenkins的配置，Maven项目在jenkins上构建成功。',
                    ]
                },
                {
                    time: '2019/08/21',
                    contents: [
                        '从昨晚到今天凌晨两点：尝试在Jenkins上配置Maven项目，未成功。',
                    ]
                },
                {
                    time: '2019/08/20',
                    contents: [
                        {
                            content: 'codepen：#CSS评分#',
                            links: ['https://codepen.io/awhitemouse/pen/ZEzpPgN']
                        },
                    ]
                },
                {
                    time: '2019/08/18',
                    contents: [
                        {
                            content: '准备将#网址导航项目#由静态网页项目改装为React项目，减少重复代码。',
                            links: ['https://github.com/WebStackPage/WebStackPage.github.io'],
                        },
                    ]
                },
                {
                    time: '2019/08/16',
                    contents: [
                        '配置Jenkins发布项目到指定目录。另外，Jenkins已经实现自动发布。',
                    ]
                },
                {
                    time: '2019/08/15',
                    contents: [
                        '更新Perfect-Article',
                    ]
                },
                {
                    time: '2019/08/14',
                    contents: [
                        '在markdown中编辑html',
                    ]
                },
            ],
        };
    },
    created() {
        console.log(this.learnList);
        this.learnList.forEach((learn, index) => {
            learn.contents.forEach((content, contentIndex) => {
                if (typeof content !== 'string') {
                    this.$set(this.learnList[index].contents, contentIndex, this.generateContent(content));
                }
            })
        })
    },
    methods: {
        generateContent(data) {
            const {content, links} = data;
            console.log(data);
            // 先将字符串拆解
            const textArr = content.split('#');
            // 最后的结果
            let result = '';
            // 标志位：用于判断当前应该添加开标签还是闭标签
            let flag = 0;
            // 如果第一个字符就是#号，那么从第一个字符开始添加开标签
            if (content[0] === '#') {
                result += '<a href="' + links[0] + '" target="_blank">';
                flag = ~flag;
            }
            textArr.forEach((text, index) => {
                if (flag) {
                    // 如果已经添加过开标签，则现在应该添加标签
                    result += text + '</a>';
                }
                else if (index !== textArr.length - 1) {
                    // 如果前一个添加的标签是闭标签，并且当前不是数组的最后一个数据，则添加开标签
                    result += text + '<a href="' + links[index / 2] + '">';
                }
                else {
                    // 最后一个数据项，前一个添加的是闭标签，则直接连接文本
                    result += text;
                }
                // 每次连接文本都更改一下标志位
                flag = ~flag;
            })
            return result;
        }
    }
}
</script>




<style>
    .timeline-container {
        width: 100%;
        padding-left: 10px;
        position: relative;
        color: #fff;
    }

    .timeline-body {
        position: relative;
        border-left: 2px solid #ddd;
        padding: 20px;
    }

    .timeline-body::before {
        content: '';
        position: absolute;
        top: 30px;
        left: -7px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #0081ff;
    }

    .timeline-body::after {
        content: '';
        position: absolute;
        top: 33px;
        left: -4px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #fff;
    }

    .timeline-main {
        padding: 10px 15px 15px 15px;
        background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
    }

    .timeline-time {
        padding: 2px;
        min-width: 0;
        border-radius: 5px;
        font-weight: 700;
        font-size: 18px;
    }

    .timeline-content {
        margin-top: 5px;
    }

    .timeline-content a {
        color: greenyellow !important;
    }
</style>
