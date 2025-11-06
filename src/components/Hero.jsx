import { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ onExplore }) {
  const containerRef = useRef(null);

  return (
    <section className="relative min-h-screen w-full overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f2a]/60 via-[#0a0f2a]/20 to-[#0a0f2a]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0f2a]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-white to-blue-300 drop-shadow"
        >
          SMPN 19 Mataram
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 text-lg sm:text-xl text-white/85"
        >
          Smart • Creative • Inspiring
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          onClick={onExplore}
          className="mt-10 inline-flex items-center gap-3 rounded-3xl px-6 py-3 bg-gradient-to-r from-blue-500 via-emerald-400 to-indigo-600 text-white shadow-xl shadow-emerald-900/30 hover:shadow-emerald-700/40 transition focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-[#0a0f2a]"
        >
          Jelajahi Sekolah
          <span className="inline-block h-2 w-2 rounded-full bg-amber-300 animate-pulse" />
        </motion.button>
      </div>
    </section>
  );
}
