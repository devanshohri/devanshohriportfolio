import "./globals.css";
import "../styles/components/nav.css";
import "../styles/components/footer.css";
import { ReactLenis } from "@/components/lenis"
import CustomCursor from "@/components/CustomCursor";
import PageReveal from '@/components/PageReveal';
import PageTransition from "@/components/PageTransition";
import Footer from '@/components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google'




export const metadata = {
  title: "Devansh Ohri - Design Portfolio",
  description: "I’m a multidisciplinary designer based in Finland focused on creating visual experiences. I work across brand identity, UI/UX, and motion design — creating thoughtful, memorable work that connects with people and resonates beyond first glance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <ReactLenis root>
      <body>
        <PageReveal>
        <PageTransition>
        <div className="cursor"><p className="cursor-text"></p></div>
        <CustomCursor />
        {children}
        <Footer />
        </PageTransition>
        </PageReveal>
      </body>
      <GoogleAnalytics gaId="G-M0GWJBQQ2S" />
      </ReactLenis>
    </html>
  );
}
