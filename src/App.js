import React from 'react';
import Categories from './Components/Categories/Categories';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';


const App = () => {
  return(
    <>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </>
  )
}

export default App;
