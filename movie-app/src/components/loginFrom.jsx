import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  validate = () => {
    const errors = {};
    const { data } = this.state;
    if (data.username.trim() === "") errors.username = "Username is required.";
    if (data.password.trim() === "") errors.password = "Password is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;
    //call the server .
    console.log("submitted!");
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required.";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required.";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={data.username}
            error={errors.username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={data.password}
            error={errors.password}
            label="Password"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
