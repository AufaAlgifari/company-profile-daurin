"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "pick-up",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative leaf background */}
      <div className="absolute top-0 left-0 w-40 opacity-15 pointer-events-none hidden md:block">
        <Image
          src="/assets/page1_img2.png"
          alt=""
          width={180}
          height={180}
          className="w-full transform -scale-x-100"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-daurin-cream border border-daurin-sage/50 text-daurin-green text-xs font-bold uppercase tracking-wider mb-4">
                Kontak & Kolaborasi
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-daurin-dark tracking-tight leading-tight">
                Mari Bergerak Bersama <span className="text-daurin-green">DaurIn</span>
              </h2>
              <p className="mt-4 text-daurin-dark/70 leading-relaxed text-base">
                Tertarik menjadi mitra penjemputan sampah, mendistribusikan material daur ulang, atau berkolaborasi dalam gerakan zero-waste di lingkungan Anda? Hubungi kami sekarang!
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-daurin-cream border border-daurin-sage/50 text-daurin-green flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-daurin-dark text-sm">Pusat Inovasi & Operasional</h4>
                    <p className="text-daurin-dark/70 text-sm mt-0.5">
                      Fakultas Teknik, Universitas Jenderal Soedirman<br />
                      Jl. Prof. HR Boenyamin, Grendeng, Purwokerto, Banyumas, Jawa Tengah
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-daurin-cream border border-daurin-sage/50 text-daurin-green flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-daurin-dark text-sm">Surel Resmi (Email)</h4>
                    <p className="text-daurin-dark/70 text-sm mt-0.5">
                      kontak@daurin.id / daurin.unsoed@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-daurin-cream border border-daurin-sage/50 text-daurin-green flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-daurin-dark text-sm">Layanan WhatsApp & Dukungan</h4>
                    <p className="text-daurin-dark/70 text-sm mt-0.5">
                      +62 812-3456-7890 (Customer Care DaurIn)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* University Tag */}
            <div className="mt-8 p-5 rounded-2xl bg-daurin-cream/60 border border-daurin-sage/50 text-xs text-daurin-dark/70 flex items-center gap-3">
              <span className="text-xl">🌱</span>
              <span>Didukung oleh Program Pembinaan Kewirausahaan Mahasiswa, Universitas Jenderal Soedirman.</span>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-daurin-cream/40 p-8 sm:p-10 rounded-3xl border border-daurin-sage/50 shadow-sm">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-daurin-green flex items-center justify-center mb-4">
                    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-daurin-dark">Pesan Berhasil Terkirim!</h3>
                  <p className="text-daurin-dark/70 mt-2 max-w-md text-sm">
                    Terima kasih telah menghubungi DaurIn. Tim kami akan segera meninjau dan merespons pesan Anda dalam 1x24 jam kerja.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", contact: "", service: "pick-up", message: "" });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full text-sm font-semibold bg-daurin-green text-white hover:bg-daurin-forest transition shadow-md"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-daurin-dark mb-2">
                      Nama Lengkap / Instansi / Komunitas
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Rian Pratama / RW 04 Banyumas"
                      className="w-full px-4 py-3 rounded-xl border border-daurin-sage/60 bg-white focus:outline-none focus:ring-2 focus:ring-daurin-green focus:border-transparent text-sm text-daurin-dark"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact" className="block text-sm font-semibold text-daurin-dark mb-2">
                      Nomor WhatsApp atau Alamat Email
                    </label>
                    <input
                      type="text"
                      id="contact"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="08xxxxxxxxxx atau email@contoh.com"
                      className="w-full px-4 py-3 rounded-xl border border-daurin-sage/60 bg-white focus:outline-none focus:ring-2 focus:ring-daurin-green focus:border-transparent text-sm text-daurin-dark"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-daurin-dark mb-2">
                      Topik Keperluan / Kolaborasi
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-daurin-sage/60 bg-white focus:outline-none focus:ring-2 focus:ring-daurin-green focus:border-transparent text-sm text-daurin-dark"
                    >
                      <option value="pick-up">Permintaan Penjemputan Sampah Anorganik</option>
                      <option value="collector-partner">Pendaftaran Mitra Kolektor / Pemulung</option>
                      <option value="b2b-supply">Pasokan Bahan Baku Daur Ulang ke Pabrik (B2B)</option>
                      <option value="bank-sampah">Kolaborasi Bank Sampah & Sosialisasi RT/RW</option>
                      <option value="other">Pertanyaan Umum & Diskusi Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-daurin-dark mb-2">
                      Pesan atau Keterangan Tambahan
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tuliskan detail pertanyaan, lokasi wilayah, atau rencana kolaborasi Anda di sini..."
                      className="w-full px-4 py-3 rounded-xl border border-daurin-sage/60 bg-white focus:outline-none focus:ring-2 focus:ring-daurin-green focus:border-transparent text-sm text-daurin-dark resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-daurin-green to-daurin-leaf text-white hover:from-daurin-forest hover:to-daurin-green active:scale-95 transition-all shadow-lg shadow-daurin-green/20"
                  >
                    <span>Kirim Pesan Kolaborasi</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
