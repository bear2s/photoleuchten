<template>
  <v-layout
    v-once
    row>
    <v-flex xs12>
      <h1>Impressum</h1>
      Information in accordance with Section 5 TMG
      <p>Sylvia Bär<br >
      Photoleuchten<br>76137 Karlsruhe<br>
      </p><p>Telefon: + 49 178 3164345<br>
      E-Mail: <a href="mailto:photoleuchten@yahoo.com">photoleuchten@yahoo.com</a><br>
      Internet Addresse: <a href="/">https://photoleuchten.com</a><br>
      </p>
      <p><strong>Umsatzsteuer-ID: </strong><br >Umsatzsteuer-Identifikationsnummer nach §27a Umsatzsteuergesetz:<br >DE304325864
      </p>
      <p><strong>Bildrechte:</strong><br >Sylvia Bär, 76137 Karlsruhe; envato.com; creativemarket.com</p>
      <br >
      <h2>Hinweis gemäß Online-Streitbeilegungs-Verordnung</h2>
      <p>Nach geltendem Recht sind wir verpflichtet, Verbraucher auf die Existenz der Europäischen
      Online-Streitbeilegungs-Plattform hinzuweisen, die für die Beilegung von Streitigkeiten genutzt werden kann,
      ohne dass ein Gericht eingeschaltet werden muss. Für die Einrichtung der Plattform ist die Europäische
      Kommission zuständig. Die Europäische Online-Streitbeilegungs-Plattform ist hier zu finden: <a
        href="https://ec.europa.eu/odr" target="_blank" rel="nofollow">http://ec.europa.eu/odr</a>. Unsere E-Mail
      lautet: <a href="mailto:photoleuchten@yahoo.com">photoleuchten@yahoo.com</a></p>
      <p>Wir weisen aber darauf hin, dass wir nicht bereit sind, uns am Streitbeilegungsverfahren im Rahmen der
      Europäischen Online-Streitbeilegungs-Plattform zu beteiligen. Nutzen Sie zur Kontaktaufnahme bitte unsere obige
      E-Mail und Telefonnummer.</p><br ><br >
      <h2>Disclaimer – rechtliche Hinweise</h2>
      § 1 Warnhinweis zu Inhalten<br >
      Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der
      Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten
      kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge
      geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein durch den Aufruf
      der kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem
      Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.<br >
      <br >
      § 2 Externe Links<br >
      Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung
      der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte
      daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich.
      Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften
      Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link
      liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete
      Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links
      unverzüglich gelöscht.<br >
      <br >
      § 3 Urheber- und Leistungsschutzrechte<br >
      Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede
      vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen
      Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung,
      Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen
      Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte
      Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar.
      Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch
      ist erlaubt.<br >
      <br >
      Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.<br >
      <br >
      § 4 Besondere Nutzungsbedingungen<br >
      Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen,
      wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die
      besonderen Nutzungsbedingungen.<p>Quelle: <a href="https://www.juraforum.de/impressum-generator/">Impressum Muster
      von JuraForum.de</a></p>

    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'Impressum',
    head () {
      const path = this.$route.path.replace(/\/$/, '') // Remove trailing /
      return {
        title: 'Impressum | Photoleuchten.com  ▶',
        htmlAttrs: {
          lang: 'de'
        },
        meta: [],
        link: [
          { hid: 'canonical', rel: 'canonical', href: `https://photoleuchten.com${path}` },
          { rel: 'alternate', hreflang: 'de', href: 'https://photoleuchten.com/impressum' },
          { rel: 'alternate', hreflang: 'en', href: 'https://photoleuchten.com/en/legal' }
        ]
      }
    },
    asyncData ({ store, route }) {
      return store.dispatch('setLanguageKey', 'de')
    },
    transition: 'slide-left'
  }
</script>
