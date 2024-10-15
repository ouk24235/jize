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
      <div class="more-content">
        <h2 class="top-title">项目列表</h2> <!-- 置顶标题 -->
        <div class="link-all">
          <div class="item" v-for="link in xinxiLinks" :key="link.name" @click="loadComponent(link.link)">
            <i :class="link.icon"></i>
            <span :class="link.name === '租赁反佣金(hot🔥)' ? 'yellow-text' : (link.name === '快手抖音关注单' || link.name === '视频代发' ? 'red-text' : '')">{{ link.name }}</span> <!-- 条件渲染 -->
            <div class="description">{{ link.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>  
  <component :is="currentComponent" v-if="currentComponent" @close="show" />
</template>

<script setup>
import { ref, defineEmits, defineExpose } from 'vue';


import daifa from '@/views/xmzujian/daifa.vue'; // 新增导入
import douyin from '@/views/xmzujian/douyin.vue'; // 新增导入
import qqkuolie from '@/views/xmzujian/qqkuolie.vue'; // 新增导入
import usdt from '@//views/xmzujian/usdt.vue'; // 新增导入
import zulin from '@/views/xmzujian/zulin.vue'; // 新增导入
import vxzhuc from '@/views/xmzujian/vxzhuc.vue'; // 新增导入

const emit = defineEmits(['close']);
const isVisible = ref(true);
const currentComponent = ref(null);

const close = () => {
isVisible.value = false;
emit('close');
};

// 新增方法用于重新显示内容
const show = () => {
isVisible.value = true;
currentComponent.value = null; // 清除当前组件
};

// 公开 show 方法
defineExpose({ show });

// 定义 JSON 数据
const xinxiLinks = ref([
{
  name: "租赁反佣金(hot🔥)", // 加红
  icon: "i-icon-new", // 假设有一个新的图标类
  link: "zulin", // 新增链接
  description: "一单利润300-1000" // 新增介绍
},

{
  name: "视频代发",
  icon: "i-icon-new", // 假设有一个新的图标类
  link: "daifa", // 新增链接
  description: "一个平台5-10元" // 新增介绍
},
{
  name: "快手抖音关注单",
  icon: "i-icon-new", // 假设有一个新的图标类
  link: "douyin", // 新增链接
  description: "无任何收费，一个关注1-2元" // 新增介绍
},
{
  name: "QQ扩列",
  icon: "i-icon-new", // 假设有一个新的图标类
  link: "qqkuolie", // 新增链接
  description: "1个人1-5块" // 新增介绍
},
{
  name: "USDT兑换",
  icon: "i-icon-new", // 假设有一个新的图标类
  link: "usdt", // 新增链接
  description: "（利润较高 但门槛高 且需要本本金）" // 新增介绍
},

{
  name: "微信辅助注册",
  icon: "i-icon-new", // 假设有一个新的图标类
  link: "vxzhuc", // 新增链接
  description: "微信辅助注册-一单12" // 新增介绍
},
]);

// 引用 .vue 文件
const loadComponent = (link) => {
isVisible.value = false; // 隐藏当前页面
if (link === 'vxzhuc') {
  currentComponent.value = vxzhuc;
}
 else if (link === 'daifa') { // 新增条件
  currentComponent.value = daifa; // 新增组件
} else if (link === 'douyin') { // 新增条件
  currentComponent.value = douyin; // 新增组件
} else if (link === 'qqkuolie') { // 新增条件
  currentComponent.value = qqkuolie; // 新增组件
} else if (link === 'usdt') { // 新增条件
  currentComponent.value = usdt; // 新增组件
} else if (link === 'zulin') { // 新增条件
  currentComponent.value = zulin; // 新增组件
} 


};
</script>

<style lang="scss" scoped>

.red-text {
  color: rgba(255, 0, 0, 0.562);
  font-weight: bold; // 加粗
  font-size: 1.1em; // 字体放大1.3倍

}
.yellow-text {
  color: rgb(255, 64, 0);
  font-weight: bold; // 加粗
  font-size: 1.2em; // 字体放大1.3倍

}
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
width: 55%;
height: 80%;
background: rgba(255, 255, 255, 0.0); /* 半透明背景 */
backdrop-filter: blur(10px); /* 模糊效果 */
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

.content {
  width: 100%;
  height: calc(100% - 40px); /* 减去 padding 的高度 */
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
}

.content h2, .content h3 {
  font-size: 1.2rem; /* 调整标题字体大小 */
}

.content p, .content ul, .content li {
  font-size: 0.9rem; /* 调整段落和列表字体大小 */
}
}

/* 新增样式 */
.more-content {
display: flex;
flex-direction: column; /* 垂直方向排列 */
align-items: center; /* 水平居中 */
justify-content: flex-start; /* 顶部对齐 */
margin-top: 20px;
width: 100%;
height: 100%;
}

.link-all {
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 10px;
margin-top: 30px; /* 增加顶部间距 */
}

.item {
height: 100px; /* 项目高度 */
width: 266px; /* 项目宽度 */
display: flex; /* 使用flex布局 */
align-items: center; /* 垂直居中 */
flex-direction: column; /* 垂直方向排列 */
justify-content: center; /* 水平居中 */
padding: 10px; /* 内边距 */
background: rgba(0, 0, 0, 0.4); /* 背景颜色和透明度 */
border-radius: 6px; /* 边框圆角 */
cursor: pointer; /* 鼠标指针样式 */
transition: transform 0.3s, background 0.3s; /* 过渡效果 */

&:hover {
  transform: scale(1.02); /* 鼠标悬停时放大 */
  background: rgba(0, 0, 0, 0.6); /* 鼠标悬停时背景颜色和透明度 */
}

&:active {
  transform: scale(1); /* 鼠标按下时恢复原状 */
}

@media (max-width: 768px) {
  width: 80%; /* 当手机访问时宽度为百分之48 */
}

.name {
  font-size: 1.1rem; /* 名称字体大小 */
  margin-top: 0px; /* 名称上边距 */
  text-align: center; /* 名称居中对齐 */
}

.description {
  font-size: 0.9rem; /* 介绍字体大小 */
  margin-top: 5px; /* 介绍上边距 */
  text-align: center; /* 介绍居中对齐 */
  color: #ff0000; /* 介绍文字颜色 */
}
}

.top-title {
position: absolute;
top: 20px;
font-size: 1.5rem;
color: red;
}
</style>