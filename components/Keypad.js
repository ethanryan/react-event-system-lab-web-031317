import React from 'react' // import react
//import ReactDOM from 'react-dom' // import react


class Keypad extends React.Component {
  constructor() {
    super();

    this.typing = this.typing.bind(this);
  }

  typing() {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <h1>Type Password Here:</h1>

        <input type="password" onKeyUp={this.typing}/>
      </div>
    );
  }
}

export default Keypad


//ReactDOM.render
