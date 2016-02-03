// MenuListContainer.jsx

import React, {Component} from 'react';
import { connect } from 'react-redux';
import MenuList from 'components/utils/MenuList/MenuList';

class MenuListContainer extends Component {
  render() {
    <MenuList menuItems={this.props.menuItems} />
  }
}

function mapStateToProps(state) {
  return {
    menuItems: state.menuReducer
  }
}

export default connect(mapStateToProps)(MenuListContainer);