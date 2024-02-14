import React from 'react'
import Navbar from './Navbar'
import PropTypes from 'prop-types'

import './Heading.css';

export default function Heading(props) {
  return (
    <header className='app-header'>
      <h1>{props.title}</h1>
      <Navbar />
    </header>
  )
}

Heading.propTypes = {
    title: PropTypes.string
}
Heading.defaultProps = {
    title: "set title here"
}

