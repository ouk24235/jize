<template>
  <div class="overlay" v-show="isVisible" @click="close">
    <div class="set" @click.stop>
      <span class="i-icon i-icon-close-one close" @click="close">
        <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
          <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#ffffff60" stroke="#ffffff60" stroke-width="4" stroke-linejoin="round"></path>
          <path d="M29.6567 18.3432L18.343 29.6569" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M18.3433 18.3432L29.657 29.6569" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>

      <div class="iframe-container">
        <iframe
          :src="iframeSrc"
          frameborder="0"
          width="100%"
          height="100%"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineExpose } from 'vue';

// 定义 emit
const emit = defineEmits(['close']);
const isVisible = ref(true);

// 定义初始 iframe URL
const initialUrl = require('@/views/zhuanqian/index.vue'); // 更新为本地 HTML 文件路径

const iframeSrc = ref(`${initialUrl}?t=${Date.now()}`); // 加上时间戳来避免缓存

// 关闭页面的方法
const close = () => {
  isVisible.value = false;
  emit('close');
  iframeSrc.value = `${initialUrl}?t=${Date.now()}`; // 关闭时重置 URL 并加上时间戳
};

// 重新打开页面的方法
const show = () => {
  isVisible.value = true; // 每次调用时重新设置为 true
  iframeSrc.value = `${initialUrl}?t=${Date.now()}`; // 强制访问 initialUrl 并避免缓存
};

// 公开 show 方法用于外部调用
defineExpose({ show });
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.set {
  position: relative;
  width: 90%;
  height: 90%;
  background: rgba(255, 255, 255, 0.0);
  backdrop-filter: blur(20px);
  border-radius: 6px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 95%;
    height: 95%;
    padding: 5px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 28px;
    height: 28px;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(1);
    }
  }

  .iframe-container {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.3);
  }

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
