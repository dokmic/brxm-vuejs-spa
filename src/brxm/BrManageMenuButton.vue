<template>
  <br-meta v-if="page && page.isPreview()" :meta="page.getMeta(menu._meta)" />
</template>

<script lang="ts">
import { Menu, Page } from '@bloomreach/spa-sdk';
import { Component, InjectReactive, Prop, Vue } from 'vue-property-decorator';
import BrMeta from './BrMeta.vue';

@Component({
  components: { BrMeta },
  name: 'br-manage-menu-button',
})
export default class BrManageMenuButton extends Vue {
  @Prop() menu!: Menu;

  @InjectReactive() page?: Page;
}
</script>
