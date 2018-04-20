import React from 'react';
import '../containers/sticky.css'
import Counter from './Counter'
import { deleteStick } from '../actions/sticks';

const StickCard = ({ stick }) => (
  <div className="NoteWrapper">
    <div key={stick.id} className="Stick">
        <div className="content">{stick.content}</div>
          <div className="Tag">
            <h5>{stick.tag}</h5>
            <Counter stick={stick} />
          </div>
    </div>
  </div> 
)

export default StickCard;