export default function DatenschutzPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Datenschutzerklaerung</h1>
        <div className="space-y-8 text-muted leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Ueberblick darueber, was mit
              Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">2. Hosting</h2>
            <p>
              Diese Website wird auf einem Server der Hetzner Online GmbH in Deutschland
              gehostet. Die Serverstandorte befinden sich ausschliesslich in Deutschland.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">3. Allgemeine Hinweise</h2>
            <p>
              Wir nehmen den Schutz Ihrer persoenlichen Daten sehr ernst. Wir behandeln
              Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklaerung.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">4. Datenerfassung auf dieser Website</h2>
            <p>
              <strong className="text-white">Keine Cookies:</strong> Diese Website verwendet keine Tracking-Cookies,
              kein Google Analytics und keine Social-Media-Plugins.
            </p>
            <p className="mt-2">
              <strong className="text-white">Gratis-Check:</strong> Beim Gratis-Check wird ausschliesslich Ihr
              Geburtsdatum verarbeitet. Ihre IP-Adresse wird nur als anonymisierter
              SHA256-Hash gespeichert.
            </p>
            <p className="mt-2">
              <strong className="text-white">Bestellungen:</strong> Bei einer Bestellung werden Name, Email,
              Geburtsdaten und Geburtsort gespeichert, um Ihre kosmische Analyse zu
              berechnen und zuzustellen.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">5. Zahlungsabwicklung</h2>
            <p>
              Die Zahlungsabwicklung erfolgt ueber Stripe Inc. Bei der Zahlung werden
              Ihre Zahlungsdaten direkt an Stripe uebermittelt. Wir haben keinen Zugriff
              auf Ihre vollstaendigen Kreditkartendaten.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">6. Email-Versand</h2>
            <p>
              Der Email-Versand erfolgt ueber Brevo (ehemals Sendinblue). Ihre
              Email-Adresse wird ausschliesslich zum Versand Ihrer bestellten Analyse verwendet.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">7. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Loeschung und
              Einschraenkung der Verarbeitung Ihrer Daten. Kontakt: kontakt@astro-masters.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
