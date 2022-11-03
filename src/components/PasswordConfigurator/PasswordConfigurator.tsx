import React, { ChangeEvent, FormEvent, useState } from 'react';
import Checkbox from '../ui/Checkbox/Checkbox';
import classes from './PasswordConfigurator.module.scss';

const uppercaseLetters = [
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

const lowercaseLetters = uppercaseLetters.map((letter) => letter.toLowerCase());

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

const passwordElements = [uppercaseLetters, symbols, numbers];

const randomNumberGenerator = (length: number) =>
  Math.floor(Math.random() * length);

const createPassword = (
  length: number,
  conditions: {
    useUppercase: boolean;
    useLowercase: boolean;
    useNumbers: boolean;
    useSymbols: boolean;
  }
) => {
  const passwordCreatorElements: any[] = [];
  const passwordCharacters = [];
  const { useUppercase, useLowercase, useNumbers, useSymbols } = conditions;

  if (useUppercase) {
    passwordCreatorElements.push(uppercaseLetters);
  }
  if (useLowercase) {
    passwordCreatorElements.push(lowercaseLetters);
  }
  if (useSymbols) {
    passwordCreatorElements.push(symbols);
  }
  if (useNumbers) {
    passwordCreatorElements.push(numbers);
  }

  const passwordCreatorElementsLength = passwordCreatorElements.length;

  do {
    const randomNumber = randomNumberGenerator(length);
    const createElementsRandomNumber = randomNumberGenerator(
      passwordCreatorElementsLength
    );
    passwordCharacters.push(
      passwordCreatorElements[createElementsRandomNumber][randomNumber]
    );
  } while (passwordCharacters.length + 1 <= length);

  console.log(passwordCharacters.join(''));
  return passwordCharacters.join('');
};

const PasswordConfigurator = () => {
  const [lengthValue, setLengthValue] = useState('5');
  const [passwordConditionals, setPasswordConditionals] = useState({
    useUppercase: true,
    useLowercase: true,
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
      return { ...prevState, useLowercase: e.target.checked };
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

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPassword(+lengthValue, passwordConditionals);
  };

  return (
    <form className={classes.configurator} onSubmit={onSubmitForm}>
      <div className={classes.range}>
        <label htmlFor='password-range' className={classes['range-label']}>
          <h3>Character Length</h3>
          <span>{lengthValue}</span>
        </label>
        <input
          className={classes['range-range']}
          id='password-length'
          max={20}
          min={5}
          name='password-length'
          onChange={onLengthChange}
          type='range'
          value={lengthValue}
        />
      </div>

      <div className={classes.checkboxGroup}>
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

      <button>Generate</button>
    </form>
  );
};

export default PasswordConfigurator;
