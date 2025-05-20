import { useEffect, useRef, useState } from "react";
import { db } from "@/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import ParticleBackground from "../ParticleBackground";

type ProfileData = {
  fullName: string;
  tagline: string;
};

const HeroSection = () => {
  const [showCursor, setShowCursor] = useState(true);
  const [profile, setProfile] = useState<ProfileData>({ fullName: "", tagline: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const phrases = ["AI Developer.", "Java Developer.", "System Builder.", "Problem Solver."];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  // Cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing effect loop
  useEffect(() => {
    const phraseTimer = setTimeout(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearTimeout(phraseTimer);
  }, [currentPhrase]);

  // Fetch Firestore profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const docRef = doc(db, "profile", "main");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data() as ProfileData);
        } else {
          setError("Profile not found.");
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Failed to load profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <ParticleBackground />

      <div className="container px-4 mx-auto z-10">
        <div className="max-w-3xl">
          {loading ? (
            <p className="text-white text-xl">Loading profile...</p>
          ) : error ? (
            <p className="text-red-500 text-xl">{error}</p>
          ) : (
            <>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {profile.fullName}
              </h1>

              <div className="h-12">
                <h2 className="text-xl md:text-2xl lg:text-3xl text-purple font-medium flex items-center">
                  <span>{phrases[currentPhrase]}</span>
                  <span
                    className={`ml-1 inline-block w-[3px] h-6 bg-cyan ${
                      showCursor ? "opacity-100" : "opacity-0"
                    } transition-opacity`}
                  ></span>
                </h2>
              </div>

              <p className="text-lg md:text-xl text-gray-300 mt-6 mb-8">
                {profile.tagline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple to-cyan hover:opacity-90 text-white font-medium"
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore My Work
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-purple text-purple hover:bg-purple/10"
                >
                  <a href="/Aidit_RESUME.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center items-start p-1">
          <div className="w-1.5 h-3 bg-white rounded-full animate-pulse-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
