import { useState } from "react";
import { testimonials } from "../data/hotels";
import { cn } from "../utils/cn";
import { ArrowLeft, ArrowRight, Quote, Star } from "./ui/Icons";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const prev = () => setI((i - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((i + 1) % testimonials.length);

  return (
    <section id="stories" className="relative overflow-hidden bg-ink py-24 text-cream lg:py-32">
      <img
        src="https://images.pexels.com/photos/14036253/pexels-photo-14036253.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <div className="reveal">
          <Quote className="mx-auto h-12 w-12 text-gold/70" />
          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.35em] text-gold">Guest Reviews</p>
        </div>

        <div key={i} className="animate-fade-up mt-8">
          <p className="font-serif text-2xl font-normal leading-snug text-cream text-balance md:text-3xl lg:text-[2.5rem] lg:leading-[1.3]">
            “{t.text}”
          </p>
          <div className="mt-8 flex justify-center gap-1 text-gold">
            {Array.from({ length: t.rating }).map((_, k) => (
              <Star key={k} className="h-4 w-4" />
            ))}
          </div>
          <p className="mt-4 font-serif text-xl text-cream">{t.name}</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-cream/50">{t.hotel}</p>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous"
            className="flex h-12 w-12 items-center justify-center border border-cream/20 text-cream transition hover:border-gold hover:text-gold"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Story ${k + 1}`}
                className={cn("h-1.5 w-1.5 rounded-full transition", k === i ? "bg-gold scale-125" : "bg-cream/30")}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="flex h-12 w-12 items-center justify-center border border-cream/20 text-cream transition hover:border-gold hover:text-gold"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Press marquee */}
      <div className="relative mt-20 border-y border-cream/10 py-5">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {Array.from({ length: 2 }).flatMap((_, r) =>
            ["TripAdvisor Travellers' Choice 2025", "Booking.com Guest Review Award", "Google 4.6 ★ Rating", "MakeMyTrip Preferred Partner", "ISO 22000 Certified Kitchens", "Times Hospitality Awards 2024"].map((p) => (
              <span key={`${r}-${p}`} className="font-serif text-xl italic text-cream/40 lg:text-2xl">
                {p}
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
