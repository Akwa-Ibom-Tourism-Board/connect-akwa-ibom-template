import { useState, useCallback } from "react";
import MobileShell from "@/components/MobileShell";
import SplashScreen from "@/components/SplashScreen";
import OnboardingScreen from "@/components/OnboardingScreen";
import BottomNav from "@/components/BottomNav";
import HomeScreen from "@/components/HomeScreen";
import ExploreScreen from "@/components/ExploreScreen";
import TripsScreen from "@/components/TripsScreen";
import EventsScreen from "@/components/EventsScreen";
import ProfileScreen from "@/components/ProfileScreen";
import PlanTripScreen from "@/components/PlanTripScreen";

type AppPhase = "splash" | "onboarding" | "main";

const Index = () => {
  const [phase, setPhase] = useState<AppPhase>("splash");
  const [activeTab, setActiveTab] = useState("home");
  const [showPlanTrip, setShowPlanTrip] = useState(false);

  const handleSplashComplete = useCallback(() => setPhase("onboarding"), []);
  const handleOnboardingComplete = useCallback(() => setPhase("main"), []);

  const renderScreen = () => {
    if (showPlanTrip) {
      return <PlanTripScreen onBack={() => setShowPlanTrip(false)} />;
    }

    switch (activeTab) {
      case "home":
        return <HomeScreen onNavigate={setActiveTab} onPlanTrip={() => setShowPlanTrip(true)} />;
      case "explore":
        return <ExploreScreen />;
      case "trips":
        return <TripsScreen />;
      case "events":
        return <EventsScreen />;
      case "profile":
        return <ProfileScreen />;
      default:
        return <HomeScreen onNavigate={setActiveTab} onPlanTrip={() => setShowPlanTrip(true)} />;
    }
  };

  return (
    <MobileShell>
      {phase === "splash" && <SplashScreen onComplete={handleSplashComplete} />}
      {phase === "onboarding" && <OnboardingScreen onComplete={handleOnboardingComplete} />}
      {phase === "main" && (
        <>
          {renderScreen()}
          <BottomNav
            activeTab={activeTab}
            onTabChange={(tab) => {
              setShowPlanTrip(false);
              setActiveTab(tab);
            }}
          />
        </>
      )}
    </MobileShell>
  );
};

export default Index;
