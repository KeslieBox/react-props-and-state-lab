import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  petContent = () => {
    return this.props.pets.map(pet => {
      return <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
    })
  }
  
  // this also works
  // const petCards = this.props.pets.map(pet => (
  //   <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
  // ));

  render() {
    return (
      <div className="ui cards">{this.petContent()}</div>
    )
  }
}

export default PetBrowser
