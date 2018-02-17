import React from "react";
import Destination from './destination.jsx';

export default class WelcomePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Welcome to the Code Galaxies, Commander</h1>
        <h2>Choose your destination:</h2>
        <div className='media-list'>
          <Destination description='TestGraph'
                      href='#/galaxy/TestGraph?l=1'
                      media='brew_fly_first.png'
                      name='TestGraph'/>
        </div>
      </div>
    );
  }
}