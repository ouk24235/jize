<template>
  <div lang="zh">
    <a href="https://zhuanqian.assiw.xyz/zhuanqian/index.html" id="homeButton">🏠返回</a>
    <div class="container">
      <h2 style="color: #ff4500;">🔥qq群共享项目介绍</h2>
      <p style="color: #32cd32;">🔥 本篇为项目介绍</p>
      <p style="color: #32cd32;">🔥 0成本 一手项目 利润给足</p>
      <p style="color: #32cd32;">🔥 每个群可获得0.1-10元</p>
      <p style="color: #32cd32;">🔥 只需提供群号即可</p>
      <p class="highlight">项目简介:</p>
      <ul>
        <li style="color: #ffffff;">1. 将你QQ中的群聊展示给我们看，不要禁言群。如果涉及隐私、涉密等敏感群，请自行打码。</li>
        <li style="color: #ffffff;">2. 我们根据你所给的图片进行筛选，并给出报价。一个群根据成员质量在<span class="highlight">0.1-10元</span>。</li>
        <li style="color: #ffffff;">3. 你只需要将我们筛选出来的群号给我们即可，我们通过微信或者支付宝将金额结算给你。</li>
      </ul>
      <h3 style="color: #ffcc00;">💵 额外奖励</h3>
      <ul>
        <li style="color: #ffffff;">部分群需要你将我们指定的QQ拉进群，每个额外加<span class="highlight">2元</span>。</li>
        <li style="color: #ffffff;">其余情况给群号就行。</li>
      </ul>
      <h3 style="color: #ffcc00;">💡 注意事项</h3>
      <ul>
        <li style="color: #ffffff;">我们给出报价，你同意则开始执行。如果中途反悔的请不要参与，浪费大家时间。</li>
      </ul>
      <h3 style="color: #ffcc00;">🧧 结算方式</h3>
      <ul>
        <li style="color: #ffffff;">在订单成功后，我们将报价金额通过微信或者支付宝结算给你。</li>
      </ul>
      <h3 style="color: #ffcc00;">👨‍👨‍👦‍👦 客户群体</h3>
      <ul>
        <li style="color: #ffffff;">欢迎有大量QQ群资源的用户参与。</li>
        <li style="color: #ffffff;">请确保提供的群符合要求，不含敏感信息。</li>
      </ul>
      <h3 style="color: #ffcc00;">👦‍联系我们</h3>
      <p style="color: #ffffff;">该项目负责人Telegram；<a href="https://t.me/Assiw8" target="_blank" style="color: #00bfff;">@Assiw8（点击跳转）</a></p>
      <p style="color: #ffffff;">
        负责人QQ；<span style="color: #ff4500; cursor: pointer;" id="qqNumber" @click="openQQChat">3851456810</span>
      </p>
      <p style="color: #ffffff;">备用QQ；<span style="color: #ff4500; cursor: pointer;" id="qqNumber">924160568</span></p>
      <p style="color: #ffffff;">最新确认时间：<span id="currentDate" class="highlight"></span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'qqun',
  methods: {
    openQQChat() {
      window.location.href = "mqq://im/chat?chat_type=wpa&uin=3851456810"; // 通过此链接打开与指定QQ的聊天
    },
    updateCurrentDate() {
      const currentDate = new Date();
      const formattedDate = currentDate.getFullYear() + '年' + (currentDate.getMonth() + 1) + '月' + currentDate.getDate() + '日';
      document.getElementById('currentDate').textContent = formattedDate;
    }
  },
  mounted() {
    this.updateCurrentDate();
    document.getElementById('qqNumber').addEventListener('click', () => {
      const qqNumber = '3851456810';
      navigator.clipboard.writeText(qqNumber).catch(err => {
        console.error('无法复制文本: ', err);
      });
    });
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  width: 100%;
  margin: 20px;
  padding: 20px;
  background-color: transparent; /* 背景改为透明 */
  backdrop-filter: blur(10px); /* 保持模糊效果 */
  border-radius: 10px;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  overflow-y: auto; /* 允许容器内部滚动 */
  max-height: calc(100vh - 40px); /* 限制容器高度以适应视口 */
  scrollbar-width: none; /* Firefox隐藏滑轨 */
}
.container::-webkit-scrollbar {
  display: none; /* Chrome和Safari隐藏滑轨 */
}
h2 {
  font-size: 1.8em;
  margin-top: 1.5em;
  color: #ffcc00;
  text-align: center;
}
p, li {
  line-height: 1.6;
  color: #ffffff;
}
ul {
  padding-left: 20px;
}
li {
  margin-bottom: 10px;
}
.highlight {
  color: #ff4500;
  font-weight: bold;
}
a {
  color: #00bfff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
@media screen and (max-width: 600px) {
  .container {
    padding: 10px;
  }
  h2 {
    font-size: 1.5em;
  }
}
#qqNumber {
  color: #ff4500;
  cursor: pointer;
}
#qqNumber:hover {
  color: #ff6347; /* 悬停时的颜色变化 */
}
</style>