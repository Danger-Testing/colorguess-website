"use client";

import { useState, useCallback } from "react";
import ColorWheel from "./ColorWheel";
import {
  IconicColor,
  iconicColors,
  calculateDeltaE,
  deltaEToPercentage,
  getAccuracyRating,
} from "@/lib/colors";

type GameState = "playing" | "result" | "finished";

interface GameResult {
  color: IconicColor;
  guessedHex: string;
  deltaE: number;
  percentage: number;
}

const totalRounds = 5;

function getInitialColors(): IconicColor[] {
  const shuffled = [...iconicColors].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, totalRounds);
}

export default function ColorGame() {
  const [gameState, setGameState] = useState<GameState>("playing");
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("#808080");
  const [gameColors, setGameColors] = useState<IconicColor[]>(getInitialColors);
  const [results, setResults] = useState<GameResult[]>([]);
  const [showHint, setShowHint] = useState(false);

  const startNewGame = useCallback(() => {
    setGameColors(getInitialColors());
    setCurrentColorIndex(0);
    setSelectedColor("#808080");
    setResults([]);
    setGameState("playing");
    setShowHint(false);
  }, []);

  const currentColor = gameColors[currentColorIndex];

  const handleSubmit = useCallback(() => {
    if (!currentColor) return;

    const deltaE = calculateDeltaE(selectedColor, currentColor.hex);
    const percentage = deltaEToPercentage(deltaE);

    const result: GameResult = {
      color: currentColor,
      guessedHex: selectedColor,
      deltaE,
      percentage,
    };

    setResults((prev) => [...prev, result]);
    setGameState("result");
  }, [currentColor, selectedColor]);

  const handleNext = useCallback(() => {
    if (currentColorIndex + 1 >= totalRounds) {
      setGameState("finished");
    } else {
      setCurrentColorIndex((prev) => prev + 1);
      setSelectedColor("#808080");
      setGameState("playing");
      setShowHint(false);
    }
  }, [currentColorIndex]);

  const totalScore = results.reduce((sum, r) => sum + r.percentage, 0);
  const averageScore = results.length > 0 ? Math.round(totalScore / results.length) : 0;

  // Finished screen
  if (gameState === "finished") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-zinc-900 to-black text-white">
        <div className="max-w-md w-full space-y-8 text-center">
          <h1 className="text-4xl font-bold">Game Over!</h1>
          <div className="space-y-2">
            <p className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              {averageScore}%
            </p>
            <p className="text-zinc-400">Average Accuracy</p>
          </div>

          <div className="space-y-3">
            {results.map((result, i) => {
              const rating = getAccuracyRating(result.deltaE);
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-zinc-800/50 rounded-xl p-4"
                >
                  <div className="flex gap-2">
                    <div
                      className="w-10 h-10 rounded-lg border-2 border-white/20"
                      style={{ backgroundColor: result.color.hex }}
                      title="Target"
                    />
                    <div
                      className="w-10 h-10 rounded-lg border-2 border-white/20"
                      style={{ backgroundColor: result.guessedHex }}
                      title="Your guess"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-medium">{result.color.name}</p>
                    <p className="text-sm text-zinc-400">{rating.rating}</p>
                  </div>
                  <div className="text-xl font-bold">{result.percentage}%</div>
                </div>
              );
            })}
          </div>

          <button
            onClick={startNewGame}
            className="w-full py-4 px-6 bg-white text-black font-bold text-lg rounded-full hover:bg-zinc-200 transition-colors"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  // Result screen
  if (gameState === "result") {
    const lastResult = results[results.length - 1];
    const rating = getAccuracyRating(lastResult.deltaE);

    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-zinc-900 to-black text-white">
        <div className="max-w-sm w-full space-y-8 text-center">
          <div className="space-y-2">
            <p className="text-zinc-400 text-sm uppercase tracking-widest">
              Round {currentColorIndex + 1} of {totalRounds}
            </p>
            <h2 className="text-2xl font-bold">{currentColor.name}</h2>
          </div>

          {/* Visual comparison */}
          <div className="flex justify-center gap-4">
            <div className="space-y-2">
              <div
                className="w-32 h-32 rounded-2xl border-4 border-white/20 shadow-2xl"
                style={{ backgroundColor: currentColor.hex }}
              />
              <p className="text-sm text-zinc-400">Target</p>
              <p className="font-mono text-sm">{currentColor.hex.toUpperCase()}</p>
            </div>
            <div className="space-y-2">
              <div
                className="w-32 h-32 rounded-2xl border-4 border-white/20 shadow-2xl"
                style={{ backgroundColor: lastResult.guessedHex }}
              />
              <p className="text-sm text-zinc-400">Your Guess</p>
              <p className="font-mono text-sm">{lastResult.guessedHex.toUpperCase()}</p>
            </div>
          </div>

          {/* Score */}
          <div className="space-y-2">
            <p className="text-6xl font-black">{lastResult.percentage}%</p>
            <p className="text-2xl">
              {rating.emoji} {rating.rating}
            </p>
            <p className="text-zinc-400">{rating.description}</p>
          </div>

          <button
            onClick={handleNext}
            className="w-full py-4 px-6 bg-white text-black font-bold text-lg rounded-full hover:bg-zinc-200 transition-colors"
          >
            {currentColorIndex + 1 >= totalRounds ? "See Results" : "Next Color"}
          </button>
        </div>
      </div>
    );
  }

  // Playing screen
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-900 to-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <div className="text-sm text-zinc-400">
          Round {currentColorIndex + 1}/{totalRounds}
        </div>
        <button
          onClick={() => setShowHint(!showHint)}
          className="text-sm text-zinc-400 hover:text-white transition-colors"
        >
          {showHint ? "Hide Hint" : "Show Hint"}
        </button>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-6 gap-6">
        {/* Color name */}
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-widest text-zinc-500">
            {currentColor.category}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">{currentColor.name}</h1>
          {showHint && (
            <p className="text-zinc-400 italic">&ldquo;{currentColor.hint}&rdquo;</p>
          )}
        </div>

        {/* Color picker */}
        <ColorWheel
          value={selectedColor}
          onChange={setSelectedColor}
          size={300}
        />

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          className="w-full max-w-xs py-4 px-6 bg-white text-black font-bold text-lg rounded-full hover:bg-zinc-200 transition-colors"
        >
          Submit Guess
        </button>
      </main>

      {/* Score bar */}
      {results.length > 0 && (
        <footer className="p-4 border-t border-zinc-800">
          <div className="flex items-center justify-center gap-2">
            <span className="text-zinc-400 text-sm">Running score:</span>
            <span className="font-bold">{averageScore}%</span>
          </div>
        </footer>
      )}
    </div>
  );
}
