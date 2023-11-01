const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: false,
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api': {
        // target: 'http://10.214.242.155:7667',  //部署的时候, 记得更改服务器上的后端端口
        target: 'http://localhost:8080',
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