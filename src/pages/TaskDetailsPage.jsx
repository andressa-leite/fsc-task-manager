import { useEffect, useState } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { VscTrash } from 'react-icons/vsc';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '../components/Button';
import Input from '../components/Input';
import InputLabel from '../components/InputLabel';
import { Sidebar } from '../components/Sidebar';
import TimeSelect from '../components/TimeSelect';

export const TaskDetailsPage = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`http://localhost:3001/tasks/${taskId}`, {
        method: 'GET',
      });
      const data = await response.json();
      console.log({ data });
      setTask(data);
    };
    fetchTask();
  }, [taskId]);
  return (
    <div className="flex items-start">
      <Sidebar />

      <div className="flex w-full flex-col space-y-6 px-8 py-16">
        {/* Barra do topo */}
        <div className="flex w-full items-start justify-between">
          {/* Lado esquerdo */}
          <div>
            <button onClick={handleBackClick}>
              <FaArrowCircleLeft size={32} className="text-brand-primary" />
            </button>

            <div className="flex items-center gap-1 pt-2">
              <span className="text-brand-text-grey">My Tasks</span>
              <MdOutlineKeyboardArrowRight className="text-brand-text-grey" />
              <span className="text-brand-primary">{task?.title}</span>
            </div>

            <h1 className="mt-1 text-xl font-semibold">{task?.title}</h1>
          </div>

          {/* Lado direito */}
          <Button variant="danger" className="h-fit">
            <VscTrash />
            Delete task
          </Button>
        </div>

        {/* Dados da tarefa */}
        <div className="rounded-xl bg-brand-white p-6 space-y-6">
          <div>
            <Input id="title" label="Title" value={task?.title} />
          </div>
          <div>
            <TimeSelect value={task?.time} />
          </div>
          <div>
            <Input id="description" label="Description" value={task?.description} />
          </div>
        </div>
      </div>
    </div>
  );
};
