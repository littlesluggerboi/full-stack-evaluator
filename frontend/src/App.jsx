import "./App.css";
import Tasks from "./Tasks";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import fallbackComponent from "./components/fallbackComponent";

function App() {
  const [fetchRetryCounter, setfetchRetryCounter] = useState(0);
  const onClickRetry = () => {
    setfetchRetryCounter((fetchRetryCounter) => fetchRetryCounter + 1);
  };
  return (
    <div className="app">
      <h1>📝 React Task Evaluator</h1>
      <ErrorBoundary
        FallbackComponent={fallbackComponent}
        onReset={onClickRetry}
      >
        <Tasks fetchRetryCounter={fetchRetryCounter} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
