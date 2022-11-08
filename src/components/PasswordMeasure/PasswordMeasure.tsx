import React, { useState } from "react";
import StrengthBar from "../ui/StrengthBar/StrengthBar";

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
    useUppercase &&
    useLowercase &&
    !useSymbols &&
    useNumbers &&
    passwordLength >= 8;

  const weakPassword =
    useUppercase &&
    useLowercase &&
    !useSymbols &&
    useNumbers &&
    passwordLength <= 6;

  const tooWeakPassword =
    useUppercase &&
    useLowercase &&
    !useSymbols &&
    !useNumbers &&
    passwordLength <= 6;

  const passwordChecker = () => {
    if (strongPassword) {
      setPasswordStrength("strong");
      return;
    } else if (mediumPassword) {
      setPasswordStrength("medium");
      return;
    } else if (weakPassword) {
      setPasswordStrength("weak");
      return;
    } else {
      setPasswordStrength("too-weak");
      return;
    }
  };

  passwordChecker();

  return (
    <section>
      <h3>Strength</h3>
      <StrengthBar position={1} passwordStrength={passwordStrength} />
      <StrengthBar position={2} passwordStrength={passwordStrength} />
      <StrengthBar position={3} passwordStrength={passwordStrength} />
      <StrengthBar position={4} passwordStrength={passwordStrength} />
    </section>
  );
};

export default PasswordMeasure;
