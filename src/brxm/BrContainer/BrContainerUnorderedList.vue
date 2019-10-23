<template>
  <br-container container-wrapper="ul" container-item-wrapper="li">
    <slot />
  </br-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BrContainer from './BrContainer.vue';

@Component({
  components: { BrContainer },
  name: 'br-container-unordered-list',
})
export default class BrContainerUnorderedList extends Vue {}
</script>
