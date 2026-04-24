import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// --- SEO METADATA SETTING ---
export const metadata: Metadata = {
  //  Title
  title: {
    default: "Seo Agency | Next.js & Tailwind Expert",
    template: "%s |Seo Agency " 
  },
  
  //  Description
  description: "Seekhein Next.js, Tailwind CSS aur modern web technologies asaan Urdu mein. Hum digital products aur high-performance websites banate hain.",
  
  // Keywords
  keywords: ["Next.js Developer", "Full Stack Developer Pakistan", "Web Development Urdu", "Tailwind CSS Expert", "Zeeshan Dev Blog"],

  // Authors
  authors: [{ name: "Memoona" }],

  // OpenGraph
  openGraph: {
    title: "Seo Agency  | Crafting Digital Legacies",
    description: "Modern web development aur SEO tutorials.",
    url: "https://your-domain.com",
    siteName: "Seo Agency ",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white antialiased">
        <Navbar /> 
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}