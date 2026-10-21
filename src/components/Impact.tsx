export default function Dampak() {
  const esg = [
    {
      category: "Environment (Lingkungan)",
      desc: "Lebih banyak sampah anorganik kembali ke rantai daur ulang, sehingga yang berakhir di TPA berkurang.",
      color: "bg-green-500",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67" />
        </svg>
      ),
    },
    {
      category: "Social (Sosial)",
      desc: "Kolektor lokal terlibat dalam ekosistem digital dan masyarakat mendapat insentif.",
      color: "bg-blue-500",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
    {
      category: "Governance (Tata Kelola)",
      desc: "Pencatatan digital meningkatkan transparansi dan keterlacakan material.",
      color: "bg-amber-500",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
  ];

  const sdgs = [
    { num: "1", title: "No Poverty" },
    { num: "8", title: "Decent Work" },
    { num: "11", title: "Sustainable Cities" },
    { num: "12", title: "Responsible Consumption" },
  ];

  return (
    <section id="dampak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-daurin-leaf bg-daurin-cream px-4 py-1.5 rounded-full border border-daurin-sage/50">
            Dampak & Keberlanjutan
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-daurin-dark tracking-tight">
            Dampak yang Ingin Kami <span className="text-daurin-green">Capai</span>
          </h2>
        </div>

        {/* ESG Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {esg.map((item, idx) => (
            <div
              key={idx}
              className="bg-daurin-cream/40 rounded-3xl p-8 border border-daurin-sage/30 hover:border-daurin-green hover:shadow-lg transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color}/15 flex items-center justify-center mb-6`}>
                <div className={`text-daurin-green`}>{item.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-daurin-dark group-hover:text-daurin-green transition-colors mb-3">
                {item.category}
              </h3>
              <p className="text-sm text-daurin-dark/65 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* SDGs + EPR Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SDGs */}
          <div className="bg-gradient-to-br from-daurin-cream to-white rounded-3xl p-8 border border-daurin-sage/30">
            <h3 className="text-lg font-bold text-daurin-dark mb-6">
              Selaras dengan SDGs:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {sdgs.map((sdg) => (
                <div
                  key={sdg.num}
                  className="bg-white rounded-2xl p-4 border border-daurin-sage/20 text-center hover:border-daurin-green hover:shadow-md transition-all"
                >
                  <div className="text-3xl font-black text-daurin-green mb-1">
                    {sdg.num}
                  </div>
                  <p className="text-[11px] font-semibold text-daurin-dark/60 leading-tight">
                    {sdg.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* EPR */}
          <div className="bg-gradient-to-br from-daurin-green/5 to-daurin-cream rounded-3xl p-8 border border-daurin-sage/30">
            <h3 className="text-lg font-bold text-daurin-dark mb-4">
              Mendukung Kebijakan EPR
            </h3>
            <p className="text-sm text-daurin-dark/70 leading-relaxed mb-4">
              Data DaurIn bisa membantu produsen memenuhi{" "}
              <strong className="text-daurin-dark">
                Permen LHK No. 75 Tahun 2019
              </strong>{" "}
              tentang Peta Jalan Pengurangan Sampah oleh Produsen.
            </p>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-daurin-sage/20">
              <svg className="w-8 h-8 text-daurin-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <div>
                <p className="text-xs font-bold text-daurin-dark">
                  Extended Producer Responsibility
                </p>
                <p className="text-[11px] text-daurin-dark/50">
                  Data keterlacakan material dari sumber ke pengolah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
