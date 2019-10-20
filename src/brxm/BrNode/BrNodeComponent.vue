<template>
  <br-meta :meta="component.getMeta()">
    <slot>
      <div v-if="isContainerItem(component)" />

      <div v-else-if="isContainer(component)">
        <br-node-component
          v-for="(component, key) in component.getChildren()" :key="key"
          :component="component" />
      </div>

      <br-node-component
        v-else
        v-for="(component, key) in component.getChildren()" :key="key"
        :component="component" />
    </slot>
  </br-meta>
</template>

<script lang="ts">
import { Component as SpaComponent, isContainerItem, isContainer } from '@bloomreach/spa-sdk';
import { Component, Prop, Provide, Vue } from 'vue-property-decorator';
import BrMeta from '../BrMeta.vue';

@Component({
  components: { BrMeta },
  methods: {
    isContainerItem,
    isContainer,
  },
  name: 'br-node-component',
})
export default class BrNodeComponent extends Vue {
  @Prop() component!: SpaComponent;

  @Provide() // ProvideReactive doesn't work for recursive components
  private $component() {
    return this.component;
  }
}
</script>
