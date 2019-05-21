import React, { Component } from 'react'

export default 
class extends Component {
  render() {
    const { name, height, mass, hair_color, skin_color } = this.props.character
    return (
      <div style ={ container }>
        <span style = { charName }>{ name }</span>
        <div>
          Height: { height }<br />
          Mass: { mass }<br />
          Hair Color: { hair_color }<br />
          Skin Color: { skin_color }
        </div>
      </div>
    )
  }
}

const container = {
  background: '#544567',
  color: '#b8ab89',
  width: '300px',
  border: 'none',
  margin: '2px',
  padding: '5px',
  display: 'flex',
  flexDirection: 'column'
}

const charName = {
  fontSize: '1.5rem',
  borderBottom: '1px dashed #b8ab89',
  paddingBottom: '8px',
  marginBottom: '8px',
  color: '#b26a4a'
}