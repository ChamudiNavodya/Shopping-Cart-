import React, { useState } from 'react';
import '../styles/navbar.css';

const Navbar = ({ size, setShow, handleSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    handleSearch(event.target.value); // Pass the search value to the parent component for filtering.
  };

  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Products
        </span>

        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={handleInputChange}
          />
        </div>

        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
