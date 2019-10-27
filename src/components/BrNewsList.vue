<template>
  <div v-if="pageable">
    <br-news-list-item v-for="(item, key) in pageable.items" :key="key"
      :content="page.getContent(item)" :page="page" />
    <br-news-list-pagination v-if="pageable.showPagination" :pageable="pageable" :page="page" />
  </div>
</template>

<script lang="ts">
import { ContainerItem, Page } from '@bloomreach/spa-sdk';
import { Component, Prop, Vue } from 'vue-property-decorator';
import BrNewsListItem from './BrNewsListItem.vue';
import BrNewsListPagination from './BrNewsListPagination.vue';

@Component({
  components: {
    BrNewsListItem,
    BrNewsListPagination,
  },
  computed: {
    pageable(this: BrNewsList) {
      const { pageable } = this.component.getModels<PageableModels>();

      return pageable;
    },
  },
  name: 'br-news-list',
})
export default class BrNewsList extends Vue {
  @Prop() component!: ContainerItem;

  @Prop() page!: Page;
}
</script>
