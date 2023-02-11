import React from 'react';
import Categories from './Components/Categories';
import Header from './Components/Header';
import Products from './Components/Products';
import Footer from './Components/Footer';
import SimpleCart from './Components/SimpleCart';


const App = () => {
  return(
    <>
      <Header />
      <Categories />
      <Products />
      <SimpleCart />
      <Footer />
    </>
  )
}

export default App;
