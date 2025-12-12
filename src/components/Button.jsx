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
        ghost: 'text-brand-dark-grey bg-transparent',
        secondary: 'bg-brand-secondary text-white',
      },
      //size = button size
      size: {
        small: ' py-1 text-xs',
        large: ' py-2 text-sm',
    },
  }});

 
  return (
    <button
      onClick={onClick}
      className={button({ variant, size, className })} {...rest}
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
