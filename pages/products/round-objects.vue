<template>
  <div>
    <v-layout row>
      <v-flex xs12 class="text-xs-center">
        <h1 class="no-transform">{{$t('japanpaper_headline')}}</h1>
        <pl-img fileName="r0"
                imgType="jpg"
                sizes="100vw"></pl-img>
      </v-flex>
    </v-layout>

    <v-layout row wrap
              class="mt-3">
      <v-flex xs12 class="text-xs-center color-select">
        <div v-for="(val, i) in ['#8BD5F9', '#6F9EFD', '#FE3747', '#C18FFE', '#FAB297', '#3AF4A2']" :key="i"
             :style="'background-color: ' + val + '; visibility: '+ (r2active ? 'visible' : 'hidden') + ';' "
             @click.stop="r2selectedIndex = (i+3);"></div>
      </v-flex>
    </v-layout>

    <v-container fill-height class="pa-0">
      <v-layout row>
        <v-flex xs4 class="text-xs-center">
          <pl-img fileName="r1"
                  imgType="png"
                  :maxImgSize="960"
                  sizes="33vw"></pl-img>
        </v-flex>
        <v-flex xs4 class="text-xs-center">
          <pl-img v-show="!r2active"
                  :maxImgSize="960"
                  fileName="r2"
                  imgType="png"
                  sizes="32vw"></pl-img>
          <pl-img v-for="(val, i) in 6" :key="i"
                  v-show="r2active && (r2selectedIndex === (i+3))"
                  :maxImgSize="960"
                  :fileName="'r'+ (i+3)"
                  imgType="png"
                  sizes="32vw"></pl-img>

        </v-flex>
        <v-flex xs4 class="align-center" style="display: flex">
          <pl-img fileName="r9"
                  :maxImgSize="960"
                  imgType="png"
                  sizes="33vw"></pl-img>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout row>
      <v-flex xs12 class="text-xs-center">
        <toggle-button
          :value="r2active"
          :sync="true"
          @change="r2active = !r2active"
          :color="{checked: 'rgb(251, 176, 59)', unchecked: '#bfcbd9'}"
          :labels="{checked: $t('lightoff'), unchecked: $t('lighton')}"/>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12 class="mt-3">
        <div  v-html="$t('japanpaper_desc')"></div>
      </v-flex>
    </v-layout>
    <v-layout row wrap>

      <v-flex xs4 sm12>
        <div class="title">{{$t('products.specs')}}</div>
      </v-flex>

      <v-flex xs12 md8>
        <p v-html="$t('japanpaper_spec_desc')"></p>
      </v-flex>

      <v-flex md4 class="hidden-sm-and-down">
        <div style="position: relative;">
          <pl-img fileName="r10" :maxImgSize="960" imgType="jpg" sizes="(max-width: 48em) 66vw (min-width: 48em) 33vw"
                  style="width: 100%;"></pl-img>
          <v-layout row style="width: 100%; position: absolute; top: 0; left: 0;">
            <v-flex xs12 class="box">
              <p style="padding: 0.25rem; margin: 0;">{{$t('japan_paper_img')}}</p>
            </v-flex>
          </v-layout>
          <v-layout row style="position: absolute; bottom: 0; left: 0;">
            <v-flex xs12>
              <p style="background: rgba(0,0,0,0.4); margin: 0 0 5px 0; padding: 0.25rem;">
                {{$t('japan_paper_img_desc')}}
              </p>
            </v-flex>
          </v-layout>
        </div>
      </v-flex>

    </v-layout>


    <v-layout row>
      <v-flex xs12>
        <h2 class="no-transform pt-1 pb-1">{{$t('water_headline')}}</h2>
        <pl-img fileName="r20"
                imgType="jpg"
                sizes="100vw"></pl-img>
      </v-flex>
    </v-layout>
    <v-layout row class="mt-3">
      <v-flex xs4 class="text-xs-center">
        <pl-img fileName="r21" imgType="png" :maxImgSize="960" sizes="33vw"></pl-img>
      </v-flex>
      <v-flex xs4 class="text-xs-center toggle-active" @click.stop="r22active = !r22active">
        <pl-img v-show="!r22active" :maxImgSize="960" fileName="r22" imgType="png" sizes="33vw"></pl-img>
        <pl-img v-show="r22active" :maxImgSize="960" fileName="r23" imgType="png" sizes="33vw"></pl-img>
        <toggle-button :value="r22active"
                       @change="r22active = !r22active"
                       :sync="true"
                       :color="{checked: 'rgb(251, 176, 59)', unchecked: '#bfcbd9'}"
                       :labels="{checked: $t('lightoff'), unchecked: $t('lighton')}"/>
      </v-flex>
      <v-flex xs4 class="align-center" style="display: flex">
        <pl-img fileName="r24" :maxImgSize="960" imgType="jpg" sizes="33vw"></pl-img>
      </v-flex>
    </v-layout>

    <div v-html="$t('water_desc')"></div>
    <v-layout row class="text-xs-justify">
      <v-flex xs12>
        <div class="title">{{$t('products.specs')}}</div>
        <p v-html="$t('water_spec_desc')"></p>
      </v-flex>
    </v-layout>
  </div>

</template>
<script>
  import ToggleButton from '~/components/ToggleButton.vue'

  export default {
    transition: 'slide-left',
    components: {
      ToggleButton
    },
    data () {
      return {
        r2active: false,
        r22active: false,
        r2selectedIndex: 3
      }
    },
    i18n: {
      messages: {
        en: {
          japan_paper_img: 'japanese paper',
          japan_paper_img_desc: 'Shoji paper with PVC coating, natural white with hemp water droplet structure',
          water_headline: 'Round Light Object "Water"',
          japanpaper_headline: 'Round Light Object "Japanese Paper"',
          // @TODO
          japanpaper_desc: `
<p>The lamp "Japanpapier" is covered with an original Japanese soy paper. Sojipaptes are traditionally used in Japan for covering sliding doors and are also very well suited for luminaire construction because of their translucence. This soy paper is natural white and has a very nice hemp water droplet structure.<p/>
<p>The interior is covered with over 500 individual RGB LEDs on tapes and is therefore very evenly illuminated, so that the individual water drops and hemp fibers are very effective. The light can be dimmed via a remote control and controlled via 16 different colors.<p/>
<p>The outer frame was worked ("gilded") with several layers of copper (impact metal) and connected to the soy paper by a small copper edge on the front side.</p>
`,
          water_desc: `
<p>The "water" light object has a water close-up motif with different shades of blue and single yellow tones. The motif is is applied with a foil to a round acrylic glass plate. The luminaire is internally lined with white LEDs on ribbons and is thereby illuminated very evenly so that the individual water drops and hemp fibers are very effective. The light can be controlled and dimmed via a remote control.</p>
<p>The outer frame was treated with several layers of copper (impact metal) ("gilded"). The copper was oxidized in several steps and worked with varnish so that a very beautiful turquoise on the copper was created, which connects nicely with the picture.</p>
`,
          water_spec_desc: `
Handmade single piece<br>
<span class="desc_point">Frame:</span> Wood frame with multilayer sheet metal refinement in copper, clear lacquer seal, oxidized<br/>
<span class="desc_point">Diameter:</span> 90 cm, height: 7 cm<br/>
<span class="desc_point">Cover:</span> Photoprint on acrylic glass<br/>
<span class="desc_point">Lighting:</span> network powered white LEDs (dimmable), incl. Remote control, power supply 12V, white cable<br/>
<br/>
<span class="desc_point">Price:</span> 580 €
          `,
          japanpaper_spec_desc: `
Handmade single piece<br>
<span class="desc_point">Frame:</span> Wood frame with multilayer sheet metal refinement in copper, clear lacquer seal<br/>
<span class="desc_point">Diameter:</span> 90 cm, height: 7 cm<br/>
<span class="desc_point">Cover:</span> Japanese paper - shoji paper with PVC coating, natural white with hemp fiber water droplet structure<br/>
<span class="desc_point">Lighting:</span> network powered RGB LEDs (16 colors, color changing function, dimmable), incl. remote control, power supply 12V, white cable<br/>
<br/>
<span class="desc_point">Price:</span> 480 €
`
        },
        de: {
          japan_paper_img: 'Japanpapier',
          japan_paper_img_desc: 'Shojipapier mit PVC-Beschichtung, naturweiss mit Hanffaser-Wassertropfen Struktur',
          water_headline: 'Leuchte Rund "Wasser"',
          japanpaper_headline: 'Leuchte Rund "Japanpapier"',
          japanpaper_desc: `
<p>Die Leuchte" Japanpapier" ist mit einem original japanischen Sojipapier bespannt.
Sojipapiere werden in Japan traditionell zur Bespannung von Schiebetüren verwendet und sind aufgrund
ihrer Transluzenz auch sehr gut für den Leuchtenbau geeignet. Dieses Sojipapier ist naturweiß und mit
einer sehr schönen Hanffaser-Wassertropfen Struktur versehen.<p/>
<p>Innen ist sie mit über 500 einzelnen RGB LEDs auf Bändern besetzt und wird dadurch sehr gleichmäßig ausgeleuchtet,
so dass die einzelnen Wassertropfen und Hanffasern sehr gut zur Geltung kommen.
Das Licht kann über eine Fernbedienung gedimmt und über 16 verschiedene Farbtöne angesteuert werden.<p/>
<p>Der Außenrahmen wurde mit mehreren Schichten Kupfer (Schlagmetal) bearbeitet ("vergoldet")
und auf der Vorderseite durch einen schmalen Kupferrand mit dem Sojipapier verbunden.</p>
`,
          water_desc: `
<p>Die Leuchte "Wasser" hat als Motiv eine Wasser-Nahaufnahme mit verschiedenen Blautönen und einzelnen Gelbtönen,
das mit einer Folie auf eine runde Acrylglasplatte aufgebracht ist. Die Leuchte ist im Inneren mit weißen
LEDs auf Bändern besetzt und wird dadurch sehr gleichmäßig ausgeleuchtet, so dass die einzelnen Wassertropfen
und Hanffasern sehr gut zur Geltung kommen. Das Licht kann über eine Fernbedienung angesteuert und gedimmt werden.</p>
<p>Der Außenrahmen wurde mit mehreren Schichten Kupfer (Schlagmetal) bearbeitet ("vergoldet").
Das Kupfer wurde in mehreren Schritten oxidiert und mit Fassettenlack bearbeitet,
so dass eine sehr schöner Türkiston auf dem Kupfer entstanden ist, der sich mit dem Bildmotiv verbindet.</p>
          `,
          water_spec_desc: `
Handgefertigtes Einzelstück<br/>
<span class="desc_point">Rahmen:</span> Holzrahmen mit Mehrschicht-Blattmetalveredelung in Kupfer, oxidiert, Klarlackversiegelung<br/>
<span class="desc_point">Durchmesser:</span> 90 cm, Höhe: 7 cm<br/>
<span class="desc_point">Bild:</span> Fotodruck auf Acrylglas<br/>
<span class="desc_point">Beleuchtung:</span> netzbetriebene weiße LEDs (dimmbar), inkl. Fernbedienung, Netzteil 12V, weißes Kabel<br/>
<br/>
<span class="desc_point">Preis:</span> 580,00 €
          `,
          japanpaper_spec_desc: `
Handgefertigtes Einzelstück<br/>
<span class="desc_point">Rahmen:</span> Holzrahmen mit Mehrschicht-Blattmetalveredelung in Kupfer, Klarlackversiegelung<br/>
<span class="desc_point">Durchmesser:</span> 90 cm, Höhe: 7 cm<br/>
<span class="desc_point">Bespannung:</span> Japanpapier - Shojipapier mit PVC-Beschichtung, naturweiß mit Hanffaser-Wassertropfen-Struktur<br/>
<span class="desc_point">Beleuchtung:</span> netzbetriebene RGB LEDs (16 Farben, Farbwechselfunktion, dimmbar), incl. Fernbedienung, Netzteil 12 V, weißes Kabel<br/>
<br/>
<span class="desc_point">Preis:</span> 480 €
          `
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .round-objects {
    margin-bottom: 30vh;
  }

  .toggle-active {
    &:hover {
      cursor: pointer
    }
  }

  .color-select {
    > div {
      width: 2rem;
      height: 2rem;
      display: inline-block;
      border-radius: 50%;
      margin: 0.1rem;
    }
  }
</style>
