import { Search, SlidersHorizontal, Star, Calendar } from "lucide-react";
import ibenoBeach from "@/assets/ibeno-beach.jpg";
import lbaPark from "@/assets/lba-park.jpg";
import oronMuseum from "@/assets/oron-museum.jpg";
import waterfall from "@/assets/waterfall.jpg";
import foodTour from "@/assets/food-tour.jpg";
import culturalNight from "@/assets/cultural-night.jpg";
import fishingTrip from "@/assets/fishing-trip.jpg";
import mangroveRide from "@/assets/mangrove-ride.jpg";
import { useState } from "react";

const categories = ["All", "Beaches", "Culture", "Food", "Nightlife", "Adventure", "Events"];

const places = [
  { img: ibenoBeach, name: "Ibeno Beach", desc: "Pristine sandy beach stretching along the Atlantic coast", season: "Nov–Mar", rating: 4.8, budget: "₦₦" },
  { img: lbaPark, name: "LBA Park", desc: "Adventure park with ziplines, nature trails and leisure activities", season: "Year-round", rating: 4.5, budget: "₦₦₦" },
  { img: oronMuseum, name: "Oron Museum", desc: "Rich collection of historical artifacts and Efik/Ibibio heritage", season: "Year-round", rating: 4.3, budget: "₦" },
  { img: waterfall, name: "Mkpat Enin Waterfall", desc: "Stunning waterfall surrounded by lush tropical rainforest", season: "Jun–Oct", rating: 4.7, budget: "₦" },
];

const experienceCards = [
  { img: foodTour, name: "Food Tour", duration: "3h", price: "₦15k" },
  { img: culturalNight, name: "Cultural Night", duration: "4h", price: "₦20k" },
  { img: fishingTrip, name: "Fishing Trip", duration: "5h", price: "₦25k" },
  { img: mangroveRide, name: "Boat Ride", duration: "2h", price: "₦12k" },
];

const ExploreScreen = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="pb-24">
      {/* Search */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search places, food, experiences..."
              className="w-full h-11 pl-10 pr-4 rounded-lg bg-muted border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button className="w-11 h-11 rounded-lg border border-border flex items-center justify-center bg-card">
            <SlidersHorizontal size={18} className="text-foreground" />
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto px-4 py-3 hide-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Places Grid */}
      <div className="px-4 space-y-3 mb-6">
        {places.map((p) => (
          <div
            key={p.name}
            className="bg-card rounded-lg overflow-hidden shadow-elegant border border-border animate-fade-in"
          >
            <img src={p.img} alt={p.name} className="w-full h-[160px] object-cover" loading="lazy" />
            <div className="p-3">
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-bold text-foreground">{p.name}</h3>
                <div className="flex items-center gap-0.5">
                  <Star size={12} className="text-secondary fill-secondary" />
                  <span className="text-xs font-semibold text-foreground">{p.rating}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.desc}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                  <Calendar size={10} /> {p.season}
                </span>
                <span className="text-[10px] bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-bold">
                  {p.budget}
                </span>
              </div>
              <button className="mt-3 text-xs font-semibold text-primary">View Details →</button>
            </div>
          </div>
        ))}
      </div>

      {/* Local Experiences */}
      <div className="mb-6">
        <div className="px-4 mb-3">
          <h2 className="text-sm font-bold text-foreground">Local Experiences</h2>
        </div>
        <div className="flex gap-3 overflow-x-auto pl-4 pr-2 hide-scrollbar">
          {experienceCards.map((e) => (
            <div
              key={e.name}
              className="flex-shrink-0 w-[130px] rounded-lg overflow-hidden bg-card shadow-elegant border border-border"
            >
              <img src={e.img} alt={e.name} className="w-full h-[80px] object-cover" loading="lazy" />
              <div className="p-2">
                <p className="text-xs font-semibold text-foreground">{e.name}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[10px] text-muted-foreground">{e.duration}</span>
                  <span className="text-[10px] text-secondary font-bold">{e.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seasonal Banner */}
      <div className="px-4 mb-6">
        <div className="bg-accent-gradient rounded-lg p-4">
          <p className="text-accent-foreground text-sm font-bold">🎊 Uyo Carnival — March 2026</p>
          <p className="text-accent-foreground/80 text-xs mt-1">Don't miss it! Book your spot now.</p>
          <button className="mt-3 bg-primary-foreground/20 text-accent-foreground text-xs font-semibold px-4 py-2 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreScreen;
