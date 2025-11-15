import { Button } from './Button';
import { MdAdd } from 'react-icons/md';
import { VscTrash } from 'react-icons/vsc';
import { LuCloudSun, LuSun } from 'react-icons/lu';
import { GrMoon } from 'react-icons/gr';
import { TasksSeparator } from './TasksSeparator';
import { useState } from 'react';
import TASKS from '../constants/Tasks';
import TaskItem from './Taskitem';
import { toast } from 'sonner';

function Tasks() {
  const [tasks, setTasks] = useState(TASKS);
  const morningTasks = tasks.filter((task) => task.time === 'morning');
  const afternoonTasks = tasks.filter((task) => task.time === 'afternoon');
  const eveningTasks = tasks.filter((task) => task.time === 'evening');
  const hadleDeleteClick = (taskID) => {
    const newTasks = tasks.filter((task) => task.id !== taskID);
    setTasks(newTasks);
    toast.success("Task removed successfully")
  };
  const handleTaskCheckboxClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task;
      }
      if (task.status === 'not_started') {
        toast.success("task in progress")
        return { ...task, status: 'in_progress' };
      }
      if (task.status === 'in_progress') {
        toast.success("task started successfully")
        return { ...task, status: 'done' };
      }
      if (task.status === 'done') {
        toast.success("task about to be started")
        return { ...task, status: 'not_started' };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="y-6 w-full px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">My Tasks</span>
          <h2 className="text-xl font-semibold">My Tasks</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar Tarefas
            <VscTrash />
          </Button>
          <Button variant="primary">
            Nova Tarefa
            <MdAdd />
          </Button>
        </div>
      </div>

      <div className="rounded-xl bg-white p-1 pl-5">
        <div className="my-6 space-y-3">
          <TasksSeparator title="Morning" icon={<LuSun />} />
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleTaskCheckboxClick={handleTaskCheckboxClick}
              hadleDeleteClick={hadleDeleteClick}
            />
          ))}
        </div>
        <div className="my-6 space-y-3">
          <TasksSeparator title="Afternoon" icon={<LuCloudSun />} />
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleTaskCheckboxClick={handleTaskCheckboxClick}
              hadleDeleteClick={hadleDeleteClick}
            />
          ))}
        </div>
        <div className="my-6 space-y-3">
          <TasksSeparator title="Evening" icon={<GrMoon />} />
          {eveningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleTaskCheckboxClick={handleTaskCheckboxClick}
              hadleDeleteClick={hadleDeleteClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tasks;
