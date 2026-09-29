import React from 'react';
import { X, CheckCircle2, Flag, AlertCircle, Send } from 'lucide-react';
import { Question, UserAnswerValue } from '../types/exam';

interface QuestionNavModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: Record<number, UserAnswerValue>;
  doubtfulQuestionIds: Set<number>;
  onSelectQuestion: (index: number) => void;
  onRequestFinish: () => void;
}

export const QuestionNavModal: React.FC<QuestionNavModalProps> = ({
  isOpen,
  onClose,
  questions,
  currentQuestionIndex,
  userAnswers,
  doubtfulQuestionIds,
  onSelectQuestion,
  onRequestFinish
}) => {
  if (!isOpen) return null;

  const isAnswered = (q: Question): boolean => {
    const ans = userAnswers[q.id];
    if (!ans) return false;
    if (ans.type === 'pg') return ans.selected !== null;
    if (ans.type === 'pg_kompleks') return ans.selected.length > 0;
    if (ans.type === 'benar_salah') {
      const keys = Object.keys(ans.selected);
      return keys.length > 0 && keys.some(k => ans.selected[k] !== null);
    }
    return false;
  };

  const answeredCount = questions.filter(isAnswered).length;
  const doubtfulCount = doubtfulQuestionIds.size;
  const unansweredCount = questions.length - answeredCount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              Lembar Navigasi Soal (1–30)
            </h2>
            <p className="text-xs text-slate-400">
              Pilih nomor soal untuk berpindah giliran secara cepat
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Legend */}
        <div className="px-5 py-3 bg-slate-950/50 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center space-x-1.5">
            <span className="w-3.5 h-3.5 rounded-md bg-emerald-600"></span>
            <span className="text-slate-300">Terjawab ({answeredCount})</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3.5 h-3.5 rounded-md bg-amber-500"></span>
            <span className="text-slate-300">Ragu-ragu ({doubtfulCount})</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3.5 h-3.5 rounded-md bg-slate-800 border border-slate-700"></span>
            <span className="text-slate-300">Belum ({unansweredCount})</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3.5 h-3.5 rounded-md ring-2 ring-indigo-500 bg-slate-800"></span>
            <span className="text-indigo-300">Aktif</span>
          </div>
        </div>

        {/* Question Grid */}
        <div className="p-5 overflow-y-auto flex-1">
          <div className="grid grid-cols-5 sm:grid-cols-6 gap-2.5">
            {questions.map((q, idx) => {
              const answered = isAnswered(q);
              const doubtful = doubtfulQuestionIds.has(q.id);
              const isCurrent = idx === currentQuestionIndex;

              let btnClass = 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700';

              if (doubtful) {
                btnClass = 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold';
              } else if (answered) {
                btnClass = 'bg-emerald-600/20 border-emerald-500 text-emerald-300 font-bold';
              }

              if (isCurrent) {
                btnClass += ' ring-2 ring-indigo-500 ring-offset-2 ring-offset-slate-900';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    onSelectQuestion(idx);
                    onClose();
                  }}
                  className={`h-11 rounded-xl border text-sm flex items-center justify-center transition-all cursor-pointer relative ${btnClass}`}
                >
                  <span>{q.number}</span>
                  {doubtful && (
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400"></span>
                  )}
                  {answered && !doubtful && (
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            Kembali ke Soal
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestFinish();
            }}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-rose-600 text-white hover:bg-rose-500 transition-colors shadow-md shadow-rose-950/30"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Selesaikan Ujian</span>
          </button>
        </div>
      </div>
    </div>
  );
};
