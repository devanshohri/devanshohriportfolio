"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const overlayRef = useRef(null);
  const titleRef = useRef(null);
  const isTransitioning = useRef(false);

  const getPageName = (path) => {
    if (path === "/") return "Work";
    if (path === "/archive") return "Archive";
    if (path === "/information") return "Information";
    return "Page";
  };

  useEffect(() => {
    const handleLinkClick = (e) => {
      const link = e.target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      
      if (!href || 
          href.startsWith("http") || 
          href.startsWith("mailto") || 
          href.startsWith("#") ||
          href === pathname ||
          isTransitioning.current) {
        return;
      }

      e.preventDefault();
      isTransitioning.current = true;
      
      const pageName = getPageName(href);
      if (titleRef.current) {
        titleRef.current.textContent = pageName;
      }
      
      animateTransition(href);
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, [pathname]);

  const animateTransition = (targetPath) => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline();



    // Slide overlay up from bottom
    tl.set(overlayRef.current, { 
      yPercent: 100,
      display: "flex"
    });

    tl.to(overlayRef.current, {
      yPercent: 0,
      duration: 0.6,
      ease: "power3.inOut"
    });

    // Show page name briefly
    tl.to(titleRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out"
    }, "-=0.3");

    // Wait a moment
    tl.to({}, { duration: 0.4 });

    // Navigate
    tl.call(() => {
      router.push(targetPath);
    });

    // Wait for navigation
    tl.to({}, { 
      duration: 0.05,
      onComplete: () => {
        setTimeout(() => {
          revealNewPage();
        }, 50);
      }
    });
  };

  const revealNewPage = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        isTransitioning.current = false;
        document.body.style.overflow = "";
        gsap.set(overlayRef.current, { display: "none" });
        gsap.set(titleRef.current, { opacity: 0 });
      }
    });


    // Fade out page name
    tl.to(titleRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut"
    });

    // Slide overlay up to reveal page
    tl.to(overlayRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power3.inOut"
    }, "-=0.1");

    tl.from(
      ".container",
      {
        y: 40,
        opacity: 0,
        filter: "blur(500px)",
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.6"
    );
  };

  return (
    <>
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "var(--primary)",
          zIndex: 9999,
          display: "none",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <p
          ref={titleRef}
          style={{
            color: "var(--secondary)",
            opacity: 0
          }}
        >
          Work
        </p>
      </div>
      {children}
    </>
  );
}