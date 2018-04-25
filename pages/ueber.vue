<template>
  <v-layout
    row
    v-once>
    <v-flex xs12>
      <h2>ÜBER PHOTOLEUCHTEN</h2>
      <p>
        Inspirierende, großformatige Fotografien in einem eigens dafür geschaffenem Rahmen leuchten zu lassen, war die
        Idee und Geburt von PHOTOLEUCHTEN.
      </p>
      <p>
        Den Anfang bildeten verschiedene auf Planen gedruckte Motive, die auf einen Holzrahmen gespannt und von innen
        beleuchtet wurden.
        Inzwischen sind zu den bespannten Rahmen quadratische Lichtkästen mit illuminierten Fotografien und große runde
        Lichtobjekte, die z.B. mit einem strukturiertem Japanpapier bespannt sind oder als Frontseite einen Fotodruck
        auf Acrylglas haben, hinzu gekommen. Die Rahmen werden von einer lokalen Schreinerei gefertigt. Sie werden dort
        auch und lackiert oder von mir weiterbearbeitet, z.B. mit Blattmetall vergoldet. Die Basis für die Motive bilden
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
      <p class="mt-3">
        Sylvia Bär<br>
        Designerin und Inhaberin von PHOTOLEUCHTEN.
      </p>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    transition: 'slide-left',
    asyncData ({store}) {
      return store.dispatch('setLanguageKey', 'de')
    }
  }
</script>

<style scoped>
  .title {
    margin-top: 50px;
  }

  .info {
    font-weight: 300;
    color: #9aabb1;
    margin: 0;
    margin-top: 10px;
  }
</style>
