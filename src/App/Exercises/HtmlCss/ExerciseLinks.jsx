import { blockRouterMetaData } from './view-router-data';
import '../listOfExercise.css'
import fileIcon from '../../Images/file-textIcon.svg'

export const ExerciseLinks = () => {
  return (
    <div className='exerciseBlock'>
      {blockRouterMetaData.map((blockMetaData) => (
        <div key={blockMetaData.path} className='exerciseBlock__li'>
          <div className='exerciseBlock__li__inside'>
            <div className='exerciseBlock__li__inside__main'>
              <img src={fileIcon} alt="fileIcon" />
              <p>{blockMetaData.linkLabel}</p>
            </div>
            <div className='exerciseBlock__li__inside__tags'>
              {blockMetaData.tags.map((item) => (
                <p
                  className='exerciseBlock__li__inside__tags__tag'
                  key={item}>{`#${item}`}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
