import React from 'react';
import { AlertTriangle, ShieldAlert, Check, X } from 'lucide-react';

interface WarningDialogProps {
  type: 'hint_blocked' | 'confirm_finish' | null;
  onClose: () => void;
  onConfirmFinish?: () => void;
  stats?: {
    total: number;
    answered: number;
    doubtful: number;
    unanswered: number;
  };
}

export const WarningDialog: React.FC<WarningDialogProps> = ({
  type,
  onClose,
  onConfirmFinish,
  stats
}) => {
  if (!type) return null;

  if (type === 'hint_blocked') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
        <div className="bg-slate-900 border border-amber-500/40 rounded-2xl w-full max-w-md p-6 shadow-2xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-4 text-amber-400">
            <ShieldAlert className="w-7 h-7" />
          </div>
          
          <h3 className="text-lg font-bold text-white mb-2">
            Akses Bantuan Ditutup
          </h3>
          
          <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/20 text-amber-200 text-sm font-medium mb-6">
            "Masih dalam mode ulangan. Jawab sesuai pemahamanmu."
          </div>
          
          <p className="text-xs text-slate-400 mb-6 leading-relaxed">
            Kunci jawaban, analisis, dan pembahasan komprehensif akan ditampilkan secara lengkap setelah seluruh 30 soal selesai dijawab.
          </p>

          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-indigo-600/20"
          >
            Mengerti, Lanjutkan Ulangan
          </button>
        </div>
      </div>
    );
  }

  if (type === 'confirm_finish') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mx-auto mb-4 text-rose-400">
            <AlertTriangle className="w-7 h-7" />
          </div>
          
          <h3 className="text-lg font-bold text-white text-center mb-1">
            Konfirmasi Selesaikan Ujian
          </h3>
          <p className="text-xs text-slate-400 text-center mb-5">
            Apakah kamu yakin ingin mengakhiri sesi ulangan ini sekarang?
          </p>

          {stats && (
            <div className="grid grid-cols-3 gap-2 p-3 bg-slate-950/60 border border-slate-800 rounded-xl mb-6 text-center">
              <div>
                <p className="text-xs text-slate-400">Terjawab</p>
                <p className="text-base font-bold text-emerald-400">{stats.answered}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Ragu-ragu</p>
                <p className="text-base font-bold text-amber-400">{stats.doubtful}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Belum Diisi</p>
                <p className="text-base font-bold text-rose-400">{stats.unanswered}</p>
              </div>
            </div>
          )}

          {stats && stats.unanswered > 0 && (
            <p className="text-xs text-amber-300/90 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20 mb-5">
              Perhatian: Masih ada {stats.unanswered} soal yang belum dijawab dan akan dihitung sebagai salah/kosong.
            </p>
          )}

          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 px-4 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium transition-colors"
            >
              Batal, Kembali
            </button>
            <button
              onClick={() => {
                onClose();
                if (onConfirmFinish) onConfirmFinish();
              }}
              className="flex-1 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-sm font-bold transition-colors shadow-lg shadow-rose-900/30"
            >
              Ya, Selesaikan
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
