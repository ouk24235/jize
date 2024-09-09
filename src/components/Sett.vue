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
        <div class="content">
          <div class="text-content">
            <h2 class="top-title">国内联系方式</h2>
            <p><a href="https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=m1b7vavmowOko6krIaje_FtszjIzycsP&authKey=PG8IE%2F2Od9BKuRbDg1yI8uAUj%2Fv9dUfHa0DPoGk4xfQPiGSD%2F4tH7mcy6SHb2AlX&noverify=0&group_code=3843778455" target="_blank">QQ:3843778455</a></p>
            <p><a target="_blank">蝙蝠ID:34684660</a></p>
            <h2>国外联系方式</h2>
            <p><a href="https://t.me/qang8" target="_blank">Telegram: @qang8</a></p>
            <p><a href="https://discord.com/users/qang8" target="_blank">Discord: qang8</a></p>
          </div>
        </div>
      </div>
    </div>  
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['close']);
const isVisible = ref(true);

const close = () => {
  isVisible.value = false;
  emit('close');
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
  background: rgba(255, 255, 255, 0.8); /* 降低透明度 */
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
</style>