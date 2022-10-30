import React from 'react';
import classes from './Checkbox.module.scss';

interface CheckboxInterface {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ label, onChange }: CheckboxInterface) => {
  return (
    <label className={classes.container}>
      <input type='checkbox' onChange={onChange} />
      <span className={classes.checkmark}></span>
      {label}
    </label>
  );
};

export default Checkbox;
