import { offers } from "../data/hotels";
import SectionHeading from "./ui/SectionHeading";
import { ArrowRight, Sparkle } from "./ui/Icons";

type Props = { onBook: () => void };

export default function Offers({ onBook }: Props) {
  return (
    <section id="offers" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Offers & Packages"
          title="Great deals when you book direct"
          description="Book directly on our website for the lowest rates, free cancellation and extra inclusions you won't get elsewhere."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {offers.map((o, i) => (
            <article
              key={o.title}
              className={`reveal delay-${i * 100 + 100} group relative flex flex-col border border-ink/10 bg-white p-8 transition duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_30px_60px_-30px_rgba(201,169,97,0.5)] lg:p-10`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-mist">
                  {o.subtitle}
                </span>
                <span className="flex items-center gap-1 bg-ink px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                  <Sparkle className="h-3 w-3" /> {o.tag}
                </span>
              </div>
              <h3 className="mt-6 font-serif text-3xl font-medium text-ink lg:text-4xl">{o.title}</h3>
              <div className="my-5 h-px w-12 bg-gold transition-all duration-500 group-hover:w-full" />
              <p className="flex-1 text-sm leading-relaxed text-mist">{o.desc}</p>
              <button
                onClick={onBook}
                className="mt-8 inline-flex items-center gap-2 self-start text-[11px] font-semibold uppercase tracking-[0.3em] text-ink transition group-hover:text-gold"
              >
                Book this offer <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
