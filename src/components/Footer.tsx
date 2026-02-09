import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Image
              src="/images/logo/astromaster-logo.svg"
              alt="AstroMaster"
              width={140}
              height={42}
            />
            <p className="text-muted text-sm mt-2">Dein wahres kosmisches Profil</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
            <Link href="/agb" className="hover:text-white transition-colors">
              AGB
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} AstroMaster. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
