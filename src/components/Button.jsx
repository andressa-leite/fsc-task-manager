import PropTypes from 'prop-types';

export const Button = ({
  children,
  variant = 'primary',
  onClick,
  size = 'small',
  className,
}) => {
  const getVariantClasses = () => {
    if (variant === 'primary') {
      return 'bg-brand-primary text-white';
    }
    if (variant === 'ghost') {
      return 'bg-transparent text-brand-dark-grey';
    }
    if (variant === 'secondary') {
      return 'bg-brand-light-grey text-brand-dark-blue'
    }
  }

  const getSizeClasses = () => {
    if (size === 'small') {
      return ' py-1 text-xs';
    }
    if (size === 'large') {
      return ' py-2 text-sm';
  };
}

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-md px-3 justify-center py-1 text-xs transition hover:opacity-50 ${getVariantClasses()} ${getSizeClasses()} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
