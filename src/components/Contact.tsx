import { useState } from "react";
import { hotels } from "../data/hotels";
import { Mail, MapPin, Phone } from "./ui/Icons";
import SectionHeading from "./ui/SectionHeading";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Have a question? We're happy to help"
              description="Our central reservations desk is open 24 hours for bookings, group enquiries, weddings and corporate rates."
              align="left"
            />

            <div className="reveal mt-10 space-y-6">
              <Row icon={<Phone className="h-5 w-5" />} label="Central Reservations (Toll-free)" value="1800 200 300" />
              <Row icon={<Mail className="h-5 w-5" />} label="Email" value="reservations@grandstayhotels.com" />
              <Row icon={<MapPin className="h-5 w-5" />} label="Head Office" value="Grand Stay House, 12 Barakhamba Road, New Delhi 110001" />
            </div>

            <div className="reveal mt-10 border-t border-ink/10 pt-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">Our Properties</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {hotels.map((h) => (
                  <li key={h.id} className="text-sm">
                    <span className="font-serif text-lg text-ink">{h.name}</span>
                    <span className="block text-xs text-mist">{h.contact.phone}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="reveal delay-200 border border-ink/10 bg-white p-8 lg:p-12"
          >
            {sent ? (
              <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold text-gold">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <h3 className="mt-6 font-serif text-3xl text-ink">Thank you</h3>
                <p className="mt-2 max-w-sm text-sm text-mist">
                  Our team will get back to you within 2 hours during business hours.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-3xl font-medium text-ink">Send an enquiry</h3>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <Input label="Full name" placeholder="Your name" required />
                  <Input label="Email" type="email" placeholder="you@email.com" required />
                  <Input label="Phone" type="tel" placeholder="+91" />
                  <label className="block">
                    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-mist">Preferred hotel</span>
                    <select className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 font-serif text-lg text-ink outline-none focus:border-gold">
                      <option>Any hotel</option>
                      {hotels.map((h) => (
                        <option key={h.id}>{h.name}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-mist">Message</span>
                    <textarea
                      rows={4}
                      placeholder="Dates, number of rooms, event details or any special request…"
                      className="mt-2 w-full resize-none border-b border-ink/20 bg-transparent py-2 font-serif text-lg text-ink outline-none placeholder:text-ink/30 focus:border-gold"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="mt-10 w-full bg-ink py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-cream transition hover:bg-gold hover:text-ink"
                >
                  Send Enquiry
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/50 text-gold">{icon}</span>
      <div>
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-mist">{label}</p>
        <p className="mt-1 font-serif text-lg text-ink">{value}</p>
      </div>
    </div>
  );
}

function Input({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-mist">{label}</span>
      <input
        {...rest}
        className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 font-serif text-lg text-ink outline-none placeholder:text-ink/30 focus:border-gold"
      />
    </label>
  );
}
