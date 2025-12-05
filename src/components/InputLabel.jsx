import PropTypes from "prop-types";

const InputLabel = (props) => {
  return (
    <lable htmlFor="time" className="text-sm font-semibold text-[#35383E]" {...props}>
      {props.children}
    </lable>
  );
};

InputLabel.propTypes = {
  children: PropTypes.string.isRequired
};

export default InputLabel;
