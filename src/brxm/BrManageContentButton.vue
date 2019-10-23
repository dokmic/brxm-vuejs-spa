<template>
  <br-meta v-if="page && page.isPreview()" :meta="content.getMeta()" />
</template>

<script lang="ts">
import { Content, Page } from '@bloomreach/spa-sdk';
import { Component, InjectReactive, Prop, Vue } from 'vue-property-decorator';
import BrMeta from './BrMeta.vue';

@Component({
  components: { BrMeta },
  name: 'br-manage-content-button',
})
export default class BrManageContentButton extends Vue {
  @Prop() content!: Content;

  @InjectReactive() page?: Page;
}
</script>
