import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class Register extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () =>{
      //Call the server . 
      console.log("Submitted.") ; 
  }

  render() {
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("username","Username")}
                {this.renderInput("password","Password","password")}
                {this.renderInput("name","Name")}
                {this.renderButton("Resigter")}
            </form>
        </div>
    );
  }
}

export default Register;
