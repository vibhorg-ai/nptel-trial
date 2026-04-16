"use client";

import { useCallback, useState } from "react";
import { Volume2 } from "lucide-react";

const CUSTOM_SHOUT_SRC = "/audio/wohooooo-tom.mp3";

function speakWohooooTom() {
  if (typeof window === "undefined") return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance("Woohooo Tom!");
  u.rate = 1.5;
  u.pitch = 1.3;
  u.volume = 1;
  window.speechSynthesis.speak(u);
}

/**
 * Celebration image + sound. Browsers usually block autoplay without a fresh
 * gesture, so we offer a clear button; optional `public/audio/wohooooo-tom.mp3`
 * plays on tap, with speech fallback if the file is missing or play fails.
 */
export function QuizRewardCelebration() {
  const [played, setPlayed] = useState(false);
  const [hint, setHint] = useState<string | null>(null);

  const playCelebration = useCallback(() => {
    window.speechSynthesis.cancel();
    const audio = new Audio(CUSTOM_SHOUT_SRC);
    audio.volume = 0.95;

    let usedSpeech = false;
    const trySpeech = () => {
      if (usedSpeech) return;
      usedSpeech = true;
      speakWohooooTom();
    };

    audio.addEventListener("error", trySpeech, { once: true });
    const p = audio.play();
    if (p !== undefined) {
      p.then(() => setHint(null)).catch(() => {
        trySpeech();
        setHint("Could not autoplay MP3 — used speech instead. Add your clip at public/audio/wohooooo-tom.mp3");
      });
    }
    setPlayed(true);
  }, []);

  return (
    <div
      className="mb-8 overflow-hidden rounded-2xl border border-warning/40 bg-gradient-to-br from-warning/15 via-card to-accent/15 p-4 text-center shadow-lg"
      role="region"
      aria-label="Quiz completion reward"
    >
      <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Reward unlocked
      </p>
      <p className="mb-3 text-sm font-semibold text-foreground">
        You finished this quiz — wohooooo Tom!
      </p>
      <button
        type="button"
        onClick={playCelebration}
        className="mb-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        <Volume2 className="h-4 w-4" aria-hidden />
        {played ? "Play again" : "Tap for sound (Woohooo Tom!)"}
      </button>
      {hint && (
        <p className="mb-3 text-xs text-muted-foreground">{hint}</p>
      )}
      <img
        src="/images/quiz-reward.png"
        alt="Celebration: Talking Ben in a science lab next to a smiling person in glasses"
        className="mx-auto max-h-56 w-full max-w-2xl object-contain sm:max-h-64 md:max-h-72"
        width={960}
        height={480}
        loading="eager"
        decoding="async"
      />
      <p className="mt-3 text-[11px] text-muted-foreground">
        Uses your Talking Ben clip from{" "}
        <code className="rounded bg-muted px-1">/audio/wohooooo-tom.mp3</code>. If it
        does not play, the button falls back to speech.
      </p>
    </div>
  );
}
