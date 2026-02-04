"use client";

import { useEffect, useRef, useState } from "react";

const partners = [


export function PartnersMarquee() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-background overflow-hidden border-y border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p
          className={`text-center text-muted-foreground text-sm uppercase tracking-wider transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Trusted by leading companies worldwide
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling content */}
        <div className="flex animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 px-8 py-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <span className="text-lg font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Apple",
  "IBM",
  "Oracle",
  "Salesforce",
  "Adobe",
  "Intel",
  "Cisco",
  "Dell",
];