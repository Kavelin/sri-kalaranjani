import type { Metadata } from "next";
import { Noto_Sans, Saira } from "next/font/google";
import "./globals.css";

const heebo = Noto_Sans({ subsets: ["latin"] });
const saira = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sri Kalaranjani School of Music",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={heebo.className}>
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
                Karanjani School of Music. All rights reserved.
              </small>
            </div>
          </fieldset>
        </footer>
      </body>
    </html>
  );
}
