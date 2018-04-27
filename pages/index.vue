<template>
  <v-layout
    row
    wrap>
    <v-flex
      xs12
      class="text-xs-center">
      <h1>{{ $t('headline') }}</h1>
    </v-flex>
    <v-flex
      xs12
      class="text-xs-right">
      <pl-img
        blur-up
        file-name="t1"
        img-type="jpg"
        sizes="99vw"
        :quality="85"/>
    </v-flex>
    <v-flex
      xs12
      class="text-xs-left">
      <h2>{{ $t('welcomeTitle') }}</h2>
      <div v-html="$t('welcome')"/>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    transition: 'slide-left',
    name: 'App',
    i18n: {
      messages: {
        en: {
          headline: 'WALL LIGHTS - light objects - light boxes - illuminated photos & papers',
          welcomeTitle: 'Welcome to Photoleuchten!',
          welcome: `
<p>
Here you will find handcrafted lights made with love: wall lights, light boxes, light objects with photographs that look unlighted great and illuminated once again get a whole new look.
</p>
<p>
Due to their different motifs, light colors and strengths, the luminaires fit into many living areas and bring a new atmosphere into a room.
</p>
<p>
If you are looking for an individual piece for residential or business premises, which brings a special, beautiful light in a room, you are right here.
The wall lights and light objects come in different formats and sizes. All lights are equipped with energy-saving LED technology. Special designs with your own motif or in certain sizes are possible at any time.
</p>
<p>
Have fun watching!
</p>`
        },
        de: {
          headline: 'WANDLEUCHTEN -Lichtobjekte - Leuchtkästen - beleuchtete Fotos und Papiere',
          welcomeTitle: 'Willkommen bei Photoleuchten!',
          welcome: `
<p>
Hier findet Ihr mit Liebe hergestellte, handgemachte Leuchten: Wandleuchten, Leuchtkästen, Lichtobjekte mit Fotografien, die unbeleuchtet toll aussehen und beleuchtet noch mal einen völlig neuen Look bekommen.
</p>
<p>
Die Leuchten passen durch ihre unterschiedlichen Motive, Lichtfarben - und Stärken in viele Wohnbereiche und bringen eine neue Atmosphäre in einen Raum.
Wer ein individuelles Stück für Wohn- oder Geschäftsräume sucht, das ein besonderes, schönes Licht in einen Raum bringt, ist hier richtig.
</p>
<p>
Die Wandleuchten und Lichtobjekte gibt es in verschiedenen Formaten und Größen.  Alle Leuchten sind mit stromsparender LED-Technik ausgestattet. Sonderanfertigungen mit eigenen Motiven oder in bestimmten Größen sind jederzeit möglich.
</p>
<p>
Viel Spaß beim Betrachten!
</p>`
        }
      }
    }
  }
</script>
