import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import './mysass.scss'
import {default as GooeyMenu} from './gooeyMenu'
import {default as ReactMultiCarousel} from './reactMultiCarousel'
import {default as LiquidBubbles} from './liquidBubbles'
import {default as DraggableBlob} from './draggableBlob'

class Sandbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMenuOption: '',
      level: -10
    }
    this.clickHandlerMenu = this.clickHandlerMenu.bind(this)
  }
  componentDidMount() {}

  clickHandlerMenu(e) {
    e.preventDefault()
    this.setState({
      selectedMenuOption: e.target.id
    })
    let level = this.state.level
    level += 10

    let newColor

    console.log('the selected menu option is ', e.target.id)
    if (e.target.id == 'water') {
      newColor = 'blue'
    } else if (e.target.id == 'tea') {
      newColor = 'yellow'
    } else if (e.target.id == 'coffee') {
      newColor = 'brown'
    }

    this.setState({
      level: level,
      newColor: newColor
    })
    console.log('the new level is ', this.state.level)
  }

  render() {
    return (
      <div>
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
          <h1 className="text">welcome</h1>
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

        <GooeyMenu clickHandlerMenu={this.clickHandlerMenu} />

        <ReactMultiCarousel
          selectedType={this.state.selectedMenuOption}
          newColor={this.state.newColor}
        />

        <LiquidBubbles
          level={this.state.level}
          key={this.state.level}
          newColor={this.state.newColor}
        />

        {/* <DraggableBlob /> */}
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
