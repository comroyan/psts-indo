import { 
  Question, 
  UserAnswerValue, 
  QuestionResult, 
  TopicCategory, 
  TopicEvaluation, 
  ExamReport 
} from '../types/exam';
import { STUDY_GUIDES } from '../data/studyNotes';

export function evaluateQuestionAnswer(
  question: Question, 
  userAnswer: UserAnswerValue | null
): { status: 'correct' | 'wrong' | 'unanswered'; scoreGained: number } {
  if (!userAnswer) {
    return { status: 'unanswered', scoreGained: 0 };
  }

  if (question.type === 'pg') {
    if (userAnswer.type !== 'pg' || !userAnswer.selected) {
      return { status: 'unanswered', scoreGained: 0 };
    }
    const isCorrect = userAnswer.selected === question.pgCorrectAnswer;
    return {
      status: isCorrect ? 'correct' : 'wrong',
      scoreGained: isCorrect ? 1 : 0
    };
  }

  if (question.type === 'pg_kompleks') {
    if (userAnswer.type !== 'pg_kompleks' || !userAnswer.selected || userAnswer.selected.length === 0) {
      return { status: 'unanswered', scoreGained: 0 };
    }
    const correctAnswers = question.pgKompleksCorrectAnswers || [];
    const selected = userAnswer.selected;

    // Check if exactly matches
    const hasWrongPicks = selected.some(s => !correctAnswers.includes(s));
    const missingCorrect = correctAnswers.some(c => !selected.includes(c));

    if (!hasWrongPicks && !missingCorrect) {
      return { status: 'correct', scoreGained: 1 };
    } else if (!hasWrongPicks && selected.length > 0) {
      // Partial credit for partial correct with 0 mistakes
      const partialScore = selected.length / correctAnswers.length;
      return { 
        status: partialScore >= 0.6 ? 'correct' : 'wrong', 
        scoreGained: Math.round(partialScore * 100) / 100 
      };
    } else {
      return { status: 'wrong', scoreGained: 0 };
    }
  }

  if (question.type === 'benar_salah') {
    if (userAnswer.type !== 'benar_salah' || !userAnswer.selected) {
      return { status: 'unanswered', scoreGained: 0 };
    }
    const statements = question.statements || [];
    const answers = userAnswer.selected;
    
    // Check if at least one answered
    const answeredKeys = Object.keys(answers).filter(k => answers[k] !== null);
    if (answeredKeys.length === 0) {
      return { status: 'unanswered', scoreGained: 0 };
    }

    let correctCount = 0;
    for (const st of statements) {
      if (answers[st.id] === st.correctAnswer) {
        correctCount++;
      }
    }

    const ratio = statements.length > 0 ? correctCount / statements.length : 0;
    const isPass = ratio >= 0.66;
    return {
      status: isPass ? 'correct' : 'wrong',
      scoreGained: Math.round(ratio * 100) / 100
    };
  }

  return { status: 'unanswered', scoreGained: 0 };
}

export function generateExamReport(
  questions: Question[],
  userAnswers: Record<number, UserAnswerValue>,
  timeSpentSeconds: number
): ExamReport {
  const results: QuestionResult[] = [];
  let totalScoreGained = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;
  const wrongQuestionNumbers: number[] = [];

  const topicTotals: Record<TopicCategory, { total: number; correct: number; wrong: number; unanswered: number; scoreGained: number }> = {
    'Biografi': { total: 0, correct: 0, wrong: 0, unanswered: 0, scoreGained: 0 },
    'Skimming & Scanning': { total: 0, correct: 0, wrong: 0, unanswered: 0, scoreGained: 0 },
    'Kata Serapan': { total: 0, correct: 0, wrong: 0, unanswered: 0, scoreGained: 0 },
    'Tanda Petik': { total: 0, correct: 0, wrong: 0, unanswered: 0, scoreGained: 0 },
    'Teks Prosedur': { total: 0, correct: 0, wrong: 0, unanswered: 0, scoreGained: 0 },
    'Presentasi Bisnis': { total: 0, correct: 0, wrong: 0, unanswered: 0, scoreGained: 0 }
  };

  questions.forEach(q => {
    const ans = userAnswers[q.id] || null;
    const { status, scoreGained } = evaluateQuestionAnswer(q, ans);

    results.push({
      questionNumber: q.number,
      question: q,
      userAnswer: ans,
      status,
      scoreGained
    });

    totalScoreGained += scoreGained;
    topicTotals[q.topic].total += 1;
    topicTotals[q.topic].scoreGained += scoreGained;

    if (status === 'correct') {
      correctCount++;
      topicTotals[q.topic].correct += 1;
    } else if (status === 'wrong') {
      wrongCount++;
      topicTotals[q.topic].wrong += 1;
      wrongQuestionNumbers.push(q.number);
    } else {
      unansweredCount++;
      topicTotals[q.topic].unanswered += 1;
      wrongQuestionNumbers.push(q.number); // Needs review as well
    }
  });

  const finalScore = Math.min(100, Math.max(0, Math.round((totalScoreGained / questions.length) * 100)));
  const accuracyPercentage = Math.round((correctCount / questions.length) * 100);

  // Evaluate each topic
  const topicEvaluations: Record<TopicCategory, TopicEvaluation> = {} as any;
  const topics: TopicCategory[] = [
    'Biografi',
    'Skimming & Scanning',
    'Kata Serapan',
    'Tanda Petik',
    'Teks Prosedur',
    'Presentasi Bisnis'
  ];

  topics.forEach(t => {
    const data = topicTotals[t];
    const percentage = data.total > 0 ? Math.round((data.scoreGained / data.total) * 100) : 0;
    
    let masteryLevel: 'Mahir' | 'Cakap' | 'Dasar' | 'Perlu Bimbingan' = 'Perlu Bimbingan';
    let summaryInsight = '';

    if (percentage >= 85) {
      masteryLevel = 'Mahir';
      summaryInsight = `Penguasaan materi ${t} sangat mantap. Penalaran konsep dan pemilahan kaidah sudah sangat presisi.`;
    } else if (percentage >= 70) {
      masteryLevel = 'Cakap';
      summaryInsight = `Memahami konsep pokok materi ${t} dengan baik, perlu sedikit ketelitian pada pengecoh soal HOTS bertingkat.`;
    } else if (percentage >= 50) {
      masteryLevel = 'Dasar';
      summaryInsight = `Pemahaman dasar materi ${t} sudah ada, namun masih sering terkecoh pada kaidah ejaan khusus dan aplikasi wacana.`;
    } else {
      masteryLevel = 'Perlu Bimbingan';
      summaryInsight = `Materi ${t} memerlukan latihan intensif dan pengulangan konsep dasar sebelum pelaksanaan PSTS sesungguhnya.`;
    }

    topicEvaluations[t] = {
      topic: t,
      total: data.total,
      correct: data.correct,
      wrong: data.wrong,
      unanswered: data.unanswered,
      percentage,
      masteryLevel,
      summaryInsight
    };
  });

  // Smart Error Patterns Detection
  const errorPatterns: string[] = [];

  if (topicEvaluations['Tanda Petik'].percentage < 75) {
    errorPatterns.push(
      'Kerap tertukar antara fungsi Tanda Petik Tunggal (\'...\') untuk makna/terjemahan istilah asing dengan fungsi Tanda Petik Ganda ("...") untuk judul artikel atau kutipan langsung.'
    );
  }

  if (topicEvaluations['Kata Serapan'].percentage < 75) {
    errorPatterns.push(
      'Kesulitan mengidentifikasi proses serapan ADAPTASI ejaan (system -> sistem, quality -> kualitas) vs ADOPSI murni tanpa perubahan huruf (supermarket, data, internet), serta asal bahasa etimologis (Belanda vs Portugis vs Sanskerta).'
    );
  }

  if (topicEvaluations['Skimming & Scanning'].percentage < 80) {
    errorPatterns.push(
      'Kurang cermat memilih teknik membaca cepat: mengabaikan kata kunci numerik/istilah khusus saat scanning, atau terlalu terpaku membaca baris demi baris saat diminta skimming ide pokok.'
    );
  }

  if (topicEvaluations['Teks Prosedur'].percentage < 75) {
    errorPatterns.push(
      'Kelemahan dalam mendeteksi koherensi urutan kronologis langkah kerja (SOP) dan membedakan kalimat instruksi teknis (imperatif/verba material) dari kalimat opini komersial sumbang.'
    );
  }

  if (topicEvaluations['Presentasi Bisnis'].percentage < 80) {
    errorPatterns.push(
      'Perlu memperdalam etika presentasi bisnis, terutama respons transparan menghadapi kritik tajam dewan juri/investor serta pemahaman komponen pitch deck (TAM/SAM/SOM dan model bisnis).'
    );
  }

  if (topicEvaluations['Biografi'].percentage < 80) {
    errorPatterns.push(
      'Terkecoh dalam membedakan fakta objektif yang dapat diverifikasi dengan opini subjektif berlebihan penulis, serta mengenali letak refleksi filosofis pada bagian Reorientasi.'
    );
  }

  if (errorPatterns.length === 0) {
    errorPatterns.push(
      'Pola pengerjaan sangat konsisten dan analitis! Hampir seluruh jebakan materi EYD V dan penalaran wacana berhasil diuraikan dengan cemerlang.'
    );
  }

  // Build mandatory review notes sorted by lowest percentage
  const sortedTopics = [...topics].sort((a, b) => topicEvaluations[a].percentage - topicEvaluations[b].percentage);
  const mandatoryReviewNotes = sortedTopics.slice(0, 3).map(top => {
    const guide = STUDY_GUIDES[top];
    return {
      topic: top,
      title: guide.title,
      keyPoints: guide.keyPoints,
      exampleFix: guide.rulesAndFormulas[0] 
        ? `${guide.rulesAndFormulas[0].ruleTitle}: ${guide.rulesAndFormulas[0].goodExample}`
        : 'Pelajari kembali kaidah EYD V dan materi terkait.'
    };
  });

  return {
    score: finalScore,
    totalQuestions: questions.length,
    correctCount,
    wrongCount,
    unansweredCount,
    accuracyPercentage,
    timeSpentSeconds,
    topicEvaluations,
    questionResults: results,
    wrongQuestionNumbers,
    errorPatterns,
    mandatoryReviewNotes
  };
}
