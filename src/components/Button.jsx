import PropTypes from 'prop-types';
import { tv } from 'tailwind-variants';

export const Button = ({
  children,
  variant = 'primary',
  onClick,
  size = 'small',
  className,
  ...rest
}) => {
  const button = tv({
    base: 'flex items-center justify-center gap-2 rounded-md px-3 transition hover:opacity-50',
    variants: {
      //variant below = button color
      variant: {
        primary: 'bg-brand-primary text-white',
        ghost: 'bg-transparent text-brand-dark-grey',
        secondary: 'bg-brand-secondary text-white',
        danger: 'bg-brand-danger text-white'
      },
      //size = button size
      size: {
        small: 'py-1 text-xs',
        large: 'py-2 text-sm',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
      },
    },
  });

  return (
    <button
      onClick={onClick}
      className={button({ variant, size, className, disabled: rest.disabled })}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'ghost', 'secondary', 'danger']),
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
  className: PropTypes.string.isRequired,
};
