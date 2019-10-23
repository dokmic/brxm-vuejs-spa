<script lang="ts">
import { Page } from '@bloomreach/spa-sdk';
import { Component, InjectReactive, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'br-container' })
export default class BrContainer extends Vue {
  @Prop() containerWrapper!: string;

  @Prop() containerItemWrapper?: string;

  @InjectReactive() page!: Page;

  render(createElement: Vue.CreateElement) {
    const children = !this.containerItemWrapper
      ? this.$slots.default
      : this.$slots.default && this.$slots.default.map(
        node => createElement(
          this.containerItemWrapper,
          { class: { 'hst-container-item': this.page.isPreview() } },
          [node],
        ),
      );

    return createElement(
      this.containerWrapper,
      {
        class: { 'hst-container': this.page.isPreview() },
      },
      children,
    );
  }
}
</script>
