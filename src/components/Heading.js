import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';

import './Heading.css';

export default function Heading(props) {
  return (
    <>
      <header className='app-header'>
        <h1>{props.title}</h1>
      </header>
      <Navigation />
    </>
  )
}

Heading.propTypes = {
  title: PropTypes.string
}
Heading.defaultProps = {
  title: "set title here"
}

