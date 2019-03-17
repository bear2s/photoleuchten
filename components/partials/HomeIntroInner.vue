<template>
  <div class="text-xs-center">
    <h1>
      {{$t('h1Text')}}
    </h1>
    <h2 class="px-3">{{$t('h2Text')}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'HomeIntroInner',
    i18n: {
      messages: {
        en: {
          h1Text: 'WALL LIGHTS - LIGHTOBJECTS - LIGHT BOXES)',
          h2Text: 'Simple and beautiful design'
        },
        de: {
          h1Text: 'WANDLEUCHTEN - LICHTOBJEKTE - LEUCHTKAESTEN - BELEUCHTETE PHOTOS & PAPIERE',
          h2Text: 'Handgefertigte Design-Leuchten, Unikate aus Fotografien & Licht'
        }
      }
    }
  }
</script>
