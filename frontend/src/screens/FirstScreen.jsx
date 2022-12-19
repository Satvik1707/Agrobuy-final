import React from "react";
import "../App.css";
const FirstScreen = () => {
  return (
    <div>
      <div className="c1">
        <div className="leftpane">
          <a href="/farmer">
            <button className="button">Farmer's Portal</button>
          </a>
        </div>
        <div className="middlepane">
          <a href="/breeder">
            <button className="button">Breeder's Portal</button>
          </a>
        </div>
        <div className="rightpane">
          <a href="/transport">
            <button className="button">Transporter's Portal</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
