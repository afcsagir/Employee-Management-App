import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Input, Button, CardSection } from "./common";
import { emailChanged, passwordChanged,loginUser } from "../actions";

class Loginform extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress(){
   const {email,password}  = this.props;
   this.props.loginUser({email,password});
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email ID"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}/>
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            secureTextEntry
            onChangeText={this.onPasswordChanged.bind(this)}
            value={this.props.password}/>
        </CardSection>
        <CardSection>
          <Button children="Login / Signup"
          onPress = {this.onButtonPress.bind(this)} />
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    Password: state.auth.password
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(Loginform);
