import PropTypes from 'prop-types';

import InputLabel from './InputLabel';

const Input = ({ label, ...rest }) => {
  return (
    <div className='space-y-1 flex flex-col text-left'>
      <InputLabel  htmlFor={rest.id}>{label}</InputLabel>
      <input
        className="rounded-lg outline-[#00ADB5] border border-solid border-[#ECECEC] px-4 py-3 placeholder:text-sm"
        {...rest}
      />
      
    </div>
  );
};

export default Input;

Input.propTypes = {
  label: PropTypes.string.isRequired,
};
