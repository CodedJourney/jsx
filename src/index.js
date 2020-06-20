// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Reference function to get button text
function getButtonText() {
  return 'Click on me!';
}

// Create a react component
const App = () => {
  // variables that store data
  // const buttonText = 'click here';

  return (
    <div>
      <label className='label' for='name'>Enter name:</label>
      <input id='name' type='text' />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {/* You can reference a variable or a function */}
        {getButtonText()}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);