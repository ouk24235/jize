<template>
  <div>
    <div class="background-dynamic"></div>
    <div class="centent">
      <div class="main">
        <!-- 上部分 -->
        <div class="main-top">
          <div class="main-top-title">
            <h1><strong class="ox3">hello! 本页面为兼职项目发布页面！！</strong></h1>
          </div>
          <div class="main-top-Brief">
            <p><strong style="color: #ff6347;">如果你有好的项目想要发布，请联系网页管理员投稿！&nbsp;</strong></p>
            <p><strong style="color: #ff6347;">如果你在执行项目时，遇到了什么问题，请联系项目内发布人员预留信息；</strong></p>
            <p><strong style="color: #ff6347;">管理员QQ：3851456810</strong></p>
          </div>
        </div>
        <!-- 下部分 -->
        <div class="main-bot">
          <div class="main-bot-title">
            <h3 class="ox2">项目列表&nbsp;</h3>
          </div>
          <div class="main-bot-nr">
            <a href="https://zhuanqian.assiw.xyz/zulin.html" class="main-bot-nr-kp">
              <div class="main-bot-nr-kp-k">
                <div class="main-bot-nr-kp-k-img"><img src="https://img.touxiangkong.com/uploads/allimg/2023030411/k5xycsrjqup.jpg" alt="" class="kkk"></div>
                <div class="main-bot-nr-kp-k-n">
                  <span class="ox1">0成本租单反佣金</span>
                  <span class="oxx1">一单利润300-1000</span>
                </div>
              </div>
            </a>
            <a href="https://zhuanqian.assiw.xyz/usdt.html" class="main-bot-nr-kp">
              <div class="main-bot-nr-kp-k">
                <div class="main-bot-nr-kp-k-img"><img src="https://th.bing.com/th/id/OIP.wacPZTo3lqwvFllafUR4qAAAAA?rs=1&pid=ImgDetMain" alt="" class="kkk"></div>
                <div class="main-bot-nr-kp-k-n">
                  <span class="ox1">黑U承兑</span>
                  <span class="oxx1">一颗白U换两颗黑U（一颗U等于7RMB）利润1500-10000</span>
                </div>
              </div>
            </a>
            <a href="https://zhuanqian.assiw.xyz/douyin.html" class="main-bot-nr-kp">
              <div class="main-bot-nr-kp-k">
                <div class="main-bot-nr-kp-k-img"><img src="https://th.bing.com/th/id/OIP.wacPZTo3lqwvFllafUR4qAAAAA?rs=1&pid=ImgDetMain" alt="" class="kkk"></div>
                <div class="main-bot-nr-kp-k-n">
                  <span class="ox1">快手抖音点赞关注</span>
                  <span class="oxx1">快手抖音点赞关注，一个关注1-2块</span>
                </div>
              </div>
            </a>
            <a href="https://zhuanqian.assiw.xyz/tgdw.html" class="main-bot-nr-kp">
              <div class="main-bot-nr-kp-k">
                <div class="main-bot-nr-kp-k-img"><img src="https://th.bing.com/th/id/OIP._f_-RhEdM7aQrX8yeKDXnAAAAA?rs=1&pid=ImgDetMain" alt="" class="kkk"></div>
                <div class="main-bot-nr-kp-k-n">
                  <span class="ox1">电报Telegram下载教程</span>
                  <span class="oxx1">下载教程</span>
                </div>
              </div>
            </a>
            <a href="https://zhuanqian.assiw.xyz/lxwm.html" class="main-bot-nr-kp">
              <div class="main-bot-nr-kp-k">
                <div class="main-bot-nr-kp-k-img"><img src="https://th.bing.com/th/id/OIP.VnqbqHI999-VVVkUOWBcMwAAAA?rs=1&pid=ImgDetMain" alt="" class="kkk"></div>
                <div class="main-bot-nr-kp-k-n">
                  <span class="ox1">联系我们</span>
                  <span class="oxx1">点我回到主页</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="footer">
        Copyright © 2017 - <span>2025</span> <a href="http://assiw.xyz" class="footer-link">ASSIW赚钱兼职项目发布</a> All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("\n %c \u82CF\u753B %c http://assiw.xyz \n", "color: #fadfa3; background: #030307; padding:5px 0; font-size:12px;", "background: #fadfa3; padding:5px 0; font-size:12px;");

    // 加载背景图片
    fetch('./beijin.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('网络响应错误');
        }
        return response.json();
      })
      .then(images => {
        if (images.length > 0) {
          // 随机选择一张图片
          const randomImage = images[Math.floor(Math.random() * images.length)];
          const bgElement = document.querySelector('.background-dynamic');
          document.body.style.backgroundSize = 'cover'; // 让图片覆盖整个页面
          document.body.style.backgroundPosition = 'center'; // 图片居中
          document.body.style.backgroundAttachment = 'fixed'; // 固定背景

          // 设置背景图片
          bgElement.style.backgroundImage = `url('./${randomImage}')`;
          bgElement.style.backgroundSize = 'cover';
          bgElement.style.backgroundPosition = 'center';
          bgElement.style.backgroundAttachment = 'fixed';
        }
      })
      .catch(error => {
        console.error('加载图片时出错:', error);
      });
  }
}
</script>

<style scoped>
/* 隐藏所有滑轨 */
::-webkit-scrollbar {
  display: none; /* Safari 和 Chrome */
}
body {
  overflow: auto; /* 允许滚动 */
}
</style>
