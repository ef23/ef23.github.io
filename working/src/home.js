import React from 'react';

import Page from './components/page'

import {experience} from './content/experience'
import './index.css';

const opacity = 0.8;
const defaultBackground = "rgba(256,256,256," + opacity + ")";

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: require("./images/me.png"),
      background: defaultBackground
    }

    this.pages = [
      experience,
    ]
  }

  render() {
    const page = this.pages[0];
    const imgStyle = this.state.background === defaultBackground ?
      {background: this.state.background, border: "none"} :
      {background: this.state.background}
    return (
      <div className = "container-fluid literallyjustpadding">
        <div className = "col-md-6 col-centered">
          <div className = "text-center">
            <div className = "parallax-header headerbox contain-text">
              <h1>eric feng</h1>
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
            <hr />
          </div>
        </div>
        <Page data={page} img={this.state.image} imgStyle={imgStyle} />
      </div>
    );
  }
}

export default Home;
