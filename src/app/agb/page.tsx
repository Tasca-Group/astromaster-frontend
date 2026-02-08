export default function AGBPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Allgemeine Geschaeftsbedingungen</h1>
        <div className="space-y-8 text-muted leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">1. Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschaeftsbedingungen gelten fuer alle Bestellungen ueber
              die Website astro-masters.com.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">2. Vertragsschluss</h2>
            <p>
              Mit der Bestellung einer Analyse geben Sie ein verbindliches Angebot ab.
              Der Vertrag kommt mit der Zahlungsbestaetigung zustande.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">3. Preise und Zahlung</h2>
            <p>
              Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer. Die
              Zahlung erfolgt ueber Stripe. Es werden folgende Zahlungsmethoden akzeptiert:
              Kreditkarte, Debitkarte, Apple Pay, Google Pay.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">4. Lieferung</h2>
            <p>
              Die bestellte Analyse wird als PDF-Datei per Email zugestellt. Die
              Lieferung erfolgt in der Regel innerhalb weniger Minuten, spaetestens
              jedoch innerhalb von 24 Stunden nach Zahlungseingang.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">5. Widerrufsrecht</h2>
            <p>
              Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gruenden diesen
              Vertrag zu widerrufen. Um Ihr Widerrufsrecht auszuueben, muessen Sie uns
              per Email (kontakt@astro-masters.com) ueber Ihren Entschluss informieren.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">6. Haftung</h2>
            <p>
              Die bereitgestellten Analysen dienen ausschliesslich der Unterhaltung und
              Selbstreflexion. Sie stellen keine medizinische, psychologische oder
              finanzielle Beratung dar.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">7. Schlussbestimmungen</h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne
              Bestimmungen unwirksam sein, bleibt die Wirksamkeit der uebrigen
              Bestimmungen unberuehrt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
