import React from 'react'

class Filters extends React.Component {

  // handleFindPets = (e) => {
  //   e.preventDefault
  //   this.fetchPets()
  // }

  // handleChangeType = (e) => {
  //   e.preventDefault()
  //   this.changeType()
  // }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.props.onChangeType} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.props.onFindPetsClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
