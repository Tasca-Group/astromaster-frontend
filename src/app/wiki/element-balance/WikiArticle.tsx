"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "element-verteilung", title: "Element-Verteilung lesen" },
  { id: "dominantes-element", title: "Dominantes Element" },
  { id: "fehlendes-element", title: "Fehlendes Element" },
  { id: "balance-herstellen", title: "Balance herstellen" },
  { id: "praktische-tipps", title: "Praktische Tipps" },
  { id: "faq", title: "H\u00e4ufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/elementar-analyse", label: "Elementar-Analyse" },
  { href: "/wiki/vier-elemente", label: "Die 4 Elemente" },
  { href: "/wiki/siderische-astrologie", label: "Siderische Astrologie" },
];

const faqItems = [
  {
    question: "Was ist Element-Dominanz in der Astrologie?",
    answer:
      "Element-Dominanz bedeutet, dass die Mehrheit deiner Planeten in Zeichen eines bestimmten Elements steht. Wenn z.B. vier oder mehr deiner zehn Planeten in Feuer-Zeichen stehen, bist du Feuer-dominant. Das pr\u00e4gt deine Grundenergie, dein Temperament und deine nat\u00fcrlichen Reaktionsmuster im Alltag.",
  },
  {
    question: "Was passiert, wenn ein Element komplett fehlt?",
    answer:
      "Ein fehlendes Element ist keine Schw\u00e4che, sondern ein Entwicklungsfeld. Du hast in diesem Bereich keine nat\u00fcrliche Ausstattung und musst die Qualit\u00e4ten bewusst kultivieren. Oft entsteht eine besondere Faszination f\u00fcr das fehlende Element, und du wirst magnetisch von Menschen angezogen, die es stark haben.",
  },
  {
    question: "Z\u00e4hlen alle Planeten gleich?",
    answer:
      "Nein. Sonne und Mond haben den st\u00e4rksten Einfluss und erhalten eine h\u00f6here Gewichtung. Die pers\u00f6nlichen Planeten (Merkur, Venus, Mars) pr\u00e4gen den Alltag, w\u00e4hrend die \u00e4u\u00dferen Planeten (Jupiter bis Pluto) eher generationsbedingte und tiefere Muster zeigen. AstroMaster ber\u00fccksichtigt diese Gewichtung automatisch.",
  },
  {
    question: "Kann ich meine Element-Balance \u00e4ndern?",
    answer:
      "Deine Geburtschart-Balance ist fix und \u00e4ndert sich nie. Aber du kannst unterrepr\u00e4sentierte Elemente durch bewusste Lebensf\u00fchrung st\u00e4rken: Sport und Kreativit\u00e4t f\u00fcr Feuer, Routinen und Natur f\u00fcr Erde, Lernen und Austausch f\u00fcr Luft, Meditation und Gef\u00fchle f\u00fcr Wasser.",
  },
  {
    question: "Was ist besser: ein dominantes Element oder Gleichgewicht?",
    answer:
      "Weder noch ist \u201ebesser\u201c. Ein starkes dominantes Element gibt dir klare St\u00e4rken und eine eindeutige Identit\u00e4t, hat aber auch ausgepr\u00e4gte Schatten. Eine gleichm\u00e4\u00dfige Verteilung macht dich vielseitig, aber manchmal unentschlossen. Das Ziel ist nicht Perfektion, sondern Bewusstsein \u2014 zu wissen, wo deine St\u00e4rken und blinden Flecken liegen.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Element-Balance"
      subtitle="Was bedeutet es, wenn ein Element in deinem Chart dominiert \u2014 oder fehlt? Erfahre, wie du deine Element-Verteilung liest, welche Auswirkungen Dominanz und Mangel haben und wie du bewusst Balance herstellst."
      breadcrumb="Element-Balance"
      sections={sections}
      ctaText="Entdecke deine Element-Balance \u2014 Jetzt Gratis-Check starten"
      relatedTopics={relatedTopics}
    >
      {/* Section 1: Element-Verteilung lesen */}
      <section id="element-verteilung" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Wie du deine Element-Verteilung liest
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Dein Geburtschart enth&auml;lt zehn Planeten, und jeder steht in einem der
          zw&ouml;lf Tierkreiszeichen. Da jedes Zeichen zu einem Element geh&ouml;rt, hat
          jeder Planet automatisch ein Element. Die Element-Verteilung ergibt
          sich aus der Z&auml;hlung: Wie viele Planeten stehen in Feuer-Zeichen? Wie
          viele in Erde? In Luft? In Wasser?
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Ein einfaches Beispiel: Deine Sonne steht im Widder (Feuer), dein Mond
          im Krebs (Wasser), Merkur in den Zwillingen (Luft), Venus im Stier
          (Erde), Mars im L&ouml;wen (Feuer), Jupiter in den Fischen (Wasser), Saturn
          im Steinbock (Erde), Uranus im Wassermann (Luft), Neptun in den
          Fischen (Wasser), Pluto im Skorpion (Wasser). Das ergibt: 2 Feuer, 2
          Erde, 2 Luft, 4 Wasser \u2014 du bist Wasser-dominant.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Allerdings z&auml;hlen nicht alle Planeten gleich viel. Sonne und Mond
          \u2014 die beiden &bdquo;Lichter&ldquo; \u2014 haben den st&auml;rksten Einfluss auf deine
          Pers&ouml;nlichkeit. AstroMaster gewichtet sie deshalb st&auml;rker. Die
          pers&ouml;nlichen Planeten (Merkur, Venus, Mars) pr&auml;gen dein
          Alltagsverhalten, w&auml;hrend die &auml;u&szlig;eren Planeten (Jupiter bis Pluto)
          tiefere, generationsbedingte Muster zeigen.
        </p>
        <p className="text-base text-muted/90 leading-[1.7]">
          Wichtig: AstroMaster verwendet die <strong className="text-white">siderischen</strong> Planetenpositionen
          f&uuml;r die Element-Berechnung. Das bedeutet, dass die Zuordnung auf den
          tats&auml;chlichen astronomischen Sternpositionen basiert \u2014 nicht auf dem
          tropischen System. Deshalb kann deine Element-Balance bei AstroMaster
          anders ausfallen als bei tropischen Systemen.
        </p>
      </section>

      {/* Section 2: Dominantes Element */}
      <section id="dominantes-element" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Was ein dominantes Element bedeutet
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Ein dominantes Element pr&auml;gt dein Grundtemperament, deine Reaktionsmuster
          und deine nat&uuml;rlichen St&auml;rken. Es bestimmt, wie du instinktiv auf die
          Welt reagierst \u2014 ob du mit Feuer vorangehst, mit Erde aufbaust, mit
          Luft analysierst oder mit Wasser f&uuml;hlst.
        </p>

        <div className="space-y-4 my-6">
          <div className="p-5 rounded-xl border" style={{ borderColor: "rgba(255, 107, 53, 0.3)", backgroundColor: "rgba(255, 107, 53, 0.03)" }}>
            <h3 className="text-lg font-medium mb-3" style={{ color: "#FF6B35" }}>
              Dominantes Feuer
            </h3>
            <p className="text-base text-muted/90 leading-[1.7] mb-3">
              Du bist von Natur aus enthusiastisch, mutig und
              handlungsorientiert. Du reagierst schnell, bist ungeduldig mit
              Langsamkeit und brauchst st&auml;ndige Herausforderungen, um dich
              lebendig zu f&uuml;hlen. Du bist ein Macher und Inspirator.
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">St&auml;rken:</strong> Charisma, Mut,
              Entschlossenheit, Optimismus.
              <strong className="text-white"> Herausforderungen:</strong> Burnout,
              Ungeduld, Konflikte durch Impulsivit&auml;t, Schwierigkeiten beim
              Zuh&ouml;ren. Du brauchst bewusst Erde (Routine, Geduld) und Wasser
              (Empathie, Innehalten) als Ausgleich.
            </p>
          </div>
          <div className="p-5 rounded-xl border" style={{ borderColor: "rgba(139, 115, 85, 0.3)", backgroundColor: "rgba(139, 115, 85, 0.03)" }}>
            <h3 className="text-lg font-medium mb-3" style={{ color: "#8B7355" }}>
              Dominante Erde
            </h3>
            <p className="text-base text-muted/90 leading-[1.7] mb-3">
              Du bist zuverl&auml;ssig, geduldig und praktisch veranlagt. Du denkst
              langfristig, baust Strukturen auf und sch&auml;tzt Qualit&auml;t. Du bist das
              R&uuml;ckgrat jeder Gemeinschaft und jemand, auf den man sich verlassen
              kann.
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">St&auml;rken:</strong> Ausdauer, Zuverl&auml;ssigkeit,
              Sinnlichkeit, praktischer Verstand.
              <strong className="text-white"> Herausforderungen:</strong> Sturheit, Angst
              vor Ver&auml;nderung, Materialismus, emotionale Verschlossenheit.
              Du brauchst bewusst Feuer (Spontanit&auml;t) und Luft (neue Ideen)
              als Gegengewicht.
            </p>
          </div>
          <div className="p-5 rounded-xl border" style={{ borderColor: "rgba(135, 206, 235, 0.3)", backgroundColor: "rgba(135, 206, 235, 0.03)" }}>
            <h3 className="text-lg font-medium mb-3" style={{ color: "#87CEEB" }}>
              Dominante Luft
            </h3>
            <p className="text-base text-muted/90 leading-[1.7] mb-3">
              Du lebst im Kopf und in der Welt der Ideen. Du bist intellektuell
              neugierig, kommunikativ und sozial begabt. Du siehst
              Zusammenh&auml;nge, vermittelst zwischen Menschen und hinterfragst
              st&auml;ndig.
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">St&auml;rken:</strong> Intellekt,
              Kommunikationsf&auml;higkeit, Objektivit&auml;t, Anpassungsf&auml;higkeit.
              <strong className="text-white"> Herausforderungen:</strong> Emotionale
              Distanz, Unentschlossenheit, Nervosit&auml;t, &Uuml;beranalyse. Du
              brauchst bewusst Wasser (Gef&uuml;hle zulassen) und Erde (Handeln
              statt Denken) als Erdung.
            </p>
          </div>
          <div className="p-5 rounded-xl border" style={{ borderColor: "rgba(65, 105, 225, 0.3)", backgroundColor: "rgba(65, 105, 225, 0.03)" }}>
            <h3 className="text-lg font-medium mb-3" style={{ color: "#4169E1" }}>
              Dominantes Wasser
            </h3>
            <p className="text-base text-muted/90 leading-[1.7] mb-3">
              Du lebst im Gef&uuml;hl und navigierst durch die Welt mit deiner
              Intuition. Du sp&uuml;rst, was andere brauchen, bevor sie es
              aussprechen. Du bist empathisch, tief und seelenvoll.
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">St&auml;rken:</strong> Empathie, Intuition,
              emotionale Tiefe, Heilungsf&auml;higkeit.
              <strong className="text-white"> Herausforderungen:</strong> Launenhaftigkeit,
              &Uuml;berempfindlichkeit, Grenzlosigkeit, Realit&auml;tsflucht. Du brauchst
              bewusst Luft (Objektivit&auml;t) und Feuer (Handlungskraft) als
              Stabilisatoren.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Fehlendes Element */}
      <section id="fehlendes-element" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Was ein fehlendes Element bedeutet
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Ein komplett fehlendes Element (kein Planet in diesem Element) ist
          relativ selten, kommt aber vor. Es ist kein Defizit, sondern ein
          Entwicklungsfeld \u2014 ein Bereich, in dem du keine nat&uuml;rliche
          Grundausstattung hast und die Qualit&auml;ten bewusst aufbauen darfst.
          Oft zeigt sich eine besondere Faszination f&uuml;r das fehlende Element.
        </p>

        <div className="space-y-4 my-6">
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-3" style={{ color: "#FF6B35" }}>
              Fehlendes Feuer
            </h3>
            <p className="text-base text-muted/90 leading-[1.7] mb-3">
              Ohne Feuer fehlt dir der nat&uuml;rliche Antrieb, die Spontanit&auml;t und
              der Mut, Dinge einfach anzupacken. Du z&ouml;gerst, wo andere handeln.
              Du hast Schwierigkeiten, dich selbst zu motivieren und f&uuml;r dich
              einzustehen. Begeisterung f&uuml;hlst du selten in der Intensit&auml;t, die
              andere beschreiben.
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">Ausgleich:</strong> Regelm&auml;&szlig;iger Sport (besonders
              intensive Formen wie HIIT, Kampfsport oder Tanzen), kreative
              Projekte beginnen, bewusst kleine Risiken eingehen, rote und
              orange Farben in den Alltag bringen, feurige Gew&uuml;rze (Chili,
              Ingwer, Pfeffer) essen, Kerzenmeditationen.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-3" style={{ color: "#8B7355" }}>
              Fehlende Erde
            </h3>
            <p className="text-base text-muted/90 leading-[1.7] mb-3">
              Ohne Erde fehlt dir die nat&uuml;rliche Erdung, Geduld und
              Strukturf&auml;higkeit. Du schwebst durch das Leben, bringst Dinge nicht
              zu Ende und hast Schwierigkeiten mit Finanzen, Routine und
              k&ouml;rperlicher Gesundheit. Du bist unruhig und sehnst dich nach
              Stabilit&auml;t, die dir fremd ist.
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">Ausgleich:</strong> Feste Tagesroutinen einf&uuml;hren,
              in der Natur spazieren gehen (barfu&szlig; im Gras), Gartenarbeit oder
              T&ouml;pfern, kochen mit frischen Zutaten, regelm&auml;&szlig;ige K&ouml;rperarbeit
              (Yoga, Massage), erdige Kristalle (Turmalin, H&auml;matit,
              Tigerauge), braune und gr&uuml;ne Farben.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-3" style={{ color: "#87CEEB" }}>
              Fehlende Luft
            </h3>
            <p className="text-base text-muted/90 leading-[1.7] mb-3">
              Ohne Luft fehlt dir die nat&uuml;rliche intellektuelle Distanz, die
              Kommunikationsf&auml;higkeit und die Objektivit&auml;t. Du nimmst Dinge
              pers&ouml;nlich, hast Schwierigkeiten, dich auszudr&uuml;cken, und kannst
              dich in deiner eigenen Perspektive verfangen. Smalltalk f&uuml;hlt sich
              unangenehm an.
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">Ausgleich:</strong> Regelm&auml;&szlig;ig lesen (B&uuml;cher, nicht
              nur Social Media), Schreiben &uuml;ben (Journaling, Briefe), neue
              Menschen kennenlernen, Atemübungen und Pranayama, Podcasts und
              Diskussionsrunden, gelbe und hellblaue Farben, an windigen Orten
              spazieren gehen.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-3" style={{ color: "#4169E1" }}>
              Fehlendes Wasser
            </h3>
            <p className="text-base text-muted/90 leading-[1.7] mb-3">
              Ohne Wasser fehlt dir der nat&uuml;rliche Zugang zu deinen Gef&uuml;hlen.
              Emotionale Tiefe ist dir fremd, du wirkst auf andere k&uuml;hl oder
              unnahbar. Empathie f&auml;llt dir schwer, und du rationalisierst
              Gef&uuml;hle weg, statt sie zu f&uuml;hlen. Trauern und Loslassen sind
              besondere Herausforderungen.
            </p>
            <p className="text-base text-muted/90 leading-[1.7]">
              <strong className="text-white">Ausgleich:</strong> Meditation und Achtsamkeit
              (besonders gef&uuml;hlsorientierte Formen), Zeit am oder im Wasser
              verbringen (Schwimmen, Baden, Meerblick), Musik h&ouml;ren, die
              Gef&uuml;hle ausl&ouml;st, Journaling &uuml;ber Emotionen, blaue und silberne
              Farben, Mondstein und Aquamarin als Kristalle.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Balance herstellen */}
      <section id="balance-herstellen" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Element-Balance herstellen
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Element-Balance bedeutet nicht, eine perfekte Gleichverteilung
          anzustreben \u2014 das w&auml;re weder m&ouml;glich noch w&uuml;nschenswert. Deine
          nat&uuml;rliche Ungleichverteilung ist das, was dich einzigartig macht. Balance
          bedeutet vielmehr: Die St&auml;rken deines dominanten Elements bewusst
          einsetzen und die Schatten durch gezielte Aktivit&auml;ten abmildern.
        </p>
        <p className="text-base text-muted/90 leading-[1.7] mb-4">
          Es gibt vier Bereiche, &uuml;ber die du deine Element-Balance beeinflussen
          kannst: <strong className="text-white">Aktivit&auml;ten</strong> (was du tust),
          <strong className="text-white"> Umgebungen</strong> (wo du dich aufh&auml;ltst),
          <strong className="text-white"> Ern&auml;hrung</strong> (was du isst) und
          <strong className="text-white"> Beziehungen</strong> (mit wem du dich umgibst).
        </p>

        <div className="overflow-x-auto rounded-xl border border-border mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gold/10 border-b border-gold/20">
                <th className="text-left px-4 py-3 text-gold font-medium">Bereich</th>
                <th className="text-left px-4 py-3 font-medium" style={{ color: "#FF6B35" }}>Feuer st&auml;rken</th>
                <th className="text-left px-4 py-3 font-medium" style={{ color: "#8B7355" }}>Erde st&auml;rken</th>
                <th className="text-left px-4 py-3 font-medium" style={{ color: "#87CEEB" }}>Luft st&auml;rken</th>
                <th className="text-left px-4 py-3 font-medium" style={{ color: "#4169E1" }}>Wasser st&auml;rken</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              <tr className="bg-card">
                <td className="px-4 py-3 font-medium text-white">Aktivit&auml;t</td>
                <td className="px-4 py-3 text-muted">Sport, Kreativprojekte, Abenteuer</td>
                <td className="px-4 py-3 text-muted">Gartenarbeit, Kochen, Wandern</td>
                <td className="px-4 py-3 text-muted">Lesen, Schreiben, Debattieren</td>
                <td className="px-4 py-3 text-muted">Meditation, Schwimmen, Kunst</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3 font-medium text-white">Umgebung</td>
                <td className="px-4 py-3 text-muted">W&uuml;ste, Kamin, Sonnenlicht</td>
                <td className="px-4 py-3 text-muted">Wald, Gebirge, Garten</td>
                <td className="px-4 py-3 text-muted">H&ouml;he, windige Orte, offene R&auml;ume</td>
                <td className="px-4 py-3 text-muted">Meer, See, Regen, Wasserf&auml;lle</td>
              </tr>
              <tr className="bg-card">
                <td className="px-4 py-3 font-medium text-white">Ern&auml;hrung</td>
                <td className="px-4 py-3 text-muted">Scharf, Ingwer, Chili, Zimt</td>
                <td className="px-4 py-3 text-muted">Wurzelgem&uuml;se, Vollkorn, N&uuml;sse</td>
                <td className="px-4 py-3 text-muted">Leichte Kost, Kr&auml;uter, Salate</td>
                <td className="px-4 py-3 text-muted">Suppen, Tee, Wasserreiche Fr&uuml;chte</td>
              </tr>
              <tr className="bg-card/50">
                <td className="px-4 py-3 font-medium text-white">Kristalle</td>
                <td className="px-4 py-3 text-muted">Karneol, Granat, Citrin</td>
                <td className="px-4 py-3 text-muted">H&auml;matit, Turmalin, Tigerauge</td>
                <td className="px-4 py-3 text-muted">Sodalith, Fluorit, Amethyst</td>
                <td className="px-4 py-3 text-muted">Mondstein, Aquamarin, Lapislazuli</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base text-muted/90 leading-[1.7]">
          Der Schl&uuml;ssel zur Balance ist Bewusstsein. Wenn du wei&szlig;t, welches
          Element bei dir unterrepr&auml;sentiert ist, kannst du gezielt kleine
          Gewohnheiten einbauen, die dieses Element st&auml;rken. Es geht nicht
          darum, jemand anderes zu werden, sondern darum, dein Repertoire zu
          erweitern.
        </p>
      </section>

      {/* Section 5: Praktische Tipps */}
      <section id="praktische-tipps" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.1em] mb-6">
          Praktische Tipps f&uuml;r den Alltag
        </h2>
        <p className="text-base text-muted/90 leading-[1.7] mb-6">
          Hier sind konkrete, sofort umsetzbare Tipps, um deine Element-Balance
          im Alltag zu verbessern:
        </p>

        <div className="space-y-4 my-6">
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium text-gold mb-3">
              Morgenroutine nach Element
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Starte den Tag mit einer Aktivit&auml;t, die dein schwaches Element
              anspricht. Fehlt Feuer? Beginne mit einer kurzen Sporteinheit.
              Fehlt Erde? Mache eine feste Morgenroutine. Fehlt Luft? Lies zehn
              Minuten. Fehlt Wasser? Starte mit einer Meditation. Schon 10
              Minuten am Morgen k&ouml;nnen den ganzen Tag ver&auml;ndern.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium text-gold mb-3">
              Element-Tagebuch f&uuml;hren
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Notiere am Ende jedes Tages: Welches Element war heute am
              st&auml;rksten? Warst du eher feurig (aktiv, impulsiv), erdig (produktiv,
              routiniert), luftig (kommunikativ, nachdenklich) oder w&auml;ssrig
              (emotional, intuitiv)? Nach einer Woche siehst du klare Muster
              und kannst gezielt gegensteuern.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium text-gold mb-3">
              Bewusste Beziehungen nutzen
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Wir werden unbewusst von Menschen angezogen, die unsere fehlenden
              Elemente haben. Nutze das bewusst: Wenn dir Feuer fehlt, verbringe
              Zeit mit feurigen Menschen. Ihre Energie &bdquo;f&auml;rbt ab&ldquo; und aktiviert
              die Feuer-Qualit&auml;ten in dir. Gleichzeitig: Verstehe, warum
              bestimmte Beziehungen dich ersch&ouml;pfen \u2014 vielleicht verst&auml;rken sie
              ein Element, das du ohnehin zu viel hast.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium text-gold mb-3">
              Saisonale Element-Arbeit
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Die Jahreszeiten verst&auml;rken nat&uuml;rlich bestimmte Elemente: Fr&uuml;hling
              (Luft), Sommer (Feuer), Herbst (Erde), Winter (Wasser). Nutze
              die Jahreszeiten, um gezielt das jeweilige Element zu erkunden.
              Im Winter bietet sich Wasser-Arbeit an (Innenschau, Meditation),
              im Sommer Feuer-Arbeit (Abenteuer, Kreativit&auml;t). So arbeitest du
              mit der Natur statt gegen sie.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium text-gold mb-3">
              Die 4-Elemente-Woche
            </h3>
            <p className="text-base text-muted/90 leading-[1.7]">
              Widme jede Woche einen Tag bewusst einem Element: Montag (Wasser:
              Meditation, Bad, Gef&uuml;hle), Mittwoch (Luft: Lernen, Austausch,
              Neues), Freitag (Feuer: Sport, Kreativit&auml;t, Abenteuer), Sonntag
              (Erde: Natur, Kochen, Ruhe). Die &uuml;brigen Tage flie&szlig;en nat&uuml;rlich.
              Nach einem Monat wirst du sp&uuml;ren, welches Element-Ritual dir am
              meisten bringt.
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
