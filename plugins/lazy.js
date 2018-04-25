import 'lazysizes'

document.addEventListener('lazybeforeunveil', (e) => {
  const bg = e.target.getAttribute('data-bg')
  console.log(e)
  if (bg) {
    e.target.style.backgroundImage = bg
  }
})
