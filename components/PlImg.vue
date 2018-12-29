<template>
  <img
    :alt="alt"
    :sizes="sizes"
    :srcset="srcsetComputed"
    :src="srcComputed">
</template>

<script>
  import pkg from '../package.json'

  const bust = pkg.version

  export default {
    name: 'PlImg',
    props: {
      fileName: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        default: ''
      },
      imgType: {
        type: String,
        default: 'jpg'
      },
      sizes: {
        type: String,
        default: '100vw'
      },
      imgSizes: {
        type: Array,
        default () {
          return ['1920', '1280', '1024', '960', '768', '512', '256']
        }
      },
      maxImgSize: {
        type: Number,
        default: 1920
      },
      quality: {
        type: Number | String,
        default: 'auto:eco'
      }
    },
    computed: {
      srcComputed () {
        return `${this.imgBase}/f_auto,q_${this.quality},dpr_auto/${this.fileName}.${this.imgType}?${bust}`
      },
      srcsetComputed () {
        let val = ''
        this.imgSizes
          .filter(strSize => (parseInt(strSize) <= this.maxImgSize ? strSize : false))
          .forEach((strSize, i) => {
            const end = (i !== this.imgSizes.length - 1 ? ',' : '')
            const file = `${this.fileName}.${this.imgType}?${bust}`
            val += `${this.imgBase}/f_auto,q_${this.quality},dpr_auto,w_${strSize}/${file} ${strSize}w${end}`
          })
        return val
      }
    }
  }
</script>

<style scoped>
  img {
    max-width: 100%;
    width: 100%;
    height: auto;
  }
</style>
