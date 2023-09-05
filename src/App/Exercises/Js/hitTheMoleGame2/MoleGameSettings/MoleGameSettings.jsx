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
    { label: '1 minuta', timeValue: 1 * 60 },
    { label: '2 minuty', timeValue: 2 * 60 },
    { label: '3 minuty', timeValue: 3 * 60 },
  ];

  const moleCountOption = [
    { label: '1 kret' },
    { label: '2 krety' },
    { label: '3 krety' },
  ];

  return (
    <div className="moleGameOptions">

      <div className="gameOptionsButtons">
        <div className="gameButtonsRows">
          <div>
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
          <div>
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
          <div>
            <h4>PRZYCISKI STERUJĄCE</h4>
            <button onClick={startStopGame}>
              {gameStarted ? 'STOP' : 'START'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
