import Image from "next/image";

export default function Mitra() {
  const partners = [
    {
      title: "Dinas Lingkungan Hidup",
      role: "Regulator & Pendukung Kebijakan",
      desc: "Mendukung pengelolaan sampah daerah terpadu dan sinkronisasi regulasi pengelolaan limbah berkelanjutan.",
      iconBg: "bg-emerald-50 text-emerald-700",
      badge: "Pemerintah Daerah",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Pengurus RT & RW",
      role: "Sosialisasi Akar Rumput",
      desc: "Membantu edukasi warga dan sosialisasi budaya memilah sampah langsung dari rumah tangga dan lingkungan hunian.",
      iconBg: "bg-teal-50 text-teal-700",
      badge: "Komunitas Warga",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Bank Sampah Lokal",
      role: "Jaringan Pengumpulan & Edukasi",
      desc: "Memperluas jangkauan drop-point, titik timbang, serta sinkronisasi pencatatan data sampah terpilah di tingkat lokal.",
      iconBg: "bg-lime-50 text-lime-800",
      badge: "Unit Daur Ulang",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: "Pabrik Daur Ulang",
      role: "Off-taker & Pengolah Akhir",
      desc: "Menyerap material anorganik yang terkumpul dengan standar kualitas dan keterlacakan tinggi untuk diproses kembali.",
      iconBg: "bg-amber-50 text-amber-800",
      badge: "Industri Pengolah",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Penyedia E-Wallet",
      role: "Mitra Integrasi Insentif",
      desc: "Penyalur insentif poin reward menjadi saldo digital (GoPay, OVO, DANA, ShopeePay) langsung ke dompet digital pengguna.",
      iconBg: "bg-blue-50 text-blue-700",
      badge: "Fintech Partner",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: "Mitra Kolektor & Pemulung",
      role: "Ujung Tombak Lapangan",
      desc: "Menghubungkan mitra pengumpul lokal dengan kepastian permintaan penjemputan, rute teratur, dan pendapatan stabil.",
      iconBg: "bg-emerald-50 text-emerald-800",
      badge: "Mitra Penjemput",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="mitra" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle top decoration leaf */}
      <div className="absolute top-0 right-0 w-36 opacity-20 pointer-events-none hidden md:block">
        <Image
          src="/assets/page10_img1.png"
          alt=""
          width={180}
          height={180}
          className="w-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-daurin-cream border border-daurin-sage/50 text-daurin-green text-xs font-bold uppercase tracking-wider mb-4">
            Ekosistem Kolaboratif
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-daurin-dark tracking-tight">
            Mitra Ekosistem DaurIn
          </h2>
          <p className="mt-4 text-base sm:text-lg text-daurin-dark/70 leading-relaxed">
            Keberhasilan ekonomi sirkular tidak bisa berdiri sendiri. DaurIn bekerja sama secara terintegrasi dengan pemangku kepentingan kunci dari akar rumput hingga industri.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((p, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-daurin-cream/40 border border-daurin-sage/40 hover:border-daurin-green/40 hover:bg-white hover:shadow-xl hover:shadow-daurin-green/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl ${p.iconBg} flex items-center justify-center shadow-xs transition-transform group-hover:scale-105`}>
                    {p.icon}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white border border-daurin-sage/50 text-daurin-green">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-daurin-dark group-hover:text-daurin-green transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs font-semibold text-daurin-leaf mt-1">
                  {p.role}
                </p>

                <p className="mt-4 text-sm text-daurin-dark/70 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-daurin-sage/30 flex items-center justify-between text-xs text-daurin-green font-semibold">
                <span>Kolaborasi Aktif</span>
                <span className="w-2 h-2 rounded-full bg-daurin-lime animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Partner Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-daurin-forest via-daurin-green to-daurin-leaf text-white relative overflow-hidden shadow-xl shadow-daurin-green/15">
          <div className="absolute right-0 bottom-0 w-64 opacity-15 pointer-events-none">
            <Image
              src="/assets/page10_img1.png"
              alt=""
              width={256}
              height={256}
              className="w-full filter invert"
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-xs">
              Buka Peluang Kerja Sama
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ingin Menjadi Bagian dari Ekosistem DaurIn?
            </h3>
            <p className="mt-3 text-white/85 text-sm sm:text-base leading-relaxed">
              Kami membuka peluang kemitraan bagi pemerintah daerah, pengelola bank sampah, industri daur ulang, perusahaan FMCG, dan komunitas lingkungan untuk mewujudkan Indonesia bebas sampah.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full text-sm font-bold bg-white text-daurin-forest hover:bg-daurin-cream shadow-md transition-all active:scale-95"
              >
                Diskusikan Kemitraan
              </a>
              <a
                href="mailto:kontak@daurin.id"
                className="px-6 py-3 rounded-full text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xs transition-all"
              >
                Unduh Proposal Compro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
