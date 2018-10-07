import React,{ Component,Fragment } from 'react';
import store from './store';
import {Provider} from 'react-redux';
import Home from './pages/trade';
import Detail from './pages/detail/loadable.js';
import {BrowserRouter,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <Fragment>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:name' exact component={Detail}></Route>
            </Fragment>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
