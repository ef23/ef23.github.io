import React from 'react'
import Entry from './entry'

const Page = ({ data, imgPath, imgStyle }) => (
  <div className="row">
    <div className="content-section">
      <div className="col-md-8 col-centered">
        <ul>
        {
          data.items.map((val, key) => {
            return (
              <li key={key}>
                <hr />
                <Entry
                  color={val.color}
                  imgPath={val.imgPath}
                  date={val.date}
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
