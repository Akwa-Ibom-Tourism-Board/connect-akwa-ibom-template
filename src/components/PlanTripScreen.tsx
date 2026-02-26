import { useState } from "react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlanTripScreenProps {
  onBack: () => void;
}

const PlanTripScreen = ({ onBack }: PlanTripScreenProps) => {
  const [tripType, setTripType] = useState("individual");
  const [cabinClass, setCabinClass] = useState("economy");
  const [budget, setBudget] = useState("mid");
  const [roomType, setRoomType] = useState("double");
  const [includeMeals, setIncludeMeals] = useState(true);
  const [airportPickup, setAirportPickup] = useState(true);
  const [carRental, setCarRental] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["Relaxation", "Food"]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const Chip = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors min-h-[36px] ${
        active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
      }`}
    >
      {label}
    </button>
  );

  const Toggle = ({ value, onChange, label }: { value: boolean; onChange: (v: boolean) => void; label: string }) => (
    <div className="flex items-center justify-between py-3">
      <span className="text-sm text-foreground">{label}</span>
      <button
        onClick={() => onChange(!value)}
        className={`w-11 h-6 rounded-full transition-colors flex items-center px-0.5 ${
          value ? "bg-primary" : "bg-border"
        }`}
      >
        <div className={`w-5 h-5 rounded-full bg-primary-foreground shadow-sm transition-transform ${value ? "translate-x-5" : "translate-x-0"}`} />
      </button>
    </div>
  );

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-4 pb-2">
        <button onClick={onBack} className="p-2 -ml-2">
          <ArrowLeft size={20} className="text-foreground" />
        </button>
        <div>
          <h1 className="text-lg font-bold text-foreground">Plan My Trip</h1>
          <p className="text-xs text-muted-foreground">Tell us what you need and we'll handle the rest</p>
        </div>
      </div>

      <div className="px-4 space-y-5 mt-2">
        {/* Trip Type */}
        <section className="bg-card rounded-lg p-4 border border-border">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Trip Type</h3>
          <div className="flex gap-2 flex-wrap">
            {["individual", "couple", "group"].map((t) => (
              <Chip key={t} label={t.charAt(0).toUpperCase() + t.slice(1)} active={tripType === t} onClick={() => setTripType(t)} />
            ))}
          </div>
        </section>

        {/* Flight Details */}
        <section className="bg-card rounded-lg p-4 border border-border">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Flight Details</h3>
          <div className="space-y-3">
            <input placeholder="From (origin city)" className="w-full h-11 px-3 rounded-lg bg-muted border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <input placeholder="To — Uyo, Akwa Ibom" value="Uyo, Akwa Ibom" readOnly className="w-full h-11 px-3 rounded-lg bg-muted border border-border text-sm text-muted-foreground" />
            <div className="grid grid-cols-2 gap-2">
              <input type="date" className="h-11 px-3 rounded-lg bg-muted border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              <input type="date" className="h-11 px-3 rounded-lg bg-muted border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div className="flex gap-2">
              <Chip label="Economy" active={cabinClass === "economy"} onClick={() => setCabinClass("economy")} />
              <Chip label="Business" active={cabinClass === "business"} onClick={() => setCabinClass("business")} />
            </div>
          </div>
        </section>

        {/* Accommodation */}
        <section className="bg-card rounded-lg p-4 border border-border">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Accommodation</h3>
          <div className="flex gap-2 mb-3">
            {[
              { key: "budget", label: "₦ Budget" },
              { key: "mid", label: "₦₦ Mid-range" },
              { key: "premium", label: "₦₦₦ Premium" },
            ].map((b) => (
              <Chip key={b.key} label={b.label} active={budget === b.key} onClick={() => setBudget(b.key)} />
            ))}
          </div>
          <div className="flex gap-2">
            {["Single", "Double", "Suite"].map((r) => (
              <Chip key={r} label={r} active={roomType === r.toLowerCase()} onClick={() => setRoomType(r.toLowerCase())} />
            ))}
          </div>
        </section>

        {/* Feeding */}
        <section className="bg-card rounded-lg p-4 border border-border">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Feeding</h3>
          <Toggle value={includeMeals} onChange={setIncludeMeals} label="Include meals?" />
          {includeMeals && (
            <div className="flex gap-2 flex-wrap mt-2">
              {["No restriction", "Vegetarian", "Halal", "Seafood-heavy", "Local only"].map((d) => (
                <Chip key={d} label={d} active={d === "No restriction"} onClick={() => {}} />
              ))}
            </div>
          )}
        </section>

        {/* Transport */}
        <section className="bg-card rounded-lg p-4 border border-border">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Transport</h3>
          <Toggle value={airportPickup} onChange={setAirportPickup} label="Airport pickup?" />
          <Toggle value={carRental} onChange={setCarRental} label="Car rental needed?" />
        </section>

        {/* Interests */}
        <section className="bg-card rounded-lg p-4 border border-border">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Interests</h3>
          <div className="flex gap-2 flex-wrap">
            {["Relaxation", "Adventure", "Culture", "Food", "History", "Nightlife", "Nature", "Family-friendly"].map((i) => (
              <Chip key={i} label={i} active={selectedInterests.includes(i)} onClick={() => toggleInterest(i)} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <Button className="w-full min-h-[52px] bg-accent-gradient text-accent-foreground font-bold text-base rounded-lg shadow-elegant">
          Build My Itinerary
        </Button>
      </div>
    </div>
  );
};

export default PlanTripScreen;
