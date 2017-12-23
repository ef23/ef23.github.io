import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Page = (props) => {


  const projectspage = (
    <div className = "list-section">
      <li>
          <div className="contain-text">
          <ul>
            <div className="force-line">
              <img className="icon-pic" src={require("./images/icons/str.png")}/>
              <b> summer '18</b> intern @ <a href="https://www.stripe.com" target="_blank">stripe</a>
            </div>
          </ul>
          <ul>
            <div className="force-line">
              <img className="icon-pic" src={require("./images/icons/com.png")}/>
              <b> summer '17</b> intern @ <a href="https://www.commvault.com" target="_blank">commvault</a>
            </div>
          </ul>

          <ul>
            <div className="force-line">
              <img className="icon-pic" src={require("./images/icons/cua.png")}/>
              <b> now </b> distributed systems @ <a href="https://www.cuair.org" target="_blank">cu air</a>
            </div>
          </ul>
          <ul>
            <div className = "icons-section">
              <button onClick={this.handleProjects}>&nbsp;projects &#187;&nbsp;</button>
              <button onClick={this.handleProjects}>&nbsp;misc &#187; &nbsp;</button>
              <div>&nbsp;</div>
            </div>
          </ul>
          </div>
      </li>
    </div>
    );

  return props.page==0 ? homepage : null;
}

export default Page;