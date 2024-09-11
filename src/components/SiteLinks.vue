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
import siteLinks from '@/assets/siteLinks.json';
import Set from '@/components/Set.vue';
import Boxx from '@/views/Boxx/Boxx.vue';

export default {
  data() {
    return {
      links: siteLinks,
      showSet: false,
    };
  },
  methods: {
    handleClick(link) {
      if (link.name === '联系我们' || link.name === '店铺正在搭建') {
        this.showSet = true;
      } else {
        window.location.href = link.link;
      }
    },
  },
};
</script>
