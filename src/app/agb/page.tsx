/* eslint-disable react/no-unescaped-entities */
export default function AGBPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>
        <p className="text-muted mb-2">
          <strong className="text-white">AstroMaster — astro-masters.com</strong>
          <br />
          Alessandro Tasca &amp; Marcel Tasca
          <br />
          Brückweg 36, 64625 Bensheim
          <br />
          E-Mail: office@tasca-group.com
        </p>
        <p className="text-muted mb-8 text-sm">Stand: Februar 2026</p>

        <div className="space-y-8 text-muted leading-relaxed">
          {/* § 1 */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              &sect; 1 Geltungsbereich
            </h2>
            <p>
              (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB")
              gelten für alle Verträge, die zwischen Alessandro Tasca &amp;
              Marcel Tasca, Brückweg 36, 64625 Bensheim (nachfolgend „Anbieter")
              und dem Kunden (nachfolgend „Kunde") über die Website
              astro-masters.com geschlossen werden.
            </p>
            <p className="mt-2">
              (2) Es gelten die AGB in der zum Zeitpunkt der Bestellung gültigen
              Fassung.
            </p>
            <p className="mt-2">
              (3) Abweichende Bedingungen des Kunden werden nicht anerkannt, es
              sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich
              schriftlich zu.
            </p>
            <p className="mt-2">
              (4) Verbraucher im Sinne dieser AGB ist jede natürliche Person,
              die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend
              weder ihrer gewerblichen noch ihrer selbständigen beruflichen
              Tätigkeit zugerechnet werden können (&sect; 13 BGB).
            </p>
          </div>

          {/* § 2 */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              &sect; 2 Vertragsgegenstand
            </h2>
            <p>
              (1) Der Anbieter bietet über die Website astro-masters.com
              personalisierte astrologische Analysen in digitaler Form
              (PDF-Dokumente) an. Die Analysen umfassen je nach gewählter
              Version unterschiedliche Berechnungssysteme (siderische Astrologie,
              Numerologie, ägyptische Dekane, Human Design, Elementar-Analyse).
            </p>
            <p className="mt-2">
              (2) Die angebotenen Analysen dienen ausschließlich der Unterhaltung
              und persönlichen Reflexion. Sie stellen keine wissenschaftlich
              fundierten Aussagen dar und ersetzen keine professionelle Beratung
              (medizinisch, psychologisch, rechtlich oder finanziell).
            </p>
            <p className="mt-2">(3) Folgende Produkte werden angeboten:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong className="text-white">Normal-Version (39 €):</strong>{" "}
                System-Check, Sonne, Mond, Aszendent, Lebenszahl, Element,
                Kosmische Signatur (12–15 Seiten)
              </li>
              <li>
                <strong className="text-white">Pro-Version (89 €):</strong> Alle
                Inhalte der Normal-Version plus ägyptischer Wächter, Human
                Design, alle Planeten, 12 Häuser, Aspekte, Nakshatras,
                Ma&apos;at-Synthese, Journaling-Bereich (50–60 Seiten)
              </li>
            </ul>
          </div>

          {/* § 3 */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              &sect; 3 Vertragsschluss
            </h2>
            <p>
              (1) Die Darstellung der Produkte auf der Website stellt kein
              rechtlich bindendes Angebot dar, sondern eine Aufforderung zur
              Abgabe einer Bestellung.
            </p>
            <p className="mt-2">
              (2) Der Kunde gibt durch Klicken des Buttons „Jetzt kaufen" oder
              „Kostenpflichtig bestellen" ein verbindliches Kaufangebot ab.
            </p>
            <p className="mt-2">
              (3) Die Zahlung wird über den Zahlungsdienstleister Stripe
              abgewickelt.
            </p>
            <p className="mt-2">
              (4) Der Vertrag kommt zustande, sobald die Zahlung erfolgreich
              verarbeitet wurde. Der Kunde erhält eine Bestätigung per E-Mail.
            </p>
          </div>

          {/* § 4 */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              &sect; 4 Preise und Zahlung
            </h2>
            <p>
              (1) Alle auf der Website angegebenen Preise sind Endpreise und
              enthalten die gesetzliche Umsatzsteuer, sofern anwendbar.
            </p>
            <p className="mt-2">
              (2) Derzeit enthält der Preis keine gesondert ausgewiesene
              Umsatzsteuer gemäß &sect; 19 UStG (Kleinunternehmerregelung),
              sofern anwendbar. Andernfalls wird die Umsatzsteuer gesondert
              ausgewiesen.
            </p>
            <p className="mt-2">
              (3) Die Zahlung erfolgt über den Zahlungsdienstleister Stripe. Es
              werden die dort verfügbaren Zahlungsmethoden akzeptiert (z.&nbsp;B.
              Kreditkarte, SEPA-Lastschrift, Apple Pay, Google Pay).
            </p>
            <p className="mt-2">
              (4) Es fallen keine zusätzlichen Versand- oder Lieferkosten an, da
              es sich um digitale Produkte handelt.
            </p>
          </div>

          {/* § 5 */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              &sect; 5 Lieferung
            </h2>
            <p>
              (1) Die personalisierte Analyse wird nach erfolgreicher Zahlung
              automatisch erstellt und innerhalb von 24 Stunden per E-Mail an die
              vom Kunden angegebene E-Mail-Adresse gesendet.
            </p>
            <p className="mt-2">
              (2) Die Lieferung erfolgt ausschließlich in digitaler Form als
              PDF-Dokument.
            </p>
            <p className="mt-2">
              (3) Der Kunde ist dafür verantwortlich, eine gültige E-Mail-Adresse
              anzugeben. Für Lieferverzögerungen aufgrund fehlerhafter Angaben
              übernimmt der Anbieter keine Haftung.
            </p>
            <p className="mt-2">
              (4) Sollte die Zustellung innerhalb von 24 Stunden nicht erfolgen,
              kann der Kunde den Anbieter unter office@tasca-group.com
              kontaktieren.
            </p>
          </div>

          {/* § 6 */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              &sect; 6 Widerrufsrecht
            </h2>

            <h3 className="text-lg font-semibold text-white mb-2">
              Widerrufsbelehrung
            </h3>
            <p className="font-semibold text-white">Widerrufsrecht</p>
            <p className="mt-2">
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
              diesen Vertrag zu widerrufen.
            </p>
            <p className="mt-2">
              Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des
              Vertragsschlusses.
            </p>
            <p className="mt-2">
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns
            </p>
            <p className="mt-2 pl-4 border-l-2 border-border">
              Alessandro Tasca &amp; Marcel Tasca
              <br />
              Brückweg 36, 64625 Bensheim
              <br />
              E-Mail: office@tasca-group.com
              <br />
              Telefon: 01639769451
            </p>
            <p className="mt-2">
              mittels einer eindeutigen Erklärung (z.&nbsp;B. ein mit der Post
              versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen
              Vertrag zu widerrufen, informieren.
            </p>
            <p className="mt-2">
              Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die
              Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der
              Widerrufsfrist absenden.
            </p>

            <p className="font-semibold text-white mt-6">Folgen des Widerrufs</p>
            <p className="mt-2">
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle
              Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und
              spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem
              die Mitteilung über Ihren Widerruf dieses Vertrags bei uns
              eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe
              Zahlungsmittel, das Sie bei der ursprünglichen Transaktion
              eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas
              anderes vereinbart; in keinem Fall werden Ihnen wegen dieser
              Rückzahlung Entgelte berechnet.
            </p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-2">
              Vorzeitiges Erlöschen des Widerrufsrechts bei digitalen Inhalten
            </h3>
            <p>
              Das Widerrufsrecht erlischt vorzeitig, wenn der Anbieter mit der
              Ausführung des Vertrags begonnen hat, nachdem der Kunde
            </p>
            <ol className="list-decimal pl-6 mt-2 space-y-2">
              <li>
                ausdrücklich zugestimmt hat, dass der Anbieter mit der Ausführung
                des Vertrags vor Ablauf der Widerrufsfrist beginnt, und
              </li>
              <li>
                seine Kenntnis davon bestätigt hat, dass er durch seine
                Zustimmung mit Beginn der Ausführung des Vertrags sein
                Widerrufsrecht verliert.
              </li>
            </ol>
            <p className="mt-2">
              Der Kunde wird vor Abgabe der Bestellung auf diese Bedingungen
              hingewiesen und muss ihnen per Checkbox zustimmen.
            </p>
          </div>

          {/* § 7 */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              &sect; 7 Eingabe der Geburtsdaten
            </h2>
            <p>
              (1) Der Kunde ist für die Richtigkeit der eingegebenen
              Geburtsdaten (Datum, Uhrzeit, Ort) selbst verantwortlich.
            </p>
            <p className="mt-2">
              (2) Fehlerhafte Eingaben können zu abweichenden
              Analyseergebnissen führen. Ein Anspruch auf kostenlose
              Neuberechnung aufgrund fehlerhafter Kundenangaben besteht nicht.
            </p>
            <p className="mt-2">
              (3) Gegen eine Gebühr von 15 € kann eine Neuberechnung mit
              korrigierten Daten angefordert werden.
            </p>
          </div>

          {/* § 8 */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              &sect; 8 Urheberrecht und Nutzungsrechte
            </h2>
            <p>
              (1) Die erstellten Analysen sind urheberrechtlich geschützt. Der
              Kunde erhält ein einfaches, nicht übertragbares Nutzungsrecht für
              den persönlichen Gebrauch.
            </p>
            <p className="mt-2">
              (2) Die Vervielfältigung, Verbreitung, öffentliche
              Zugänglichmachung oder gewerbliche Nutzung der Inhalte — auch
              auszugsweise — ist ohne ausdrückliche schriftliche Genehmigung des
              Anbieters nicht gestattet.
            </p>
            <p className="mt-2">
              (3) Die systematische Nutzung der Website (z.&nbsp;B. durch
              automatisierte Abfragen, Scraping) ist untersagt.
            </p>
          </div>

          {/* § 9 */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              &sect; 9 Haftung
            </h2>
            <p>
              (1) Der Anbieter haftet unbeschränkt für Vorsatz und grobe
              Fahrlässigkeit.
            </p>
            <p className="mt-2">
              (2) Bei leichter Fahrlässigkeit haftet der Anbieter nur bei
              Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). Die
              Haftung ist in diesem Fall auf den vertragstypischen,
              vorhersehbaren Schaden begrenzt.
            </p>
            <p className="mt-2">
              (3) Die Haftung für Schäden aus der Verletzung des Lebens, des
              Körpers oder der Gesundheit bleibt unberührt.
            </p>
            <p className="mt-2">
              (4) Der Anbieter übernimmt keine Haftung für die inhaltliche
              Richtigkeit der astrologischen Analysen. Die Analysen beruhen auf
              mathematischen Berechnungen astronomischer Positionen und deren
              Interpretation, die keinen wissenschaftlichen Anspruch erheben.
            </p>
            <p className="mt-2">
              (5) Der Anbieter haftet nicht für technische Störungen, die
              außerhalb seines Einflussbereichs liegen (z.&nbsp;B. Ausfälle von
              Drittanbietern, Internetstörungen).
            </p>
          </div>

          {/* § 10 */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              &sect; 10 Datenschutz
            </h2>
            <p>
              Die Erhebung und Verarbeitung personenbezogener Daten erfolgt
              gemäß unserer Datenschutzerklärung, die unter{" "}
              <a
                href="/datenschutz"
                className="text-gold hover:underline"
              >
                https://astro-masters.com/datenschutz
              </a>{" "}
              abrufbar ist.
            </p>
          </div>

          {/* § 11 */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              &sect; 11 Streitbeilegung
            </h2>
            <p>
              (1) Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-2">
              (2) Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          {/* § 12 */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              &sect; 12 Schlussbestimmungen
            </h2>
            <p>
              (1) Es gilt das Recht der Bundesrepublik Deutschland unter
              Ausschluss des UN-Kaufrechts.
            </p>
            <p className="mt-2">
              (2) Ist der Kunde Kaufmann, juristische Person des öffentlichen
              Rechts oder öffentlich-rechtliches Sondervermögen, ist
              Gerichtsstand für alle Streitigkeiten aus diesem Vertrag der Sitz
              des Anbieters.
            </p>
            <p className="mt-2">
              (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
              werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
          </div>

          <p className="text-sm italic border-t border-border pt-6">
            Diese AGB wurden mit größter Sorgfalt erstellt, ersetzen jedoch
            keine anwaltliche Beratung. Für eine rechtsverbindliche Prüfung
            empfehlen wir die Konsultation eines Fachanwalts.
          </p>
        </div>
      </div>
    </section>
  );
}
