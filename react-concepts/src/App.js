import React from 'react';
function App() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    // onmount
    const interval = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      // clear unmount
      clearInterval(interval);
    };
    // looking for something to change
  }, [count]);
  return (
    <div>
      <p>{count}</p>
    </div>
  );
}

export default App;
