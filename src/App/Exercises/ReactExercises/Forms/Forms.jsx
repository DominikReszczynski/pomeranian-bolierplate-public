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
  // process.env.REACT_APP_FIREBASE_API_KEY jest zmienną środowiskową znajdującą 
  // się tylko na moim komputerze (.env.local) znjdować się tam powinny wszystkie
  // klucze linki zewnętrzen itd. 
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
// eslint-disable-next-line
const analytics = getAnalytics(app);
const db = getFirestore(app);
// -----------------------------------------------------------------------

const validateEmail = (value) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
};
const validatePhone = (value) => {
  const phonePattern = /^\d{9}$/;
  return phonePattern.test(value);
}
const validateCityCode = (value) => {
  const cityCodePattern = /^\d{2}-\d{3}$/;
  return cityCodePattern.test(value);
}
const validateWord = (value) => {
  var wordPattern = /^[A-Za-z]+$/;
  return wordPattern.test(value);
}

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
    street: '',
    streetNumber: '',
    cityCode: '',
    city: '',
    phoneNumber: '',
    consents: false,
    newsletter: false,
    newAccount: false,
  });
  const [newAccountData, setNewAccountData] = useState({
    login: '',
    password: '',
    repeatedPassword: '',
  });
  const usersLogins = ["Wojtek12", "gouther", "kamilNoga", "123456"]
  const [isAllRequiredFieldsFilled, setIsAllRequiredFieldsFilled] = useState();

  const [isEmailValid, setIsEmailValid] = useState();
  const [isPhoneValid, setPhoneValid] = useState()
  const [isCityCodeValid, setCityCodeValid] = useState()
  const [isCityValid, setCityValid] = useState()
  const [isStreetValid, setStreetValid] = useState()
  const [repeatedPasswordValid, setRepeatedPasswordValid] = useState()
  const [loginInUse, setLoginInUse] = useState('')
  const [orderID, setOrderId] = useState('');

  const isNameAndSurnameValid = formData.nameAndSurname.length > 0 ? formData.nameAndSurname.trim().includes(' ') : true;
  const isBuildingNUmber = formData.streetNumber.trim().length > 0 ? true : false;
  const isFieldsValid = isEmailValid && isNameAndSurnameValid && isPhoneValid && isCityCodeValid && isCityValid && isStreetValid && isBuildingNUmber && isAllRequiredFieldsFilled;

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
    setFormData({
      ...formData,
      [onChangeEvent.target.name]: onChangeEvent.target.value,
    });
    console.log('pełny obiekt', { ...formData, ...newAccountData })
    if (onChangeEvent.target.name === 'email') {
      setIsEmailValid(validateEmail(formData.email));
    }
  }
  function updateNewAccountData(onChangeEvent) {
    setIsAllRequiredFieldsFilled(true);
    setNewAccountData({
      ...newAccountData,
      [onChangeEvent.target.name]: onChangeEvent.target.value,
    });
  }

  async function handleSubmit() {
    const { nameAndSurname, email, product, paymentType, consents } = formData;
    if (nameAndSurname && email && product && paymentType && consents) {
      console.log('DANE WYSŁANE POPRAWNIE: ', formData);
      // ------------------google firebase--------------------------------------
      const apiData = formData.newAccount ? { ...formData, ...newAccountData } : formData;
      try {
        const docRef = await addDoc(collection(db, 'orders'), apiData);
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
  console.log('wyświetla się lub nie:', isFieldsValid)
  return (
    <>
      <form
        className='form__mainConteiner'
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
              placeholder='Adam Nowak'
              type="text"
              name="nameAndSurname"
              value={formData.nameAndSurname}
              onChange={updateFormData}
              className={!isNameAndSurnameValid ? 'input-error' : ''}
            />
            {!isNameAndSurnameValid && (
              <p className="input-field-error-message">
                Nie podałeś(-aś) nazwiska!
              </p>
            )}
          </FieldSection>
          <FieldSection title="Adres do wysyłki*">
            <div className='delivery'>
              <div className='delivery__firstLine'>
                <input
                  className={isStreetValid === false ? 'input-error' : ''}
                  placeholder='Ulica'
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={updateFormData}
                  onBlur={() => {
                    setStreetValid(validateWord(formData.street))
                  }}
                />
                <input
                  className='delivery__secondLine-number'
                  placeholder='00a'
                  type="text"
                  name="streetNumber"
                  value={formData.streetNumber}
                  onChange={updateFormData}
                />
              </div>
              <div className='delivery__secondLine'>
                <input
                  className={isCityCodeValid === false ? 'input-error' : ''}
                  placeholder='00-000'
                  type="text"
                  name="cityCode"
                  value={formData.cityCode}
                  onChange={updateFormData}
                  onBlur={() => {
                    setCityCodeValid(validateCityCode(formData.cityCode))
                  }}
                />

                <input
                  className={isCityValid === false ? 'input-error' : ''}
                  placeholder='Miasto'
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={updateFormData}
                  onBlur={() => formData.city.length > 0 ? setCityValid(validateWord(formData.city)) : setCityValid(true)
                  }
                />
              </div>
            </div>
            {!isCityValid && (
              <p className="input-field-error-message">
                Nie poprwane dane!
              </p>
            )}
          </FieldSection>
          <FieldSection title="Adres E-mail*">
            <input
              placeholder='a@a.pl'
              type="text"
              name="email"
              value={formData.email}
              onChange={updateFormData}
              className={isEmailValid === false ? 'input-error' : ''}
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
          <FieldSection title="Numer Telefonu*">
            <input
              className={isPhoneValid === false ? 'input-error' : ''}
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={updateFormData}
              onBlur={() => {
                setPhoneValid(validatePhone(formData.phoneNumber))
              }}
            />
            {isPhoneValid === false && (
              <p className="input-field-error-message">
                Telefon jest niepoprawny!
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
        <MainSection title="ZAKŁADANIE KONTA">
          <FieldSection title="Chcę założyć konto razem z zamówieniem">
            <CheckBoxes
              list={[
                {
                  fieldName: 'newAccount',
                  label: 'Chcę założyć nowe konto',
                  isChecked: formData.newAccount,
                },
              ]}
              onChange={(_, newValue) => {
                setFormData({
                  ...formData,
                  newAccount: newValue,
                });
              }}
            />
          </FieldSection>
          {formData.newAccount && <FieldSection title='Podaj potrzebne dane'>
            <h5>Login</h5>
            <input
              className={loginInUse ? 'input-error' : ''}
              type="text"
              name="login"
              value={newAccountData.login}
              onChange={updateNewAccountData}
              onBlur={() => {
                setLoginInUse(usersLogins.includes(newAccountData.login))
                console.log('users login include', usersLogins.includes(newAccountData.login))
              }}
            />
            {loginInUse && (
              <p>Login zajęty</p>
            )
            }
            <h5>Hasło</h5>
            <input
              className={loginInUse === null ? 'input-error' : ''}
              type="text"
              name="password"
              value={newAccountData.password}
              onChange={updateNewAccountData}
            />
            <h5>Podaj hasło</h5>
            <input
              className={loginInUse === null ? 'input-error' : ''}
              type="text"
              name="repeatedPassword"
              value={newAccountData.repeatedPassword}
              onChange={updateNewAccountData}
              onBlur={() => {
                setRepeatedPasswordValid(newAccountData.password !== newAccountData.repeatedPassword)
                console.log('repited', repeatedPasswordValid)
              }}
            />
            {repeatedPasswordValid && (
              <p>nie prawidłowe hasła</p>
            )}
          </FieldSection>}
        </MainSection>
        <MainSection title="ZGODY">
          <FieldSection title="Realizując zamówienie, akceptujesz regulamin naszego sklepu">
            <CheckBoxes
              list={[
                {
                  fieldName: 'consents',
                  label: 'apceptuję regulamin*',
                  isChecked: formData.consents,
                },
              ]}
              onChange={(_, newValue) => {
                setIsAllRequiredFieldsFilled(!formData.consents);
                setFormData({
                  ...formData,
                  consents: newValue,
                });
              }}
            />
          </FieldSection>
          <FieldSection title="Dołącz do naszego newslettera z promocjami dla naszych klientów">
            <CheckBoxes
              list={[
                {
                  fieldName: 'newsletter',
                  label: 'Chcę zapisać się do Newsletter',
                  isChecked: formData.newsletter,
                },
              ]}
              onChange={(_, newValue) => {
                setFormData({
                  ...formData,
                  newsletter: newValue,
                });
              }}
            />
          </FieldSection>
        </MainSection>
        {console.log("regulamin", isAllRequiredFieldsFilled)}
        <button type="submit" disabled={!isFieldsValid}>
          {isFieldsValid ? 'WYŚLIJ' : "Wypełnij wszystkie pola wymagane!"}
        </button>
      </form>
      {
        orderID && (
          <div className="modal-conteiner">
            <div className="modal">
              zamówienie zostało przyjęte id twojego zamówienia to {orderID}
              <button
                onClick={() => {
                  window.location.reload()
                }}>X</button>
            </div>
          </div>
        )
      }
    </>
  );
}
