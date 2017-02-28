import React, { PureComponent } from 'react'

class Button extends PureComponent {
  classNames() {
    const { clicked } = this.state
    let classes = 'click'

    if (clicked) { classes += joined }

    return classes
  }

  handleClick() {
    console.log('whammy!')

  }

  render() {
    return (
        <div className="actions">
          <button className="primary" onClick={this.handleClick.bind(this)}>{this.props.name}</button>
        </div>
    )
  }
}

export default Button
