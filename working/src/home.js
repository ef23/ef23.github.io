import React from 'react';

import Page from './components/page'

import {experience} from './content/experience'
import './index.css';

const opacity = 0.8;
const defaultBackground = "rgba(256,256,256," + opacity + ")";

class Home extends React.Component {
  constructor(props){
    super(props);
    this.pages = [
      experience,
    ]
  }

  render() {
    const page = this.pages[0];
    return (
      <div className = "container-fluid literallyjustpadding">
        <div className = "col-md-2 col-md-offset-3">
          <div className="image">
            <img alt="img" className="img-responsive pic col-centered" src={require("./images/me.png")}/>
          </div>
        </div>
        <div className = "col-md-6">
          <div className = "parallax-header headerbox contain-text">
            <h1>Eric Feng</h1>
            <hr/>
               <div className = "icons-section ">
                <a href="https://drive.google.com/open?id=1nd847YCucCIuJmsUiK-oBe6Y0ulMBN0W" target="_blank" rel="noopener noreferrer"><i className="fa fa-file-text fa-2x" aria-hidden="true"></i></a>
                <a href="http://github.com/ef23" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/evf23" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
                <a href="mailto:evf23@cornell.edu?subject=Hi Eric"><i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
              </div>
            <hr/>
          </div>
          <p> {page.maintext} </p>
          <p> {page.subtext} </p>
        </div>
        <div className="col-md-12"><hr/></div>
        <Page data={page}  />
      </div>
    );
  }
}

export default Home;
