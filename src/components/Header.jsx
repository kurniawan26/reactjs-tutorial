import React from 'react';
import PropTypes from 'prop-types'

const Header =  ({showAddToggle, showAdd, clearTodos}) =>{
    return(
        <section className="header">
          <button className="header-btn" onClick={showAddToggle}>{showAdd ? 'Finish' : 'Add'}</button>
          <h1 className="header-title">To Do List</h1>
          <button className="header-btn primary" onClick={clearTodos}>Clear</button>
        </section>
    );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;