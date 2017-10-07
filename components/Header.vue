<template>
  <header class="top-toolbar toolbar">
    <div class="container">
      <div class="row middle-xs">
        <div class="col-xs-3 col-sm-6 start-xs"  >
          <nuxt-link to="/" class="logo-link">
            <img src="~/assets/img/logo.png" class="logo" height="45px" width="auto"/>
            <img src="~/assets/img/logo_small.png" class="logo_small" height="45px" width="auto"/>
          </nuxt-link>
        </div>

        <div class="col-xs-9 col-sm-6 end-xs nav">
          <nuxt-link to="/products">{{$t('links.products')}}</nuxt-link>
          <nuxt-link to="/about">{{$t('links.about')}}</nuxt-link>
          <nuxt-link to="/contact">{{$t('links.contact')}}</nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
  .logo-link {
    text-decoration: none;
    color: inherit;
  }

  .logo-link h1 span:first-of-type {
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

  @media screen and (min-width: 48em) {
    .logo_small{
      display: none;
    }
  }
  @media screen and (max-width: 48em) {
    .logo{
      display: none;
    }
  }
</style>
