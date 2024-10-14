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

      <div>
        <div class="content">
      
      <h2 style="color: #ff4500;">🔥QQ好友扩列</h2>
      <p style="color: #32cd32;">🔥 没有任何收费，可以直接做单</p>
      <p style="color: #32cd32;">🔥 无收费、无保证金、无押金、无门槛费</p>
      <p style="color: #32cd32;">🔥 加了就给</p>
      <p style="color: #32cd32;">🔥 在家有一部手机就能做</p>
      <p style="color: #ff4500;">操作流程:</p>
      <ul>
        <li style="color: #ffffff;">直接添加下面QQ号，发收款码领1块</li>
        <li style="color: #ffffff;">简单粗暴 没有理由 单纯扩列</li>
        <li style="color: #ffffff;">(邀请朋友做单、俩人每人2块)</li>
      </ul>
      <h3 style="color: #ff4500;">👦‍联系我们</h3>
      <p style="color: #ffffff;">该项目负责人Telegram；<a href="https://t.me/Assiw8" target="_blank" style="color: #1e90ff;">@Assiw8（点击跳转）</a></p>
      <p style="color: #ffffff;">QQ；<span class="contact" @click="copyQQ('3851456810')" style="color: #ff4500;">3851456810 </span></p>
      <p style="color: #ffffff;">备用QQ；<span class="contact" @click="copyQQ('924160568')" style="color: #ff4500;">924160568</span></p>
      <p style="color: #ff4500;">最新确认时间：<span id="currentDate" style="color: red;"></span></p>
    </div>
        
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            currentDate: ''
        };
    },
    methods: {
        copyQQ(qqNumber) {
            navigator.clipboard.writeText(qqNumber).then(() => {
                // QQ号码已成功复制到剪贴板
            }).catch(err => {
                console.error('无法复制文本: ', err);
            });
        },
        updateCurrentDate() {
            const currentDate = new Date();
            this.currentDate = `${currentDate.getFullYear()}年${currentDate.getMonth() + 1}月${currentDate.getDate()}日`;
        }
    },
    mounted() {
        this.updateCurrentDate();
    }
};
</script>
<script setup>
import { ref, defineEmits, defineExpose } from 'vue';

// 定义 emit
const emit = defineEmits(['close']);
const isVisible = ref(true);

const initialUrl = 'https://zhuanqian.assiw.xyz/zhuanqian/index.html'; // 假设文件在 public/zhuanqian/zulin.html // 使用 Webpack 的 require
const iframeSrc = ref(initialUrl); // 移除时间戳以允许缓存

// 关闭页面的方法
const close = () => {
  isVisible.value = false;
  emit('close');
};

// 重新打开页面的方法
const show = () => {
  isVisible.value = true; // 每次调用时重新设置为 true
  // iframeSrc.value = initialUrl; // 不再需要重置 URL
};

// 公开 show 方法用于外部调用
defineExpose({ show });
</script>

<style scoped>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: transparent; /* 移除背景颜色 */
}
.content {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0); /* 黑色背景，透明度40% */
    backdrop-filter: blur(10px); /* 背景模糊效果 */
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h2 {
    color: #ff4500;
}
p {
    margin: 10px 0;
}
.contact {
    color: #ff4500;
    cursor: pointer;
}
</style>
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
  // 设置元素为相对定位
  position: relative;
  // 设置宽度为95%
  width: 50%;
  // 设置高度为95%
  height: 60%;
  // 设置背景为透明白色
  background: rgba(255, 255, 255, 0.0);
  // 添加模糊效果
  backdrop-filter: blur(10px);
  // 设置圆角边框
  border-radius: 6px;
  // 设置内边距为10px
  padding: 10px;
  // 使用flex布局
  display: flex;
  // 设置主轴方向为列
  flex-direction: column;
  // 设置子元素水平居中对齐
  align-items: center;

  @media (max-width: 768px) {
    width: 95%;
    height: 95%;
    padding: 5px;
  }

  .close {
    position: absolute;
    top: 0px;
    right: 9px;
    width: 13px;
    height: 13px;
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
