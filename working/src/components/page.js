import React from 'react'
import Entry from './entry'

const Page = ({ data, imgPath, imgStyle }) => (
  <div className="row">
    <div className="content-section">
      <div className="col-md-4">
        <div style={imgStyle} className="image">
          <img alt="img" className="img-responsive pic col-centered" src={imgPath}/>
        </div>
      </div>
      <div className="col-md-8">
        <ul>
        {
          data.items.map((val, key) => {
            return (
              <li className="list-item" key={key}>
                <Entry
                  color={val.color}
                  imgPath={val.imgPath}
                  boldText={val.boldText}
                  regText={val.regText}
                  url={val.url}
                  company={val.company}
                />
              </li>
            )
          })
        }
        </ul>
      </div>
    </div>
  </div>
)

export default Page
