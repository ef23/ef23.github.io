import React from 'react'

import './entry.css'

const Entry = ({ color, imgPath, boldText, regText, url, company }) => (
  <div className="force-line entry" style={{background: color}}>
    <img alt="img" className="icon-pic" src={imgPath}/>&nbsp;
    <b> {boldText} </b> {regText}, <a href={url} target="_blank" rel="noopener noreferrer">{company}</a>
  </div>
)

export default Entry
