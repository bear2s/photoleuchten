<template>
  <v-toolbar-items class="hidden-xs-only">
    <v-btn
      :to="$store.state.locale === 'de' ? '/' : '/en'"
      flat
      exact>HOME</v-btn>
    <v-menu
      v-if="products.length"
      bottom
      left>
      <v-btn
        slot="activator"
        :class="{'btn--active': productsLinkActive}"
        flat
        dark>
        {{ $t('links.products') }} &#x25BC;
      </v-btn>

      <v-list>
        <v-list-tile
          v-for="(product, i) in products"
          :key="i"
          :to="product.to"
          router>
          <v-list-tile-content>
            <v-list-tile-title>{{ product.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-btn
      :to="'/' + ($store.state.locale === 'de' ? 'ueber' : 'en/about')"
      flat>{{ $t('links.about') }}</v-btn>
    <v-btn
      :to="'/' + ($store.state.locale === 'de' ? 'kontakt' : 'en/contact')"
      flat>{{ $t('links.contact') }}</v-btn>
  </v-toolbar-items>
</template>

<script>
  export default {
    name: 'PlTopToolbarItems',
    props: {
      products: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      productsLinkActive () {
        const routeName = (this.$route.name || '').toLowerCase()
        return routeName.includes('products') || routeName.includes('produkte')
      }
    }
  }
</script>
