import React, { useState } from 'react';
import { 
  Question, 
  UserAnswerValue, 
  DifficultyLevel 
} from '../types/exam';
import { 
  BookOpen, 
  HelpCircle, 
  ChevronRight, 
  SkipForward, 
  Highlighter, 
  Sparkles,
  Check,
  CheckSquare,
  Square,
  AlertCircle
} from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  totalQuestions: number;
  userAnswer: UserAnswerValue | null;
  onAnswerChange: (answer: UserAnswerValue) => void;
  onNext: () => void;
  onSkip: () => void;
  onAskHelp: () => void;
  isLastQuestion: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  totalQuestions,
  userAnswer,
  onAnswerChange,
  onNext,
  onSkip,
  onAskHelp,
  isLastQuestion
}) => {
  const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

  // Difficulty badge styling
  const difficultyBadgeColor: Record<DifficultyLevel, string> = {
    'Sedang': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    'Sedang-Sulit': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    'Sulit': 'bg-rose-500/10 text-rose-400 border-rose-500/20'
  };

  // Handler for PG (Single Choice)
  const handleSelectPGOption = (key: 'A' | 'B' | 'C' | 'D' | 'E') => {
    onAnswerChange({
      type: 'pg',
      selected: key
    });
  };

  // Handler for PG Kompleks (Multiple Choice)
  const handleTogglePGKompleks = (id: string) => {
    const currentSelected = userAnswer?.type === 'pg_kompleks' ? userAnswer.selected : [];
    const isSelected = currentSelected.includes(id);
    const updated = isSelected 
      ? currentSelected.filter(item => item !== id)
      : [...currentSelected, id];

    onAnswerChange({
      type: 'pg_kompleks',
      selected: updated
    });
  };

  // Handler for Benar / Salah
  const handleSelectBenarSalah = (statementId: string, value: boolean) => {
    const currentSelected = userAnswer?.type === 'benar_salah' ? userAnswer.selected : {};
    onAnswerChange({
      type: 'benar_salah',
      selected: {
        ...currentSelected,
        [statementId]: value
      }
    });
  };

  // Check if current question has an answer recorded
  const hasAnswer = (): boolean => {
    if (!userAnswer) return false;
    if (userAnswer.type === 'pg') return userAnswer.selected !== null;
    if (userAnswer.type === 'pg_kompleks') return userAnswer.selected.length > 0;
    if (userAnswer.type === 'benar_salah') {
      const keys = Object.keys(userAnswer.selected);
      return keys.length > 0 && keys.some(k => userAnswer.selected[k] !== null);
    }
    return false;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Top Meta Card */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 rounded-lg bg-indigo-600/30 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold text-sm">
              {question.number}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
              {question.topic}
            </span>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${difficultyBadgeColor[question.difficulty]}`}>
              Tingkat: {question.difficulty}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {question.type === 'pg' && (
              <span className="text-xs font-medium text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
                Pilihan Ganda (A–E)
              </span>
            )}
            {question.type === 'pg_kompleks' && (
              <span className="text-xs font-semibold text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                PG Kompleks (Pilih &ge; 2 Jawaban)
              </span>
            )}
            {question.type === 'benar_salah' && (
              <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                Pernyataan Benar / Salah
              </span>
            )}
          </div>
        </div>

        {/* Optional Context Tag */}
        {question.contextTag && (
          <p className="text-xs text-indigo-400/90 font-medium mb-3 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            Fokus Kisi-kisi: {question.contextTag}
          </p>
        )}

        {/* Reading Passage if available */}
        {question.readingPassage && (
          <div className="mb-6 rounded-xl border border-slate-700/70 bg-slate-950/60 p-4 sm:p-5 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <h3 className="text-xs sm:text-sm font-semibold text-slate-200">
                  {question.readingPassage.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsHighlighted(!isHighlighted)}
                className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors ${
                  isHighlighted 
                    ? 'bg-amber-500/20 border-amber-500/40 text-amber-300' 
                    : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
                title="Aktifkan mode baca kontras tinggi"
              >
                <Highlighter className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Stabilo Teks</span>
              </button>
            </div>
            
            <div className={`text-sm leading-relaxed whitespace-pre-line text-slate-300 transition-all ${
              isHighlighted ? 'bg-amber-950/20 text-amber-100 p-2.5 rounded-lg border border-amber-500/20' : ''
            }`}>
              {question.readingPassage.text}
            </div>
          </div>
        )}

        {/* Question Prompt */}
        <div className="text-slate-100 text-base sm:text-lg font-medium leading-relaxed mb-6 whitespace-pre-line">
          {question.prompt}
        </div>

        {/* ================= OPTIONS RENDERING ================= */}
        
        {/* TYPE 1: PG (Standard Single Choice A-E) */}
        {question.type === 'pg' && question.pgOptions && (
          <div className="space-y-3">
            {question.pgOptions.map(opt => {
              const isSelected = userAnswer?.type === 'pg' && userAnswer.selected === opt.key;
              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => handleSelectPGOption(opt.key)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start space-x-3.5 group cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600/15 border-indigo-500 text-white shadow-lg shadow-indigo-600/10 ring-1 ring-indigo-500/50'
                      : 'bg-slate-950/40 border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:border-slate-700'
                  }`}
                >
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-200'
                  }`}>
                    {opt.key}
                  </span>
                  <span className="text-sm sm:text-base leading-snug flex-1">
                    {opt.text}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* TYPE 2: PG KOMPLEKS (Multi Select Checkboxes) */}
        {question.type === 'pg_kompleks' && question.pgKompleksOptions && (
          <div className="space-y-3">
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-xs text-indigo-300 flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 shrink-0 text-indigo-400" />
              <span>Petunjuk: Pilihlah semua jawaban yang kamu anggap benar (bisa lebih dari satu pilihan).</span>
            </div>
            {question.pgKompleksOptions.map(opt => {
              const isSelected = 
                userAnswer?.type === 'pg_kompleks' && 
                userAnswer.selected.includes(opt.id);

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleTogglePGKompleks(opt.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start space-x-3.5 group cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600/15 border-indigo-500 text-white shadow-lg shadow-indigo-600/10 ring-1 ring-indigo-500/50'
                      : 'bg-slate-950/40 border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:border-slate-700'
                  }`}
                >
                  <span className="shrink-0 mt-0.5 text-indigo-400">
                    {isSelected ? (
                      <CheckSquare className="w-5 h-5 text-indigo-400 fill-indigo-500/20" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-500 group-hover:text-slate-400" />
                    )}
                  </span>
                  <span className="text-sm sm:text-base leading-snug flex-1">
                    {opt.text}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* TYPE 3: BENAR / SALAH (Statement Rows Matrix) */}
        {question.type === 'benar_salah' && question.statements && (
          <div className="space-y-4">
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs text-emerald-300 flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Petunjuk: Tentukan status <strong>BENAR</strong> atau <strong>SALAH</strong> untuk setiap baris pernyataan di bawah ini.</span>
            </div>
            {question.statements.map((st, idx) => {
              const val = userAnswer?.type === 'benar_salah' ? userAnswer.selected[st.id] : null;

              return (
                <div 
                  key={st.id}
                  className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-start space-x-3 flex-1">
                    <span className="w-6 h-6 rounded-md bg-slate-800 text-slate-400 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-sm sm:text-base text-slate-200 leading-snug">
                      {st.statement}
                    </p>
                  </div>

                  {/* Benar / Salah Buttons */}
                  <div className="flex items-center space-x-2 shrink-0 self-end md:self-center">
                    <button
                      type="button"
                      onClick={() => handleSelectBenarSalah(st.id, true)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                        val === true
                          ? 'bg-emerald-600 border-emerald-500 text-white shadow-md shadow-emerald-700/20'
                          : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      BENAR
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectBenarSalah(st.id, false)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                        val === false
                          ? 'bg-rose-600 border-rose-500 text-white shadow-md shadow-rose-700/20'
                          : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      SALAH
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Action Footer Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        {/* Left: Ask Hint / Help button */}
        <button
          type="button"
          onClick={onAskHelp}
          className="flex items-center space-x-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-indigo-300 bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
          title="Tanya kunci jawaban atau bantuan"
        >
          <HelpCircle className="w-4 h-4 text-indigo-400" />
          <span>Tanya Bantuan / Bocoran</span>
        </button>

        {/* Right Buttons: Skip and Next */}
        <div className="flex items-center space-x-3 ml-auto">
          {/* Skip Button */}
          <button
            type="button"
            onClick={onSkip}
            className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-400 hover:text-slate-200 bg-slate-800/70 border border-slate-700/80 hover:bg-slate-800 transition-all cursor-pointer"
            title="Lewati soal ini dan catat sebagai tidak dijawab"
          >
            <SkipForward className="w-4 h-4" />
            <span>Lewati (Skip)</span>
          </button>

          {/* Next / Submit Question Button */}
          <button
            type="button"
            onClick={onNext}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-all cursor-pointer ${
              hasAnswer()
                ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500 shadow-indigo-600/25 ring-1 ring-indigo-400/30'
                : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
            }`}
          >
            <span>{isLastQuestion ? 'Simpan & Lihat Hasil' : 'Simpan & Lanjut'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
