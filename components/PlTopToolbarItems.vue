<template>
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
</template>

<script>
  export default {
    name: 'pl-top-toolbar-items',
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

