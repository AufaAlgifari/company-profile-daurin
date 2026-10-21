import Image from "next/image";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-daurin-forest text-white/80 border-t border-daurin-green relative overflow-hidden">
      {/* Decorative leaf watermarks */}
      <div className="absolute top-0 right-0 w-80 opacity-5 pointer-events-none">
        <Image
          src="/assets/page1_img2.png"
          alt=""
          width={300}
          height={300}
          className="w-full filter invert"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <a href="#hero" className="flex items-center gap-3">
              <Image
                src="/assets/daurin_logo_transparent.png"
                alt="DaurIn Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-sm">
              Platform ekosistem daur ulang inovatif yang menghubungkan masyarakat, kolektor lokal, dan pabrik daur ulang dalam satu sistem digital terintegrasi untuk mewujudkan ekonomi sirkular Indonesia.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-daurin-lime hover:text-daurin-forest text-white flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-daurin-lime hover:text-daurin-forest text-white flex items-center justify-center transition"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="mailto:kontak@daurin.id"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-daurin-lime hover:text-daurin-forest text-white flex items-center justify-center transition"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-daurin-lime">Halaman</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition">Beranda</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">Tentang Kami</a>
              </li>
              <li>
                <a href="#produk" className="hover:text-white transition">Fitur & Produk</a>
              </li>
              <li>
                <a href="#cara-kerja" className="hover:text-white transition">Cara Kerja</a>
              </li>
              <li>
                <a href="#komitmen" className="hover:text-white transition">Komitmen</a>
              </li>
            </ul>
          </div>

          {/* Impact & Partner */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-daurin-lime">Ekosistem</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#dampak" className="hover:text-white transition">Dampak ESG & SDGs</a>
              </li>
              <li>
                <a href="#mitra" className="hover:text-white transition">Ekosistem Mitra</a>
              </li>
              <li>
                <a href="#tim" className="hover:text-white transition">Tim Pengembang</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">Kontak & Saran</a>
              </li>
            </ul>
          </div>

          {/* Legal & Campus */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-daurin-lime">Inisiatif Akademik</h4>
            <p className="mt-4 text-xs text-white/70 leading-relaxed">
              Mata Kuliah Kewirausahaan<br />
              Program Studi S1 Informatika, Fakultas Teknik<br />
              Universitas Jenderal Soedirman (UNSOED)<br />
              Purwokerto, Jawa Tengah
            </p>
            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-daurin-lime font-semibold">
              #PilahSampahmuMulaiDariDaurIn
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {currentYear} DaurIn Indonesia • Kelompok 2 Kewirausahaan Informatika UNSOED. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Dibuat dengan dedikasi untuk keberlanjutan bumi 🌱
          </p>
        </div>
      </div>
    </footer>
  );
}
