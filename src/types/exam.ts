export type TopicCategory = 
  | 'Biografi'
  | 'Skimming & Scanning'
  | 'Kata Serapan'
  | 'Tanda Petik'
  | 'Teks Prosedur'
  | 'Presentasi Bisnis';

export type QuestionType = 'pg' | 'pg_kompleks' | 'benar_salah';
export type DifficultyLevel = 'Sedang' | 'Sedang-Sulit' | 'Sulit';

export interface PGOption {
  key: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
}

export interface PGKompleksOption {
  id: string;
  text: string;
}

export interface StatementItem {
  id: string;
  statement: string;
  correctAnswer: boolean; // true = Benar, false = Salah
}

export interface Question {
  id: number;
  number: number;
  topic: TopicCategory;
  type: QuestionType;
  difficulty: DifficultyLevel;
  contextTag?: string;
  readingPassage?: {
    title: string;
    text: string;
    source?: string;
  };
  prompt: string;
  hintForbidden?: string;
  // Options depending on type
  pgOptions?: PGOption[];
  pgCorrectAnswer?: 'A' | 'B' | 'C' | 'D' | 'E';
  
  pgKompleksOptions?: PGKompleksOption[];
  pgKompleksCorrectAnswers?: string[]; // array of ids
  
  statements?: StatementItem[];
  
  explanation: {
    coreConcept: string;
    analysis: string;
    distractorAnalysis?: string;
    eydRuleNote?: string;
  };
}

export type UserAnswerValue = 
  | { type: 'pg'; selected: 'A' | 'B' | 'C' | 'D' | 'E' | null }
  | { type: 'pg_kompleks'; selected: string[] }
  | { type: 'benar_salah'; selected: Record<string, boolean | null> };

export interface QuestionResult {
  questionNumber: number;
  question: Question;
  userAnswer: UserAnswerValue | null;
  status: 'correct' | 'wrong' | 'unanswered';
  scoreGained: number; // 0 to 1
}

export interface TopicEvaluation {
  topic: TopicCategory;
  total: number;
  correct: number;
  wrong: number;
  unanswered: number;
  percentage: number;
  masteryLevel: 'Mahir' | 'Cakap' | 'Dasar' | 'Perlu Bimbingan';
  summaryInsight: string;
}

export interface ExamReport {
  score: number; // out of 100
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  unansweredCount: number;
  accuracyPercentage: number;
  timeSpentSeconds: number;
  topicEvaluations: Record<TopicCategory, TopicEvaluation>;
  questionResults: QuestionResult[];
  wrongQuestionNumbers: number[];
  errorPatterns: string[];
  mandatoryReviewNotes: {
    topic: TopicCategory;
    title: string;
    keyPoints: string[];
    exampleFix: string;
  }[];
}
