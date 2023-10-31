<template>
  <div class="side-pane" :class="{ 'fold': fold }" :style="{ height }">

    <!-- 侧边内容 -->
    <div class="side-pane-left" :style="{ width: sideWidth }">
      <transition name="side-pane-left">
        <div class="side-pane-left-con" v-if="!fold">
          <div class="side-pane-left-header" v-if="$slots.leftHeader">
            <slot name="leftHeader"></slot>
          </div>

          <!-- 侧边主体内容区 -->
          <div class="side-pane-left-body">
            <slot name="left"></slot>
          </div>

          <el-button class="fold-btn" type="text" icon="el-icon-arrow-left" @click="changeFold"></el-button>
        </div>
      </transition>
    </div>

    <!-- 主体内容 -->
    <div class="side-pane-main" :style="{ marginLeft }">
      <div class="side-pane-main-header" v-if="$slots.mainHeader">
        <slot name="mainHeader"></slot>
      </div>

      <!-- 主体内容区 -->
      <div class="side-pane-main-body">
        <slot name="main"></slot>
      </div>

      <el-button v-if="fold" class="unfold-btn" type="text" icon="el-icon-arrow-right" @click="changeFold"></el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: '100%'
    },
    sideWidth: {
      type: String,
      default: '25%'
    }
  },
  computed: {
    marginLeft () {
      return this.fold ? 0 : this.sideWidth
    }
  },
  data () {
    return {
      fold: false,
    }
  },
  methods: {
    /**
     * @method changeFold 收起/展开侧边菜单
     */
    changeFold () {
      this.fold = !this.fold
    }
  },
}
</script>

<style lang="scss" scoped>
.side-pane {
  position: relative;
  min-height: 100px;
  border: 1px solid #d7dae2;
  background-color: #fff;

  &.fold {
    .side-pane-left {
      width: 0;
      height: 0;
      border: none;
    }
    .side-pane-main {
      margin-left: 0;
    }
    &:hover {
      .unfold-btn {
        visibility: visible;
      }
    }
  }

  .side-pane-left {
    overflow: hidden;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    border-right: 1px solid #d7dae2;
    transition: width 0.3s;

    &:hover {
      .fold-btn {
        visibility: visible;
      }
    }

    &-con {
      .side-pane-left-header {
        overflow: hidden;
        box-sizing: border-box;
        min-height: 40px;
        padding: 8px 20px 8px 16px;
        border-bottom: 1px solid #d7dae2;
      }

      .fold-btn {
        visibility: hidden;
        position: absolute;
        width: 20px;
        height: 40px;
        top: 0;
        right: 0;
        color: #666;
        border-radius: 0;
        background-color: rgba($color: #000000, $alpha: 0.05);
        &:hover {
          background-color: rgba($color: #000000, $alpha: 0.15);
        }
      }
    }
  }

  .side-pane-main {
    position: relative;
    transition: all 0.3s;

    .side-pane-main-header {
      box-sizing: border-box;
      min-height: 40px;
      padding: 8px 20px;
      border-bottom: 1px solid #d7dae2;
    }

    .side-pane-main-body {
      padding: 8px 20px;
    }

    .unfold-btn {
      visibility: hidden;
      position: absolute;
      width: 20px;
      height: 40px;
      top: 0;
      left: 0;
      color: #666;
      border-radius: 0;
      background-color: rgba($color: #000000, $alpha: 0.05);
      &:hover {
        background-color: rgba($color: #000000, $alpha: 0.15);
      }
    }
  }
}

.side-pane-left-enter-active,
.side-pane-left-leave-active {
  transition: opacity 0.5s;
}
.side-pane-left-enter,
.side-pane-left-leave-to {
  opacity: 0;
}
</style>
