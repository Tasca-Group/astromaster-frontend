"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "feuer-element", title: "Feuer-Element" },
  { id: "erde-element", title: "Erde-Element" },
  { id: "luft-element", title: "Luft-Element" },
  { id: "wasser-element", title: "Wasser-Element" },
  { id: "wechselwirkungen", title: "Wechselwirkungen" },
  { id: "faq", title: "H\u00e4ufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/elementar-analyse", label: "Elementar-Analyse" },
  { href: "/wiki/element-balance", label: "Element-Balance" },
  { href: "/wiki/siderische-astrologie", label: "Siderische Astrologie" },
];

const faqItems = [
  {
    question: "Was sind die 4 Elemente in der Astrologie?",
    answer:
      "Die vier Elemente sind Feuer, Erde, Luft und Wasser. Jedes umfasst drei Tierkreiszeichen: Feuer (Widder, L\u00f6we, Sch\u00fctze), Erde (Stier, Jungfrau, Steinbock), Luft (Zwillinge, Waage, Wassermann) und Wasser (Krebs, Skorpion, Fische). Sie beschreiben die grundlegenden Energieformen, die in jedem Menschen wirken.",
  },
  {
    question: "Welche Elemente passen gut zusammen?",
    answer:
      "Feuer und Luft harmonieren naturgem\u00e4\u00df, weil Luft das Feuer anf\u00e4cht und n\u00e4hrt. Erde und Wasser bilden ebenfalls ein starkes Paar, da Wasser die Erde fruchtbar macht. Feuer und Wasser stehen in Spannung (Dampf/Konflikt), ebenso Erde und Luft. Aber Spannung ist nicht schlecht \u2014 sie kann enormes Wachstum erzeugen.",
  },
  {
    question: "Wie finde ich mein dominantes Element heraus?",
    answer:
      "Dein dominantes Element ergibt sich aus der Verteilung aller zehn Planeten auf die vier Elemente. Z\u00e4hle, in welchen Zeichen deine Sonne, dein Mond, Merkur, Venus, Mars, Jupiter, Saturn, Uranus, Neptun und Pluto stehen, und ordne sie den Elementen zu. AstroMaster macht das automatisch in der Pro-Analyse.",
  },
  {
    question: "Kann ich unterrepr\u00e4sentierte Elemente st\u00e4rken?",
    answer:
      "Ja, du kannst fehlende Elemente bewusst kultivieren. Feuer st\u00e4rkst du durch Sport, kreative Projekte und Risikobereitschaft. Erde durch Routinen, Natur und K\u00f6rperarbeit. Luft durch Lesen, Kommunikation und neue Perspektiven. Wasser durch Meditation, emotionale Offenheit und k\u00fcnstlerischen Ausdruck.",
  },
  {
    question: "Verwendet AstroMaster tropische oder siderische Elemente?",
    answer:
      "AstroMaster nutzt die siderischen Planetenpositionen f\u00fcr die Element-Berechnung. Das bedeutet: Die Elemente basieren auf den tats\u00e4chlichen astronomischen Positionen der Sterne, nicht auf dem tropischen System, das sich auf die Jahreszeiten bezieht. Das kann zu Unterschieden f\u00fchren \u2014 und genau das ist der AstroMaster-USP.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Die 4 Elemente im Detail"
      subtitle="Feuer, Erde, Luft und Wasser \u2014 diese vier Urkr\u00e4fte bilden das Fundament jeder astrologischen Analyse. Jedes Element hat einzigartige Qualit\u00e4ten, St\u00e4rken und Schatten, die dein Wesen auf fundamentaler Ebene pr\u00e4gen."
      breadcrumb="Die 4 Elemente"
      sections={sections}
      ctaText="Entdecke dein Element \u2014 Jetzt Gratis-Check starten"
      relatedTopics={relatedTopics}
    >
      {/* Section 1: Feuer-Element */}
      <section id="feuer-element" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Das Feuer-Element
        </h2>
        <div className="p-4 rounded-xl bg-[#FF6B35]/5 border border-[#FF6B35]/20 mb-6">
          <p className="text-sm font-medium" style={{ color: "#FF6B35" }}>
            Zeichen: Widder, L&ouml;we, Sch&uuml;tze &bull; Qualit&auml;t: Hei&szlig;
            &amp; trocken &bull; Polarit&auml;t: Maskulin/Aktiv &bull; Jahreszeit:
            Sommer
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Feuer ist die Urenergie der Sch&ouml;pfung. Es ist die Kraft, die bewegt,
          z&uuml;ndet und transformiert. In der Natur sehen wir Feuer als Flamme, als
          Blitz, als Sonnenlicht \u2014 immer in Bewegung, immer nach oben strebend,
          immer leuchtend. Menschen mit starker Feuer-Betonung tragen diese
          Qualit&auml;ten in sich: Sie sind von Natur aus enthusiastisch, mutig,
          leidenschaftlich und inspirierend.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die drei Feuer-Zeichen verkörpern verschiedene Aspekte dieser Energie.
          <strong className="text-white"> Widder</strong> ist das kardinale Feuer \u2014 der
          z&uuml;ndende Funke, der Initiative und Pioniermut verk&ouml;rpert. Er beginnt
          Dinge mit explosiver Kraft. <strong className="text-white"> L&ouml;we</strong> ist das
          fixe Feuer \u2014 die stetige Flamme, die Kreativit&auml;t, Selbstausdruck und
          nat&uuml;rliche F&uuml;hrung repr&auml;sentiert. Er h&auml;lt das Feuer am Brennen.
          <strong className="text-white"> Sch&uuml;tze</strong> ist das ver&auml;nderliche Feuer \u2014
          der expansive Funkenflug, der f&uuml;r Freiheit, Philosophie und den Drang
          nach Erweiterung steht.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">St&auml;rken des Feuer-Elements:</strong> Leidenschaft,
          Tatendrang, Mut, Spontanit&auml;t, Charisma, Optimismus und die ansteckende
          F&auml;higkeit, andere zu inspirieren und mitzurei&szlig;en. Feuer-Menschen sind
          geborene Initiatoren, die Vision in Aktion verwandeln.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Schatten des Feuer-Elements:</strong> Ungeduld,
          Aggressivit&auml;t, Egozentrismus, Burnout-Neigung, Oberfl&auml;chlichkeit und
          die Tendenz, andere zu &uuml;berrollen. Unkontrolliertes Feuer zerst&ouml;rt,
          statt zu w&auml;rmen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">K&ouml;rperbereiche:</strong> Feuer regiert den Kopf
          (Widder), das Herz (L&ouml;we) und die H&uuml;ften/Oberschenkel (Sch&uuml;tze).
          Feuer-betonte Menschen haben oft einen schnellen Stoffwechsel, neigen
          zu Entz&uuml;ndungen und brauchen viel Bewegung, um ihre Energie abzubauen.
        </p>
      </section>

      {/* Section 2: Erde-Element */}
      <section id="erde-element" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Das Erde-Element
        </h2>
        <div className="p-4 rounded-xl bg-[#8B7355]/5 border border-[#8B7355]/20 mb-6">
          <p className="text-sm font-medium" style={{ color: "#8B7355" }}>
            Zeichen: Stier, Jungfrau, Steinbock &bull; Qualit&auml;t: Kalt
            &amp; trocken &bull; Polarit&auml;t: Feminin/Passiv &bull; Jahreszeit:
            Herbst
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Erde ist die Energie der Manifestation, der Form und der materiellen
          Welt. In der Natur ist Erde der feste Boden unter unseren F&uuml;&szlig;en, die
          Berge, die Kristalle, der fruchtbare Ackerboden. Sie gibt allem eine
          Form, eine Struktur, einen Platz. Menschen mit starker Erde-Betonung
          sind geerdet, praktisch, geduldig und verl&auml;sslich.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die drei Erde-Zeichen verk&ouml;rpern verschiedene Facetten.
          <strong className="text-white"> Stier</strong> ist die kardinale Erde \u2014 der
          fruchtbare Boden, der f&uuml;r Sinnlichkeit, Sicherheit und das Genie&szlig;en
          des Lebens steht. <strong className="text-white"> Jungfrau</strong> ist die
          ver&auml;nderliche Erde \u2014 der gepfl&uuml;gte Acker, der Analyse, Dienst und
          Perfektion repr&auml;sentiert. <strong className="text-white"> Steinbock</strong> ist
          die kardinale Erde \u2014 der Bergfels, der f&uuml;r Ambition, Disziplin und
          langfristiges Bauen steht.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">St&auml;rken des Erde-Elements:</strong> Zuverl&auml;ssigkeit,
          Geduld, praktischer Verstand, Ausdauer, Sinnlichkeit und die
          F&auml;higkeit, dauerhafte Strukturen zu erschaffen. Erde-Menschen bringen
          Ideen in die Realit&auml;t und halten, was sie versprechen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Schatten des Erde-Elements:</strong> Sturheit,
          Materialismus, Angst vor Ver&auml;nderung, Kontrollzwang, emotionale
          Verschlossenheit und das Festhalten an Dingen, die l&auml;ngst losgelassen
          werden sollten.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">K&ouml;rperbereiche:</strong> Erde regiert den Hals und
          Nacken (Stier), den Verdauungstrakt (Jungfrau) und die Knochen, Knie
          und Haut (Steinbock). Erde-betonte Menschen haben oft einen robusten
          K&ouml;rper, neigen aber zu Steifheit und Verh&auml;rtungen.
        </p>
      </section>

      {/* Section 3: Luft-Element */}
      <section id="luft-element" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Das Luft-Element
        </h2>
        <div className="p-4 rounded-xl bg-[#87CEEB]/5 border border-[#87CEEB]/20 mb-6">
          <p className="text-sm font-medium" style={{ color: "#87CEEB" }}>
            Zeichen: Zwillinge, Waage, Wassermann &bull; Qualit&auml;t: Hei&szlig;
            &amp; feucht &bull; Polarit&auml;t: Maskulin/Aktiv &bull; Jahreszeit:
            Fr&uuml;hling
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Luft ist die Energie des Geistes, der Kommunikation und der sozialen
          Verbindung. In der Natur ist Luft unsichtbar, aber allgegenw&auml;rtig \u2014
          sie verbindet alles miteinander, tr&auml;gt Ger&uuml;che, Kl&auml;nge und Samen.
          Sie ist das Element, das alles in Bewegung h&auml;lt, ohne selbst greifbar
          zu sein. Menschen mit starker Luft-Betonung sind intellektuell neugierig,
          kommunikativ, gesellig und objektiv.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die drei Luft-Zeichen repr&auml;sentieren unterschiedliche Auspr&auml;gungen.
          <strong className="text-white"> Zwillinge</strong> sind die ver&auml;nderliche Luft \u2014
          die leichte Brise, die f&uuml;r Neugier, Vielseitigkeit und spielerische
          Kommunikation steht. <strong className="text-white"> Waage</strong> ist die
          kardinale Luft \u2014 der harmonische Wind, der f&uuml;r Balance, &Auml;sthetik und
          Diplomatie steht. <strong className="text-white"> Wassermann</strong> ist die fixe
          Luft \u2014 der revolution&auml;re Sturm, der f&uuml;r Innovation, Humanit&auml;t und
          unkonventionelles Denken steht.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">St&auml;rken des Luft-Elements:</strong> Intellekt,
          Kommunikationsf&auml;higkeit, Objektivit&auml;t, Neugier, soziale Intelligenz
          und die F&auml;higkeit, Menschen zusammenzubringen und Ideen zu verbreiten.
          Luft-Menschen sind die Denker, Sprecher und Netzwerker der Gesellschaft.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Schatten des Luft-Elements:</strong> Oberfl&auml;chlichkeit,
          emotionale Distanz, &Uuml;beranalyse, Unentschlossenheit, Nervosit&auml;t und
          die Tendenz, Gef&uuml;hle zu rationalisieren, statt sie zu f&uuml;hlen.
          Unkontrollierte Luft wird zum ziellosen Wirbel.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">K&ouml;rperbereiche:</strong> Luft regiert die Lunge,
          Arme und H&auml;nde (Zwillinge), die Nieren und den unteren R&uuml;cken (Waage)
          sowie das Nervensystem und die Durchblutung (Wassermann). Luft-betonte
          Menschen neigen zu nervlichen Beschwerden und brauchen bewusste
          Erdung.
        </p>
      </section>

      {/* Section 4: Wasser-Element */}
      <section id="wasser-element" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Das Wasser-Element
        </h2>
        <div className="p-4 rounded-xl bg-[#4169E1]/5 border border-[#4169E1]/20 mb-6">
          <p className="text-sm font-medium" style={{ color: "#4169E1" }}>
            Zeichen: Krebs, Skorpion, Fische &bull; Qualit&auml;t: Kalt &amp;
            feucht &bull; Polarit&auml;t: Feminin/Passiv &bull; Jahreszeit: Winter
          </p>
        </div>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Wasser ist die Energie der Emotion, der Intuition und der seelischen
          Tiefe. In der Natur ist Wasser die anpassungsf&auml;higste Kraft &uuml;berhaupt
          \u2014 es nimmt jede Form an, findet jeden Weg nach unten, kann sanft
          n&auml;hren oder gewaltig zerst&ouml;ren. Es ist das Element des Unbewussten,
          der Tr&auml;ume und der Transformation. Menschen mit starker Wasser-Betonung
          sind empathisch, intuitiv, emotional tief und seelenvoll.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Die drei Wasser-Zeichen offenbaren verschiedene Tiefen.
          <strong className="text-white"> Krebs</strong> ist das kardinale Wasser \u2014 die
          n&auml;hrende Quelle, die f&uuml;r F&uuml;rsorge, emotionale Sicherheit und die
          Kraft der Familie steht. <strong className="text-white"> Skorpion</strong> ist das
          fixe Wasser \u2014 der tiefe Ozean, der Transformation, Intensit&auml;t und das
          Durchdringen aller Oberfl&auml;chen repr&auml;sentiert.
          <strong className="text-white"> Fische</strong> sind das ver&auml;nderliche Wasser \u2014 der
          grenzenlose Nebel, der f&uuml;r Mystik, Mitgef&uuml;hl und die Verbindung zum
          Unsichtbaren steht.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">St&auml;rken des Wasser-Elements:</strong> Emotionale
          Tiefe, Empathie, Intuition, F&uuml;rsorge, Heilungsf&auml;higkeit und der
          Zugang zu unbewussten Ebenen. Wasser-Menschen sp&uuml;ren, was unter der
          Oberfl&auml;che liegt, und k&ouml;nnen andere auf seelischer Ebene ber&uuml;hren.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          <strong className="text-white">Schatten des Wasser-Elements:</strong> Launenhaftigkeit,
          Manipulation durch Gef&uuml;hle, &Uuml;berempfindlichkeit, Realit&auml;tsflucht,
          Co-Abh&auml;ngigkeit und das Ertrinken in eigenen oder fremden Emotionen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          <strong className="text-white">K&ouml;rperbereiche:</strong> Wasser regiert Brust und
          Magen (Krebs), die Fortpflanzungsorgane (Skorpion) und die F&uuml;&szlig;e sowie
          das Lymphsystem (Fische). Wasser-betonte Menschen sind anf&auml;llig f&uuml;r
          Fl&uuml;ssigkeitsstau, emotionale Essst&ouml;rungen und psychosomatische
          Beschwerden.
        </p>
      </section>

      {/* Section 5: Wechselwirkungen */}
      <section id="wechselwirkungen" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Wechselwirkungen der Elemente
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Die vier Elemente existieren nicht isoliert \u2014 sie interagieren
          st&auml;ndig miteinander. In deinem Geburtschart treffen verschiedene
          Element-Energien aufeinander, und ihre Wechselwirkungen erzeugen die
          Dynamik deiner Pers&ouml;nlichkeit. Manche Kombinationen verst&auml;rken sich,
          andere erzeugen Spannung.
        </p>

        <div className="space-y-4 my-6">
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-3">
              <span style={{ color: "#FF6B35" }}>Feuer</span>
              {" + "}
              <span style={{ color: "#87CEEB" }}>Luft</span>
              {" = Verst&auml;rkung"}
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Luft f&auml;cht Feuer an und bringt es zum Lodern. Diese Kombination
              erzeugt Begeisterung, kreative Explosionen und ansteckende Ideen.
              Feuer liefert die Leidenschaft, Luft die Ideen. Zusammen sind sie
              eine Kraft der Inspiration und des Handelns. Die Gefahr: Alles
              brennt zu schnell und hinterl&auml;sst nur Asche. Es braucht Erde oder
              Wasser als Ausgleich, um die Flamme nachhaltig zu nutzen.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-3">
              <span style={{ color: "#4169E1" }}>Wasser</span>
              {" + "}
              <span style={{ color: "#8B7355" }}>Erde</span>
              {" = Stabilisierung"}
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Wasser macht die Erde fruchtbar, Erde gibt dem Wasser Form und
              Richtung. Diese Kombination schafft nachhaltige Kreativit&auml;t,
              emotionale Stabilit&auml;t und die F&auml;higkeit, Gef&uuml;hle in konkrete
              Ergebnisse zu verwandeln. Wasser sp&uuml;rt, was gebraucht wird, Erde
              setzt es um. Die Gefahr: Zu viel Wasser verwandelt Erde in Schlamm
              \u2014 Emotionen blockieren das Handeln. Balance ist entscheidend.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-3">
              <span style={{ color: "#FF6B35" }}>Feuer</span>
              {" + "}
              <span style={{ color: "#4169E1" }}>Wasser</span>
              {" = Spannung &amp; Dampf"}
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Feuer und Wasser sind Gegens&auml;tze, die enorme Energie freisetzen.
              Feuer verdampft Wasser, Wasser l&ouml;scht Feuer \u2014 das erzeugt Dampf,
              also rohe Transformationsenergie. Menschen mit dieser Kombination
              erleben einen st&auml;ndigen inneren Kampf zwischen Impuls (Feuer) und
              Gef&uuml;hl (Wasser). Wenn sie lernen, beides zu integrieren, werden sie
              zu kraftvollen Heilern und Transformatoren.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-3">
              <span style={{ color: "#8B7355" }}>Erde</span>
              {" + "}
              <span style={{ color: "#87CEEB" }}>Luft</span>
              {" = Reibung &amp; Wachstum"}
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Erde will bewahren und stabilisieren, Luft will ver&auml;ndern und
              bewegen. Diese Spannung erzeugt Reibung, aber auch enormes
              Wachstumspotenzial. Luft bringt neue Ideen in die starre Erde,
              Erde gibt den fl&uuml;chtigen Ideen der Luft eine konkrete Form. Wer
              beide Energien in sich tr&auml;gt, kann Vision&auml;res realisieren \u2014 aber
              muss den inneren Konflikt zwischen Sicherheit und Freiheit bewusst
              navigieren.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-3">
              <span style={{ color: "#FF6B35" }}>Feuer</span>
              {" + "}
              <span style={{ color: "#8B7355" }}>Erde</span>
              {" = Vulkan"}
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Feuer unter der Erde erzeugt einen Vulkan \u2014 eine Kombination aus
              visionärer Energie und praktischer Umsetzungskraft. Feuer hat die
              Vision, Erde baut die Struktur. Menschen mit dieser Kombination
              k&ouml;nnen gro&szlig;e Projekte verwirklichen, weil sie sowohl den Antrieb
              als auch die Ausdauer haben. Die Gefahr: Wenn das Feuer die Erde
              durchbricht, kommt es zur Eruption \u2014 Burnout durch zu viel
              ehrgeiziges Schaffen.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-3">
              <span style={{ color: "#87CEEB" }}>Luft</span>
              {" + "}
              <span style={{ color: "#4169E1" }}>Wasser</span>
              {" = Wolken &amp; Regen"}
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Luft hebt Wasser in die H&ouml;he und verwandelt es in Wolken \u2014 eine
              Mischung aus Gef&uuml;hl und Gedanke. Diese Kombination erzeugt emotionale
              Intelligenz, poetischen Ausdruck und die F&auml;higkeit, Gef&uuml;hle in
              Worte zu fassen. Luft gibt dem Wasser eine Sprache, Wasser gibt
              der Luft eine Seele. Die Gefahr: &Uuml;berm&auml;&szlig;iges Analysieren von
              Gef&uuml;hlen oder emotionalisiertes Denken.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section id="faq" className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          H&auml;ufige Fragen
        </h2>
        <FAQAccordion items={faqItems} />
      </section>
    </WikiLayout>
  );
}
