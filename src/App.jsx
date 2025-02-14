import { useState } from "react";
import { FaDatabase, FaPaperPlane } from "react-icons/fa"; // Importing icons
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  return (
    <div>
      <h1><FaDatabase />Welcome to the SQL Translator</h1>
      <p className="description">
        This tool allows you to convert natural language queries into SQL statements. 
        Simply type what you need in plain English, and we'll generate the SQL query for you!
      </p>
      <h3>You may enter your message and it will give you an SQL translation</h3>

      <div className="container">
        <input 
          type="text" 
          placeholder="Enter your query in natural language..." 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />
        <button><FaPaperPlane />Translate</button>
      </div>
    </div>
  );
}

export default App;