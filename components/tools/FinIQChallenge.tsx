
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { QuizDifficulty, QuizMode, QuizQuestion, QuizResult, Page } from '../../types';
import { generateQuizQuestions } from '../../actions/geminiActions';
import { IconTrophy, IconClock, IconBrain, IconTarget, IconSparkles, IconParty, IconChecklist, IconX, IconArrowUp } from '../../components/Icons';

interface FinIQChallengeProps {
  onBack: () => void;
  navigateTo?: (path: string, params?: any) => void;
}

// --- Levenshtein Distance for Fuzzy Matching ---
// Returns the number of edits (inserts, deletes, substitutions) required to change 'a' to 'b'
const levenshteinDistance = (a: string, b: string): number => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];

  // Increment along the first column of each row
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  // Increment each column in the first row
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          Math.min(
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1  // deletion
          )
        );
      }
    }
  }

  return matrix[b.length][a.length];
};

// Returns true if the distance is within an acceptable threshold based on word length
const isFuzzyMatch = (input: string, target: string): boolean => {
  const normalizedInput = input.trim().toLowerCase();
  const normalizedTarget = target.trim().toLowerCase();

  if (normalizedInput === normalizedTarget) return true;

  const distance = levenshteinDistance(normalizedInput, normalizedTarget);

  // Threshold logic:
  // Length <= 4: Exact match required (dist 0)
  // Length 5-8: Allow 1 error
  // Length > 8: Allow 2 errors
  const threshold = normalizedTarget.length <= 4 ? 0 : normalizedTarget.length <= 8 ? 1 : 2;

  return distance <= threshold;
};


// --- Circular Timer Component ---
const CircularTimer: React.FC<{ time: number; maxTime?: number; mode: QuizMode }> = ({ time, maxTime, mode }) => {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  let progress = 1;
  // For timed modes, calculate remaining percentage
  if (mode !== 'Relaxed' && maxTime) {
    progress = Math.max(0, time / maxTime);
  }

  // Calculate stroke offset (0 = full circle, circumference = empty)
  // We want it to deplete, so we start at 0 offset (full) and go to circumference
  const strokeDashoffset = circumference - (progress * circumference);

  // Color logic
  let colorClass = "text-blue-600";
  let strokeClass = "stroke-blue-600";

  if (mode !== 'Relaxed') {
    if (progress < 0.2) {
      colorClass = "text-red-600";
      strokeClass = "stroke-red-600";
    } else if (progress < 0.5) {
      colorClass = "text-yellow-500";
      strokeClass = "stroke-yellow-500";
    } else {
      colorClass = "text-green-500";
      strokeClass = "stroke-green-500";
    }
  } else {
    strokeClass = "stroke-slate-300";
    colorClass = "text-slate-600";
  }

  // Format time MM:SS
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="relative flex items-center justify-center w-16 h-16">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 50 50">
        {/* Background Circle */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          className="text-slate-100"
        />
        {/* Progress Circle - Only for timed modes or static ring for relaxed */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={mode === 'Relaxed' ? 0 : strokeDashoffset}
          strokeLinecap="round"
          className={`transition-all duration-1000 ease-linear ${strokeClass}`}
        />
      </svg>
      <span className={`absolute text-xs font-bold font-mono ${colorClass}`}>
        {timeString}
      </span>
    </div>
  );
};

// --- Confetti Component ---
const Confetti: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    const colors = ['#FFC700', '#FF0000', '#2E3192', '#41BBC7'];

    for (let i = 0; i < 200; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 10 + 5,
        h: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 5 + 2,
        angle: Math.random() * 360,
        spin: Math.random() < 0.5 ? 1 : -1,
      });
    }

    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y += p.speed;
        p.angle += p.spin;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.angle * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();

        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
      });
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" />;
};

const FinIQChallenge: React.FC<FinIQChallengeProps> = ({ onBack, navigateTo }) => {
  const [gameState, setGameState] = useState<'SETUP' | 'LOADING' | 'PLAYING' | 'RESULTS'>('SETUP');
  const [difficulty, setDifficulty] = useState<QuizDifficulty>('Medium');
  const [mode, setMode] = useState<QuizMode>('Relaxed');

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<any>(null); // Holds current input
  const [results, setResults] = useState<QuizResult[]>([]);

  // Timer States
  const [timeLeft, setTimeLeft] = useState(0); // In seconds
  const [timeTaken, setTimeTaken] = useState(0); // For current question

  // Feedback States
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const [error, setError] = useState<string | null>(null);

  // Changed from NodeJS.Timeout to number for browser environment compatibility
  const timerRef = useRef<number | null>(null);

  // --- CONFETTI EFFECT ---
  useEffect(() => {
    if (gameState === 'RESULTS') {
      const score = results.filter(r => r.isCorrect).length;
      const percentage = (score / 10) * 100;
      if (percentage >= 60) {
        setShowConfetti(true);
        const timer = setTimeout(() => {
          setShowConfetti(false);
        }, 5000); // Disappear after 5 seconds
        return () => clearTimeout(timer);
      }
    }
  }, [gameState, results]);

  // --- SETUP LOGIC ---
  const handleStart = async () => {
    setGameState('LOADING');
    setError(null);
    try {
      const qs = await generateQuizQuestions(difficulty);
      setQuestions(qs);
      setGameState('PLAYING');
      resetQuestionState();

      // Initialize Timer based on mode
      if (mode === 'Speed Run') {
        // 5 minutes total
        setTimeLeft(300);
      } else if (mode === 'Blitz') {
        // 45 seconds per question
        setTimeLeft(45);
      } else {
        setTimeLeft(0); // Relaxed: Count up effectively
      }
    } catch (e) {
      setError('Failed to load questions. Please check your connection and try again.');
      setGameState('SETUP');
    }
  };

  // --- TIMER LOGIC ---
  useEffect(() => {
    if (gameState !== 'PLAYING') return;

    // If submitted, stop timer but don't clear it (to show time taken)
    if (isSubmitted) return;

    timerRef.current = window.setInterval(() => {
      setTimeTaken(prev => prev + 1);

      if (mode !== 'Relaxed') {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState, isSubmitted, mode]);

  const handleTimeUp = () => {
    if (mode === 'Speed Run') {
      // End entire quiz
      finishQuiz();
    } else if (mode === 'Blitz') {
      // Submit current question as wrong if not answered
      handleSubmit(true);
    }
  };

  const resetQuestionState = () => {
    setIsSubmitted(false);
    setIsCorrect(false);
    setUserAnswers(null);
    setTimeTaken(0);
    if (mode === 'Blitz') setTimeLeft(45);
  };

  // --- ANSWER HANDLING ---
  const currentQuestion = questions[currentQuestionIndex];

  const handleInputChange = (val: any) => {
    if (isSubmitted) return;
    setUserAnswers(val);
  };

  const handleCheckboxChange = (option: string) => {
    if (isSubmitted) return;
    const current = Array.isArray(userAnswers) ? [...userAnswers] : [];
    if (current.includes(option)) {
      handleInputChange(current.filter(i => i !== option));
    } else {
      handleInputChange([...current, option]);
    }
  };

  const validateAnswer = (question: QuizQuestion, answer: any): boolean => {
    if (!answer) return false;

    // Normalize types for validation as well
    const type = question.type?.toLowerCase().trim();

    switch (type) {
      case 'single_choice':
      case 'true_false':
      case 'truefalse':
        return String(answer) === String(question.correctAnswer);

      case 'multiple_choice':
        if (!Array.isArray(answer) || !Array.isArray(question.correctAnswer)) return false;
        if (answer.length !== question.correctAnswer.length) return false;
        const sortedAns = [...answer].sort();
        const sortedCorrect = [...(question.correctAnswer as string[])].sort();
        return sortedAns.every((val, index) => val === sortedCorrect[index]);

      case 'fill_in_blank':
      case 'short_answer':
      default:
        // Use fuzzy matching for text inputs
        const input = String(answer);
        const correct = String(question.correctAnswer);
        const keywords = question.acceptedKeywords || [];

        // Check main answer with fuzzy logic
        if (isFuzzyMatch(input, correct)) return true;

        // Check keywords with fuzzy logic
        return keywords.some(keyword => isFuzzyMatch(input, keyword));
    }
  };

  const handleSubmit = (forceTimeUp = false) => {
    if (isSubmitted && !forceTimeUp) return;

    // If forced by timer and no answer, treat as empty/wrong
    const answerToSubmit = forceTimeUp && !userAnswers ? (currentQuestion.type === 'multiple_choice' ? [] : '') : userAnswers;

    const correct = validateAnswer(currentQuestion, answerToSubmit);
    setIsCorrect(correct);
    setIsSubmitted(true);

    setResults(prev => [
      ...prev,
      {
        questionId: currentQuestion.id,
        userAnswer: answerToSubmit,
        isCorrect: correct,
        timeTaken: timeTaken
      }
    ]);

    if (timerRef.current) clearInterval(timerRef.current);

    // If Speed Run mode hits 0, we already called finishQuiz in handleTimeUp if it was the trigger.
    // But if user submits the LAST question manually, we need to finish.
    if (currentQuestionIndex === questions.length - 1 && mode !== 'Speed Run' && forceTimeUp) {
      setGameState('RESULTS');
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      resetQuestionState();
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setGameState('RESULTS');
  };

  // Helper to render a text input, used as default fallback
  const renderTextInput = (q: QuizQuestion) => (
    <div>
      <input
        type="text"
        value={Array.isArray(userAnswers) ? userAnswers.join(', ') : (userAnswers || '')}
        onChange={(e) => handleInputChange(e.target.value)}
        disabled={isSubmitted}
        placeholder="Type your answer here..."
        className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 ${isSubmitted
          ? isCorrect ? "border-green-500 bg-green-50 text-green-800" : "border-red-500 bg-red-50 text-red-800"
          : "border-slate-300 focus:ring-blue-500"
          }`}
      />
      {isSubmitted && !isCorrect && (
        <p className="mt-2 text-sm text-red-600">
          <span className="font-semibold">Correct Answer:</span> {String(q.correctAnswer)}
        </p>
      )}
    </div>
  );

  const renderInput = () => {
    const q = currentQuestion;
    if (!q) return null;

    const commonClasses = "w-full p-4 rounded-lg border transition-all text-left ";
    const getOptionClass = (opt: string, isSelected: boolean) => {
      if (isSubmitted) {
        const isActualCorrect = Array.isArray(q.correctAnswer)
          ? q.correctAnswer.includes(opt)
          : q.correctAnswer === opt;

        if (isActualCorrect) return "bg-green-100 border-green-500 text-green-800";
        if (isSelected && !isActualCorrect) return "bg-red-100 border-red-500 text-red-800";
        return "bg-slate-50 border-slate-200 opacity-50";
      }
      return isSelected
        ? "bg-blue-50 border-blue-500 text-blue-800 shadow-md"
        : "bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300";
    };

    const type = q.type?.toLowerCase().trim();

    // Handle True/False
    if (type === 'true_false' || type === 'truefalse') {
      // Default options if missing
      const options = (q.options && q.options.length > 0) ? q.options : ['True', 'False'];
      return (
        <div className="grid grid-cols-2 gap-4">
          {options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleInputChange(opt)}
              disabled={isSubmitted}
              className={`${commonClasses} text-center ${getOptionClass(opt, userAnswers === opt)}`}
            >
              <span className="font-semibold text-lg">{opt}</span>
            </button>
          ))}
        </div>
      );
    }

    // Handle Single Choice
    if (type === 'single_choice') {
      if (!q.options || q.options.length === 0) return renderTextInput(q); // Fallback
      return (
        <div className="space-y-3">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleInputChange(opt)}
              disabled={isSubmitted}
              className={commonClasses + getOptionClass(opt, userAnswers === opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      );
    }

    // Handle Multiple Choice
    if (type === 'multiple_choice') {
      if (!q.options || q.options.length === 0) return renderTextInput(q); // Fallback
      return (
        <div className="space-y-3">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleCheckboxChange(opt)}
              disabled={isSubmitted}
              className={commonClasses + getOptionClass(opt, (userAnswers || []).includes(opt))}
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded border mr-3 flex items-center justify-center transition-colors ${(userAnswers || []).includes(opt) ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-400'}`}>
                  {(userAnswers || []).includes(opt) && <IconChecklist className="w-3 h-3" />}
                </div>
                {opt}
              </div>
            </button>
          ))}
        </div>
      );
    }

    // Fallback for 'fill_in_blank', 'short_answer', or unknown types
    return renderTextInput(q);
  };

  // --- RENDER STATES ---

  if (gameState === 'SETUP') {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <button onClick={onBack} className="flex items-center text-sm font-semibold text-blue-600 hover:underline mb-6">
          <IconArrowUp className="h-4 w-4 mr-1 rotate-[-90deg]" /> Back
        </button>

        <div className="text-center mb-10">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-3xl inline-block mb-4 shadow-xl">
            <IconBrain className="h-12 w-12" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">FinIQ Challenge</h1>
          <p className="text-lg text-slate-600">Test your financial knowledge and level up your wealth wisdom.</p>
        </div>

        {error && <p className="text-center text-red-600 bg-red-50 p-4 rounded-lg mb-6">{error}</p>}

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Difficulty */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <IconTarget className="h-6 w-6 text-red-500" /> Difficulty
            </h3>
            <div className="space-y-3">
              {(['Easy', 'Medium', 'Hard'] as QuizDifficulty[]).map(d => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`w-full p-3 rounded-lg border text-left transition-all ${difficulty === d ? 'bg-blue-50 border-blue-500 ring-1 ring-blue-500' : 'hover:bg-slate-50'}`}
                >
                  <span className="font-semibold">{d}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mode */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <IconClock className="h-6 w-6 text-blue-500" /> Mode
            </h3>
            <div className="space-y-3">
              {(['Relaxed', 'Speed Run', 'Blitz'] as QuizMode[]).map(m => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`w-full p-3 rounded-lg border text-left transition-all ${mode === m ? 'bg-purple-50 border-purple-500 ring-1 ring-purple-500' : 'hover:bg-slate-50'}`}
                >
                  <span className="font-semibold block">{m}</span>
                  <span className="text-xs text-slate-500">
                    {m === 'Relaxed' ? 'No time limit. Learn at your own pace.' :
                      m === 'Speed Run' ? '5 minutes to complete 10 questions.' :
                        '45 seconds per question. Think fast!'}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={handleStart}
            className="px-10 py-4 bg-blue-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all transform"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (gameState === 'LOADING') {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-6"></div>
        <h2 className="text-2xl font-semibold text-slate-800 animate-pulse">Generating Questions...</h2>
        <p className="text-slate-500 mt-2">Using AI to curate your {difficulty} challenge.</p>
      </div>
    );
  }

  if (gameState === 'PLAYING') {
    const q = questions[currentQuestionIndex];
    return (
      <div className="max-w-3xl mx-auto p-4">
        {/* Header Bar */}
        <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-4">
            <span className="font-bold text-slate-700">Q {currentQuestionIndex + 1}/10</span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
              difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>{difficulty}</span>
          </div>
          <CircularTimer
            time={mode === 'Relaxed' ? timeTaken : timeLeft}
            maxTime={mode === 'Speed Run' ? 300 : mode === 'Blitz' ? 45 : undefined}
            mode={mode}
          />
        </div>

        {/* Question Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 leading-snug">
            {q.question}
          </h2>

          {renderInput()}

          {/* Feedback Area */}
          {isSubmitted && (
            <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-start gap-3">
                {isCorrect
                  ? <IconChecklist className="h-6 w-6 text-green-600" />
                  : <IconX className="h-6 w-6 text-red-600" />
                }
                <div>
                  <p className={`font-bold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </p>
                  <p className="text-slate-700 mt-1 text-sm">{q.explanation}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end">
          {!isSubmitted ? (
            <button
              onClick={() => handleSubmit(false)}
              disabled={!userAnswers || (Array.isArray(userAnswers) && userAnswers.length === 0)}
              className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-slate-800 text-white font-bold rounded-lg shadow-md hover:bg-slate-900 transition-colors flex items-center gap-2"
            >
              {currentQuestionIndex < 9 ? 'Next Question' : 'Finish Quiz'} <span aria-hidden="true">&rarr;</span>
            </button>
          )}
        </div>
      </div>
    );
  }

  if (gameState === 'RESULTS') {
    const score = results.filter(r => r.isCorrect).length;
    const percentage = (score / 10) * 100;
    const isPass = percentage >= 60;

    return (
      <div className="max-w-4xl mx-auto p-4">
        {isPass && showConfetti && <Confetti />}

        <div className="text-center mb-10">
          <div className={`p-6 rounded-full inline-block mb-4 shadow-xl ${isPass ? 'bg-yellow-400 text-white animate-bounce' : 'bg-slate-200 text-slate-500'}`}>
            {isPass ? <IconParty className="h-16 w-16" /> : <IconTrophy className="h-16 w-16" />}
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            {isPass ? 'Quiz Completed!' : 'Challenge Finished'}
          </h1>
          <p className="text-lg text-slate-600">
            You scored <span className={`font-bold ${isPass ? 'text-green-600' : 'text-red-600'}`}>{score}/10</span> ({percentage}%)
          </p>
          {!isPass && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg inline-block max-w-md">
              <p className="text-blue-800 font-medium mb-2">Time to tighten up your financial knowledge!</p>
              <button
                onClick={() => navigateTo ? navigateTo('/learn') : onBack()}
                className="text-sm text-blue-600 hover:underline font-bold"
              >
                Go to Learn Section &rarr;
              </button>
            </div>
          )}
        </div>

        {/* Review Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-800 border-b pb-2">Review Answers</h3>
          {questions.map((q, idx) => {
            const result = results.find(r => r.questionId === q.id);
            const isCorrect = result?.isCorrect;

            return (
              <div key={q.id} className={`p-6 rounded-xl border ${isCorrect ? 'bg-white border-slate-200' : 'bg-red-50 border-red-200'}`}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg text-slate-900">Q{idx + 1}: {q.question}</h4>
                  {isCorrect
                    ? <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-bold">Correct</span>
                    : <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full font-bold">Wrong</span>
                  }
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm mt-4">
                  <div>
                    <span className="block text-slate-500 font-semibold">Your Answer:</span>
                    <span className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                      {Array.isArray(result?.userAnswer)
                        ? result?.userAnswer.join(', ') || '(No Answer)'
                        : result?.userAnswer || '(No Answer)'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-slate-500 font-semibold">Correct Answer:</span>
                    <span className="text-slate-800 font-medium">
                      {Array.isArray(q.correctAnswer)
                        ? q.correctAnswer.join(', ')
                        : q.correctAnswer}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200/50">
                  <p className="text-slate-600 italic text-sm">
                    <span className="font-semibold not-italic">Explanation: </span>
                    {q.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10 mb-10">
          <button
            onClick={() => setGameState('SETUP')}
            className="px-8 py-3 bg-slate-800 text-white font-bold rounded-lg shadow-md hover:bg-slate-900 transition-colors"
          >
            Try Another Quiz
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default FinIQChallenge;
