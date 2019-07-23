import React, { Component } from 'react';

import ProductImages from './components/ProductImages';
import Details from './components/Details';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      selectedProduct: null,
      selectedImg: null,
      images: []
    };
  }

  componentDidUpdate(prevProps) {
    const { selectedProduct } = this.props;
    if (!prevProps.selectedProduct || selectedProduct.id !== prevProps.selectedProduct.id) {
      this.setState({
        selectedProduct: selectedProduct,
        selectedImg: selectedProduct.imgURLs[0],
        images: selectedProduct.imgURLs
      });
    }

  }

  render() {
    const { selectedProduct, selectedImg, images } = this.state;
    console.log('se', selectedProduct);
    return selectedProduct
      ? (
        <div className="product-detail-container">
          <ProductImages selectedImg={selectedImg} images={images} />
          <Details selectedProduct={selectedProduct} />
        </div>
      )
      : null;
  }
}

export default ProductDetail;
