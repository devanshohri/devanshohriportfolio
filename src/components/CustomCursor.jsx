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

    const cursortexts = document.querySelectorAll("[data-cursor]");
    const handlers = [];

    cursortexts.forEach((el) => {
      const text = el.getAttribute("data-cursor");
      const handleEnter = () => {
        gsap.to(".cursor p", {
          scrambleText: { text, chars: "►", speed: 2 },
          duration: 0.8,
        });
      };
      const handleLeave = () => {
        gsap.to(".cursor p", {
          scrambleText: { text: "", chars: "◄", speed: 2 },
          duration: 0.5,
        });
      };
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
      handlers.push({ el, handleEnter, handleLeave });
    });

    return () => {
      window.removeEventListener("mousemove", move);
      handlers.forEach(({ el, handleEnter, handleLeave }) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [pathname]);

  return null;
}
