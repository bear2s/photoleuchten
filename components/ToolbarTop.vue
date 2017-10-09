<template>
  <v-toolbar fixed app>
    <v-toolbar-side-icon class="hidden-sm-and-up"
                         @click="$emit('toggleSidebar')"></v-toolbar-side-icon>
    <v-toolbar-title>
      <nuxt-link to="/" class="logo-link">
        <img src="~/assets/img/logo.png" class="pt-2 hidden-xs-only" height="40px" width="auto"/>
        <img src="~/assets/img/logo_small.png" class="pt-2 hidden-sm-and-up" height="40px" width="auto"/>
      </nuxt-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">

      <v-btn flat to="/" exact>Home</v-btn>
      <v-menu bottom left
              v-if="products.length">
        <v-btn slot="activator"
               :class="{'btn--active': productsLinkActive}"
               flat dark>
          {{$t('links.products')}}
          <v-icon>arrow_drop_down</v-icon>
        </v-btn>

        <v-list>
          <v-list-tile v-for="(product, i) in products" :key="i"
                       router :to="product.to">
            <v-list-tile-content>
              <v-list-tile-title>{{ product.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn flat to="/about">{{$t('links.about')}}</v-btn>
      <v-btn flat :to="'/' + $t('links.contact').toLowerCase()">{{$t('links.contact')}}</v-btn>
    </v-toolbar-items>

    <language-select></language-select>

  </v-toolbar>
</template>

<script>
  import LanguageSelect from './LanguageSelect.vue'

  export default {
    name: 'toolbar-top',
    components: {
      LanguageSelect
    },
    props: {
      products: {
        type: Array,
        'default' () {
          return []
        }
      }
    },
    computed: {
      productsLinkActive () {
        const routeName = this.$route.name.toLowerCase()
        return routeName.includes('products') || routeName.includes('produkte')
      }
    }
  }
</script>

