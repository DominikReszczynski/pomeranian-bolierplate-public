import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { CV } from './App/Components/CV/CV.jsx';
import { Calendar } from './App/Components/Kalendarz/Calendar';
import { Settings } from './App/Components/Settings/Settings';
import { Blog } from './App/Blog/Blog';
import { FAQ } from './App/FAQ/FAQ';
import { TechStack } from './App/TechStack';
import { HitTheMoleGame } from './App/Exercises/Js/HitTheMoleGame/HitTheMoleGame.jsx';
import { MemoGame } from './App/Exercises/Js/MemoGame/MemoGame.jsx';
import { Forms } from './App/Exercises/ReactExercises/Forms/Forms.jsx'
import Confetti from 'react-confetti';
import SnakeDetectionSound from './SnakeDetectionSound.mp3'
import { Certficats } from './App/Certyficats/certyficats';
export function App() {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
  const audio = new Audio(SnakeDetectionSound)
  const userInput = []

  const [numberOfConfetti, setNUmberOfConfetti] = useState(500)
  const [showConfetti, setShowConfetti] = useState(false);
  const [generateConfetti, setGenrateConfetti] = useState(false)

  const handleKeyPress = (event) => {
    setShowConfetti(false);
    userInput.push(event.code);
    if (userInput.length > konamiCode.length) {
      userInput.shift();
    }
    if (userInput.join('') === konamiCode.join('')) {
      setShowConfetti(true);
      setGenrateConfetti(true)
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  useEffect(() => {
    if (showConfetti) {
      audio.play()
      setTimeout(() => {
        setNUmberOfConfetti(0)
      }, 1000)
      setTimeout(() => {
        setShowConfetti(false)
        setNUmberOfConfetti(500)
      }, 5000)
    }
  }, [showConfetti])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="cv/*" element={<CV />} />keystonejs
          <Route path="Calendar/*" element={<Calendar />} />
          <Route path="Settings/*" element={<Settings />} />
          <Route path="Blog/*" element={<Blog />} />
          <Route path="FAQ/*" element={<FAQ />} />
          <Route path="techstack/*" element={<TechStack />} />
          <Route path="hit-the-mole/*" element={<HitTheMoleGame />} />
          <Route path='certyficats/*' element={<Certficats />} />
          <Route path="memo/*" element={<MemoGame />} />
          <Route path="form/*" element={<Forms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {showConfetti && <Confetti run={generateConfetti} numberOfPieces={numberOfConfetti} />}
    </BrowserRouter>
  );
}
