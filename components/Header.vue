<template>
  <header class="top-toolbar toolbar">
    <div class="container">
      <div class="row middle-xs">
        <div class="col-xs-6 start-xs">
          <nuxt-link to="/" class="logo">
            <img src="~assets/img/logo.png" height="45px" width="auto"/>
          </nuxt-link>
        </div>
        <div class="col-xs-6 end-xs nav">
          <nuxt-link to="/products">{{$t('links.products')}}</nuxt-link>
          <nuxt-link to="/about">{{$t('links.about')}}</nuxt-link>
          <nuxt-link to="/contact">{{$t('links.contact')}}</nuxt-link>
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
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 0.25rem;
  }

  .nav a.nuxt-link-active {
    text-decoration: underline;
  }

</style>
