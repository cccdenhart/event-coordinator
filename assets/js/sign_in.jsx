import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import $ from "jquery";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

// NOTE: used starter code from https://justcode.me/css/creating-simple-login-page-template-using-bootstrap

export default function sign_in_init(node) {
  ReactDOM.render(<SignIn />, node);
}

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div
          id="loginbox"
          className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 loginbox"
        >
          <div className="panel panel-info">
            <div className="panel-heading mx-auto">
              <h1> Sign In </h1>
            </div>
            <div className="panel-body panel-pad">
              <form
                onSubmit={this.handleSubmit}
                id="loginform"
                className="form-horizontal mx-auto"
                role="form"
              >
                <div className="input-group margT25">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-user" />
                  </span>
                  <input
                    id="login-username"
                    type="text"
                    className="form-control"
                    name="username"
                    value=""
                    placeholder="username or email"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-group margT25">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-lock" />
                  </span>
                  <input
                    id="login-password"
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="password"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group margT10">
                  <div className="col-sm-12 controls">
                    <input
                      id="btn-login"
                      type="submit"
                      value="Submit"
                      href="#"
                      className="btn btn-block btn-success"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12 control">
                    <div className="no-acc">
                      Don't have an account!
                      <a href="/sign_in"> Sign Up Here </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
