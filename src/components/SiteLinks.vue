<template>
  <div>
    <ul>
      <li v-for="link in links" :key="link.name">
        <a :href="link.link" @click.prevent="handleClick(link)">{{ link.name }}</a>
      </li>
    </ul>
    <Set v-if="showSet" @close="showSet = false" />
  </div>
</template>

<script>
import Set from '@/components/Set.vue';
import Boxx from '@/views/Boxx/Boxx.vue';
import SiteLinks from '@/components/SiteLinks.vue'; // 引入 SiteLinks.vue 组件

export default {
  data() {
    return {
      links: SiteLinks.data(), // 使用 SiteLinks 组件的数据
      showSet: false,
    };
  },
  methods: {
    handleClick(link) {
      if (link.name === '联系我们' || link.name === '合作商店铺') {
        this.showSet = true;
      } else {
        window.location.href = link.link;
      }
    },
  },
};
</script>
