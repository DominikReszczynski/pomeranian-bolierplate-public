import { Link } from 'react-router-dom';

import { blockRouterMetaData } from './view-router-data';

import '../listOfExercise.css'

import fileIcon from '../../Images/file-textIcon.svg'

export const ExerciseLinks = () => {
  return (
    <div className='exerciseBlock'>
      {blockRouterMetaData.map((blockMetaData) => (
        <p key={blockMetaData.path} className='exerciseBlock__li'>
          <Link to={blockMetaData.path}><img src={fileIcon} alt="fileIcon" /><p>{blockMetaData.linkLabel}</p></Link>
        </p>
      ))}
    </div>
  );
};
