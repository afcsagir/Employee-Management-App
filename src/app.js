import React, { Component } from "react";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDyjMS9p7plKgsJUaZkeVPpTN_ZvRSqgVo",
      authDomain: "employee-management-976f6.firebaseapp.com",
      databaseURL: "https://employee-management-976f6.firebaseio.com",
      projectId: "employee-management-976f6",
      storageBucket: "employee-management-976f6.appspot.com",
      messagingSenderId: "146743488799"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
