import Vue from 'vue'
import PlImg from '~/components/PlImg.vue'
import ToggleButton from '~/components/ToggleButton.vue'

Vue.mixin({
  components: {
    PlImg, ToggleButton
  },
  data () {
    return {
      isDe: false
    }
  },
  computed: {
    imgBase () {
      return 'https://res.cloudinary.com/stbaer/image/upload'
    }
  },
  watch: {
    '$store.state.locale' (newValue, oldValue) {
      this.isDe = newValue === 'de'
    }
  },
  mounted () {
    this.isDe = this.$store.state.locale === 'de'
  }
})
