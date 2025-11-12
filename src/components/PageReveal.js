"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import devanshOhriLogoWhite from "../../public/devanshohri-white.svg";

export default function PageReveal({ children }) {
  const [isAnimating, setIsAnimating] = useState(true);
  const overlayRef = useRef(null);
  const loaderTextRef = useRef(null);
  const counterRef = useRef(null);
  const logoMaskRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        document.body.style.overflow = "hidden";
      },
    });

    let counter = { value: 0 };
    tl.to(counter, {
      value: 100,
      duration: 2.8,
      ease: "power4.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.floor(counter.value);
        }
        if (logoMaskRef.current) {
          gsap.set(logoMaskRef.current, {
            width: `${100 - counter.value}%`,
          });
        }
      },
    });

    // Fade out loader text
    tl.to(
      loaderTextRef.current,
      {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      },
      "-=0.4"
    );

    // Slide overlay up
    tl.to(overlayRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut",
    });

    // Animate page content
    tl.from(
      [".nav-default", ".hero-text h1", ".hero-footer", "section"],
      {
        y: 40,
        opacity: 0,
        duration: 0.5,
        filter: "blur(500px)",
        ease: "power3.out",
      },
      "-=0.6"
    );

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {isAnimating && (
        <div ref={overlayRef} className="page-reveal-overlay">
          <div className="loader-content">
            <div className="logo-wrapper">
              <Image
                src={devanshOhriLogoWhite}
                alt="Logo"
              />
              {/* Mask that shrinks to reveal logo */}
              <div className="logo-mask" ref={logoMaskRef}></div>
            </div>
            <p ref={counterRef} className="loader-counter">0</p>
          </div>
        </div>
      )}
      {children}
    </>
  );
}
