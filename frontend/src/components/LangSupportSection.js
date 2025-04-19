import React from "react";
import "./LangSupportSection.css";
import Cpp from "../assets/c-.png"
import Java from "../assets/java.png"
import Python from "../assets/python.png"
import Js from "../assets/js.png"
import Html from "../assets/html-5.png"
import Csharp from "../assets/c-sharp.png"
import Php from "../assets/php.png"
import CLang from "../assets/lang-c.png"

const languages = [
  { name: "Html", icon: <img src={Html} alt="Html" className="lang-img" />  },
  { name: "Python", icon: <img src={Python} alt="Python" className="lang-img" />  },
  { name: "JavaScript", icon: <img src={Js} alt="Js" className="lang-img" />  },
  { name: "C", icon: <img src={CLang} alt="CLang" className="lang-img" />  },
  { name: "C++", icon: <img src={Cpp} alt="C++" className="lang-img" />  },
  { name: "Java", icon: <img src={Java} alt="java" className="lang-img" />  },
  { name: "C-sharp", icon: <img src={Csharp} alt="Csharp" className="lang-img" />  },
  { name: "Php", icon: <img src={Php} alt="Php" className="lang-img" />  },
];

function LangSupportSection() {
  return (
    <div className="LangSupportSection-main">
      <div className="lang-grid">
        {languages.map((lang, index) => (
          <div className="lang-box" key={index}>
            <span>{lang.name}</span>
            <span className="lang-icon">{lang.icon}</span>
          </div>
        ))}
      </div>
      <section className="feature-extension">
        <div className="feature-heading">
          <h2>Go further with powerful features</h2>
          <p>
            Code faster and smarter with a powerful online compiler — real-time
            collaboration, intelligent bug tracking, smart suggestions, and a
            multi-language editor, all in one place.
          </p>
        </div>

        <div className="features-bottom">
          <div className="feature-card">
            <span className="feature-label green">real-time collaboration</span>
            <h3>Collaborate with your friends</h3>
            <p>
              Code together instantly using Socket.io — share your workspace,
              debug live, and build projects as a team in real time.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-label pink">Multi-language support</span>
            <h3>Write code in your favorite language</h3>
            <p>
              Whether it's Python, JavaScript, C++, or Java — switch
              effortlessly between languages and build without limits, all in
              one powerful editor.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-label orange">Smart suggestions</span>
            <h3>Catch errors as you code</h3>
            <p>
              Get real-time suggestions and instant feedback — spot bugs, fix
              issues, and improve code quality with intelligent insights right
              in the editor.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LangSupportSection;
