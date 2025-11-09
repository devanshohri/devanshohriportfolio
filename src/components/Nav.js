"use client";
import Image from "next/image";
import devanshOhriLogo from "../../public/devanshohri.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {

  const pathname = usePathname();
  const isHome = pathname === "/";
  const isArchive = pathname === "/archive";
  const isInformation = pathname === "/information";

  return (
    <header>
      <nav className="nav-default main-grid">
        <div className="header-logo">
          <Image
            priority
            src= {devanshOhriLogo}
            alt="devansh ohri logo"
          />
        </div>

        {isHome && (
          <div className="hero-text">
            <h1>
              I’m a Finland-based digital designer focused on creating digital
              experiences — websites, apps, platforms, and everything in
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

     

        <div className="nav-default-work">
          <Link href="/" className="hua">Work</Link>
        </div>
        <div className="nav-default-archive">
          <Link href="/archive" className="hua">Archive</Link>
        </div>
        <div className="nav-default-info">
          <Link href="/information" className="hua">Information</Link>
        </div>
        <div className="nav-default-time">
          <p>09.21 EET</p>
        </div>
      </nav>
    </header>
  );
}
