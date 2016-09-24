const React = require('react')

class EyesOnMe extends React.Component {
  constructor() {
    super();

    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
  }

  focus() {
    console.log('Good!');
  }

  blur (){
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.focus} onBlur={this.blur}>eyes</button>
    );
  }
}


// In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.
// When that event fires, use console.log to print out the text 'Entering password...'.

module.exports = EyesOnMe;
