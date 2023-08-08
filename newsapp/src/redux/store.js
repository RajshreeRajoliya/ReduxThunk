import {legacy_createStore as createStore , applymiddleware} from 'redux';

import thunk from 'redux-thunk';
// import newsReducer from './newsReducer';

const store = createStore(newsReducer , applymiddleware(thunk));

//store got ready

export default store;

//exporting store