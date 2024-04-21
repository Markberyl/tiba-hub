import React from 'react'
import Navbar from "./Navbar"
import Footer from './Footer' ;

function BaseLayout(props) {
    return (
        <div className="home-section">
          <Navbar />
          {props.children}
          <Footer />
        </div>
      );
}

export default BaseLayout