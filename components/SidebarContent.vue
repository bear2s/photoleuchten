<template>
  <v-list>
    <v-list-tile router exact to="/" :value="false">
      <v-list-tile-action>
        <v-icon>home</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-group>
      <v-list-tile slot="item">
        <v-list-tile-action>
          <v-icon>list</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{$t('links.products')}}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon>arrow_drop_down</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <v-list-tile v-for="product in products" :key="product.title"
                   router :to="product.to">
        <v-list-tile-content>
          <v-list-tile-title>{{ product.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-group>

    <v-list-tile router
                 v-for="(item, i) in items"
                 :to="item.to" :key="i">
      <v-list-tile-action>
        <v-icon v-html="item.icon"/>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title v-text="item.title"></v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
  export default {
    name: 'sidebar-content',
    props: {
      items: {
        type: Array,
        'default' () {
          return []
        }
      },
      products: {
        type: Array,
        'default' () {
          return []
        }
      }
    }
  }
</script>
