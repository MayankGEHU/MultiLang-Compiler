import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import "./PromoSection.css";

const PromoSection = () => {
  return (
    <div className="promo-container">
      <div className="promo-left">
        <h1 className="promo-heading">
        Code, <br />
          <span className="highlight"> compile</span>
          <span className="underscore">_</span> <br />
          and conquer the web.
        </h1>
        <p className="promo-subtext">
        Create a new project or connect an existing one to explore features like real-time code execution, syntax validation, debugging, collaboration, and more.
        </p>
        <div className="promo-buttons">
          <button className="promo-btn">Read the docs</button>
          <button className="promo-btn">Developer Hub</button>
        </div>
      </div>

      <div className="promo-codeblock">
        <div className="codeblock-header">
          <div className="codeblock-title">
            <BiCodeAlt className="code-icon" />
            <span>Online Multi Language Compiler</span>
          </div>
          <div className="codeblock-icons">
            <div className="code-dot red"></div>
            <div className="code-dot yellow"></div>
            <div className="code-dot green"></div>
          </div>
        </div>
        <pre className="code-snippet">
        <code className="language-js">
{`export function `}<span className="code-func">Introduction</span>{`({ layout }) {
  `}<span className="code-keyword">const</span>{` name = `}<span className="code-string">"Mayank Singh"</span>{`;
  `}<span className="code-keyword">const</span>{` role = `}<span className="code-string">"Full Stack Developer"</span>{`;
  `}<span className="code-keyword">const</span>{` interests = [`}
  <span className="code-string">"Web Dev"</span>{`, `}
  <span className="code-string">"DSA"</span>{`, `}
  <span className="code-string">"Open Source"</span>{`];

  `}<span className="code-keyword">return</span>{` (
    <div className="intro">
      <h1>Hello, I'm {name} 👋</h1>
      <h2>{role}</h2>
      <p>Passionate about {interests.join(', ')}</p>
    </div>
  );
}`}
</code>


        </pre>
        <div className="deploy-button">Code your ideas, instantly, online.</div>
      </div>
    </div>
  );
};

export default PromoSection;
