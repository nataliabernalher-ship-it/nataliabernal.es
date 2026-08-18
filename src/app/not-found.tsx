import Link from "next/link";
import { site } from "@/data/site";
import "@/styles/globals.css";

export default function RootNotFound() {
  return (
    <html lang="es">
      <body>
        <main style={{ padding: "2rem" }}>
          <h1>Página no encontrada / Page not found</h1>
          <p>
            <Link href="/es">Español</Link>
            {" · "}
            <Link href="/en">English</Link>
          </p>
          <p>
            <Link href={`mailto:${site.email}`}>{site.email}</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
