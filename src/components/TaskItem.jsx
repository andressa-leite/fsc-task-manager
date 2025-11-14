import PropTypes from 'prop-types';
import { CiRedo } from 'react-icons/ci';
import { LuSquareArrowOutUpRight } from 'react-icons/lu';
import { MdOutlineDone } from 'react-icons/md';

const TaskItem = ({ task }) => {
  const getStatusClasses = () => {
    if (task.status === 'done') {
      return 'bg-[#00ADB5] text-[#00ADB5]';
    }
    if (task.status === 'in_progress') {
      return 'bg-[#FFAA04] text-[#FFAA04]';
    }
    if (task.status === 'not_started') {
      return 'bg-[#35383E] text-[#35383E]';
    }
  };

  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-lg bg-opacity-10 px-4 py-3 ${getStatusClasses()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses()}`}
        >
          {/* checkbox invisível */}
          <input
            type="checkbox"
            checked={task.status === 'done'}
            readOnly
            className="absolute h-full w-full cursor-pointer opacity-0"
          />
          {/* ícone aparece se estiver marcada */}
          {task.status === 'done' && (
            <MdOutlineDone className="absolute text-lg text-white" />
          )}
          {task.status === 'in_progress' && (
            <CiRedo className="absolute animate-spin text-lg text-white" />
          )}
        </label>
        {task.title}
      </div>
      <a href='#' className='hover:opacity-75 transition'>
        <LuSquareArrowOutUpRight />
      </a>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.string.isRequired,
};

export default TaskItem;
