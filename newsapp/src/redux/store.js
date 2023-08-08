import {legacy_createStore as createStore} from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { newsReducer } from './newsReducer';


const store = createStore(newsReducer , applyMiddleware(thunk));

//store got ready

export default store;

//exporting store