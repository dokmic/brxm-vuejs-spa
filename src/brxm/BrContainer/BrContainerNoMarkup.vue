<template>
  <br-container container-wrapper="fragment">
    <slot />
  </br-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BrContainer from './BrContainer.vue';

@Component({
  components: { BrContainer },
  name: 'br-container-no-markup',
})
export default class BrContainerNoMarkup extends Vue {}
</script>
