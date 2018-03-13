import React from 'react'
import { connect } from 'react-redux'
import { toggleSticky } from './actions/stickies.js'

const Sticky = ({ id, note, complete, dispatch }) => (
  <li
    onClick={() => dispatch(toggleSticky(id))}
    style={ complete ? { textDecoration: 'line-through', color: 'grey' } : {} }
  >
    {note}
  </li>
)

export default connect()(Sticky)