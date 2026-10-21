export default function Komitmen() {
  const commitments = [
    {
      title: "BERPIHAK PADA AKAR RUMPUT",
      desc: "Kami melibatkan kolektor lokal sebagai mitra utama, dengan akses ke informasi penjemputan yang lebih jelas dan penghasilan yang lebih stabil.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
    },
    {
      title: "TEKNOLOGI YANG MEMUDAHKAN",
      desc: "Kami memakai teknologi kategorisasi gambar, routing, dan cloud agar proses pengumpulan lebih cepat dan efisien.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
    },
    {
      title: "TRANSPARAN DAN TERLACAK",
      desc: "Setiap transaksi dan alur material tercatat secara digital, dari sumber sampai pihak pengolah.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="komitmen" className="py-20 bg-gradient-to-b from-daurin-forest via-daurin-green to-daurin-forest text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-daurin-lime/10 rounded-full blur-3xl -translate-y-24 translate-x-24 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-daurin-leaf/10 rounded-full blur-3xl translate-y-20 -translate-x-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-daurin-lime bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
            Komitmen DaurIn
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight">
            &ldquo;Mengubah Sampah Menjadi Nilai&rdquo;
          </h2>
          <p className="mt-4 text-lg text-white/80 leading-relaxed">
            DaurIn berkomitmen membuat pengelolaan sampah anorganik lebih mudah,
            adil, dan terukur.
          </p>
        </div>

        {/* Commitment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commitments.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/15 hover:bg-white/15 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center text-daurin-lime mb-6">
                {item.icon}
              </div>
              <h3 className="text-base font-extrabold tracking-wide text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl sm:text-2xl font-bold text-white/90 italic">
            &ldquo;Bersama, kita wujudkan lingkungan yang lebih baik&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
