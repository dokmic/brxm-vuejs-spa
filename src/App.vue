<template>
  <div id="app" class="d-flex flex-column">
    <header>
      <nav class="navbar navbar-expand-sm navbar-dark sticky-top bg-dark" role="navigation">
        <div class="container">
          <div class="collapse navbar-collapse" />
        </div>
      </nav>
    </header>
    <section class="container pt-3" />
    <footer class="bg-dark text-light py-3">
      <div class="container clearfix">
        <div class="float-left pr-3">&copy; Bloomreach</div>
        <div class="overflow-hidden" />
      </div>
    </footer>
  </div>
</template>

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
