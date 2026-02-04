"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    content:
      "Velinfo's Full Stack course completely transformed my career. The hands-on approach and industry-relevant curriculum helped me land my dream job at Google.",
    rating: 5,
    course: "Full Stack Development",
  },
  {
    name: "Rahul Verma",
    role: "Data Scientist at Microsoft",
    content:
      "The Data Science program exceeded my expectations. The instructors were incredibly knowledgeable and always available for guidance. Best investment in my career!",
    rating: 5,
    course: "Data Science & Analytics",
  },
  {
    name: "Ananya Patel",
    role: "Cloud Architect at AWS",
    content:
      "Thanks to Velinfo, I cleared all three AWS certifications in just 6 months. Their structured approach and exam preparation strategies were invaluable.",
    rating: 5,
    course: "Cloud Computing",
  },
  {
    name: "Vikram Singh",
    role: "Security Analyst at Deloitte",
    content:
      "The cybersecurity training was comprehensive and practical. I gained real-world skills that made me stand out in interviews. Highly recommend Velinfo!",
    rating: 5,
    course: "Cybersecurity",
  },
  {
    name: "Sneha Reddy",
    role: "Mobile Developer at Flipkart",
    content:
      "I went from zero coding knowledge to building production-ready apps. Velinfo's supportive community and expert guidance made all the difference.",
    rating: 5,
    course: "Mobile App Development",
  },
  {
    name: "Amit Kumar",
    role: "ML Engineer at Amazon",
    content:
      "The AI/ML course at Velinfo is world-class. The project-based learning approach helped me build a strong portfolio that impressed recruiters.",
    rating: 5,
    course: "AI & Machine Learning",
  },
];

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 px-6 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from our graduates who have transformed their careers and achieved
            their dreams with Velinfo.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Cards Container */}
          <div className="overflow-hidden mx-4">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className={`flex-shrink-0 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg group ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    width: `calc(${100 / cardsPerView}% - ${((cardsPerView - 1) * 24) / cardsPerView}px)`,
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <CardContent className="p-6 relative">
                    {/* Quote Icon */}
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-300" />

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-foreground mb-6 leading-relaxed">
                      &quot;{testimonial.content}&quot;
                    </p>

                    {/* Course Badge */}
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs rounded-full mb-4">
                      {testimonial.course}
                    </span>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-8 md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="rounded-full bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="rounded-full bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
