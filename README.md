# brXM + Vue.js = ♥️
Example Vue.js SPA using the Bloomreach Experience [SPA SDK](https://www.npmjs.com/package/@bloomreach/spa-sdk).
The app is created using [Vue CLI](https://cli.vuejs.org/).

## brXM setup
First configure the brXM instance with the [Standard Delivery Tier Components](https://documentation.bloomreach.com/library/setup/hst-components/overview.html).

Next, install the [UrlRewriter](https://documentation.bloomreach.com/library/enterprise/enterprise-features/url-rewriter/installation.html)
and configure that according to [this document](https://documentation.bloomreach.com/library/concepts/spa-plus/url-rewriter-rules.html).

The CMS should now be accessible at <http://localhost:8080/cms>, and it should render the client-side Vue.js app in preview mode in the Channel Manager.
The SPA itself can be accessed directly. Please mind that [the default port](https://cli.vuejs.org/guide/cli-service.html#vue-cli-service-serve) in Vue CLI is also `8080`.

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
