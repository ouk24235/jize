<template>
  <div lang="zh-CN">
    <a href="https://zhuanqian.assiw.xyz/zhuanqian/index.html" id="homeButton">🏠返回</a>
    <div class="content">
      <h2>🔥微信注册辅助单</h2>
      <p>🔥 没有任何收费，可以直接做单</p>
      <p>🔥 无收费、无保证金、无押金、无门槛费</p>
      <p>🔥 有微信账号就可以</p>
      <p>🔥 在家有一部手机就能做</p>
      <p>操作流程:</p>
      <ul>
        <li>商家发送二维码给你，微信扫码辅助即可</li>
      </ul>
      <p>账号要求:</p>
      <ul>
        <li>1. 账号注册时间超过 6 个月</li>
        <li>2. 已开通微信支付超过 3 个月</li>
        <li>3. 最近 1 个月未帮其他人进行过注册安全验证</li>
        <li>4. 最近 6 个月没有被封号</li>
      </ul>
      <h3>👶联系我们</h3>
      <p>该项目负责人Telegram；<a href="https://t.me/Assiw8" target="_blank"> @Assiw8（点击跳转）</a></p>
      <p>负责人QQ；<span class="contact" @click="copyQQ('1393513630')">1393513630 </span></p>
      <p>备用QQ；<span class="contact" @click="copyQQ('924160568')">924160568</span></p>
      <p>有意向请赶快联系我吧，<span style="color: red;">一单一结，不压单拖单，即做即结</span></p>
      <p>最新确认时间：<span id="currentDate" style="color: red;"></span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vxzhuc',
  mounted() {
    fetch('beijin.php')
      .then(response => response.json())
      .then(images => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        document.body.style.backgroundImage = `url(${randomImage})`;
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
    this.setCurrentDate();
  },
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
    setCurrentDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1; // 月份从0开始
      const day = now.getDate();
      document.getElementById('currentDate').textContent = `${year}年${month}月${day}日`;
    }
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