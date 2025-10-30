import { useEffect, useState } from "react";
import api from "./api/axios";
import { useErrorBoundary } from "react-error-boundary";

function Tasks({ fetchRetryCounter }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { showBoundary } = useErrorBoundary();
  useEffect(() => {
    async function fetchTasks() {
      try {
        setLoading(true);
        const res = await api.get("/tasks");
        console.log(res);
        setTasks(res.data);
      } catch (error) {
        showBoundary(error);
      } finally {
        setLoading(false);
      }
    }
    fetchTasks();
  }, [fetchRetryCounter]);
  return (
    <div>
      <h2>Tasks</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title} {task.isDone ? "✅" : "❌"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tasks;
