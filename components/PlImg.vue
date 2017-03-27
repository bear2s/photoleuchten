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
      },
      imgSizes: {
        type: Array,
        default: function () {
          return ['1920', '1280', '960', '640', '320']
        }
      }
    },
    computed: {
      srcsetComputed () {
        let val = ''
        this.imgSizes.forEach((str, i) => {
          const start = (i > 0 ? ' ' : '')
          const end = (i !== this.imgSizes.length - 1 ? ',' : '')
          val += `${start}/img/${this.folder}/${this.fileName}-${str}.${this.imgType} ${str}w${end}`
        })
        return val
      }
    }
  }
</script>
