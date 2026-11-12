import { useEffect, useState } from "react";
import { hotels, IMG, type Hotel } from "../data/hotels";
import { cn } from "../utils/cn";
import { ArrowLeft, ArrowRight, Check, Mail, MapPin, Maximize, Phone, Star, Users } from "./ui/Icons";

type Props = {
  hotel: Hotel;
  onBack: () => void;
  onBook: (hotelId: string, room?: string) => void;
  onSwitch: (hotel: Hotel) => void;
};

export default function HotelDetail({ hotel, onBack, onBook, onSwitch }: Props) {
  const [activeImg, setActiveImg] = useState(0);
  const images = [hotel.image, ...hotel.gallery];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setActiveImg(0);
  }, [hotel.id]);

  const idx = hotels.findIndex((h) => h.id === hotel.id);
  const nextHotel = hotels[(idx + 1) % hotels.length];

  return (
    <main className="bg-cream">
      {/* Hero */}
      <section className="relative h-[85svh] min-h-[560px] overflow-hidden bg-ink">
        <img
          key={activeImg}
          src={images[activeImg]}
          alt={hotel.name}
          className="animate-fade-in h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/40" />

        <div className="absolute inset-x-0 top-24 mx-auto max-w-7xl px-6 lg:top-28 lg:px-10">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.3em] text-cream/80 transition hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" /> All Hotels
          </button>
        </div>

        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-10 lg:px-10 lg:pb-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="animate-fade-up flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
                <span className="h-px w-10 bg-gold" /> {hotel.type} · {hotel.location}
              </p>
              <h1 className="animate-fade-up delay-100 mt-4 font-serif text-5xl font-medium leading-none text-cream sm:text-6xl lg:text-8xl">
                {hotel.name}
              </h1>
              <p className="animate-fade-up delay-200 mt-4 font-serif text-2xl italic text-cream/70">
                {hotel.tagline}
              </p>
            </div>
            <div className="animate-fade-up delay-300 flex items-center gap-6 text-cream">
              <div>
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-1 text-xs text-cream/60">
                  {hotel.rating} · {hotel.reviews.toLocaleString()} reviews
                </p>
              </div>
              <div className="h-10 w-px bg-cream/20" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-cream/50">From</p>
                <p className="font-serif text-3xl">₹{hotel.startingPrice.toLocaleString("en-IN")}</p>
              </div>
            </div>
          </div>

          {/* thumbnails */}
          <div className="mt-8 flex gap-2 overflow-x-auto pb-1">
            {images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImg(i)}
                className={cn(
                  "h-14 w-20 shrink-0 overflow-hidden border-2 transition sm:h-16 sm:w-24",
                  i === activeImg ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky booking strip */}
      <div className="sticky top-[72px] z-40 border-b border-ink/10 bg-cream/95 backdrop-blur lg:top-[80px]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:px-10">
          <nav className="hidden gap-8 text-[11px] font-medium uppercase tracking-[0.25em] text-mist md:flex">
            {["Overview", "Rooms", "Amenities", "Dining", "Nearby", "Location"].map((s) => (
              <a key={s} href={`#${s.toLowerCase()}`} className="transition hover:text-gold">
                {s}
              </a>
            ))}
          </nav>
          <button
            onClick={() => onBook(hotel.id)}
            className="ml-auto bg-ink px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cream transition hover:bg-gold hover:text-ink"
          >
            Reserve Now
          </button>
        </div>
      </div>

      {/* Overview */}
      <section id="overview" className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-24 lg:px-10">
          <div className="reveal">
            <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-8 bg-gold" /> About the Hotel
            </p>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-ink md:text-5xl">
              {hotel.description}
            </h2>
            <p className="mt-8 text-[15px] leading-[1.8] text-mist md:text-base">{hotel.story}</p>
          </div>
          <div className="reveal delay-200">
            <div className="border border-ink/10 bg-white p-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">Highlights</p>
              <ul className="mt-5 space-y-4">
                {hotel.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 border-b border-ink/5 pb-4 font-serif text-xl text-ink last:border-0 last:pb-0">
                    <Check className="h-5 w-5 text-gold" /> {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-5">
              <img src={hotel.gallery[0]} alt="" className="aspect-square w-full object-cover" />
              <img src={hotel.gallery[1]} alt="" className="aspect-square w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="bg-ink py-20 text-cream lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal max-w-2xl">
            <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-8 bg-gold" /> Rooms &amp; Suites
            </p>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.1] md:text-5xl">
              Comfortable rooms for every budget
            </h2>
            <p className="mt-4 text-sm text-cream/60">
              All rooms include free Wi-Fi, air-conditioning, Smart TV, tea/coffee maker, safe, hairdryer and daily housekeeping. Check-in 2 PM · Check-out 12 PM.
            </p>
          </div>

          <div className="mt-14 space-y-8">
            {hotel.rooms.map((r, i) => (
              <article
                key={r.name}
                className={cn(
                  "reveal grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
                  i % 2 === 1 && "lg:[&>*:first-child]:order-2"
                )}
              >
                <div className="group aspect-[4/3] overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div>
                  <span className="font-serif text-sm italic text-gold">0{i + 1}</span>
                  <h3 className="mt-2 font-serif text-4xl font-medium">{r.name}</h3>
                  <div className="mt-4 flex gap-6 text-xs uppercase tracking-[0.2em] text-cream/50">
                    <span className="flex items-center gap-2"><Maximize className="h-4 w-4 text-gold" /> {r.size}</span>
                    <span className="flex items-center gap-2"><Users className="h-4 w-4 text-gold" /> Up to {r.guests}</span>
                  </div>
                  <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-cream/70">
                    {r.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-gold" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-cream/10 pt-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-cream/50">Per night</p>
                      <p className="font-serif text-3xl">₹{r.price.toLocaleString("en-IN")}</p>
                    </div>
                    <button
                      onClick={() => onBook(hotel.id, r.name)}
                      className="ml-auto border border-gold px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold transition hover:bg-gold hover:text-ink"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-8 bg-gold" /> Amenities <span className="h-px w-8 bg-gold" />
            </p>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-ink md:text-5xl">
              Hotel facilities &amp; services
            </h2>
          </div>
          <div className="reveal mt-14 grid grid-cols-2 gap-px border border-ink/10 bg-ink/10 md:grid-cols-4">
            {hotel.amenities.map((a, i) => (
              <div key={a} className="flex flex-col items-center justify-center gap-3 bg-sand px-4 py-10 text-center transition hover:bg-white">
                <span className="font-serif text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm font-medium tracking-wide text-ink">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining */}
      <section id="dining" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <div className="reveal">
              <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
                <span className="h-px w-8 bg-gold" /> Dining
              </p>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-ink md:text-5xl">
                Restaurants &amp; bars
              </h2>
              <p className="mt-4 text-sm text-mist">
                Breakfast buffet served daily 6:30 – 10:30 AM. In-room dining available 24 hours.
              </p>
              <div className="mt-10 space-y-8">
                {hotel.dining.map((d) => (
                  <div key={d.name} className="border-l-2 border-gold pl-6">
                    <h3 className="font-serif text-3xl text-ink">{d.name}</h3>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-gold">{d.cuisine}</p>
                    <p className="mt-2 text-sm text-mist">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal delay-200 grid grid-cols-2 gap-4">
              <img
                src={IMG.buffet2.replace("h=627&w=1200", "h=800&w=600")}
                alt="Breakfast buffet"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <img
                src={IMG.restaurant.replace("h=627&w=1200", "h=800&w=600")}
                alt="Restaurant"
                loading="lazy"
                className="mt-10 aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section id="nearby" className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-8 bg-gold" /> Getting Around <span className="h-px w-8 bg-gold" />
            </p>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-ink md:text-5xl">
              What's nearby
            </h2>
          </div>
          <div className="reveal mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hotel.nearby.map((n) => (
              <div key={n.place} className="flex items-center justify-between border border-ink/10 bg-white px-6 py-5">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gold" />
                  <span className="font-serif text-lg text-ink">{n.place}</span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-mist">{n.distance}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="location" className="bg-ink py-20 text-cream lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="reveal">
              <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
                <span className="h-px w-8 bg-gold" /> Location &amp; Contact
              </p>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.1] md:text-5xl">{hotel.location}</h2>
              <div className="mt-10 space-y-6">
                <Row icon={<MapPin className="h-5 w-5" />} label="Address" value={hotel.contact.address} />
                <Row icon={<Phone className="h-5 w-5" />} label="Telephone" value={hotel.contact.phone} />
                <Row icon={<Mail className="h-5 w-5" />} label="Email" value={hotel.contact.email} />
              </div>
            </div>
            <div className="reveal delay-200 relative aspect-[4/3] overflow-hidden lg:aspect-auto">
              <img src={hotel.gallery[2]} alt="" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-ink/30" />
              <div className="absolute bottom-6 left-6 border border-gold/40 bg-ink/80 px-5 py-4 backdrop-blur">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Check-in / Check-out</p>
                <p className="mt-1 font-serif text-xl">2:00 PM / 12:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next hotel */}
      <button
        onClick={() => onSwitch(nextHotel)}
        className="group relative block h-[50vh] min-h-[360px] w-full overflow-hidden bg-ink text-left"
      >
        <img
          src={nextHotel.image}
          alt={nextHotel.name}
          loading="lazy"
          className="h-full w-full object-cover opacity-60 transition duration-[1500ms] group-hover:scale-105 group-hover:opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-cream">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-gold">Next Destination</p>
          <h3 className="mt-3 font-serif text-5xl font-medium md:text-7xl">{nextHotel.name}</h3>
          <p className="mt-2 font-serif text-xl italic text-cream/70">{nextHotel.location}</p>
          <span className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] transition group-hover:gap-4">
            Discover <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </button>
    </main>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/50 text-gold">{icon}</span>
      <div>
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-cream/50">{label}</p>
        <p className="mt-1 font-serif text-lg">{value}</p>
      </div>
    </div>
  );
}
