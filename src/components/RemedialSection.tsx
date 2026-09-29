import React, { useState } from 'react';
import { TopicCategory, Question, UserAnswerValue } from '../types/exam';
import { REMEDIAL_QUESTION_BANK } from '../data/remedialQuestions';
import { 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  RotateCcw, 
  Award, 
  ArrowRight,
  BookOpen,
  Check,
  CheckSquare,
  Square
} from 'lucide-react';

interface RemedialSectionProps {
  weakestTopic: TopicCategory;
}

export const RemedialSection: React.FC<RemedialSectionProps> = ({ weakestTopic }) => {
  const [selectedTopic, setSelectedTopic] = useState<TopicCategory>(weakestTopic);
  const questions = REMEDIAL_QUESTION_BANK[selectedTopic] || [];
  
  const [answers, setAnswers] = useState<Record<number, UserAnswerValue>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Available topics for remedial selection
  const topics: TopicCategory[] = [
    'Tanda Petik',
    'Kata Serapan',
    'Skimming & Scanning',
    'Teks Prosedur',
    'Presentasi Bisnis',
    'Biografi'
  ];

  const handleSelectPGOption = (questionId: number, key: 'A' | 'B' | 'C' | 'D' | 'E') => {
    if (submitted) return;
    setAnswers(prev => ({
      ...prev,
      [questionId]: { type: 'pg', selected: key }
    }));
  };

  const handleTogglePGKompleks = (questionId: number, optionId: string) => {
    if (submitted) return;
    const current = answers[questionId]?.type === 'pg_kompleks' ? answers[questionId].selected : [];
    const updated = current.includes(optionId) 
      ? current.filter(id => id !== optionId) 
      : [...current, optionId];

    setAnswers(prev => ({
      ...prev,
      [questionId]: { type: 'pg_kompleks', selected: updated }
    }));
  };

  const handleSelectBenarSalah = (questionId: number, statementId: string, value: boolean) => {
    if (submitted) return;
    const current = answers[questionId]?.type === 'benar_salah' ? answers[questionId].selected : {};
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        type: 'benar_salah',
        selected: { ...current, [statementId]: value }
      }
    }));
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  // Grade remedial
  let correctCount = 0;
  if (submitted) {
    questions.forEach(q => {
      const userAns = answers[q.id];
      if (!userAns) return;

      if (q.type === 'pg' && userAns.type === 'pg') {
        if (userAns.selected === q.pgCorrectAnswer) correctCount++;
      } else if (q.type === 'pg_kompleks' && userAns.type === 'pg_kompleks') {
        const correct = q.pgKompleksCorrectAnswers || [];
        const hasWrong = userAns.selected.some(s => !correct.includes(s));
        const missing = correct.some(c => !userAns.selected.includes(c));
        if (!hasWrong && !missing) correctCount++;
      } else if (q.type === 'benar_salah' && userAns.type === 'benar_salah') {
        const stmts = q.statements || [];
        const allCorrect = stmts.every(s => userAns.selected[s.id] === s.correctAnswer);
        if (allCorrect) correctCount++;
      }
    });
  }

  const scorePercent = Math.round((correctCount / questions.length) * 100);

  return (
    <div className="bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <span className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
              <Sparkles className="w-5 h-5" />
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              5 Soal Remedial Interaktif
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Fokus penguatan khusus untuk materi yang paling perlu ditingkatkan.
          </p>
        </div>

        {/* Topic Selector Tabs */}
        <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          {topics.map(t => (
            <button
              key={t}
              onClick={() => {
                setSelectedTopic(t);
                handleReset();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedTopic === t
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {t} {t === weakestTopic && '★ Prioritas'}
            </button>
          ))}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {questions.map((q, idx) => {
          const userAns = answers[q.id];
          const isAnswered = !!userAns;

          return (
            <div 
              key={q.id}
              className={`p-5 rounded-xl border transition-all ${
                submitted 
                  ? 'bg-slate-950/70 border-slate-800'
                  : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-md border border-indigo-500/20">
                  Soal Remedial {idx + 1}/5
                </span>
                <span className="text-xs text-slate-400">
                  {q.contextTag}
                </span>
              </div>

              <p className="text-slate-100 text-sm sm:text-base font-medium mb-4 whitespace-pre-line leading-relaxed">
                {q.prompt}
              </p>

              {/* PG Options */}
              {q.type === 'pg' && q.pgOptions && (
                <div className="space-y-2">
                  {q.pgOptions.map(opt => {
                    const isSelected = userAns?.type === 'pg' && userAns.selected === opt.key;
                    const isKey = q.pgCorrectAnswer === opt.key;
                    
                    let optStyle = isSelected 
                      ? 'bg-indigo-600/20 border-indigo-500 text-white' 
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800';

                    if (submitted) {
                      if (isKey) {
                        optStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-medium';
                      } else if (isSelected && !isKey) {
                        optStyle = 'bg-rose-500/20 border-rose-500 text-rose-200';
                      } else {
                        optStyle = 'bg-slate-900/50 border-slate-800/50 text-slate-500';
                      }
                    }

                    return (
                      <button
                        key={opt.key}
                        disabled={submitted}
                        onClick={() => handleSelectPGOption(q.id, opt.key)}
                        className={`w-full text-left p-3 rounded-xl border text-sm flex items-start space-x-3 transition-all ${optStyle} ${submitted ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        <span className="font-bold shrink-0">{opt.key}.</span>
                        <span className="flex-1">{opt.text}</span>
                        {submitted && isKey && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        )}
                        {submitted && isSelected && !isKey && (
                          <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* PG Kompleks Options */}
              {q.type === 'pg_kompleks' && q.pgKompleksOptions && (
                <div className="space-y-2">
                  {q.pgKompleksOptions.map(opt => {
                    const isSelected = userAns?.type === 'pg_kompleks' && userAns.selected.includes(opt.id);
                    const isCorrect = q.pgKompleksCorrectAnswers?.includes(opt.id);

                    let optStyle = isSelected
                      ? 'bg-indigo-600/20 border-indigo-500 text-white'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800';

                    if (submitted) {
                      if (isCorrect) {
                        optStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-200';
                      } else if (isSelected && !isCorrect) {
                        optStyle = 'bg-rose-500/20 border-rose-500 text-rose-200';
                      } else {
                        optStyle = 'bg-slate-900/50 border-slate-800/50 text-slate-500';
                      }
                    }

                    return (
                      <button
                        key={opt.id}
                        disabled={submitted}
                        onClick={() => handleTogglePGKompleks(q.id, opt.id)}
                        className={`w-full text-left p-3 rounded-xl border text-sm flex items-start space-x-3 transition-all ${optStyle} ${submitted ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        <span className="shrink-0 mt-0.5">
                          {isSelected ? (
                            <CheckSquare className="w-4 h-4 text-indigo-400" />
                          ) : (
                            <Square className="w-4 h-4 text-slate-500" />
                          )}
                        </span>
                        <span className="flex-1">{opt.text}</span>
                        {submitted && isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Benar / Salah Rows */}
              {q.type === 'benar_salah' && q.statements && (
                <div className="space-y-2.5">
                  {q.statements.map((st, sIdx) => {
                    const val = userAns?.type === 'benar_salah' ? userAns.selected[st.id] : null;
                    const isRight = submitted && val === st.correctAnswer;

                    return (
                      <div 
                        key={st.id} 
                        className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                          submitted 
                            ? isRight ? 'bg-emerald-950/20 border-emerald-500/30' : 'bg-rose-950/20 border-rose-500/30'
                            : 'bg-slate-900/60 border-slate-800'
                        }`}
                      >
                        <div className="flex items-start space-x-2 text-sm text-slate-200">
                          <span className="text-slate-400 font-bold shrink-0">{sIdx + 1}.</span>
                          <span>{st.statement}</span>
                        </div>

                        <div className="flex items-center space-x-2 shrink-0 self-end sm:self-center">
                          <button
                            disabled={submitted}
                            onClick={() => handleSelectBenarSalah(q.id, st.id, true)}
                            className={`px-3 py-1 rounded-lg text-xs font-bold border transition-all ${
                              val === true 
                                ? 'bg-emerald-600 border-emerald-500 text-white' 
                                : 'bg-slate-800 border-slate-700 text-slate-300'
                            }`}
                          >
                            BENAR
                          </button>
                          <button
                            disabled={submitted}
                            onClick={() => handleSelectBenarSalah(q.id, st.id, false)}
                            className={`px-3 py-1 rounded-lg text-xs font-bold border transition-all ${
                              val === false 
                                ? 'bg-rose-600 border-rose-500 text-white' 
                                : 'bg-slate-800 border-slate-700 text-slate-300'
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

              {/* Explanation after submission */}
              {submitted && (
                <div className="mt-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
                  <div className="font-semibold text-indigo-300 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    <span>Pembahasan Remedial: {q.explanation.coreConcept}</span>
                  </div>
                  <p className="leading-relaxed text-slate-300">{q.explanation.analysis}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Result Bar */}
      <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {submitted ? (
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center font-bold text-lg text-indigo-400">
              {scorePercent}%
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                Hasil Remedial: {correctCount} dari 5 Benar
              </p>
              <p className="text-xs text-slate-400">
                {scorePercent >= 80 
                  ? 'Luar biasa! Pemahaman materi ini sekarang sudah sangat mantap.' 
                  : 'Bagus, pelajari catatan pembahasan di atas untuk menyempurnakan pemahamanmu.'}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-xs text-slate-400">
            Jawab 5 soal remedial di atas, lalu klik tombol periksa untuk melihat evaluasi instan.
          </p>
        )}

        <div className="flex items-center space-x-3">
          {submitted ? (
            <button
              onClick={handleReset}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Coba Lagi</span>
            </button>
          ) : (
            <button
              onClick={() => setSubmitted(true)}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/25 transition-all cursor-pointer"
            >
              <span>Periksa Jawaban Remedial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
