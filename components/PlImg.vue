<template>
  <!--<img v-if="lazy" v-lazy="srcComputed" :data-srcset="srcsetComputed" :sizes="sizes"/>-->
  <img :src="srcComputed" :srcset="srcsetComputed" :sizes="sizes"/>
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
        default: '1920+'
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
      sizesComputed () {
        if (this.folder === 960) {
          return ['960', '640', '320']
        } else {
          return this.imgSizes
        }
      },
      srcComputed () {
        return `/img/${this.folder}/${this.fileName}-${this.sizesComputed[this.sizesComputed.length - 1]}.${this.imgType}`
      },
      srcsetComputed () {
        let val = ''
        this.sizesComputed.forEach((str, i) => {
          const start = (i > 0 ? ' ' : '')
          const end = (i !== this.sizesComputed.length - 1 ? ',' : '')
          val += `${start}/img/${this.folder}/${this.fileName}-${str}.${this.imgType} ${str}w${end}`
        })
        return val
      }
    }
  }
</script>
