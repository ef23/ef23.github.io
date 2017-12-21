import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      page: 0,
      image: require("./images/pic.jpg")
    }
    this.handleProjects = this.handleProjects.bind(this);
  }

  handleProjects() {
    window.alert("work in progress...")
  }

  render() {
    let homepageContent = (
      <div>
      <div className = "list-section">
        <li>
            <ul><i className="icon-java-bold" aria-hidden="true"></i><b>summer '18</b> intern @ <a href="https://stripe.com" target="_blank">stripe</a></ul>
            <ul><i className="fa fa-html5" aria-hidden="true"></i><b> summer '17</b> intern @ <a href="https://commvault.com" target="_blank">commvault</a></ul>
            <ul><i className="icon-python" aria-hidden="true"></i> distributed systems @ <a href="https://cuair.org" target="_blank">cu air</a> </ul>
            <ul>
              <div className = "icons-section">
                <button onClick={this.handleProjects}>&nbsp;projects &#187;&nbsp;</button> <button onClick={this.handleProjects}>&nbsp;misc &#187; &nbsp;</button><div>&nbsp;</div>
              </div>
            </ul>
        </li>
      </div>
      </div>
      )
    return (
      <div className = "container-fluid literallyjustpadding">
        <div className = "col-md-offset-4 col-md-4 main-content">
          <div className = "text-center">
            <div className = "parallax-header headerbox">
              <h1>eric feng</h1>
              <hr/>
            </div>
            <div className = "contain-text">
              <h2> cs major '20 @ cornell engineering </h2>
              <h2> i like backend stuff </h2>
              <div className = "icons-section">
                <a href="http://github.com/ef23" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/evf23" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
                <a href="mailto:evf23@cornell.edu?subject=Hi Eric"><i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
              </div>
            </div>
            <hr/>
        </div>
          <div className = "content-section">
            <img className = "img-responsive pic" src = {this.state.image}/>
            {homepageContent}
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
