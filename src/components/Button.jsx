import PropTypes from "prop-types";

const Button = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`my-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition ${className}`}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired, 
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
