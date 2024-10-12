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

      <!-- 新增内容 -->
      <div class="more-content">
        <div class="link-all">
          <div class="item" v-for="(item, index) in xinxiLinks" :key="item.name" @click="jumpLink(item)">
            <i :class="item.icon"></i>
            <span class="name" :style="{ color: item.name === '兼职项目' || item.name === '联系我们' ? 'red' : 'inherit' }">
              {{ item.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script setup>
import { ref, defineEmits, defineExpose } from 'vue';
import xinxiLinks from '@/components/xinxiLinks.vue'; // 引入 .vue 文件

const emit = defineEmits(['close']);
const isVisible = ref(true);

const close = () => {
  isVisible.value = false;
  emit('close');
};

// 新增方法用于重新显示内容
const show = () => {
  isVisible.value = true;
};

// 公开 show 方法
defineExpose({ show });

// 定义 JSON 数据
const xinxiLinksData = ref(xinxiLinks);

// 链接跳转
const jumpLink = (data) => {
  window.open(data.link, "_blank");
};
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
width: 80%;
height: 80%;
background: rgba(255, 255, 255, 0.0); /* 半透明背景 */
backdrop-filter: blur(20px); /* 模糊效果 */
border-radius: 6px;
padding: 40px;
display: flex;
flex-direction: column;
justify-content: flex-start; /* 置顶内容 */
align-items: center;

@media (max-width: 768px) {
  width: 90%;
  height: 90%;
  padding: 20px;
}

.close {
  position: absolute;
  top: 14px;
  right: 14px;
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

.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 置顶内容 */
  align-items: center; /* 居中内容 */
  padding-top: 20px; /* 添加一些顶部填充 */

  .text-content {
    font-size: 1.2rem;
    color: red; /* 文字颜色改为红色 */
    text-align: center; /* 居中文字 */
    width: 100%;

    .top-title {
      align-self: center; /* 居中置顶标题 */
    }

    h2 {
      font-size: 1.5rem; /* 标题字体稍微大一点 */
      margin-bottom: 10px;
      color: red; /* 标题颜色改为红色 */
    }

    p {
      margin: 5px 0;
    }

    a {
      color: red; /* 链接文字颜色改为红色 */
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: 1rem;

      h2 {
        font-size: 1.2rem;
      }
    }
  }
}
}

/* 新增样式 */
.more-content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  height: 100%;
}

.link-all {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.item {
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.3s, background 0.3s;

  &:hover {
    transform: scale(1.02);
    background: rgba(0, 0, 0, 0.6);
  }

  &:active {
    transform: scale(1);
  }

  .name {
    font-size: 1.1rem;
    margin-top: 8px;
    text-align: center;
  }
}
</style>