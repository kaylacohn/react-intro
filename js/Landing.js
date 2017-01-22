import React from 'react'

const Landing = React.createClass({
  render() {
    return (
      <div className="landing">
        <h1>VidFlix</h1>
        <input type="text" placeholder='Search'/>
        <a href="#"> or Browse All</a>
      </div>
    );
  }
});

export default Landing
