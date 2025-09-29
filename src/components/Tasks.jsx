import { Button } from './Button';
import { MdAdd } from 'react-icons/md';
import { VscTrash } from 'react-icons/vsc';

function Tasks() {
  return (
    <div className="w-full px-8 py-16">
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
    </div>
  );
}

export default Tasks;
