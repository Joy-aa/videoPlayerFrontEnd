如需访问英文版本README.md,
请点击 https://github.com/Joy-aa/videoPlayerFrontEnd/blob/main/README_EN.md


<div align="center">

  <h1>QNY-FrontEnd</h1>

  <p>
    一个使用七牛云云存储和视频截帧技术的在线视频网站！
  </p>

<!-- Badges -->

</div>

<br />

<!-- 目录 -->

# :notebook_with_decorative_cover: 目录

- [关于项目](#star2-关于项目)
    * [项目截屏示例](#camera-项目截屏示例)
    * [技术栈](#space_invader-技术栈)
    * [功能点](#dart-功能点)
- [准备条件](#bangbang-准备条件)
- [开始](#toolbox-开始)
- [贡献](#wave-贡献)
- [联系](#handshake-联系)
- [特别鸣谢](#gem-特别鸣谢)

<!-- 关于项目 -->
## :star2: 关于项目

<!-- 项目截屏示例 -->
### :camera: 项目截屏示例

<div align="center"> 
  <img src="src/assets/readmeimg.png" alt="screenshot" />
</div>

[//]: # (<!-- Project Structure -->)

[//]: # (### :key: Project Structure)

[//]: # ()
[//]: # (│  ***config files**  )

[//]: # (│  babel.config.js   )

[//]: # (│  jsconfig.json  )

[//]: # (│  package-lock.json  )

[//]: # (│  package.json  )

[//]: # (│  README.md  )

[//]: # (│  tsconfig.json  )

[//]: # (│  vue.config.js  )

[//]: # (│  ***npm library**  )

[//]: # (├─node_modules  )

[//]: # (│  ***public files**  )

[//]: # (├─public  )

[//]: # (│  ***source files**  )

[//]: # (└─src  )

[//]: # (│  ***program entrance file**  )

[//]: # (│     App.vue   )

[//]: # (│     main.ts  )

[//]: # (│     shims-vue.d.ts  )

[//]: # (│  ***login api files**  )

[//]: # (├─api  )

[//]: # (│  ***related images**  )

[//]: # (├─assets  )

[//]: # (├─components  )

[//]: # (│  ***main pages**  )

[//]: # (├─pages  )

[//]: # (│  ├─homepage  )

[//]: # (│  ├─loginIn  )

[//]: # (│  └─user  )

[//]: # (│  ***router files**  )

[//]: # (├─router  )

[//]: # (│      index.ts  )

[//]: # (│  ***storage files**  )

[//]: # (├─store  )

[//]: # (│      index.js  )

[//]: # (│  ***util files**  )

[//]: # (└─utils)

<!-- 技术栈 -->
### :space_invader: 技术栈

<ul>
  <li><a href="https://nodejs.org/en">Node.js</a></li>
  <li><a href="https://cn.vuejs.org/">Vue.js</a></li>
  <li><a href="https://www.sass.hk/">SASS</a></li>
  <li><a href="https://element-plus.org/zh-CN/">Element UI</a></li>
</ul>

<!-- 功能点 -->
### :dart: 功能点

- 账户系统
  * 登录、退出和注册。
  * 图片验证码。
- 主页
  * 内容分类：视频内容分类页面，如热门视频和体育频道。
  * 视频截帧：视频封面显示。
  * 视频信息显示。
- 搜索
  * 在搜索栏中输入关键字以查找特定的视频、用户。搜索结果将显示相关视频和相关用户。
  * 关注/取消关注相关用户。
- 上传视频
  * 上传你自制的短视频。
  * 添加视频名称、介绍和标签。
- 个人信息
  * 查看和编辑个人信息。
  * 查看您上传的视频、喜爱的视频和查看历史记录。
- 视频页面
  * 视频播放：播放、暂停、进度条拖放。
  * 视频切换：您可以使用向上和向下键滚动视频。
  * 音量调节，全屏播放，播放速度调节，下载视频。
  * 为视频添加水印。
  * 关注/取消关注其他用户。
  * 查看视频的点赞，评论，分享，收藏。
  * 点赞，评论，分享，收藏视频。
  * 点赞视频评论

<!-- 准备条件 -->
### :bangbang: 准备条件

在运行此项目之前，您应该确保已在本地克隆了我们的后端项目。
请参阅https://github.com/Joy-aa/videoPlayerBackEnd/README.md

<!-- 开始 -->
## 	:toolbox: 开始

在开始之前，请确保已安装Node.js和NPM。你可以在[Node.js官方网站](https://nodejs.org/)上找到它，下载并安装它们。

克隆项目到本地

```bash
  git clone https://github.com/Joy-aa/videoPlayerFrontEnd.git
```

进入项目目录

```bash
  cd videoPlayerFrontEnd
```

安装依赖

```bash
  npm install
```
```bash
  npm run serve
```

该项目将在http://localhost:8080中运行。您可以在浏览器中访问此URL以查看应用程序。

<!-- 贡献 -->
## :wave: 贡献

<a href="https://github.com/Joy-aa/videoPlayerFrontEnd/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Louis3797/awesome-readme-template" />
</a>

随时欢迎各位的建议与issue!

请查阅 `README.md` 开启项目运行.

<!-- 联系 -->
## :handshake: 联系

王宇鑫 - 22251259@qq.com

王佳 - 22251277@zju.edu.cn

程心媛 - 22251133@zju.edu.cn

项目链接: [https://github.com/Joy-aa/videoPlayerFrontEnd](https://github.com/Joy-aa/videoPlayerFrontEnd)

<!-- 特别鸣谢 -->
## :gem: 特别鸣谢

- [七牛云](https://www.qiniu.com/)
