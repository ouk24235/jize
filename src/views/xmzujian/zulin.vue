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

        <div class="assiw-container">
            <h2 style="color: #ff4500; font-weight: bold;">🔥商品租赁🔥</h2>

            <p style="color: #ffffff; ">🔥 无需垫付及预支资金</p>
            <p style="color: #ffffff;">🔥 每单只需要5-15分钟，佣金200+</p>
            <p style="color: #ffffff;">🔥 在家有一部手机就能做</p>
            <p style="color: #ffffff;">🔥 有意向联系请底部QQ</p>

            <h3 class="h3222" style="color: #ff4500;">❓ 我们如何获利？</h3>
            <ul>
                <li style="color: #ffffff;">根据商家做店铺运营店铺需要信誉分考核需求，刷三类数据：</li>
                <li class="highlight" style="font-weight: bold;">店铺订单数</li>
                <li class="highlight" style="font-weight: bold;">店铺订单质量</li>
                <li class="highlight" style="font-weight: bold;">店铺好评率</li>
            </ul>
            <h3 style="color: #ff4500; font-weight: bold;">💡 我该如何操作？</h3>
              <ul>
                  <li>为确保顺利参与，您的芝麻分需在<span style="color: #00ff00; font-weight: bold;">600分</span>以上；若低于<span style="color: #00ff00; font-weight: bold;">600分</span>，则无法进行操作流程。</li>
                  <li>下载APP并<span style="color: #00ff00; font-weight: bold;">登入</span>。</li>
                  <li>选择客服<span style="color: #00ff00; font-weight: bold;">指定商品租赁</span></li>
                  <li>用户成功租赁后<span style="color: #00ff00; font-weight: bold;">保存订单截图</span></li>
                  <li>将保存的<span style="color: #00ff00; font-weight: bold;">订单截图发送给客服结账</span></li>
                  <li>平均一单<span style="color: #00ff00; font-weight: bold;">5-20分钟</span>可以做完。</li>
              </ul>
            
            

            <h3 class="h3222" style="color: #ff4500; font-weight: bold;">👨‍👨‍👦‍👦 面向客户群体</h3>
            <ul>
                <li style="color: #00ff00;">目前我们优先接受信用良好的用户订单，以确保合作顺利进行。</li>
                <li style="color: #00ff00;">客户年龄区间在18-60之间，能熟练操作手机的。</li>
                <li style="color: #00ff00;">杜绝涉黑涉恶人员，防止卷款跑路。</li>
                <li style="color: #00ff00;">请未成年人不要参与网络活动</li>
            </ul>

            <h3 class="h3222" style="color: #ff4500; font-weight: bold;">👦‍联系我们</h3>
            <p style="color: #00ff00; font-weight: bold;">
                目前正在紧急招募代理，名额有限，请尽快联系
            </p>
            <p>
                负责人QQ；</p>
                <p><span style="color: #00ff00; cursor: pointer; font-weight: bold;" id="qqNumber" @click="copyQQ('1393513630')">1393513630（手机用户点我复制并打开QQ）</span>
            </p>
            <p style="color: #ffffff; ">
                有意向赶快联系我吧</p><p><span style="color: #00ff00;">一单一结，不拖单压单 既做既结</span>
            </p>
            <h3 style="color: #00ff00;">常见问题（做单必看）点击展开回答</h3>
            <details class="faq-item">
  <summary><span style="color: #00ff00;"> 问：为什么要寻找用户下单商品，你们通过什么盈利？</span></summary>
  <p>答：（可以理解为刷出租单量）提高店铺出租数量，提高店铺评分，出售店铺来盈利。</p>
</details>
<details class="faq-item">
  <summary><span style="color: #00ff00;"> 问：没有Steam账号，怎么办？</span></summary>
  <p>答：商家会提供steam账号，联系客服领取</p>
</details>
<details class="faq-item">
  <summary><span style="color: #00ff00;"> 问：为什么会要要求芝麻分必须600分以上？</span></summary>
  <p>答：如果用户低于600分以下，则无法免押商品，必须要满600分以上才能免押。</p>
</details>
<details class="faq-item">
  <summary><span style="color: #00ff00;"> 问：满足600分，如何做单？</span></summary>
  <p>答：添加客服QQ，下载APP，登入，找到指定商品，免押下单，结账。</p>
</details>
<details class="faq-item">
  <summary><span style="color: #00ff00;"> 问：如何归还租的商品？</span></summary>
  <p>答：打开APP—我的-租赁记录—归还—确认即可。</p>
</details>
<details class="faq-item">
  <summary><span style="color: #00ff00;"> 问：租完后什么时候归还呢？</span></summary>
  <p>答：订单到期时在APP内确认，系统自动审批</p>
</details>
<details class="faq-item">
  <summary><span style="color: #00ff00;"> 问：会不会对我的芝麻分有影响？</span></summary>
  <p>答：不会，正常租赁商品，就和租共享充电宝一样</p>
</details>
<details class="faq-item">
  <summary><span style="color: #00ff00;"> 问：租赁的物品我在哪里查看？</span></summary>
  <p>答：成功租赁后在你的悠悠有品账户中管理租赁的物品</p>
</details>
            <p style="color: #ffffff; font-weight: bold;">最新确认时间：<span id="currentDate" style="color: red;">{{ currentDate }}</span></p>
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
/* 全局应用 box-sizing: border-box */

.faq-item {

  transition: all 1s ease-in-out;

  overflow: hidden;
}

.faq-item[open] summary {

  font-weight: bold;
}

.faq-item summary {

  cursor: pointer;



  margin-bottom: 5px;
}

.faq-item p {

  margin: 0;

  padding: 0 0 10px 20px;

  transition: opacity 1s ease-in-out;

  opacity: 0;
}

.faq-item[open] p {

  opacity: 1;
}
/* 重置默认的 margin 和 padding */
body, h1, h2, h3, p, ul, li, a, span {
    margin: 0;
    padding: 0;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 20px; /* 使用 padding 代替容器的 margin */
    min-height: 100vh; /* 确保 body 至少占满整个视口高度 */
    display: flex;
    flex-direction: column; /* 垂直堆叠元素 */
    justify-content: flex-start; /* 垂直顶部对齐 */
    align-items: center; /* 水平居中对齐 */
    background-color: transparent;
    overflow: hidden; /* 隐藏 body 的滚动条 */
}

.h3222{
font-size: 1.3em;
transition: all 1s ease-in-out;

overflow: hidden;

}
.h3222[open] summary {

font-weight: bold;
}
.h3222 summary {

cursor: pointer;



margin-bottom: 5px;
}
.h3222 p {

margin: 0;

padding: 0 0 10px 20px;

transition: opacity 1s ease-in-out;

opacity: 0;
}
.h3222[open] p {

opacity: 1;
}

.assiw-container {
    width: 1000px; /* 设置容器的最大宽度为 800 像素 */
    padding: 20px; /* 设置容器的内边距，确保内容不紧贴边缘 */
    height: 90vh;
    background-color: rgba(0, 0, 0, 0); /* 设置容器背景为半透明黑色 */
    backdrop-filter: blur(10px); /* 背景模糊效果，增强层次感 */
    border-radius: 10px; /* 设置圆角边框，提升视觉效果 */
    color: #ffffff; /* 设置文本颜色为白色 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* 添加阴影效果，使容器有立体感 */
    overflow-y: auto; /* 允许容器内部垂直滚动，当内容超出容器高度时显示滚动条 */
    max-height: 1000px; /* 限制容器的最大高度，适应电脑页面 */
    margin: auto; /* 使容器在垂直方向上居中 */
}

/* 隐藏 Chrome 和 Safari 中的滚动条 */
.assiw-container::-webkit-scrollbar {
    display: none; /* 不显示滚动条 */
}

h2 {
    font-size: 1.8em;
    margin-top: 1.5em;
    color: #ffcc00;
    text-align: center;
}
h4 {
    font-size: 1.3em;
    color: #ffcc00;
    text-align: left;
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
    color: hsl(132, 100%, 50%);
    font-weight: bold;
    text-align: left; /* 左对齐 */
    margin-left: 40px; /* 左边距40px */
}

a {
    color: #00bfff;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

@media screen and (max-width: 600px) {
    .assiw-container {
        padding: 6px; /* 在小屏幕上减少内边距 */
        width: 94%;
        height: 95vh;
    }

    h2 {
        font-size: 1.5em; /* 在小屏幕上减小标题字体大小 */
    }
    h4 {
        font-size: 1.1em;
        color: #ffcc00;
        text-align: center;
    }
}

#qqNumber {
    color: #ff4500;
    cursor: pointer;
}
#qqNumber:hover {
    color: #ff6347; /* 悬停时的颜色变化 */
}
#qqNumberBackup {
    color: #ff4500;
    cursor: pointer;
}
#qqNumberBackup:hover {
    color: #ff6347; /* 悬停时的颜色变化 */
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
  width: 95%;
  // 设置高度为95%
  height: 95%;
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
