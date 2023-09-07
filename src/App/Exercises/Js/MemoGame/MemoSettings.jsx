export const MemoSettings = ({
  boardSize,
  setBoardSize,
  setGameStart,
  score,
  setScore,
  gameTime,
  finalSettings,
  setGameTime,
}) => {
  const gameTimeOption = [
    { label: '8', boardValue: 8 },
    { label: '16', boardValue: 16 },
    { label: '20', boardValue: 20 },
  ];
  return (
    <>
      <div className="memoGameOptions">
        <div className="memoGameOptions__info">
          {score > 0 && (<h1>Gratulacje! <br />Twój wynik to {score}</h1>)}
          {score === 0 && (<p>
            Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
          </p>)}
        </div>
        <div className="gameOptions">
          <div className="gameOptions__gameButtons">
            <h3>Liczba elementów</h3>
            <div className='gameOptions__gameButtons__bottonsRow'>
              {gameTimeOption.map(({ label, boardValue }) => (
                <button
                  className={boardSize === boardValue ? 'activeButton' : ''}
                  onClick={() => {
                    setBoardSize(boardValue);
                  }}
                  key={label}
                >
                  <span>{label}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                setGameStart(true);
                setScore(0);
                setGameTime(0);
              }}
            >
              START
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
