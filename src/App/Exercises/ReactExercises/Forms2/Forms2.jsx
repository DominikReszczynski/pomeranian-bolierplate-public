import React, { useState } from 'react';
import Select from 'react-select';

import './style.css';
import { FieldSection } from './FieldSection/FieldSection';

const optionsProduct = [
  { value: 'frontEnd', label: 'Kurs Front-End' },
  { value: 'backEnd', label: 'Kurs Back-End' },
  { value: 'devops', label: 'Kurs Devops' },
];
const optionsPayment = [
  { value: 'blik', label: 'Blik' },
  { value: 'PayPal', label: 'PayPal' },
  { value: 'przelew', label: 'Przelew Tradycyjny' },
];
// eslint-disable-next-line
const optionsAdditional = [
  { value: 'enviroment', label: 'Ustawienie środowiska', isCheckd: false },
  { value: 'github', label: "intro do Git Hub'a", isCheckd: false },
  { value: 'extraMaterial', label: 'Materiały dodatkowe', isCheckd: false },
];

export function Forms2() {
  const [selectedProducts, setSelectedProducts] = useState({
    product: '',
    paymentMethod: '',
    additionalServices: {
      enviroment: false,
      github: false,
      extraMaterial: false,
    },
  });
  console.log('wybrane produkty', selectedProducts);
  return (
    <div>
      <div>
        <h2>Zamówienie Produktu</h2>
        <FieldSection title="Wybierz produkt">
          <Select
            options={optionsProduct}
            onChange={(value) => {
              setSelectedProducts({
                ...selectedProducts,
                product: value.value,
              });
            }}
          />
          <p>wybrałeś {selectedProducts.product}</p>
        </FieldSection>
        <FieldSection title="Opcje płatności">
          <div className="radio-group">
            {optionsPayment.map((payment) => {
              return (
                <div key={payment.value}>
                  <input
                    className="radio-input"
                    name="radio-group"
                    id={payment.value}
                    type="radio"
                    onChange={(value) => {
                      setSelectedProducts({
                        ...selectedProducts,
                        paymentMethod: payment.value,
                      });
                    }}
                  />
                  <label htmlFor={payment.value} className="radio-labels">
                    <span className="radio-inner-circle"></span>
                    {payment.label}
                  </label>
                </div>
              );
            })}
          </div>
          <p>wybrałeś: {selectedProducts.paymentMethod}</p>
        </FieldSection>
        <FieldSection title="Opcje dodatkowe do zamówienia">
          {/* dorobić mapa dla labelki */}
          <label htmlFor="cbx" className="cbx">
            <div className="checkmark">
              <input type="checkbox" id="cbx" />
              <div className="flip">
                <div className="front"></div>
                <div className="back">
                  <svg viewBox="0 0 16 14" height="14" width="16">
                    <path d="M2 8.5L6 12.5L14 1.5"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="cbx__label">jedynka</div>
          </label>
        </FieldSection>
      </div>
      <div>
        <h2>Dane do realizacji zamówienia</h2>
      </div>
    </div>
  );
}
