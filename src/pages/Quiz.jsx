import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCw, 
  Award, 
  ArrowRight, 
  ShieldAlert, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { quizQuestions } from '../data/quizQuestions';
import { CrimeTapeDivider } from '../components/CrimeTapeDivider';

export const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = quizQuestions[currentIndex];
  const totalQuestions = quizQuestions.length;

  const handleSelectOption = (optionIndex) => {
    if (selectedAnswers[currentIndex] !== undefined) return; // already answered
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex
    }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setIsCompleted(false);
  };

  // Calculate score
  const score = Object.keys(selectedAnswers).reduce((acc, qIdx) => {
    const q = quizQuestions[qIdx];
    return selectedAnswers[qIdx] === q.correctIndex ? acc + 1 : acc;
  }, 0);

  const percentage = Math.round((score / totalQuestions) * 100);

  // Badge tier based on score
  const getBadgeTier = () => {
    if (score >= 9) return { title: "Lead Forensic Investigator", color: "text-amber-400 border-amber-500", desc: "Supreme investigative acumen. You grasp criminological theory, historical precedent, and policy reform." };
    if (score >= 7) return { title: "Senior Detective Analyst", color: "text-red-400 border-red-500", desc: "Strong analytical grasp. You have a deep understanding of crime trends and societal causation." };
    if (score >= 5) return { title: "Field Investigator", color: "text-blue-400 border-blue-500", desc: "Promising grasp of key concepts. Review the case files and statistics to sharpen your analysis." };
    return { title: "Cadet in Training", color: "text-zinc-400 border-zinc-500", desc: "Good initial attempt. Revisit the Root Causes and Types of Crime chapters before retaking the assessment." };
  };

  const badge = getBadgeTier();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/60 text-red-400 font-mono text-xs uppercase tracking-widest">
          <HelpCircle className="w-3.5 h-3.5" />
          Investigative Knowledge Assessment
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Criminology & Society Quiz
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
          Test your mastery across sociological theories, landmark historical cases, empirical statistics, and criminal justice reforms.
        </p>
      </div>

      {!isCompleted ? (
        <div className="bg-[#11141c] border border-zinc-800 rounded-xl p-6 sm:p-8 shadow-2xl relative">
          {/* Top Progress Bar */}
          <div className="mb-6 space-y-2">
            <div className="flex items-center justify-between font-mono text-xs text-zinc-400">
              <span className="text-red-400 font-bold">
                Question {currentIndex + 1} of {totalQuestions}
              </span>
              <span>{Math.round(((currentIndex) / totalQuestions) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-zinc-900 rounded-full h-2 overflow-hidden border border-zinc-800">
              <motion.div
                className="bg-gradient-to-r from-red-600 to-amber-500 h-full"
                animate={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Category Tag */}
          <div className="mb-4">
            <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-zinc-900 text-amber-400 border border-zinc-800 uppercase tracking-wider">
              {currentQ.category}
            </span>
          </div>

          {/* Question Text */}
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mb-6 leading-snug">
            {currentQ.question}
          </h2>

          {/* Options List */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((option, optIdx) => {
              const isSelected = selectedAnswers[currentIndex] === optIdx;
              const hasAnswered = selectedAnswers[currentIndex] !== undefined;
              const isCorrect = optIdx === currentQ.correctIndex;

              let optionClasses = "bg-[#161a24] border-zinc-800 text-zinc-200 hover:bg-[#1e2330] hover:border-zinc-700";

              if (hasAnswered) {
                if (isCorrect) {
                  optionClasses = "bg-emerald-950/40 border-emerald-500 text-emerald-100 font-semibold shadow-md";
                } else if (isSelected && !isCorrect) {
                  optionClasses = "bg-red-950/40 border-red-500 text-red-200 shadow-md";
                } else {
                  optionClasses = "bg-zinc-900/40 border-zinc-800/60 text-zinc-500 opacity-60";
                }
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  disabled={hasAnswered}
                  className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-sans flex items-center justify-between gap-4 transition-all duration-200 ${optionClasses}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-black/40 border border-zinc-700 font-mono text-xs flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {hasAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {hasAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Instant Feedback Explanation Box */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mb-6"
              >
                <div
                  className={`p-4 rounded-lg border text-xs sm:text-sm leading-relaxed ${
                    selectedAnswers[currentIndex] === currentQ.correctIndex
                      ? 'bg-emerald-950/30 border-emerald-800 text-emerald-200'
                      : 'bg-red-950/30 border-red-800 text-red-200'
                  }`}
                >
                  <div className="font-mono text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    {selectedAnswers[currentIndex] === currentQ.correctIndex ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Correct Assessment
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-red-400" /> Incorrect Evaluation
                      </>
                    )}
                  </div>
                  <p className="text-zinc-300 font-sans">{currentQ.explanation}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Action Button */}
          {selectedAnswers[currentIndex] !== undefined && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-end pt-2 border-t border-zinc-800/80"
            >
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-mono text-xs uppercase font-bold tracking-wider transition-colors shadow-lg shadow-red-900/30"
              >
                <span>{currentIndex === totalQuestions - 1 ? 'Calculate Clearance Score' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </div>
      ) : (
        /* RESULTS SCREEN */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#11141c] border-2 border-red-900/60 rounded-xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Rubber Stamp */}
          <div className="inline-block border-2 border-amber-500/80 text-amber-400 font-mono text-xs uppercase px-4 py-1 tracking-widest font-bold mb-6 rounded">
            OFFICIAL EVALUATION RECORD
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
            Investigation Debriefing Complete
          </h2>
          <p className="text-zinc-400 text-sm mb-8">
            Here is your final performance assessment and investigative rating.
          </p>

          {/* Score Circle / Badge */}
          <div className="max-w-sm mx-auto bg-black/50 border border-zinc-800 rounded-2xl p-6 mb-8">
            <div className="text-6xl font-black font-serif text-white mb-2 tracking-tight">
              {score} <span className="text-2xl text-zinc-500 font-sans">/ {totalQuestions}</span>
            </div>
            <div className="font-mono text-sm text-amber-400 font-bold mb-4">
              {percentage}% Accuracy Rating
            </div>

            <div className={`p-4 rounded-xl border ${badge.color} bg-black/40`}>
              <div className="font-serif font-bold text-lg text-white flex items-center justify-center gap-2 mb-1">
                <Award className="w-5 h-5 text-amber-400" />
                {badge.title}
              </div>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                {badge.desc}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleRetry}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-mono text-xs uppercase font-bold tracking-wider transition-all w-full sm:w-auto"
            >
              <RotateCw className="w-4 h-4" />
              <span>Retry Investigation</span>
            </button>

            <a
              href="#review-answers"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-mono text-xs uppercase font-bold tracking-wider transition-all shadow-lg shadow-red-950/40 w-full sm:w-auto"
            >
              <BookOpen className="w-4 h-4" />
              <span>Review Answer Log</span>
            </a>
          </div>

          {/* Answer Review Section */}
          <div id="review-answers" className="mt-12 text-left border-t border-zinc-800 pt-8 space-y-4">
            <h3 className="font-serif text-xl font-bold text-white mb-4">
              Evidence Log & Answer Explanations
            </h3>
            <div className="space-y-4">
              {quizQuestions.map((q, idx) => {
                const userAns = selectedAnswers[idx];
                const isCorrect = userAns === q.correctIndex;
                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-lg border text-xs sm:text-sm ${
                      isCorrect
                        ? 'bg-emerald-950/20 border-emerald-900/50'
                        : 'bg-red-950/20 border-red-900/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-zinc-400">
                        Q{idx + 1}. {q.category}
                      </span>
                      <span className={`font-mono text-xs font-bold ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                        {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                      </span>
                    </div>
                    <p className="font-medium text-white mb-2">{q.question}</p>
                    <div className="font-mono text-xs text-zinc-400 mb-2">
                      <span className="text-zinc-500">Correct Answer:</span> {q.options[q.correctIndex]}
                    </div>
                    <p className="text-xs text-zinc-300 italic font-sans">{q.explanation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}

      {/* Crime Scene Tape Divider */}
      <CrimeTapeDivider text="DEBRIEFING COMPLETE // AP ENGLISH CAPSTONE // FORENSIC CREDENTIALS //" tilt={1} />
    </div>
  );
};
