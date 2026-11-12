import { facilities } from "../data/hotels";
import SectionHeading from "./ui/SectionHeading";
import { ArrowRight } from "./ui/Icons";

export default function Experiences() {
  return (
    <section id="experiences" className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Facilities"
            title="Everything you expect from a good hotel"
            description="Every Grand Stay comes with the essentials done well — food, pool, gym and spaces for meetings and celebrations."
            align="left"
          />
          <a
            href="#contact"
            className="reveal group inline-flex items-center gap-2 self-start border-b border-ink pb-1 text-[11px] font-medium uppercase tracking-[0.3em] text-ink transition hover:border-gold hover:text-gold lg:self-auto"
          >
            Enquire for events <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((e, i) => (
            <article
              key={e.title}
              className={`reveal delay-${(i % 4) * 100 + 100} group relative aspect-[3/4] overflow-hidden`}
            >
              <img
                src={e.image}
                alt={e.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="font-serif text-sm italic text-gold">0{i + 1}</span>
                <h3 className="mt-1 font-serif text-2xl font-medium text-cream">{e.title}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-cream/70 transition-all duration-500 group-hover:max-h-32">
                  {e.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Standard inclusions strip */}
        <div className="reveal mt-14 grid grid-cols-2 gap-px border border-ink/10 bg-ink/10 sm:grid-cols-3 lg:grid-cols-6">
          {[
            "Free High-Speed Wi-Fi",
            "Breakfast Buffet",
            "24h Room Service",
            "24h Front Desk",
            "Parking",
            "Daily Housekeeping",
          ].map((item) => (
            <div key={item} className="bg-sand px-4 py-6 text-center text-xs font-medium uppercase tracking-[0.15em] text-ink">
              <span className="mb-2 block font-serif text-2xl text-gold">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
