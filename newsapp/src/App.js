import React from 'react';
import {Provider} from 'react-redux'
import store  from './redux/store';


function App() {
  return (
    <Provider store = {store}>

   
    <div>
    <h1>NEWS APP</h1>
    </div>
    </Provider>
  );
}

export default App;

//store setup -> app.js(store) -> news()