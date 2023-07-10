import React, { useState, useEffect } from 'react';
import './style.css';
import { MoleGameSettings } from './MoleGameSettings';
import { MoleGameBoard } from './Board';

export function HitTheMoleGame() {
  const defaultGameTime = 2 * 60 * 1000;
  const [gameTime, setGameTime] = useState(defaultGameTime);
  const [moleCount, setMoleCount] = useState(1);
  const [seconds, setSeconds] = useState(gameTime / 1000);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );

  useEffect(() => {
    let intervalId;

    if (isCountingDown) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds : 0));
      }, 1000);
    }

    if (seconds === 0) {
      clearInterval(intervalId);
      setIsCountingDown(false);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isCountingDown, seconds]);

  const generatMole = () => {
    const rand = Math.floor(Math.random() * 10);
    setMoleArray((prevMoleArray) =>
      prevMoleArray.map((mole, index) => ({
        ...mole,
        isVisible: index === rand,
      }))
    );
  };

  useEffect(() => {
    let intervalId;

    if (isCountingDown) {
      intervalId = setInterval(() => {
        generatMole();
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isCountingDown]);

  const hitTheMole = (index) => {
    if (moleArray[index].isVisible) {
      setScore((prevScore) => prevScore + 1);
      setMoleArray((prevMoleArray) =>
        prevMoleArray.map((mole, idx) =>
          idx === index ? { ...mole, isVisible: false } : mole
        )
      );
    }
  };
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [highScore, score]);
  return (
    <>
      {!isCountingDown ? (
        <MoleGameSettings
          seconds={seconds}
          setSeconds={setSeconds}
          moleCount={moleCount}
          setMoleCount={setMoleCount}
          isCountingDown={isCountingDown}
          setIsCountingDown={setIsCountingDown}
          gameTime={gameTime}
          setGameTime={setGameTime}
          score={score}
          hightScore={highScore}
          setScore={setScore}
        />
      ) : null}
      {isCountingDown ? (
        <MoleGameBoard
          score={score}
          hitTheMole={hitTheMole}
          moleArray={moleArray}
          seconds={seconds}
          setIsCountingDown={setIsCountingDown}
          setSeconds={setSeconds}
          isCountingDown={isCountingDown}
        />
      ) : null}
    </>
  );
}