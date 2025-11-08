import PropTypes from 'prop-types';

const TaskItem = ({ task }) => {
  const getStatusClasses = () => {
    if (task.status === 'done') {
      return 'bg-[#00ADB5] text-[#00ADB5]';
    }
    if (task.status === "in_progress") {
        return "bg-[#FFAA04] text-[#FFAA04]"
    }
     if (task.status === "not_started") {
        return "bg-[#35383E] text-[#35383E]"
    }
  };

  return (
    <div className={`flex items-center gap-2 rounded-lg bg-opacity-10 px-4 py-3 ${getStatusClasses()}`}>
      {task.title}
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.string.isRequired,
};

export default TaskItem;
