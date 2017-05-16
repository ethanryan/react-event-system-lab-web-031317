import React from 'react' // import react
//import ReactDOM from 'react-dom' // import react


class EyesOnMe extends React.Component {
  constructor() {
    super();

    this.eyesOn = this.eyesOn.bind(this);
  }

  eyesOn() {
    console.log('Good!');
  }

  eyesOff() {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <div>
        <h1>EyesOnMe Button Here:</h1>
        <button onFocus={this.eyesOn} onBlur={this.eyesOff}>I'm a button, huh</button>
      </div>
    );
  }
}

export default EyesOnMe


//ReactDOM.render
