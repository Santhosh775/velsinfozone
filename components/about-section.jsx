"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Users, Award, Target } from "lucide-react";

const features = [
  "Industry-experienced trainers with real-world expertise",
  "Hands-on projects and practical assignments",
  "Flexible learning schedules - online and offline",
  "Placement assistance and career guidance",
  "Lifetime access to learning resources",
  "Small batch sizes for personalized attention",
];

const highlights = [
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from industry professionals with 10+ years of experience",
  },
  {
    icon: Award,
    title: "Certified Programs",
    description: "Globally recognized certifications to boost your credentials",
  },
  {
    icon: Target,
    title: "Placement Support",
    description: "Dedicated team to help you land your dream job",
  },
];

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);



  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Velinfo
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Empowering Minds,
              <br />
              <span className="text-primary">Shaping Futures</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Since 2010, Velinfo has been at the forefront of professional
              education, helping thousands of students and working professionals
              achieve their career aspirations. Our commitment to excellence and
              innovation sets us apart as a premier training institute.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Main visual container */}
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-3xl" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-accent/10 rounded-3xl" />

              {/* Main card */}
              <div className="relative bg-card rounded-3xl p-8 shadow-xl">
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { value: "15+", label: "Years of Excellence" },
                    { value: "50,000+", label: "Graduates" },
                    { value: "500+", label: "Partner Companies" },
                    { value: "95%", label: "Placement Rate" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className={`text-center p-4 rounded-xl bg-muted/50 transition-all duration-500 hover:bg-primary/10 hover:scale-105 ${
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                      }`}
                      style={{ transitionDelay: `${600 + index * 100}ms` }}
                    >
                      <div className="text-3xl font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-4">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-500 hover:bg-muted/50 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${900 + index * 100}ms` }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
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