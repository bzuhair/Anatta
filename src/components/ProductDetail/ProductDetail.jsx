import React, { Component } from 'react';

import ProductImages from './components/ProductImages';
import Details from './components/Details';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      selectedProduct: null,
      selectedImg: { id: 0, data: {} },
      images: []
    };
  }

  componentDidUpdate(prevProps) {
    const { selectedProduct } = this.props;
    if (!prevProps.selectedProduct || selectedProduct.id !== prevProps.selectedProduct.id) {
      this.setState({
        selectedProduct: selectedProduct,
        selectedImg: { id: 0, data: selectedProduct.imgURLs[0] },
        images: selectedProduct.imgURLs
      });
    }
  }

  selectImgHandler = (direction) => {
    const { selectedProduct, selectedImg } = this.state;
    if (direction === 'next') {
      if (selectedImg.id < selectedProduct.imgURLs.length) this.setState({ selectedImg: { id: selectedImg.id + 1, data: selectedProduct.imgURLs[selectedImg.id + 1] } })
    }
    if (direction === 'back') {
      if (selectedImg.id !== 0) this.setState({ selectedImg: { id: selectedImg.id - 1, data: selectedProduct.imgURLs[selectedImg.id - 1] } })
    }
  }

  render() {
    const { selectedProduct, selectedImg, images } = this.state;
    return selectedProduct
      ? (
        <div className="product-detail-container">
          <ProductImages selectedImg={selectedImg} images={images} selectImgHandler={this.selectImgHandler} />
          <Details selectedProduct={selectedProduct} />
        </div>
      )
      : null;
  }
}

export default ProductDetail;
