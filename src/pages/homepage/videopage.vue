<template>
  <div>
    <div>
      <h2>视频详情页</h2>
      <p>接收的参数: {{ $route.params.videoid }}</p>
    </div>
    <div class="container">
      <el-row align="bottom">
        <el-col :span="22">
          <div>

            <div>
              <video class="videodetail" width="90%" :src="getvideo().src" controls></video>
            </div>

            <div>
              <el-row align="middle">
                <!--            用户头像-->
                <p style="display: inline;font-size: 15px">
                  @这里是用户名
                </p>
                <p style="display: inline;font-size: 15px;margin-left: 40px">
                  ·
                </p>
                <p style="display: inline;font-size: 5px;margin-left: 15px">
                  这里是发布时间
                </p>
              </el-row>

              <p>
                这里是视频简介
              </p>
            </div>

          </div>
        </el-col>

        <el-col :span="2">
          <div>
            <el-col class="button-group" align="right">
              <el-button class="upbutton" :icon="ArrowUpBold" >上一个</el-button>
              <el-button class="downbutton" :icon="ArrowDownBold" >下一个</el-button>
              <img src="../../assets/img.png" style="display: inline;width: 60px;height: 60px" alt="图片">
              <!--          没找到心形图标-->
              <el-button class="likebutton" :icon="Star" >点赞</el-button>
              <el-button class="commentbutton" :icon="Comment" >评论</el-button>
              <el-button class="collectbutton" :icon="StarFilled" >收藏</el-button>
              <el-button class="transmitbutton" :icon="Share" >转发</el-button>
            </el-col>
          </div>
        </el-col>
      </el-row>


    </div>
  </div>
<!--  <div class="container">-->
<!--    <div class="video">-->
<!--      <video :src="getvideo().src" controls></video>-->
<!--    </div>-->
<!--    <div class="button-group">-->
<!--      <button class="likebutton">点赞</button>-->
<!--      <button class="commentbutton">评论</button>-->
<!--      <button class="collectbutton">收藏</button>-->
<!--      <button class="transmitbutton">转发</button>-->
<!--    </div>-->
<!--  </div>-->
</template>

<style>
.videodetail {
  width: 95%;
  height: 500px;
  /*flex: 9;*/
}
.upbutton {
  width: 80px;
  z-index: 1;
}
.downbutton {
  width: 80px;
  z-index: 1;
}
.likebutton {
  width: 80px;
  z-index: 1;
}
.commentbutton {
  width: 80px;
  z-index: 1;
}
.collectbutton {
  width: 80px;
  z-index: 1;
}
.transmitbutton {
  width: 80px;
  z-index: 1;
}

/* 设置视频的样式 */
.video {
  /*flex: 1; !* 视频占据剩余的可用空间 *!*/
  /*max-width: 90%; !* 可根据需要调整视频的宽度 *!*/
  width: 100%;
  height: 650px;
}

/* 设置按钮组的样式 */
.button-group {
  /*width: 10%;*/
  /*margin-right: 10%;*/
  /*flex: 1; !* 按钮组占据剩余的可用空间 *!*/
  /*display: flex; !* 使用弹性布局 *!*/
  flex-direction: column; /* 垂直排列按钮 */
  z-index: 1;
  /*width: 100px;*/
  /*margin: 50px;*/
  /*justify-content: space-between; !* 按钮之间的间距最大化 *!*/
}

/* 设置单个按钮的样式 */
.button {
  /*margin: 10px 0; !* 顶部和底部边距 *!*/
}
</style>
<script setup>
import { Delete, Star, Search, Share, StarFilled, Comment, Upload, ArrowUpBold, ArrowDownBold } from '@element-plus/icons-vue'
function getvideo(){
  return { id: 1, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4' }
}
const videos = [
  { id: 1, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4' },
  { id: 2, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4' },
  { id: 3, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4' },
  { id: 4, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4' },
  { id: 5, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4' },
  { id: 6, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4' },
  // 添加更多视频数据...
];
</script>
