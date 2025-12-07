import type { Metadata } from "next";
import { Noto_Sans, Saira } from "next/font/google";
import "./globals.css";

const heebo = Noto_Sans({ subsets: ["latin"] });
const saira = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sri Kalaranjani School of Music",
  description:
    "Sri Kalaranjani School of Music — Carnatic music school offering vocal and instrument training",
  keywords: [
    'Carnatic music',
    'Sri Kalaranjani',
    'Vocal training',
    'Violin',
    'Mridangam',
    'Music school Chennai',
    'Sri Kalaranjani School of Music',
    'Vishnu Sahasranaamam',
    'vishnu sahasranamam',
    'srikalaranjanischoolofmusic.com',
    'srikalaranjanischoolofmusic',
    'Chennai',
    'Carnatic',
    'Dr J Srinibabu',
    'Srinibabu',
    'Kodambakkam',
    'Kodambakkam Music School'
  ],
  authors: [{ name: 'Sri Kalaranjani School of Music' }],
  openGraph: {
    title: 'Sri Kalaranjani School of Music',
    description:
      'Learn Carnatic vocal and instruments.',
    siteName: 'Sri Kalaranjani School of Music',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Kalaranjani School of Music',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MusicSchool',
              name: 'Sri Kalaranjani School of Music',
              url: 'https://srikalaranjanischoolofmusic.com/',
              logo: 'https://srikalaranjanischoolofmusic.com/media/logo.png',
              description: 'Carnatic music school offering vocal and instrument training',
              email: 'srinimusic@gmail.com',
              telephone: '+91 75699 90821',
              sameAs: [
                'https://www.youtube.com/@srikalaranjanischoolofmusi9057',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Chennai',
                addressRegion: 'Tamil Nadu',
                addressCountry: 'IN',
              },
            }),
          }}
        />
        <nav className={saira.className}>
          <div className="nav-left">
            <a href="/" className="nav-link">
              Sri Kalaranjani
            </a>
          </div>
          <div className="nav-right">
            <a href="/about" className="nav-link">
              About
            </a>
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </div>
        </nav>
        <main>{children}</main>
        <footer>
          <fieldset>
            <legend className={saira.className}>Sri Kalaranjani School of Music</legend>

            <div>
              <span>
                <a target="_blank" href="mailto:srinimusic@gmail.com">srinimusic@gmail.com</a>,
                Phone: +91 75699 90821 / +91 9444532409,&nbsp;
                <a target="_blank" href="https://www.youtube.com/@srikalaranjanischoolofmusi9057">Youtube</a>
              </span>
            </div>

            <div>
              <small>
                &copy; {new Date().getFullYear()} Kalaranjani Charitable Trust &
                Sri Kalaranjani School of Music. All rights reserved.
              </small>
            </div>
          </fieldset>
        </footer>
      </body>
    </html>
  );
}
