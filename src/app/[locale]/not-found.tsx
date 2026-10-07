import Link from "next/link";
import { site } from "@/config/site";

export default function NotFound() {
  return (
    <div className="container" style={{ padding: "80px 0" }}>
      <h1>404</h1>
      <p>cette page n'existe pas.</p>
      <p>
        <Link href={`/${site.defaultLocale}`}>retour à l'accueil</Link>
      </p>
    </div>
  );
}
