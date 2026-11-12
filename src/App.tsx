import { useCallback, useState } from "react";
import type { Hotel } from "./data/hotels";
import { useReveal } from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Hotels from "./components/Hotels";
import Experiences from "./components/Experiences";
import Offers from "./components/Offers";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HotelDetail from "./components/HotelDetail";
import BookingModal from "./components/BookingModal";

type Booking = { open: boolean; hotelId?: string; room?: string };

export default function App() {
  const [selected, setSelected] = useState<Hotel | null>(null);
  const [booking, setBooking] = useState<Booking>({ open: false });

  // re-run reveal observer whenever view changes
  useReveal([selected?.id ?? "home"]);

  const openBooking = useCallback((hotelId?: string, room?: string) => {
    setBooking({ open: true, hotelId, room });
  }, []);
  const closeBooking = useCallback(() => setBooking((b) => ({ ...b, open: false })), []);

  const goHome = () => {
    setSelected(null);
    requestAnimationFrame(() => {
      document.getElementById("hotels")?.scrollIntoView({ behavior: "instant" as ScrollBehavior });
    });
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar solid={!!selected} onBook={() => openBooking(selected?.id)} />

      {selected ? (
        <HotelDetail
          hotel={selected}
          onBack={goHome}
          onBook={openBooking}
          onSwitch={setSelected}
        />
      ) : (
        <main>
          <Hero onBook={openBooking} />
          <Intro />
          <Hotels onSelect={setSelected} />
          <Experiences />
          <Offers onBook={() => openBooking()} />
          <Testimonials />
          <Contact />
        </main>
      )}

      <Footer />

      <BookingModal
        open={booking.open}
        hotelId={booking.hotelId}
        room={booking.room}
        onClose={closeBooking}
      />
    </div>
  );
}
