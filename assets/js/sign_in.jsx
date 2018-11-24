import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import $ from "jquery";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

// NOTE: used starter code from https://justcode.me/css/creating-simple-login-page-template-using-bootstrap/
export default function SignIn(props) {
  return (
    <div className="container">
      <div
        id="loginbox"
        className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 loginbox"
      >
        <div className="panel panel-info">
          <div className="panel-heading">
            <div className="panel-title"> Sign In </div>
            <div className="forgot-password">
              {" "}
              <a href="#">Forgot password?</a>{" "}
            </div>
          </div>
          <div className="panel-body panel-pad">
            <div
              id="login-alert"
              className="alert alert-danger col-sm-12 login-alert"
            />
            <form id="loginform" className="form-horizontal" role="form">
              <div className="form-group">
                <div className="col-sm-12 controls">
                  <a id="btn-fblogin" href="#" className="btn btn-facebook">
                    Login with Facebook
                  </a>
                  <a id="btn-googlelogin" href="#" className="btn btn-google">
                    Login with Google+
                  </a>
                  <a id="btn-twitterlogin" href="#" className="btn btn-twitter">
                    Login with Twitter
                  </a>{" "}
                  <strong>OR</strong>
                </div>
              </div>
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
                />
              </div>
              <div className="input-group">
                <div className="checkbox">
                  <label>
                    <input
                      id="login-remember"
                      type="checkbox"
                      name="remember"
                      value="1"
                    >
                      {" "}
                      Remember me
                    </input>
                  </label>
                </div>
              </div>
              <div className="form-group margT10">
                <div className="col-sm-12 controls">
                  <a
                    id="btn-login"
                    href="#"
                    className="btn btn-block btn-success"
                  >
                    Login{" "}
                  </a>
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-12 control">
                  <div className="no-acc">
                    Don't have an account!
                    <a href="#"> Sign Up Here </a>
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
