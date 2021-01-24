import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import './blobStudy.scss'

class BlobStudy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="loader">
          <div
            className="loader-bg"
            style={{
              background: `${this.props.newColor} repeat-x 0 100px/150px 300px`,
              animation: 'wave 1s ease-out forwards'
            }}
          >
            <span>{this.props.selectedType}</span>
          </div>
          <div className="drops">
            <div
              className="drop1"
              style={{
                backgroundColor: `${this.props.newColor}`
              }}
            />
            <div
              className="drop2"
              style={{
                backgroundColor: `${this.props.newColor}`
              }}
            />
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="liquid">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="liquid"
              />
            </filter>
          </defs>
        </svg>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(BlobStudy)
