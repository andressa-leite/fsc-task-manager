import { Button } from './Button';
import { MdAdd } from 'react-icons/md';
import { VscTrash } from 'react-icons/vsc';
import { LuCloudSun, LuSun } from 'react-icons/lu';
import { GrMoon } from 'react-icons/gr';

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
      <div className="rounded-xl bg-white pl-5 p-1">
        <div className="my-6 space-y-3">
          {/* Morning */}

          <div className="flex gap-2 border-b border-solid border-[#F4F4F5] pb-1">
            <p className="pt-1">
              <LuSun />
            </p>
            <p> Morning</p>
          </div>
        </div>

        {/* Afternoon */}
        <div className="my-6 space-y-3">
          <div className="flex gap-2 border-b border-solid border-[#F4F4F5] pb-1">
            <p className="pt-1">
              <LuCloudSun />
            </p>
            <p> Afternoon</p>
          </div>
        </div>
        {/* Evening */}
        <div className="my-6 space-y-3">
          <div className="flex gap-2 border-b border-solid border-[#F4F4F5] pb-1">
            <p className="pt-1">
              <GrMoon />
            </p>
            <p> Evening</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
