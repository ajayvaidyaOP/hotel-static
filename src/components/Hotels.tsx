import { useState } from "react";
import { hotels, type Hotel } from "../data/hotels";
import { cn } from "../utils/cn";
import { ArrowRight, MapPin, Star } from "./ui/Icons";
import SectionHeading from "./ui/SectionHeading";

const types = ["All", "Airport", "Business", "City Centre", "Family", "Leisure"] as const;

type Props = { onSelect: (hotel: Hotel) => void };

export default function Hotels({ onSelect }: Props) {
  const [filter, setFilter] = useState<(typeof types)[number]>("All");
  const list = filter === "All" ? hotels : hotels.filter((h) => h.type === filter);

  return (
    <section id="hotels" className="relative bg-ink py-24 text-cream lg:py-32">
      {/* subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#c9a961_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Hotels"
          title="Five hotels across India's top cities"
          description="Pick the hotel that suits your trip — near the airport, in the business district, in the city centre, built for families or right by the beach."
          light
        />

        {/* Filter */}
        <div className="reveal mt-12 flex flex-wrap justify-center gap-2">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={cn(
                "border px-5 py-2 text-[11px] font-medium uppercase tracking-[0.25em] transition",
                filter === t
                  ? "border-gold bg-gold text-ink"
                  : "border-cream/15 text-cream/60 hover:border-gold/60 hover:text-gold"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {list.map((h, i) => {
            // first two large, rest smaller when all visible
            const large = filter === "All" && i < 2;
            return (
              <article
                key={h.id}
                onClick={() => onSelect(h)}
                className={cn(
                  "reveal group relative cursor-pointer overflow-hidden bg-stone",
                  large ? "lg:col-span-3 aspect-[16/11]" : "lg:col-span-2 aspect-[4/5]",
                  filter !== "All" && "lg:col-span-2 aspect-[4/5]"
                )}
              >
                <img
                  src={h.image}
                  alt={h.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90 transition group-hover:opacity-100" />

                {/* top badges */}
                <div className="absolute left-5 top-5 flex items-center gap-2">
                  <span className="bg-cream/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-cream backdrop-blur">
                    {h.type}
                  </span>
                </div>
                <div className="absolute right-5 top-5 flex items-center gap-1 bg-ink/60 px-2.5 py-1 text-xs text-gold backdrop-blur">
                  <Star className="h-3.5 w-3.5" /> {h.rating}
                </div>

                {/* content */}
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                  <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] text-gold">
                    <MapPin className="h-3.5 w-3.5" /> {h.location}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl font-medium text-cream lg:text-4xl">{h.name}</h3>
                  <p className="mt-1 font-serif text-base italic text-cream/60">{h.tagline}</p>

                  <div className="mt-4 flex items-end justify-between border-t border-cream/10 pt-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-cream/50">From</span>
                      <div className="font-serif text-2xl text-cream">
                        ₹{h.startingPrice.toLocaleString("en-IN")}
                        <span className="text-sm text-cream/50"> / night</span>
                      </div>
                    </div>
                    <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-gold transition group-hover:gap-3">
                      Explore <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
