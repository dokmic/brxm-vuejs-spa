<template>
  <div v-if="page" :component="root">
    <slot :component="root" :page="page" />
  </div>
</template>

<script lang="ts">
import { Configuration, Page, initialize, destroy } from '@bloomreach/spa-sdk';
import { Component, Prop, ProvideReactive, Vue, Watch } from 'vue-property-decorator';

@Component({
  computed: {
    root(this: BrPage) {
      return this.page && this.page.getComponent();
    },
  },
  data: () => ({ page: undefined }),
  name: 'br-page',
})
export default class BrPage extends Vue {
  @Prop() config!: Configuration;

  @ProvideReactive() page?: Page;

  destroyed() {
    this.destroy();
  }

  mounted() {
    this.sync();
  }

  updated() {
    this.sync();
  }

  private destroy() {
    if (this.page) {
      destroy(this.page);
    }
  }

  private sync() {
    if (this.page) {
      this.page.sync();
    }
  }

  @Watch('config', { immediate: true, deep: true })
  private async update() {
    this.destroy();
    this.page = await initialize(this.config);
  }
}
</script>
