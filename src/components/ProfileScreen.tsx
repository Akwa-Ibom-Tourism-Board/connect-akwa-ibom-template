import { User, Heart, History, Settings, Globe, Moon, LogOut, MessageCircle, Phone, AlertTriangle, Shield, ChevronRight, Award, Star } from "lucide-react";

const ProfileScreen = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="px-4 pt-6 pb-4 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-3">
          <User size={28} className="text-primary-foreground" />
        </div>
        <h2 className="text-base font-bold text-foreground">Traveller</h2>
        <span className="text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full mt-1">
          ✅ Verified Traveller
        </span>
      </div>

      {/* Stats */}
      <div className="px-4 mb-5">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Trips Taken", value: "3" },
            { label: "Wishlist", value: "7" },
            { label: "Points", value: "1,240" },
          ].map((s) => (
            <div key={s.label} className="bg-card rounded-lg p-3 text-center border border-border">
              <p className="text-lg font-extrabold text-foreground">{s.value}</p>
              <p className="text-[10px] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* My Travel */}
      <div className="px-4 mb-4">
        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">My Travel</h3>
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          {[
            { icon: History, label: "Travel History" },
            { icon: Heart, label: "Wishlist" },
            { icon: Star, label: "Saved Preferences" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <button key={item.label} className={`flex items-center gap-3 w-full p-3.5 text-left min-h-[48px] ${i > 0 ? "border-t border-border" : ""}`}>
                <Icon size={18} className="text-primary" />
                <span className="text-sm font-medium text-foreground flex-1">{item.label}</span>
                <ChevronRight size={16} className="text-muted-foreground" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Support & Safety */}
      <div className="px-4 mb-4">
        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Support & Safety</h3>
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          {[
            { icon: MessageCircle, label: "24/7 Travel Support Chat", badge: "Online" },
            { icon: Phone, label: "Emergency Contacts" },
            { icon: Shield, label: "Tourist Helpdesk" },
            { icon: AlertTriangle, label: "Report an Issue" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <button key={item.label} className={`flex items-center gap-3 w-full p-3.5 text-left min-h-[48px] ${i > 0 ? "border-t border-border" : ""}`}>
                <Icon size={18} className="text-primary" />
                <span className="text-sm font-medium text-foreground flex-1">{item.label}</span>
                {item.badge && (
                  <span className="text-[9px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">{item.badge}</span>
                )}
                <ChevronRight size={16} className="text-muted-foreground" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Account */}
      <div className="px-4 mb-4">
        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Account</h3>
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          {[
            { icon: User, label: "Edit Profile" },
            { icon: Settings, label: "Notification Settings" },
            { icon: Globe, label: "Language" },
            { icon: Moon, label: "Dark Mode" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <button key={item.label} className={`flex items-center gap-3 w-full p-3.5 text-left min-h-[48px] ${i > 0 ? "border-t border-border" : ""}`}>
                <Icon size={18} className="text-primary" />
                <span className="text-sm font-medium text-foreground flex-1">{item.label}</span>
                <ChevronRight size={16} className="text-muted-foreground" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Tourism Board Portal */}
      <div className="px-4 mb-4">
        <button className="text-xs text-muted-foreground font-medium">Tourism Board Portal →</button>
      </div>

      {/* Sign Out */}
      <div className="px-4 mb-6">
        <button className="flex items-center gap-2 text-destructive text-sm font-medium py-2">
          <LogOut size={16} /> Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;
