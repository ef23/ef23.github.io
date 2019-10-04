import React from 'react'

const Page = ({ data, imgPath, imgStyle }) => (
  <div className="row">
    <div className="content-section">
      <div className="col-md-4 col-md-offset-2">
        <div style={imgStyle} className="image">
          <img alt="img" className="img-responsive pic col-centered" src={imgPath}/>
        </div>
      </div>
      <div className="col-md-6">
        <div className="contain-text">
          <ul>
          {
            data.items.map((val, key) => {
              return (
                <li className="list-item" key={key}>
                  {val}
                </li>
              )
            })
          }
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Page
