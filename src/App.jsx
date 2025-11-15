import { Toaster } from 'sonner';
import { Sidebar } from './components/SideBar';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="flex">
      <Toaster toastOptions={{style:{color:"#010d25"}}} />
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default App;
