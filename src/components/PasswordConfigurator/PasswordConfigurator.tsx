import React, { ChangeEvent, useState } from 'react';
import Checkbox from '../ui/Checkbox/Checkbox';
import classes from './PasswordConfigurator.module.scss';

const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const symbols = [
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const PasswordConfigurator = () => {
  const [lengthValue, setLengthValue] = useState('5');
  const [passwordConditionals, setPasswordConditionals] = useState({
    useUppercase: true,
    useLowerCase: true,
    useNumbers: true,
    useSymbols: true,
  });
  const onLengthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLengthValue(e.target.value);
  };

  const onUpperCaseActive = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordConditionals((prevState) => {
      return { ...prevState, useUppercase: e.target.checked };
    });
  };

  const onLowerCaseActive = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordConditionals((prevState) => {
      return { ...prevState, useLowerCase: e.target.checked };
    });
  };
  const onNumbersActive = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordConditionals((prevState) => {
      return { ...prevState, useNumbers: e.target.checked };
    });
  };
  const onSymbolsActive = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordConditionals((prevState) => {
      return { ...prevState, useSymbols: e.target.checked };
    });
  };

  console.log(passwordConditionals);

  return (
    <form className={classes.configurator}>
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

      <div>
        <Checkbox
          label={'Include Uppercase Letters'}
          onChange={onUpperCaseActive}
        />
        <Checkbox
          label={'Include Lowercase Letters'}
          onChange={onLowerCaseActive}
        />
        <Checkbox label={'Include Numbers'} onChange={onNumbersActive} />
        <Checkbox label={'Include Symbols'} onChange={onSymbolsActive} />
      </div>
    </form>
  );
};

export default PasswordConfigurator;
