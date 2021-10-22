import React from "react";
import Badge from "react-bootstrap/Badge";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


let marked = require("marked");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `
  # React Markdown Previewer!
  ## This is a sub-heading...
      
  Or... wait for it... **_both!_**
    
  And feel free to go crazy ~~crossing stuff out~~.
        
  There's also [links](https://github.com/fredjoya/a_bootstrap_random_quote_generator.git), and
  > Block Quotes!
       
    
      `,
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };
    var outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                {" "}
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col text-center" style={{ padding: "10px" }}>
              <a
                class="github-button"
                href="https://github.com/fredjoya/a_bootstrap_random_quote_generator.git"
                data-size="large"
                aria-label="See my random quote generator on GitHub"
              >
                Follow @fredjoya
              </a>
              <div style={{ marginLeft: "10px" }}></div>
              <a
                class="github-button"
                href="https://github.com/fredjoya/a_bootstrap_random_quote_generator.git"
                data-icon="octicon-star"
                data-size="large"
                aria-label="Star fredjoya/random quote generator on GitHub"
              >
                Star
              </a>

              <a
                class="github-button"
                href="https://github.com/fredjoya/a_bootstrap_random_quote_generator.git"
                data-icon="octicon-repo-forked"
                data-size="large"
                aria-label="Fork fredjoya/markdown-previewer on GitHub"
              >
                Fork
              </a>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Markdown Input
                  </Badge>
                </h4>
              </div>
              <div className="input" style={inputStyle}>
                <textarea
                  className="input"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>

            <div className="col-md-6">
              {" "}
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

