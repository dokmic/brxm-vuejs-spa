<template>
  <div class="card mb-3">
    <div class="card-body" :class="{ 'has-edit-button': page.isPreview() }">
      <br-manage-content-button :content="content" />
      <h2 v-if="data.title" class="card-title">
        <router-link :to="content.getUrl()">{{ data.title }}</router-link>
      </h2>
      <div v-if="data.author" class="card-subtitle mb-3 text-muted">
        {{ data.author }}
      </div>
      <div v-if="data.date" class="card-subtitle mb-3 small text-muted">
        {{ formatDate(data.date) }}
      </div>
      <p v-if="data.introduction" class="card-text">
        {{ data.introduction }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Content, Page } from '@bloomreach/spa-sdk';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  computed: {
    data(this: BrNewsListItem) {
      return this.content.getData<DocumentData>();
    },
  },
  methods: {
    formatDate(date: number) {
      return new Date(date).toDateString();
    },
  },
  name: 'br-news-list-item',
})
export default class BrNewsListItem extends Vue {
  @Prop() content!: Content;

  @Prop() page!: Page;
}
</script>
