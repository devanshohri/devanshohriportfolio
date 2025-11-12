import "./globals.css";
import "../styles/components/nav.css";
import "../styles/components/footer.css";
import { ReactLenis } from "@/components/lenis"
import CustomCursor from "@/components/CustomCursor";
import TransitionLayout from '@/components/TransitionLayout';
import Footer from '@/components/Footer';



export const metadata = {
  title: "Devansh Ohri - Design Portfolio",
  description: "Creative designer and developer showcasing innovative design solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <ReactLenis root>
      <body>
        <TransitionLayout>
        <div className="cursor"><p className="cursor-text"></p></div>
        <CustomCursor />
        {children}
        <Footer />
        </TransitionLayout>
      </body>
      </ReactLenis>
    </html>
  );
}
