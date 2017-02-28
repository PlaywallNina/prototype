import React, { Component } from 'react'
import logo from '../images/The_Playwall_Logo'

export class Brand extends Component {
  render() {
    return(
      <div>
        <img
          src={logo}
        ></img>
      </div>
    )
  }
}

export default Brand
