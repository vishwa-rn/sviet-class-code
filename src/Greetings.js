// To create a card which greets the user.

// 1. I have to get two props - name and age
// 2. I have to get name to be a string and the age to be a number.

import PropTypes from "prop-types";

Greetings.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

// React hooks - use

function Greetings(props) {
  return (
    <>
      <h1>Hello {props.name}!!</h1>
    </>
  );
}

export default Greetings;
