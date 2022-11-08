import classes from "./StrengthBar.module.scss";

interface StrengthBarInterface {
  position: number;
  passwordStrength: "too-weak" | "weak" | "medium" | "strong";
}

const StrengthBar = ({ position, passwordStrength }: StrengthBarInterface) => {
  console.log(passwordStrength);
  return <div className={`${classes.bar} ${classes[passwordStrength]}`} />;
};

export default StrengthBar;
