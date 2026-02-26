import { Calendar, MapPin, Star, ChevronRight } from "lucide-react";
import culturalNight from "@/assets/cultural-night.jpg";
import foodTour from "@/assets/food-tour.jpg";
import fishingTrip from "@/assets/fishing-trip.jpg";

const featuredEvent = {
  name: "Uyo Carnival 2026",
  date: "March 15–20, 2026",
  location: "Uyo City Center",
};

const events = [
  { name: "Akwa Ibom Food Festival", date: "Apr 5, 2026", location: "Ibom Hall", category: "Food", img: foodTour },
  { name: "Ibibio Cultural Night", date: "Mar 28, 2026", location: "Heritage Park", category: "Cultural", img: culturalNight },
  { name: "Fishing Tournament", date: "May 12, 2026", location: "Oron Waterfront", category: "Sports", img: fishingTrip },
];

const guides = [
  { name: "Emem Udoh", specialty: "Cultural Tours", rating: 4.9, price: "₦25,000/day" },
  { name: "Aniekan Eke", specialty: "Beach & Nature", rating: 4.7, price: "₦20,000/day" },
  { name: "Iniobong Akpan", specialty: "Food Tours", rating: 4.8, price: "₦18,000/day" },
];

const tips = [
  { text: "Try the edikang ikong soup at Etido's kitchen — it's the best in Uyo!", location: "Uyo" },
  { text: "Visit Ibeno Beach early morning for the best views and fewer crowds.", location: "Ibeno" },
  { text: "The mangrove boat rides are magical during sunset hours.", location: "Oron" },
];

const EventsScreen = () => {
  return (
    <div className="pb-24">
      <div className="px-4 pt-4 pb-2">
        <h1 className="text-lg font-bold text-foreground">What's On in Akwa Ibom</h1>
      </div>

      {/* Featured Event */}
      <div className="px-4 mb-5">
        <div className="bg-accent-gradient rounded-lg p-5">
          <p className="text-accent-foreground/80 text-[10px] font-semibold uppercase tracking-wider">Featured Event</p>
          <h2 className="text-accent-foreground text-lg font-extrabold mt-1">{featuredEvent.name}</h2>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-accent-foreground/80 text-xs flex items-center gap-1">
              <Calendar size={12} /> {featuredEvent.date}
            </span>
            <span className="text-accent-foreground/80 text-xs flex items-center gap-1">
              <MapPin size={12} /> {featuredEvent.location}
            </span>
          </div>
          <button className="mt-4 bg-primary-foreground/20 text-accent-foreground text-xs font-semibold px-5 py-2.5 rounded-lg min-h-[40px]">
            Book Now
          </button>
        </div>
      </div>

      {/* Events Calendar */}
      <div className="px-4 mb-5">
        <h3 className="text-sm font-bold text-foreground mb-3">Upcoming Events</h3>
        <div className="space-y-3">
          {events.map((e) => (
            <div key={e.name} className="flex gap-3 bg-card rounded-lg p-3 border border-border shadow-elegant animate-fade-in">
              <img src={e.img} alt={e.name} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" loading="lazy" />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-foreground">{e.name}</h4>
                <p className="text-[11px] text-muted-foreground mt-0.5">{e.date} · {e.location}</p>
                <span className="inline-block mt-1.5 text-[9px] font-semibold bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">
                  {e.category}
                </span>
              </div>
              <button className="text-xs font-semibold text-primary self-center whitespace-nowrap">
                Add to Trip
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Local Guides */}
      <div className="mb-5">
        <div className="px-4 mb-3">
          <h3 className="text-sm font-bold text-foreground">Local Guides & Hosts</h3>
        </div>
        <div className="flex gap-3 overflow-x-auto pl-4 pr-2 hide-scrollbar">
          {guides.map((g) => (
            <div key={g.name} className="flex-shrink-0 w-[160px] bg-card rounded-lg p-3 border border-border shadow-elegant">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-2">
                <span className="text-sm font-bold text-muted-foreground">{g.name[0]}</span>
              </div>
              <p className="text-xs font-semibold text-foreground">{g.name}</p>
              <p className="text-[10px] text-muted-foreground">{g.specialty}</p>
              <div className="flex items-center gap-1 mt-1">
                <Star size={10} className="text-secondary fill-secondary" />
                <span className="text-[10px] font-semibold text-foreground">{g.rating}</span>
              </div>
              <p className="text-[10px] text-secondary font-bold mt-1">{g.price}</p>
              <button className="mt-2 text-[10px] font-semibold text-primary">Book Guide</button>
            </div>
          ))}
        </div>
      </div>

      {/* Community Tips */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-bold text-foreground mb-3">What Locals Recommend</h3>
        <div className="space-y-2">
          {tips.map((t, i) => (
            <div key={i} className="bg-muted rounded-lg p-3">
              <p className="text-xs text-foreground leading-relaxed">"{t.text}"</p>
              <span className="text-[10px] text-muted-foreground mt-1 flex items-center gap-1">
                <MapPin size={10} /> {t.location}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsScreen;
