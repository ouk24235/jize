<template>
  <div lang="zh-CN">
    <div class="content">
      <a href="https://zhuanqian.assiw.xyz/zhuanqian/index.html" id="homeButton">🏠返回</a>
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
      <p style="color: #ffffff;">QQ；<span class="contact" @click="copyQQ('1393513630')" style="color: #ff4500;">1393513630 </span></p>
      <p style="color: #ffffff;">备用QQ；<span class="contact" @click="copyQQ('924160568')" style="color: #ff4500;">924160568</span></p>
      <p style="color: #ff4500;">最新确认时间：<span id="currentDate" style="color: red;"></span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'qqkuolie',
  methods: {
    copyQQ(qq) {
      navigator.clipboard.writeText(qq)
        .then(() => {
          alert('QQ号已复制到剪贴板');
        })
        .catch(err => {
          console.error('复制失败', err);
        });
    },
    formatDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1; // 月份从0开始
      const day = now.getDate();
      return `${year}年${month}月${day}日`;
    }
  },
  mounted() {
    document.getElementById('currentDate').textContent = this.formatDate();
  }
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: transparent; /* 移除背景颜色 */
}
.content {
  max-width: 800px;
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
.footer {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
}
.contact {
  color: #ff4500;
  cursor: pointer;
}
</style>