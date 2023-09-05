import './styles.css';
import React, { useState, useEffect } from 'react';
import { MoleGameBoard } from './MoleGameBoard/MoleGameBoard';
import { MoleGameSettings } from './MoleGameSettings/MoleGameSettings';
import './styles.css';
import {
  showRandomMoles,
  hitTheMole,
} from './functions/functions.jsx';

export const HitTheMoleGame = () => {
  const moleSpeed = 1000;
  const defaultGameTime = 2 * 60;
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false, isMissed: false })
  );
  const [gameTime, setGameTime] = useState(defaultGameTime);
  const [moleCount, setMoleCount] = useState(1);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [counter, setCounter] = useState(gameTime);

  useEffect(() => {
    let countdownInterval;
    if (gameStarted && counter > 0) showRandomMoles(moleCount, setMoleArray, moleArray);

    if (gameStarted) {
      if (!countdownInterval) {
        countdownInterval = setInterval(() => setCounter((previousCounter) => previousCounter - 1), moleSpeed);
        if (counter === 0) {
          setGameStarted(false);
          clearInterval(countdownInterval);
        }
        return () => clearInterval(countdownInterval);
      }
    }
  }, [gameStarted, counter]);

  useEffect(() => setMoleCount(() => moleCount), [moleCount]);

  useEffect(() => {
    if (gameStarted) {
      setCounter(gameTime);
      setScore(0);
    }
    setCounter(() => gameTime);
  }, [gameStarted, gameTime]);
  return (
    <>
      {!gameStarted && score > 0 ? (
        <div className='congratulations'>
          <h1>
            GRATULACJE!
          </h1>
          <h1>
            Twój wynik to {score}.
          </h1>
        </div>
      ) : null}
      {!gameStarted && score === 0 ? (
        <p>
          Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
          którym się pojawił.
        </p>
      ) : null}
      {!gameStarted ? (
        <MoleGameSettings
          gameTime={gameTime}
          setGameTime={setGameTime}
          moleCount={moleCount}
          setMoleCount={setMoleCount}
          startStopGame={() => setGameStarted((prev) => !prev)}
          gameStarted={gameStarted}
        />
      ) : null}

      {gameStarted ? (
        <MoleGameBoard
          moleArray={moleArray}
          hitTheMole={(index) =>
            hitTheMole(index, moleArray, setMoleArray, score, setScore)
          }
          score={score}
          setScore={setScore}
          counter={counter}
          setCounter={setCounter}
          startStopGame={() => setGameStarted((prev) => !prev)}
          gameStarted={gameStarted}
        />
      ) : null}
    </>
  );
};
