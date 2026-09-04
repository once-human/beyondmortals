import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Record — Beyond Mortals",
  description:
    "There are records of people who stopped dying. None of them agree on why.",
};

export default function TheRecordPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* ── Navigation ──────────────────────────────────────── */}
      <header
        className="fixed inset-x-0 top-0 z-50"
        style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link href="/" aria-label="Beyond Mortals — Home">
            <Image
              src="/brand/wordmark.svg"
              alt="Beyond Mortals"
              width={160}
              height={20}
              priority
              className="h-4 md:h-5 w-auto invert"
            />
          </Link>

          <nav className="flex items-center gap-8">
            <Link
              href="/the-record"
              className="text-xs tracking-[0.12em] uppercase transition-colors duration-300"
              style={{ fontFamily: "var(--font-sans)", color: "var(--color-text)" }}
            >
              The Record
            </Link>
            <Link
              href="/collection"
              className="text-xs tracking-[0.12em] uppercase text-[var(--color-text-muted)] transition-colors duration-300 hover:text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Collection
            </Link>
          </nav>
        </div>

        <div
          className="h-px w-full"
          style={{ background: "var(--color-border)" }}
        />
      </header>

      {/* ── Main ────────────────────────────────────────────── */}
      <main className="flex-1 pt-32 md:pt-40 pb-24">
        <div className="container max-w-[720px]">
          <h1
            className="text-5xl md:text-7xl leading-none mb-24"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              color: "var(--color-text)",
            }}
          >
            The Record
          </h1>

          {/* Skeleton — content will be built here */}
        </div>
      </main>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer>
        <div
          className="h-px w-full"
          style={{ background: "var(--color-border)" }}
        />
        <div className="container flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-8">
          <Image
            src="/brand/wordmark.svg"
            alt="Beyond Mortals"
            width={120}
            height={15}
            className="h-3 w-auto invert opacity-40"
          />

          <p
            className="text-[10px] tracking-[0.15em] uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-text-faint)",
            }}
          >
            © {new Date().getFullYear()} Beyond Mortals
          </p>
        </div>
      </footer>
    </div>
  );
}
