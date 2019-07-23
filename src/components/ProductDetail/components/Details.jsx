import React from 'react';


const Details = ({ selectedProduct }) => {
  console.log('se', selectedProduct);
  return (
    <div className="details-container">
      <div className="left">
        <div>{selectedProduct.name}</div>
        <div>{selectedProduct.description}</div>
      </div>
      <div className="right">
        <div>{selectedProduct.price} USD</div>
        <div>Reviews</div>
      </div>

    </div>
  )
}

export default Details;
