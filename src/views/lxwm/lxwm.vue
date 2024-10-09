<template>
  <div>
    <div class="background-dynamic"></div> <!-- 背景层 -->
    <div class="content">
      <h2 class="top-title">网站业务客服</h2> <!-- 置顶标题 -->
      <div class="contact-info">
        <h2>联系方式</h2>
        <p>Telegram:<a href="https://t.me/Assiw8" target="_blank" style="color: #d9534f;">@Assiw8（点击跳转）</a></p>
        <p>Telegram群:<a href="https://t.me/Assiw666" target="_blank" style="color: #d9534f;">@Assiw666（点击跳转）</a></p>
        <p>大号被冻结加这个👇
          <li>QQ：<span class="qq" @click="copyToClipboard('3851456810')">3851456810 （点击复制）</span></li>
          <li>微信：<span class="weixin" @click="copyToClipboard('L_cooool')">L_cooool （点击复制）</span></li>
        </p>
        <p>手机号：<span class="phone">15048829339</span></p>
        <p>邮箱：<a class="email" href="mailto:001@faka.assiw.xyz">001@faka.assiw.xyz</a></p>
        <p>收徒-账号购买，网站搭建，等各种网络业务请添加联系方式</p>
        <p>添加请备注来意，如项目名称，或咨询的问题。</p>
        <p>二维码需要截屏再去扫描 网站限制了右键 请谅解</p>
        <p>最新确认时间：<span style="color: #d9534f;" id="current-time">{{ currentTime }}</span></p>
      </div>

      <div class="qr-code">
        <div>
          <h2>QQ二维码</h2>
          <img src="https://zhuanqian.assiw.xyz/qq.jpg" alt="QQ二维码">
        </div>
        <div>
          <h2>微信二维码</h2>
          <img src="https://zhuanqian.assiw.xyz/wx.jpg" alt="微信二维码">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentTime = ref('');

const copyToClipboard = (text) => {
  const input = document.createElement('input');
  input.setAttribute('value', text);
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  
  // 提示用户复制成功
  alert(`已复制到剪贴板：${text}`);
};

const updateTime = () => {
  const now = new Date();
  const beijingTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));
  const formattedTime = beijingTime.toLocaleString('zh-CN', { year: 'numeric', month: 'numeric', day: 'numeric' });
  currentTime.value = formattedTime;
};

onMounted(() => {
  updateTime();
  setInterval(updateTime, 60000); // 每分钟更新一次
});
</script>

<style scoped>
/* 隐藏所有滑轨 */
::-webkit-scrollbar {
  display: none; /* Safari 和 Chrome */
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: transparent; /* 背景颜色改为透明 */
  position: relative; /* 设置相对定位以便绝对定位的子元素 */
  height: 100vh; /* 设置高度为视口高度 */
  background-size: cover; /* 背景图片全屏填充 */
  background-attachment: fixed; /* 背景图片固定 */
}

.background-dynamic {
  position: fixed;   /* 固定定位 */
  top: 0;           /* 顶部对齐 */
  left: 0;          /* 左边对齐 */
  width: 100%;      /* 宽度 100% */
  height: 100%;     /* 高度 100% */
  z-index: -1;      /* 确保背景图在内容后面 */
}

.content {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6); /* 黑色背景，透明度40 */
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* 阴影效果 */
  backdrop-filter: blur(10px); /* 模糊效果 */
  color: #ffffff; /* 设置文字颜色为白色 */
  position: relative; /* 设置相对定位，确保在背景层上 */
  z-index: 1; /* 确保内容在背景层上 */
  height: auto; /* 设置高度为自动 */
  overflow: auto; /* 允许内容滚动 */
}

h2 {
  color: #d9534f; /* 标题颜色 */
  text-align: center;
  margin-top: 10px;
  border-bottom: 2px solid #d9534f; /* 底部边框效果 */
  padding-bottom: 5px; /* 底部内边距 */
}

p {
  margin: 10px 0;
  color: #ffffff; /* 将文本颜色改为白色，以适应黑色背景 */
  line-height: 1.6; /* 更好的行高 */
}

.qr-code {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px; /* 增加二维码之间的间距 */
}

.qr-code img {
  max-width: 100%;
  height: auto; /* 保持比例 */
  border-radius: 8px; /* 圆角效果 */
  border: 2px solid #d9534f; /* 边框效果 */
  padding: 10px; /* 内边距 */
  background-color: #f8f9fa; /* 轻微背景色以增强对比 */
}

/* 添加文本颜色效果 */
.qq {
  color: #4a90e2; /* QQ颜色 */
}

.weixin {
  color: #3cba54; /* 微信颜色 */
}

.phone {
  color: #f39c12; /* 手机号颜色 */
}

.email {
  color: #d9534f; /* 邮箱颜色 */
}

@media (max-width: 768px) {
  .content {
    padding: 15px;
    padding: 6px; /* 添加左右边距为6 */
  }
}
</style>
