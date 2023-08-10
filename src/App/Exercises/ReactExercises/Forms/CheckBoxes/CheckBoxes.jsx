import './CheckBoxes.css';
export function CheckBoxes({ list, onChange }) {
  console.log('list', list);
  return list.map((item) => {
    return (
      <div
        key={item.fieldName}
        className="checkboxes__item"
        onClick={() => {
          onChange(item.fieldName, !item.isChecked);
        }}
      >
        <div
          className={`checkboxes__item__check-mark ${
            item.isChecked ? 'checkboxes__item__check-mark--checked' : ''
          }`}
        >
          {item.isChecked && <>&#10003;</>}
        </div>
        {item.label}
      </div>
    );
  });
}
