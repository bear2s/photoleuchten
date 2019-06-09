<template>
  <v-layout
    v-once
    row>
    <v-flex xs12>
      <h1>Legal Disclosure</h1>
      Information in accordance with Section 5 TMG
      <p>Sylvia Bär<br >
        Photoleuchten<br>
        76137 Karlsruhe<br>
      </p><p>Telephone: + 49 178 3164345<br>
      E-Mail: <a href="mailto:photoleuchten@ahoo.com">photoleuchten@ahoo.com</a><br>Internet address: <a href="/">https://photoleuchten.com</a><br>
      </p><h2>VAT number</h2>
      VAT indentification number in accorance with Section 27a of the German VAT act<br><br>
      DE304325864<br>
      <h2>Graphics and Image Sources</h2>
      Sylvia Bär, 76137 Karlsruhe; envato.com; creativemarket.com<br><br>
      <h2>Disclaimer</h2>
      Accountability for content<br>
      The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents'
      accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for
      our own content on these web pages. In this matter, please note that we are not obliged to monitor
      the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity.
      Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per
      §§ 8 to 10 of the Telemedia Act (TMG).

      <br><br>Accountability for links<br>
      Responsibility for the content of
      external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were
      evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective
      link immediately.<br><br>Copyright<br> Our web pages and their contents are subject to German copyright law. Unless
      expressly permitted by law, every form of utilizing, reproducing or processing
      works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights.
      Individual reproductions of a work are only allowed for private use.
      The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.

      <br><br>
      <i>Quelle: </i><a href="http://www.translate-24h.de" target="_blank">translate-24h Englisch Übersetzungen</a>
      <br><br>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'LegalNotice',
    head () {
      const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
      return {
        title: 'Legal Notice | Photoleuchten.com  ▶',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/impressum' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/legal' }
        ]
      }
    },
    async created () {
      return this.$store.dispatch('setLanguageKey', 'en')
    },
    transition: 'slide-left'
  }
</script>
