import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateSticksFormData } from '../actions/stickForm'
import { createStick } from '../actions/sticks'

class StickForm extends Component {

  handleOnChange = (event) => {
    const {name, value } = event.target
    const currentSticksFormData = Object.assign({}, this.props.sticksFormData, {
      [name]: value
    })
    this.props.updateSticksFormData(currentSticksFormData)
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.createStick(this.props.sticksFormData)
  }  

   
  render(){
    const { content, tag} = this.props.sticksFormData
    return (
      <div className="NoteWrapper">
        <form className="Stick" onSubmit={this.handleOnSubmit}>
          <textarea
            className="contentInput content"
            placeholder="New Thing To Do"
            type="text"
            onChange={this.handleOnChange}
            name="content"
            value={content}
          /> 
          <input
            className="tagInput tagContent"
            type="text"
            placeholder="Tag"
            onChange={this.handleOnChange}
            name="tag"
            value={tag}
            />
            <button className="button"type="Submit"> Create New Stick </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sticksFormData: state.sticksFormData
  }
}

export default connect(mapStateToProps, 
  { updateSticksFormData,
    createStick
 })(StickForm)


