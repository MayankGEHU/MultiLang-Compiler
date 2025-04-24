import React, { useState } from "react";
import axios from "axios";
import Editor from "@monaco-editor/react";
import "../App.css";
import Dropdown from 'react-bootstrap/Dropdown';

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
        <div className="language-changer">
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</div>


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
