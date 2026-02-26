import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2000);
    const completeTimer = setTimeout(() => onComplete(), 2500);
    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-hero-gradient transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 animate-slow-zoom bg-hero-gradient" />
      <div className="relative z-10 flex flex-col items-center gap-4 animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-primary-foreground/10 flex items-center justify-center backdrop-blur-sm">
          <MapPin size={40} className="text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-extrabold text-primary-foreground tracking-tight">
          Connect Akwa Ibom
        </h1>
        <p className="text-primary-foreground/75 text-sm text-center max-w-[260px]">
          Your complete Akwa Ibom travel companion
        </p>
      </div>
      <div className="absolute bottom-12 z-10 text-center">
        <p className="text-primary-foreground/50 text-[10px] leading-tight">
          Powered by<br />
          Akwa Ibom State Hotels and Tourism Board
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
