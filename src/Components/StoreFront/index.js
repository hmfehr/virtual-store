import Categories from '../Categories';
import Products from '../Products';
import './styles.scss'

//brining in our categories and products be be rendered in together on the app js
const StoreFront = () => {
  return (
    <>
      <Categories />
      <Products />
    </>
  )
}

export default StoreFront;