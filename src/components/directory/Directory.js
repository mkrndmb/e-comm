import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import {connect} from 'react-redux'


import './directory.css';

class Directory extends React.Component {
  
  render() {
    return (
      <div className='directory-menu'>
        {this.props.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({directory :{sections}}) =>({
  sections
})


export default connect(mapStateToProps)(Directory);