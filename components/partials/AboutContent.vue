<template>
  <div>
    <h2 class="text-xs-center">{{ $t('title') }}</h2>
    <div
      class="text-xs-center mb-5"
      v-html="$t('text')" />
    <p class="my-5 text-xs-center">
      <pl-img
        file-name="a2"
        alt="profile image Sylvia Bär"
        title="profile image"
        img-type="png"
        sizes="120px"
        height="120"
        width="120"
        style="height: 120px; width: auto;"/>
      <pl-img
        class="mb-2 ml-2"
        file-name="signature"
        img-type="png"
        alt="signature Sylvia Bär"
        title="signature"
        sizes="120px"
        height="110"
        width="256"
        style="height: 60px; width: auto;"/>
      <br>
      Sylvia Bär <br>
      {{ $t('belowSignature') }}
    </p>
    <h3 class="text-xs-center">{{ $t('work_process') }}</h3>
    <no-ssr>
      <about-carousel class="my-3 carousel"/>
    </no-ssr>
  </div>
</template>

<script>
  import AboutCarousel from './AboutCarousel'

  export default {
    components: { AboutCarousel },
    i18n: {
      messages: {
        en: {
          title: 'ABOUT PHOTOLEUCHTEN',
          work_process: 'Insights working process',
          text: `
<p>
Creating inspiring, unique, large-format photographs with backlight and a specially designed frame was the idea
and birth of PHOTOLEUCHTEN.
</p>
<p>
The beginning was made up of various motifs printed on canvas, which were stretched on a wooden frame and
illuminated from the inside. In the meantime, square-shaped light boxes with illuminated photographs and large
round light objects, e.g. with a textured Japanese paper or on the front side a photo print on acrylic glass.
</p>
<p>
The frames are all manufactured by a local carpenter. They are also varnished there or further processed by me,
e.g. plated with leaf metal.
</p>
<p>
The basis for the motifs are my own photographs, from which the choice of the
cut-out, the colors, the contrasts, etc. creates a picture, which has a special effect through the illumination.
The motif, the frame and the light (light intensity and color) are individually coordinated with each other and
are designed and built with love and great attention to detail.
</p>
The luminaires are meant to give the viewer a sense of joy and to illuminate a room in a new light.
<p/>
All of them are handmade single pieces and available in various sizes and finishes.
<p>
On request I also design light objects according to individual wishes or your own motifs. Inquiries and orders
are welcome at <a href="mailto:photoleuchten@yahoo.com">photoleuchten@yahoo.com</a>.
</p>
          `,
          belowSignature: 'Designer and owner of PHOTOLEUCHTEN.'
        },
        de: {
          title: 'ÜBER PHOTOLEUCHTEN',
          work_process: 'Einblicke Arbeitsprozess',
          text: `
<p>
Inspirierende, großformatige Fotografien in einem eigens dafür geschaffenem Rahmen leuchten zu lassen, war die
Idee und Geburt von PHOTOLEUCHTEN.
</p>
<p>
Den Anfang bildeten verschiedene auf Planen gedruckte Motive, die auf einen Holzrahmen gespannt und von innen
beleuchtet wurden.
Inzwischen sind zu den bespannten Rahmen quadratische Lichtkästen mit illuminierten Fotografien und große runde
Lichtobjekte, die z.B. mit einem strukturiertem Japanpapier bespannt sind oder als Frontseite einen Fotodruck
auf Acrylglas haben, hinzu gekommen.
</p>
<p>Die Rahmen werden von einer lokalen Schreinerei gefertigt. Sie werden dort
auch und lackiert oder von mir weiterbearbeitet, z.B. mit Blattmetall vergoldet.
</p>
<p>Die Basis für die Motive bilden
meine eigenen Fotografien, aus denen durch die Wahl des Ausschnitts, der Farben, der Kontraste etc. ein Bild
geschaffen wird, das durch die Ausleuchtung einen speziellen Effekt erfährt. Das jeweilige Motiv, der Rahmen und
das Licht (Lichtstärke - und Farbe) sind individuell aufeinander abgestimmt und werden mit viel Liebe zum Detail
entworfen und gebaut.
</p>
<p>
Die Leuchten sollen dem Betrachter in unbeleuchteten und beleuchtetem Zustand Freude bereiten und einen Raum in
neuem Licht erstrahlen lassen.
</p>
<p>
Alle Leuchten und Lichtobjekte sind handgefertigte Unikate und in verschiedenen Größen und technischen
Ausstattungen erhältlich.
</p>
<p>
Auf Wunsch gestalte ich auch Lichtobjekte nach individuellen Wünschen oder eigenen Motiven. Anfragen und
Bestellungen gerne an <a href="mailto:photoleuchten@yahoo.com">photoleuchten@yahoo.com</a>.
</p>
          `,
          belowSignature: 'Designerin und Inhaberin von PHOTOLEUCHTEN.'
        }
      }
    }
  }
</script>

<style scoped>
  .carousel {
    overflow: hidden;
  }
</style>
