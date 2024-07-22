import React from 'react';
import list from '../data';
import '../styles/amazon.css';
import Cards from './Cards';

const Amazon = ({ handleClick, searchValue }) => {
  // Ensure searchValue is defined and lowercase to prevent errors
  const filteredProducts = list.filter((item) => {
    const search = searchValue ? searchValue.toLowerCase() : '';
    return (
      item.title.toLowerCase().includes(search) || (item.description && item.description.toLowerCase().includes(search))
    );
  });

  return (
    <section>
      {filteredProducts.map((item) => (
        <Cards item={item} key={item.id} handleClick={handleClick} />
      ))}
    </section>
  );
}

export default Amazon;
