<template>
  <div v-if="siteLinks[0]" class="links">
    <div class="line">
      <Icon size="20">
        <Link />
      </Icon>
      <span class="title">网站列表</span>
    </div>
    <!-- 网站列表 -->
    <Swiper
      v-if="siteLinks[0]"
      :modules="[Pagination, Mousewheel]"
      :slides-per-view="1"
      :space-between="40"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true,
        bulletElement: 'div',
      }"
      :mousewheel="true"
    >
      <SwiperSlide v-for="site in siteLinksList" :key="site">
        <el-row class="link-all" :gutter="20">
          <el-col v-for="(item, index) in site" :span="8" :key="item">
            <div
              class="item cards"
              :style="index < 3 ? 'margin-bottom: 20px' : null"
              @click="jumpLink(item)"
            >
              <div class="icon-and-name">
                <Icon size="26">
                  <component :is="siteIcon[item.icon]" />
                </Icon>
                <span 
                  class="name text-hidden" 
                  :style="{ color: item.name === '兼职-线报-投稿' || item.name === '网站业务客服' ? '#00FF00' : 'inherit' }"
                >
                  {{ item.name }}
                </span>
              </div>
              <!-- 添加介绍 -->
              <div v-if="item.description" class="description">{{ item.description }}</div>
            </div>
          </el-col>
        </el-row>
      </SwiperSlide>
      <div class="swiper-pagination" />
    </Swiper>
    <Sett v-if="showSetComponent" @close="showSetComponent = false" /> <!-- 替换为Sett组件 -->
    <component :is="currentComponent" v-if="currentComponent" ref="dynamicComponentRef" /> <!-- 动态加载组件 -->
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import { Icon } from "@vicons/utils";
// 可前往 https://www.xicons.org 自行挑选并在此处引入
import { Link, Blog, CompactDisc, Cloud, Compass, Book, Fire, LaptopCode } from "@vicons/fa"; // 注意使用正确的类别
import { mainStore } from "@/store";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Mousewheel } from "swiper/modules";
import siteLinks from "@/assets/siteLinks.json";
import { Telegram } from "@icon-park/vue-next";
import lxwm from "@/components/lxwm.vue";
import Sett from "@/components/Sett.vue"; // 引入Sett.vue
import TGpingdao from "@/components/TGpingdao.vue";
import gouwuche from "@/components/gouwuche.vue";
import zhuanqian from "@/components/zhuanqian.vue";
import yunduan from "@/components/yunduan.vue";
import Boxx from '@/views/Boxx/Boxx.vue'; // 引入 Boxx 组件
//import xiangmu from '@/views/xiangmu/xiangmu.vue';
import xiangmu1 from '@/views/xiangmu/xiangmu1.vue'; 
import youqin2 from '@/views/xiangmu/youqin2.vue'; 
import lxwm33 from '@/views/xiangmu/lxwm33.vue'; 
import mianfeiziyuan from '@/views/xiangmu/mianfeiziyuan.vue'; 
import fakaxigua from '@/views/xiangmu/fakaxigua.vue'; // 引入 xiangmu 组件
import YourComponent from '@/components/YourComponent.vue'; // 引入 YourComponent 组件
import xinxiLinks from '@/components/xinxiLinks.vue';
//import youqin from '@/components/youqin.vue'; // 引入 xiangmu 组件

const store = mainStore();
const showSetComponent = ref(false); // 控制Set组件显示
const currentComponent = ref(null); // 控制动态组件显示
const dynamicComponentRef = ref(null); // 引用动态组件实例

// 计算网站链接
const siteLinksList = computed(() => {
  const result = [];
  for (let i = 0; i < siteLinks.length; i += 6) {
    const subArr = siteLinks.slice(i, i + 6);
    result.push(subArr);
  }
  return result;
});

// 网站链接图标
const siteIcon = {
  Blog,
  Cloud,
  CompactDisc,
  Compass,
  Book,
  Fire,
  LaptopCode,
  TGpingdao,
  gouwuche,
  zhuanqian,
  yunduan,
  lxwm,
  Boxx,
  Sett, // 添加Sett.vue
  YourComponent, // 添加 YourComponent
  xinxiLinks,
};

// 链接跳转
const jumpLink = (data) => {
  if (data.name === "网站业务客服") {
    currentComponent.value = lxwm33; // 显示Sett组件
    nextTick(() => {
      dynamicComponentRef.value?.show(); // 调用 Boxx 组件的 show 方法
    });
  } else if (data.name === "合作商发卡网") {
    currentComponent.value = fakaxigua; // 显示Boxx组件
    nextTick(() => {
      dynamicComponentRef.value?.show(); // 调用 Boxx 组件的 show 方法
    });
  } else if (data.name === "兼职-线报-投稿") {
    currentComponent.value = xiangmu1; // 显示 xiangmu 组件
    nextTick(() => {
      dynamicComponentRef.value?.show(); // 调用 xiangmu 组件的 show 方法
    });
  } else if (data.name === "看片-资源-工具") {
    currentComponent.value = youqin2; // 显示 xiangmu 组件
    nextTick(() => {
      dynamicComponentRef.value?.show(); // 调用 xiangmu 组件的 show 方法
    });
  } else if (data.name === "友情链接") {
    currentComponent.value = mianfeiziyuan; // 显示 xiangmu 组件
    nextTick(() => {
      dynamicComponentRef.value?.show(); // 调用 xiangmu 组件的 show 方法
    });
    
    
  } else if (data.name === "YourComponentName") { // 替换为 YourComponent 的实际名称
    currentComponent.value = YourComponent; // 显示 YourComponent 组件
    nextTick(() => {
      dynamicComponentRef.value?.show(); // 调用 YourComponent 组件的 show 方法
    });
  } else if (data.name === "音乐" && store.musicClick) {
    if (typeof $openList === "function") $openList();
  } else {
    window.open(data.link, "_blank");
  }
};

onMounted(() => {
  console.log(siteLinks);
});
</script>

<style lang="scss" scoped>
.links {
  .line {
    margin: 2rem 0.25rem 1rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    animation: fade 0.5s;
    .title {
      margin-left: 8px;
      font-size: 1.15rem;
      text-shadow: 0 0 5px #00000050;
    }
  }
  .swiper {
    left: -10px;
    width: calc(100% + 20px);
    padding: 5px 10px 0;
    z-index: 0;
    .swiper-slide {
      height: 100%;
    }
    .swiper-pagination {
      margin-top: 12px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      :deep(.swiper-pagination-bullet) {
        background-color: #fff;
        width: 20px;
        height: 4px;
        margin: 0 4px;
        border-radius: 4px;
        opacity: 0.2;
        transition: opacity 0.3s;
        &.swiper-pagination-bullet-active {
          opacity: 1;
        }
        &:hover {
          opacity: 1;
        }
      }
    }
  }
  .link-all {
    height: 220px;
    .item {
      height: 100px;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column; /* 垂直方向排列 */
      justify-content: center;
      padding: 10px; /* 内边距 */
      animation: fade 0.5s;
      text-align: center; /* 内容居中对齐 */

      &:hover {
        transform: scale(1.02);
        background: rgb(0 0 0 / 40%);
        transition: 0.3s;
      }

      &:active {
        transform: scale(1);
      }

      .icon-and-name {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 5px; /* 图标和名称下方的间距 */
      }

      .name {
        font-size: 1.1rem;
        margin-left: 8px;
      }

      .description {
        font-size: 0.9rem; /* 介绍字体大小 */
        margin-top: 5px; /* 介绍上边距 */
        text-align: center; /* 介绍居中对齐 */
        color: #ccc; /* 介绍文字颜色 */
      }

      @media (min-width: 720px) and (max-width: 820px) {
        .name {
          display: none;
        }
      }
      @media (max-width: 720px) {
        height: 80px;
      }
      @media (max-width: 460px) {
        .icon-and-name {
          flex-direction: column;
        }
        .name {
          font-size: 1rem;
          margin-left: 0;
          margin-top: 8px;
        }
      }
    }
    @media (max-width: 720px) {
      height: 180px;
    }
  }
}
</style>
