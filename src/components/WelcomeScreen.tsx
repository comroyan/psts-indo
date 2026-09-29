import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  HelpCircle, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Briefcase, 
  AlertCircle,
  Play
} from 'lucide-react';

interface WelcomeScreenProps {
  onStartExam: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartExam }) => {
  const [startInput, setStartInput] = useState<string>('');
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  const handleStartSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (startInput.trim().toUpperCase() === 'MULAI') {
      onStartExam();
    } else {
      setErrorNotice('Ketik kata "MULAI" secara tepat untuk membuka lembar soal simulasi ulangan.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-6">
      
      {/* Hero Welcome Card */}
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kisi-kisi Resmi PSTS 2026/2027</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            SIMULASI PSTS BAHASA INDONESIA XII
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold pt-1">
            <span className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200">
              30 SOAL
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">
              MODE ULANGAN RESMI
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              Waktu: 45 Menit
            </span>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2 max-w-2xl">
            Simulasi ini dirancang khusus untuk menguji kemampuan pemahaman dan penalaran analitis (HOTS) siswa kelas XII SMA IPA dalam menghadapi Penilaian Sumatif Tengah Semester (PSTS). Soal disajikan secara interaktif <strong>satu per satu</strong> tanpa pembocoran kunci jawaban selama ujian berlangsung.
          </p>
        </div>

        {/* Start Trigger Box (Strict 'MULAI' requirement) */}
        <div className="mt-8 pt-8 border-t border-slate-800/80">
          <form onSubmit={handleStartSubmit} className="max-w-lg space-y-4">
            <label className="block text-xs sm:text-sm font-semibold text-slate-200">
              Sesuai instruksi ujian: Ketik kata <span className="text-indigo-400 font-mono font-bold">"MULAI"</span> untuk memulai:
            </label>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={startInput}
                onChange={(e) => {
                  setStartInput(e.target.value);
                  setErrorNotice(null);
                }}
                placeholder='Ketik "MULAI" di sini...'
                className="flex-1 px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 uppercase tracking-widest placeholder:normal-case placeholder:tracking-normal placeholder:text-slate-500"
                autoFocus
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2 transition-all cursor-pointer shrink-0"
              >
                <span>MULAI</span>
                <Play className="w-4 h-4 fill-white" />
              </button>
            </div>

            {errorNotice && (
              <p className="text-xs text-rose-400 flex items-center gap-1.5 animate-shake">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errorNotice}
              </p>
            )}

            {/* Quick Helper Button */}
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <span>Atau klik tombol cepat:</span>
              <button
                type="button"
                onClick={() => {
                  setStartInput('MULAI');
                  onStartExam();
                }}
                className="text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-2 cursor-pointer"
              >
                Isi "MULAI" & Mulai Sekarang
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Kisi-Kisi Breakdown (Based on Uploaded Image) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Box A: Teks Biografi */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
            <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base font-bold text-white">
                A. TEKS BIOGRAFI
              </h3>
              <p className="text-xs text-slate-400">5 Indikator Soal Kisi-kisi PSTS</p>
            </div>
          </div>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
              <span><strong>Hakikat Teks Biografi:</strong> Struktur orientasi, masalah/peristiwa, reorientasi, fakta vs opini, nilai keteladanan.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
              <span><strong>Teknik Membaca Cepat:</strong> Skimming (ide pokok wacana) dan Scanning (fakta numerik/spesifik).</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
              <span><strong>Jenis Kata Serapan:</strong> Adopsi murni, adaptasi fonologis, terjemahan/pungutan, dan kreasi.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
              <span><strong>Makna Kata Serapan:</strong> Asal bahasa Sanskerta, Arab, Belanda, Portugis, Inggris.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
              <span><strong>Kaidah Tanda Petik:</strong> Tanda petik ganda ("...") vs tanda petik tunggal ('...') menurut EYD V.</span>
            </li>
          </ul>
        </div>

        {/* Box B: Teks Kewirausahaan & Prosedur */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
            <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Briefcase className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base font-bold text-white">
                B. TEKS KEWIRAUSAHAAN & PROSEDUR
              </h3>
              <p className="text-xs text-slate-400">4 Indikator Soal Kisi-kisi PSTS</p>
            </div>
          </div>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
              <span><strong>Hakikat Teks Prosedur:</strong> Kalimat imperatif, verba material, konjungsi temporal, tujuan, tahapan.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
              <span><strong>Mengurutkan Petunjuk Kronologis:</strong> Prosedur pendaftaran NIB di OSS, standardisasi higienitas produk, dan inovasi ilmiah.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
              <span><strong>Etika Presentasi Bisnis:</strong> Sikap profesional audiens, respek terhadap kompetitor, transparansi data risiko, active listening.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
              <span><strong>Elemen Pitch Deck Bisnis:</strong> Problem, Unique Value Proposition, Market Sizing (TAM/SAM/SOM), Model Bisnis, Traction, The Ask.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Rules & Examination Atmosphere */}
      <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6">
        <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          Ketentuan & Tata Cara Ulangan Interaktif:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <strong className="block text-indigo-400 mb-1">1 Soal Tiap Giliran</strong>
            Fokus menjawab satu nomor pada tiap layar. Jawaban tersimpan otomatis saat melangkah ke nomor berikutnya.
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <strong className="block text-indigo-400 mb-1">Pembahasan Lengkap & Detail</strong>
            Di akhir ujian, setiap soal (terutama yang salah) diuraikan konsepnya, kaidah EYD V, dan analisis alasan pengecohnya agar kamu langsung paham.
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <strong className="block text-indigo-400 mb-1">Analisis Diagnostik & Remedial</strong>
            Dilengkapi deteksi pola kesalahan, rangkuman materi yang wajib dipelajari lagi, serta 5 soal remedial interaktif.
          </div>
        </div>
      </div>

    </div>
  );
};
