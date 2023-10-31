<template>

  <div class="holly-main">
    <router-view></router-view>
    <div class="video-container">
<!--      <div>-->
<!--        <h2>分类视频页</h2>-->
<!--        <p>接收的参数: {{ $route.params.category }}</p>-->
<!--      </div>-->
<!--      第一行三个视频，一个个人中心-->
      <el-row>

        <div v-for="(video, index) in videos_top" :key="index" @click="clickvideo" class="video-item_top">
          <router-link :to="`/videopage/${video.id}`">
            <div class="video-content">
              <div class="video-info" style="margin-right: 2px">
                <video :src="video.src" controls width="285" height="480"></video>
                <p style="margin-left: 5px;font-size: 15px;color: lightgrey">这里是视频简介</p>
                <el-row style="margin-left: 5px;margin-top: 3px">
                  <p style="font-size: 14px;color: grey">@用户名</p>
                  <p style="margin-left: 20px;font-size: 14px;color: grey">· 发布时间</p>
                </el-row>
                <el-row style="margin-left: 5px;margin-top: 3px">
                  <p>点赞</p>
                  <p style="margin-left: 20px">评论</p>
                  <p style="margin-left: 20px">收藏</p>
                </el-row>
              </div>
            </div>
          </router-link>
        </div>

        <div class="user-content">
          <div class="user-info">
            <el-row align="middle">
              <p style="font-size: 20px">@{{store.state.username}}</p>
            </el-row>
            <el-row align="middle" style="margin-top: 5px">
                <p>关注 {{followNums}} </p>
                <p style="margin-left: 35px">粉丝 {{fanNums}} </p>
                <p style="margin-left: 35px">获赞 {{likeNums}}</p>
            </el-row>
            <el-row align="middle" style="margin-top: 5px">
              <p>抖音号: {{userId}}</p>
              <el-icon class="female" style="color: deeppink; margin-left: 20px;"><Female /></el-icon>
              <p style="margin-left: 5px">{{userAge}}</p>
            </el-row>
            <el-row align="middle" style="margin-top: 5px">
              <p>很高兴认识你</p>
            </el-row>

            <!--            <p>{{store.state.username}}</p>-->
<!--            <p>关注{{followNums}}   |   粉丝{{fanNums}}   |   获赞{{likeNums}}</p>-->
<!--            <div>-->
<!--              <p>抖音号: {{userId}}</p>-->
<!--&lt;!&ndash;              <span class="N4QS6RJT"><svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" class=""&ndash;&gt;-->
<!--&lt;!&ndash;                                          viewBox="0 0 12 12" style="margin-right: 4px;"><mask id="woman_svg__a"&ndash;&gt;-->
<!--&lt;!&ndash;                                                                                               maskUnits="userSpaceOnUse"&ndash;&gt;-->
<!--&lt;!&ndash;                                                                                               x="-2" y="-2" width="16"&ndash;&gt;-->
<!--&lt;!&ndash;                                                                                               height="16"&ndash;&gt;-->
<!--&lt;!&ndash;                                                                                               style="mask-type: alpha;"><path&ndash;&gt;-->
<!--&lt;!&ndash;                  fill="#C4C4C4" d="M-2-2h16v16H-2z"></path></mask><g mask="url(#woman_svg__a)" stroke="#F5588E"&ndash;&gt;-->
<!--&lt;!&ndash;                                                                      stroke-width="1.5" stroke-linecap="round"&ndash;&gt;-->
<!--&lt;!&ndash;                                                                      stroke-linejoin="round"><circle cx="7.2"&ndash;&gt;-->
<!--&lt;!&ndash;                                                                                                      cy="4.896"&ndash;&gt;-->
<!--&lt;!&ndash;                                                                                                      r="3.25"></circle><path&ndash;&gt;-->
<!--&lt;!&ndash;                  d="M1.617 10.511l3.115-3.115M1.904 7.396l2.828 2.829"></path></g></svg><span>23岁</span></span>&ndash;&gt;-->
<!--              &lt;!&ndash;              <el-image ></el-image>&ndash;&gt;-->
<!--&lt;!&ndash;              <p>{{userAge}}</p>&ndash;&gt;-->
<!--            </div>-->

          </div>
        </div>
      </el-row>

      <el-row>
        <!--      第二行四个视频-->
        <div v-for="(video, index) in videos_remain" :key="index" @click="clickvideo" class="video-item_remain">
          <router-link :to="`/videopage/${video.id}`">
            <div class="video-content">
              <div class="video-info">
                <video :src="video.src" controls width="285" height="480"></video>
                <p style="margin-left: 5px;font-size: 15px;color: lightgrey">这里是视频简介</p>
                <el-row style="margin-left: 5px;margin-top: 3px">
                  <p style="font-size: 14px;color: grey">@用户名</p>
                  <p style="margin-left: 20px;font-size: 14px;color: grey">· 发布时间</p>
                </el-row>
                <el-row style="margin-left: 5px;margin-top: 3px">
                  <p>点赞</p>
                  <p style="margin-left: 20px">评论</p>
                  <p style="margin-left: 20px">收藏</p>
                </el-row>
              </div>
            </div>
          </router-link>
        </div>
      </el-row>

    </div>
    <!--    <div class="video-grid">-->
    <!--      <div v-for="(video, index) in videos" :key="index" @click="toggleFullscreen" class="video-container">-->
    <!--        <video controls width="300" height="200">-->
    <!--          <source :src="video.src" :type="video.type">-->
    <!--        </video>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div id="static" class="common-container">-->
    <!--      <div class="banner lite">-->
    <!--        <section class="section">-->
    <!--          &lt;!&ndash; title &ndash;&gt;-->
    <!--          <div class="banner-title">-->
    <!--            <h1 class="banner-title-text">视觉可解释与人机交互平台</h1>-->
    <!--            <div class="alink-grounp alink-grounp-center">-->
    <!--              <el-button type="primary"-->
    <!--                         style="margin-left: 0px; width: 128px; height: 45px; letter-spacing: 1px; font-size: 18px; font-weight: 500;"-->
    <!--                         @click="handleClickJump('task')" plain>立即体验</el-button>-->
    <!--              <a href=""-->
    <!--                 target="_blank">-->
    <!--                <el-button type="success"-->
    <!--                           style="margin-left: 20px; width: 128px; height: 45px; letter-spacing: 1px; font-size: 18px; font-weight: 500;" plain>使用文档</el-button>-->
    <!--              </a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          &lt;!&ndash; banner &ndash;&gt;-->
    <!--&lt;!&ndash;          <div class="banner-main">&ndash;&gt;-->
    <!--            &lt;!&ndash; swiper &ndash;&gt;-->
    <!--            <div class="banner-main-swiper">-->
    <!--              <div class="swiper-container">-->
    <!--                <el-carousel height="350px" type="card">-->
    <!--                  <el-carousel-item>-->
    <!--                    <img src="./assets/dataset.jpg"-->
    <!--                         style="height:100%;width:100%;"-->
    <!--                         alt="上传数据集"-->
    <!--                         title="上传数据集" />-->
    <!--                  </el-carousel-item>-->
    <!--                  <el-carousel-item>-->
    <!--                    <img src="./assets/task.jpg"-->
    <!--                         style="height:100%;width:100%;"-->
    <!--                         alt="创建任务"-->
    <!--                         title="创建任务" />-->
    <!--                  </el-carousel-item>-->
    <!--                  <el-carousel-item>-->
    <!--                    <img src="./assets/train.jpg"-->
    <!--                         style="height:100%;width:100%;"-->
    <!--                         alt="训练"-->
    <!--                         title="训练" />-->
    <!--                  </el-carousel-item>-->
    <!--                  <el-carousel-item>-->
    <!--                    <img src="./assets/generate.jpg"-->
    <!--                         style="height:100%;width:100%;"-->
    <!--                         alt="本地部署"-->
    <!--                         title="本地部署" />-->
    <!--                  </el-carousel-item>-->
    <!--                </el-carousel>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--&lt;!&ndash;          </div>&ndash;&gt;-->
    <!--        </section>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div class="holly">-->
    <!--      <div class="section-title_container">-->
    <!--        <div class="section-title">数据选择式入口</div>-->
    <!--      </div>-->
    <!--      <div id="tree-container"></div>-->
    <!--    </div>-->
  </div>
</template>

<style scoped>
.video-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* 水平排列，四列 */
  /*border-radius: 10%;*/
  /*margin: 0px; !* 为了填充每个video-item之间的空间，-8px 是 margin 的负值 *!*/
}

.video-item_top {
  flex: 0 1 calc(25%); /* 四个一行，每个占 25% 的宽度，16px 是 margin 的值 */
  /*margin: 0px;*/
  border-radius: 10%;
}
.video-item_remain {
  flex: 0 1 calc(25%); /* 四个一行，每个占 25% 的宽度，16px 是 margin 的值 */
  /*margin: 0px;*/
  border-radius: 10%;
}

.video-info {
  /*position: absolute;*/
  /*top: 20px; !* 调整顶部距离 *!*/
  /*right: 20px; !* 调整右边距离 *!*/
  width: 285px; /* 调整矩形的宽度 */
  height: 560px; /* 调整矩形的高度 */
  background-color: #475669; /* 背景颜色 */
  border-radius: 8px; /* 圆角半径 */
  /*padding: 10px; !* 内边距，用于放置文本 *!*/
  margin-left: 20px;
  margin-bottom: 15px;
  /*color: #fff; !* 文本颜色 *!*/
  /*font-size: 12px; !* 文本大小 *!*/
}
.video-content {
  position: relative;
}

.user-info {
  /*position: absolute;*/
  /*top: 20px; !* 调整顶部距离 *!*/
  /*right: 20px; !* 调整右边距离 *!*/
  width: 280px; /* 调整矩形的宽度 */
  height: 120px; /* 调整矩形的高度 */
  background-color: #475669; /* 背景颜色 */
  border-radius: 8px; /* 圆角半径 */
  padding: 10px; /* 内边距，用于放置文本 */
  margin-left: 20px;
  color: #fff; /* 文本颜色 */
  font-size: 12px; /* 文本大小 */
}
.user-content {
  position: relative;
}
</style>
<script setup>

// import $ from 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js'
// import * as d3 from 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js';
import $ from 'jquery'
import * as d3 from 'd3';
import { reactive, onMounted, ref, onUnmounted } from "vue";
import { Female, Edit, Search, Share, Upload } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';

const router = useRouter()
import '@fortawesome/fontawesome-free/css/all.css'
const videos_top = [
  { id: 1, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', height: Math.floor(Math.random() * 180) + 300 },
  { id: 2, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', height: Math.floor(Math.random() * 180) + 300 },
  { id: 3, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', height: Math.floor(Math.random() * 180) + 300 },
  // 添加更多视频数据...
];
const videos_remain = [
  { id: 4, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', height: Math.floor(Math.random() * 180) + 300 },
  { id: 5, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', height: Math.floor(Math.random() * 180) + 300 },
  { id: 6, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', height: Math.floor(Math.random() * 180) + 300 },
  { id: 7, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', height: Math.floor(Math.random() * 180) + 300 },
  { id: 8, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', height: Math.floor(Math.random() * 180) + 300 },
  { id: 9, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', height: Math.floor(Math.random() * 180) + 300 },
  { id: 10, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', height: Math.floor(Math.random() * 180) + 300 },
  { id: 11, src: require('../../assets/WeChat_20231025161539.mp4'), type: 'video/mp4', height: Math.floor(Math.random() * 180) + 300 },
  // 添加更多视频数据...
];

const store = useStore();
const followNums = 10
const fanNums = 10
const likeNums = 10
const userId = 1011
const userAge = 23
const activeMenu = ref('/');
const clickvideo = (index) => {
  activeMenu.value = index;
  router.go(index);
};
var nodes;
var dragStarted;
var domNode;
const dialogVisible = ref(false);
const dialogVisible_interp = ref(false);
const dialogVisible_atenhoc = ref(false);
const dialogVisible_posthoc = ref(false);
const dialogVisible_local = ref(false);
const dialogVisible_global = ref(false);
const dialogVisible_attention = ref(false);
const dialogVisible_tree = ref(false);
const dialogVisible_intro_concept = ref(false);
const dialogVisible_intro_constituent = ref(false);
// dialogVisible_global

const activeTab = ref('cn')

function showDialog() {
  console.log("进来了")
  dialogVisible.value = true;
}
function showDialog_interp() {
  // console.log("进来了")
  dialogVisible_interp.value = true;
}
function showDialog_atenhoc() {
  // console.log("进来了")
  dialogVisible_atenhoc.value = true;
}
function showDialog_posthoc() {
  // console.log("进来了")
  dialogVisible_posthoc.value = true;
}
function showDialog_local() {
  // console.log("进来了")
  dialogVisible_local.value = true;
}
function showDialog_global() {
  // console.log("进来了")
  dialogVisible_global.value = true;
}
function showDialog_attention() {
  // console.log("进来了")
  dialogVisible_attention.value = true;
}
function showDialog_tree() {
  // console.log("进来了")
  dialogVisible_tree.value = true;
}
function showDialog_intro_concept() {
  // console.log("进来了")
  dialogVisible_intro_concept.value = true;
}
function showDialog_intro_Constituent() {
  // console.log("进来了")
  dialogVisible_intro_constituent.value = true;
}




onMounted(() => {
  var json =
      {
        "name": "视觉可解释与人机交互系统",
        "children": [{
          "name": "公开数据集任务",
          "children": [{
            "name": "归因方法",
            "size": 1616,
            "children": [{
              "name": "图像分类",
              "size": 1616,
              "children": [{
                "name": "CIFAR",
                "size": 1616,
              },{
                "name": "ImageNet",
                "size": 1027
              }]
            },{
              "name": "语义分割",
              "size": 1616,
              "children": [{
                "name": "COCO",
                "size": 1616,
              },{
                "name": "VOC",
                "size": 1027
              }]
            }]
          }, {
            "name": "概念响应与推理",
            "size": 1027,
            "children": [{
              "name": "概念响应分数",
              "size": 9354,
              "children": [{
                "name": "ImageNet+Concepts",
                "size": 9354
              }]
            },{
              "name": "原型神经树",
              "size": 9354,
              "children": [{
                "name": "CUB",
                "size": 9354
              },{
                "name": "CARS",
                "size": 9354
              }]
            }]
          }]
        }, {
          "name": "用户数据任务",
          "size": 9354,
          "children": [{
            "name": "归因方法",
            "size": 335,
            "children": [{
              "name": "视觉",
              "children": [{
                "name": "图像分类",
                "size": 335,
              },{
                "name": "语义分割",
                "size": 335,
              }]
            },{
              "name": "跨模态",
              "children": [{
                "name": "视觉问答",
                "size": 335,
              }]
            }]
          }]
        }]
      };

  var treeData = json;
  var totalNodes = 0;
  var maxLabelLength = 0;
// variables for drag/drop
  var selectedNode = null;
  var draggingNode = null;
// panning variables
  var panSpeed = 200;
  var panBoundary = 20; // Within 20px from edges will pan when dragging.
// Misc. variables
  var i = 0;
  var duration = 750;
  var root;

// size of the diagram
  var viewerWidth = $(document).height();
  var viewerHeight = $(document).width();

  var tree = d3.layout.tree()
      .size([viewerHeight, viewerWidth]);

// define a d3 diagonal projection for use by the node paths later on.
  var diagonal = d3.svg.diagonal()
      .projection(function(d) {
        return [d.y, d.x];
      });

// A recursive helper function for performing some setup by walking through all nodes

  function visit(parent, visitFn, childrenFn) {
    if (!parent) return;

    visitFn(parent);

    var children = childrenFn(parent);
    if (children) {
      var count = children.length;
      for (var i = 0; i < count; i++) {
        visit(children[i], visitFn, childrenFn);
      }
    }
  }

// Call visit function to establish maxLabelLength
  visit(treeData, function(d) {
    totalNodes++;
    maxLabelLength = Math.max(d.name.length, maxLabelLength);

  }, function(d) {
    return d.children && d.children.length > 0 ? d.children : null;
  });


// sort the tree according to the node names

  function sortTree() {
    console.log("执行了此函数")
    console.log(json)
    tree.sort(function(a, b) {
      return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
    });
  }
// Sort the tree initially incase the JSON isn't in a sorted order.
  sortTree();

// TODO: Pan function, can be better implemented.

  function pan(domNode, direction) {
    var speed = panSpeed;
    if (panTimer) {
      clearTimeout(panTimer);
      var translateCoords = d3.transform(svgGroup.attr("transform"));
      if (direction == 'left' || direction == 'right') {
        var translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
        var translateY = translateCoords.translate[1];
      } else if (direction == 'up' || direction == 'down') {
        translateX = translateCoords.translate[0];
        translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
      }
      var scaleX = translateCoords.scale[0];
      var scaleY = translateCoords.scale[1];
      var scale = zoomListener.scale();
      svgGroup.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
      d3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
      zoomListener.scale(zoomListener.scale());
      zoomListener.translate([translateX, translateY]);
      var panTimer = setTimeout(function() {
        pan(domNode, speed, direction);
      }, 50);
    }
  }

// Define the zoom function for the zoomable tree

  function zoom() {
    svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
  }


// define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
  const zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

  function initiateDrag(d, domNode) {
    draggingNode = d;
    d3.select(domNode).select('.ghostCircle').attr('pointer-events', 'none');
    d3.selectAll('.ghostCircle').attr('class', 'ghostCircle show');
    d3.select(domNode).attr('class', 'node activeDrag');

    svgGroup.selectAll("g.node").sort(function(a, b) { // select the parent and sort the path's
      if (a.id != draggingNode.id) return 1; // a is not the hovered element, send "a" to the back
      else return -1; // a is the hovered element, bring "a" to the front
    });
    // if nodes has children, remove the links and nodes
    if (nodes.length > 1) {
      // remove link paths
      var links = tree.links(nodes);
      var nodePaths = svgGroup.selectAll("path.link")
          .data(links, function(d) {
            return d.target.id;
          }).remove();
      // remove child nodes
      var nodesExit = svgGroup.selectAll("g.node")
          .data(nodes, function(d) {
            return d.id;
          }).filter(function(d, i) {
            if (d.id == draggingNode.id) {
              return false;
            }
            return true;
          }).remove();
    }

    // remove parent link
    var parentLink = tree.links(tree.nodes(draggingNode.parent));
    svgGroup.selectAll('path.link').filter(function(d, i) {
      if (d.target.id == draggingNode.id) {
        return true;
      }
      return false;
    }).remove();

    dragStarted = null;
  }

  // 选择tree-container元素
  const container = d3.select('#tree-container');

// 检查是否存在子元素，如果有则删除
  if (!container.empty()) {
    container.select('svg').remove();
  }

// define the baseSvg, attaching a class for styling and the zoomListener
  var baseSvg = d3.select("#tree-container").append("svg")
      .attr("width", 1250)
      .attr("height", viewerHeight)
      .attr("class", "overlay")
  // .call(zoomListener)
//
//   // 添加提示信息
//   baseSvg.append("text")
//       .attr("x", 10)
//       .attr("y", 20)
//       .text("这是一棵此系统所包含可解释性方法的分类树")
//       .attr("fill", "#333")
//       .attr("font-size", "14px")
//       .attr("font-weight", "bold");
//
//   baseSvg.append("text")
//       .attr("x", 10)
//       .attr("y", 45)
//       .text("Tips:")
//       .attr("fill", "#333")
//       .attr("font-size", "12px")
//       .attr("font-weight", "bold");
//
//   baseSvg.append("text")
//       .attr("x", 20)
//       .attr("y", 65)
//       .text("1.拖动屏幕可以移动树")
//       .attr("fill", "#333")
//       .attr("font-size", "12px");
//
//   baseSvg.append("text")
//       .attr("x", 20)
//       .attr("y", 85)
//       .text("2.鼠标滚轮转动可以改变树的大小")
//       .attr("fill", "#333")
//       .attr("font-size", "12px");
//
//   baseSvg.append("text")
//       .attr("x", 20)
//       .attr("y", 105)
//       .text("3.左键单击节点可以收缩和扩张节点")
//       .attr("fill", "#333")
//       .attr("font-size", "12px");
//
//   baseSvg.append("text")
//       .attr("x", 20)
//       .attr("y", 125)
//       .text("4.右键单击节点可以查看详细介绍")
//       .attr("fill", "#333")
//       .attr("font-size", "12px");
//
//   baseSvg.append("text")
//       .attr("x", 20)
//       .attr("y", 145)
//       .text("5.拖动节点可以试图将方法分离出树，但是这不会成功")
//       .attr("fill", "#333")
//       .attr("font-size", "12px");
//
// // 添加按钮
//   var tooltipButton = baseSvg.append('g')
//       .attr('class', 'button-group')
//       .attr('transform', 'translate(10,180)');
//
//   tooltipButton.append('rect')
//       .attr('class', 'button-rect')
//       .attr('width', 150)
//       .attr('height', 30)
//       .attr('rx', 15)
//       .attr('ry', 15)
//       .attr('fill', '#409EFF')
//       .on('click', function() {
//         window.open('https://example.com/');
//       });
//
//   tooltipButton.append('text')
//       .attr('class', 'button-text')
//       .attr('x', 75)
//       .attr('y', 20)
//       .attr('text-anchor', 'middle')
//       .text('点击查看我们对于可解释性的评估标准')
//       .attr('fill', '#FFFFFF')
//       .attr('alignment-baseline', 'central');



// .attr("style", "background: url('@/assets/background.jpg');background-size: cover;")

// console.log("querySelector id: ", document.querySelector('#tree-container'));
// console.log("querySelector id2: ", document.querySelector('tree-container'));
// console.log("id: ", document.getElementById("tree-container"))
// console.log("d3.select: ", d3.select("#tree-container"))
// console.log("viewerWidth: ", viewerWidth)
// console.log("viewerHeight: ", viewerHeight)
// console.log("zoomListener: ", zoomListener)
  console.log("baseSvg: ", baseSvg)


// Define the drag listeners for drag/drop behaviour of nodes.
  var dragListener = d3.behavior.drag()
      .on("dragstart", function(d) {
        if (d == root) {
          return;
        }
        dragStarted = true;
        nodes = tree.nodes(d);
        d3.event.sourceEvent.stopPropagation();
        // it's important that we suppress the mouseover event on the node being dragged. Otherwise it will absorb the mouseover event and the underlying node will not detect it d3.select(this).attr('pointer-events', 'none');
      })
      .on("drag", function(d) {
        if (d == root) {
          return;
        }
        if (dragStarted) {
          domNode = this;
          initiateDrag(d, domNode);
        }

        // get coords of mouseEvent relative to svg container to allow for panning
        var relCoords = d3.mouse($('svg').get(0));
        if (relCoords[0] < panBoundary) {
          var panTimer = true;
          pan(this, 'left');
        } else if (relCoords[0] > ($('svg').width() - panBoundary)) {

          panTimer = true;
          pan(this, 'right');
        } else if (relCoords[1] < panBoundary) {
          panTimer = true;
          pan(this, 'up');
        } else if (relCoords[1] > ($('svg').height() - panBoundary)) {
          panTimer = true;
          pan(this, 'down');
        } else {
          try {
            clearTimeout(panTimer);
          } catch (e) {

          }
        }

        d.x0 += d3.event.dy;
        d.y0 += d3.event.dx;
        var node = d3.select(this);
        node.attr("transform", "translate(" + d.y0 + "," + d.x0 + ")");
        updateTempConnector();
      }).on("dragend", function(d) {
        if (d == root) {
          return;
        }
        domNode = this;
        if (selectedNode) {
          // now remove the element from the parent, and insert it into the new elements children
          var index = draggingNode.parent.children.indexOf(draggingNode);
          if (index > -1) {
            draggingNode.parent.children.splice(index, 1);
          }
          if (typeof selectedNode.children !== 'undefined' || typeof selectedNode._children !== 'undefined') {
            if (typeof selectedNode.children !== 'undefined') {
              selectedNode.children.push(draggingNode);
            } else {
              selectedNode._children.push(draggingNode);
            }
          } else {
            selectedNode.children = [];
            selectedNode.children.push(draggingNode);
          }
          // Make sure that the node being added to is expanded so user can see added node is correctly moved
          expand(selectedNode);
          sortTree();
          endDrag();
        } else {
          endDrag();
        }
      });

  function endDrag() {
    selectedNode = null;
    d3.selectAll('.ghostCircle').attr('class', 'ghostCircle');
    d3.select(domNode).attr('class', 'node');
    // now restore the mouseover event or we won't be able to drag a 2nd time
    d3.select(domNode).select('.ghostCircle').attr('pointer-events', '');
    updateTempConnector();
    if (draggingNode !== null) {
      update(root);
      centerNode(draggingNode);
      draggingNode = null;
    }
  }

// Helper functions for collapsing and expanding nodes.

  function collapse(d) {
    if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
    }
  }

  function expand(d) {
    if (d._children) {
      d.children = d._children;
      d.children.forEach(expand);
      d._children = null;
    }
  }

  var overCircle = function(d) {
    selectedNode = d;
    updateTempConnector();
  };
  var outCircle = function(d) {
    selectedNode = null;
    updateTempConnector();
  };

// Function to update the temporary connector indicating dragging affiliation
  var updateTempConnector = function() {
    var data = [];
    if (draggingNode !== null && selectedNode !== null) {
      // have to flip the source coordinates since we did this for the existing connectors on the original tree
      data = [{
        source: {
          x: selectedNode.y0,
          y: selectedNode.x0
        },
        target: {
          x: draggingNode.y0,
          y: draggingNode.x0
        }
      }];
    }
    var link = svgGroup.selectAll(".templink").data(data);

    link.enter().append("path")
        .attr("class", "templink")
        .attr("d", d3.svg.diagonal())
        .attr('pointer-events', 'none');

    link.attr("d", d3.svg.diagonal());

    link.exit().remove();
  };

// Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.

  function centerNode(source) {
    var scale = zoomListener.scale();
    var x = -source.y0;
    var y = -source.x0;
    x = x * scale + viewerHeight / 40;
    y = y * scale + viewerHeight / 2;
    d3.select('g').transition()
        .duration(duration)
        .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
    zoomListener.scale(scale);
    zoomListener.translate([x, y]);
  }

// Toggle children function

  function toggleChildren(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else if (d._children) {
      d.children = d._children;
      d._children = null;
    }
    return d;
  }
/////////////////////////////////////////////////
///////////////// IMAGE DEFS ////////////////////
/////////////////////////////////////////////////

  // d3.select('svg').append('defs').append("pattern")
  baseSvg.append('defs').append("pattern")
      .attr("id", "img1")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/tool2.jpg")
      .attr("x", -10)
      .attr("y", -14)
      .attr("width", 60)
      .attr("height", 62);

  // d3.select('svg').append('defs').append("pattern")
  baseSvg.append('defs').append("pattern")
      .attr("id", "segmetation")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/segmetation.png")
      .attr("x", -10)
      .attr("y", -14)
      .attr("width", 60)
      .attr("height", 60);

  baseSvg.append('defs').append("pattern")
      .attr("id", "modal")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/modal.jpg")
      .attr("x", -10)
      .attr("y", -21)
      .attr("width", 60)
      .attr("height", 80);

  baseSvg.append('defs').append("pattern")
      .attr("id", "vqa")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/vqa2.png")
      .attr("x", -10)
      .attr("y", -12)
      .attr("width", 60)
      .attr("height", 62);

  baseSvg.append('defs').append("pattern")
      .attr("id", "tcav")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/tcav.jpg")
      .attr("x", -12)
      .attr("y", -3)
      .attr("width", 60)
      .attr("height",50);

  baseSvg.append('defs').append("pattern")
      .attr("id", "tree")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/tree.jpg")
      .attr("x", 0)
      .attr("y", -8)
      .attr("width", 60)
      .attr("height",50);

  baseSvg.append('defs').append("pattern")
      .attr("id", "zigzagged")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/zigzagged.jpg")
      .attr("x", -3)
      .attr("y", 0)
      .attr("width", 60)
      .attr("height",60);

  baseSvg.append('defs').append("pattern")
      .attr("id", "cub")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/cub.jpg")
      .attr("x", -15)
      .attr("y", -10)
      .attr("width", 80)
      .attr("height",60);

  baseSvg.append('defs').append("pattern")
      .attr("id", "cars")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/CARS22.jpg")
      .attr("x", -20)
      .attr("y", -10)
      .attr("width", 60)
      .attr("height",60);

  baseSvg.append('defs').append("pattern")
      .attr("id", "voc")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/voc.jpg")
      .attr("x", -10)
      .attr("y", -10)
      .attr("width", 60)
      .attr("height",60);

  baseSvg.append('defs').append("pattern")
      .attr("id", "coco")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/coco.jpg")
      .attr("x", -10)
      .attr("y", -10)
      .attr("width", 60)
      .attr("height",60);

  baseSvg.append('defs').append("pattern")
      .attr("id", "imgnet")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/imgnet.jpg")
      .attr("x", -10)
      .attr("y", -5)
      .attr("width", 60)
      .attr("height",60);

  baseSvg.append('defs').append("pattern")
      .attr("id", "cifar")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/cifar.jpg")
      .attr("x", 0)
      .attr("y", -5)
      .attr("width", 60)
      .attr("height",60);

  baseSvg.append('defs').append("pattern")
      .attr("id", "classification")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/classification.jpg")
      .attr("x", 0)
      .attr("y", -10)
      .attr("width", 60)
      .attr("height", 60);

  baseSvg.append('defs').append("pattern")
      .attr("id", "vision")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/vision.jpg")
      .attr("x", -10)
      .attr("y", -10)
      .attr("width", 60)
      .attr("height", 60);

  // d3.select('svg').append('defs').append("pattern")
  baseSvg.append('defs').append("pattern")
      .attr("id", "saliency")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/saliency.jpg")
      .attr("x", -10)
      .attr("y", -5)
      .attr("width", 60)
      .attr("height", 64);

  // d3.select('svg').append('defs').append("pattern")
  baseSvg.append('defs').append("pattern")
      .attr("id", "zebra")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/zebra.jpg")
      .attr("x", -10)
      .attr("y", -10)
      .attr("width", 60)
      .attr("height", 60);

  // d3.select('svg').append('defs').append("pattern")
  baseSvg.append('defs').append("pattern")
      .attr("id", "global")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/global.jpg")
      .attr("x", -10)
      .attr("y", -10)
      .attr("width", 60)
      .attr("height", 60);

  baseSvg.append('defs').append("pattern")
      .attr("id", "users")
      .attr("patternUnits", "objectBoundingBox")
      .attr("width", "25")
      .attr("height", "25")
      .append("image")
      .attr("xlink:href", "http://10.214.242.155:7667/img/background/users.jpg")
      .attr("x", 0)
      .attr("y", -10)
      .attr("width", 60)
      .attr("height", 60);

  console.log("d3.select('svg'):",d3.select('svg'))

  // d3.select('svg').append('defs')
  //     .append("pattern")
  //     .attr("id", "img1")
  //     .attr("patternUnits", "userSpaceOnUse") // 设置图案单位为用户坐标系统
  //     .attr("width", "100%") // 相对于用户坐标系，定义图像相对宽度为100%
  //     .attr("height", "100%") // 相对于用户坐标系，定义图像相对高度为100%
  //     .append("image")
  //     .attr("xlink:href", "http://10.214.242.155:7667/img/background/tool.jpg")
  //     .attr("x", 0)
  //     .attr("y", 0)
  //     .attr("width", "100%") // 图片元素实际宽度为100%用户坐标系统的宽度
  //     .attr("height", "100%"); // 图片元素实际高度为100%用户坐标系统的高度




// Toggle children on click.
  // click suppressed
  // var clicked = false;
  // var clickTimeout;

  // function click(d) {
  //   if (!clicked) {
  //     clicked = true;
  //
  //     // 使用setTiemout来等待300ms
  //     clickTimeout = setTimeout(function() {
  //       // 单击操作逻辑
  //       console.log("Single Click");
  //
  //       // 将clicked重置为false
  //       clicked = false;
  //     }, 300); // 等待300毫秒
  //
  //   } else {
  //     // 取消定时器
  //     clearTimeout(clickTimeout);
  //     clicked = false;
  //
  //     // 双击操作逻辑
  //     console.log("Double Click");
  //   }
  // }


  function click(d) {
    d = toggleChildren(d);
    update(d);
    centerNode(d);
    // console.log("测试", d);
    // d3.event.stopPropagation();
  }

  // function contextmenu(d) {
  //   // event.preventDefault();
  //   console.log("d.name", d.name);
  //   if(d.name==="COCO"){
  //     this.$router.push('/coco');
  //   }
  // }

  const contextmenu = (d) => {
    console.log("d.name", d.name);
    if(d.name==="COCO"){
      router.push({ name: 'coco' })
    }else if(d.name==="VOC"){
      router.push({ name: 'voc' })
    }else if(d.name==="视觉问答"){
      router.push({ name: 'UserQuery' })
    }else if(d.name==="视觉问答"){
      router.push({ name: 'UserQuery' })
    }else if(d.name==="ImageNet"){
      router.push({ name: 'imagenet' })
    }else if(d.name==="CIFAR"){
      router.push({ name: 'cifar' })
    }else if(d.name==="ImageNet+Concepts"){
      router.push({ name: 'tcav' })
    }else if(d.name==="CUB"){
      router.push({ name: 'cub' })
    }else if(d.name==="CARS"){
      router.push({ name: 'cars' })
    }else if(d.name==="语义分割" && !d.children){
      console.log("d.children", d.children);
      router.push({ name: 'UserImgsegmentation' })
    }else if(d.name==="图像分类" && !d.children){
      router.push({ name: 'UserImgclassification' })
    }
    // UserImgsegmentation
    // console.log("d._children", d._children);
    // router.push({ name: 'coco' })
    // this.$router.push('/coco');
  }

  function update(source) {
    // Compute the new height, function counts total children of root node and sets tree height accordingly.
    // This prevents the layout looking squashed when new nodes are made visible or looking sparse when nodes are removed
    // This makes the layout more consistent.
    var levelWidth = [1];
    var childCount = function(level, n) {

      if (n.children && n.children.length > 0) {
        if (levelWidth.length <= level + 1) levelWidth.push(0);

        levelWidth[level + 1] += n.children.length;
        n.children.forEach(function(d) {
          childCount(level + 1, d);
        });
      }
    };
    childCount(0, root);
    var newHeight = d3.max(levelWidth) * 105; // 25 pixels per line  /*<><><><><><><><><><><><><><><><><><><><><><><>THIS IS DETERMINING SPACING */
    tree = tree.size([newHeight, viewerWidth]);

    // Compute the new tree layout.
    nodes = tree.nodes(root).reverse();
    var links = tree.links(nodes);

    // Set widths between levels based on maxLabelLength.
    nodes.forEach(function(d) {
      d.y = (d.depth * (maxLabelLength * 10)); //maxLabelLength * 10px
      // alternatively to keep a fixed scale one can set a fixed depth per level
      // Normalize for fixed-depth by commenting out below line
      // d.y = (d.depth * 500); //500px per level.
    });

    // Update the nodes…
    var node = svgGroup.selectAll("g.node")
        .data(nodes, function(d) {
          return d.id || (d.id = ++i);
        });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
        // .call(dragListener)
        .attr("class", "node")
        .attr("transform", function(d) {
          return "translate(" + source.y0 + "," + source.x0 + ")";
        })
        .on('click', contextmenu)
    // .on('contextmenu', contextmenu);
    // .on('dblclick', dblclick);

    // console.log("nodeEnter",nodeEnter)

    nodeEnter.append("circle")
        .attr('class', 'nodeCircle')
        .attr("r", 0)
        .style("stroke", "black")
        .style("stroke-width", "1.5px")
        .style("fill", function(d) {
          return d._children ? "lightsteelblue" : "#fff";
        });

    nodeEnter.append("circle")
        .attr('class', 'nodeCircleBorder')
        .attr("r", 0)
        .style("stroke", "rgba(121, 80, 173, 0.5)")
        .style("stroke-width", function(d) {
          return d.name==="视觉问答" || d.name==="CUB" || d.name==="CARS" ? "6px" : "0";
        })
        .style("fill", "none")
        .style("pointer-events", "none");

    // nodeEnter.append("circle")
    //     .attr('class', 'nodeCircleOuter') // 为外圆添加一个类名
    //     .attr("r", 0)
    //     .style("stroke", "#7950AD") // 外圆颜色为#7950AD
    //     .style("stroke-width", "2px") // 设置外圆线宽为2px
    //     .style("fill", "none"); // 外圆不填充颜色

    nodeEnter.append("text")
        .attr("x", function(d) {
          return d.children || d._children ? -10 : 10;
        })
        .attr("dy", ".35em")
        .attr('class', 'nodeText')
        .attr("text-anchor", function(d) {
          return d.children || d._children ? "end" : "start";
        })
        .attr("transform", function(d) {
          return d.children || d._children ? "rotate(-90)" : "rotate(-30)";
        })
        // .attr("transform", "rotate(-90)")
        .text(function(d) {
          return d.name;
        })
        .style("fill-opacity", 0)
        .style("font-size", "16px")
        .style("fill", "black");
    // .style("color", "black");

    // phantom node to give us mouseover in a radius around it
    nodeEnter.append("circle")
        .attr('class', 'ghostCircle')
        .attr("r", 30)
        .attr("opacity", 0.2) // change this to zero to hide the target area
        .style("fill", "red")
        .attr('pointer-events', 'mouseover')
        .on("mouseover", function(node) {
          overCircle(node);
        })
        .on("mouseout", function(node) {
          outCircle(node);
        });

    // Update the text to reflect whether node has children or not.
    node.select('text')
        .attr("x", function(d) {
          console.log()
          return d.children || d._children ? d.name.length*10 : 30;
        })
        .attr("y", function(d) {
          return d.children || d._children ? -35 : 0;
        })
        .attr("text-anchor", function(d) {
          return d.children || d._children ? "end" : "start";
        })
        .text(function(d) {
          return d.name;
        });

    // console.log("node.select(\"circle.nodeCircle\")",node.select("circle.nodeCircle"))
    // Change the circle fill depending on whether it has children and is collapsed
    console.log("!!!", node.select("circle.nodeCircleBorder"))
    node.select("circle.nodeCircleBorder").attr("r", 24)

    node.select("circle.nodeCircle")
        .attr("r", 20.5) /*<><><><><><><><><><><><><><><><><><><><><><><>THIS IS DETERMINING RADIUS */
        .style("fill", function(d) {
          console.log("d:",d)
          // console.log("d._children:",d._children)
          // console.log("d:",d)


          if(d.name==="用户数据任务"){
            return d._children ? "lightsteelblue" : "url(#users)";
          }else if(d.name==="公开数据集任务"){
            return d._children ? "lightsteelblue" : "url(#global)";
          }else if(d.name==="概念响应与推理"){
            return d._children ? "lightsteelblue" : "url(#zebra)";
          }else if(d.name==="归因方法"){
            return d._children ? "lightsteelblue" : "url(#saliency)";
          }else if(d.name==="语义分割"){
            return d._children ? "lightsteelblue" : "url(#segmetation)";
          }else if(d.name==="图像分类"){
            return d._children ? "lightsteelblue" : "url(#classification)";
          }else if(d.name==="视觉"){
            return d._children ? "lightsteelblue" : "url(#vision)";
          }else if(d.name==="视觉问答"){
            return d._children ? "lightsteelblue" : "url(#vqa)";
          }else if(d.name==="跨模态"){
            return d._children ? "lightsteelblue" : "url(#modal)";
          }else if(d.name==="概念响应分数"){
            return d._children ? "lightsteelblue" : "url(#tcav)";
          }else if(d.name==="原型神经树"){
            return d._children ? "lightsteelblue" : "url(#tree)";
          }else if(d.name==="ImageNet+Concepts"){
            return d._children ? "lightsteelblue" : "url(#zigzagged)";
          }else if(d.name==="CUB"){
            return d._children ? "lightsteelblue" : "url(#cub)";
          }else if(d.name==="CARS"){
            return d._children ? "lightsteelblue" : "url(#cars)";
          }else if(d.name==="VOC"){
            return d._children ? "lightsteelblue" : "url(#voc)";
          }else if(d.name==="ImageNet"){
            return d._children ? "lightsteelblue" : "url(#imgnet)";
          }else if(d.name==="COCO"){
            return d._children ? "lightsteelblue" : "url(#coco)";
          }else if(d.name==="CIFAR"){
            return d._children ? "lightsteelblue" : "url(#cifar)";
          }else{
            return d._children ? "lightsteelblue" : "url(#img1)";
          }
        });



    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function(d) {
          return "translate(" + d.y + "," + d.x + ")";
        });

    // Fade the text in
    nodeUpdate.select("text")
        .style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function(d) {
          return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();

    nodeExit.select("circle")
        .attr("r", 0);

    nodeExit.select("text")
        .style("fill-opacity", 0);

    // Update the links…
    var link = svgGroup.selectAll("path.link")
        .data(links, function(d) {
          return d.target.id;
        });

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function(d) {
          var o = {
            x: source.x0,
            y: source.y0
          };
          return diagonal({
            source: o,
            target: o
          });
        });

    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function(d) {
          var o = {
            x: source.x,
            y: source.y
          };
          return diagonal({
            source: o,
            target: o
          });
        })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function(d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

// Append a group which holds all nodes and which the zoom Listener can act upon.
  var svgGroup = baseSvg.append("g");

// Define the root
  root = treeData;
  root.x0 = viewerHeight / 2;
  root.y0 = 0;

// Layout the tree initially and center on the root node.
  update(root);
  centerNode(root);

  console.log("querySelector id: ", document.querySelector('#tree-container'));
  console.log("querySelector id2: ", document.querySelector('tree-container'));

  // onUnmounted(() => {
  //   // 组件卸载时的逻辑
  //   baseSvg.selectAll("*").remove()
  // });
});

// export default {
//   name: 'Algorithm',
//   // ...
// }
// require('@/pages/algorithmIntro/script.js')
// export default {
//
//   methods: {
//
//   },
//   mounted() {
//     const s = document.createElement('script');
//     s.type = 'module';
//     s.id = 'js1';
//     s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js';
//     document.body.appendChild(s);
//     const s2 = document.createElement('script');
//     s2.type = 'module';
//     s2.id = 'js2';
//     s2.src = 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js';
//     document.body.appendChild(s2);
//     // const s3 = document.createElement('script');
//     // s3.type = 'module';
//     // s3.id = 'js3';
//     // s3.src = './src/pages/algorithmIntro/script.js';
//     // document.body.appendChild(s3);
//     // console.log(s)
//   },
//   destroyed() {
//     let s = document.getElementById("js1")
//     s.remove()
//     let s2 = document.getElementById("js2")
//     s2.remove()
//     // let s3 = document.getElementById("js3")
//     // s3.remove()
//   }
// }

// export default {
//   mounted() {
//     const script = document.createElement('script');
//     script.src = '/assets/script.js';
//     document.body.appendChild(script);
//   },
//   beforeDestroy() {
//     const scripts = document.querySelectorAll('script[src="/assets/script.js"]');
//     scripts.forEach((script) => {
//       document.body.removeChild(script);
//     });
//   },
// };

// onMounted(() => {
//   console.log("querySelector id: ", document.querySelector('#tree-container'));
//   console.log("querySelector id2: ", document.querySelector('tree-container'));
// });
</script>

<style scoped>
@import "./style.css";
/*@import "./all.css";*/

.holly-main{
}
#tree-container {
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  /*width: 1867px;*/
  /*height: 1863px;*/
  /*overflow-x: visible;*/
  /*overflow-y: visible;*/
  /*width: 100%;*/
}
/*#tree-container svg{*/
/*  width: 1000px;*/
/*}*/
.tree-wrapper {
  position: relative;
}

.intro {
  position: absolute;
  top: 10%;
  left: 5%;
  /*color: white;*/
  /*transform-origin: top right;*/
  /*transform: rotate(-90deg);*/
}
/*.text-component span {*/
/*  display: inline-block;*/
/*  transform-origin: center;*/
/*  transform: rotate(90deg);*/
/*}*/
.holly{
  /*background-image: url('http://10.214.242.155:7667/img/background/algorithm2.jpg');*/
  background-color: white;
  /*background-size: contain;*/
  overflow: visible;
  /*position: relative;*/
  /*background-position: center;*/
}
.rating {
  /*font-size: 18px;*/
  text-align: center;
}

.row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
}
.bd-footer {
  text-align: left;
  background: #f7f7f7;
}
.bd-footer a {
  font-weight: 600;
  color: #495057;
}
.bd-footer-links li {
  display: inline-block;
}
.bd-footer-links {
  padding-inline-start: 0px;
}
.text-muted {
  color: #6c757d !important;
}

.banner.lite {
  /*background-image: linear-gradient(transparent, white 100%),*/
  /*  url('./assets/head.jpg');*/
  /* Center and scale the image nicely */
  background-image: linear-gradient(transparent, white 100%),
  url('./assets/head.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 60px;
  padding-bottom: 80px;
}
.banner.lite .banner-title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 45px;
}
.banner.lite .banner-title-text {
  margin: 0;
  font-size: 42px;
  letter-spacing: 3px;
  line-height: 1.5;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  color: #c6c2d3;
  font-weight: 350;
}
.banner.lite .banner-main {
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 350px;
  -webkit-box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
}
.banner.lite .banner-main-nav {
  background: #f8f9fb no-repeat bottom/100%;
  background-position: 0 3px;
  width: 300px;
  padding: 42px 40px 40px;
}
.banner.lite .banner-main-nav_title {
  font-size: 20px;
  letter-spacing: 4px;
  line-height: 32px;
  margin-bottom: 30px;
  font-weight: 500;
}
.banner.lite .banner-main-nav > ul > li {
  cursor: pointer;
  margin-bottom: 28px;
  position: relative;
}
.banner.lite .banner-main-nav > ul > li,
.banner.lite .banner-main-nav > ul > li .banner-main-nav_item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.banner.lite .banner-main-nav > ul > li .banner-main-nav_item {
  font-size: 16px;
  line-height: 22px;
  vertical-align: middle;
}
.banner.lite .banner-main-nav > ul > li .banner-main-nav_item:hover {
  color: #036fe2;
}
.banner.lite .banner-main-nav > ul > li .icon {
  font-size: 16px;
  margin-left: 8px;
}
.banner.lite .banner-main-nav > ul > li .img-icon-wrap {
  margin-left: 8px;
  overflow: hidden;
  height: 22px;
  width: 22px;
}
.banner.lite .banner-main-nav > ul > li .img-icon {
  position: relative;
  left: -80px;
  height: 22px;
  width: 22px;
  /*-webkit-filter: drop-shadow(#000 80px 0);*/
  /*filter: drop-shadow(#000 80px 0);*/
}
.banner.lite .banner-main-nav > ul > li:before {
  content: '';
  display: block;
  height: 6px;
  width: 6px;
  background: #d8d8d8;
  border-radius: 50%;
  margin-right: 10px;
}
.banner.lite .banner-main-nav > ul > li:after {
  content: '';
  display: block;
  width: 0;
  height: 42px;
  border: 1px dashed #d8d8d8;
  position: absolute;
  left: 2px;
  top: 16px;
}
.banner.lite .banner-main-nav > ul > li:last-child:after {
  display: none;
}
.banner.lite .banner-main-swiper {
  width: 100%;
  height: 350px;
  /*overflow: hidden;*/
  position: relative;
}
.banner.lite .slide {
  width: 900px;
  height: 350px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}
.female {
  transform: rotate(25deg); /* 默认旋转15度 */
}

.banner.lite .lite-swiper-pagination {
  position: absolute;
  bottom: 86px;
  text-align: center;
  width: 100%;
  height: 19px;
  z-index: 10;
}
.modeltype.lite {
  font-size: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  /* justify-content: space-between; */
}
.modeltype.lite .modeltype-item {
  display: block;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  /* flex-grow: 1; */
  width: 382px;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.modeltype.lite .modeltype-item:hover {
  border: 1px solid #036fe2;
  -webkit-box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
}

.modeltype.lite .modeltype-item:hover .modeltype-title {
  color: #503ef3;
}
/* .modeltype.lite .modeltype-item:last-child {
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  margin-bottom: 0;
} */
.modeltype.lite .modeltype-icon {
  width: 320px;
  margin-bottom: 24px;
}
.modeltype.lite .modeltype-title {
  display: block;
  font-size: 20px;
  line-height: 30px;
  padding-bottom: 20px;
  margin-bottom: 24px;
  border-bottom: 1px solid #e1e1e1;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.modeltype.lite .modeltype-title > i {
  font-size: 12px;
  padding-left: 10px;
}
.modeltype.lite .modeltype-title:hover {
  color: #503ef3;
}
.modeltype.lite .modeltype-desc {
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  font-size: 14px;
  color: #666;
  line-height: 24px;
}
.modeltype.lite .modeltype-type {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 10px;
  /* margin-right: 10px; */
  overflow: hidden;
  color: #000;
}
.modeltype.lite .modeltype-type > span {
  display: inline-block;
  height: 24px;
  padding: 0 12px;
  margin-right: 10px;
  margin-bottom: 6px;
  background: #f5f5f5;
}

:root {
  --swiper-theme-color: #007aff;
}
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.swiper-container /deep/ .el-carousel__button {
  background-color: #0c24ad;
}

.footer {
  vertical-align: top;
  background-color: rgba(3, 3, 122, 0.8);
  /* padding-right: 220px; */
}
.footer .footer_cover {
  width: 100%;
  height: 300px;
  margin: 0 auto;
}
.footer .ai_items_img {
  padding-top: 158px;
  color: #ffffff;

  font-size: 14px;
  width: 138px;
  text-align: center;
  margin-top: 80px;
  margin-left: 200px;
  background-image: url('./assets/QRcode.png');
  /* background-size: 200px 200px; */
  background-repeat: no-repeat;
}
.footer .ai_items_class {
  width: 259px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  display: block;
  margin: 0 auto;
}
.footer .ai_items_class .title {
  font-size: 18px;
  margin: 20px 0 20px;
}
.footer .ai_items_class .desc {
  font-size: 14px;
  line-height: 20px;
  opacity: 0.66;
  max-width: 302px;
}
.footer .ai_items_class.logo {
  width: 405px;
}
.footer .ai_items_class.resource {
  width: 158px;
}
.footer .ai_items_class.market {
  width: 170px;
}
.footer .ai_items {
  font-size: 14px;
  color: #fff;
  opacity: 0.66;
  line-height: 36px;
  cursor: pointer;
}
.footer .ai_items.qq {
  cursor: default;
  white-space: nowrap;
}
.footer .ai_items.qq:hover {
  color: #fff;
}
.footer .ai_items:hover {
  opacity: 1;
  color: #036fe2;
  /* #3B5998 */
}
.footer .ai_title {
  margin: 48px 0 27px;
  text-align: center;
  color: #fff;
  font-size: 36px;
  opacity: 1;
  cursor: default;
}
.footer .footer_copyright {
  line-height: 50px;
  font-size: 14px;
}

body,
html {
  height: 100%;
  width: 100%;
  /* min-width: 1200px; */
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
  sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*,
body,
html {
  padding: 0;
  margin: 0;
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
a {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
img {
  width: 100%;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.modal_section .section-title_container {
  padding-bottom: 30px;
}
.section {
  margin: 0 auto;
  font-size: 0;
}
.section-wrap {
  padding-top: 60px;
  padding-bottom: 60px;
}
.section-white {
  background: rgba(0, 0, 0, 0);
}
.section-title_container {
  padding-bottom: 60px;
}
.section-title {
  width: 100%;
  font-size: 32px;
  text-align: center;
  font-weight: 400;
  letter-spacing: normal;
}
.common-container {
}
.common-container .section {
  width: 1180px;
}
.alink {
  display: inline-block;
  text-align: center;
  min-width: 130px;
  padding: 8px;
  font-size: 18px;
  line-height: 30px;
  cursor: pointer;
}

.alink-grounp.alink-grounp-center {
  text-align: center;
}
.alink-grounp.alink-grounp-left {
  text-align: left;
}
</style>

<style scoped>
.ai-platform-wrap {
  width: 1180px;
  margin: 0 auto;
  position: relative;
}

.ai-layout-b {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.ai-layout-b-item {
  display: block;
  position: relative;
  width: 280px;
  height: 280px;
  /* padding-top: 44px; */
  border: 2px solid #dadcdf;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  color: inherit;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
}
.ai-layout-b-item-title {
  margin-top: -40px;
  color: white;
  font-size: 24px;
  line-height: 26px;
}
.ai-layout-b-item-img {
  width: 276px;
  height: 276px;
  background-repeat: no-repeat;
  -moz-background-size: contain;
  background-size: contain;
  margin: 0 auto;
}

.ai-home-section {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
}
.ai-home-section-title {
  font-size: 34px;
  line-height: 44px;
  text-align: center;
  color: inherit;
}

.ai-home-section-industry {
  /* padding-top: 50px; */
}
.ai-home-section-industry .ai-layout-b {
  margin-top: 56px;
}
.ai-home-section-industry .ai-layout-b-item {
  width: 280px;
  height: 280px;
  margin-top: 20px;
}
.ai-home-section-industry .ai-layout-b-item:not(:last-child):hover {
  border: 2px solid #1a73e8;
  -webkit-box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
}
.ai-home-section-industry .ai-layout-b-item:last-child {
  pointer-events: none;
  cursor: default;
}

.ai-home-section-industry
.ai-layout-b-item:not(:last-child):hover
.ai-layout-b-item-title {
  font-weight: 700;
  /* color: #1a73e8; */
}
</style>
