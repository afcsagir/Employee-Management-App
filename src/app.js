import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyDyjMS9p7plKgsJUaZkeVPpTN_ZvRSqgVo',
            authDomain: 'employee-management-976f6.firebaseapp.com',
            databaseURL: 'https://employee-management-976f6.firebaseio.com',
            projectId: 'employee-management-976f6',
            storageBucket: 'employee-management-976f6.appspot.com',
            messagingSenderId: '146743488799'
          };
          firebase.initializeApp(config);
    }
  render() {
    return (
      <Provider store = {createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
