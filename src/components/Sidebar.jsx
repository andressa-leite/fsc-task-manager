import { SidebarButton } from './SidebarButton';
import { TiHome } from 'react-icons/ti';
import { FaTasks } from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-[#00ADB5]">Task Manager</h1>
        <p>
          A simple <span className="text-[#00ADB5]">Task Organizer</span>
        </p>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton variant="unselected">
          <TiHome className="text-[#00ADB5]" /> Home
        </SidebarButton>
        <SidebarButton variant="selected">
          <FaTasks />
          My Tasks
        </SidebarButton>
      </div>
    </div>
  );
};
