import PropTypes from 'prop-types';
import { useState } from 'react';
import { CiRedo } from 'react-icons/ci';
import { LuSquareArrowOutUpRight } from 'react-icons/lu';
import { MdOutlineDone } from 'react-icons/md';
import { TbTrashXFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const TaskItem = ({ task, handleTaskCheckboxClick, onDeleteSuccess }) => {
  const [deleteTaskIsLoading, setDeleteTaskIsLoading] = useState(false);

  const hadleDeleteClick = async (taskID) => {
    setDeleteTaskIsLoading(true);
    const response = await fetch(`http://localhost:3001/tasks/${taskID}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      setDeleteTaskIsLoading(false);
      toast.error('Failed to delete task');
      return;
    }
    onDeleteSuccess(task.id);
    setDeleteTaskIsLoading(false);
  };

  const getStatusClasses = () => {
    if (task.status === 'done') {
      return 'bg-brand-primary text-brand-primary';
    }
    if (task.status === 'in_progress') {
      return 'bg-brand-process text-brand-process';
    }
    if (task.status === 'not_started') {
      return 'bg-brand-stone text-brand-stone';
    }
  };

  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-lg bg-opacity-10 px-4 py-3 transition ${getStatusClasses()}`}
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
            onChange={() => handleTaskCheckboxClick(task.id)}
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
      <div className="flex items-center gap-2">
        <button
          className="transition hover:opacity-75"
          onClick={() => hadleDeleteClick(task.id)}
          disabled={deleteTaskIsLoading}
        >
          {deleteTaskIsLoading ? (
            <CiRedo className="animate-spin text-lg text-slate-800" />
          ) : (
            <TbTrashXFilled />
          )}
        </button>
        <Link to={`/task/${task.id}`} className="transition hover:opacity-75">
           <LuSquareArrowOutUpRight />
        </Link>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  handleTaskCheckboxClick: PropTypes.func.isRequired,
  hadleDeleteClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onDeleteSuccess: PropTypes.func.isRequired,
};

export default TaskItem;
