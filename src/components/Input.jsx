import PropTypes from 'prop-types';

const Input = ({ lable, ...rest }) => {
  return (
    <div className='space-y-1 flex flex-col text-left'>
      <lable htmlFor={rest.id} className="text-sm font-semibold text-[#35383E]">{lable}</lable>
      <input
        className="rounded-lg outline-[#00ADB5] border border-solid border-[#ECECEC] px-4 py-3 placeholder:text-sm"
        {...rest}
      />
      
    </div>
  );
};

export default Input;

Input.propTypes = {
  lable: PropTypes.string.isRequired,
};
