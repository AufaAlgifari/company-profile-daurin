import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-[#22532A] bg-[#F6F7F2] px-4 py-1.5 rounded-full border border-[#C5D6A3]">
            Tentang DaurIn
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Platform Ekosistem <span className="text-[#22532A]">Daur Ulang</span> Digital
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1A1A1A]/70 leading-relaxed">
            Menghubungkan rantai pengelolaan sampah anorganik dari rumah tangga hingga pabrik daur ulang secara transparan dan berkeadilan.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Description (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed">
              <strong className="text-[#1A1A1A] font-bold">DaurIn</strong> adalah platform aplikasi mobile yang
              menghubungkan pengguna dengan kolektor sampah lokal dalam satu
              sistem digital. Pengguna cukup melaporkan sampah anorganik yang
              sudah dipilah lewat aplikasi, lalu sistem akan mencarikan kolektor
              terdekat untuk menjemputnya.
            </p>
            <p className="text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed">
              Setiap sampah yang disetorkan akan diberi poin, dan poin bisa
              ditukar menjadi saldo e-wallet. Bagi kolektor, DaurIn membantu
              mereka tahu lokasi sampah yang siap diambil, jadi tidak perlu lagi
              mencari secara acak. Material yang terkumpul kemudian disalurkan ke
              pabrik daur ulang.
            </p>
            <div className="p-6 rounded-2xl bg-[#F6F7F2] border border-[#C5D6A3]/60 shadow-xs">
              <p className="text-sm sm:text-base text-[#1A1A1A]/85 leading-relaxed">
                🌱 Dengan <strong>teknologi kategorisasi gambar, geolocation &amp; routing, serta database real-time</strong>,
                seluruh proses tercatat dan bisa dilacak dari sumber sampai ke pengolah akhir.
              </p>
            </div>
          </div>

          {/* Right: Ecosystem diagram (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-[#F6F7F2] rounded-3xl p-8 border border-[#C5D6A3] shadow-md">
              {/* Central logo */}
              <div className="flex justify-center mb-8">
                <Image
                  src="/assets/daurin_logo_transparent.png"
                  alt="DaurIn Logo"
                  width={140}
                  height={50}
                  className="h-14 w-auto object-contain"
                />
              </div>

              {/* 3 stakeholders */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-4 rounded-2xl bg-white border border-[#C5D6A3]/50 shadow-xs">
                  <div className="w-11 h-11 mx-auto rounded-xl bg-[#22532A]/10 text-[#22532A] flex items-center justify-center mb-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xs font-bold text-[#1A1A1A]">Masyarakat</h4>
                  <p className="text-[10px] text-[#1A1A1A]/60 mt-0.5">Pengguna</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#C5D6A3]/50 shadow-xs">
                  <div className="w-11 h-11 mx-auto rounded-xl bg-[#4E9F3D]/15 text-[#1E5128] flex items-center justify-center mb-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  </div>
                  <h4 className="text-xs font-bold text-[#1A1A1A]">Kolektor</h4>
                  <p className="text-[10px] text-[#1A1A1A]/60 mt-0.5">Penjemput</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#C5D6A3]/50 shadow-xs">
                  <div className="w-11 h-11 mx-auto rounded-xl bg-[#6BBF3B]/20 text-[#22532A] flex items-center justify-center mb-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                    </svg>
                  </div>
                  <h4 className="text-xs font-bold text-[#1A1A1A]">Pabrik</h4>
                  <p className="text-[10px] text-[#1A1A1A]/60 mt-0.5">Pengolah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
