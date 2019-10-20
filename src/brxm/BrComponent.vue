<script lang="ts">
import { Component as SpaComponent, Page } from '@bloomreach/spa-sdk';
import { Component, InjectReactive, Inject, Prop, Vue } from 'vue-property-decorator';
import BrNodeComponent from './BrNode/BrNodeComponent.vue';

@Component({
  components: { BrNodeComponent },
  computed: {
    component(this: BrComponent) {
      return this.$component();
    },
  },
  name: 'br-component',
})
export default class BrComponent extends Vue {
  @Inject() $component!: () => SpaComponent;

  @InjectReactive() page!: Page;

  @Prop() path?: string;

  private component?: SpaComponent;

  private getComponents() {
    if (!this.component) {
      return [];
    }
    if (!this.path) {
      return this.component.getChildren();
    }

    const component = this.component.getComponent(...this.path.split('/'));

    return component ? [component] : [];
  }

  render(createElement: Vue.CreateElement) {
    const components = this.getComponents().map(component => createElement(
      'br-node-component',
      { props: { component } },
      this.$scopedSlots.default && this.$scopedSlots.default({ component, page: this.page }),
    ));

    return components.length > 1
      ? createElement('fragment', components)
      : components[0];
  }
}
</script>
