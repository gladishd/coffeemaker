import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

import Carousel from 'react-multi-carousel'
import {default as BlobStudy} from './blobStudy'
import './reactMultiCarousel.css'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {max: 4000, min: 3000},
    items: 5
  },
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 3
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 2
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1
  }
}

class ReactMultiCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMoving: null
    }
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <Carousel
          responsive={responsive}
          arrows={true}
          slidesToSlide={this.state.numToScroll}
          additionalTransfrom={0}
          itemClass="react-carousel-item"
          sliderClass="react-multi-carousel-track"
          containerClass="react-multi-carousel-list"
          dotListClass="react-multi-carousel-dot-list"
          keyBoardControl={true}
          autoPlay={false}
          minimumTouchDrag={80}
          partialVisible
          draggable={true}
          showDots={false}
          swipeable={true}
          customTransition="transform 600ms ease-in-out"
          beforeChange={() => this.setState({isMoving: true})}
          afterChange={() => this.setState({isMoving: false})}
        >
          <div
            className="helloThere"
            onClick={e => {
              if (this.state.isMoving) {
                e.preventDefault()
              }
            }}
          >
            {' '}
            <BlobStudy />
          </div>

          <div
            className="helloThere"
            onClick={e => {
              if (this.state.isMoving) {
                e.preventDefault()
              }
            }}
          >
            {' '}
            <BlobStudy />
          </div>

          <div
            className="helloThere"
            onClick={e => {
              if (this.state.isMoving) {
                e.preventDefault()
              }
            }}
          >
            {' '}
            <BlobStudy />
          </div>

          <div
            className="helloThere"
            onClick={e => {
              if (this.state.isMoving) {
                e.preventDefault()
              }
            }}
          >
            {' '}
            <BlobStudy />
          </div>
        </Carousel>
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

export default connect(mapState, mapDispatch)(ReactMultiCarousel)
