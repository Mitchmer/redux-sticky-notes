import React from 'react'
import { connect } from 'react-redux'
import { incId } from './actions/nextId'
import { addSticky } from './actions/stickies'

class StickyForm extends React.Component {
  state = { note: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    const { note } = this.state
    const sticky = { note, id, complete: false }
    dispatch(addSticky(sticky))
    dispatch(incId())
    this.setState({ note: '' })
  }

  handleChange = (e) => {
    this.setState({ note: e.target.value })
  }

  render() {
    const { note } = this.state

    return (
      <div>
        <h3>Create A New Sticky</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-note">
            <textarea className="form-input" value={note} onChange={this.handleChange}></textarea>
            <button className="form-btn">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(StickyForm)