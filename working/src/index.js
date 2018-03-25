import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const customStyles = {
  content : {
    borderRadius         : '25px',
    top                   : '25%',
    left                  : '25%',
    right                 : '25%',
    bottom                : '18%'
  }
};

const modals = [
  {
    title: "Cornell University Unmanned Air Systems",
    position: "Distributed Systems Engineer",
    languages: [
      (<div><i class="icon-java-bold" aria-hidden="true"/> Java</div>),
      (<div><i class="icon-javascript" aria-hidden="true"></i> JavaScript</div>),
      (<div><i class="icon-playframework" aria-hidden="true"/> Play</div>),
      (<div><i class="icon-reactjs" aria-hidden="true"/> ReactJS</div>)
    ],
    link: "https://www.cuair.org",
    description_intro:
    (<div>
        <p>Cornell University Unmanned Air Systems (CUAir) is an undergraduate project team that develops an autonomous
          aircraft that is capable of waypoint navigation, object recognition, and classification.
        </p>
      </div>
      ),
    description_main:
    (<div>
      <p>The Distributed Systems subteam designs and implements the software infrastructure that communicates between the plane's computer and the ground station.
        The ground server not only integrates data between the Autopilot and Vision subteams,
        but also uses a frontend to view mission-related information as well as to control various systems on the plane such as the camera and airdrop mechanisms.
      </p>
    </div>
    ),
    image: require("./images/cuair.gif")
  },
  {
    title: "baeML",
    position: "Full-stack Developer",
    languages: [
      (<div><i class="icon-python" aria-hidden="true"></i> Python 2.7</div>),
      (<div><i class="icon-javascript" aria-hidden="true"></i> JavaScript</div>),
      (<div><i class="icon-python" aria-hidden="true"></i> Django</div>),
      (<div><i class="icon-reactjs" aria-hidden="true"/> ReactJS</div>),
      (<div><i class="icon-postgres" aria-hidden="true"></i> Postgres</div>)
    ],
    link: "https://www.github.com/jz359/baeML",
    description_intro:
      (<div>
        <p>baeML is a webapp that was originally designed to combat the <a href="https://en.wikipedia.org/wiki/Echo_chamber_(media)" target="_blank">echo-chamber effect</a>,
          that occurs in social media bubbles.
        </p>
      </div>
      ),
    description_main:
      (<div>
        <p>It uses a ReactJS front-end with a Django server backend, and utilizes a Skip-gram learning model using Tensorflow, along with a webcrawler to search for articles.
          It relies on Facebook integration to query for a user's likes to train a model in order to determine what kind of articles to retrieve.
        </p>
      </div>),
    image: require("./images/baeMLpic.png")
  },
  {
    title: "APAX",
    position: "Developer",
    languages: [
      (<div><i class="fa fa-code" aria-hidden="true"/> OCaml</div>),
      (<div><i class="icon-javascript" aria-hidden="true"></i> JavaScript</div>),
      (<div><i class="icon-reactjs" aria-hidden="true"/> ReactJS</div>)
    ],
    link: "https://www.github.com/ef23/APAX",
    description_intro:
    (<div>
        <p> APAX is an implementation of the <a href="https://raft.github.io" target="_blank">Raft Consensus Algorithm</a> in OCaml, mainly relying on Lwt. This was done for our open-ended
          final project for Cornell's <a href = "http://www.cs.cornell.edu/courses/cs3110/2017fa/" target="_blank"> CS3110</a> class.
        </p>
      </div>
      ),
    description_main:
    (<div>
        <p> This algorithm allows clients to connect to any server in a server cluster and update a stored value, and the server cluster is fault-tolerant in the sense that
          as long as the majority of servers do not fail, the system should be stable. This was our first venture in distributed computing.
        </p>
    </div>),
    image: require("./images/apax_ss.png")
  }
]

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      page: 0,
      image: require("./images/pic.jpg"),
      showModal: false,
      modalNum: 0
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleProjects = this.handleProjects.bind(this);
    this.handleMisc = this.handleMisc.bind(this);
    this.handleExp = this.handleExp.bind(this);
    this.onEnterHover = this.onEnterHover.bind(this);
    this.pictures = [
      require("./images/CUAir.jpg"),
      require("./images/baeml.png"),
      require("./images/raft.png")
    ];
    this.pages = [
    {
      maintext: "cs '20 @ cornell engineering",
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
            <div className="force-line">
              <img className="icon-pic" src={require("./images/icons/acsu.png")}/>
              <b> incoming </b> web dev @ <a href="http://acsu.cornell.edu" target="_blank">acsu</a>
            </div>
          ),
          (
            <div className = "icons-section">
              <button onClick={this.handleProjects}>&nbsp;projects &#187;&nbsp;</button>
              <button onClick={this.handleMisc}>&nbsp;misc &#187; &nbsp;</button>
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
            <div className="force-line project-item">
              <button onClick={() => this.handleOpenModal(0)} onMouseEnter={() => this.onEnterHover(0)}>
                distributed systems @ cuair
              </button>
            </div>
          ),
          (
            <div className="force-line project-item">
              <button onClick={() => this.handleOpenModal(1)} onMouseEnter={() => this.onEnterHover(1)}>
                bae ml
              </button>
            </div>
          ),
          (
            <div className="force-line project-item">
              <button onClick={() => this.handleOpenModal(2)} onMouseEnter={() => this.onEnterHover(2)}>
                apax
              </button>
            </div>
          ),
          (
            <div className = "icons-section">
              <button onClick={this.handleExp}>&nbsp;experience &#187;&nbsp;</button>
              <button onClick={this.handleMisc}>&nbsp;misc &#187;&nbsp;</button>
            </div>
          )
      ],
    },
    {
      maintext: "miscellaneous",
      subtext: "other stuff about me",
      items:[
          (
            <div className="force-line misc-item">
              nothing quite here yet, no content
            </div>
          ),
          (
            <div className = "icons-section">
              <button onClick={this.handleProjects}>&nbsp;projects &#187;&nbsp;</button>
              <button onClick={this.handleExp}>&nbsp;experience &#187;&nbsp;</button>
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

  handleExp() {
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

  handleMisc() {
    this.setState({
      page: 2,
      image: require("./images/pic.jpg")
    })
  }

  handleOpenModal (i) {
    this.setState({
      showModal: true,
      modalNum: i
    });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    const page = this.pages[this.state.page];
    const modal = modals[this.state.modalNum];
    const curr_page = (
      <div className = "content-section">
        <img className = "img-responsive pic col-centered" src = {this.state.image}/>
        <div className="contain-text">
          <ul className = "main-list">
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
        <div className = "col-md-5 col-centered">
          <div className = "text-center">
            <div className = "parallax-header headerbox contain-text">
              <h1>eric feng</h1>
              <br/>
                 <div className = "icons-section ">
                  <a href="https://drive.google.com/open?id=1nd847YCucCIuJmsUiK-oBe6Y0ulMBN0W" target="_blank"><i className="fa fa-file-text fa-2x" aria-hidden="true"></i></a>
                  <a href="http://github.com/ef23" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                  <a href="https://www.linkedin.com/in/evf23" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
                  <a href="mailto:evf23@cornell.edu?subject=Hi Eric"><i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i></a>
                </div>
            <br/>
            </div>
              <p> {page.maintext} </p>
              <p> {page.subtext} </p>
        </div>
          {curr_page}
          <ReactModal isOpen={this.state.showModal} style={customStyles} onRequestClose={this.handleCloseModal}>
            <h2> <a href={modal.link} target = "_blank">{modal.title}</a></h2>
            <h3> {modal.position}</h3>
            <div className = "float-left">
              <p> Languages/Technologies: </p>
                <ul>
                {
                  modal.languages.map((val, key) => {
                    return (
                      <li className="list-item" key={key}>{val}</li>
                    )
                  })
                }
              </ul>
            </div>
            <div className = "modal-descr">
              {modal.description_intro}
              <img src={modal.image} className="modal-img"/>
              {modal.description_main}
            </div>
          </ReactModal>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
