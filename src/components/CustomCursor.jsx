"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrambleTextPlugin);

export default function CustomCursor() {
  const pathname = usePathname();

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    if (!cursor) return;

    gsap.set(cursor, { xPercent: -100, yPercent: -100 });
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.6, ease: "power3" });

    const move = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };
    window.addEventListener("mousemove", move);

    // reselect links on every route change
    const links = document.querySelectorAll("[data-cursor]");
    links.forEach((link) => {
      const text = link.getAttribute("data-cursor");
      link.addEventListener("mouseenter", () => {
        gsap.to(".cursor p", {
          scrambleText: { text, chars: "uppercase", speed: 2 },
          duration: 0.8,
        });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(".cursor p", { scrambleText: { text: "", speed: 2 }, duration: 0.5 });
      });
    });

    return () => {
      window.removeEventListener("mousemove", move);
      links.forEach((link) => {
        link.replaceWith(link.cloneNode(true)); // safely remove listeners
      });
    };
  }, [pathname]); // re-run on route change

  return null;
}
