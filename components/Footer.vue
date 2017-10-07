<template>
  <footer class="footer toolbar">
    <div class="container">
      <div class="row middle-xs">
        <div class="col-xs-6">
          <span class="copyright">© {{copyright}}</span>
        </div>
        <div class="col-xs-6 end-xs">
          <nuxt-link to="contact" v-text="$t('links.contact')"></nuxt-link>
          <br/>
          <nuxt-link to="impressum" v-text="$t('links.legal')"></nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  const date = new Date()
  export default {
    data () {
      return {
        startYear: '2017',
        year: `${date.getFullYear()}`
      }
    },
    computed: {
      copyright () {
        const span = this.year === this.startYear ? this.year : `${this.startYear} - ${this.year}`
        return `photoleuchten.com ${span}`
      }
    }
  }
</script>
