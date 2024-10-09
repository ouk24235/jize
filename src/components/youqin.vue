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

      <div class="more-content">
        <h2 class="top-title">友情链接--记住 ASSIW.XYZ 防止走丢</h2>
        <h3 class="sub-title">正规影视类：</h3>
        <div class="link-all">
          <div class="item" v-for="link in youqin" :key="link.name" @click="loadComponent(link.link)">
            <i :class="link.icon"></i>
            <span class="name">{{ link.name }}</span>
            <div class="description">{{ link.description }}</div>
          </div>
        </div>

        <hr class="separator" />

        <h3 class="sub-title">老司机福利资源类：</h3>
        <div class="link-all">
          <div class="item" v-for="link in laosiji" :key="link.name" @click="loadComponent(link.link)">
            <i :class="link.icon"></i>
            <span class="name">{{ link.name }}</span>
            <div class="description">{{ link.description }}</div>
          </div>
        </div>

        <hr class="separator" />

        <h3 class="sub-title">工具类：</h3>
        <div class="link-all">
          <div class="item" v-for="link in otherLinks" :key="link.name" @click="loadComponent(link.link)">
            <i :class="link.icon"></i>
            <span class="name">{{ link.name }}</span>
            <div class="description">{{ link.description }}</div>
          </div>
        </div>

        <hr class="separator" />

        <h3 class="sub-title">书籍小说类：</h3>
        <div class="link-all">
          <div class="item" v-for="link in shuji" :key="link.name" @click="loadComponent(link.link)">
            <i :class="link.icon"></i>
            <span class="name">{{ link.name }}</span>
            <div class="description">{{ link.description }}</div>
          </div>
        </div>

        <hr class="separator" />

        <h3 class="sub-title">游戏类：</h3>
        <div class="link-all">
          <div class="item" v-for="link in youxi" :key="link.name" @click="loadComponent(link.link)">
            <i :class="link.icon"></i>
            <span class="name">{{ link.name }}</span>
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
import bizhiziyuan from '@/components/bizhiziyuan.vue';

const emit = defineEmits(['close']);
const isVisible = ref(true);
const currentComponent = ref(null);

const youqin = ref([
  { name: '橘子资源网', icon: '/images/icon/xigua.jpg', link: 'https://www.juzia.cn/', description: '强烈推荐' },

  { name: '资源库', icon: '/images/icon/xigua.jpg', link: 'https://zyku.me/', description: '强烈推荐' },
  { name: '黑木耳资源站', icon: '/images/icon/xigua.jpg', link: 'https://heimuer.tv/', description: '强烈推荐' },
  { name: '咸鱼单机游戏下载', icon: '/images/icon/xigua.jpg', link: 'https://www.xianyudanji.net/', description: '强烈推荐' },
  { name: 'Z-Library书籍资源', icon: '/images/icon/xigua.jpg', link: 'https://zh.singlelogin.re/', description: '强烈推荐' },
]);

const laosiji = ref([
  { name: '老司机链接1', link: 'https://ziyuan.assiw.xyz/', description: '示例描述1' },
]);

const otherLinks = ref([
  { name: '工具链接1', link: 'https://zyku.me/', description: '工具类资源' },
  { name: '小众技术工具库', icon: '/images/icon/xigua.jpg', link: 'https://www.xiaozhongjishu.com/', description: '强烈推荐' },
]);

const shuji = ref([
  { name: '工具链接1', link: 'https://zyku.me/', description: '工具类资源' },
  { name: '小众技术工具库', icon: '/images/icon/xigua.jpg', link: 'https://www.xiaozhongjishu.com/', description: '强烈推荐' },
]);

const youxi = ref([
  { name: '工具链接1', link: 'https://zyku.me/', description: '工具类资源' },
  { name: '小众技术工具库', icon: '/images/icon/xigua.jpg', link: 'https://www.xiaozhongjishu.com/', description: '强烈推荐' },
]);

const close = () => {
  isVisible.value = false;
  emit('close');
};

const show = () => {
  isVisible.value = true;
  currentComponent.value = null;
};

defineExpose({ show });

const loadComponent = (link) => {
  isVisible.value = false;
  if (link === 'bizi') {
    currentComponent.value = bizhiziyuan;
  } else {
    window.open(link, '_blank');
  }
};
</script>

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
  position: relative;
  width: 80%;
  height: auto;
  max-height: 80%;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.0);
  backdrop-filter: blur(20px);
  border-radius: 6px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.close {
  position: absolute;
  top: 14px;
  right: 14px; /* 将关闭按钮放置在右上角 */
  width: 28px;
  height: 28px;
  cursor: pointer;
}

.more-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.link-all {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 电脑端一行显示4个按钮 */
  gap: 10px;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.3s, background 0.3s;
}

.item:hover {
  transform: scale(1.05);
}

.name {
  margin-top: 10px;
  font-size: 1rem;
  color: white;
}

.description {
  margin-top: 5px;
  font-size: 0.8rem;
  color: red;
}

h2 {
  color: red;
  text-align: center;
}

h3 {
  color: orange;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .link-all {
    grid-template-columns: repeat(2, 1fr); /* 手机端一行显示2个按钮 */
    gap: 10px;
  }

  .item {
    padding: 8px;
  }

  .name {
    font-size: 0.9rem; /* 手机端缩小name字体 */
  }

  h2 {
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1rem;
  }
}
</style>
