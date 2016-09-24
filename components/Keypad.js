const React = require('react')

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
    <input type="password" onKeyUp={this.typing}/>
    );
  }
}


// In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.
// When that event fires, use console.log to print out the text 'Entering password...'.

module.exports = Keypad;
