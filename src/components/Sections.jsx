import { motion } from 'framer-motion';
import { Search, Users, Calendar, BookOpen, MapPin } from 'lucide-react';

export function ProfilSection() {
  const items = [
    { label: 'NPSN', value: '50203219' },
    { label: 'Akreditasi', value: 'A (Unggul)' },
    { label: 'Luas Tanah', value: '9.800 m²' },
    { label: 'Status', value: 'Negeri' },
  ];

  return (
    <section id="profil" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Profil Sekolah
        </motion.h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Sejarah, identitas, dan kebanggaan sekolah disajikan dengan nuansa futuristik yang hangat.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl p-5 backdrop-blur-xl bg-white/10 border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_10px_30px_rgba(2,6,23,0.35)]"
            >
              <p className="text-white/60 text-sm">{it.label}</p>
              <p className="text-white text-xl font-semibold mt-1">{it.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden bg-white/10 border border-white/15 backdrop-blur-xl"
          >
            <div className="aspect-video w-full bg-black/40">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ysz5S6PUM-U?rel=0&modestbranding=1&showinfo=0"
                title="Video Profil"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="p-5 border-t border-white/10">
              <div className="flex items-center gap-2 text-emerald-200">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm">Video profil dengan overlay semi-transparan</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-6 backdrop-blur-xl bg-white/10 border border-white/15"
          >
            <p className="text-white/80">
              Timeline sejarah interaktif dan struktur organisasi 3D akan hadir di iterasi berikutnya. Sementara ini, Anda dapat merasakan gaya visual dan interaksi yang telah disiapkan.
            </p>
            <div className="mt-6 flex items-center gap-4 text-white/70">
              <Users className="h-5 w-5" />
              <span>Struktur organisasi (carousel 3D)</span>
            </div>
            <div className="mt-3 flex items-center gap-4 text-white/70">
              <MapPin className="h-5 w-5" />
              <span>Peta kampus 3D & tur virtual</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function GuruSection() {
  const list = [
    { name: 'Ibu Sari', subject: 'Matematika', quote: 'Logika adalah seni berpikir jernih.' },
    { name: 'Bapak Arif', subject: 'Bahasa Indonesia', quote: 'Bahasa adalah jembatan budaya.' },
    { name: 'Ibu Rina', subject: 'IPA', quote: 'Alam semesta adalah laboratorium besar.' },
    { name: 'Bapak Dimas', subject: 'IPS', quote: 'Sejarah membentuk masa depan.' },
  ];

  return (
    <section id="guru" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Guru & Staf
        </motion.h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Kartu bergaya glass dengan efek depth. Arahkan kursor untuk melihat biodata singkat.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((g) => (
            <motion.div
              key={g.name}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl p-5 bg-white/10 border border-white/15 backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-emerald-400/10 via-blue-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <div className="relative">
                <div className="h-28 rounded-2xl bg-gradient-to-br from-blue-500/30 via-emerald-400/30 to-indigo-600/30" />
                <p className="mt-4 text-white font-semibold">{g.name}</p>
                <p className="text-sm text-emerald-200/80">{g.subject}</p>
                <p className="mt-3 text-sm text-white/80 opacity-0 group-hover:opacity-100 transition">“{g.quote}”</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 rounded-3xl bg-white/5 border border-white/10 p-3 text-white/80">
          <Search className="h-5 w-5" />
          <input
            type="text"
            placeholder="Cari guru berdasarkan nama atau mata pelajaran"
            className="w-full bg-transparent focus:outline-none placeholder-white/50"
          />
        </div>
      </div>
    </section>
  );
}

export function AgendaSection() {
  const events = [
    { date: '12 Jan 2025', title: 'Pentas Seni & Budaya', desc: 'Kolaborasi bakat siswa lintas angkatan.' },
    { date: '28 Feb 2025', title: 'Olimpiade Sains', desc: 'Seleksi internal menuju tingkat kota.' },
    { date: '10 Mar 2025', title: 'Class Meeting', desc: 'Rangkaian kegiatan pasca ujian.' },
  ];

  return (
    <section id="agenda" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Kegiatan & Agenda
        </motion.h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Kalender interaktif dengan efek glowing. Klik tanggal pada versi penuh (akan hadir).
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((ev) => (
            <motion.div
              key={ev.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl p-6 bg-white/10 border border-white/15 backdrop-blur-xl"
            >
              <p className="text-emerald-200 text-sm">{ev.date}</p>
              <p className="text-white font-semibold mt-1">{ev.title}</p>
              <p className="text-white/80 text-sm mt-2">{ev.desc}</p>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <button className="mt-4 text-emerald-300 hover:text-emerald-200 transition text-sm">Tambah ke Kalender</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function KontakSection() {
  return (
    <section id="kontak" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Kontak & Lokasi
        </motion.h2>
        <p className="mt-3 text-white/70 max-w-2xl">Hubungi kami atau kunjungi kampus melalui peta 3D (segera hadir).</p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl p-6 bg-white/10 border border-white/15 backdrop-blur-xl">
            <form className="space-y-4">
              <div>
                <label className="text-sm text-white/80">Nama</label>
                <input className="mt-1 w-full rounded-2xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-300" placeholder="Nama lengkap" />
              </div>
              <div>
                <label className="text-sm text-white/80">Email</label>
                <input type="email" className="mt-1 w-full rounded-2xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-300" placeholder="email@domain.com" />
              </div>
              <div>
                <label className="text-sm text-white/80">Pesan</label>
                <textarea rows={4} className="mt-1 w-full rounded-2xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-300" placeholder="Tulis pesan Anda" />
              </div>
              <button type="button" className="relative rounded-2xl px-5 py-2.5 bg-gradient-to-r from-blue-500 via-emerald-400 to-indigo-600 text-white shadow-lg">
                <span>Kirim</span>
                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
              </button>
            </form>
          </div>
          <div className="rounded-3xl overflow-hidden bg-white/10 border border-white/15 backdrop-blur-xl">
            <div className="aspect-video w-full bg-gradient-to-br from-slate-900 to-blue-950 flex items-center justify-center text-white/70">
              <MapPin className="h-6 w-6" />
              <span className="ml-2">Map 3D akan hadir</span>
            </div>
            <div className="p-4 text-white/70 text-sm">Alamat: Jl. Pendidikan No. 19, Mataram, NTB</div>
          </div>
        </div>
      </div>
    </section>
  );
}
