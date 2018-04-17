import React, { Component } from 'react'
import StickCard from '../components/StickCard'
import StickForm from './StickForm'
import './sticky.css'
import { connect } from 'react-redux'
import { fetchSticks } from '../../components/actions/sticks'
 

class AllStickContainer extends Component {

  componentDidMount(){
    this.props.fetchSticks()
  }

    render(){
      return (
      <div>
        <h1>Sticks</h1>
        <StickForm />
        <div className="SticksContainer">
            {this.props.sticks.map(stick => <StickCard key={stick.id} stick={stick} />)}
        </div>
      </div>
      )
    }

  
}

const mapStateToProps = state => {
  return {
    sticks: state.sticks
  };
}
//we are going to need to fetch all stick
// we're changing state so we will need to connect

export default connect(mapStateToProps, { fetchSticks })(AllStickContainer)


//where we're getting alll the sticks
//loading the stick cards