import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => setData("This is client-rendered data!"), 1000);
  }, []);

  return (
    <div>
      <h1>Client-Side Rendering (CSR)</h1>
      <p>{data || "Loading..."}</p>
    </div>
  );
};

export default App;
