export default function ImpressumPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>
        <div className="space-y-8 text-muted leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">
              Angaben gemäß &sect; 5 TMG
            </h2>
            <p>
              Alessandro Tasca &amp; Marcel Tasca<br />
              Brückweg 36<br />
              64625 Bensheim
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">
              Vertreten durch
            </h2>
            <p>Alessandro Tasca &amp; Marcel Tasca</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Kontakt</h2>
            <p>
              Telefon: 01639769451<br />
              E-Mail: office@tasca-group.com
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß &sect; 27a
              Umsatzsteuergesetz:<br />
              DE454939149
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">
              Redaktionell verantwortlich
            </h2>
            <p>Marcel Tasca &amp; Alessandro Tasca</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
