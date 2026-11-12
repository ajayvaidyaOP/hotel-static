import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { Close, Menu } from "./ui/Icons";

const links = [
  { label: "Hotels", href: "#hotels" },
  { label: "Facilities", href: "#experiences" },
  { label: "Offers", href: "#offers" },
  { label: "Reviews", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

type Props = { solid?: boolean; onBook: () => void };

export default function Navbar({ solid = false, onBook }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = scrolled || solid || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        dark ? "bg-ink/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(201,169,97,0.15)]" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10 lg:py-5">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center border border-gold/60 font-serif text-xl font-semibold text-gold transition group-hover:bg-gold group-hover:text-ink">
            G
          </span>
          <span className="leading-none">
            <span className="block font-serif text-xl font-semibold tracking-wide text-cream">
              GRAND STAY
            </span>
            <span className="block text-[9px] uppercase tracking-[0.4em] text-gold">
              Hotels
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[12px] font-medium uppercase tracking-[0.2em] text-cream/80 transition hover:text-gold after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a href="tel:+911800200300" className="text-[12px] tracking-wider text-cream/70 hover:text-gold">
            +91 1800 200 300
          </a>
          <button
            onClick={onBook}
            className="border border-gold bg-gold px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-ink transition hover:bg-transparent hover:text-gold"
          >
            Book Now
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="text-cream lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <Close className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden bg-ink transition-all duration-500 lg:hidden",
          open ? "max-h-[420px] border-t border-gold/20" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-cream/5 py-3 font-serif text-2xl text-cream hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onBook();
            }}
            className="mt-4 bg-gold py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-ink"
          >
            Book Now
          </button>
        </nav>
      </div>
    </header>
  );
}
