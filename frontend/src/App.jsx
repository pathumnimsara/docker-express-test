import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const testBackend = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/test");
      const data = await response.json();

      setMessage(data.message);
    } catch (error) {
      setMessage("Backend connection failed!");
    }

    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Docker Full Stack Test 🚀</h1>

      <p>React Frontend</p>

      <button onClick={testBackend}>
        {loading ? "Connecting..." : "Test Backend"}
      </button>

      {message && (
        <h2>{message}</h2>
      )}
    </div>
  );
}

export default App;