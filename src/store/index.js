//rename this reducr for more complex reducers
import reducer from './reducer';
//--------------------------------------------
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// this is the line where im going to bring in both of the reducers after seperating them into their own folders?
let reducers = combineReducers({
  products: reducer,
});
//----------------------------------------------------------------------------------------------------------------

export default function store(){
  return createStore(reducers, composeWithDevTools());
}