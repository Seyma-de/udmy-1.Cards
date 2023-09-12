import "./App.css";
import "bulma/css/bulma.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import bootstrap from "./images/bootstrap5.png";
import ccs from "./images/ccsharp.png";
import komple from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarim</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad rem nam aperiam eum commodi fugiat nostrum quos, quas eligendi nesciunt."
              />
            </div>
            <div className="column">
              <Course
                image={bootstrap}
                title="Bootstrap"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad rem nam aperiam eum commodi fugiat nostrum quos, quas eligendi nesciunt."
              />
            </div>
            <div className="column">
              <Course
                image={ccs}
                title="komple web"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad rem nam aperiam eum commodi fugiat nostrum quos, quas eligendi nesciunt."
              />
            </div>
            <div className="column">
              <Course
                image={komple}
                title="Frontend"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad rem nam aperiam eum commodi fugiat nostrum quos, quas eligendi nesciunt."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
