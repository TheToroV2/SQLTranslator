import { useState } from "react";
import { FaDatabase, FaPaperPlane } from "react-icons/fa";
import { translateQuery } from "./api"; // Import API function
import "./App.css";

function App() {
    const [input, setInput] = useState("");
    const [translatedSQL, setTranslatedSQL] = useState("");

    const handleTranslate = async () => {
        const sqlResult = await translateQuery(input);
        setTranslatedSQL(sqlResult || "Error translating query. Please try again.");
    };

    return (
        <div>
            <h1><FaDatabase /> Welcome to the SQL Translator</h1>
            <p className="description">
                Convert natural language into SQL statements. Type your request in plain English!
            </p>

            <div className="container">
                <input 
                    type="text" 
                    placeholder="Enter your query in natural language..." 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button onClick={handleTranslate}>
                    <FaPaperPlane /> Translate
                </button>
            </div>

            {translatedSQL && (
                <div className="result">
                    <h3>SQL Translation:</h3>
                    <p>{translatedSQL}</p>
                </div>
            )}
        </div>
    );
}

export default App;
