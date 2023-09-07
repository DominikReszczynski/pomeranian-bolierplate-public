import React from 'react';
import './style.css'
export const MoleGameSettings = ({
  gameTime,
  setGameTime,
  moleCount,
  setMoleCount,
  startStopGame,
  gameStarted,
}) => {
  const gameTimeOption = [
    { label: '1:00', timeValue: 1 * 60 },
    { label: '2:00', timeValue: 2 * 60 },
    { label: '3:00', timeValue: 3 * 60 },
  ];

  const moleCountOption = [
    { label: '1' },
    { label: '2' },
    { label: '3' },
  ];

  return (
    <div className="gameOptionsButtons">
      <div className='moleGameOptions__gameTime'>
        <h4>CZAS GRY {gameTime}</h4>
        {gameTimeOption.map(({ label, timeValue }) => (
          <button
            key={'time' + timeValue + 'minute'}
            className={gameTime === timeValue ? 'activeButton' : ''}
            onClick={() => {
              setGameTime(timeValue);
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <hr />
      <div className='moleGameOptions__moleCount'>
        <h4>LICZBA KRETÓW</h4>
        {moleCountOption.map(({ label }) => (
          <button
            key={label}
            className={moleCount === Number(label[0]) ? 'activeButton' : ''}
            onClick={() => setMoleCount(Number(label[0]))}
          >
            {label}
          </button>
        ))}
      </div>
      <button className="gameOptionsButtons__controlButton" onClick={startStopGame}>
        {gameStarted ? 'STOP' : 'START'}
      </button>
    </div>
  );
};
