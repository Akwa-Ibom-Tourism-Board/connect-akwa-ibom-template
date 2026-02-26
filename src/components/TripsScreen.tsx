import { ClipboardList, Plane, Hotel, Car, UtensilsCrossed, ChevronRight, Download, Share2, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const TripsScreen = () => {
  return (
    <div className="pb-24">
      <div className="px-4 pt-4 pb-2">
        <h1 className="text-lg font-bold text-foreground">My Trips</h1>
      </div>

      {/* Active Trip Card */}
      <div className="px-4 mb-4">
        <div className="bg-hero-gradient rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-primary-foreground text-sm font-bold">Your Trip to Akwa Ibom</h2>
            <div className="flex gap-2">
              <button className="text-primary-foreground/70"><Share2 size={16} /></button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-primary-foreground/60 text-[10px]">Dates</p>
              <p className="text-primary-foreground text-xs font-semibold">Mar 15–20</p>
            </div>
            <div>
              <p className="text-primary-foreground/60 text-[10px]">Duration</p>
              <p className="text-primary-foreground text-xs font-semibold">5 Days</p>
            </div>
            <div>
              <p className="text-primary-foreground/60 text-[10px]">Type</p>
              <p className="text-primary-foreground text-xs font-semibold">Couple</p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/60 text-[10px]">Estimated Total</p>
            <p className="text-primary-foreground text-xl font-extrabold">₦485,000</p>
          </div>
        </div>
      </div>

      {/* Booked Services */}
      <div className="px-4 mb-4">
        <h3 className="text-sm font-bold text-foreground mb-3">Booked Services</h3>
        <div className="space-y-2">
          {[
            { icon: Plane, label: "Flight", status: "Confirmed", checked: true },
            { icon: Hotel, label: "Hotel", status: "Confirmed", checked: true },
            { icon: Car, label: "Car Rental", status: "Confirmed", checked: true },
            { icon: UtensilsCrossed, label: "Meals", status: "Confirmed", checked: true },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex items-center gap-3 bg-card rounded-lg p-3 border border-border shadow-elegant">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                  <Icon size={16} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground flex-1">{s.label}</span>
                <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  ✅ {s.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Day-by-Day */}
      <div className="px-4 mb-4">
        <h3 className="text-sm font-bold text-foreground mb-3">Itinerary</h3>
        {[
          { day: 1, date: "Mar 15", activities: ["🛫 Flight arrival", "🚗 Airport pickup", "🏨 Hotel check-in", "🍽️ Welcome dinner"] },
          { day: 2, date: "Mar 16", activities: ["🏖️ Ibeno Beach visit", "🍽️ Seafood lunch", "🎯 LBA Park adventure"] },
          { day: 3, date: "Mar 17", activities: ["🏛️ Oron Museum tour", "🍽️ Local cuisine lunch", "🌊 Mangrove boat ride"] },
        ].map((d) => (
          <div key={d.day} className="mb-3 bg-card rounded-lg p-3 border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-foreground">Day {d.day}</span>
              <span className="text-[10px] text-muted-foreground">{d.date}</span>
            </div>
            <div className="space-y-1.5">
              {d.activities.map((a) => (
                <p key={a} className="text-xs text-muted-foreground">{a}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="px-4 space-y-2 mb-4">
        <Button variant="outline" className="w-full min-h-[48px] justify-center gap-2">
          <Download size={16} /> Download Itinerary (PDF)
        </Button>
        <Button variant="outline" className="w-full min-h-[48px] justify-center gap-2">
          <Share2 size={16} /> Share Trip
        </Button>
      </div>

      {/* Offline Note */}
      <div className="px-4 mb-4">
        <div className="flex items-center gap-2 bg-muted rounded-lg p-3">
          <Wifi size={14} className="text-muted-foreground" />
          <p className="text-[11px] text-muted-foreground">📶 This itinerary is available offline</p>
        </div>
      </div>
    </div>
  );
};

export default TripsScreen;
