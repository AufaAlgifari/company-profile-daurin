import Image from "next/image";

export default function Produk() {
  const offerings = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      title: "LAPOR & JEMPUT SAMPAH",
      desc: "Laporkan sampah anorganik yang sudah dipilah lewat aplikasi, lalu kolektor terdekat akan datang menjemput.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "POIN & SALDO E-WALLET",
      desc: "Setiap setoran sampah menghasilkan poin yang bisa ditukar menjadi saldo e-wallet.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
        </svg>
      ),
      title: "KATEGORISASI GAMBAR",
      desc: "Cukup foto sampahnya. Sistem membantu mengenali jenis material (plastik, logam, kertas) dan memberi estimasi awal poin.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      title: "GEOLOCATION & SMART ROUTING",
      desc: "Sistem mencocokkan pengguna dengan kolektor berdasarkan lokasi dan ketersediaan, serta menyusun rute penjemputan yang paling efisien.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-5.54 0" />
        </svg>
      ),
      title: "GAMIFIKASI & KOMUNITAS",
      desc: "Poin, leaderboard, dan forum zero waste membuat memilah sampah jadi lebih seru.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
      title: "DATA KETERLACAKAN (ESG & EPR)",
      desc: "Penyediaan data jenis, jumlah, dan alur material untuk perusahaan yang perlu laporan keberlanjutan.",
    },
  ];

  const appFeatures = {
    masyarakat: [
      "Lapor sampah dan unggah foto",
      "Pantau status penjemputan",
      "Lihat poin dan tukarkan ke e-wallet",
      "Ikut leaderboard dan komunitas",
    ],
    kolektor: [
      "Lihat permintaan penjemputan di sekitar",
      "Dapat rute penjemputan yang efisien",
      "Catatan transaksi yang rapi",
    ],
    b2b: [
      "Pasokan material yang sudah dipilah dan tercatat",
      "Data keterlacakan ESG dan EPR",
    ],
  };

  return (
    <section id="produk" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-daurin-leaf bg-daurin-cream px-4 py-1.5 rounded-full border border-daurin-sage/50">
            Apa yang DaurIn Tawarkan?
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-daurin-dark tracking-tight">
            Solusi Lengkap dalam <span className="text-daurin-green">Satu Platform</span>
          </h2>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {offerings.map((item, idx) => (
            <div
              key={idx}
              className="bg-daurin-cream/50 rounded-2xl p-6 border border-daurin-sage/30 hover:bg-white hover:border-daurin-green hover:shadow-xl hover:shadow-daurin-green/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-daurin-green/10 text-daurin-green flex items-center justify-center mb-5 group-hover:bg-daurin-green group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-sm font-extrabold text-daurin-dark tracking-wide mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-daurin-dark/65 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Produk Kami - App Features */}
        <div className="mb-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-daurin-dark tracking-tight">
              Produk Kami: <span className="text-daurin-green">Aplikasi Mobile DaurIn</span>
            </h3>
            <p className="mt-3 text-base text-daurin-dark/60">
              Satu aplikasi untuk semua pihak, dengan fitur yang berbeda sesuai perannya.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Features list */}
            <div className="space-y-8">
              {/* Masyarakat */}
              <div className="bg-gradient-to-r from-daurin-cream to-white rounded-2xl p-6 border border-daurin-sage/30">
                <h4 className="font-bold text-daurin-dark flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-daurin-green text-white flex items-center justify-center text-xs font-bold">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  Untuk Masyarakat
                  <span className="text-xs text-daurin-dark/50 font-normal">(Rumah Tangga, Mahasiswa, Anak Kos, UMKM)</span>
                </h4>
                <ul className="space-y-2.5">
                  {appFeatures.masyarakat.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-daurin-dark/75">
                      <svg className="w-4 h-4 text-daurin-lime shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kolektor */}
              <div className="bg-gradient-to-r from-daurin-cream to-white rounded-2xl p-6 border border-daurin-sage/30">
                <h4 className="font-bold text-daurin-dark flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-daurin-leaf text-white flex items-center justify-center text-xs font-bold">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  </span>
                  Untuk Kolektor / Pemulung
                </h4>
                <ul className="space-y-2.5">
                  {appFeatures.kolektor.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-daurin-dark/75">
                      <svg className="w-4 h-4 text-daurin-lime shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* B2B */}
              <div className="bg-gradient-to-r from-daurin-cream to-white rounded-2xl p-6 border border-daurin-sage/30">
                <h4 className="font-bold text-daurin-dark flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-daurin-forest text-white flex items-center justify-center text-xs font-bold">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                    </svg>
                  </span>
                  Untuk Pabrik & Perusahaan (B2B)
                </h4>
                <ul className="space-y-2.5">
                  {appFeatures.b2b.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-daurin-dark/75">
                      <svg className="w-4 h-4 text-daurin-lime shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: App mockup */}
            <div className="flex justify-center">
              <Image
                src="/assets/page5_img18.png"
                alt="DaurIn App Mockup"
                width={342}
                height={732}
                className="w-[260px] sm:w-[300px] drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
