import React, { useState } from 'react';
import { 
  ExamReport, 
  TopicCategory, 
  QuestionResult 
} from '../types/exam';
import { STUDY_GUIDES } from '../data/studyNotes';
import { RemedialSection } from './RemedialSection';
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Clock, 
  BarChart3, 
  BookOpen, 
  AlertTriangle, 
  RotateCcw, 
  Printer, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Sparkles,
  Layers,
  ArrowRight,
  Filter
} from 'lucide-react';

interface ResultReportProps {
  report: ExamReport;
  onRestartExam: () => void;
}

export const ResultReport: React.FC<ResultReportProps> = ({
  report,
  onRestartExam
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'wrong' | 'correct' | 'unanswered'>('wrong');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<number, boolean>>({});

  // Toggle single question accordion
  const toggleAccordion = (qNum: number) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [qNum]: !prev[qNum]
    }));
  };

  // Expand all / collapse all
  const toggleAll = (expand: boolean) => {
    const newState: Record<number, boolean> = {};
    report.questionResults.forEach(r => {
      newState[r.questionNumber] = expand;
    });
    setExpandedQuestions(newState);
  };

  // Identify weakest topic for remedial
  const sortedTopics = (Object.keys(report.topicEvaluations) as TopicCategory[]).sort((a, b) => {
    return report.topicEvaluations[a].percentage - report.topicEvaluations[b].percentage;
  });
  const weakestTopic = sortedTopics[0] || 'Tanda Petik';

  // Filtered question list
  const filteredResults = report.questionResults.filter(item => {
    if (filterMode === 'all') return true;
    if (filterMode === 'wrong') return item.status === 'wrong';
    if (filterMode === 'correct') return item.status === 'correct';
    if (filterMode === 'unanswered') return item.status === 'unanswered';
    return true;
  });

  // Grade badge & label
  let gradeLetter = 'A';
  let gradeComment = 'Sangat Memuaskan! Kesiapan menghadapi PSTS sangat tinggi.';
  let scoreColor = 'from-emerald-500 to-teal-400';

  if (report.score >= 90) {
    gradeLetter = 'A+';
    gradeComment = 'Luar Biasa! Kemampuan penalaran HOTS dan ketelitian EYD V nyaris sempurna.';
  } else if (report.score >= 80) {
    gradeLetter = 'A';
    gradeComment = 'Sangat Baik! Pemahaman materi sudah kokoh, siap meraih nilai maksimal di PSTS.';
  } else if (report.score >= 70) {
    gradeLetter = 'B+';
    gradeComment = 'Baik! Sebagian besar konsep dikuasai, perlu sedikit mematangkan soal jebakan.';
  } else if (report.score >= 60) {
    gradeLetter = 'B';
    gradeComment = 'Cukup! Perlu penguatan pada kaidah tanda petik dan etimologi kata serapan.';
    scoreColor = 'from-amber-500 to-orange-400';
  } else {
    gradeLetter = 'C';
    gradeComment = 'Perlu Belajar Lagi! Manfaatkan materi review dan soal remedial di bawah.';
    scoreColor = 'from-rose-500 to-red-400';
  }

  // Format time spent
  const minutes = Math.floor(report.timeSpentSeconds / 60);
  const seconds = report.timeSpentSeconds % 60;
  const timeFormatted = `${minutes} menit ${seconds} detik`;

  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-16 print:p-0">
      
      {/* ================= 1. HERO SCORE & SUMMARY CARD ================= */}
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: Score circle & Title */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
            <div className="relative">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl bg-slate-950 border-2 border-indigo-500/40 flex flex-col items-center justify-center shadow-xl shadow-indigo-950/50">
                <span className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-1">
                  Nilai Akhir
                </span>
                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-r ${scoreColor} bg-clip-text text-transparent font-mono`}>
                  {report.score}
                </span>
                <span className="text-xs text-slate-500 font-medium mt-1">
                  / 100
                </span>
              </div>
              <div className="absolute -bottom-2.5 -right-2 px-3 py-1 rounded-lg bg-indigo-600 text-white font-extrabold text-xs shadow-md border border-indigo-400/40">
                Predikat: {gradeLetter}
              </div>
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
                <Trophy className="w-3.5 h-3.5" />
                <span>Hasil Simulasi Resmi PSTS 2026/2027</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Evaluasi PSTS Bahasa Indonesia XII
              </h2>
              <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
                {gradeComment}
              </p>
              <div className="flex items-center space-x-2 text-xs text-slate-400 pt-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Waktu Pengerjaan: <strong>{timeFormatted}</strong> (rata-rata {Math.round(report.timeSpentSeconds / 30)} detik/soal)</span>
              </div>
            </div>
          </div>

          {/* Right: Quick Action Buttons */}
          <div className="flex flex-row md:flex-col gap-3 shrink-0 print:hidden">
            <button
              onClick={() => window.print()}
              className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-400" />
              <span>Cetak Hasil</span>
            </button>
            <button
              onClick={onRestartExam}
              className="flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi Simulasi</span>
            </button>
          </div>
        </div>

        {/* 4 Stat Boxes (Benar, Salah, Tidak Dijawab, Persentase) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-8 border-t border-slate-800/80">
          
          <div className="bg-slate-950/60 border border-emerald-500/20 rounded-2xl p-4 flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Jumlah Benar</p>
              <p className="text-xl sm:text-2xl font-bold text-white font-mono">{report.correctCount} <span className="text-xs font-normal text-slate-500">soal</span></p>
            </div>
          </div>

          <div className="bg-slate-950/60 border border-rose-500/20 rounded-2xl p-4 flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0">
              <XCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Jumlah Salah</p>
              <p className="text-xl sm:text-2xl font-bold text-white font-mono">{report.wrongCount} <span className="text-xs font-normal text-slate-500">soal</span></p>
            </div>
          </div>

          <div className="bg-slate-950/60 border border-amber-500/20 rounded-2xl p-4 flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Tidak Dijawab</p>
              <p className="text-xl sm:text-2xl font-bold text-white font-mono">{report.unansweredCount} <span className="text-xs font-normal text-slate-500">soal</span></p>
            </div>
          </div>

          <div className="bg-slate-950/60 border border-indigo-500/20 rounded-2xl p-4 flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Akurasi Soal</p>
              <p className="text-xl sm:text-2xl font-bold text-white font-mono">{report.accuracyPercentage}%</p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= 6. ANALISIS KEMAMPUAN BERDASARKAN MATERI ================= */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
              <BarChart3 className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Analisis Kemampuan Berdasarkan 6 Materi Kisi-kisi
              </h3>
              <p className="text-xs text-slate-400">
                Peta penguasaan kompetensi Teks Biografi dan Teks Kewirausahaan
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(Object.keys(report.topicEvaluations) as TopicCategory[]).map(topic => {
            const evalData = report.topicEvaluations[topic];
            
            let badgeClass = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
            if (evalData.masteryLevel === 'Cakap') badgeClass = 'bg-blue-500/10 text-blue-400 border-blue-500/20';
            if (evalData.masteryLevel === 'Dasar') badgeClass = 'bg-amber-500/10 text-amber-400 border-amber-500/20';
            if (evalData.masteryLevel === 'Perlu Bimbingan') badgeClass = 'bg-rose-500/10 text-rose-400 border-rose-500/20';

            return (
              <div 
                key={topic} 
                className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-slate-200 text-sm sm:text-base">
                      {topic}
                    </h4>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full border font-semibold ${badgeClass}`}>
                      {evalData.masteryLevel}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1.5 mb-3">
                    <div className="flex justify-between text-xs text-slate-400 font-mono">
                      <span>Benar {evalData.correct}/{evalData.total}</span>
                      <span className="font-bold text-white">{evalData.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          evalData.percentage >= 80 ? 'bg-emerald-500' :
                          evalData.percentage >= 65 ? 'bg-indigo-500' :
                          evalData.percentage >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                        }`}
                        style={{ width: `${evalData.percentage}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-2">
                    {evalData.summaryInsight}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-900 text-xs text-slate-400 flex items-center justify-between">
                  <span>Salah: <strong className="text-rose-400">{evalData.wrong}</strong></span>
                  <span>Kosong: <strong className="text-amber-400">{evalData.unanswered}</strong></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= 9. POLA KESALAHAN SAYA ================= */}
      <div className="bg-slate-900/80 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex items-center space-x-3">
          <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
            <AlertTriangle className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Analisis Pola Kesalahan yang Terdeteksi
            </h3>
            <p className="text-xs text-slate-400">
              Kelemahan dan kecenderungan berpikir yang perlu diantisipasi pada saat ujian asli
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          {report.errorPatterns.map((pattern, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start space-x-3"
            >
              <span className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-sm text-slate-200 leading-relaxed">
                {pattern}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= 10. MATERI YANG WAJIB DIPELAJARI LAGI ================= */}
      <div className="bg-slate-900/80 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
              <BookOpen className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Materi yang Wajib Dipelajari Lagi (Ringkasan & Rumus EYD V)
              </h3>
              <p className="text-xs text-slate-400">
                Cheat-sheet konsep esensial yang paling rawan salah berdasarkan hasil evaluasimu
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {report.mandatoryReviewNotes.map((note, idx) => {
            const guide = STUDY_GUIDES[note.topic];
            return (
              <div 
                key={idx}
                className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h4 className="text-base font-bold text-white">
                      {note.title}
                    </h4>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {guide.badge}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                  "{guide.summary}"
                </p>

                {/* Key Points */}
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                    Poin Kunci yang Harus Diingat:
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 list-disc list-inside">
                    {note.keyPoints.map((point, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Good vs Bad Example Box */}
                {guide.rulesAndFormulas.length > 0 && (
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm space-y-2">
                    <p className="font-bold text-slate-200">
                      {guide.rulesAndFormulas[0].ruleTitle}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-emerald-200">
                        <strong className="block text-emerald-400 mb-0.5">✓ Bentuk Baku / Benar:</strong>
                        {guide.rulesAndFormulas[0].goodExample}
                      </div>
                      <div className="p-2.5 rounded-lg bg-rose-950/30 border border-rose-500/30 text-rose-200">
                        <strong className="block text-rose-400 mb-0.5">✗ Jebakan / Salah:</strong>
                        {guide.rulesAndFormulas[0].badExample}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= 11. 5 SOAL REMEDIAL INTERAKTIF ================= */}
      <RemedialSection weakestTopic={weakestTopic} />

      {/* ================= 7 & 8. DAFTAR NOMOR SALAH & PEMBAHASAN DETAIL ================= */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Daftar Soal & Pembahasan Lengkap
            </h3>
            <p className="text-xs text-slate-400">
              Pelajari alasan kebenaran kaidah dan eliminasi opsi pengecoh
            </p>
          </div>

          {/* Quick Expand All & Collapse All */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => toggleAll(true)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            >
              Buka Semua
            </button>
            <button
              onClick={() => toggleAll(false)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            >
              Tutup Semua
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" />
            Filter:
          </span>
          <button
            onClick={() => setFilterMode('wrong')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              filterMode === 'wrong'
                ? 'bg-rose-500/20 border-rose-500 text-rose-300 shadow-md'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            Salah Saja ({report.wrongCount})
          </button>
          <button
            onClick={() => setFilterMode('unanswered')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              filterMode === 'unanswered'
                ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-md'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            Tidak Dijawab ({report.unansweredCount})
          </button>
          <button
            onClick={() => setFilterMode('correct')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              filterMode === 'correct'
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-md'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            Benar Saja ({report.correctCount})
          </button>
          <button
            onClick={() => setFilterMode('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              filterMode === 'all'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            Semua Soal (30)
          </button>
        </div>

        {/* List of Questions with Accordions */}
        <div className="space-y-4 pt-2">
          {filteredResults.length === 0 ? (
            <div className="text-center py-12 bg-slate-950/40 rounded-2xl border border-slate-800 text-slate-400">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-200">Tidak ada soal dalam kategori filter ini.</p>
              <p className="text-xs text-slate-500 mt-1">Semua soal pada kategori ini terjawab dengan tepat!</p>
            </div>
          ) : (
            filteredResults.map(item => {
              const q = item.question;
              const isExpanded = !!expandedQuestions[item.questionNumber];

              let statusBadge = (
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-rose-500/15 border border-rose-500/30 text-rose-300 flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 text-rose-400" />
                  Salah (Skor: {item.scoreGained})
                </span>
              );

              if (item.status === 'correct') {
                statusBadge = (
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Benar (Skor: 1)
                  </span>
                );
              } else if (item.status === 'unanswered') {
                statusBadge = (
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                    Dilewati / Kosong (Skor: 0)
                  </span>
                );
              }

              return (
                <div 
                  key={q.id}
                  className="bg-slate-950/70 border border-slate-800 rounded-2xl overflow-hidden transition-all"
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => toggleAccordion(item.questionNumber)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 hover:bg-slate-900/60 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start space-x-3.5">
                      <span className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {item.questionNumber}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          {statusBadge}
                          <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                            {q.topic}
                          </span>
                          <span className="text-xs text-slate-400">
                            Tingkat: {q.difficulty}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-slate-100 line-clamp-2">
                          {q.prompt.split('\n')[0]}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 p-2 text-slate-400 hover:text-white">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="p-5 sm:p-6 border-t border-slate-800/80 bg-slate-950/90 space-y-5 animate-in fade-in duration-150">
                      
                      {/* Reading Passage if existed */}
                      {q.readingPassage && (
                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-300">
                          <p className="font-bold text-slate-200 mb-1 flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                            {q.readingPassage.title}
                          </p>
                          <p className="whitespace-pre-line leading-relaxed text-slate-400">
                            {q.readingPassage.text}
                          </p>
                        </div>
                      )}

                      {/* Full Prompt */}
                      <div className="text-sm sm:text-base font-medium text-slate-100 whitespace-pre-line leading-relaxed">
                        {q.prompt}
                      </div>

                      {/* Answers comparison */}
                      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-slate-400 font-medium">Jawabanmu:</span>
                          <span className={`font-bold ${
                            item.status === 'correct' ? 'text-emerald-400' : 'text-rose-400'
                          }`}>
                            {item.userAnswer?.type === 'pg' && (item.userAnswer.selected || '(Kosong)')}
                            {item.userAnswer?.type === 'pg_kompleks' && (
                              item.userAnswer.selected.length > 0 
                                ? item.userAnswer.selected.map(id => {
                                    const opt = q.pgKompleksOptions?.find(o => o.id === id);
                                    return opt ? opt.text : id;
                                  }).join('; ')
                                : '(Kosong)'
                            )}
                            {item.userAnswer?.type === 'benar_salah' && (
                              Object.entries(item.userAnswer.selected)
                                .map(([k, v]) => `${k}: ${v === true ? 'Benar' : v === false ? 'Salah' : '-'}`)
                                .join(', ')
                            )}
                            {!item.userAnswer && '(Kosong / Tidak Dijawab)'}
                          </span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <span className="text-slate-400 font-medium">Kunci Jawaban Tepat:</span>
                          <span className="font-bold text-emerald-400">
                            {q.type === 'pg' && `${q.pgCorrectAnswer} (${q.pgOptions?.find(o => o.key === q.pgCorrectAnswer)?.text})`}
                            {q.type === 'pg_kompleks' && (
                              q.pgKompleksCorrectAnswers?.map(id => {
                                const opt = q.pgKompleksOptions?.find(o => o.id === id);
                                return opt ? opt.text : id;
                              }).join(' | ')
                            )}
                            {q.type === 'benar_salah' && (
                              q.statements?.map((s, idx) => `Pernyataan ${idx + 1}: ${s.correctAnswer ? 'BENAR' : 'SALAH'}`).join(' • ')
                            )}
                          </span>
                        </div>
                      </div>

                      {/* Comprehensive Explanation */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 space-y-3">
                        <div className="flex items-center space-x-2 text-indigo-300 font-bold text-sm">
                          <Sparkles className="w-4 h-4 text-indigo-400" />
                          <span>Pembahasan Mendalam: {q.explanation.coreConcept}</span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
                          {q.explanation.analysis}
                        </p>

                        {q.explanation.distractorAnalysis && (
                          <div className="pt-2 border-t border-indigo-500/20 text-xs text-slate-300 leading-relaxed">
                            <strong className="text-amber-400">Analisis Pengecoh: </strong>
                            {q.explanation.distractorAnalysis}
                          </div>
                        )}

                        {q.explanation.eydRuleNote && (
                          <div className="p-2.5 rounded-lg bg-indigo-900/30 border border-indigo-500/20 text-xs text-indigo-200">
                            <strong>Kaidah Baku: </strong>{q.explanation.eydRuleNote}
                          </div>
                        )}
                      </div>

                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Bottom Sticky-like CTA */}
      <div className="flex items-center justify-between p-6 bg-slate-900 border border-slate-800 rounded-3xl shadow-xl print:hidden">
        <div>
          <h4 className="font-bold text-white text-base">Siap untuk mencoba lagi?</h4>
          <p className="text-xs text-slate-400">Uji kembali pemahamanmu setelah mempelajari seluruh pembahasan di atas.</p>
        </div>
        <button
          onClick={onRestartExam}
          className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 hover:from-indigo-500 hover:to-violet-500 transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Ulangi Simulasi PSTS</span>
        </button>
      </div>

    </div>
  );
};
