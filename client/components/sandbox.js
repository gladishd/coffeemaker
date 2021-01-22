import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import './mysass.scss'

class Sandbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <br />
        <b>CSS Only Liquid Dripping Effect</b>
        <br />
        Can be used as a background and multiple layers of liquid can be
        created.
        <br />
        <div className="container">
          <div className="blobs">
            <div className="liquid" />
            <div className="blob" />
            <div className="blob" />
            <div className="blob" />
            <div className="blob" />
            <div className="blob" />
            <div className="blob" />
            <div className="blob" />
            <div className="blob" />
          </div>
          <h1 className="text">
            LIQUID<br />DRIP
          </h1>
        </div>
        <div className="" />
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="0">
          <defs>
            <filter id="goog">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
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

export default connect(mapState, mapDispatch)(Sandbox)
