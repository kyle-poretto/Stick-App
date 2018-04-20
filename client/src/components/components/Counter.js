import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../containers/sticky.css'
import { likeStick } from '../actions/sticks'

class Counter extends Component {

  handleOnSubmit = (event) => {
    const updatedStick = Object.assign({}, this.props.stick, {likes: this.props.stick.likes + 1})
    this.props.likeStick(updatedStick)
  }

  render(){
    return (
      <div>
        <div><button onClick={this.handleOnSubmit.bind(this)}> Like </button></div>
        <div> {this.props.stick.likes} </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    likeStick: state.likeStick
  }
}

export default connect(mapStateToProps,{likeStick})(Counter)