import React from 'react';

const Header =  () =>{
    return(
        <section className="header">
          <button className="header-btn">Add</button>
          <h1 className="header-title">To Do List</h1>
          <button className="header-btn primary">Clear</button>
        </section>
    );
};

export default Header;