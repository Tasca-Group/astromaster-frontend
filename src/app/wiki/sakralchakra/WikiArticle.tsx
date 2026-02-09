"use client";

import WikiLayout, { type WikiSection } from "@/components/WikiLayout";
import FAQAccordion from "@/components/FAQAccordion";

const sections: WikiSection[] = [
  { id: "sanskrit-name", title: "Sanskrit-Name und Bedeutung" },
  { id: "position-farbe", title: "Position und Farbe" },
  { id: "kernthemen", title: "Kernthemen" },
  { id: "beschreibung", title: "Ausf\u00fchrliche Beschreibung" },
  { id: "blockade", title: "Zeichen f\u00fcr Blockade" },
  { id: "balance", title: "Zeichen f\u00fcr Balance" },
  { id: "uebungen", title: "\u00dcbungen zur Aktivierung" },
  { id: "edelsteine", title: "Edelsteine und Farben" },
  { id: "verbindung", title: "Verbindung zu Sternzeichen" },
  { id: "faq", title: "H\u00e4ufige Fragen" },
];

const relatedTopics = [
  { href: "/wiki/chakren", label: "Chakren \u00dcbersicht" },
  { href: "/wiki/wurzelchakra", label: "Wurzelchakra" },
  { href: "/wiki/solarplexuschakra", label: "Solarplexuschakra" },
];

const faqItems = [
  {
    question: "Wie erkenne ich ein blockiertes Sakralchakra?",
    answer:
      "Typische Anzeichen f\u00fcr ein blockiertes Sakralchakra sind emotionale Taubheit, Schuldgef\u00fchle rund um Genuss und Sexualit\u00e4t, Kreativit\u00e4tsblockaden, Suchtverhalten und das Gef\u00fchl, das Leben sei grau und freudlos. K\u00f6rperlich k\u00f6nnen Menstruationsbeschwerden, Nierenprobleme oder Probleme im unteren R\u00fccken auftreten. Auch ein \u00fcbertriebenes Kontrollbed\u00fcrfnis gegen\u00fcber den eigenen Emotionen kann auf eine Blockade im zweiten Chakra hinweisen.",
  },
  {
    question: "Welche \u00dcbungen helfen beim Sakralchakra?",
    answer:
      "H\u00fcft\u00f6ffnende Yoga-Posen wie der Schmetterling (Baddha Konasana) und die Taube (Eka Pada Rajakapotasana) sind besonders wirksam. Auch Tanzen, flie\u00dfende Bewegungen, Zeit am Wasser und kreatives Schaffen ohne Bewertung aktivieren das Svadhisthana. Das Chanten des Mantras VAM mit Fokus auf den Unterbauch unterst\u00fctzt den Prozess zus\u00e4tzlich.",
  },
  {
    question: "Was hat der Mond mit dem Sakralchakra zu tun?",
    answer:
      "Der Mond ist der Herrscherplanet des Sakralchakras. Er regiert die Gef\u00fchlswelt, die Intuition und den nat\u00fcrlichen Rhythmus des Lebens \u2014 genau wie das Wasser, das Element des zweiten Chakras. Die Wasserzeichen Krebs, Skorpion und Fische haben eine besonders starke Verbindung zum Sakralchakra. Der Mondstand in deinem siderischen Geburtshoroskop gibt Aufschluss \u00fcber deine emotionale Grundstruktur und wie du Gef\u00fchle verarbeitest.",
  },
];

export default function WikiArticle() {
  return (
    <WikiLayout
      title="Sakralchakra (Svadhisthana)"
      subtitle="Das zweite Chakra \u2014 Kreativit\u00e4t, Emotionen, Sinnlichkeit."
      breadcrumb="Chakren > Sakralchakra"
      sections={sections}
      ctaText="Entdecke dein kosmisches Profil \u2014 Jetzt Gratis-Check starten"
      relatedTopics={relatedTopics}
    >
      {/* Section 1: Sanskrit-Name und Bedeutung */}
      <section id="sanskrit-name" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Sanskrit-Name und Bedeutung
        </h2>
        <div
          className="p-4 rounded-xl mb-6"
          style={{
            borderLeft: "4px solid #F97316",
            backgroundColor: "rgba(249, 115, 22, 0.05)",
          }}
        >
          <p className="text-sm font-medium" style={{ color: "#F97316" }}>
            Sanskrit: Svadhisthana (&bdquo;S\u00fc\u00dfe, eigener Ort&ldquo;) | Position: Unterbauch, ca. 5 cm unter dem Nabel | Farbe: Orange | Element: Wasser | Planet: Mond | Mantra: VAM
          </p>
        </div>
        <p className="text-muted leading-relaxed mb-4">
          Svadhisthana setzt sich aus den Sanskrit-W\u00f6rtern &bdquo;Sva&ldquo; (das Eigene, das Selbst) und &bdquo;Adhisthana&ldquo; (Wohnst\u00e4tte, Ort) zusammen. W\u00f6rtlich \u00fcbersetzt bedeutet es &bdquo;der eigene Ort&ldquo; oder &bdquo;der S\u00fc\u00dfe Ort&ldquo;. Diese Benennung ist kein Zufall: Das Sakralchakra ist der Sitz deiner emotionalen Identit\u00e4t, deiner Kreativit\u00e4t und deiner F\u00e4higkeit, das Leben zu genie\u00dfen. Es ist der Ort, an dem du wirklich &bdquo;zu Hause&ldquo; bist \u2014 in deinen Gef\u00fchlen, deiner Sinnlichkeit und deinem kreativen Ausdruck.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          In der tantrischen Tradition wird das Sakralchakra als sechsbl\u00e4ttriger Lotus dargestellt, dessen Bl\u00e4tter f\u00fcr sechs negative Qualit\u00e4ten stehen, die es zu \u00fcberwinden gilt: Zorn, Eifersucht, Grausamkeit, Hass, Stolz und Begierde. Die Transformation dieser Schatten-Qualit\u00e4ten in ihre lichten Gegenst\u00fccke \u2014 Geduld, Gro\u00dfz\u00fcgigkeit, Mitgef\u00fchl, Liebe, Demut und Losgelassenheit \u2014 ist die zentrale Aufgabe der Arbeit mit dem zweiten Chakra.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Das Svadhisthana ist die Energiezentrale deiner Emotionen und deiner Sch\u00f6pferkraft. Es steht in direkter Verbindung mit dem Element Wasser, das f\u00fcr Fluss, Ver\u00e4nderung und Anpassung steht. So wie Wasser sich an jede Form anpasst und dennoch seine Essenz beh\u00e4lt, lehrt uns das Sakralchakra, mit den Wellen des Lebens zu flie\u00dfen, statt gegen sie ank\u00e4mpfen zu wollen.
        </p>
      </section>

      {/* Section 2: Position und Farbe */}
      <section id="position-farbe" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Position und Farbe
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Sakralchakra befindet sich im Unterbauch, etwa f\u00fcnf Zentimeter unterhalb des Nabels. Es liegt im Bereich des Kreuzbeins (Sacrum) \u2014 daher auch der Name &bdquo;Sakralchakra&ldquo;. Dieser K\u00f6rperbereich ist das Zentrum der Fortpflanzungsorgane und damit symbolisch der Ort, an dem neues Leben entsteht. Es ist kein Zufall, dass Kreativit\u00e4t und Fortpflanzung dasselbe Chakra teilen: Beide sind Akte der Sch\u00f6pfung.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Die Farbe des Sakralchakras ist Orange \u2014 eine warme, einladende Farbe, die Freude, Kreativit\u00e4t und Lebensenergie ausstrahlt. Orange entsteht aus der Mischung von Rot (Wurzelchakra/\u00dcberleben) und Gelb (Solarplexus/Willenskraft), was symbolisch die Evolution von reinem \u00dcberleben hin zu bewusstem Erleben darstellt. Es ist die Farbe des Sonnenuntergangs, der reifen Fr\u00fcchte und des w\u00e4rmenden Kaminfeuers \u2014 Bilder, die Genuss, W\u00e4rme und Geborgenheit hervorrufen.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Wenn du dich emotional blockiert oder kreativ leer f\u00fchlst, kann die Visualisierung eines leuchtend orangefarbenen Lichts in deinem Unterbauch helfen, die Energie wieder in Fluss zu bringen. Stell dir vor, wie dieses orange Licht wie eine warme, flie\u00dfende Kugel sanft pulsiert und mit jedem Atemzug w\u00e4rmer und strahlender wird.
        </p>
      </section>

      {/* Section 3: Kernthemen */}
      <section id="kernthemen" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Kernthemen
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Sakralchakra ist das Zentrum deines emotionalen und kreativen Lebens. Es regiert alles, was mit F\u00fchlen, Genie\u00dfen und Erschaffen zu tun hat:
        </p>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start gap-3">
            <span style={{ color: "#F97316" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Kreativit\u00e4t und Sch\u00f6pferkraft</strong> \u2014 Jede Form des kreativen Ausdrucks \u2014 Kunst, Musik, Schreiben, Kochen, Gestalten \u2014 wird vom Sakralchakra gen\u00e4hrt. Es ist die Quelle der Inspiration.</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "#F97316" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Emotionen und Gef\u00fchlswelt</strong> \u2014 Die F\u00e4higkeit, Gef\u00fchle wahrzunehmen, zu verarbeiten und auszudr\u00fccken. Ein gesundes Sakralchakra erm\u00f6glicht das volle Spektrum menschlicher Emotionen.</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "#F97316" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Sexualit\u00e4t und Sinnlichkeit</strong> \u2014 Die gesunde Beziehung zum eigenen K\u00f6rper, zu Ber\u00fchrung, N\u00e4he und sexueller Energie als nat\u00fcrlicher Lebenskraft.</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "#F97316" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Lebensfreude und Genussf\u00e4higkeit</strong> \u2014 Die F\u00e4higkeit, das Leben mit allen Sinnen zu genie\u00dfen, Freude zu empfinden und Sch\u00f6nheit wahrzunehmen.</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "#F97316" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Beziehungen und Verbindung</strong> \u2014 Die F\u00e4higkeit, tiefe emotionale Bindungen einzugehen, N\u00e4he zuzulassen und in Beziehungen zu flie\u00dfen statt zu kontrollieren.</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "#F97316" }} className="mt-1 text-lg leading-none">&bull;</span>
            <span className="text-muted leading-relaxed"><strong className="text-white">Loslassen und Flie\u00dfen</strong> \u2014 Die Kunst, Kontrolle abzugeben, Ver\u00e4nderung zu akzeptieren und mit dem Strom des Lebens zu flie\u00dfen, statt dagegen anzuk\u00e4mpfen.</span>
          </li>
        </ul>
      </section>

      {/* Section 4: Ausf\u00fchrliche Beschreibung */}
      <section id="beschreibung" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Ausf\u00fchrliche Beschreibung
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Sakralchakra entwickelt sich prim\u00e4r zwischen dem 6. Lebensmonat und dem 2. Lebensjahr \u2014 in der Phase, in der ein Kind beginnt, die Welt \u00fcber seine Sinne zu entdecken. Es tastet, schmeckt, riecht und f\u00fchlt alles, was es erreichen kann. Diese sensorische Entdeckungsreise legt den Grundstein f\u00fcr die sp\u00e4tere F\u00e4higkeit, Genuss zu empfinden, kreativ zu sein und emotionale Bindungen einzugehen. Wurde diese Entdeckung unterdr\u00fcckt \u2014 durch \u00fcberm\u00e4\u00dfige Strenge, emotionale K\u00e4lte der Eltern oder Bestrafung f\u00fcr nat\u00fcrliche Neugier \u2014 kann das Sakralchakra nachhaltig gest\u00f6rt werden.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          In unserer modernen Gesellschaft ist das Sakralchakra besonders h\u00e4ufig blockiert. Kulturelle und religi\u00f6se Pr\u00e4gungen haben Generationen lang Schuldgef\u00fchle rund um Genuss, Sexualit\u00e4t und emotionalen Ausdruck ges\u00e4t. Viele Menschen haben gelernt, ihre Gef\u00fchle zu unterdr\u00fccken (&bdquo;Jungen weinen nicht&ldquo;, &bdquo;Sei nicht so empfindlich&ldquo;), ihre Kreativit\u00e4t als unwichtig abzutun (&bdquo;Kunst ist kein richtiger Beruf&ldquo;) und Sinnlichkeit mit Scham zu verbinden. Diese Pr\u00e4gungen sitzen tief im Sakralchakra und manifestieren sich als emotionale Taubheit, Kreativit\u00e4tsblockaden oder die Unf\u00e4higkeit, das Leben wirklich zu genie\u00dfen.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Die Verbindung zum Element Wasser ist zentral f\u00fcr das Verst\u00e4ndnis des Sakralchakras. Wasser ist die Kraft der Ver\u00e4nderung: Es flie\u00dft um Hindernisse herum, h\u00f6hlt den h\u00e4rtesten Stein und passt sich jeder Form an, ohne seine Natur zu verlieren. Ein gesundes Sakralchakra verleiht dir genau diese F\u00e4higkeit: mit den Wellen des Lebens zu flie\u00dfen, Ver\u00e4nderungen anzunehmen und emotionale Herausforderungen geschmeidig zu meistern. Nicht umsonst f\u00fchlen sich viele Menschen instinktiv zum Wasser hingezogen \u2014 zum Meer, zum Fluss, zum Regen \u2014 wenn sie emotionale Heilung brauchen.
        </p>
      </section>

      {/* Section 5: Zeichen f\u00fcr Blockade */}
      <section id="blockade" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Zeichen f\u00fcr Blockade
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Ein blockiertes Sakralchakra zeigt sich durch einen Verlust an Lebensfreude und kreativer Energie. Das Leben f\u00fchlt sich grau und flach an, Emotionen werden unterdr\u00fcckt oder \u00fcberfluten unkontrolliert. Hier sind die h\u00e4ufigsten Anzeichen:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Emotionale Taubheit</strong> \u2014 Das Gef\u00fchl, innerlich betäubt zu sein, nichts mehr richtig zu sp\u00fcren, weder Freude noch Trauer. Ein Schutzmechanismus, der zum Gef\u00e4ngnis geworden ist.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Schuldgef\u00fchle</strong> \u2014 Tiefe Scham und Schuld rund um Genuss, Sexualit\u00e4t und das eigene Verlangen. Das Gef\u00fchl, Freude nicht verdient zu haben.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Sexuelle Dysfunktion</strong> \u2014 Fehlende Libido, Scham rund um Sexualit\u00e4t, Schwierigkeiten mit Intimit\u00e4t oder zwanghaftes sexuelles Verhalten als Kompensation.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Suchtverhalten</strong> \u2014 \u00dcberm\u00e4\u00dfiger Konsum von Alkohol, S\u00fc\u00dfigkeiten, Shopping oder Social Media als Versuch, das innere Leeregef\u00fchl zu f\u00fcllen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Kreativit\u00e4tsblockaden</strong> \u2014 Das Gef\u00fchl, nichts erschaffen zu k\u00f6nnen, keine Inspiration zu finden oder dass die eigene Kreativit\u00e4t wertlos ist.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Kontrollbed\u00fcrfnis</strong> \u2014 Der Zwang, alles unter Kontrolle halten zu m\u00fcssen, Schwierigkeiten beim Loslassen und eine starre Lebensf\u00fchrung ohne Spontanit\u00e4t.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Menstruationsbeschwerden</strong> \u2014 Starke Schmerzen, unregelm\u00e4\u00dfige Zyklen oder PMS k\u00f6nnen auf eine energetische Dysbalance im Sakralchakra hinweisen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Nierenprobleme</strong> \u2014 Die Nieren liegen im Bereich des Sakralchakras und sind in der chinesischen Medizin eng mit der Lebensangst verbunden.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Zeichen f\u00fcr Balance */}
      <section id="balance" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Zeichen f\u00fcr Balance
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Ein ausgeglichenes Sakralchakra zeigt sich in einer nat\u00fcrlichen Lebensfreude und einem flie\u00dfenden Verh\u00e4ltnis zu Emotionen, Kreativit\u00e4t und Sinnlichkeit. Du sp\u00fcrst, dass das Leben sch\u00f6n ist \u2014 nicht weil alles perfekt ist, sondern weil du f\u00e4hig bist, Freude und Genuss in den einfachsten Dingen zu finden:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Emotionale Intelligenz</strong> \u2014 Du kannst Gef\u00fchle wahrnehmen, benennen und verarbeiten, ohne von ihnen \u00fcberw\u00e4ltigt zu werden oder sie zu unterdr\u00fccken.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Sp\u00fcdelende Kreativit\u00e4t</strong> \u2014 Ideen flie\u00dfen nat\u00fcrlich, Inspiration kommt m\u00fchelos und du hast Freude am Erschaffen, unabh\u00e4ngig vom Ergebnis.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Gesunde Sexualit\u00e4t</strong> \u2014 Eine nat\u00fcrliche, schamfreie Beziehung zum eigenen K\u00f6rper und zur sexuellen Energie als Ausdruck von Lebenskraft und Verbindung.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Freude und Genussf\u00e4higkeit</strong> \u2014 Du kannst das Leben mit allen Sinnen genie\u00dfen: gutes Essen, Musik, Natur, Ber\u00fchrung \u2014 ohne Schuld und ohne \u00dcberma\u00df.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Gesunde Beziehungen</strong> \u2014 Du kannst N\u00e4he zulassen und Distanz halten, wenn es n\u00f6tig ist. Deine Beziehungen sind von Geben und Nehmen gepr\u00e4gt.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">F\u00e4higkeit zum Loslassen</strong> \u2014 Du kannst Ver\u00e4nderungen annehmen, Kontrolle abgeben und mit dem Fluss des Lebens gehen, statt gegen ihn ank\u00e4mpfen.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: \u00dcbungen zur Aktivierung */}
      <section id="uebungen" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          \u00dcbungen zur Aktivierung
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Das Sakralchakra aktivierst du am besten durch Bewegung, sensorische Erfahrungen und kreatives Schaffen. Der Schl\u00fcssel ist Flie\u00dfen statt Kontrollieren:
        </p>
        <div className="space-y-4 mb-4">
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#F97316" }}>
              H\u00fcft\u00f6ffnende Yoga-Posen
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Der Schmetterling (Baddha Konasana), die Taube (Eka Pada Rajakapotasana), die Eidechse (Utthan Pristhasana) und die liegende Schmetterlingshaltung (Supta Baddha Konasana) \u00f6ffnen die H\u00fctfte, wo Emotionen h\u00e4ufig gespeichert werden. Lass die Posen bewusst l\u00e4nger wirken und erlaube Gef\u00fchle, die dabei aufsteigen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#F97316" }}>
              Tanzen und flie\u00dfende Bewegungen
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Bewege deine H\u00fcften frei zu Musik \u2014 ohne Choreografie, ohne Bewertung, einfach flie\u00dfen lassen. Bauchtanz, Ecstatic Dance oder einfach allein im Wohnzimmer tanzen sind kraftvolle Aktivierungen. Die kreisenden Beckenbewegungen stimulieren das Sakralchakra direkt und l\u00f6sen emotionale Blockaden.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#F97316" }}>
              Zeit am und im Wasser
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Schwimmen, Baden, am Meer spazieren, im Regen stehen oder einfach ein ausgiebiges Bad nehmen \u2014 Wasser ist das Element des Sakralchakras und seine Ber\u00fchrung aktiviert und reinigt das zweite Chakra. Auch das bewusste Trinken von Wasser kann als kleine Sakralchakra-\u00dcbung dienen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#F97316" }}>
              Orange Lebensmittel
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Orangen, Karotten, K\u00fcrbis, Mangos, Aprikosen, S\u00fc\u00dfkartoffeln und Papaya n\u00e4hren das Sakralchakra. Bereite diese Lebensmittel mit Liebe und Bewusstheit zu und genieße sie mit allen Sinnen \u2014 das Essen wird zur sinnlichen Meditation.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-medium mb-2" style={{ color: "#F97316" }}>
              Kreatives Schaffen und VAM Mantra
            </h3>
            <p className="text-sm text-muted/90 leading-relaxed">
              Male, zeichne, schreibe, koche, n\u00e4he oder musiziere \u2014 ohne Anspruch auf Perfektion. Der kreative Prozess z\u00e4hlt, nicht das Ergebnis. Kombiniere deine kreative Praxis mit dem Chanten des Bija-Mantras &bdquo;VAM&ldquo; (ausgesprochen wie &bdquo;WAAM&ldquo;), das direkt im Unterbauch resoniert und den Energiefluss im zweiten Chakra anregt.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Edelsteine und Farben */}
      <section id="edelsteine" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Edelsteine und Farben
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Die folgenden Edelsteine und Farben unterst\u00fctzen die Heilung und Aktivierung des Sakralchakras:
        </p>
        <div className="space-y-3 mb-6">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Karneol</strong> \u2014 Der wichtigste Sakralchakra-Stein. Er f\u00f6rdert Kreativit\u00e4t, Mut und Vitalit\u00e4t. Karneol hilft, die eigene Sch\u00f6pferkraft zu entfesseln und Hemmungen zu \u00fcberwinden. Ideal als Schmuckst\u00fcck am Unterbauch oder als Meditationsstein.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Orangencalcit</strong> \u2014 Ein sanfter, fr\u00f6hlicher Stein, der die Lebensfreude weckt und emotionale Blockaden l\u00f6st. Er hilft besonders bei Schuldgef\u00fchlen und der Angst vor Genuss. Sein warmes Leuchten erinnert an die Sonne.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Mondstein</strong> \u2014 Der Stein des Mondes und der weiblichen Energie. Er harmonisiert den emotionalen Zyklus, st\u00e4rkt die Intuition und f\u00f6rdert die Empf\u00e4nglichkeit f\u00fcr feine Gef\u00fchle. Besonders hilfreich bei hormonellen Schwankungen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted/90 leading-relaxed">
              <strong className="text-white">Sonnenstein</strong> \u2014 Ein leuchtender Stein voller Lebensenergie. Er f\u00f6rdert Optimismus, Selbstvertrauen und die F\u00e4higkeit, Freude auszustrahlen. Er hilft, aus der emotionalen Schwere herauszufinden und das innere Licht wieder leuchten zu lassen.
            </p>
          </div>
        </div>
        <p className="text-muted leading-relaxed mb-4">
          <strong className="text-white">Farben f\u00fcr den Alltag:</strong> Integriere Orange in dein Leben: orangefarbene Kleidung, Accessoires, Kerzen oder Blumen. Auch warme Pfirsicht\u00f6ne, Korallenrot und Kupfer unterst\u00fctzen das Sakralchakra. Ein orangefarbenes Tuch auf dem Nachttisch oder eine warme Lichtquelle in Orangetönen k\u00f6nnen den Raum energetisch aufladen.
        </p>
      </section>

      {/* Section 9: Verbindung zu Sternzeichen und Elementen */}
      <section id="verbindung" className="mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Verbindung zu Sternzeichen und Elementen
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Der Mond als Herrscherplanet des Sakralchakras regiert die Gef\u00fchlswelt, den Instinkt und den nat\u00fcrlichen Rhythmus des Lebens. So wie der Mond die Gezeiten steuert, beeinflusst er den Fluss unserer Emotionen. In der Astrologie repr\u00e4sentiert der Mond die innere Welt: wie wir f\u00fchlen, was uns Geborgenheit gibt und wie wir auf emotionaler Ebene auf die Welt reagieren. Diese mondhafte Qualit\u00e4t \u2014 empf\u00e4nglich, zyklisch, intuitiv \u2014 ist das Wesen des Sakralchakras.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          Die Wasserzeichen \u2014 Krebs, Skorpion und Fische \u2014 haben eine besonders starke Verbindung zum Sakralchakra. Krebs, direkt vom Mond regiert, verk\u00f6rpert die n\u00e4hrende, f\u00fcrsorgende Seite des zweiten Chakras. Skorpion bringt die transformative, tiefe Kraft der Emotionen ein. Und Fische repr\u00e4sentieren die grenzenlose, mystische Dimension des Gef\u00fchlslebens. Alle drei Wasserzeichen teilen die Gabe der Empathie und die F\u00e4higkeit, das Unsichtbare zu sp\u00fcren.
        </p>
        <p className="text-muted leading-relaxed mb-4">
          In deinem Geburtshoroskop gibt die Position des Mondes wichtige Hinweise auf den Zustand deines Sakralchakras. Ein Mond in einem Wasserzeichen deutet auf ein nat\u00fcrlich starkes zweites Chakra hin, w\u00e4hrend ein Mond in Erdzeichen oder unter herausfordernden Aspekten auf Bereiche hinweisen kann, die bewusste Arbeit ben\u00f6tigen. In der siderischen Astrologie, die AstroMaster verwendet, verschieben sich die Mondpositionen gegen\u00fcber dem tropischen System \u2014 was bedeutet, dass dein tats\u00e4chlicher Mondstand m\u00f6glicherweise in einem ganz anderen Zeichen liegt, als du bisher dachtest.
        </p>
      </section>

      {/* Section 10: FAQ */}
      <section id="faq" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          H\u00e4ufige Fragen
        </h2>
        <FAQAccordion items={faqItems} />
      </section>
    </WikiLayout>
  );
}
