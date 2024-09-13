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
         <div class="buju">
          <div style="text-align: center;color: red;"><h2>🔥壁纸资源下载-记住我们的唯一地址：ASSIW.xyz </h2>
          <div class="link-container">
            <a href="https://wallhaven.cc/" class="aniu">Wallhaven</a>
            <a href="https://wallhere.com/" class="aniu">WallHere</a>
            <a href="http://wallpaperswide.com/" class="aniu">WallpapersWide</a>
            <a href="https://wall.alphacoders.com/" class="aniu">Wallpaper Abyss</a>
            <a href="https://beta.digitalblasphemy.com/" class="aniu">Digitalblasphemy</a>
          </div>
         </div>
          <div style="text-align: center; color: red;"><h2>🔥二次元壁纸</h2>
          <div class="link-container">
            <a href="https://adzhp.xyz/sites/2751.html" class="aniu">Pixiv</a>
            <a href="https://www.zerochan.net/" class="aniu">zerochan</a>
            <a href="https://konachan.net/post" class="aniu">konachan</a>
            <a href="https://anime-pictures.net/" class="aniu">anime-pictures</a>
            <a href="https://www.wallpapermaiden.com/" class="aniu">Wallpapermaiden</a>
            <a href="https://www.reddit.com/r/wallpaper/" class="aniu">壁纸论坛 | Reddit Wallpaper</a>
          </div>
        </div>
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

</script>


<style lang="scss" scoped>
.buju {
  .link-container {
    display: flex;
    flex-wrap: wrap; /* 自动换行 */
    gap: 10px; /* 元素间距 */
    justify-content: center; /* 水平居中 */
    overflow-x: auto; /* 添加水平滚动条 */
    scrollbar-width: thin; /* Firefox 滚动条宽度 */
    scrollbar-color: rgba(0, 0, 0, 0.4) transparent; /* Firefox 滚动条颜色 */
  }

  .link-container::-webkit-scrollbar {
    height: 8px; /* 滚动条高度 */
  }

  .link-container::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.4); /* 滚动条滑块颜色 */
    border-radius: 6px; /* 滚动条滑块圆角 */
  }

  .link-container::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.6); /* 滚动条滑块悬停颜色 */
  }

  .aniu {
    height: 100px; /* 自动高度 */
    width: 48%; /* 每行两个 */
    display: inline-block; /* 行内块级元素 */
    padding: 10px; /* 内边距 */
    background: rgba(0, 0, 0, 0.4); /* 背景颜色和透明度 */
    border-radius: 6px; /* 边框圆角 */
    display: flex; /* 使用flex布局 */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    cursor: pointer; /* 鼠标指针样式 */
    transition: transform 0.3s, background 0.3s; /* 过渡效果 */
    margin-top: 20px; /* 添加顶部边距20px */

    &:hover {
      transform: scale(1.02); /* 鼠标悬停时放大 */
      background: rgba(0, 0, 0, 0.6); /* 鼠标悬停时背景颜色和透明度 */
    }

    &:active {
      transform: scale(1); /* 鼠标按下时恢复原状 */
    }
  }

  h2 {
    font-size: 1.2rem; /* 缩小字体 */

    display: flex;
    flex-wrap: wrap; /* 自动换行 */
    width: 70%; /* 宽度百分之70 */
    gap: 10px; /* 元素间距 */
    align-items: center; /* 垂直居中 */
  
  }


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

.link-container {
  display: flex;
  flex-wrap: wrap; /* 自动换行 */
  gap: 10px; /* 元素间距 */
}

.aniu {
  height: 100px; /* 自动高度 */
  width: 150px; /* 自动宽度 */
  display: inline-block; /* 行内块级元素 */
  padding: 10px; /* 内边距 */
  background: rgba(0, 0, 0, 0.4); /* 背景颜色和透明度 */
  border-radius: 6px; /* 边框圆角 */
  display: flex; /* 使用flex布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  cursor: pointer; /* 鼠标指针样式 */
  transition: transform 0.3s, background 0.3s; /* 过渡效果 */
  margin-top: 20px; /* 添加顶部边距20px */

  &:hover {
    transform: scale(1.02); /* 鼠标悬停时放大 */
    background: rgba(0, 0, 0, 0.6); /* 鼠标悬停时背景颜色和透明度 */
  }

  &:active {
    transform: scale(1); /* 鼠标按下时恢复原状 */
  }
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