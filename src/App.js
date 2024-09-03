import React, { useState } from 'react';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you would typically make an API call to your LLM
    // For demonstration, we'll just set a mock response
    setResponse(`You asked: "${prompt}". This is where the LLM response would appear.`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Generative AI Interaction</h1>
      </header>
      <div className="App-body">
        <form onSubmit={handleSubmit}>
          <textarea
            value={prompt}
            onChange={handleInputChange}
            placeholder="Enter your prompt here..."
            rows="4"
            cols="50"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        <div className="App-response">
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
