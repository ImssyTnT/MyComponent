<template>
  <div
    class="progress"
    :style="{ height: proheight + 'px' }"
    @click="animation"
  >
    <div class="my-progress" :style="{ borderRadius: proheight / 2 + 'px' }">
      <div
        ref="bar"
        class="my-progress-bar"
        :style="{
          width: proAnimation ? '0%' : prowidth + '%',
          backgroundColor: color,
          borderRadius: proheight / 2 + 'px',
        }"
      >
        <span v-if="textInside" class="text-inside">{{
          proAnimation ? '0%' : prowidth + '%'
        }}</span>
      </div>
    </div>
    <div class="my-progress-text" v-if="!textInside">
      <slot name="format">{{ proAnimation ? '0%' : prowidth + '%' }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    prowidth: {
      type: String,
      default: '50',
    },
    proheight: {
      type: String,
      default: '6',
    },
    color: {
      type: String,
      default: '#409eff',
    },
    textInside: {
      type: Boolean,
      default: false,
    },
    proAnimation: {
      type: Boolean,
      default: false,
    },
  },

  created() {},

  methods: {
    animation() {
      console.log(11);
      this.$refs.bar.style.animation = 'progress 4s linear 0s forwards';
      console.log(this.$refs.bar.style.animation);
    },
  },
};
</script>

<style scoped lang="less">
.progress {
  display: flex;
  align-items: center;
  width: 350px;
  height: 6px;
  margin: 10px 0;
  .my-progress {
    width: 300px;
    height: 100%;
    border-radius: 3px;
    background-color: #ebeef5;
    .my-progress-bar {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
      background-color: red;
      border-radius: 50%;
      border-radius: 3px;
      // animation: progress 4s linear 0s forwards;
      .text-inside {
        margin-right: 5px;
      }
    }
  }
  :deep(.my-progress-text) {
    font-size: 14px;
    margin-left: 5px;
  }
}

@keyframes progress {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
