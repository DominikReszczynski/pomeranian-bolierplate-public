import './MainSection.css';

export function MainSection({ title, children }) {
  return (
    <div className='forms__mainSection'>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
