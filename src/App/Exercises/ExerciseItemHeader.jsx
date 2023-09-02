import { GoBackLink } from '../Components/GoBack/GoBack';

import './header.css';

export function ExerciseItemHeader({ data }) {
  return (
    <>
      <div className="exercise-item-header">
        <h3>{`Tytuł: ${data?.linkLabel || '-'}`}</h3>
        <h3>{`Data: ${data?.date || '-'}`}</h3>
        <GoBackLink />
      </div>
      <br />
    </>
  );
}
