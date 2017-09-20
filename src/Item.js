import React from 'react';

const Item = ({ children }) => {
  const style = {
    border: '1px solid #eee',
    borderRadius: 4,
    backgroundColor: '#fff',
    padding: '4px 8px',
    margin: 4,
    color: '#333',
  };

  return <div style={style}>{children}</div>;
};

export default Item;
