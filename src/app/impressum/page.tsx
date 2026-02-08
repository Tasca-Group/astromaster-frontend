export default function ImpressumPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>
        <div className="prose-invert space-y-6 text-muted leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Angaben gemaess &sect; 5 TMG</h2>
            <p>
              [Name / Firma]<br />
              [Strasse Nr.]<br />
              [PLZ Ort]<br />
              Deutschland
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Kontakt</h2>
            <p>
              E-Mail: kontakt@astro-masters.com
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemaess &sect; 27a Umsatzsteuergesetz:<br />
              [USt-IdNr.]
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Streitschlichtung</h2>
            <p>
              Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
