import React from 'react';

interface Option {
    value: string;
    label: string;
}
  
interface DropdownProps {
    label: string;
    options: Option[];
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
  
const Dropdown: React.FC<DropdownProps> = ({ label, options, value, onChange }) => {
    return (
      <div className = 'dropdown-container'>
        <label htmlFor="dropdown" className = 'dropdown-label'>{label}</label>
        <select id="dropdown" value={value} onChange={onChange}>
          {options.map(option => (
            <option key={option.value} value={option.value} className = 'dropdown-option'>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
};
  
export default Dropdown;
