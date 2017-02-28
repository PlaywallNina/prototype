import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Button from '../components/PlayButton'
import pressButton from '../actions/surveys/press-button'
import headline from '../components/headline'
import summary from '../components/summary'

import './PlayPayPage.sass'

export class PlayPayPage extends PureComponent {
  static propTypes = {
    headline: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    pressButton: PropTypes.func.isRequired,

  }

  // playButton() {
  //   const { playButton } = this.propsheadline: PropTypes.string.isRequired,
  //   return
  //
  //   this.props.pressPlay({ _id, clickedBy }, currentUser)
  // }

  render() {
    const { headline, summary, pressButton } = this.props

    return(
      <article className="playpay">
        <header>
          <div className="cover" style={{ background }} />
          <h1>
            <headline />
          </h1>
        </header>
        <main>
          <p>
          < summary />
          </p>
        </main>
        <footer>

        </footer>
      </article>
    )
  }
}

const mapStateToProps = ({ currentUser }, { ClickedBy }) => {
  return {
  }
}

export default connect(mapStateToProps, { pressButton })(PlayPayPage)
