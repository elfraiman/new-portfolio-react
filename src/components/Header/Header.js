import React, { Component } from 'react';
import './Header.scss';
import { FiMenu } from 'react-icons/fi';


class ElanHeader extends Component {
  constructor(props) {
    super();

    this.state = {}
  }


  render() {
    return (
      <div className="header-wrapper">
        <p>Elan</p>
        <FiMenu className="icon" />
      </div>
    )
  }
}

export default ElanHeader;