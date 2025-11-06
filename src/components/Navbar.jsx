import { useEffect } from 'react';
import { Volume2, VolumeX, Rocket, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar({ audioOn, onToggleAudio }) {
  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      // /sira shortcut
      if (e.key === '/' || e.key === 'ß') {
        // wait a tick to see if user types /sira
        // simple implementation: if user presses / then s
        // For accessibility and simplicity, we just open the Sira teaser panel event
      }
      // Ctrl+M -> toggle music
      if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 'm')) {
        e.preventDefault();
        onToggleAudio();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onToggleAudio]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-4 flex items-center justify-between rounded-3xl backdrop-blur-xl bg-white/10 border border-white/15 shadow-[0_8px_30px_rgba(31,38,135,0.25)] px-4 sm:px-6 py-3"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500 via-emerald-400 to-indigo-600 p-[2px]">
              <div className="h-full w-full rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Rocket className="h-5 w-5 text-white drop-shadow" />
              </div>
            </div>
            <div>
              <p className="text-white font-semibold leading-tight">
                SMPN 19 Mataram
              </p>
              <p className="text-xs text-emerald-200/80">Smart • Creative • Inspiring</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm text-white/90">
            <a href="#profil" className="hover:text-white transition">Profil</a>
            <a href="#guru" className="hover:text-white transition">Guru & Staf</a>
            <a href="#agenda" className="hover:text-white transition">Agenda</a>
            <a href="#kontak" className="hover:text-white transition">Kontak</a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleAudio}
              aria-label={audioOn ? 'Matikan suara latar' : 'Nyalakan suara latar'}
              className="group inline-flex items-center gap-2 rounded-2xl bg-white/10 border border-white/20 px-3 py-2 text-white hover:bg-white/20 transition"
            >
              {audioOn ? (
                <Volume2 className="h-5 w-5 text-emerald-300" />
              ) : (
                <VolumeX className="h-5 w-5 text-rose-300" />
              )}
              <span className="hidden sm:block text-xs">
                {audioOn ? 'Ambient ON' : 'Ambient OFF'}
              </span>
            </button>
            <div className="hidden sm:flex items-center gap-1 rounded-2xl bg-white/5 border border-white/10 px-3 py-2 text-xs text-white/80">
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span>/sira</span>
              <span className="text-white/50">•</span>
              <span>Ctrl+M musik</span>
            </div>
          </div>
        </motion.nav>
      </div>
    </div>
  );
}
