import React, { Component } from 'react';

class FundLogo extends Component {
  // ------------------------------------------------------
  // Render
  // ------------------------------------------------------

  render() {
    return (
      // <img
      //   src="fund_logo.jpg"
      //   alt="Stimuleringsfonds"
      //   width="50"
      //   height="50"
      // />
      <div styles={'width: 50%'}>
        <img src="fund_logo.jpg" width="200" height="121" alt="logo" />
      </div>
    );
  }
}

export default FundLogo;
