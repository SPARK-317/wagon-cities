import React, {Component} from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {

  render() {
    return (
      <div className="active-city">
        <h1>{this.props.activeCity.name}</h1>
        <p>{this.props.activeCity.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`} width='100%' />
      </div>
    );
  }
}

function mapStateToProps(state)
{
  return {activeCity: state.activeCity};
}

export default connect(mapStateToProps, null)(ActiveCity);