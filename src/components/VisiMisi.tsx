export default function VisiMisi() {
  const misi = [
    "Memudahkan masyarakat menyalurkan sampah anorganik yang masih bernilai ekonomi.",
    "Membantu kolektor lokal bekerja lebih efisien dan memperoleh penghasilan yang lebih stabil.",
    "Menyediakan pencatatan dan pelacakan material secara digital yang transparan.",
    "Mendukung pengurangan sampah melalui kerja sama dengan pemerintah, industri, dan komunitas.",
  ];

  const nilai = [
    {
      num: "01",
      title: "Pendekatan Grass-Roots",
      desc: "Melibatkan kolektor lokal dan masyarakat akar rumput sebagai fondasi utama ekosistem.",
    },
    {
      num: "02",
      title: "Transparan & Terlacak",
      desc: "Setiap transaksi dan alur material tercatat secara digital, dari sumber sampai pihak pengolah.",
    },
    {
      num: "03",
      title: "Mudah Digunakan",
      desc: "Interface sederhana yang bisa digunakan oleh siapa saja, dari mahasiswa hingga ibu rumah tangga.",
    },
    {
      num: "04",
      title: "Berkelanjutan",
      desc: "Sistem yang dirancang untuk tumbuh bersama komunitas dan memberikan dampak jangka panjang.",
    },
  ];

  return (
    <section className="py-20 bg-daurin-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-daurin-leaf bg-white px-4 py-1.5 rounded-full border border-daurin-sage/50">
            Visi & Nilai Prinsip
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-daurin-dark tracking-tight">
            Arah & Landasan <span className="text-daurin-green">DaurIn</span>
          </h2>
        </div>

        {/* Visi & Misi Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Visi */}
          <div className="bg-gradient-to-br from-daurin-green to-daurin-forest rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-daurin-lime/10 rounded-full -translate-y-12 translate-x-12 blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">VISI</h3>
              </div>
              <p className="text-lg sm:text-xl font-medium leading-relaxed text-white/95 italic">
                &ldquo;Menjadi platform ekosistem daur ulang digital yang membuat
                pengelolaan sampah anorganik lebih mudah, terukur, dan
                bermanfaat bagi semua pihak.&rdquo;
              </p>
            </div>
          </div>

          {/* Misi */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-daurin-sage/40 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-daurin-green/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-daurin-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-daurin-dark">MISI</h3>
            </div>
            <div className="space-y-4">
              {misi.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-lg bg-daurin-cream text-daurin-green flex items-center justify-center text-xs font-extrabold mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm sm:text-base text-daurin-dark/75 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nilai & Prinsip */}
        <div>
          <h3 className="text-xl font-bold text-daurin-dark text-center mb-8">
            Nilai & Prinsip DaurIn
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nilai.map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-2xl p-6 border border-daurin-sage/30 hover:border-daurin-green hover:shadow-lg hover:shadow-daurin-green/5 transition-all group"
              >
                <span className="text-3xl font-black text-daurin-sage group-hover:text-daurin-lime transition-colors">
                  {item.num}
                </span>
                <h4 className="mt-3 text-base font-bold text-daurin-dark group-hover:text-daurin-green transition-colors">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-daurin-dark/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
