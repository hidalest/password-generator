import React from 'react';
import style from './DisplayPassword.module.scss';

const DisplayPassword = ({
  password = 'P4$5W0rD!',
}: DisplayPasswordInterface) => {
  return (
    <div className={style.password}>
      <h1>{password}</h1>
      <button className={style.copyPasswordBtn}>
        <span className='material-symbols-outlined'>file_copy</span>
      </button>
    </div>
  );
};

interface DisplayPasswordInterface {
  password?: string;
}

export default DisplayPassword;
