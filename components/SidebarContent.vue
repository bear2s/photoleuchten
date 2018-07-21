<template>
  <v-list>
    <v-list-tile
      :value="false"
      router
      exact
      to="/">
      <v-list-tile-action/>
      <v-list-tile-content>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-group>
      <v-list-tile
        slot="activator"
        append-icon="none"
        action="none">
        <v-list-tile-content>
          <v-list-tile-title>{{ $t('links.products') }}&nbsp;&#x25BC;</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
        v-for="product in products"
        :key="product.title"
        :to="product.to"
        router>
        <v-list-tile-action/>
        <v-list-tile-content>
          <v-list-tile-title>{{ product.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-group>

    <v-list-tile
      v-for="(item, i) in items"
      :to="item.to"
      :key="i"
      action="none"
      router>
      <v-list-tile-content>
        <v-list-tile-title v-text="item.title"/>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
  export default {
    name: 'SidebarContent',
    props: {
      items: {
        type: Array,
        default: () => []
      },
      products: {
        type: Array,
        default: () => []
      }
    }
  }
</script>
