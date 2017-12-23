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
    this.handleBack = this.handleBack.bind(this);
    this.onEnterHover = this.onEnterHover.bind(this);
    this.pictures = [
      require("./images/CUAir.jpg"),
      require("./images/baeml.png"),
      require("./images/caml.png")
    ];
    this.pages = [
    {
      maintext: "cs major '20 @ cornell engineering",
      subtext: "i like backend stuff",
      items:[
          (
            <div className="force-line">
              <img className="icon-pic" src={require("./images/icons/str.png")}/>
              <b> summer '18</b> intern @ <a href="https://www.stripe.com" target="_blank">stripe</a>
            </div>
          ),
          (
            <div className="force-line">
              <img className="icon-pic" src={require("./images/icons/com.png")}/>
              <b> summer '17</b> intern @ <a href="https://www.commvault.com" target="_blank">commvault</a>
            </div>
          ),
          (
            <div className="force-line">
              <img className="icon-pic" src={require("./images/icons/cua.png")}/>
              <b> now </b> distributed systems @ <a href="https://www.cuair.org" target="_blank">cu air</a>
            </div>
          ),
          (
            <div className = "icons-section">
              <button onClick={this.handleProjects}>&nbsp;projects &#187;&nbsp;</button>
              <button onClick={this.handleProjects}>&nbsp;misc &#187; &nbsp;</button>
              <div>&nbsp;</div>
            </div>
          )
        ]
    },
    {
      maintext: "selected projects",
      subtext: "click on the links for more details",
      items:[
          (
            <div className="force-line text-item">
              <button onMouseEnter={() => this.onEnterHover(0)}>distributed systems @ cuair</button>
            </div>
          ),
          (
            <div className="force-line text-item">
              <button onMouseEnter={() => this.onEnterHover(1)}>bae ml</button>
            </div>
          ),
          (
            <div className="force-line text-item">
              <button onMouseEnter={() => this.onEnterHover(2)}>apax</button>
            </div>
          ),
          (
            <div className = "icons-section">
              <button onClick={this.handleBack}>&nbsp;back &#187;&nbsp;</button>
              <button onClick={this.handleBack}>&nbsp;misc &#187;&nbsp;</button>
              <div>&nbsp;</div>
            </div>
          )
      ],
    },
    ]
  }

  onEnterHover(i){
    this.setState({
      image: this.pictures[i]
    })
  }

  handleBack() {
    this.setState({
      page: 0,
      image: require("./images/pic.jpg")
    })
  }

  handleProjects() {
    this.setState({
      page: 1
    })
  }

  render() {
    const page = this.pages[this.state.page];
    const curr_page = (
      <div className = "content-section">
        <img className = "img-responsive pic" src = {this.state.image}/>
        <div className="contain-text">
          <ul>
          {
            page.items.map((val, key) => {
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
    );

    return (
      <div className = "container-fluid literallyjustpadding">
        <div className = "col-md-5 main-content col-centered">
          <div className = "text-center">
            <div className = "parallax-header headerbox contain-text">
              <h1>eric feng</h1>
              <hr/>
                 <div className = "icons-section ">
                  <a href="http://github.com/ef23" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                  <a href="https://www.linkedin.com/in/evf23" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
                  <a href="mailto:evf23@cornell.edu?subject=Hi Eric"><i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
                </div>
              <hr/>
            </div>
              <p> {page.maintext} </p>
              <p> {page.subtext} </p>
            <hr/>
        </div>
          {curr_page}
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
