<template>
  <ul v-if="page" class="navbar-nav col-12" :class="{ 'has-edit-button': page.isPreview() }">
    <br-manage-menu-button :menu="menu" />
    <li v-for="(item, index) in menu.siteMenuItems" :key="index"
      class="nav-item" :class="{ active: item.selected }">
      <router-link :to="page.getUrl(item._links.site)" class="nav-link text-capitalize">
        {{ item.name }}
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component as MenuComponent, Page } from '@bloomreach/spa-sdk';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  computed: {
    menu(this: BrMenu) {
      return this.component.getModels<MenuModels>().menu;
    },
  },
  name: 'br-menu',
})
export default class BrMenu extends Vue {
  @Prop() component!: MenuComponent;

  @Prop() page!: Page;
}
</script>
