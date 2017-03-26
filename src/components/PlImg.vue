<template>
  <img v-if="lazy"
       v-lazy="fileName+'.' + imgType"
       :data-srcset="srcsetComputed" :sizes="sizes"/>
  <img v-else
       :src="fileName+'.' + imgType"
       :srcset="srcsetComputed" :sizes="sizes"/>
</template>

<script>
  export default {
    name: 'PlImg',
    props: {
      fileName: {
        type: String,
        required: true
      },
      imgType: {
        type: String,
        default: 'jpg'
      },
      folder: {
        type: String,
        default: 'leuchten'
      },
      lazy: {
        type: Boolean,
        default: true
      },
      sizes: {
        type: String,
        default: '100vw'
      }
    },
    data () {
      return {
        imgSizes: ['1920', '1280', '960', '640', '320']
      }
    },
    computed: {
      srcsetComputed () {
        let val = ''
        this.imgSizes.forEach((str, i) => {
          val += `${i > 0 ? ' ' : ''}../static/img/${this.folder}/${this.fileName}-${str}.${this.imgType} ${str}w,`
        })
        return val
      }
    }
  }
</script>

<style scoped>

</style>
