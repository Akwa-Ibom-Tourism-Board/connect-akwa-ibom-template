import { useState } from "react";
import { Plane, Palmtree, ShieldCheck, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OnboardingScreenProps {
  onComplete: () => void;
}

const slides = [
  {
    icon: Plane,
    emoji: "✈️",
    heading: "Plan Your Entire Trip in One Place",
    body: "Flights, hotels, food, car rentals — all sorted before you arrive.",
  },
  {
    icon: Palmtree,
    emoji: "🏖️",
    heading: "Discover our heritage",
    body: "Connect Akwa Ibom in real time",
  },
  {
    icon: ShieldCheck,
    emoji: "🛡️",
    heading: "Trusted. Verified. Government-Backed.",
    body: "Every hotel, vendor and guide is verified by the Akwa Ibom Tourism Board.",
  },
];

const OnboardingScreen = ({ onComplete }: OnboardingScreenProps) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
    else onComplete();
  };

  const slide = slides[current];

  return (
    <div className="fixed inset-0 z-[90] bg-background flex flex-col">
      <div className="flex justify-end p-4">
        <button
          onClick={onComplete}
          className="text-muted-foreground text-sm font-medium px-3 py-2"
        >
          Skip
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 animate-fade-in" key={current}>
        <div className="text-7xl mb-8">{slide.emoji}</div>
        <h2 className="text-xl font-bold text-foreground text-center mb-3">
          {slide.heading}
        </h2>
        <p className="text-muted-foreground text-center text-sm leading-relaxed max-w-[280px]">
          {slide.body}
        </p>
      </div>

      <div className="px-6 pb-10">
        <div className="flex justify-center gap-2 mb-6">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
        <Button
          onClick={next}
          className="w-full min-h-[48px] bg-accent-gradient text-accent-foreground font-semibold text-base rounded-lg shadow-elegant"
        >
          {current < slides.length - 1 ? (
            <>
              Next <ChevronRight size={18} />
            </>
          ) : (
            "Get Started"
          )}
        </Button>
      </div>
    </div>
  );
};

export default OnboardingScreen;
