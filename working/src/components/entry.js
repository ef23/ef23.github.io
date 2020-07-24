import React from 'react'

import './entry.css'

const Entry = ({ color, imgPath, date, regText, url, company }) => (
  <div className="force-line entry">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img alt="img" className="icon-pic" src={imgPath}/>
    </a> &nbsp;
    {date} @ <b><a href={url} target="_blank" rel="noopener noreferrer">{company}</a></b> | {regText}
  </div>
)

export default Entry
