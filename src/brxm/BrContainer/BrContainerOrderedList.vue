<template>
  <br-container container-wrapper="ol" container-item-wrapper="li">
    <slot />
  </br-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BrContainer from './BrContainer.vue';

@Component({
  components: { BrContainer },
  name: 'br-container-ordered-list',
})
export default class BrContainerOrderedList extends Vue {}
</script>
