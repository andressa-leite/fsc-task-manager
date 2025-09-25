import PropTypes from 'prop-types';

export const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant === 'unselected') {
      return 'text-[#35383E]';
    }
    if (variant === 'selected') {
      return ' bg-[#E6F7F8] text-[#00ADB5]';
    }
  };
  return (
    <a href="/Home" className={`px-6 py-3 ${getVariantClasses()}`}>
      {children}
    </a>
  );
};

SidebarButton.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
