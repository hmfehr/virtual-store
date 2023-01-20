import React from 'react';
import Categories from './Components/Categories';
import Header from './Components/Header';
import Products from './Components/Products';
import Cart from './Components/SimpleCart'
import Footer from './Components/Footer';


const App = () => {
  return(
    <>
      <Header />
      <Categories />
      <Products />
      <Cart />
      <Footer />
    </>
  )
}

export default App;
