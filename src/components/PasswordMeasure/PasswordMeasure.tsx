import React, { useCallback, useEffect, useState } from "react";
import StrengthBar from "../ui/StrengthBar/StrengthBar";
import classes from "./PasswordMeasure.module.scss";

interface passwordMeasureInterface {
  passwordLength: number;
  passwordConditionals: {
    useUppercase: boolean;
    useLowercase: boolean;
    useSymbols: boolean;
    useNumbers: boolean;
  };
}

const PasswordMeasure = ({
  passwordLength,
  passwordConditionals,
}: passwordMeasureInterface) => {
  const { useUppercase, useLowercase, useSymbols, useNumbers } =
    passwordConditionals;
  const [passwordStrength, setPasswordStrength] = useState<
    "too-weak" | "weak" | "medium" | "strong"
  >("medium");

  const strongPassword =
    useUppercase &&
    useLowercase &&
    useSymbols &&
    useNumbers &&
    passwordLength >= 8;

  const mediumPassword =
    (useUppercase || useLowercase) &&
    !useSymbols &&
    useNumbers &&
    passwordLength >= 8;

  const weakPassword =
    (useUppercase || useLowercase) &&
    !useSymbols &&
    useNumbers &&
    passwordLength <= 6;

  const tooWeakPassword =
    (useUppercase || useLowercase) && !useSymbols && !useNumbers;

  const passwordChecker = useCallback(() => {
    let category: "medium" | "strong" | "weak" | "too-weak" = "medium";
    if (strongPassword) {
      category = "strong";
    } else if (mediumPassword) {
      category = "medium";
    } else if (weakPassword) {
      category = "weak";
    } else if (tooWeakPassword) {
      category = "too-weak";
    } else {
      category = "weak";
    }
    return category;
  }, [mediumPassword, strongPassword, weakPassword, tooWeakPassword]);

  useEffect(() => {
    const category = passwordChecker();
    setPasswordStrength(category);
  }, [passwordChecker]);

  passwordChecker();

  return (
    <section className={classes.container}>
      <h3>Strength</h3>
      <div className={classes.barsContainer}>
        <p className={classes["barsContainer--text"]}>{passwordStrength}</p>
        <StrengthBar position={1} passwordStrength={passwordStrength} />
        <StrengthBar position={2} passwordStrength={passwordStrength} />
        <StrengthBar position={3} passwordStrength={passwordStrength} />
        <StrengthBar position={4} passwordStrength={passwordStrength} />
      </div>
    </section>
  );
};

export default PasswordMeasure;
