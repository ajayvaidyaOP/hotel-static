export type Room = {
  name: string;
  size: string;
  guests: number;
  price: number;
  image: string;
  features: string[];
};

export type Hotel = {
  id: string;
  name: string;
  tagline: string;
  location: string;
  city: string;
  type: "Business" | "Airport" | "City Centre" | "Leisure" | "Family";
  rating: number;
  reviews: number;
  startingPrice: number;
  description: string;
  story: string;
  image: string;
  gallery: string[];
  highlights: string[];
  amenities: string[];
  rooms: Room[];
  dining: { name: string; cuisine: string; desc: string }[];
  nearby: { place: string; distance: string }[];
  contact: { phone: string; email: string; address: string };
};

const img = (id: number, w = 1200, h = 627) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=${h}&w=${w}`;

// Shared imagery
export const IMG = {
  lobby1: img(14036253),
  lobby2: img(6876590),
  lobby3: img(14036251),
  reception: img(6876607),
  buffet1: img(28999498),
  buffet2: img(28999503),
  restaurant: img(29000037),
  gym: img(35215421),
  gym2: img(29149073),
  poolIndoor: img(20705879),
  poolOutdoor: img(14036440),
  poolRooftop: img(11984085),
  poolCity: img(8328775),
  banquet1: img(15621210),
  banquet2: img(40143061),
  banquet3: img(32990165),
  ext1: img(29000090),
  ext2: img(28999489),
  ext3: img(38557164),
  ext4: img(29000034),
  ext5: img(10325006),
  room1: img(8082217),
  room2: img(3688261),
  room3: img(40624417),
  room4: img(2725675),
  room5: img(8134775),
  room6: img(7031731),
  room7: img(6394550),
  dining: img(29000046),
  table: img(24433378),
};

export const hotels: Hotel[] = [
  {
    id: "grand-stay-new-delhi",
    name: "Grand Stay New Delhi",
    tagline: "Minutes from the airport, close to everything",
    location: "Aerocity, New Delhi",
    city: "New Delhi",
    type: "Airport",
    rating: 4.6,
    reviews: 2841,
    startingPrice: 4200,
    description:
      "A modern 180-room hotel in Aerocity with a free 24-hour airport shuttle, soundproof rooms and a rooftop pool — ideal for transit guests and business travellers.",
    story:
      "Grand Stay New Delhi sits just 10 minutes from IGI Airport Terminal 3 and is connected to the Aerocity metro station. All 180 rooms feature soundproof windows, blackout curtains, a work desk and high-speed Wi-Fi. Guests enjoy a complimentary breakfast buffet, a rooftop pool, a 24-hour gym and three conference rooms. Our 24-hour front desk and airport shuttle make early departures and late arrivals easy.",
    image: IMG.ext1,
    gallery: [IMG.lobby1, IMG.room1, IMG.poolRooftop, IMG.buffet1],
    highlights: ["Free airport shuttle", "10 min from T3", "Rooftop pool", "24-hour check-in"],
    amenities: [
      "Free Wi-Fi",
      "Airport Shuttle",
      "Complimentary Breakfast",
      "Rooftop Pool",
      "24h Fitness Centre",
      "Conference Rooms",
      "24h Room Service",
      "Free Parking",
      "Laundry Service",
      "Travel Desk",
      "Power Backup",
      "Doctor on Call",
    ],
    rooms: [
      {
        name: "Standard Room",
        size: "26 m²",
        guests: 2,
        price: 4200,
        image: IMG.room6,
        features: ["Queen bed", "Soundproof windows", "Work desk", "42\" Smart TV", "Tea/coffee maker", "Rain shower"],
      },
      {
        name: "Deluxe Room",
        size: "32 m²",
        guests: 3,
        price: 5800,
        image: IMG.room1,
        features: ["King bed", "City view", "Sofa seating", "Mini bar", "Bathtub", "Complimentary breakfast"],
      },
      {
        name: "Executive Suite",
        size: "55 m²",
        guests: 4,
        price: 9500,
        image: IMG.room5,
        features: ["Separate living room", "Lounge access", "Airport pick-up", "Nespresso machine", "Bathtub & shower", "Late checkout"],
      },
    ],
    dining: [
      { name: "The Terrace Café", cuisine: "Multi-cuisine · All-day", desc: "Breakfast buffet from 6 AM, à la carte Indian, Continental and Asian all day." },
      { name: "Sky Bar", cuisine: "Bar & Grill", desc: "Rooftop bar with poolside seating, cocktails and tandoor snacks." },
    ],
    nearby: [
      { place: "IGI Airport T3", distance: "4 km" },
      { place: "Aerocity Metro", distance: "500 m" },
      { place: "Connaught Place", distance: "14 km" },
      { place: "Gurugram Cyber City", distance: "11 km" },
    ],
    contact: {
      phone: "+91 11 4500 1200",
      email: "delhi@grandstayhotels.com",
      address: "Asset 7, Hospitality District, Aerocity, New Delhi 110037",
    },
  },
  {
    id: "grand-stay-mumbai",
    name: "Grand Stay Mumbai",
    tagline: "Business made comfortable in BKC",
    location: "Bandra Kurla Complex, Mumbai",
    city: "Mumbai",
    type: "Business",
    rating: 4.7,
    reviews: 3412,
    startingPrice: 6500,
    description:
      "A 220-room business hotel in the heart of BKC with a full-floor business centre, 6 meeting rooms, a 500-seat banquet hall and an executive lounge.",
    story:
      "Located in Mumbai's premier business district, Grand Stay Mumbai is walking distance from major corporate offices, the Jio World Centre and the US Consulate. Rooms are designed for work and rest — ergonomic chairs, fast Wi-Fi, universal sockets and blackout blinds. The hotel's 6 meeting rooms and 500-seat banquet hall host conferences, product launches and weddings throughout the year. The executive lounge on the 14th floor serves breakfast, evening cocktails and offers private check-in.",
    image: IMG.ext5,
    gallery: [IMG.lobby2, IMG.room7, IMG.banquet1, IMG.gym],
    highlights: ["Executive lounge", "6 meeting rooms", "500-seat banquet", "Walk to BKC offices"],
    amenities: [
      "Free Wi-Fi",
      "Business Centre",
      "Executive Lounge",
      "Banquet Hall",
      "Fitness Centre",
      "Outdoor Pool",
      "24h Room Service",
      "Valet Parking",
      "Laundry & Pressing",
      "Car Rental",
      "Currency Exchange",
      "Concierge",
    ],
    rooms: [
      {
        name: "Superior Room",
        size: "30 m²",
        guests: 2,
        price: 6500,
        image: IMG.room7,
        features: ["King or twin beds", "Ergonomic work chair", "High-speed Wi-Fi", "48\" Smart TV", "Iron & board", "Safe deposit box"],
      },
      {
        name: "Executive Room",
        size: "36 m²",
        guests: 3,
        price: 8900,
        image: IMG.room2,
        features: ["Executive lounge access", "Complimentary breakfast", "Evening cocktails", "Pressing of 2 garments", "Bathtub", "Late checkout 2 PM"],
      },
      {
        name: "Business Suite",
        size: "64 m²",
        guests: 4,
        price: 14500,
        image: IMG.room4,
        features: ["Separate living & dining", "Meeting table for 4", "Lounge access", "Airport transfer", "Walk-in wardrobe", "Nespresso machine"],
      },
    ],
    dining: [
      { name: "Spice Route", cuisine: "Indian & Continental", desc: "All-day dining with a lavish breakfast buffet and weekend brunch." },
      { name: "Oriental Bowl", cuisine: "Pan-Asian", desc: "Dim sum, sushi and wok specials for business lunches and dinners." },
    ],
    nearby: [
      { place: "Jio World Centre", distance: "1 km" },
      { place: "US Consulate", distance: "800 m" },
      { place: "Mumbai Airport (T2)", distance: "7 km" },
      { place: "Bandra Station", distance: "3 km" },
    ],
    contact: {
      phone: "+91 22 6600 4200",
      email: "mumbai@grandstayhotels.com",
      address: "Plot C-54, G Block, Bandra Kurla Complex, Mumbai 400051",
    },
  },
  {
    id: "grand-stay-bengaluru",
    name: "Grand Stay Bengaluru",
    tagline: "Your base in the heart of the city",
    location: "MG Road, Bengaluru",
    city: "Bengaluru",
    type: "City Centre",
    rating: 4.5,
    reviews: 1967,
    startingPrice: 3800,
    description:
      "A smart 140-room hotel on MG Road with a popular rooftop restaurant, co-working lounge and direct access to the metro, shopping and nightlife.",
    story:
      "Grand Stay Bengaluru puts you right on MG Road — steps from the metro station, Brigade Road and Commercial Street. The hotel is a favourite with both tech professionals and leisure travellers thanks to its co-working lounge, fast Wi-Fi and well-priced rooms. The rooftop restaurant, Altitude, is one of the area's best-loved spots for weekend brunch. Garden-facing rooms overlook Cubbon Park, and the hotel offers hourly shuttles to Whitefield and Electronic City tech parks on weekdays.",
    image: IMG.ext2,
    gallery: [IMG.lobby3, IMG.room3, IMG.poolCity, IMG.restaurant],
    highlights: ["On MG Road metro", "Rooftop restaurant", "Co-working lounge", "Tech park shuttle"],
    amenities: [
      "Free Wi-Fi",
      "Co-working Lounge",
      "Rooftop Restaurant",
      "Fitness Centre",
      "Swimming Pool",
      "Meeting Rooms",
      "24h Room Service",
      "Parking",
      "Laundry Service",
      "Tech Park Shuttle",
      "Bicycle Rental",
      "Luggage Storage",
    ],
    rooms: [
      {
        name: "Standard Room",
        size: "24 m²",
        guests: 2,
        price: 3800,
        image: IMG.room3,
        features: ["Queen bed", "Work desk", "40\" Smart TV", "Tea/coffee maker", "Rain shower", "Daily housekeeping"],
      },
      {
        name: "Deluxe Garden View",
        size: "30 m²",
        guests: 3,
        price: 5200,
        image: IMG.room6,
        features: ["King bed", "Cubbon Park view", "Reading chair", "Mini fridge", "Breakfast included", "Bathtub"],
      },
      {
        name: "Junior Suite",
        size: "48 m²",
        guests: 4,
        price: 8200,
        image: IMG.room1,
        features: ["Living area with sofa bed", "Dining table", "Two TVs", "Breakfast included", "Late checkout", "Welcome fruit basket"],
      },
    ],
    dining: [
      { name: "Altitude Rooftop", cuisine: "Modern Indian & Grills", desc: "Open-air rooftop with city views, live music on weekends." },
      { name: "The Garden Café", cuisine: "All-day · Multi-cuisine", desc: "Breakfast buffet, South Indian specialities and quick working lunches." },
    ],
    nearby: [
      { place: "MG Road Metro", distance: "150 m" },
      { place: "Cubbon Park", distance: "600 m" },
      { place: "UB City Mall", distance: "1.5 km" },
      { place: "Kempegowda Airport", distance: "35 km" },
    ],
    contact: {
      phone: "+91 80 4100 3300",
      email: "bengaluru@grandstayhotels.com",
      address: "No. 42, Mahatma Gandhi Road, Bengaluru 560001",
    },
  },
  {
    id: "grand-stay-hyderabad",
    name: "Grand Stay Hyderabad",
    tagline: "Space for families, weddings and celebrations",
    location: "Gachibowli, Hyderabad",
    city: "Hyderabad",
    type: "Family",
    rating: 4.6,
    reviews: 1534,
    startingPrice: 4500,
    description:
      "A spacious 200-room hotel in Gachibowli with interconnecting family rooms, a kids' play zone, two banquet halls and a large lawn for outdoor weddings.",
    story:
      "Set on a 4-acre property in Gachibowli, Grand Stay Hyderabad is built for families and celebrations. Interconnecting rooms, a supervised kids' play zone, a children's pool and a family-friendly buffet make it a comfortable choice for travelling families. Two pillarless banquet halls (up to 800 guests) and a 20,000 sq ft lawn host weddings, receptions and corporate events. The hotel is close to the Financial District, HITEC City and the Outer Ring Road.",
    image: IMG.ext3,
    gallery: [IMG.banquet2, IMG.room2, IMG.poolOutdoor, IMG.buffet2],
    highlights: ["Interconnecting rooms", "Kids' play zone", "2 banquet halls", "Wedding lawn"],
    amenities: [
      "Free Wi-Fi",
      "Kids' Play Zone",
      "Children's Pool",
      "Banquet Halls",
      "Wedding Lawn",
      "Fitness Centre",
      "Swimming Pool",
      "Free Parking",
      "24h Room Service",
      "Babysitting on Request",
      "Travel Desk",
      "Doctor on Call",
    ],
    rooms: [
      {
        name: "Standard Room",
        size: "28 m²",
        guests: 2,
        price: 4500,
        image: IMG.room2,
        features: ["King or twin beds", "Garden view", "Work desk", "42\" Smart TV", "Tea/coffee maker", "Rain shower"],
      },
      {
        name: "Family Room",
        size: "42 m²",
        guests: 4,
        price: 6900,
        image: IMG.room4,
        features: ["1 king + 2 single beds", "Interconnecting option", "Mini fridge", "Breakfast for 4", "Bathtub", "Kids' welcome kit"],
      },
      {
        name: "Premier Suite",
        size: "70 m²",
        guests: 5,
        price: 11500,
        image: IMG.room5,
        features: ["Two bedrooms", "Living & dining area", "Pool view balcony", "Breakfast included", "Late checkout", "Airport transfer"],
      },
    ],
    dining: [
      { name: "Deccan Kitchen", cuisine: "Hyderabadi & Multi-cuisine", desc: "Famous for its biryani and Sunday family brunch." },
      { name: "Poolside Grill", cuisine: "Barbecue & Snacks", desc: "Evening grills, mocktails and a kids' menu by the pool." },
    ],
    nearby: [
      { place: "HITEC City", distance: "5 km" },
      { place: "Financial District", distance: "3 km" },
      { place: "Inorbit Mall", distance: "6 km" },
      { place: "RGI Airport", distance: "28 km" },
    ],
    contact: {
      phone: "+91 40 6700 5500",
      email: "hyderabad@grandstayhotels.com",
      address: "Survey No. 115, Gachibowli Main Road, Hyderabad 500032",
    },
  },
  {
    id: "grand-stay-goa",
    name: "Grand Stay Goa",
    tagline: "A relaxed stay, five minutes from the beach",
    location: "Candolim, North Goa",
    city: "Goa",
    type: "Leisure",
    rating: 4.7,
    reviews: 2210,
    startingPrice: 5500,
    description:
      "A 120-room leisure hotel in Candolim with a large lagoon-style pool, swim-up bar, spa and a free shuttle to Candolim and Calangute beaches.",
    story:
      "Grand Stay Goa is a bright, easy-going holiday hotel set in landscaped gardens, five minutes from Candolim Beach. The centrepiece is a large lagoon-style pool with a swim-up bar and sun deck. Rooms are airy with private balconies overlooking the pool or gardens. The hotel runs a free beach shuttle every hour, organises water-sports and sightseeing trips, and its spa offers Ayurvedic and Balinese treatments. Couples, families and groups all find their pace here.",
    image: IMG.ext4,
    gallery: [IMG.poolOutdoor, IMG.room3, IMG.lobby1, IMG.dining],
    highlights: ["Lagoon pool & swim-up bar", "Free beach shuttle", "Spa", "Balcony rooms"],
    amenities: [
      "Free Wi-Fi",
      "Lagoon Pool",
      "Swim-up Bar",
      "Spa & Wellness",
      "Beach Shuttle",
      "Fitness Centre",
      "Kids' Pool",
      "Free Parking",
      "24h Room Service",
      "Water Sports Desk",
      "Bike & Scooter Rental",
      "Laundry Service",
    ],
    rooms: [
      {
        name: "Garden View Room",
        size: "30 m²",
        guests: 2,
        price: 5500,
        image: IMG.room3,
        features: ["King bed", "Private balcony", "Garden view", "Mini fridge", "Rain shower", "Breakfast included"],
      },
      {
        name: "Pool View Deluxe",
        size: "34 m²",
        guests: 3,
        price: 7200,
        image: IMG.room6,
        features: ["King bed", "Pool-facing balcony", "Daybed", "Mini bar", "Bathtub", "Breakfast included"],
      },
      {
        name: "Family Suite",
        size: "60 m²",
        guests: 5,
        price: 11800,
        image: IMG.room1,
        features: ["Two bedrooms", "Living area", "Large terrace", "Breakfast for 5", "Direct pool access", "Late checkout"],
      },
    ],
    dining: [
      { name: "Coastal Kitchen", cuisine: "Goan & Seafood", desc: "Fresh catch, Goan curries and a breakfast buffet under the palms." },
      { name: "Splash Swim-up Bar", cuisine: "Bar & Snacks", desc: "Cocktails, beer and bites served right in the pool." },
    ],
    nearby: [
      { place: "Candolim Beach", distance: "900 m" },
      { place: "Fort Aguada", distance: "3 km" },
      { place: "Calangute Market", distance: "4 km" },
      { place: "Goa Airport (Dabolim)", distance: "40 km" },
    ],
    contact: {
      phone: "+91 832 248 9900",
      email: "goa@grandstayhotels.com",
      address: "Fort Aguada Road, Candolim, North Goa 403515",
    },
  },
];

export const facilities = [
  {
    title: "Restaurants & Bars",
    desc: "Complimentary breakfast buffet and all-day dining at every hotel, plus a bar or rooftop to unwind in the evening.",
    image: IMG.restaurant,
  },
  {
    title: "Swimming Pools",
    desc: "Rooftop, lagoon-style or garden pools with sun decks at every property — towels and loungers included.",
    image: IMG.poolRooftop,
  },
  {
    title: "Fitness Centres",
    desc: "24-hour gyms equipped with treadmills, cross-trainers, free weights and complimentary water and towels.",
    image: IMG.gym,
  },
  {
    title: "Banquets & Meetings",
    desc: "From a 10-person boardroom to an 800-guest wedding — halls, lawns, AV support and catering under one roof.",
    image: IMG.banquet1,
  },
];

export const testimonials = [
  {
    name: "Rohit Sharma",
    hotel: "Grand Stay New Delhi",
    text: "Had a 6 AM flight and the free shuttle was waiting at 3:30 AM sharp. Room was quiet, bed was comfortable, breakfast was great. Exactly what you want from an airport hotel.",
    rating: 5,
  },
  {
    name: "Ananya Iyer",
    hotel: "Grand Stay Bengaluru",
    text: "Stayed 4 nights for work. Wi-Fi was fast, co-working lounge was handy and MG Road metro is literally outside. Rooftop restaurant is a bonus — great value for the location.",
    rating: 5,
  },
  {
    name: "The Khan Family",
    hotel: "Grand Stay Hyderabad",
    text: "We hosted our daughter's wedding reception here for 600 guests. The banquet team handled everything — décor, food, parking. Guests are still talking about the biryani!",
    rating: 5,
  },
  {
    name: "Mark & Lisa Thompson",
    hotel: "Grand Stay Goa",
    text: "Clean, friendly, and the pool is huge. Beach shuttle every hour made it so easy. Breakfast had both Indian and Continental options. Would definitely come back.",
    rating: 5,
  },
];

export const offers = [
  {
    title: "Stay 3, Pay 2",
    subtitle: "Long Stay Offer",
    desc: "Book 3 nights at any Grand Stay hotel and the third night is on us. Includes daily breakfast for two.",
    tag: "Save 33%",
  },
  {
    title: "Early Bird — 20% Off",
    subtitle: "Advance Purchase",
    desc: "Book at least 21 days in advance and save 20% on our best available rate. Free cancellation up to 7 days before arrival.",
    tag: "Best Rate",
  },
  {
    title: "Weekend Family Package",
    subtitle: "Family Getaway",
    desc: "Family room, breakfast for four, kids eat free at lunch and dinner, plus late checkout till 3 PM on Sundays.",
    tag: "Weekends",
  },
];
