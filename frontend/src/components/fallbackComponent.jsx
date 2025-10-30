const fallbackComponent = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h2>Error Boundary Component</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
};

export default fallbackComponent;
