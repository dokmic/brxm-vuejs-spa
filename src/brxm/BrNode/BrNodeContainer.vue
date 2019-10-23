<template>
  <br-container-inline v-if="container.getType() === TYPE_CONTAINER_INLINE">
    <slot />
  </br-container-inline>

  <br-container-no-markup v-else-if="container.getType() === TYPE_CONTAINER_NO_MARKUP">
    <slot />
  </br-container-no-markup>

  <br-container-ordered-list v-else-if="container.getType() === TYPE_CONTAINER_ORDERED_LIST">
    <slot />
  </br-container-ordered-list>

  <br-container-unordered-list v-else-if="container.getType() === TYPE_CONTAINER_UNORDERED_LIST">
    <slot />
  </br-container-unordered-list>

  <br-container-box v-else>
    <slot />
  </br-container-box>
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
import BrContainerBox from '../BrContainer/BrContainerBox.vue';
import BrContainerInline from '../BrContainer/BrContainerInline.vue';
import BrContainerNoMarkup from '../BrContainer/BrContainerNoMarkup.vue';
import BrContainerOrderedList from '../BrContainer/BrContainerOrderedList.vue';
import BrContainerUnorderedList from '../BrContainer/BrContainerUnorderedList.vue';

@Component({
  components: {
    BrContainerBox,
    BrContainerInline,
    BrContainerNoMarkup,
    BrContainerOrderedList,
    BrContainerUnorderedList,
  },
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
