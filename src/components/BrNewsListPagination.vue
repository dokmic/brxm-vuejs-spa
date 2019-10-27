<template>
  <nav aria-label="News List Pagination">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !pageable.previous }">
        <router-link :to="previousUrl" class="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </router-link>
      </li>
      <li v-for="(page, key) in pageable.pageNumbersArray" :key="key"
        class="page-item" :class="{ active: page === pageable.currentPage }">
        <router-link :to="getPageUrl(page)" class="page-link">{{ page }}</router-link>
      </li>
      <li class="page-item" :class="{ disabled: !pageable.next }">
        <router-link :to="nextUrl" class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { ContainerItem, Page } from '@bloomreach/spa-sdk';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  computed: {
    nextUrl(this: BrNewsListPagination) {
      return this.pageable.next
        ? this.getPageUrl(this.pageable.nextPage!)
        : '#';
    },
    previousUrl(this: BrNewsListPagination) {
      return this.pageable.previous
        ? this.getPageUrl(this.pageable.previousPage!)
        : '#';
    },
  },
  name: 'br-news-list-pagination',
})
export default class BrNewsListPagination extends Vue {
  @Prop() pageable!: Pageable;

  @Prop() page!: Page;

  getPageUrl(page: number) {
    const url = this.page.getUrl();

    return `${url}${url.includes('?') ? '&' : '?'}page=${page}`;
  }
}
</script>
