"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import devanshOhriLogo from "../../public/devanshohri.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LocalTime from "./LocalTime";

import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(ScrambleTextPlugin);

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isArchive = pathname === "/archive";

  const navRef = useRef(null);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const target = navRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowFixed(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  const huaElements = document.querySelectorAll(".hua");

  const handlers = [];

  huaElements.forEach(el => {
    const originalText = el.textContent;

    const handler = () => {
      gsap.to(el, {
        duration: 0.5,
        scrambleText: {
          text: originalText,
          chars: "►",
          speed: 1,
          tweenLength: false
        },
        ease: "power1.out",
      });
    };

    el.addEventListener("mouseenter", handler);
    handlers.push({ el, handler });
  });

  // Cleanup on unmount
  return () => {
    handlers.forEach(({ el, handler }) => {
      el.removeEventListener("mouseenter", handler);
    });
  };
}, []);



  return (
    <>
      <header>
        <nav className="nav-default main-grid">
          <Link href="/" className="header-logo">
            <Image priority src={devanshOhriLogo} alt="devansh ohri logo" as="image" />
          </Link>

          {isHome && (
            <div className="hero-text">
              <h1>
                I’m a multidisciplinary designer based in Finland focused on creating visual
                experiences — indentities, websites, interfaces, and everything in
                between.
              </h1>
            </div>
          )}

          {isArchive && (
            <div className="hero-text">
              <h1>
                A collection of my visual explorations.
                Web, posters, graphics, etc.
              </h1>
            </div>
          )}

          <div ref={navRef} className="nav-default-work">
            <Link href="/" className="hua">Work</Link>
          </div>
          <div className="nav-default-archive">
            <Link href="/archive" className="hua">Archive</Link>
          </div>
          <div className="nav-default-info">
            <Link href="/information" className="hua">Information</Link>
          </div>
          <div className="nav-default-time">
            <p><LocalTime /> HEL,FI</p>
          </div>
        </nav>
      </header>

      <nav className={`nav-fixed ${showFixed ? "visible" : ""}`}>
        <div className="main-grid">
          <div className="header-logo-small">
            <Link href="/"><p className="logo">Devansh Ohri</p></Link>
          </div>

          <div className="nav-fixed-work">
            <Link href="/" className="hua">Work</Link>
          </div>
          <div className="nav-fixed-archive">
            <Link href="/archive" className="hua">Archive</Link>
          </div>
          <div className="nav-fixed-info">
            <Link href="/information" className="hua">Information</Link>
          </div>
          <div className="nav-fixed-time">
            <p><LocalTime /> HEL, FI</p>
          </div>
        </div>
        <hr className="hr-nav" />
      </nav>
    </>
  );
}
