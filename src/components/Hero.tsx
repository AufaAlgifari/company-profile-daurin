import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[85vh] flex items-center bg-[#F6F7F2]"
    >
      {/* Background decorative soft gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#C5D6A3]/40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#6BBF3B]/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#C5D6A3] text-[#22532A] text-xs font-bold mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 bg-[#4E9F3D] rounded-full animate-pulse" />
              Platform Ekosistem Daur Ulang Inovatif
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[#1A1A1A] leading-[1.15]">
              Pilah Sampahmu,{" "}
              <span className="text-[#22532A] block sm:inline">
                Mulai dari DaurIn!
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed max-w-xl">
              DaurIn adalah platform aplikasi mobile yang menghubungkan masyarakat, kolektor lokal, dan industri daur ulang dalam satu sistem digital terintegrasi. Cukup pilah sampah anorganik Anda, laporkan di aplikasi, dan tukarkan dengan reward saldo e-wallet!
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#produk"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-[#1E5128] text-white hover:bg-[#22532A] shadow-lg shadow-[#1E5128]/25 active:scale-95 transition-all text-center"
              >
                Lihat Fitur &amp; Produk
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-white border-2 border-[#C5D6A3] text-[#1E5128] hover:bg-[#F6F7F2] hover:border-[#1E5128] transition-all text-center"
              >
                Tentang DaurIn
              </a>
            </div>

            {/* Ecosystem 3 Stakeholders Badges */}
            <div className="mt-12 pt-8 border-t border-[#C5D6A3]/50 w-full flex items-center gap-6 sm:gap-8 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#22532A]/10 text-[#22532A] flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1A1A1A]">Masyarakat</p>
                  <p className="text-xs text-[#1A1A1A]/60">Pengguna Aplikasi</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#4E9F3D]/15 text-[#1E5128] flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1A1A1A]">Kolektor</p>
                  <p className="text-xs text-[#1A1A1A]/60">Mitra Penjemput</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#6BBF3B]/20 text-[#22532A] flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1A1A1A]">Pabrik Daur Ulang</p>
                  <p className="text-xs text-[#1A1A1A]/60">Pengolah Material</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: App mockup (5 cols) */}
          <div className="lg:col-span-5 flex justify-center animate-float">
            <div className="relative">
              <Image
                src="/assets/page5_img18.png"
                alt="DaurIn Mobile App Screen"
                width={320}
                height={660}
                className="w-[260px] sm:w-[300px] h-auto drop-shadow-2xl"
                priority
              />
              {/* Floating card accent */}
              <div className="absolute -left-6 top-1/3 bg-white rounded-2xl shadow-xl px-4 py-3 border border-[#C5D6A3]/60 hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#4E9F3D]/20 text-[#1E5128] flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1A1A1A]">Poin ➔ E-Wallet</p>
                  <p className="text-[11px] text-[#1A1A1A]/60">Tukar saldo digital instan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
