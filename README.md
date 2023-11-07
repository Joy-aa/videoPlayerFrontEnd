<div align="center">

  <h1>QNY-Fronted</h1>

  <p>
    An online video website using Qiniu Cloud storage and video framing technology! 
  </p>


<!-- Badges -->

</div>

<br />

<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Screenshots](#camera-screenshots)
  * [Project Structure](#key-project-structure)
  * [Tech Stack](#space_invader-tech-stack)
  * [Features](#dart-features)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
- [Roadmap](#compass-roadmap)
- [Contributing](#wave-contributing)
  * [Code of BackEnd](#scroll-code-of-conduct)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)



<!-- About the Project -->
## :star2: About the Project


<!-- Screenshots -->
### :camera: Screenshots

<div align="center"> 
  <img src="https://placehold.co/600x400?text=Your+Screenshot+here" alt="screenshot" />
</div>

<!-- Project Structure -->
### :key: Project Structure

│  .gitattributes  
│  .gitignore  
│  babel.config.js   
│  jsconfig.json  
│  package-lock.json  
│  package.json  
│  README.md  
│  tsconfig.json  
│  vue.config.js  
│          
├─node_modules  
│
├─public  
│      index.html  
│
└─src  
│  App.vue  
│  background.jpg  
│  main.ts  
│  shims-vue.d.ts  
│  temp.vue  
│  test.vue  
│
├─api  
│      index.js   
│      loginIn.js  
│      test.js  
│
├─assets
│  │  algorithm.jpg
│  │  algorithm2.jpg
│  │  back.png
│  │  background.jpg
│  │  background1 - 副本.jpg
│  │  background1.jpg
│  │  background2.jpg
│  │  background3.jpg
│  │  background4.jpg
│  │  banner.jpg
│  │  cifar_aside.jpg
│  │  img.png
│  │  OIP.jpg
│  │  qiniu.jpg
│  │  qiniulogo.jpg
│  │  qiniuyun.png
│  │  script.js
│  │  tool.jpg
│  │  WeChat_20231025161539.mp4
│  │
│  └─css
│          global.css
│
├─components
│      emoji.json
│      emoji.vue
│
├─pages
│  ├─homepage
│  │  │  homepage.vue
│  │  │  notloginuserpage.vue
│  │  │  README.md
│  │  │  searchpage.vue
│  │  │  style.css
│  │  │  userpage.vue
│  │  │  videopage.vue
│  │  │
│  │  └─assets
│  │          1.png
│  │          3.png
│  │          404.png
│  │          admin.jpg
│  │          agriculture.jpg
│  │          agriculture_back.jpg
│  │          banner.jpg
│  │          crane_back.jpg
│  │          crane_detection.jpg
│  │          dataset.jpg
│  │          deploy.jpg
│  │          edu-em.jpg
│  │          edu-ts.jpg
│  │          education.jpg
│  │          education_back.jpg
│  │          en-em.jpg
│  │          en-ts.jpg
│  │          enterprise.jpg
│  │          enterprise_back.jpg
│  │          estate-em1.jpg
│  │          estate-em2.jpg
│  │          estate.jpg
│  │          estate_back.jpg
│  │          ex-fc.jpg
│  │          ex-fd.jpg
│  │          ex-fgir.jpg
│  │          ex-ic.jpg
│  │          ex-is.jpg
│  │          ex-mkia.jpg
│  │          ex-od.jpg
│  │          ex-sg.jpg
│  │          ex-ts.jpg
│  │          fac-em.jpg
│  │          fac-ic.jpg
│  │          fac-ob.jpg
│  │          factory.jpg
│  │          factory_back.jpg
│  │          fence_back.jpg
│  │          fence_detection.jpg
│  │          financial.jpg
│  │          financial_back.jpg
│  │          flow_back.jpg
│  │          gan.jpeg
│  │          gan.jpg
│  │          general.jpg
│  │          general_back.jpg
│  │          generate.jpg
│  │          gov-em1.jpg
│  │          gov-em2.jpg
│  │          gov-em3.jpg
│  │          government.jpg
│  │          government_back.jpg
│  │          head.jpg
│  │          health-em.jpg
│  │          health-is.jpg
│  │          health-ts.jpg
│  │          healthcare.jpg
│  │          healthcare_back.jpg
│  │          helmet_back.jpg
│  │          helmet_detection.jpg
│  │          info-em.jpg
│  │          info-ts.jpg
│  │          information.jpg
│  │          information_back.jpg
│  │          more.jpg
│  │          neural_style.jpg
│  │          plus.png
│  │          QRcode.png
│  │          retail-em.jpg
│  │          retail-od.jpg
│  │          retail.jpg
│  │          retail_back.jpg
│  │          task.jpg
│  │          test.jpg
│  │          test_res.jpg
│  │          train.jpg
│  │
│  ├─loginIn
│  │  │  login.vue
│  │  │
│  │  └─components
│  │          loginIn.vue
│  │          register.vue
│  │          verificationCode.vue
│  │          verificationEmail.vue
│  │
│  ├─user
│  │      AdminInfo.vue
│  │      README.md
│  │
│  └─UserQuery
│      │  UserImgclassification.vue
│      │  UserImgsegmentation.vue
│      │  UserQuery.vue
│      │
│      └─components
│              UserimgPreviewer.vue
│
├─router
│      index.ts
│
├─store
│      index.js
│
└─utils
       api.js


<!-- TechStack -->
### :space_invader: Tech Stack

<ul>
  <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
  <li><a href="https://nextjs.org/">Next.js</a></li>
  <li><a href="https://reactjs.org/">React.js</a></li>
  <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
</ul>


<!-- Features -->
### :dart: Features

- Feature 1
- Feature 2
- Feature 3


<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Prerequisites -->
### :bangbang: Prerequisites

Before running this project, you should ensure that you have cloned our backend project locally.
Please refer to https://github.com/Joy-aa/videoPlayerBackEnd/README.md


Before starting, ensure that you have installed Node.js and NPM.

You can find it on the [Node.js official website]（ https://nodejs.org/ ）Download and install them from.

Clone the project

```bash
  git clone https://github.com/Joy-aa/videoPlayerFrontEnd.git
```

Go to the project directory

```bash
  cd videoPlayerFrontEnd
```

Install dependencies

```bash
  npm install
```
```bash
  npm run serve
```

The project will be http://localhost:8080 Run on.
You can access this URL in a browser to view the application.

<!-- Roadmap -->
## :compass: Roadmap

* [x] Todo 1
* [x] Todo 1
* [x] Todo 1
* [x] Todo 1
* [x] Todo 1
* [x] Todo 1
* [x] Todo 1
* [x] Todo 1
* [x] Todo 1
* [x] Todo 1
* [x] Todo 1
* [x] Todo 1
* [x] Todo 1
* [x] Todo 1
* [x] Todo 1
* [x] Todo 1
* [x] Todo 1
* [x] Todo 1
* [x] Todo 1
* [x] Todo 1

<!-- Contributing -->
## :wave: Contributing

<a href="https://github.com/Joy-aa/videoPlayerFrontEnd/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Louis3797/awesome-readme-template" />
</a>


Contributions are always welcome!

See `README.md` for ways to get started.


<!-- Code of BackEnd -->
### :scroll: Code of Conduct

Please read the [Code of BackEnd](https://github.com/Joy-aa/videoPlayerBackEnd)

<!-- Contact -->
## :handshake: Contact

Yuxin Wang - 22251259@qq.com

Jia Wang -

Xinyuan Cheng -

Project Link: [https://github.com/Joy-aa/videoPlayerFrontEnd](https://github.com/Joy-aa/videoPlayerFrontEnd)


<!-- Acknowledgments -->
## :gem: Acknowledgements

- [Qiniu](https://www.qiniu.com/)
