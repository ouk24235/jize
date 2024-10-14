<template>
  <div lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <title>ASSIW赚钱兼职项目发布</title>
      <meta name="keywords" content="ASSIW团队,兼职项目,项目开发,Steam单机游戏免费下载,手机游戏资源,论文查重与降重,影视资源,软件工具下载,Windows系统安装,安卓破解软件,漫画书籍资源,音乐下载与试听,办公工具大全,英语学习资源,百度文库下载工具,考证资料下载,思维导图模板,信息可视化工具,知识分享平台,PPT模板制作,兼职合作项目,Telegram下载与使用,USDT兑换教程,黑U承兑,交易所教程,数字货币交易所下载,网站搭建指南,服务器配置教程,邮箱购买服务,QQ账号交易,微信账号买卖,线上兼职项目,广告推广,OpenAI订阅,ChatGPT代开服务,ChatGPT Plus订阅,数字货币交易所操作指南,兼职赚钱论坛">
      <meta name="description" content="ASSIW赚钱兼职项目发布">
      <meta name="author" content="ASSIW赚钱兼职项目发布">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no minimal-ui">
      <link rel="preload" href="./beijin.php" as="fetch" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="./style.css?v=1.0">
      <link rel="stylesheet" href="./ox.css?v=1.0">
      <link rel="stylesheet" href="https://zhuanqian.assiw.xyz/json/fanhui.css">
      <style>
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
        .contact {
          color: #ff4500;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <div class="content">
        <h2>🔥快手、抖音关注单（一单1-2元）</h2>
        <p>🔥 没有任何收费，可以直接做单</p>
        <p>🔥 无收费、无保证金、无押金、无门槛费</p>
        <p>🔥 在家一个快手、抖音账号即可</p>
        <p>🔥 在家有一部手机就能做</p>
        <p>操作流程:</p>
        <ul>
          <li>联系商家拿资料，商家会给你（快手号、抖音号）的主页，在快手或抖音搜索，关注后截图给商家即可</li>
          <li>(邀请朋友做单、一个人6.18)</li>
        </ul>
        <h3>👦‍联系我们</h3>
        <p>该项目负责人Telegram；<a href="https://t.me/Assiw8" target="_blank" style="color: #1e90ff;">@Assiw8（点击跳转）</a></p>
        <p>负责人QQ；<span class="contact" @click="copyQQ('3851456810')">3851456810</span></p>
        <p>备用QQ；<span class="contact" @click="copyQQ('924160568')">924160568</span></p>
        <p>有意向请赶快联系我吧，<a style="color: red;">一单一结，不压单拖单，即做即结</a></p>
        <p>最新确认时间：<span id="currentDate" style="color: red;"></span></p>
      </div>
    </body>
  </div>
</template>

<script>
export default {
  name: 'douyin (1)',
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
/* Add your styles here if needed */
</style>
