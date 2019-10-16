# brXM + Vue.js = ♥️
Example Vue.js SPA using the Bloomreach Experience [SPA SDK](https://www.npmjs.com/package/@bloomreach/spa-sdk).
The app is created using [Vue CLI](https://cli.vuejs.org/).

## brXM setup
First configure the brXM instance with the [Standard Delivery Tier Components](https://documentation.bloomreach.com/library/setup/hst-components/overview.html).

Next, install the [UrlRewriter](https://documentation.bloomreach.com/library/enterprise/enterprise-features/url-rewriter/installation.html)
and configure that according to [this document](https://documentation.bloomreach.com/library/concepts/spa-plus/url-rewriter-rules.html).

The CMS should now be accessible at <http://localhost:8080/cms>, and it should render the client-side Vue.js app in preview mode in the Channel Manager.
The SPA itself can be accessed directly. Please mind that [the default port](https://cli.vuejs.org/guide/cli-service.html#vue-cli-service-serve) in Vue CLI is also `8080`.

## Project configuration
Copy `.env.dist` file to `.env` and customize it to contain a correct [BASE_URL](https://cli.vuejs.org/config/#publicpath) path, for example:
```
BASE_URL=/site/spa-csr
```

In the same `.env` file, also specify the brXM instance to fetch the page model from:
```
VUE_APP_LIVE_BR_BASE_URL=http://localhost:8080/site/spa-csr
VUE_APP_LIVE_SPA_BASE_URL=/site/spa-csr
VUE_APP_PREVIEW_BR_BASE_URL=http://localhost:8080/site/_cmsinternal/spa-csr
VUE_APP_PREVIEW_SPA_BASE_URL=/site/_cmsinternal/spa-csr?bloomreach-preview=true
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve -- --port=3000
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## License
Apache 2.0
