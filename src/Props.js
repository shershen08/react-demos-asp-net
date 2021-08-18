import React from 'react';
import PropTypes from 'prop-types';

//darkMode -> colorMode

const Module = props => (
    <div className={`box ${props.colorMode}`}>
      <h1 className="title">{props.title}</h1>
      <p>{props.content}</p>
      <div>
        {props.menu.map(i => <a href={i} key={i}>{i}</a>)}
      </div>
    </div>
  );

Module.defaultProps = {
  menu: []
}
Module.propTypes = {
  title: PropTypes.string.isRequired,
  //menu: PropTypes.arrayOf(PropTypes.string).isRequired
}
  
// PropsDemo -> Module

// This Class component also can have props
export class PropsDemo extends React.Component {

  render() {
    
    return <div>
      <h1 className="subtitle">
        {this.props.header}
      </h1>
      <Module
      title="Dark"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        menu={['home', 'catalog', 'search']}
      />
      <Module
        colorMode="dark-mode"
        title="Dark"
        content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <Module 
      colorMode="high-contrast"
      title="Dark"
      content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
    </div>;
  }
  
}


