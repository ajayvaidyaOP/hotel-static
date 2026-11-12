import { IMG } from "../data/hotels";
import { Concierge, Crown, Globe, Leaf } from "./ui/Icons";

const stats = [
  { value: "5", label: "Hotels" },
  { value: "860+", label: "Rooms" },
  { value: "10", label: "Restaurants & Bars" },
  { value: "4.6", label: "Average Rating" },
];

const pillars = [
  { icon: Crown, title: "Clean, Modern Rooms", desc: "Comfortable beds, blackout curtains, rain showers and a proper work desk in every room." },
  { icon: Concierge, title: "24-Hour Service", desc: "Front desk, room service and in-house doctor on call — round the clock at all hotels." },
  { icon: Leaf, title: "Breakfast Included", desc: "A generous Indian & Continental breakfast buffet is included in most of our rates." },
  { icon: Globe, title: "Prime Locations", desc: "Airport, business district, city centre or beach — each hotel is where you need to be." },
];

export default function Intro() {
  return (
    <section className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="reveal relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={IMG.lobby2.replace("h=627&w=1200", "h=1000&w=800")}
                alt="Hotel lobby"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-10 -right-4 hidden w-56 overflow-hidden border-8 border-cream shadow-2xl sm:block lg:-right-12 lg:w-72">
              <img
                src={IMG.room1.replace("h=627&w=1200", "h=500&w=600")}
                alt="Deluxe room"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -left-4 top-10 hidden flex-col items-center border border-gold/40 bg-ink px-5 py-6 text-center text-cream lg:-left-10 lg:flex">
              <span className="font-serif text-5xl text-gold">15</span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-cream/60">
                Years of<br />Hospitality
              </span>
            </div>
          </div>

          <div>
            <div className="reveal">
              <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
                <span className="h-px w-8 bg-gold" /> About Grand Stay
              </p>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.1] text-ink text-balance md:text-5xl lg:text-[3.4rem]">
                Dependable hotels in five of India's busiest cities
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-mist md:text-base">
                Since 2011, Grand Stay has been the hotel people come back to — for a work trip,
                a family holiday or a wedding. We keep things simple: well-kept rooms, honest
                pricing, good food and staff who genuinely care. Whether you're landing at
                Delhi airport at midnight or heading to Candolim beach for a week, there's a
                Grand Stay ready for you.
              </p>
            </div>

            <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <div key={p.title} className={`reveal delay-${(i % 2) * 100 + 100}`}>
                  <p.icon className="h-7 w-7 text-gold" />
                  <h3 className="mt-3 font-serif text-xl font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal mt-24 grid grid-cols-2 divide-y divide-gold/20 border-y border-gold/20 md:grid-cols-4 md:divide-x md:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-8 text-center">
              <div className="font-serif text-5xl font-medium text-ink lg:text-6xl">{s.value}</div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.3em] text-mist">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
