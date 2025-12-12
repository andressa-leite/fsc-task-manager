import { useEffect, useState } from 'react';
import { GrMoon } from 'react-icons/gr';
import { LuCloudSun, LuSun } from 'react-icons/lu';
import { MdAdd } from 'react-icons/md';
import { VscTrash } from 'react-icons/vsc';
import { toast } from 'sonner';

import AddTasksDialog from './AddTasksDialog';
import { Button } from './Button';
import TaskItem from './Taskitem';
import { TasksSeparator } from './TasksSeparator';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [addTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      //pegar os dados da API
      const response = await fetch('http://localhost:3001/tasks', {
        method: 'GET',
      });
      //converter para json
      const tasks = await response.json();
      //atualizar state
      setTasks(tasks);
    };
    fetchTasks();
  }, []);

  const morningTasks = tasks.filter((task) => task.time === 'morning');
  const afternoonTasks = tasks.filter((task) => task.time === 'afternoon');
  const eveningTasks = tasks.filter((task) => task.time === 'evening');

  // const handleAddTaskSubmit = (task) => {
  //   setTasks([...tasks, task]);
  //   toast.success('Task added successfully');
  // };

  const handleAddTaskSubmit = async (task) => {
    const response = await fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      toast.error('Failed to add task');
      return;
    }
    setTasks([...tasks, task]);
    toast.success('Task added successfully');
  };

  const hadleDeleteClick = (taskID) => {
    const newTasks = tasks.filter((task) => task.id !== taskID);
    setTasks(newTasks);
    toast.success('Task removed successfully');
  };
  const handleTaskCheckboxClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task;
      }
      if (task.status === 'not_started') {
        toast.success('task in progress');
        return { ...task, status: 'in_progress' };
      }
      if (task.status === 'in_progress') {
        toast.success('task started successfully');
        return { ...task, status: 'done' };
      }
      if (task.status === 'done') {
        toast.success('task about to be started');
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
          <span className="text-xs font-semibold text-brand-primary">
            My Tasks
          </span>
          <h2 className="text-xl font-semibold">My Tasks</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Clear Tasks
            <VscTrash />
          </Button>
          <Button
            onClick={() => {
              setAddTaskDialogIsOpen(true);
            }}
            variant="primary"
          >
            New task
            <MdAdd />
          </Button>
          <AddTasksDialog
            isOpen={addTaskDialogIsOpen}
            handleClose={() => setAddTaskDialogIsOpen(false)}
            handleSubmit={handleAddTaskSubmit}
          />
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
