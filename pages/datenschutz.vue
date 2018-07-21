<template>
  <v-layout
    v-once
    row>
    <v-flex xs12>
      <h2>Datenschutzerklärung</h2>
      <p>
        Die Nutzung unserer Seite ist ohne eine Angabe von personenbezogenen Daten möglich. Für die Nutzung einzelner
        Services unserer Seite können sich hierfür abweichende Regelungen ergeben, die in diesem Falle nachstehend
        gesondert erläutert werden. Ihre personenbezogenen Daten (z.B. Name, Anschrift, E-Mail, Telefonnummer, u.ä.)
        werden von uns nur gemäß den Bestimmungen des deutschen Datenschutzrechts verarbeitet. Daten sind dann
        personenbezogen, wenn sie eindeutig einer bestimmten natürlichen Person zugeordnet werden können. Die
        rechtlichen Grundlagen des Datenschutzes finden Sie im Bundesdatenschutzgesetz (BDSG) und dem Telemediengesetz
        (TMG). Nachstehende Regelungen informieren Sie insoweit über die Art, den Umfang und Zweck der Erhebung, die
        Nutzung und die Verarbeitung von personenbezogenen Daten durch den Anbieter
      </p>
      <p>
        <strong>
          Sylvia Bär<br>
          Photoleuchten<br>
          76137 Karlsruhe<br>
          Germany <br>
          E-Mail: photoleuchten@yahoo.com
        </strong>
      </p>
      <p>
        Wir weisen darauf hin, dass die internetbasierte Datenübertragung Sicherheitslücken aufweist, ein lückenloser
        Schutz vor Zugriffen durch Dritte somit unmöglich ist.
      </p>

      <h4>Kontaktmöglichkeit</h4>
      <p>
        Wir bieten Ihnen auf unserer Seite die Möglichkeit, mit uns per E-Mail und/oder über ein Kontaktformular in
        Verbindung zu treten. In diesem Fall werden die vom Nutzer gemachten Angaben zum Zwecke der Bearbeitung seiner
        Kontaktaufnahme gespeichert. Eine Weitergabe an Dritte erfolgt nicht. Ein Abgleich der so erhobenen Daten mit
        Daten,
        die möglicherweise durch andere Komponenten unserer Seite erhoben werden, erfolgt ebenfalls nicht.
      </p>

      <h4>Einsatz von Google-Analytics mit Anonymisierungsfunktion</h4>
      <p>
        Wir setzen auf unserer Seite Google-Analytics, einen Webanalysedienst der Firma Google Inc., 1600 Amphitheatre
        Parkway, Mountain View, CA 94043 USA, nachfolgend „Google“ ein. Google-Analytics verwendet sog. „Cookies“,
        Textdateien, die auf Ihrem Computer gespeichert werden und hierdurch eine Analyse der Benutzung der Website
        durch
        Sie ermöglichen.
      </p>
      <p>
        Die durch diese Cookies erzeugten Informationen, beispielsweise Zeit, Ort und Häufigkeit Ihres
        Webseiten-Besuchs
        einschließlich Ihrer IP-Adresse, werden an Google in den USA übertragen und dort gespeichert.
      </p>
      <p>
        Wir verwenden auf unserer Website Google-Analytics mit einer IP-Anonymisierungsfunktion. Ihre IP-Adresse wird
        in diesem Fall von Google schon innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen
        Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum gekürzt und dadurch anonymisiert.
      </p>
      <p>
        Google wird diese Informationen benutzen, um Ihre Nutzung unserer Seite auszuwerten, um Reports über die
        Websiteaktivitäten für uns zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung
        verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte
        übertragen,
        sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten.
      </p>
      <p>
        Google wird, nach eigenen Angaben, in keinem Fall Ihre IP-Adresse mit anderen Daten von Google in Verbindung
        bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software
        verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen
        unserer Website vollumfänglich nutzen können.
      </p>
      <p>
        Des Weiteren bietet Google für die gängigsten Browser eine Deaktivierungsoption an, welche Ihnen mehr Kontrolle
        darüber gibt, welche Daten von Google erfasst und verarbeitet werden. Sollte Sie diese Option aktivieren, werden
        keine Informationen zum Website-Besuch an Google Analytics übermittelt. Die Aktivierung verhindert aber nicht,
        dass
        Informationen an uns oder an andere von uns gegebenenfalls eingesetzte Webanalyse-Services übermittelt werden.
        Weitere Informationen zu der von Google bereitgestellten Deaktivierungsoption sowie zu der Aktivierung dieser
        Option, erhalten Sie über nachfolgenden Link:
        <a
          href="https://tools.google.com/dlpage/gaoptout?hl=de"
          target="_blank"
          rel="nofollow">https://tools.google.com/dlpage/gaoptout?hl=de</a>
      </p>

      <h3>Auskunft/Widerruf/Löschung</h3>
      <p>
        Sie können sich aufgrund des Bundesdatenschutzgesetzes bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer
        personenbezogenen Daten und deren Berichtigung, Sperrung, Löschung oder einem Widerruf einer erteilten
        Einwilligung
        unentgeltlich an uns wenden. Wir weisen darauf hin, dass Ihnen ein Recht auf Berichtigung falscher Daten oder
        Löschung personenbezogener Daten zusteht, sollte diesem Anspruch keine gesetzliche Aufbewahrungspflicht
        entgegenstehen.
      </p>
      <p>
        <a
          target="_blank"
          href="https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html">Muster-Datenschutzerklärung</a>
        der
        <a
          target="_blank"
          href="https://www.ratgeberrecht.eu/">Anwaltskanzlei Weiß &amp; Partner
        </a>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    asyncData ({store, route}) {
      if (store.state.locale === 'en') store.dispatch('setLanguageKey', 'de')
    },
    watch: {
      '$store.state.locale' (val) {
        if (val === 'en') this.$router.push('privacy')
      }
    }
  }
</script>
