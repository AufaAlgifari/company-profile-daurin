import Image from "next/image";

export default function Team() {
  const members = [
    {
      name: "Astria Dina Fitri",
      nim: "H1D024004",
      role: "Ketua Tim & Strategi Bisnis",
      department: "Informatika - FT UNSOED",
      color: "from-emerald-500 to-green-700",
    },
    {
      name: "Amalia Maharani Andessy",
      nim: "H1D024032",
      role: "Desain UI/UX & Produk",
      department: "Informatika - FT UNSOED",
      color: "from-teal-500 to-emerald-700",
    },
    {
      name: "Novia Rizky Aryani",
      nim: "H1D024041",
      role: "Pengembangan Sistem & Data",
      department: "Informatika - FT UNSOED",
      color: "from-green-600 to-teal-800",
    },
    {
      name: "Aufa Salsabila Algifari",
      nim: "H1D024042",
      role: "Operasional & Riset Pengguna",
      department: "Informatika - FT UNSOED",
      color: "from-emerald-600 to-green-800",
    },
    {
      name: "Naila Alifatul Mabruroh",
      nim: "H1D024043",
      role: "Komunikasi & Kemitraan",
      department: "Informatika - FT UNSOED",
      color: "from-teal-600 to-emerald-800",
    },
  ];

  return (
    <section id="tim" className="py-24 bg-daurin-cream/50 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-daurin-sage/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-daurin-lime/10 rounded-full blur-3xl translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-daurin-sage/60 text-daurin-green text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            Inisiatif Kewirausahaan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-daurin-dark tracking-tight">
            Tim Pengembang DaurIn
          </h2>
          <p className="mt-4 text-base sm:text-lg text-daurin-dark/70 leading-relaxed">
            Dikembangkan oleh <strong>Kelompok 2 Mata Kuliah Kewirausahaan</strong>, Program Studi Informatika, Fakultas Teknik, Universitas Jenderal Soedirman (UNSOED).
          </p>
        </div>

        {/* Dosen Pengampu Card */}
        <div className="max-w-2xl mx-auto mb-14">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-daurin-sage/50 shadow-lg shadow-daurin-green/5 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-daurin-forest to-daurin-green flex items-center justify-center text-white shrink-0 shadow-md">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-daurin-leaf">
                Dosen Pengampu Pembimbing
              </span>
              <h3 className="text-xl font-bold text-daurin-dark mt-1">
                Ir. Muhammad Ihsan Fawzi, S.Kom., M.Kom.
              </h3>
              <p className="text-xs sm:text-sm text-daurin-dark/65 mt-1">
                Dosen Pembina Kewirausahaan & Teknologi Informasi, Universitas Jenderal Soedirman
              </p>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {members.map((m, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-3xl bg-white border border-daurin-sage/40 hover:border-daurin-green hover:shadow-xl hover:shadow-daurin-green/10 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="relative mb-5">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${m.color} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform overflow-hidden`}>
                  <Image
                    src="/assets/page11_img18.png"
                    alt={m.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain filter invert contrast-200"
                  />
                </div>
                <span className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-daurin-green text-white text-[11px] font-bold flex items-center justify-center shadow-xs">
                  {idx + 1}
                </span>
              </div>

              <h4 className="text-sm font-bold text-daurin-dark group-hover:text-daurin-green transition-colors leading-tight">
                {m.name}
              </h4>
              <p className="text-xs font-semibold text-daurin-leaf mt-1">
                NIM: {m.nim}
              </p>
              <p className="text-[11px] text-daurin-dark/60 mt-2 font-medium">
                {m.role}
              </p>
              <p className="text-[10px] text-daurin-dark/40 mt-1">
                {m.department}
              </p>
            </div>
          ))}
        </div>

        {/* University Note */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-daurin-sage/50 text-xs text-daurin-dark/70 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Fakultas Teknik, Universitas Jenderal Soedirman • Purwokerto, Jawa Tengah</span>
          </div>
        </div>
      </div>
    </section>
  );
}
