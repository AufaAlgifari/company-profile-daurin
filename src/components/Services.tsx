import { Truck, Palette, GraduationCap, Building2, ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: "Penjemputan Sampah Terpilah",
      category: "Logistik & Koleksi",
      desc: "Layanan terjadwal pengumpulan sampah anorganik (plastik, kardus, kaleng, kaca) dari rumah tinggal, kos mahasiswa, cafe, dan perkantoran.",
      tags: ["Terjadwal", "Reward Poin", "Mudah"],
    },
    {
      icon: Palette,
      title: "Produk Olahan & Upcycling",
      category: "Manufaktur Sirkular",
      desc: "Katalog produk estetis dari material daur ulang: tatakan gelas, pot tanaman, papan material terdaur, hingga merchandise custom untuk souvenir.",
      tags: ["Desain Estetik", "Kuat & Tahan Lama", "Eco-friendly"],
    },
    {
      icon: GraduationCap,
      title: "Workshop & Edukasi Hijau",
      category: "Edukasi & Pelatihan",
      desc: "Pelatihan interaktif bagi mahasiswa, pelajar, dan komunitas mengenai pemilahan limbah, pembuatan kompos, dan kerajinan upcycling tangan pertama.",
      tags: ["Sertifikat", "Hands-on", "Komunitas"],
    },
    {
      icon: Building2,
      title: "Konsultasi Zero-Waste Event",
      category: "Kemitraan & Korporasi",
      desc: "Pendampingan acara kampus, festival, atau seminar agar minim sampah melalui sistem pemilahan tempat, drop-box limbah, dan pelaporan dampak emisi.",
      tags: ["Audit Sampah", "Laporan Dampak", "Green Certification"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200">
              Layanan & Produk
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Solusi Berkelanjutan untuk Berbagai Kebutuhan
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Dari pemilahan hulu hingga produk hilir berdaya guna, Daurin menyediakan ekosistem terpadu.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition group self-start md:self-auto"
          >
            Konsultasikan Kebutuhan Anda
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-emerald-50/70 text-emerald-700 border border-emerald-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
