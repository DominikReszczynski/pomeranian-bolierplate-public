import React from 'react';
import { Route, Routes, useLocation, useRoutes } from 'react-router-dom';

import { getRouterMetaDataByCurrentPath } from '../../router-data/getRouterMetaDataByCurrentPath';

import { ExerciseItemHeader } from '../ExerciseItemHeader';

import { ExerciseLinks } from './ExerciseLinks';
import {
  blockRouterData as reactBlockRouterData,
  blockRouterMetaData as reactBlockRouterMetaData,
} from './view-router-data';

export function ReactExercises() {
  const element = useRoutes(reactBlockRouterData);

  return (
    <div>
      <h2 className='exercise-header'>React - lista ćwiczeń</h2>
      <Routes>
        <Route path="" element={<ExerciseLinks />} />
      </Routes>

      {element}
    </div>
  );
}

export function ReactExercisesItem() {
  const element = useRoutes(reactBlockRouterData);

  const location = useLocation();

  const { pathname } = location;
  // const pathname = location.pathname

  const exerciseRouteData = getRouterMetaDataByCurrentPath(
    pathname,
    reactBlockRouterMetaData
  );

  return (
    <div className="exercise-item-layout">
      <ExerciseItemHeader data={exerciseRouteData} />
      <hr />
      <br />
      <div className="exercise-item-content">{element}</div>
    </div>
  );
}
