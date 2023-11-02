const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: false,
  transpileDependencies: true,
  devServer:{
    port: 8080, //前端服务启动的端口号
    host: 'localhost', //前端服务启动后的访问ip，默认为localhost, host和port组成了前端服务启动后的访问入口。
    https: false,
    open: true,
    proxy:{
      '/api': {
        // target: 'http://10.214.242.155:7667',  //部署的时候, 记得更改服务器上的后端端口
        target: 'http://localhost:8888',
        changeOrigin:true,
        pathRewrite:{'^/api':''},
      }}
  },
  pages: {
    index: {
      entry: 'src/main.ts',
      title: '视频播放平台'
    }
  },
})

// holy
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
// module.exports = { configureWebpack: {
//     resolve: {
//       extensions: [".ts", ".tsx", ".js", ".json"],
//       alias: {}
//     },
//     module: {
//       rules: [
//         {
//           test: /\.tsx?$/,
//           loader: 'ts-loader',
//           exclude: /node_modules/,
//           options: {
//             appendTsSuffixTo: [/\.vue$/],
//           }
//         }
//       ]
//     }
//   }
// }