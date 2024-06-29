import styles from "../services/styles";

const Button = ({ type }) => {
  const { bgColor, textColor, textSize } = styles[type];
  return (
    <button
      className={`p-3 rounded-sm m-2 text-fifth  ${bgColor} ${textColor} ${textSize}`}
    >
      button
    </button>
  );
};

export default Button;
