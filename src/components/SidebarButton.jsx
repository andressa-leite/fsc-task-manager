import PropTypes from 'prop-types';

export const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant === 'unselected') {
      return 'text-brand-dark-blue';
    }
    if (variant === 'selected') {
      return ' bg-brand-primary bg-opacity-15 text-brand-primary';
    }
  };
  return (
    <a
      href="/Home"
      className={`flex items-center rounded-lg gap-2 px-6 py-3 ${getVariantClasses()}`}
    >
      {children}
    </a>
  );
};

SidebarButton.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
