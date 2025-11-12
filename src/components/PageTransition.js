//Fader

"use client";
import { useEffect, useRef, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";

export default function PageTransition({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const isTransitioning = useRef(false)

  const revealPage = useCallback(() => {
    // Fade in new page content
    gsap.fromTo(
      ".page-content",
      { opacity: 0, y: 0 },
      { opacity: 1, y: 0, duration: 1.125, ease: "power4.inOut", onComplete: () => {
        isTransitioning.current = false;
        document.body.style.overflow = "";
      } }
    );
  }, []);

  const coverPage = useCallback((targetPath, clickedLink) => {
    if (!clickedLink) return;

    document.body.style.overflow = "hidden";

    // Fade out all elements except the clicked nav link
    const allElements = Array.from(document.body.children);
    const elementsToFade = allElements.filter(el => !clickedLink.contains(el) && !clickedLink.isSameNode(el));

    const tl = gsap.timeline({
      onComplete: () => {
        router.push(targetPath);
        setTimeout(revealPage, 50);
      }
    });

    tl.to(elementsToFade, { opacity: 0, duration: 0.6, ease: "power3.inOut" });
  }, [router, revealPage]);

  const onAnchorClick = useCallback((e) => {
    if (
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0 ||
      e.currentTarget.target === "_blank"
    ) return;

    const href = e.currentTarget.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("#")) return;

    if (href === pathname || isTransitioning.current) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    isTransitioning.current = true;

    // Pass the clicked link to keep it visible
    coverPage(href, e.currentTarget);
  }, [pathname, coverPage]);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach(link => link.addEventListener("click", onAnchorClick));

    return () => links.forEach(link => link.removeEventListener("click", onAnchorClick));
  }, [onAnchorClick]);

  return (
    <>
      <div className="page-content">
        {children}
      </div>
    </>
  );
}


// overlay

// "use client";
// import { useEffect, useRef, useCallback } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { gsap } from "gsap";

// export default function PageTransition({ children }) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const overlayRef = useRef(null);
//   const titleRef = useRef(null);
//   const isTransitioning = useRef(false);

//   const getPageName = (path) => {
//     if (path === "/") return "Work";
//     if (path === "/archive") return "Archive";
//     if (path === "/information") return "Information";
//     return "Page";
//   };

//   const revealPage = useCallback(() => {
//     const tl = gsap.timeline({
//       onComplete: () => {
//         isTransitioning.current = false;
//         document.body.style.overflow = "";
//         gsap.set(overlayRef.current, { display: "none" });
//         gsap.set(titleRef.current, { opacity: 0 });
//       },
//     });

//     // Fade out page name
//     tl.to(titleRef.current, { opacity: 0, duration: 0.3, ease: "power2.inOut" });

//     // Slide overlay up to reveal page
//     tl.to(overlayRef.current, { yPercent: -100, duration: 0.8, ease: "power3.inOut" }, "-=0.1");

//     // Animate container
//     tl.from(".container", {
//       y: 40,
//       opacity: 0,
//       filter: "blur(500px)",
//       duration: 0.5,
//       ease: "power3.out",
//     }, "-=0.6");
//   }, []);

//   const coverPage = useCallback((targetPath) => {
//     document.body.style.overflow = "hidden";
//     const pageName = getPageName(targetPath);
//     if (titleRef.current) titleRef.current.textContent = pageName;

//     gsap.set(overlayRef.current, { yPercent: 100, display: "flex" });

//     const tl = gsap.timeline({
//       onComplete: () => {
//         router.push(targetPath);
//         // wait a tiny bit and then reveal new page
//         setTimeout(revealPage, 50);
//       },
//     });

//     // Slide overlay up
//     tl.to(overlayRef.current, { yPercent: 0, duration: 0.6, ease: "power3.inOut" });

//     // Fade in title
//     tl.to(titleRef.current, { opacity: 1, duration: 0.3, ease: "power2.out" }, "-=0.3");

//     // Small pause
//     tl.to({}, { duration: 0.4 });
//   }, [router, revealPage]);

//   const onAnchorClick = useCallback((e) => {
//     if (
//       e.metaKey ||
//       e.ctrlKey ||
//       e.shiftKey ||
//       e.altKey ||
//       e.button !== 0 ||
//       e.currentTarget.target === "_blank"
//     ) return;

//     const href = e.currentTarget.getAttribute("href");
//     if (!href || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("#")) return;

//     if (href === pathname || isTransitioning.current) {
//       e.preventDefault();
//       return;
//     }

//     e.preventDefault();
//     isTransitioning.current = true;
//     coverPage(href);
//   }, [pathname, coverPage]);

//   useEffect(() => {
//     const links = document.querySelectorAll('a[href^="/"]');
//     links.forEach(link => link.addEventListener("click", onAnchorClick));

//     return () => links.forEach(link => link.removeEventListener("click", onAnchorClick));
//   }, [onAnchorClick]);

//   return (
//     <>
//       <div
//         ref={overlayRef}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "var(--secondary)",
//           zIndex: 9999,
//           display: "none",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <p ref={titleRef} style={{ color: "var(--primary)", opacity: 0 }}>Work</p>
//       </div>
//       {children}
//     </>
//   );
// }
