const imgSizes = ['1920', '1280', '960', '640', '320']

export default {
  name: 'PlImg',
  functional: true,
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
  render (createElement, {props}) {
    const data = {
      attrs: {
        sizes: props.sizes
      }
    }
    const src = `${props.fileName}.${props.imgType}`
    let srcset = ''
    imgSizes.forEach((str, i) => {
      const start = (i > 0 ? ' ' : '')
      const end = (i !== imgSizes.length - 1 ? ',' : '')
      srcset += `${start}/img/${props.folder}/${props.fileName}-${str}.${props.imgType} ${str}w${end}`
    })

    if (props.lazy) {
      data.props = { // @TODO - not working
        'v-lazy': src,
        'data-srcset': srcset
      }
    } else {
      data.attrs['src'] = src
      data.attrs['srcset'] = srcset
    }

    return createElement('img', data, null)
  }
}
