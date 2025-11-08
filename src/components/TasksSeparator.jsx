import PropTypes from "prop-types";

export const TasksSeparator = ({title, icon}) => {
  return (
    <div className="flex gap-2 border-b border-solid border-[#F4F4F5] pb-1">
      {icon}
      {title}
    </div>
  )
}

 TasksSeparator.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};