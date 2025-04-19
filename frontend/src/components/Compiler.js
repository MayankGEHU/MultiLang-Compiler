import React, { useState } from "react";
import axios from "axios";
import Editor from "@monaco-editor/react";
import "../App.css";

const Compiler = () => {
  const [code, setCode] = useState(`#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!";\n    return 0;\n}`);
  const [output, setOutput] = useState("");

  const handleSubmit = async () => {
    const payLoad = {
      language: "cpp",
      code,
    };

    try {
      const { data } = await axios.post("http://localhost:5000/run", payLoad);
      setOutput(data.output);
    } catch (err) {
      console.log(err.response);
      setOutput("An error occurred. Please check your code or server.");
    }
  };

  return (
    <div className="compiler-main">
      <div className="compiler-topbar">
        <span className="tab active">Main.cpp</span>
        <span className="title">C++ Hello World</span>
        <div className="controls">
          <button className="run-button" onClick={handleSubmit}>RUN ▶</button>
        </div>
      </div>

      <div className="compiler-body">
        <div className="editor-container">
          <Editor
            height="500px"
            defaultLanguage="cpp"
            value={code}
            theme="light"
            onChange={(value) => setCode(value)}
          />
        </div>

        <div className="io-section">
          <div className="input-box">
            <h4>STDIN</h4>
            <input placeholder="Input for the program (Optional)" />
          </div>
          <div className="output-box">
            <h4>Output:</h4>
            <pre>{output || "Click on RUN button to see the output"}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compiler;
