import Vue from 'vue'
import PlImg from '~/components/PlImg.vue'
import ToggleButton from '~/components/ToggleButton.vue'

Vue.mixin({
  head () {
    const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
    return {
      link: [
        { rel: 'canonical', href: `https://photoleuchten.com${path}` }
      ]
    }
  },
  components: {
    PlImg, ToggleButton
  },
  computed: {
    imgBase () {
      return 'https://res.cloudinary.com/stbaer/image/upload'
    }
  }
})
