import Krecik from './krecik.png';
import formatTime from '../../HitTheMoleGame/FormatTime'
import './style.css'
export const MoleGameBoard = ({
  moleArray,
  hitTheMole,
  score,
  startStopGame,
  gameStarted,
  counter,
}) => {
  return (
    <div>
      <div className="gameOptionsButtons">

        <div className="gameButtonsRows">
          <h2 className="item">CZAS: </h2>
          <h2 className="timeAndScore">{formatTime(counter)}</h2>
          <h2 className="item">WYNIK:</h2>
          <h2 className="timeAndScore">{score}</h2>
        </div>
        <div className="moleGame">
          {moleArray.map((mole, index) => (
            <div
              key={index}
              onClick={() => hitTheMole(index)}
              className='board'
            >
              <div className="hole">
                {!mole.isVisible && (
                  <div className='moleHole'></div>
                )}
                {mole.isVisible && (
                  <div className="square">
                    <img src={Krecik} alt="MOLE!" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="stopBottom">
          <button className="appButton" onClick={startStopGame}>
            {gameStarted ? 'STOP' : 'START'}
          </button>
        </div>
      </div>
    </div>
  );
};
