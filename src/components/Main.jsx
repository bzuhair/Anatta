import React, { Component } from 'react';

import Header from './Header/Header';
import ProductDetail from './ProductDetail/ProductDetail';
import Footer from './Footer/Footer';

import { getProducts, getProductImage } from '../services/productService';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      selectedProduct: null
    };
  }

  componentDidMount() {
    this.displayProducts();
  }

  displayProducts = async () => {
    const productResult = await getProducts();
    const products = productResult.data.map((item) => {
      return getProductImage(item.id)
        .then((res) => Object.assign({ imgURLs: res.data }, item))
        .catch((err) => console.log(err));
    });
    Promise.all(products).then((values) => {
      this.setState({ products: values, selectedProduct: values[0] });
    });
  }

  render() {
    const { products, selectedProduct } = this.state;
    return (
      <div id="main">
        <Header />
        <div className="divider" />
        <ProductDetail products={products} selectedProduct={selectedProduct} />
        <Footer />
      </div>
    );
  }
}


export default Main;
