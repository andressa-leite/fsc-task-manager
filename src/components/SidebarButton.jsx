import PropTypes from 'prop-types';
import { tv } from 'tailwind-variants';

export const SidebarButton = ({ children, variant }) => {

   const sidebarButton = tv({
    base: 'flex items-center rounded-lg gap-2 px-6 py-3',
    variants: { 
      //variant below = button color
      variant: {
        unselected: 'text-brand-dark-blue',
        selected: ' bg-brand-primary bg-opacity-15 text-brand-primary',
      },
    },
  });

    return (
    <a
      href="/Home"
      className={sidebarButton({ variant })}
    >
      {children}
    </a>
  );
};

SidebarButton.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
