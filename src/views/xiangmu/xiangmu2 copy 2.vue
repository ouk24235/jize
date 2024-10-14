<template>
    <div>
        <a href="https://zhuanqian.assiw.xyz/zhuanqian/index.html" id="homeButton">🏠返回</a>
        <div class="assiw-container">
            <h2 style="color: #ff4500;">🔥租赁项目</h2>
            <p style="color: #32cd32;">🔥 本篇为项目介绍</p>
            <p style="color: #32cd32;">🔥 0成本 一手项目 利润给足</p>
            <p style="color: #32cd32;">🔥 每单可反佣金300-800</p>
            <p style="color: #32cd32;">🔥 在家有一部手机就能做</p>

            <h4 class="highlight">项目简介👇:</h4>
            <ul>
                <li style="color: #ffffff;">1. 提供通过租赁商品获取佣金的在家兼职机会，无需资金投入，利润丰厚。只需一部手机，完成下单即可获得300-800元佣金。</li>
                <li style="color: #ffffff;">2. 项目旨在提升店铺信誉，包括增加订单数量、交易金额及好评率。</li>
                <li style="color: #ffffff;">3. 支持支付宝和微信结算，单笔订单平均佣金为300-800元。</li>
                <li style="color: #ffffff;">4. 800佣金的订单（<span style="color: #ffcc00;">需养号，做成常驻客户，以符合条件</span>）。</li>
                <li style="color: #ffffff;">5. 代理拉新，一个人80元，多拉多得。</li>
                <li style="color: #ffffff;">6. 目前我们优先接受<span style="color: #ffcc00;">高信用</span>用户，严禁涉黑涉恶人员参与。联系方式包括Telegram、QQ和微信。</li>
            </ul>
            <h4 class="highlight">正文👇：</h4>
            <h3 style="color: #ffcc00;">❓ 我们如何获利？</h3>
            <ul>
                <li style="color: #ffffff;">根据商家做店铺运营店铺需要信誉分考核需求，刷三类数据：</li>
                <li class="highlight">店铺订单数</li>
                <li class="highlight">店铺订单质量</li>
                <li class="highlight">店铺好评率</li>
            </ul>

            <h3 style="color: #ffcc00;">💵 如何获得佣金</h3>
            <ul>
                <li style="color: #ffffff;">我们在多个店铺发布多个商品。做单人员选择客服指定商品下单成功租赁，提供订单截图给负责人员结算佣金。</li>
                <li style="color: #ffffff;">具体操作流程请联系下方客服，下方客服指导操作流程</li>
            </ul>

            <h3 style="color: #ffcc00;">💡 客户如何操作</h3>
            <ul>
                <li style="color: #ffffff;">为确保顺利参与，您的芝麻分需在<span style="color: #ffcc00;">600分</span>以上；若低于600分，则无法进行操作流程。</li>
                <li style="color: #ffffff;">下载并登录悠悠有品APP（请在手机应用商店下载，避免遇到假冒APP）。</li>
                <li style="color: #ffffff;">为保证账号安全，需要用户自行注册一个悠悠有品账号</li>
                <li style="color: #ffffff;">客服选择指定商品。</li>
                <li style="color: #ffffff;">用户免押下单即可，中途无任何费用，平均一单5-20分钟可以做完。</li>
            </ul>

            <h3 style="color: #ffcc00;">🧧 结算体系</h3>
            <ul>
                <li style="color: #ffffff;">用户：提供成功租赁订单的截图给上级，把收款方式和订单截图发给上级后。</li>
                <li style="color: #ffffff;">上级会现场结算，请提供自己的收款方式，防止诈骗人员。</li>
                <li><span style="color: #ffcc00;">结账支持：</span>支付宝，微信，口令或者扫码。</li>
                <li style="color: #ffffff;">成功收到打款前后请保持联系方式通畅，避免找不到人，浪费我们的时间。</li>
            </ul>

            <h3 style="color: #ffcc00;">👨‍👨‍👦‍👦 客户群体</h3>
            <ul>
                <li style="color: #ffffff;">目前我们优先接受信用良好的用户订单，以确保合作顺利进行。</li>
                <li style="color: #ffffff;">客户年龄区间在20-60之间，能熟练操作手机的。</li>
                <li style="color: #ffffff;">杜绝涉黑涉恶人员，防止卷款跑路。</li>
                <li style="color: #ffffff;">请未成年人不要参与网络活动</li>
            </ul>

            <h3 style="color: #ffcc00;">👦‍联系我们</h3>
            <p style="color: #ffffff;">该项目负责人Telegram；<a href="https://t.me/Assiw8" target="_blank" style="color: #00bfff;">@Assiw8（点击跳转）</a></p>
            <p style="color: #ffffff;">
                负责人QQ；<span style="color: #ff4500; cursor: pointer;" id="qqNumber" @click="copyQQ('3851456810')">3851456810（手机用户点我复制并打开QQ）</span>
            </p>
            <p style="color: #ffffff;">备用QQ；<span style="color: #ff4500; cursor: pointer;" id="qqNumberBackup" @click="copyQQ('924160568')">924160568</span></p>

            <p style="color: #ffffff;">最新确认时间：<span id="currentDate" class="highlight">{{ currentDate }}</span></p>
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

<style scoped>
/* 全局应用 box-sizing: border-box */
*, *::before, *::after {
    box-sizing: border-box;
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

.assiw-container {
    width: 1000px; /* 设置容器的最大宽度为 800 像素 */
    padding: 20px; /* 设置容器的内边距，确保内容不紧贴边缘 */
    background-color: rgba(0, 0, 0, 0); /* 设置容器背景为半透明黑色 */
    backdrop-filter: blur(10px); /* 背景模糊效果，增强层次感 */
    border-radius: 10px; /* 设置圆角边框，提升视觉效果 */
    color: #ffffff; /* 设置文本颜色为白色 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* 添加阴影效果，使容器有立体感 */
    overflow-y: auto; /* 允许容器内部垂直滚动，当内容超出容器高度时显示滚动条 */
    max-height: calc(100vh - 40px); /* 限制容器的最大高度，适应视口减去 body 的 padding */
    scrollbar-width: none; /* Firefox 隐藏滑轨 */
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
    color: #ff4500;
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
        padding: 10px; /* 在小屏幕上减少内边距 */
        width: 90%;
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
