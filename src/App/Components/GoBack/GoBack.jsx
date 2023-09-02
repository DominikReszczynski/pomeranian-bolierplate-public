import { Link, useNavigate } from 'react-router-dom';

import './styles.css';

export const GoBackLink = ({ label }) => {
  return (
    <div className='goBackConteiner'>
      <Link to=".." relative="path">
        <div className='goBackLink'>
          {label || 'Cofnij'}
        </div>
      </Link>
    </div>

  );
};

export const GoBackButton = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate(-1)}>go back</button>;
};
