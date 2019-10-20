<template>
  <div id="app" class="d-flex flex-column">
    <br-page :config="config">
      <template v-slot:default="slotProps">
        <header>
          <nav class="navbar navbar-expand-sm navbar-dark sticky-top bg-dark" role="navigation">
            <div class="container">
              <router-link :to="slotProps.page.getUrl('/')" class="navbar-brand">
                {{ slotProps.page.getTitle() || 'brXM + Vue.js = ♥' }}
              </router-link>
              <div class="collapse navbar-collapse">
                <br-component path="menu" />
              </div>
            </div>
          </nav>
        </header>
        <section class="container pt-3">
          <br-component path="main" />
        </section>
        <footer class="bg-dark text-light py-3">
          <div class="container clearfix">
            <div class="float-left pr-3">&copy; Bloomreach</div>
            <div class="overflow-hidden">
              <br-component path="footer" />
            </div>
          </div>
        </footer>
      </template>
    </br-page>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Configuration } from '@bloomreach/spa-sdk';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component({
  data: () => ({
    config: {
      httpClient: axios.request,
      options: {
        live: {
          cmsBaseUrl: process.env.VUE_APP_LIVE_BR_BASE_URL!,
          spaBaseUrl: process.env.VUE_APP_LIVE_SPA_BASE_URL,
        },
        preview: {
          cmsBaseUrl: process.env.VUE_APP_PREVIEW_BR_BASE_URL!,
          spaBaseUrl: process.env.VUE_APP_PREVIEW_SPA_BASE_URL,
        },
      },
      request: {},
    },
  }),
})
export default class App extends Vue {
  config!: Configuration;

  $route!: Route;

  @Watch('$route', { immediate: true, deep: true })
  navigate() {
    this.$set(this.config, 'request', { path: this.$route.fullPath });
  }
}
</script>

<style>
#app {
  padding-bottom: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
}

#app > .container {
   flex: 1;
}

#app .has-edit-button {
  position: relative;
}
</style>
