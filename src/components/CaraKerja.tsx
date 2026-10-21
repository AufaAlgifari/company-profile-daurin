export default function CaraKerja() {
  const steps = [
    {
      num: "1",
      title: "Pilah & Foto",
      desc: "Pengguna memilah sampah anorganik, lalu memfotonya di aplikasi.",
      color: "bg-daurin-green",
    },
    {
      num: "2",
      title: "Lapor",
      desc: "Pengguna mengirim permintaan penjemputan.",
      color: "bg-daurin-leaf",
    },
    {
      num: "3",
      title: "Cocokkan",
      desc: "Sistem memilih kolektor berdasarkan lokasi dan ketersediaan.",
      color: "bg-daurin-green",
    },
    {
      num: "4",
      title: "Jemput",
      desc: "Kolektor datang mengikuti rute yang sudah disusun.",
      color: "bg-daurin-leaf",
    },
    {
      num: "5",
      title: "Dapat Poin",
      desc: "Pengguna menerima poin, lalu bisa menukarnya jadi saldo e-wallet.",
      color: "bg-daurin-green",
    },
    {
      num: "6",
      title: "Salurkan",
      desc: "Material dikumpulkan di gudang transit, lalu dikirim ke pabrik daur ulang.",
      color: "bg-daurin-forest",
    },
  ];

  return (
    <section id="cara-kerja" className="py-20 bg-daurin-cream relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-daurin-sage/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-daurin-leaf bg-white px-4 py-1.5 rounded-full border border-daurin-sage/50">
            Cara Kerja DaurIn
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-daurin-dark tracking-tight">
            6 Langkah Mudah <span className="text-daurin-green">Mengelola Sampah</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-white rounded-3xl p-8 border border-daurin-sage/30 hover:border-daurin-green hover:shadow-xl hover:shadow-daurin-green/5 transition-all duration-300 group"
            >
              {/* Step number */}
              <div
                className={`w-14 h-14 rounded-2xl ${step.color} text-white flex items-center justify-center text-2xl font-black mb-6 group-hover:scale-110 transition-transform`}
              >
                {step.num}
              </div>

              <h3 className="text-lg font-bold text-daurin-dark group-hover:text-daurin-green transition-colors">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-daurin-dark/65 leading-relaxed">
                {step.desc}
              </p>

              {/* Connector arrow (hidden on last item) */}
              {step.num !== "6" && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-daurin-sage z-20">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
