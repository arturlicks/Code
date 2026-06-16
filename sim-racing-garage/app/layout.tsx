import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Sim Racing Garage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <header className="border-b border-slate-800 bg-slate-900">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <span className="text-lg font-semibold">Sim Racing Garage</span>
            <nav className="flex gap-4 text-sm">
              <Link href="/">Home</Link>
              <Link href="/cars">Cars</Link>
              <Link href="/tracks">Tracks</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}