import React, { ChangeEvent, useState } from 'react';
import classes from './PasswordConfigurator.module.scss';

const PasswordConfigurator = () => {
  const [lengthValue, setLengthValue] = useState('5');
  const onLengthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLengthValue(e.target.value);
  };

  return (
    <section className={classes.configurator}>
      <div className={classes.length}>
        <label htmlFor='password-length' className={classes['length-label']}>
          <h3>Character Length</h3>
          <span>{lengthValue}</span>
        </label>
        <input
          className={classes['length-range']}
          id='password-length'
          max={20}
          min={5}
          name='password-length'
          onChange={onLengthChange}
          type='range'
          value={lengthValue}
        />
      </div>
    </section>
  );
};

export default PasswordConfigurator;
