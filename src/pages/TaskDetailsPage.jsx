import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const TaskDetailsPage = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`http://localhost:3001/tasks/${taskId}`, {
        method: 'GET',
      });
      const data = await response.json();
      console.log({data});
      setTask(data);
    };
    fetchTask();
  }, [taskId]);
  return <h1>TaskDetailsPage</h1>;
};
