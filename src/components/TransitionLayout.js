"use client";
import PageReveal from "./PageReveal";
import PageTransition from "./PageTransition";

export default function TransitionLayout({ children }) {
  return (
    <PageReveal>
      <PageTransition>
        {children}
        </PageTransition>
    </PageReveal>
  );
}