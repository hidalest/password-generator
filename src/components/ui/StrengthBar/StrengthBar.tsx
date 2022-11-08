import classes from "./StrengthBar.module.scss";

interface StrengthBarInterface {
  position: number;
  passwordStrength: "too-weak" | "weak" | "medium" | "strong";
}

const StrengthBar = ({ position, passwordStrength }: StrengthBarInterface) => {
  let correctClass = "transparent";
  if (passwordStrength === "strong" && position <= 4) {
    correctClass = "strong";
  }
  if (passwordStrength === "medium" && position <= 3) {
    correctClass = "medium";
  }
  if (passwordStrength === "weak" && position <= 2) {
    correctClass = "weak";
  }
  if (passwordStrength === "too-weak" && position <= 1) {
    correctClass = "too-weak";
  }

  return <div className={`${classes.bar} ${classes[`${correctClass}`]}`} />;
};

export default StrengthBar;
