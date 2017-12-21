import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './pages.js'
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

    return (
      <div className = "container-fluid literallyjustpadding">
        <div className = "col-md-5 main-content col-centered">
          <div className = "text-center">
            <div className = "parallax-header headerbox">
              <h1>eric feng</h1>
              <hr/>
            </div>
            <div className = "contain-text">
              <h2> cs major '20 @ cornell engineering </h2>
              <h2> i like backend stuff </h2>
              <div className = "icons-section ">
                <a href="http://github.com/ef23" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/evf23" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
                <a href="mailto:evf23@cornell.edu?subject=Hi Eric"><i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
              </div>
            </div>
            <hr/>
        </div>
          <div className = "content-section">
            <img className = "img-responsive pic" src = {this.state.image}/>
            <Page />
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
