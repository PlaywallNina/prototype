import React, { Component } from 'react'
import Logo from '../images/The_Playwall_Logo.png'

export class Brand extends Component {
  render() {
    return(
      <div>
        <img src={Logo}></img>
      </div>
    )
  }
}

export default Brand
