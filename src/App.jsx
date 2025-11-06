import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ProfilSection, GuruSection, AgendaSection, KontakSection } from './components/Sections';
import SiraAssistant from './components/SiraAssistant';

export default function App() {
  const [audioOn, setAudioOn] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (audioOn) {
      // attempt autoplay; some browsers require user gesture
      const play = audioRef.current.play();
      if (play && typeof play.catch === 'function') {
        play.catch(() => {});
      }
    } else {
      audioRef.current.pause();
    }
  }, [audioOn]);

  const onExplore = () => {
    const next = document.querySelector('#profil');
    next?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0f2a] selection:bg-emerald-500/30 selection:text-white">
      <BackgroundFX />
      <Navbar audioOn={audioOn} onToggleAudio={() => setAudioOn((v) => !v)} />
      <Hero onExplore={onExplore} />
      <main className="relative z-10">
        <ProfilSection />
        <GuruSection />
        <AgendaSection />
        <KontakSection />
      </main>
      <SiraAssistant />

      <audio ref={audioRef} loop src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_47a3f55c6c.mp3?filename=forest-lullaby-110624.mp3" />

      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-white/70">
        © 2025 SMPN 19 Mataram — Developed by Ibra Decode | AI Sira School Assistant Integrated
      </footer>
    </div>
  );
}

function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-[80%] bg-gradient-to-t from-[#0a0f2a] to-transparent" />
    </div>
  );
}
