import { useState } from "react";
import { Bell, MapPin, Search, Plane, Hotel, Car, UtensilsCrossed, Target, Bus, ChevronRight, Sparkles, Trophy, Calendar, Navigation } from "lucide-react";
import ibenoBeach from "@/assets/ibeno-beach.jpg";
import lbaPark from "@/assets/lba-park.jpg";
import oronMuseum from "@/assets/oron-museum.jpg";
import waterfall from "@/assets/waterfall.jpg";
import foodTour from "@/assets/food-tour.jpg";
import culturalNight from "@/assets/cultural-night.jpg";
import fishingTrip from "@/assets/fishing-trip.jpg";
import mangroveRide from "@/assets/mangrove-ride.jpg";

interface HomeScreenProps {
  onNavigate: (tab: string) => void;
  onPlanTrip: () => void;
}

const quickActions = [
  { icon: Plane, label: "Flights", color: "bg-primary" },
  { icon: Hotel, label: "Hotels", color: "bg-primary" },
  { icon: Car, label: "Car Rental", color: "bg-primary" },
  { icon: UtensilsCrossed, label: "Food & Dining", color: "bg-secondary" },
];

const moreActions = [
  { icon: Target, label: "Experiences" },
  { icon: Bus, label: "Airport Pickup" },
];

const attractions = [
  { img: ibenoBeach, name: "Ibeno Beach", tag: "Longest beach in West Africa" },
  { img: lbaPark, name: "LBA Park", tag: "Adventure & Leisure" },
  { img: oronMuseum, name: "Oron Museum", tag: "History & Culture" },
  { img: waterfall, name: "Mkpat Enin Waterfall", tag: "Nature & Hiking" },
];

const experiences = [
  { img: foodTour, name: "Food Tour of Uyo", duration: "3 hrs", price: "₦15,000" },
  { img: culturalNight, name: "Cultural Night", duration: "4 hrs", price: "₦20,000" },
  { img: fishingTrip, name: "Fishing Trip — Oron", duration: "5 hrs", price: "₦25,000" },
  { img: mangroveRide, name: "Mangrove Boat Ride", duration: "2 hrs", price: "₦12,000" },
];

const allActions = [...quickActions, ...moreActions.map(a => ({ ...a, color: "bg-primary" }))];

const HomeScreen = ({ onNavigate, onPlanTrip }: HomeScreenProps) => {
  const [showAllActions, setShowAllActions] = useState(false);
  const displayedActions = showAllActions ? allActions : quickActions;

  return (
    <div className="pb-24">
      {/* Top Bar */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-foreground">Hello, Traveller 👋</h1>
            <button className="flex items-center gap-1 text-muted-foreground text-xs mt-0.5">
              <MapPin size={12} />
              <span>Uyo, Akwa Ibom</span>
              <ChevronRight size={12} />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2">
              <Bell size={20} className="text-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary rounded-full" />
            </button>
            <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
              <span className="text-sm font-semibold text-muted-foreground">T</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="What do you need?"
            className="w-full h-11 pl-10 pr-4 rounded-lg bg-muted border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {/* AI Concierge Card */}
      <div className="px-4 mb-4">
        <button
          onClick={onPlanTrip}
          className="w-full bg-hero-gradient rounded-lg p-4 flex items-center gap-3 text-left"
        >
          <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
            <Sparkles size={20} className="text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-primary-foreground text-sm font-semibold">AI Travel Concierge</p>
            <p className="text-primary-foreground/70 text-xs">Plan a 3-day romantic trip to Uyo →</p>
          </div>
          <ChevronRight size={18} className="text-primary-foreground/60" />
        </button>
      </div>

      {/* Plan My Trip Button */}
      <div className="px-4 mb-4">
        <button
          onClick={onPlanTrip}
          className="w-full h-12 bg-accent-gradient rounded-lg flex items-center justify-center gap-2 shadow-elegant"
        >
          <Navigation size={18} className="text-accent-foreground" />
          <span className="text-accent-foreground font-bold text-sm">Plan My Trip</span>
        </button>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mb-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold text-foreground">Quick Actions</h2>
          <button
            onClick={() => setShowAllActions(!showAllActions)}
            className="text-xs text-secondary font-semibold"
          >
            {showAllActions ? "Show less" : "See all"}
          </button>
        </div>
        <div className={`grid ${showAllActions ? "grid-cols-3" : "grid-cols-4"} gap-3`}>
          {displayedActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.label}
                onClick={() => onNavigate("explore")}
                className="flex flex-col items-center gap-2 p-3 bg-card rounded-lg shadow-elegant border border-border animate-fade-in"
              >
                <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center`}>
                  <Icon size={20} className="text-primary-foreground" />
                </div>
                <span className="text-[11px] font-medium text-foreground leading-tight text-center">
                  {action.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Loyalty Points */}
      <div className="px-4 mb-5">
        <div className="bg-accent-gradient rounded-lg p-3 flex items-center gap-3">
          <Trophy size={20} className="text-accent-foreground flex-shrink-0" />
          <p className="text-accent-foreground text-xs font-medium">
            🏆 You have 1,240 points — redeem on your next booking
          </p>
        </div>
      </div>

      {/* Featured Attractions */}
      <div className="mb-5">
        <div className="px-4 flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold text-foreground">Discover Akwa Ibom</h2>
          <button
            onClick={() => onNavigate("explore")}
            className="text-xs text-secondary font-semibold"
          >
            See all
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pl-4 pr-2 hide-scrollbar">
          {attractions.map((a) => (
            <div
              key={a.name}
              className="flex-shrink-0 w-[160px] rounded-lg overflow-hidden shadow-elegant animate-fade-in"
            >
              <div className="relative h-[200px]">
                <img
                  src={a.img}
                  alt={a.name}
                  className="w-full h-full object-cover animate-slow-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-primary-foreground text-sm font-bold leading-tight">{a.name}</p>
                  <span className="inline-block mt-1 text-[9px] font-semibold bg-secondary/90 text-secondary-foreground px-1.5 py-0.5 rounded">
                    {a.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What's Happening */}
      <div className="px-4 mb-5">
        <button
          onClick={() => onNavigate("events")}
          className="w-full bg-accent-gradient rounded-lg p-4 flex items-center gap-3 text-left"
        >
          <Calendar size={24} className="text-accent-foreground flex-shrink-0" />
          <div>
            <p className="text-accent-foreground text-sm font-bold">Uyo Carnival — March 2026</p>
            <p className="text-accent-foreground/80 text-xs">Don't miss it!</p>
          </div>
          <ChevronRight size={18} className="text-accent-foreground/60 ml-auto" />
        </button>
      </div>

      {/* Local Experiences */}
      <div className="mb-6">
        <div className="px-4 flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold text-foreground">Local Experiences</h2>
          <button
            onClick={() => onNavigate("explore")}
            className="text-xs text-secondary font-semibold"
          >
            See all
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pl-4 pr-2 hide-scrollbar">
          {experiences.map((e) => (
            <div
              key={e.name}
              className="flex-shrink-0 w-[200px] rounded-lg overflow-hidden bg-card shadow-elegant border border-border animate-fade-in"
            >
              <img
                src={e.img}
                alt={e.name}
                className="w-full h-[120px] object-cover"
                loading="lazy"
              />
              <div className="p-3">
                <p className="text-foreground text-sm font-semibold leading-tight">{e.name}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-muted-foreground text-[11px]">{e.duration}</span>
                  <span className="text-secondary font-bold text-sm">{e.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
