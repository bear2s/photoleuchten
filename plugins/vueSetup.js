import Vue from 'vue'
import PlImg from '~/components/PlImg.vue'
import ToggleButton from '~/components/ToggleButton.vue'

Vue.mixin({
  components: {
    PlImg, ToggleButton
  },
  computed: {
    imgBase () {
      return 'https://res.cloudinary.com/stbaer/image/upload'
    },
    isDe () {
      return this.$store.state.locale === 'de'
    }
  }
})
