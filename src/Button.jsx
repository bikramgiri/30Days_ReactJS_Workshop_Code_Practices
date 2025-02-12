import React from 'react'
// import PropTypes from 'prop-types'

// We can use any name () in the function parameter like props and other name
const Button = (props) => {
    const {name} = props
  return (
    <button>{name}</button>
  )
}

// Used to set the default value of the props
Button.defaultProps = {
    name: "Default"
}
 // used to check the type of the props
// Button.propTypes = {
//     name: PropTypes.string.isRequired
// }

export default Button