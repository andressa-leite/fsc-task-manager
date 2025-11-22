import PropTypes from 'prop-types';

export const Button = ({ children, variant = 'primary', onClick }) => {
  const getVariantClasses = () => {
    if (variant === 'primary') {
      return 'bg-[#00ADB5] text-white';
    }
    if (variant === 'ghost') {
      return 'bg-transparent text-[#818181]';
    }
  };
  return (
    
    <button
      onClick={onClick}
      className={`hover:opacity-50 transition flex items-center gap-2 rounded-md px-3 py-1 text-xs ${getVariantClasses()}`}
    >    
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
