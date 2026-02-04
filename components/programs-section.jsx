"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Database,
  Cloud,
  Shield,
  Smartphone,
  Brain,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    icon: Code,
    title: "Full Stack Development",
    description:
      "Master frontend and backend technologies to build complete web applications.",
    duration: "6 Months",
    students: "5,200+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    description:
      "Learn to extract insights from data using Python, ML, and visualization tools.",
    duration: "4 Months",
    students: "3,800+",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "AWS, Azure, and GCP certifications to architect scalable cloud solutions.",
    duration: "3 Months",
    students: "4,100+",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect systems and networks with ethical hacking and security protocols.",
    duration: "5 Months",
    students: "2,900+",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Create cross-platform mobile apps using React Native and Flutter.",
    duration: "4 Months",
    students: "3,500+",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Deep learning, neural networks, and AI applications for real-world problems.",
    duration: "6 Months",
    students: "2,700+",
    color: "from-rose-500 to-orange-500",
  },
];

export function ProgramsSection() {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const cards = document.querySelectorAll(".program-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="py-24 px-6 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Industry-Leading Training Programs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our comprehensive range of courses designed to transform
            your career and keep you ahead in the digital age.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card
              key={index}
              data-index={index}
              className={`program-card group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 cursor-pointer ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <CardHeader className="pb-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {program.title}
                </h3>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>

                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium text-foreground">
                      {program.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Enrolled:</span>
                    <span className="font-medium text-foreground">
                      {program.students}
                    </span>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="w-full justify-center group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 bg-transparent"
          >
            View All Programs
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}