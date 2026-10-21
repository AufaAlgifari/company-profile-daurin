export default function ModelBisnis() {
  return (
    <section className="py-20 bg-daurin-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-daurin-leaf bg-white px-4 py-1.5 rounded-full border border-daurin-sage/50">
            Model Bisnis DaurIn
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-daurin-dark tracking-tight">
            Bagaimana DaurIn <span className="text-daurin-green">Menghasilkan</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Siapa Pelanggan Kami */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-daurin-dark">Siapa Pelanggan Kami</h3>

            {/* B2C */}
            <div className="bg-white rounded-2xl p-6 border border-daurin-sage/30 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-daurin-green text-white">
                  B2C
                </span>
                <span className="text-sm font-medium text-daurin-dark/60">
                  Pengguna Individu
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Rumah tangga", "Mahasiswa", "Anak kos", "UMKM (kantin, warung, kafe)"].map(
                  (item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-daurin-dark/75"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-daurin-lime shrink-0" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* B2B */}
            <div className="bg-white rounded-2xl p-6 border border-daurin-sage/30 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-daurin-forest text-white">
                  B2B
                </span>
                <span className="text-sm font-medium text-daurin-dark/60">
                  Klien Bisnis
                </span>
              </div>
              <div className="space-y-2">
                {[
                  "Pabrik daur ulang",
                  "Perusahaan yang butuh bahan baku daur ulang atau data keberlanjutan",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-daurin-dark/75"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-daurin-leaf shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sumber Pendapatan */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-daurin-dark">Sumber Pendapatan</h3>

            <div className="space-y-4">
              {[
                {
                  title: "Margin Penjualan Material",
                  desc: "Margin penjualan material daur ulang ke pabrik.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  ),
                },
                {
                  title: "Data ESG & EPR",
                  desc: "Penyedia data ESG dan EPR untuk perusahaan.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  ),
                },
                {
                  title: "Data Rantai Pasok",
                  desc: "Data rantai pasok material daur ulang.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-daurin-sage/30 shadow-sm hover:border-daurin-green hover:shadow-md transition-all flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-daurin-green/10 text-daurin-green flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-daurin-dark text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-daurin-dark/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
