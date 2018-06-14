import React from 'react';
import './App.css';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      exHistOne: false,
      exHistTwo: false,
      catOne: false,
      catTwo: false,
      catThree: false,
      catFour: false,
      catFive: false,
      catSix: false,
      catSeven: false,
      catEight: false,
      catScore: " ",
      exHistScore: " ",
      recTherapy: " ",
      goldCategory:" "
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;

    const name = target.name;

    this.setState({
      [name]: event.target.value
    });
  }

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    const catOne = this.state.catOne;
    const catTwo = this.state.catTwo;
    const catThree = this.state.catThree;
    const catFour = this.state.catFour;
    const catFive = this.state.catFive;
    const catSix = this.state.catSix;
    const catSeven = this.state.catSeven;
    const catEight = this.state.catEight;
    const catScore = (
      ~~[catOne]
      + ~~[catTwo]
      + ~~[catThree]
      + ~~[catFour]
      + ~~[catFive]
      + ~~[catSix]
      + ~~[catSeven]
      + ~~[catEight]
    );

    this.setState({catScore: catScore});


    const exHistOne = this.state.exHistOne;
    const exHistTwo = this.state.exHistTwo;
    const exHistScore = (~~[exHistOne] + ~~[exHistTwo]);

    this.setState({exHistScore: exHistScore});


    function recTherapy(catScore, exHistScore){
    if (catScore >= 10 && exHistScore > 1){
      return ("LAMA/LABA combination");
    } else if (catScore < 10 && exHistScore > 1) {
      return ("LAMA (Long-Acting Anti-cholinergic)");
    } else if (catScore >= 10 && exHistScore <= 1) {
      return ("Long-acting bronchodilator (LABA or LAMA)");
    } else if (catScore < 10 && exHistScore <= 1){
      return ("A bronchodilator");
    }
    };

    this.setState({recTherapy: recTherapy(catScore, exHistScore)});

    function goldCategory(catScore, exHistScore){
    if (catScore >= 10 && exHistScore > 1){
      return ("Group D");
    } else if (catScore < 10 && exHistScore > 1) {
      return ("Group C");
    } else if (catScore >= 10 && exHistScore <= 1) {
      return ("Group B");
    } else if (catScore < 10 && exHistScore <= 1){
      return ("Group A");
    }
    };

    this.setState({goldCategory: goldCategory(catScore, exHistScore)});
  }

  render() {
    return (
      <div>
      <p className="cya"> For internal use only. For backgound use only.</p>
      <div className= "app-title">
      <h1>The <strong>GOLD</strong>en Reference</h1>
      <h4>Initiating inhaled therapy in patients with COPD</h4>
      </div>
      <body>
      <br/>

      <p className="disclaimer"><strong>Note:</strong> This reference tool is NOT a
      replacement for good clinical judgement and should only be used as a general
      guide when choosing where to initiate the different classes of inhaled therapy.
      Prior to treating a COPD diagnosis, spirometry must be performed to confirm
      the diagnosis (post-bronchodilator FEV1/FVC of less than 0.70).</p>
      <br/>

      <form
        className="form"
        onSubmit={this.handleFormSubmit}>
      <div className="cat" id="cat">
      <h2 className="test-heading">COPD Assessment Test:</h2>
      <p>How often are these statements true for you?</p>
      <br/>

      <div name="qCatOne" id="catOne">
        <h4>I cough all the time</h4>
        <label className="left-cat-conditions"> Never </label>
        <label>
          <input
            name="catOne"
            type="radio"
            value={0}
            onChange={this.handleInputChange} />
          0
        </label>
        <label>
          <input
            name="catOne"
            type="radio"
            value={1}
            onChange={this.handleInputChange} />
          1
        </label>
        <label>
          <input
            name="catOne"
            type="radio"
            value={2}
            onChange={this.handleInputChange} />
          2
        </label>
        <label>
          <input
            name="catOne"
            type="radio"
            value={3}
            onChange={this.handleInputChange} />
          3
        </label>
        <label>
          <input
            name="catOne"
            type="radio"
            value={4}
            onChange={this.handleInputChange} />
          4
        </label>
        <label>
          <input
            name="catOne"
            type="radio"
            value={5}
            onChange={this.handleInputChange} />
          5
        </label>
        <label className="right-cat-conditions"> Always </label>
        <br/><br/><br/>
      </div>

      <div name="qCatTwo" id="catTwo">
        <h4>My chest is completely full of phlegm (mucus)</h4>
        <label className="left-cat-conditions"> Never </label>
        <label>
          <input
            name="catTwo"
            type="radio"
            value={0}
            onChange={this.handleInputChange} />
          0
        </label>
        <label>
          <input
            name="catTwo"
            type="radio"
            value={1}
            onChange={this.handleInputChange} />
          1
        </label>
        <label>
          <input
            name="catTwo"
            type="radio"
            value={2}
            onChange={this.handleInputChange} />
          2
        </label>
        <label>
          <input
            name="catTwo"
            type="radio"
            value={3}
            onChange={this.handleInputChange} />
          3
        </label>
        <label>
          <input
            name="catTwo"
            type="radio"
            value={4}
            onChange={this.handleInputChange} />
          4
        </label>
        <label>
          <input
            name="catTwo"
            type="radio"
            value={5}
            onChange={this.handleInputChange} />
          5
        </label>
        <label className="right-cat-conditions"> Always </label>
        <br/><br/><br/>
      </div>

      <div name="qCatThree" id="catThree">
        <h4>My chest feels very tight</h4>
        <label className="left-cat-conditions"> Never </label>
        <label>
          <input
            name="catThree"
            type="radio"
            value={0}
            onChange={this.handleInputChange} />
          0
        </label>
        <label>
          <input
            name="catThree"
            type="radio"
            value={1}
            onChange={this.handleInputChange} />
          1
        </label>
        <label>
          <input
            name="catThree"
            type="radio"
            value={2}
            onChange={this.handleInputChange} />
          2
        </label>
        <label>
          <input
            name="catThree"
            type="radio"
            value={3}
            onChange={this.handleInputChange} />
          3
        </label>
        <label>
          <input
            name="catThree"
            type="radio"
            value={4}
            onChange={this.handleInputChange} />
          4
        </label>
        <label>
          <input
            name="catThree"
            type="radio"
            value={5}
            onChange={this.handleInputChange} />
          5
        </label>
        <label className="right-cat-conditions"> Always </label>
        <br/><br/><br/>
      </div>

      <div name="qCatFour" id="catFour">
        <h4>When I walk up a hill or one flight of stairs I am very breathless</h4>
        <label className="left-cat-conditions"> Never </label>
        <label>
          <input
            name="catFour"
            type="radio"
            value={0}
            onChange={this.handleInputChange} />
          0
        </label>
        <label>
          <input
            name="catFour"
            type="radio"
            value={1}
            onChange={this.handleInputChange} />
          1
        </label>
        <label>
          <input
            name="catFour"
            type="radio"
            value={2}
            onChange={this.handleInputChange} />
          2
        </label>
        <label>
          <input
            name="catFour"
            type="radio"
            value={3}
            onChange={this.handleInputChange} />
          3
        </label>
        <label>
          <input
            name="catFour"
            type="radio"
            value={4}
            onChange={this.handleInputChange} />
          4
        </label>
        <label>
          <input
            name="catFour"
            type="radio"
            value={5}
            onChange={this.handleInputChange} />
          5
        </label>
        <label className="right-cat-conditions"> Always </label>
        <br/><br/><br/>
      </div>

      <div name="qCatFive" id="catFive">
        <h4>I am very limited doing activities at home</h4>
        <label className="left-cat-conditions"> Never </label>
        <label>
          <input
            name="catFive"
            type="radio"
            value={0}
            onChange={this.handleInputChange} />
          0
        </label>
        <label>
          <input
            name="catFive"
            type="radio"
            value={1}
            onChange={this.handleInputChange} />
          1
        </label>
        <label>
          <input
            name="catFive"
            type="radio"
            value={2}
            onChange={this.handleInputChange} />
          2
        </label>
        <label>
          <input
            name="catFive"
            type="radio"
            value={3}
            onChange={this.handleInputChange} />
          3
        </label>
        <label>
          <input
            name="catFive"
            type="radio"
            value={4}
            onChange={this.handleInputChange} />
          4
        </label>
        <label>
          <input
            name="catFive"
            type="radio"
            value={5}
            onChange={this.handleInputChange} />
          5
        </label>
        <label className="right-cat-conditions"> Always </label>
        <br/><br/><br/>
      </div>

      <div name="qCatSix" id="catSix">
        <h4>I am not at all confident leaving my home because of my lung condition</h4>
        <label className="left-cat-conditions"> Never </label>
        <label>
          <input
            name="catSix"
            type="radio"
            value={0}
            onChange={this.handleInputChange} />
          0
        </label>
        <label>
          <input
            name="catSix"
            type="radio"
            value={1}
            onChange={this.handleInputChange} />
          1
        </label>
        <label>
          <input
            name="catSix"
            type="radio"
            value={2}
            onChange={this.handleInputChange} />
          2
        </label>
        <label>
          <input
            name="catSix"
            type="radio"
            value={3}
            onChange={this.handleInputChange} />
          3
        </label>
        <label>
          <input
            name="catSix"
            type="radio"
            value={4}
            onChange={this.handleInputChange} />
          4
        </label>
        <label>
          <input
            name="catSix"
            type="radio"
            value={5}
            onChange={this.handleInputChange} />
          5
        </label>
        <label className="right-cat-conditions"> Always </label>
        <br/><br/><br/>
      </div>

      <div name="qCatSeven" id="catSeven">
        <h4>I dont sleep soundly because of my lung condition</h4>
        <label className="left-cat-conditions"> Never </label>
        <label>
          <input
            name="catSeven"
            type="radio"
            value={0}
            onChange={this.handleInputChange} />
          0
        </label>
        <label>
          <input
            name="catSeven"
            type="radio"
            value={1}
            onChange={this.handleInputChange} />
          1
        </label>
        <label>
          <input
            name="catSeven"
            type="radio"
            value={2}
            onChange={this.handleInputChange} />
          2
        </label>
        <label>
          <input
            name="catSeven"
            type="radio"
            value={3}
            onChange={this.handleInputChange} />
          3
        </label>
        <label>
          <input
            name="catSeven"
            type="radio"
            value={4}
            onChange={this.handleInputChange} />
          4
        </label>
        <label>
          <input
            name="catSeven"
            type="radio"
            value={5}
            onChange={this.handleInputChange} />
          5
        </label>
        <label className="right-cat-conditions"> Always </label>
        <br/><br/><br/>
      </div>

      <div name="qCatEight" id="catEight">
        <h4>I have no energy at all</h4>
        <label className="left-cat-conditions"> Never </label>
        <label>
          <input
            name="catEight"
            type="radio"
            value={0}
            onChange={this.handleInputChange} />
          0
        </label>
        <label>
          <input
            name="catEight"
            type="radio"
            value={1}
            onChange={this.handleInputChange} />
          1
        </label>
        <label>
          <input
            name="catEight"
            type="radio"
            value={2}
            onChange={this.handleInputChange} />
          2
        </label>
        <label>
          <input
            name="catEight"
            type="radio"
            value={3}
            onChange={this.handleInputChange} />
          3
        </label>
        <label>
          <input
            name="catEight"
            type="radio"
            value={4}
            onChange={this.handleInputChange} />
          4
        </label>
        <label>
          <input
            name="catEight"
            type="radio"
            value={5}
            onChange={this.handleInputChange} />
          5
        </label>
        <label className="right-cat-conditions"> Always </label>
      </div>
      <br/>
      </div>

      <br />

        <div className="exHist" id="exHist">
        <h2 className="test-heading">COPD Exacerbation History:</h2>

        <div name="qExHistOne" id="exHistOne">
          <h4>In the past 12 months, have you been admitted to the hospital for your COPD?</h4>
            <label>
              <input
                name="exHistOne"
                type="radio"
                value={2}
                onChange={this.handleInputChange} />
              Yes
            </label>
            <label>
              <input
                name="exHistOne"
                type="radio"
                value={0}
                onChange={this.handleInputChange} />
              No
            </label>
        </div>

        <div name="qExHistTwo" id="exHistTwo">
          <h4>In the past 12 months, how many times were you given oral steroids or antibiotics for your COPD?</h4>
          <label>
            <input
              name="exHistTwo"
              type="radio"
              value={0}
              onChange={this.handleInputChange} />
            Not at all
          </label>
          <label>
            <input
              name="exHistTwo"
              type="radio"
              value={1}
              onChange={this.handleInputChange} />
            1
          </label>
          <label>
            <input
              name="exHistTwo"
              type="radio"
              value={2}
              onChange={this.handleInputChange} />
            2 +
          </label>
        </div>
        <br/>
        </div>
      </form>
      <br/>
      <div className="button">
      <button
        className="submit"
        type="submit"
        onClick={formSubmitEvent => this.handleFormSubmit(formSubmitEvent)}>
        Generate Results</button>
      </div>
        <div className="results">
          <h1>Results:</h1>
          <div className="resultsbox">
          <h3 className="result-metric"> COPD Assessment Test score:
            <a className="result-response"> {this.state.catScore} </a>
            </h3>
            <h3 className="result-metric">Exacerbation History score:
            <a className="result-response"> {this.state.exHistScore} </a>
            </h3>
            <h3 className="result-metric">GOLD Category:
            <a className="result-response"> {this.state.goldCategory} </a>
            </h3>
            <h3 className="result-metric">Recommended Initial Therapy: </h3>
            <h3 className="result-response"> {this.state.recTherapy} </h3>
          </div>
        </div>
        </body>
        <foot className="footer">
        <br/>
        <p> Reference: Global Initiative for Chronic Obstructive Lung Disease
        <br/>
        <a href="http://goldcopd.org"
            target="_blank">
        (2018 GOLD Guidelines)</a></p>
        <br/>
        </foot>
      </div>
    )
  }
};

export default App;
