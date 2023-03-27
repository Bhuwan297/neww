import React, { useState } from 'react';

import '../components/css/login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  function handleEmailChange(event) {
    setEmail(event.target.value);
    setIsDisabled(email === '' || password === '');
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setIsDisabled(email === '' || password === '');
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission here
  }

  return (
    <main className="main">
      <div className="container">
        <section className="wrapper">
          <div className="heading">
            <h1 className="text text-large">Sign In</h1>
            <p className="text text-normal">
              New user?{' '}
              <span>
                <a href="#" className="text text-links">
                  Create an account
                </a>
              </span>
            </p>
          </div>
          <form name="signin" className="form" onSubmit={handleSubmit}>
            <div className="input-control">
              <label htmlFor="email" className="input-label">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input-field"
                placeholder="Email Address"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="input-control">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="input-field"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="input-control">
              <a href="#" className="text text-links">
                Forgot Password
              </a>
              <input
                type="submit"
                name="submit"
                className="input-submit"
                value="Sign In"
                disabled={isDisabled}
              />
            </div>
          </form>
          <div className="striped">
            <span className="striped-line"></span>
            <span className="striped-text">Or</span>
            <span className="striped-line"></span>
          </div>
          <div className="method">
            <div className="method-control">
              <a href="#" className="method-action">
                <i className="ion ion-logo-google"></i>
                <span>Sign in with Google</span>
              </a>
            </div>
            <div className="method-control">
              <a href="#" className="method-action">
                <i className="ion ion-logo-facebook"></i>
                <span>Sign in with Facebook</span>
              </a>
            </div>
            <div className="method-control">
              <a href="#" className="method-action">
                <i className="ion ion-logo-apple"></i>
                <span>Sign in with Apple</span>
              </a>
            </div>
          </div>
          </section>
        </div>

        </main>
 );      
};

export default Login; 