import styles from "../services/styles";

const Button = ({ type }) => {
  const { bgColor, textColor } = styles[type];
  return (
    <button
      className={`p-3 rounded-sm m-2 text-fifth  ${bgColor} ${textColor}`}
    >
      button
    </button>
  );
};

export default Button;
