import './FieldSection.css';
export function FieldSection({ title, children }) {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
