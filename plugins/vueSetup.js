import Vue from 'vue'
import PlImg from '~/components/PlImg.vue'

Vue.mixin({
  components: {
    PlImg
  },
  computed: {
    imgBase () {
      return 'https://res.cloudinary.com/stbaer/image/upload'
    }
  }
})
