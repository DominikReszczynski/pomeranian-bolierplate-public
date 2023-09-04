import React from 'react';

import './style.css';
import { First } from './First';
import { ReduxStealer } from './ReduxStealer';

export function ReduxCounter() {
  return (
    <div>
      <div className="redux-container">
        <First />
        <ReduxStealer />
      </div>
    </div>
  );
}
