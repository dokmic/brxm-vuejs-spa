<template>
  <div v-if="document" :class="{ 'has-edit-button': page.isPreview() }">
    <br-manage-content-button :content="document" />
    <img v-if="image" class="img-fluid mb-3" :src="image.getUrl()" :alt="data.title" />
    <h1 v-if="data.title">{{ data.title }}</h1>
    <p v-if="data.author" class="mb-3 text-muted">{{ data.author }}</p>
    <p v-if="data.date" class="mb-3 small text-muted">{{ formatDate(data.date) }}</p>
    <div v-if="data.content" v-html="page.rewriteLinks(data.content.value)" />
  </div>
</template>

<script lang="ts">
import { ContainerItem, Content, Page } from '@bloomreach/spa-sdk';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  computed: {
    data(this: BrContent) {
      return this.document && this.document.getData<DocumentData>();
    },

    document(this: BrContent) {
      const { document: documentRef } = this.component.getModels<DocumentModels>();

      return documentRef && this.page.getContent(documentRef);
    },

    image(this: BrContent) {
      return this.data && this.data.image && this.page.getContent(this.data.image);
    },
  },
  methods: {
    formatDate(date: number) {
      return new Date(date).toDateString();
    },
  },
  name: 'br-content',
})
export default class BrContent extends Vue {
  @Prop() component!: ContainerItem;

  @Prop() page!: Page;

  data?: DocumentData;

  document?: Content;

  image?: Content;
}
</script>
