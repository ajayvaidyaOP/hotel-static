import { useEffect, useState } from "react";
import { hotels, IMG } from "../data/hotels";
import { cn } from "../utils/cn";
import { Calendar, MapPin, Users } from "./ui/Icons";

const slides = [
  {
    image: IMG.ext1.replace("h=627&w=1200", "h=1080&w=1920"),
    eyebrow: "Grand Stay Hotels · 5 Cities Across India",
    title: "Comfortable stays, wherever business or holidays take you",
  },
  {
    image: IMG.poolRooftop.replace("h=627&w=1200", "h=1080&w=1920"),
    eyebrow: "Grand Stay Goa · Candolim",
    title: "Pools, breakfast and a good night's sleep — always included",
  },
  {
    image: IMG.lobby1.replace("h=627&w=1200", "h=1080&w=1920"),
    eyebrow: "Grand Stay Mumbai · BKC",
    title: "Best rates guaranteed when you book direct",
  },
];

type Props = { onBook: (hotelId?: string) => void };

export default function Hero({ onBook }: Props) {
  const [active, setActive] = useState(0);
  const [hotelId, setHotelId] = useState(hotels[0].id);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      {slides.map((s, i) => (
        <div
          key={s.image}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1600ms] ease-in-out",
            i === active ? "opacity-100" : "opacity-0"
          )}
        >
          <img
            src={s.image}
            alt={s.eyebrow}
            className={cn("h-full w-full object-cover", i === active && "animate-slow-zoom")}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/50 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-10 lg:px-10 lg:pb-16">
        <div className="mb-10 max-w-3xl lg:mb-14">
          <p
            key={`e-${active}`}
            className="animate-fade-up flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.4em] text-gold"
          >
            <span className="h-px w-10 bg-gold" />
            {slides[active].eyebrow}
          </p>
          <h1
            key={`t-${active}`}
            className="animate-fade-up delay-100 mt-5 font-serif text-5xl font-medium leading-[1.02] text-cream text-balance sm:text-6xl lg:text-[5rem]"
          >
            {slides[active].title}
          </h1>
          <p className="animate-fade-up delay-300 mt-6 max-w-xl text-[15px] leading-relaxed text-cream/70 md:text-base">
            Five modern hotels in New Delhi, Mumbai, Bengaluru, Hyderabad and Goa. Free Wi-Fi,
            complimentary breakfast, 24-hour room service and friendly staff at every one.
          </p>
        </div>

        {/* Booking bar */}
        <div className="animate-fade-up delay-500 grid w-full grid-cols-1 gap-px overflow-hidden border border-cream/10 bg-cream/10 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr_auto]">
          <Field icon={<MapPin className="h-4 w-4" />} label="Hotel / City">
            <select
              value={hotelId}
              onChange={(e) => setHotelId(e.target.value)}
              className="w-full bg-transparent font-serif text-lg text-cream outline-none [&>option]:text-ink"
            >
              {hotels.map((h) => (
                <option key={h.id} value={h.id}>
                  {h.name} — {h.location}
                </option>
              ))}
            </select>
          </Field>
          <Field icon={<Calendar className="h-4 w-4" />} label="Check-in">
            <input type="date" className="w-full bg-transparent font-serif text-lg text-cream outline-none [color-scheme:dark]" />
          </Field>
          <Field icon={<Calendar className="h-4 w-4" />} label="Check-out">
            <input type="date" className="w-full bg-transparent font-serif text-lg text-cream outline-none [color-scheme:dark]" />
          </Field>
          <Field icon={<Users className="h-4 w-4" />} label="Guests & Rooms">
            <select className="w-full bg-transparent font-serif text-lg text-cream outline-none [&>option]:text-ink">
              {["1 Guest, 1 Room", "2 Guests, 1 Room", "3 Guests, 1 Room", "4 Guests, 2 Rooms", "6 Guests, 3 Rooms"].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </Field>
          <button
            onClick={() => onBook(hotelId)}
            className="bg-gold px-10 py-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink transition hover:bg-gold-light sm:col-span-2 lg:col-span-1"
          >
            Check Availability
          </button>
        </div>

        <div className="mt-6 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className={cn(
                "h-px transition-all duration-500",
                i === active ? "w-12 bg-gold" : "w-6 bg-cream/30 hover:bg-cream/60"
              )}
            />
          ))}
          <span className="ml-auto font-serif text-sm tracking-widest text-cream/50">
            0{active + 1} / 0{slides.length}
          </span>
        </div>
      </div>
    </section>
  );
}

function Field({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block bg-ink/60 px-5 py-4">
      <span className="mb-1 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-gold">
        {icon} {label}
      </span>
      {children}
    </label>
  );
}
