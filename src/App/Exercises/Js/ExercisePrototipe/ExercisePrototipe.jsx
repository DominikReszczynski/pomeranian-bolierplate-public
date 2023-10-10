import React from 'react';
import './style.css';

export function ExercisePrototipe() {
  // Car constructor function
  function Car(make, model) {
    this.make = make;
    this.model = model;
  }

  // Adding custom methods to the prototype of the Object
  Object.getMake = function () {
    return this.make;
  };
  Object.getModel = function () {
    return this.model;
  };

  // Creating a new Car instance
  const myCar = new Car('Toyota', 'Camry');
  const myCarTwo = new Car('Fiat', '50');

  // Adding a custom method to the prototype of the Array
  Array.newArrayMethod = function () {
    console.log('yes, I.m a New glopbal array method');
  };

  // Creating an example array
  const exampleArray = [1, 2, 3];

  // Using the map method on the example array
  exampleArray.map((item) => item);

  // Calling the custom method on the example array
  exampleArray.newArrayMethod();

  return (
    <div className="container--js-prototypes">
      Make: {myCar.getMake()}
      <br />
      Model: {myCar.getModel()}
      <br />
      Make: {myCarTwo.getMake()}
      <br />
      Model: {myCarTwo.getModel()}
      <br />
      Array method: {exampleArray.newArryMethod()}
      <br />
    </div>
  );
}
