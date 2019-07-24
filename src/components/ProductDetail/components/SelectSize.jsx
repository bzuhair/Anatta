import React from 'react'

const SelectSize = ({ selectedSize, sizes, unavailableSizes }) => (
  <div className="select-size">
    <div className="header">
      <span>SELECT SIZE</span>
      <span>Size & Fit Guide</span>
    </div>
    <div className="sizes">
      {sizes.map((size, idx) => (
        <div key={`${size}-idx`} className="size" style={{ border: size === selectedSize ? 'solid 4px #7dc242' : 'solid 1px #4a4a4a', backgroundColor: unavailableSizes.indexOf(size) === -1 ? '#ffffff' : '#f1f1f1' }}>
          {size}
        </div>
      ))}
    </div>
  </div>
);

export default SelectSize;
