import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <section className="section">
          <div className="container text-center max-w-3xl">
            <h1 className="mb-6">Page Not Found</h1>
            <p className="text-lg opacity-70 mb-10">
              The page you were looking for does not exist. Try one of these
              destinations instead.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn btn-primary">
                Back to Home
              </Link>
              <Link href="/docs" className="btn btn-outline">
                Documentation
              </Link>
              <Link href="/install" className="btn btn-outline">
                Install terminaI
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
