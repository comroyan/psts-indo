/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { EXAM_QUESTIONS } from './data/questions';
import { UserAnswerValue, ExamReport } from './types/exam';
import { generateExamReport } from './utils/examEngine';
import { Header } from './components/Header';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuestionCard } from './components/QuestionCard';
import { QuestionNavModal } from './components/QuestionNavModal';
import { WarningDialog } from './components/WarningDialog';
import { ResultReport } from './components/ResultReport';

const TOTAL_TIME_SECONDS = 45 * 60; // 45 minutes

export default function App() {
  const [phase, setPhase] = useState<'welcome' | 'exam' | 'result'>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, UserAnswerValue>>({});
  const [doubtfulQuestionIds, setDoubtfulQuestionIds] = useState<Set<number>>(new Set());
  
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(TOTAL_TIME_SECONDS);
  const [isNavGridOpen, setIsNavGridOpen] = useState<boolean>(false);
  const [warningType, setWarningType] = useState<'hint_blocked' | 'confirm_finish' | null>(null);
  const [examReport, setExamReport] = useState<ExamReport | null>(null);

  // Timer reference
  const timerRef = useRef<any>(null);

  // Start Exam Handler
  const handleStartExam = () => {
    setPhase('exam');
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setDoubtfulQuestionIds(new Set());
    setTimeRemainingSeconds(TOTAL_TIME_SECONDS);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Timer Effect
  useEffect(() => {
    if (phase === 'exam') {
      timerRef.current = setInterval(() => {
        setTimeRemainingSeconds(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase]);

  // Answer Change for Current Question
  const handleAnswerChange = (answer: UserAnswerValue) => {
    const currentQ = EXAM_QUESTIONS[currentQuestionIndex];
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: answer
    }));
  };

  // Toggle Doubtful for Current Question
  const handleToggleDoubtful = () => {
    const currentQ = EXAM_QUESTIONS[currentQuestionIndex];
    setDoubtfulQuestionIds(prev => {
      const next = new Set(prev);
      if (next.has(currentQ.id)) {
        next.delete(currentQ.id);
      } else {
        next.add(currentQ.id);
      }
      return next;
    });
  };

  // Move to Next Question
  const handleNext = () => {
    if (currentQuestionIndex < EXAM_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Last question reached
      setWarningType('confirm_finish');
    }
  };

  // Skip Current Question
  const handleSkip = () => {
    const currentQ = EXAM_QUESTIONS[currentQuestionIndex];
    // Explicitly set or leave empty if skipped
    if (!userAnswers[currentQ.id]) {
      // Unrecorded
    }
    if (currentQuestionIndex < EXAM_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setWarningType('confirm_finish');
    }
  };

  // Finalize & Calculate Score
  const finalizeExam = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    const timeSpent = TOTAL_TIME_SECONDS - timeRemainingSeconds;
    const report = generateExamReport(EXAM_QUESTIONS, userAnswers, timeSpent);
    setExamReport(report);
    setPhase('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAutoSubmit = () => {
    finalizeExam();
  };

  const handleRestartExam = () => {
    setPhase('welcome');
    setExamReport(null);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setDoubtfulQuestionIds(new Set());
    setTimeRemainingSeconds(TOTAL_TIME_SECONDS);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Stats calculation
  const currentQ = EXAM_QUESTIONS[currentQuestionIndex];
  const isCurrentDoubtful = doubtfulQuestionIds.has(currentQ?.id);
  
  const answeredCount = Object.keys(userAnswers).filter(k => {
    const ans = userAnswers[Number(k)];
    if (!ans) return false;
    if (ans.type === 'pg') return ans.selected !== null;
    if (ans.type === 'pg_kompleks') return ans.selected.length > 0;
    if (ans.type === 'benar_salah') {
      const keys = Object.keys(ans.selected);
      return keys.length > 0 && keys.some(id => ans.selected[id] !== null);
    }
    return false;
  }).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* EXAM PHASE HEADER */}
      {phase === 'exam' && (
        <Header
          currentQuestionNumber={currentQuestionIndex + 1}
          totalQuestions={EXAM_QUESTIONS.length}
          timeRemainingSeconds={timeRemainingSeconds}
          isDoubtful={isCurrentDoubtful}
          onToggleDoubtful={handleToggleDoubtful}
          onOpenNavGrid={() => setIsNavGridOpen(true)}
          onRequestFinish={() => setWarningType('confirm_finish')}
          answeredCount={answeredCount}
        />
      )}

      {/* MAIN CONTAINER */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
        
        {/* PHASE 1: WELCOME SCREEN */}
        {phase === 'welcome' && (
          <WelcomeScreen onStartExam={handleStartExam} />
        )}

        {/* PHASE 2: EXAM IN PROGRESS (1 QUESTION AT A TIME) */}
        {phase === 'exam' && currentQ && (
          <QuestionCard
            question={currentQ}
            totalQuestions={EXAM_QUESTIONS.length}
            userAnswer={userAnswers[currentQ.id] || null}
            onAnswerChange={handleAnswerChange}
            onNext={handleNext}
            onSkip={handleSkip}
            onAskHelp={() => setWarningType('hint_blocked')}
            isLastQuestion={currentQuestionIndex === EXAM_QUESTIONS.length - 1}
          />
        )}

        {/* PHASE 3: RESULT & COMPREHENSIVE DIAGNOSTIC REPORT */}
        {phase === 'result' && examReport && (
          <ResultReport
            report={examReport}
            onRestartExam={handleRestartExam}
          />
        )}

      </main>

      {/* QUESTION NAVIGATION MODAL */}
      <QuestionNavModal
        isOpen={isNavGridOpen}
        onClose={() => setIsNavGridOpen(false)}
        questions={EXAM_QUESTIONS}
        currentQuestionIndex={currentQuestionIndex}
        userAnswers={userAnswers}
        doubtfulQuestionIds={doubtfulQuestionIds}
        onSelectQuestion={(idx) => {
          setCurrentQuestionIndex(idx);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onRequestFinish={() => setWarningType('confirm_finish')}
      />

      {/* WARNING / CONFIRMATION MODAL */}
      <WarningDialog
        type={warningType}
        onClose={() => setWarningType(null)}
        onConfirmFinish={finalizeExam}
        stats={{
          total: EXAM_QUESTIONS.length,
          answered: answeredCount,
          doubtful: doubtfulQuestionIds.size,
          unanswered: EXAM_QUESTIONS.length - answeredCount
        }}
      />

      {/* FOOTER */}
      <footer className="py-4 border-t border-slate-900 bg-slate-950/80 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            Simulasi PSTS Bahasa Indonesia Kelas XII SMA/MA • Kurikulum Merdeka
          </p>
          <p className="text-slate-600">
            Materi: Teks Biografi, Skimming/Scanning, Kata Serapan, Tanda Petik EYD V, Teks Prosedur & Presentasi Bisnis
          </p>
        </div>
      </footer>

    </div>
  );
}
