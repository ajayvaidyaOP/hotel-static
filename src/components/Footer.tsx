import { hotels } from "../data/hotels";
import { Facebook, Instagram, Twitter } from "./ui/Icons";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      {/* Newsletter */}
      <div className="border-b border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">Newsletter</p>
            <h3 className="mt-3 font-serif text-3xl font-medium md:text-4xl">
              Get exclusive offers and member rates by email
            </h3>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md border-b border-cream/30 focus-within:border-gold"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent py-3 font-serif text-lg outline-none placeholder:text-cream/40"
            />
            <button className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center border border-gold/60 font-serif text-2xl font-semibold text-gold">G</span>
            <span className="leading-none">
              <span className="block font-serif text-2xl font-semibold tracking-wide">GRAND STAY</span>
              <span className="block text-[9px] uppercase tracking-[0.4em] text-gold">Hotels</span>
            </span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/50">
            Five modern, well-run hotels in New Delhi, Mumbai, Bengaluru, Hyderabad and Goa.
            Comfortable rooms, honest pricing and friendly service — every time.
          </p>
          <p className="mt-4 text-sm text-cream/70">
            Central Reservations: <span className="text-gold">1800 200 300</span> (Toll-free)
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter].map((I, k) => (
              <a
                key={k}
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-cream/15 text-cream/60 transition hover:border-gold hover:text-gold"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Our Hotels" items={hotels.map((h) => h.name)} href="#hotels" />
        <FooterCol title="Services" items={["Rooms & Suites", "Restaurants", "Meetings & Events", "Weddings", "Offers"]} href="#experiences" />
        <FooterCol title="Company" items={["About Grand Stay", "Careers", "Corporate Rates", "Travel Agents", "Contact Us"]} href="#contact" />
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-[11px] uppercase tracking-[0.2em] text-cream/40 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Grand Stay Hotels Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items, href }: { title: string; items: string[]; href: string }) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">{title}</p>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it}>
            <a href={href} className="text-sm text-cream/60 transition hover:text-cream">
              {it}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
