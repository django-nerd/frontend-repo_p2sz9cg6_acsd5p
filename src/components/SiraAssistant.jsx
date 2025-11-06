import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Mic, MicOff, X, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SiraAssistant() {
  const [open, setOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'sira', text: 'Halo! Saya Sira. Tanya apa saja tentang sekolah ini.' },
  ]);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);

  // Keyboard shortcut /sira
  useEffect(() => {
    let buffer = '';
    const onKey = (e) => {
      if (e.key.length === 1) buffer += e.key;
      if (buffer.toLowerCase().endsWith('/sira')) {
        setOpen(true);
        buffer = '';
        setTimeout(() => inputRef.current?.focus(), 50);
      }
      // reset buffer on navigation keys
      if (e.key === 'Escape') buffer = '';
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Simple demo response (no backend yet); can be wired later
  const send = (text) => {
    if (!text) return;
    setMessages((m) => [...m, { role: 'user', text }, { role: 'sira', text: generateReply(text) }]);
  };

  const generateReply = (q) => {
    const s = q.toLowerCase();
    if (s.includes('guru') && s.includes('matematika')) return 'Guru Matematika: Ibu Sari dan tim numerasi. Untuk kelas 9, silakan hubungi wali kelas untuk penjadwalan.';
    if (s.includes('berapa') && s.includes('guru')) return 'Total guru aktif saat ini sekitar 40 orang termasuk staf pendukung.';
    if (s.includes('ppdb')) return 'Panduan PPDB: siapkan KK, rapor, dan akta kelahiran. Formulir online akan tersedia pada periode pendaftaran.';
    return 'Saya mencatat pertanyaan Anda. Fitur AI penuh akan segera diaktifkan.';
  };

  // Voice input (browser speech recognition if available)
  const toggleListen = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      alert('Browser Anda belum mendukung voice input.');
      return;
    }
    if (!recognitionRef.current) {
      const rec = new SR();
      rec.lang = 'id-ID';
      rec.continuous = false;
      rec.interimResults = false;
      rec.onresult = (e) => {
        const text = e.results[0][0].transcript;
        send(text);
      };
      rec.onend = () => setListening(false);
      recognitionRef.current = rec;
    }
    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      setListening(true);
      recognitionRef.current.start();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative rounded-full p-4 bg-gradient-to-br from-emerald-500 via-blue-500 to-indigo-600 text-white shadow-2xl focus:outline-none"
        aria-label="Buka Sira"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/20" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25 }}
            className="mt-3 w-[360px] max-w-[90vw] rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/15 text-white"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-indigo-500 animate-pulse" />
                <div>
                  <p className="text-sm font-semibold">Sira</p>
                  <p className="text-xs text-emerald-200/80">Asisten Sekolah</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Tutup" className="p-1 hover:bg-white/10 rounded-lg">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-72 overflow-y-auto space-y-3 p-4">
              {messages.map((m, i) => (
                <div key={i} className={`text-sm ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block rounded-2xl px-3 py-2 ${m.role === 'user' ? 'bg-emerald-500/20' : 'bg-white/10'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      send(e.currentTarget.value);
                      e.currentTarget.value = '';
                    }
                  }}
                  placeholder="Tulis pertanyaan..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-3 py-2 placeholder-white/40 focus:outline-none"
                />
                <button onClick={toggleListen} className={`p-2 rounded-xl border border-white/10 ${listening ? 'bg-emerald-500/20' : 'bg-white/10'}`}>{listening ? <Mic /> : <MicOff />}</button>
                <button className="p-2 rounded-xl border border-white/10 bg-white/10"><Volume2 /></button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
