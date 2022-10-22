import React from 'react';
import Card from '../ui/Card';
import style from './DisplayPassword.module.scss';

const DisplayPassword = ({
  password = 'P4$5W0rD!',
}: DisplayPasswordInterface) => {
  return (
    <Card className='test'>
      <input
        type='text'
        placeholder={password}
        className={style.passwordInput}
      />
      <button className={style.copyPasswordBtn}>
        <span className='material-symbols-outlined'>file_copy</span>
      </button>
    </Card>
  );
};

interface DisplayPasswordInterface {
  password?: string;
}

export default DisplayPassword;
