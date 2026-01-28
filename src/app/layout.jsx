import "@/app/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Daryl Smith | Creative Developer & UI/UX Design Expert",
  description: "Portfolio website showcasing frontend development and UI/UX design projects. Full stack web developer specializing in Next.js, React, and modern web technologies.",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Daryl Smith | Portfolio",
    description: "Creative Developer & UI/UX Design Expert",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#171B1A" />
      </head>
      <body className={`${dmSans.className} bg-[#171B1A] text-white overflow-x-hidden`}>
        <div className="flex flex-col md:flex-row">
          <Sidebar />
          <div className="flex-1 w-full md:w-auto">
            <Navbar />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
