<template>
  <div v-if="document" class="jumbotron mb-3" :class="{ 'has-edit-button': page.isPreview() }">
    <br-manage-content-button :content="document" />
    <h1 v-if="data.title">{{ data.title }}</h1>
    <img v-if="image" class="img-fluid" :src="image.getUrl()" :alt="data.title" />
    <div v-if="data.content" v-html="page.rewriteLinks(data.content.value)" />
    <p v-if="link" className="lead">
      <router-link :to="link.getUrl()" className="btn btn-primary btn-lg" role="button">
        Learn more
      </router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { ContainerItem, Content, Page } from '@bloomreach/spa-sdk';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  computed: {
    data(this: BrBanner) {
      return this.document && this.document.getData<DocumentData>();
    },

    document(this: BrBanner) {
      const { document: documentRef } = this.component.getModels<DocumentModels>();

      return documentRef && this.page.getContent(documentRef);
    },

    image(this: BrBanner) {
      return this.data && this.data.image && this.page.getContent(this.data.image);
    },

    link(this: BrBanner) {
      return this.data && this.data.link && this.page.getContent(this.data.link);
    },
  },
  name: 'br-banner',
})
export default class BrBanner extends Vue {
  @Prop() component!: ContainerItem;

  @Prop() page!: Page;

  data?: DocumentData;

  document?: Content;

  image?: Content;

  link?: Content;
}
</script>
