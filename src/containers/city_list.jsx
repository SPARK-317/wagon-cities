import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {setCities} from '../actions/index.js';

import City from './city.jsx';

class CityList extends Component {

  componentWillMount() {
    this.props.setCities();
  } 

  renderList = (props) => {
    return this.props.cities.map((city) => {
      return <City city={city} key={city.name} />;
    });
  }

  render() {
    return (
      <div className="list-group-item">
        {this.renderList()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities : setCities }, 
    dispatch
  );
}

function mapStateToProps(state) {
  return { 
    cities: state.cities 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
