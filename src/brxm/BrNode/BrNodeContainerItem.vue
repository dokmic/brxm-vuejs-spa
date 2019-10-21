<template>
  <component :is="componentName" :component="containerItem" :page="page" />
</template>

<script lang="ts">
import { ContainerItem, Page } from '@bloomreach/spa-sdk';
import { Component, InjectReactive, Prop, Vue, Watch } from 'vue-property-decorator';

const CAMEL_CASE = /\s+(\w)/g;

@Component({
  computed: {
    componentName(this: BrNodeContainerItem) {
      return `br-${this.containerItem.getType()!.replace(CAMEL_CASE, '-$1').toLowerCase()}`;
    },
  },
  name: 'br-node-container-item',
})
export default class BrNodeContainerItem extends Vue {
  @Prop() containerItem!: ContainerItem;

  @InjectReactive() page!: Page;

  private unsubscribe?: Function;

  destroyed() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  @Watch('containerItem', { immediate: true })
  private subscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }

    this.unsubscribe = this.containerItem.on('update', this.onUpdate.bind(this));
  }

  private onUpdate() {
    this.$forceUpdate();
    this.page.sync();
  }
}
</script>
