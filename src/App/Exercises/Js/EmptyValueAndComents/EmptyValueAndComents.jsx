import React from 'react';
import './style.css';

export function EmptyValueAndComents() {
  /*
   * Undefined - lack of value
   */

  // variable with no assignment
  let name;
  console.log(name);

  // Function returning undefined by default
  const myFunction = () => { };
  const surname = myFunction();
  console.log(surname);

  // Object doesn't have specified key
  const myObject = { a: 1 };
  console.log(myObject.b);

  /*
   * Null - specified value of nothingness
   */

  let b = null;
  console.log(b);

  // TODO: Function returns string instead of numbers
  // FIXME: Function returns string instead of numbers
  // CHECKME, DOCME, TESTME, PENDING, DISCUSS, REVIEW

  const accBalance = ({ amount, currency }) => {
    const currencySymbols = {
      USD: '🗽',
      PLN: '🧅',
      EUR: '🥨',
      CUSTOM: (
        <img
          src="../../ReactExercises/TodoWithServer/markerDone.svg"
          alt="custom img"
        />
      ),
    };
    return <>{currencySymbols[currency] + `${amount}`}</>;
  };
  //ciekawe
  window.addEventListener('keyup', (e) => {
    console.log(e.key);
    if (e.key === 'h' || e.key === 'ArrowRight') console.log('dzwonię pod 112');
  });
  return (
    <div>
      <h2>W tym ćwiczeniu cenniejszy jest kod niż strona 🙂</h2>
      <p className="accBalance-paragrpah">
        {accBalance({ amount: 24, currency: 'USD' })}
      </p>
    </div>
  );
}
