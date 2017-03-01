import React, { PureComponent } from 'react'
import Brand from './Brand'
import './ThankYou.scss'

export class ThankYou extends PureComponent {
  render() {
    return(
      <div>
        <Brand />
        <div>
          <h1>Thanks!</h1>

          <p>This time you got the article for free.</p>
          <p>Enjoy!</p>
        </div>
      </div>
    )
  }
}

export default ThankYou
