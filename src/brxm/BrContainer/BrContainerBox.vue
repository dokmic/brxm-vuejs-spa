<template>
  <br-container container-wrapper="div" container-item-wrapper="div">
    <slot />
  </br-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BrContainer from './BrContainer.vue';

@Component({
  components: { BrContainer },
  name: 'br-container-box',
})
export default class BrContainerBox extends Vue {}
</script>
