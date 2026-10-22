import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { editorialQuiz } from '../data/quizQuestions';

export const SectionQuiz = () => {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);

  const current = editorialQuiz[index];
  const hasAnswered = answers[index] !== undefined;

  const handleSelect = (optIdx) => {
    if (hasAnswered) return;
    setAnswers((prev) => ({ ...prev, [index]: optIdx }));
  };

  const handleNext = () => {
    if (index < editorialQuiz.length - 1) {
      setIndex((i) => i + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setIndex(0);
    setAnswers({});
    setCompleted(false);
  };

  const score = Object.keys(answers).reduce((acc, qIdx) => {
    return answers[qIdx] === editorialQuiz[qIdx].correct ? acc + 1 : acc;
  }, 0);

  return (
    <section id="quiz" className="relative py-24 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#F4F0E8] paper-grain border-b border-[#111]/15">
      <div className="max-w-4xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-baseline justify-between border-b border-[#111]/20 pb-4 mb-16">
          <span className="font-serif text-5xl sm:text-7xl text-[#111]/15 font-normal select-none">
            07
          </span>
          <span className="text-xs uppercase tracking-widest text-[#111]/60 font-sans font-medium">
            The Investigative Inquiry
          </span>
        </div>

        {!completed ? (
          <div className="space-y-10">
            {/* Question Counter */}
            <div className="flex items-baseline justify-between text-xs uppercase tracking-widest text-[#7A7873] font-sans">
              <span>Question {index + 1} of {editorialQuiz.length}</span>
              <span>{Math.round(((index + 1) / editorialQuiz.length) * 100)}% Through Inquiry</span>
            </div>

            {/* Question Text (Large Type) */}
            <h3 className="font-serif text-[clamp(1.75rem,3.8vw,3rem)] leading-[1.1] text-[#111] font-normal">
              {current.question}
            </h3>

            {/* Options List */}
            <div className="space-y-4 pt-4 border-t border-[#111]/15">
              {current.options.map((opt, optIdx) => {
                const isSelected = answers[index] === optIdx;
                const isCorrect = optIdx === current.correct;

                let stateClasses = "hover:bg-[#EAE5DB]/50 text-[#111] border-[#111]/20";
                if (hasAnswered) {
                  if (isCorrect) {
                    stateClasses = "bg-[#EAE5DB] border-[#111] font-medium text-[#111]";
                  } else if (isSelected && !isCorrect) {
                    stateClasses = "bg-[#B3261E]/10 border-[#B3261E] text-[#B3261E]";
                  } else {
                    stateClasses = "opacity-40 border-[#111]/10 text-[#7A7873]";
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelect(optIdx)}
                    disabled={hasAnswered}
                    className={`w-full text-left p-5 border transition-colors text-base sm:text-lg font-sans flex items-start gap-4 ${stateClasses}`}
                  >
                    <span className="font-serif text-xs text-[#7A7873] mt-0.5">
                      {String.fromCharCode(65 + optIdx)}.
                    </span>
                    <span className="flex-1 leading-snug">{opt}</span>
                    {hasAnswered && isCorrect && (
                      <span className="text-xs uppercase font-sans font-bold text-[#111]">✓ Documented</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Immediate Explanation */}
            <AnimatePresence>
              {hasAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#EAE5DB]/60 p-6 border-l-2 border-[#111] space-y-2"
                >
                  <span className="text-xs uppercase tracking-widest text-[#B3261E] font-sans font-bold block">
                    Investigative Context:
                  </span>
                  <p className="text-sm sm:text-base text-[#3A3A38] font-sans leading-relaxed">
                    {current.annotation}
                  </p>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 bg-[#111] text-[#F4F0E8] text-xs uppercase tracking-widest font-sans font-medium hover:bg-[#B3261E] transition-colors"
                    >
                      {index === editorialQuiz.length - 1 ? "Complete Inquiry →" : "Next Question →"}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          /* Completed Minimal Screen */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8 border-t border-[#111] pt-8"
          >
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#B3261E] font-sans font-semibold">
                Inquiry Completed
              </span>
              <h3 className="font-serif text-4xl sm:text-5xl text-[#111]">
                You identified {score} of {editorialQuiz.length} structural realities.
              </h3>
            </div>

            <p className="text-lg text-[#3A3A38] font-sans max-w-prose leading-relaxed">
              Criminology is not the study of monsters; it is the study of human friction. Moving beyond sensationalism requires testing our assumptions against documented historical data.
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-3 border border-[#111] text-xs uppercase tracking-widest font-sans text-[#111] hover:bg-[#111] hover:text-[#F4F0E8] transition-colors"
              >
                Retake Inquiry
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
