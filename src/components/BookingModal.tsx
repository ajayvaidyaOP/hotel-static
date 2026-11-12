import { useEffect, useMemo, useState } from "react";
import { hotels } from "../data/hotels";
import { Close, Check } from "./ui/Icons";

type Props = {
  open: boolean;
  hotelId?: string;
  room?: string;
  onClose: () => void;
};

export default function BookingModal({ open, hotelId, room, onClose }: Props) {
  const [hid, setHid] = useState(hotelId ?? hotels[0].id);
  const [roomName, setRoomName] = useState<string>(room ?? "");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [done, setDone] = useState(false);

  const hotel = useMemo(() => hotels.find((h) => h.id === hid) ?? hotels[0], [hid]);
  const selectedRoom = hotel.rooms.find((r) => r.name === roomName) ?? hotel.rooms[0];

  useEffect(() => {
    if (open) {
      setHid(hotelId ?? hotels[0].id);
      setRoomName(room ?? "");
      setDone(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, hotelId, room]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const d = (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000;
    return d > 0 ? Math.round(d) : 0;
  }, [checkIn, checkOut]);

  const total = nights * selectedRoom.price;
  const taxes = Math.round(total * 0.18);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center">
      <div className="animate-fade-in absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={onClose} />
      <div className="animate-fade-up relative max-h-[92vh] w-full max-w-4xl overflow-y-auto bg-cream shadow-2xl sm:mx-6">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center bg-ink/80 text-cream transition hover:bg-gold hover:text-ink"
        >
          <Close className="h-5 w-5" />
        </button>

        {done ? (
          <div className="flex min-h-[460px] flex-col items-center justify-center p-10 text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold text-gold">
              <Check className="h-9 w-9" />
            </span>
            <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.35em] text-gold">Reservation Request Received</p>
            <h3 className="mt-3 font-serif text-4xl text-ink">We look forward to welcoming you</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-mist">
              Your request for the <strong className="text-ink">{selectedRoom.name}</strong> at{" "}
              <strong className="text-ink">{hotel.name}</strong>
              {nights > 0 && ` for ${nights} night${nights > 1 ? "s" : ""}`} has been sent. A reservations
              specialist will confirm within the hour.
            </p>
            <button
              onClick={onClose}
              className="mt-8 bg-ink px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cream hover:bg-gold hover:text-ink"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_1.3fr]">
            {/* Summary */}
            <div className="relative min-h-[220px] bg-ink text-cream">
              <img src={selectedRoom.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{hotel.location}</p>
                <h3 className="mt-1 font-serif text-3xl">{hotel.name}</h3>
                <p className="mt-1 font-serif text-lg italic text-cream/70">{selectedRoom.name}</p>

                <div className="mt-6 space-y-2 border-t border-cream/15 pt-5 text-sm">
                  <div className="flex justify-between text-cream/70">
                    <span>₹{selectedRoom.price.toLocaleString("en-IN")} × {nights || "–"} nights</span>
                    <span>{nights ? `₹${total.toLocaleString("en-IN")}` : "–"}</span>
                  </div>
                  <div className="flex justify-between text-cream/70">
                    <span>Taxes &amp; fees (18%)</span>
                    <span>{nights ? `₹${taxes.toLocaleString("en-IN")}` : "–"}</span>
                  </div>
                  <div className="flex justify-between border-t border-cream/15 pt-3 font-serif text-xl">
                    <span>Total</span>
                    <span className="text-gold">{nights ? `₹${(total + taxes).toLocaleString("en-IN")}` : "Select dates"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
              className="p-8 lg:p-10"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">Reserve a Stay</p>
              <h3 className="mt-2 font-serif text-3xl text-ink">Your details</h3>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <Select label="Hotel" value={hid} onChange={(v) => { setHid(v); setRoomName(""); }}>
                  {hotels.map((h) => (
                    <option key={h.id} value={h.id}>{h.name} — {h.location}</option>
                  ))}
                </Select>
                <Select label="Room" value={selectedRoom.name} onChange={setRoomName}>
                  {hotel.rooms.map((r) => (
                    <option key={r.name} value={r.name}>{r.name} · ₹{r.price.toLocaleString("en-IN")}</option>
                  ))}
                </Select>
                <Input label="Check-in" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
                <Input label="Check-out" type="date" value={checkOut} min={checkIn} onChange={(e) => setCheckOut(e.target.value)} required />
                <Select label="Guests" value={String(guests)} onChange={(v) => setGuests(Number(v))}>
                  {Array.from({ length: selectedRoom.guests }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                  ))}
                </Select>
                <Input label="Full name" placeholder="Your name" required />
                <Input label="Email" type="email" placeholder="you@email.com" required />
                <Input label="Phone" type="tel" placeholder="+91" required />
              </div>

              <button
                type="submit"
                className="mt-10 w-full bg-ink py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-cream transition hover:bg-gold hover:text-ink"
              >
                Request Reservation
              </button>
              <p className="mt-3 text-center text-[11px] text-mist">
                Free cancellation up to 48 hours before arrival. No payment required today.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

function Input({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
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

function Select({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-mist">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 font-serif text-lg text-ink outline-none focus:border-gold"
      >
        {children}
      </select>
    </label>
  );
}
