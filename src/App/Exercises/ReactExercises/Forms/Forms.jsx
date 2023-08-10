import React, { useEffect, useState } from 'react';

import './style.css';
import { MainSection } from './MainSection/MainSection';
import { FieldSection } from './FieldSection/FieldSection';
import { RadioButtons } from './RadioButtons/RadioButtons';
import { CheckBoxes } from './CheckBoxes/CheckBoxes';
import Select from 'react-select';

// ------------------google firebase--------------------------------------
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  addDoc,
  collection,
  getDoc,
  doc,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_UTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
// -----------------------------------------------------------------------

const validateEmail = (value) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
};

const productOptions = [
  { value: 'frontend', label: 'kurs front-end' },
  { value: 'backend', label: 'kurs backend-end' },
  { value: 'devops', label: 'kurs devops' },
];

const paymentTypeOptions = [
  { value: 'blik', label: 'Blik' },
  { value: 'paypal', label: 'PayPal' },
  { value: 'transfer', label: 'przelew tradycyjny' },
];

const additionalOptionList = [
  { fieldName: 'github', label: 'Intro do GitHub' },
  { fieldName: 'environment', label: 'Ustawienia środowiska' },
  { fieldName: 'extraDocuments', label: 'Materiały dodatkowe' },
];

export function Forms() {
  const [formData, setFormData] = useState({
    product: 'devops',
    paymentType: 'paypal',
    additionalOptions: {
      github: true,
      environment: false,
      extraDocuments: true,
    },
    nameAndSurname: '',
    email: '',
    details: '',
    consents: false,
  });
  const [isAllRequiredFieldsFilled, setIsAllRequiredFieldsFilled] =
    useState(true);

  const [isEmailValid, setIsEmailValid] = useState();
  const [orderID, setOrderId] = useState('');

  const isNameAndSurnameValid =
    formData.nameAndSurname.length > 0
      ? formData.nameAndSurname.trim().includes(' ')
      : true;

  const isFieldsValid =
    isEmailValid && isNameAndSurnameValid && isAllRequiredFieldsFilled;

  function updateAdditionalOptions(fieldName, newValue) {
    setIsAllRequiredFieldsFilled(true);
    setFormData({
      ...formData,
      additionalOptions: {
        ...formData.additionalOptions,
        [fieldName]: newValue,
      },
    });
  }

  function updateFormData(onChangeEvent) {
    setIsAllRequiredFieldsFilled(true);
    setFormData({
      ...formData,
      [onChangeEvent.target.name]: onChangeEvent.target.value,
    });
  }

  async function handleSubmit() {
    const { nameAndSurname, email, product, paymentType, consents } = formData;
    if (nameAndSurname && email && product && paymentType && consents) {
      console.log('DANE WYSŁANE POPRAWNIE: ', formData);
      // ------------------google firebase--------------------------------------
      try {
        const docRef = await addDoc(collection(db, 'orders'), formData);
        setOrderId(docRef.id);
        console.log('Document written with ID: ', orderID);
        console.log(docRef);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
      // -----------------------------------------------------------------------
    } else {
      setIsAllRequiredFieldsFilled(false);
    }
  }
  useEffect(() => {
    if (orderID) {
      getDoc(doc(db, 'orders', orderID)).then((response) => {
        console.log('dostałem dane', response.data());
      });
    }
  }, [orderID]);
  console.log({ formData });
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <MainSection title="ZAMÓWIENIE PRODUKTU">
          <FieldSection title="Wybierz produkt*">
            {/* <select
            name="product"
            value={formData.product}
            onChange={(event) => {
              updateFormData(event);
            }}
          >
            {productOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select> */}

            <Select
              value={productOptions.find(
                (item) => item.value === formData.product
              )}
              options={productOptions}
              onChange={(selectedItem) => {
                setFormData({
                  ...formData,
                  product: selectedItem.value,
                });
              }}
            />
          </FieldSection>
          <FieldSection title="Wybierz formę płatności*">
            <RadioButtons
              name="paymentType"
              options={paymentTypeOptions}
              value={formData.paymentType}
              onChange={updateFormData}
            />
          </FieldSection>
          <FieldSection title="Opcje dodatkowe do zamówienia">
            <CheckBoxes
              list={additionalOptionList.map((item) => {
                return {
                  ...item,
                  isChecked: formData.additionalOptions[item.fieldName],
                };
              })}
              onChange={updateAdditionalOptions}
            />
          </FieldSection>
        </MainSection>

        <MainSection title="DANE DO REALIZACJI ZAMÓWIENIA">
          <FieldSection title="Imię i nazwisko">
            <input
              type="text"
              name="nameAndSurname"
              value={formData.nameAndSurname}
              onChange={updateFormData}
              className={!isNameAndSurnameValid ? 'input-field-error' : ''}
            />
            {!isNameAndSurnameValid && (
              <p className="input-field-error-message">
                Nie podałeś(-aś) nazwiska!
              </p>
            )}
          </FieldSection>
          <FieldSection title="Email">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={updateFormData}
              className={isEmailValid === false ? 'input-field-error' : ''}
              onBlur={() => {
                setIsEmailValid(validateEmail(formData.email));
              }}
            />
            {isEmailValid === false && (
              <p className="input-field-error-message">
                Email jest niepoprawny!
              </p>
            )}
          </FieldSection>

          <FieldSection title="Uwagi dodatkowe">
            <textarea
              name="details"
              cols="40"
              rows="10"
              style={{ resize: 'none' }}
              value={formData.details}
              onChange={updateFormData}
            />
          </FieldSection>
        </MainSection>

        <MainSection title="ZGODY">
          <FieldSection title="Regulamin">
            <CheckBoxes
              list={[
                {
                  fieldName: 'consents',
                  label: 'apceptuję regulamin*',
                  isChecked: formData.consents,
                },
              ]}
              onChange={(_, newValue) => {
                setIsAllRequiredFieldsFilled(true);
                setFormData({
                  ...formData,
                  consents: newValue,
                });
              }}
            />
          </FieldSection>
        </MainSection>

        {!isAllRequiredFieldsFilled && (
          <p className="input-field-error-message">
            Wypełnij wszystkie pola wymagane!
          </p>
        )}

        <button type="submit" disabled={!isFieldsValid}>
          WYŚLIJ
        </button>
      </form>
      {orderID && (
        <div className="modal-conteiner">
          <div className="modal">
            zamówienie zostało przyjęte id twojego zamówienia to {orderID}
            <button onClick={() => setOrderId('')}>X</button>
          </div>
        </div>
      )}
    </>
  );
}
