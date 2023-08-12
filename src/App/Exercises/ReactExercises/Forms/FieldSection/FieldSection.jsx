import './FieldSection.css';

export function FieldSection({ title, children }) {
  return (
    <div className="field-section">
      <div className="field-section__title">{title}</div>
      <div className='field-section__children'>{children}</div>
    </div>
  );
}
