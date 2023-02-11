//rename this reducr for more complex reducers
// import reducer from './reducer';
// import productsReducer from './products';
// import categoryReducer from './categories';
// import cartReducer from './cart';
//--------------------------------------------
import { legacy_createStore as createStore, combineReducers} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from './products';
import categoryReducer from './categories';
import cartReducer from './cart';
// import logger from './middleware/logger';
// import thunk from './middleware/thunk';

// this is the line where im going to bring in both of the reducers after seperating them into their own folders?
let reducers = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  cart: cartReducer,
});
//----------------------------------------------------------------------------------------------------------------
const store = () => createStore(reducers, composeWithDevTools());

export default store();