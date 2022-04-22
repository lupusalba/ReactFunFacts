import React from 'react';
import Logo from './Logo';
import Title from './Title';
import ExtraTitle from './ExtraTitle';

const Heading = () => {
  return (
    <header className="headingContainer">
        <Logo />
        <Title />
        <ExtraTitle />
    </header>
  )
}


export default Heading