import React from 'react';
import { Clock, LayoutGrid, Flag, CheckCircle2, AlertTriangle, Send } from 'lucide-react';

interface HeaderProps {
  currentQuestionNumber: number;
  totalQuestions: number;
  timeRemainingSeconds: number;
  isDoubtful: boolean;
  onToggleDoubtful: () => void;
  onOpenNavGrid: () => void;
  onRequestFinish: () => void;
  answeredCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentQuestionNumber,
  totalQuestions,
  timeRemainingSeconds,
  isDoubtful,
  onToggleDoubtful,
  onOpenNavGrid,
  onRequestFinish,
  answeredCount
}) => {
  // Format MM:SS
  const minutes = Math.floor(timeRemainingSeconds / 60);
  const seconds = timeRemainingSeconds % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const isTimeCritical = timeRemainingSeconds < 300; // < 5 mins
  const progressPercent = Math.round((currentQuestionNumber / totalQuestions) * 100);

  return (
    <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          
          {/* Title & Badge */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 text-sm">
              XII
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  SIMULASI PSTS B. INDONESIA XII
                </h1>
                <span className="hidden sm:inline-flex px-2 py-0.5 text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                  Mode Ulangan
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Soal <span className="text-indigo-400 font-bold">{currentQuestionNumber}</span> dari {totalQuestions} • Terjawab {answeredCount}/{totalQuestions}
              </p>
            </div>
          </div>

          {/* Right Action Section: Timer & Nav */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            
            {/* Countdown Timer */}
            <div className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl border text-sm font-mono font-semibold transition-all ${
              isTimeCritical 
                ? 'bg-rose-500/15 border-rose-500/40 text-rose-400 animate-pulse' 
                : 'bg-slate-800/80 border-slate-700/80 text-emerald-400'
            }`}>
              <Clock className="w-4 h-4" />
              <span>{timeFormatted}</span>
            </div>

            {/* Doubtful / Ragu Flag */}
            <button
              onClick={onToggleDoubtful}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
                isDoubtful
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                  : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-amber-300 hover:border-amber-500/30'
              }`}
              title="Tandai ragu-ragu untuk diperiksa nanti"
            >
              <Flag className={`w-3.5 h-3.5 ${isDoubtful ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span className="hidden md:inline">Ragu-ragu</span>
            </button>

            {/* Grid Nav Button */}
            <button
              onClick={onOpenNavGrid}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 hover:border-slate-600 transition-colors"
              title="Lihat seluruh nomor lembar soal"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Daftar Soal</span>
            </button>

            {/* Finish Button */}
            <button
              onClick={onRequestFinish}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-rose-600 to-red-600 text-white hover:from-rose-500 hover:to-red-500 shadow-md shadow-rose-900/20 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Selesai</span>
            </button>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden mt-2.5">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-emerald-400 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </header>
  );
};
