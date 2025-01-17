import React, { useState } from 'react';
import './styles.css';
import cookies from '../../Images/cookie.svg';
const Cookies = ({ agree, setAgree, setAgreeForBackground }) => {

  const [isHidden, setIsHidden] = useState(false);
  /*funkcja ustawia 2 wartości po naciśnięciu przycisku agree na cookie wartość isHidden na true oraz agree na false różnica między tymi zdażeniami wynosi 500*/
  const handleAgreement = () => {
    localStorage.setItem('coockieAgree', 'true')
    setIsHidden(true);
    setAgreeForBackground(false)
    setTimeout(() => {
      setAgree(false);
    }, 1000);
  };
  const handleAgreementCustomization = () => { };

  return (
    <>
      {agree && (
        /*ustawienie nowej kalsy po zmianie wartości isHidden na true */
        <div className={`cookies-agreements ${isHidden ? 'hidden' : ''}`}>
          <div className="text-cookie">
            <img src={cookies} alt="" />
            <div>
              <h2>Pozwól na pliki cookies </h2>
              Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
              działanie strony i pomagają nam świadczyć usługi na najwyższym
              poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
              tych plików i przejść do strony lub dostosować użycie do swoich
              referencji. W tym celu kliknij przycisk po prawej stronie “dopasuj
              zgody”, aby następnie wybrać te które odpowiadają Twoim
              indywidualnym preferencjom.
            </div>
          </div>
          <div className="button-wrapper">
            <button className="agree__button" onClick={() => { handleAgreement() }}>
              ⭐zgoda⭐
            </button>
            <button
              className="customize__button"
              onClick={handleAgreementCustomization}
            >
              Dopasuj
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookies;
