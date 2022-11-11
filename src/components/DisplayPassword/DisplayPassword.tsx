import React, { MouseEventHandler, useEffect, useState } from "react";
import Card from "../ui/Card/Card";
import style from "./DisplayPassword.module.scss";

const DisplayPassword = ({ password }: DisplayPasswordInterface) => {
  const [showCopyText, setShowCopy] = useState(false);

  const onCopyClick = () => {
    setShowCopy(true);
    navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowCopy(false);
    }, 2000);
  }, [showCopyText]);

  const copyTextClass = showCopyText
    ? "copyPasswordBtn--text"
    : "copyPasswordBtn--text-hidden";

  return (
    <Card className="">
      <input type="text" value={password} className={style.passwordInput} />
      <button className={style.copyPasswordBtn} onClick={onCopyClick}>
        <span className={`${style[copyTextClass]}`}>Copied!</span>
        <span className="material-symbols-outlined">file_copy</span>
      </button>
    </Card>
  );
};

interface DisplayPasswordInterface {
  password: string;
}

export default DisplayPassword;
