import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { setActiveCity } from '../actions/index.js';

class City extends Component {

  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  }

  render() {
    return (
      <div style={{ backgroundImage: `url("https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}")` }}
        onClick={this.handleClick}>
        <h3>{this.props.city.name}</h3>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch)
{
  return bindActionCreators({ setActiveCity: setActiveCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
