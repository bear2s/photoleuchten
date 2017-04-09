<template>
  <header class="top-toolbar toolbar" v-once>
    <div class="container">
      <div class="row middle-xs">
        <div class="col-xs-6 start-xs">
          <nuxt-link to="/" class="logo">
            <h1><span>pl</span><span>PHOTOLEUCHTEN</span></h1>
          </nuxt-link>
        </div>
        <div class="col-xs-6 end-xs nav">
          <nuxt-link to="/">
            Home
          </nuxt-link>
          <nuxt-link to="/products">
            Produkte
          </nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
  .logo {
    text-decoration: none;
    color: inherit;
  }

  .logo h1 span:first-of-type {
    border: 1px solid;
    padding-left: 5px;
    padding-right: 5px;
    margin-right: 1rem;
  }

  .nav a {
    text-decoration: none;
    padding: 0 0.25rem;
  }

</style>
