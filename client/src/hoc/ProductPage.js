import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategoriesListRequest } from '../redux/actions/products';

const mapDispatchToProps = {
  getCategoriesList: getCategoriesListRequest,
};

export default function (WrappedComponent) {
  class ProductPage extends Component {
    componentDidMount() {
      this.props.getCategoriesList();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return connect(null, mapDispatchToProps)(ProductPage);
}
