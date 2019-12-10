import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar'
import List from './components/List';
import ItemModal from './components/ItemModal';
import { Provider } from 'react-redux';
import store from './store';
import {loadUser} from './actions/authActions'
// import itemModal from './components/ItemModal';
import { Container} from 'reactstrap';
class  App extends Component {

  componentDidMount() {
    store.dispatch(loadUser())
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <AppNavbar />
            <Container>
              <ItemModal />
              <List />
            </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
