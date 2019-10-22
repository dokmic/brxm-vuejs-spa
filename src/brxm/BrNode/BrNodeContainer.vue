<template>
  <div v-if="container.getType() === TYPE_CONTAINER_INLINE">
    <slot />
  </div>

  <div v-else-if="container.getType() === TYPE_CONTAINER_NO_MARKUP">
    <slot />
  </div>

  <div v-else-if="container.getType() === TYPE_CONTAINER_ORDERED_LIST">
    <slot />
  </div>

  <div v-else-if="container.getType() === TYPE_CONTAINER_UNORDERED_LIST">
    <slot />
  </div>

  <div v-else>
    <slot />
  </div>
</template>

<script lang="ts">
import {
  Container,
  TYPE_CONTAINER_INLINE,
  TYPE_CONTAINER_NO_MARKUP,
  TYPE_CONTAINER_ORDERED_LIST,
  TYPE_CONTAINER_UNORDERED_LIST,
} from '@bloomreach/spa-sdk';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  data: () => ({
    TYPE_CONTAINER_INLINE,
    TYPE_CONTAINER_NO_MARKUP,
    TYPE_CONTAINER_ORDERED_LIST,
    TYPE_CONTAINER_UNORDERED_LIST,
  }),
  name: 'br-node-container',
})
export default class BrNodeContainer extends Vue {
  @Prop() container!: Container;
}
</script>
