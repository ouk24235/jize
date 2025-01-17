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
      <div class="content">
        <h2>🔥快手、抖音关注单（一单1-2元）</h2>
        <p>🔥 没有任何收费，可以直接做单</p>
        <p>🔥 无收费、无保证金、无押金、无门槛费</p>
        <p>🔥 在家一个快手、抖音账号即可</p>
        <p>🔥 在家有一部手机就能做</p>
        <p>操作流程:</p>
          <li>联系商家拿资料，商家会给你（快手号、抖音号）的主页，在快手或抖音搜索，关注后截图给商家即可</li>
          <li>(邀请朋友做单、一个人6.18)</li>
        <h3>👦‍联系我们</h3>
        <p>该项目负责人Telegram；<a href="https://t.me/Assiw8" target="_blank">@Assiw8（点击跳转）</a></p>
        <p>大号被冻结加这个QQ；<span @click="copyQQ('1393513630')" style="color: #ff4500;">1393513630 （点击复制）</span></p>
        <p >有意向请赶快联系我吧，<a style="color: red;">一单一结，不压单拖单，即做即结</a></p>
        <p>最新确认时间：<span style="color: red;">{{ new Date().getFullYear() }}年{{ new Date().getMonth() + 1 }}月{{ new Date().getDate() }}日</span></p>
        <p>© 2020-2024 兼职赚米活动介绍. All Rights Reserved.</p>
      </div>
    </div>
  </div>  
</template>

<script setup>
import { ref, defineEmits, defineExpose } from 'vue';
import { useRouter } from 'vue-router';

const emit = defineEmits(['close']);
const isVisible = ref(true);
const router = useRouter();

const close = () => {
isVisible.value = false;
emit('close');
};

// 新增方法用于返回上一页
const goBack = () => {
router.back();
emit('close'); // 触发关闭事件
};

// 公开 show 方法
defineExpose({ show: () => { isVisible.value = true; } });

// 新增方法用于复制QQ号
const copyQQ = (qq) => {
navigator.clipboard.writeText(qq).then(() => {
  ElMessage({
    message: `QQ号已复制：${qq}`,
    type: 'success',
    duration: 3000,
  });
}).catch(err => {
  ElMessage({
    message: '复制失败，请重试',
    type: 'error',
    duration: 3000,
  });
  console.error('复制失败：', err);
});
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

.red {
  color: hwb(0 0% 100%);
}

.content {
  width: 100%;
  height: calc(100% - 0px); /* 减去 padding 的高度 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 置顶内容 */
  padding-top: 10px; /* 添加一些顶部填充 */
  overflow-y: auto; /* 允许内容滚动 */
  color: #fff; /* 文字颜色改为白色 */
  text-align: left; /* 左对齐文字 */
}

.content h2, .content h3 {
  color: #ff4500; /* 标题颜色改为橙色 */
}

.content p, .content ul, .content li {
  margin: 5px 0;
}

.content a {
  color: #ff4500; /* 链接文字颜色改为橙色 */
  text-decoration: none;
}

.content a:hover {
  text-decoration: underline;
}

/* 自定义滚动条样式 */
.content::-webkit-scrollbar {
  width: 3px; /* 滚动条宽度 */
}

.content::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1); /* 滚动条轨道颜色 */  
  border-radius: 5px; /* 滚动条轨道圆角 */
  margin-top: 10px; /* 滚动条轨道上边距 */
}

.content::-webkit-scrollbar-thumb {   
  background: rgba(185, 185, 185, 0.8); /* 滚动条滑块颜色 */
  border-radius: 4px; /* 滚动条滑块圆角 */
  min-height: 30px; /* 滚动条滑块最小高度 */
}

.content::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 69, 0, 1); /* 滚动条滑块悬停颜色 */
}
}

@media (max-width: 480px) {
.set {
  width: 90%;
  height: 95%;
  padding: 10px;
}

.content {
  padding-top: 5px;
  padding-bottom: 10px; /* 添加底部填充 */
}

.content h2, .content h3 {
  font-size: 1.2rem; /* 调整标题字体大小 */
}

.content p, .content ul, .content li {
  font-size: 0.9rem; /* 调整段落和列表字体大小 */
}
}
</style>