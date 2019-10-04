import React from 'react'

export const experience = {
  maintext: "cs @ cornell engineering (bs '19, m.eng '20)",
  subtext: "i like distributed systems and infrastructure eng",
  items:[
    (
      <div className="force-line">
        <img alt="img" className="icon-pic" src={require("../images/icons/str.png")}/>&nbsp;
        <b> incoming software engineer </b>, <a href="https://www.stripe.com" target="_blank" rel="noopener noreferrer">stripe</a>
      </div>
    ),
    (
      <div className="force-line">
        <img alt="img" className="icon-pic" src={require("../images/icons/lyf.png")}/>&nbsp;
        <b> summer '19</b> intern, <a href="https://www.lyft.com" target="_blank" rel="noopener noreferrer">lyft</a>
      </div>
    ),
    (
      <div className="force-line">
        <img alt="img" className="icon-pic" src={require("../images/icons/str.png")}/>&nbsp;
        <b> summer '18</b> intern, <a href="https://www.stripe.com" target="_blank" rel="noopener noreferrer">stripe</a>
      </div>
    ),
    (
      <div className="force-line">
        <img alt="img" className="icon-pic" src={require("../images/icons/cua.png")}/>&nbsp;
        platform, <a href="https://www.cuair.org" target="_blank" rel="noopener noreferrer">cu air</a>
      </div>
    ),
    (
      <div className="force-line">
        <img alt="img" className="icon-pic" src={require("../images/icons/acsu.png")}/>&nbsp;
        web dev lead, <a href="http://acsu.cornell.edu" target="_blank" rel="noopener noreferrer">acsu</a>
      </div>
    ),
  ]
}
