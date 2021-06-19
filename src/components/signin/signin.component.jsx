import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { db, auth } from "../../firebase";
import logo from "../../easycart-t.png";
import "./signin.styles.scss";
export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    // Fancy firebase login
  };
  const signUp = (e) => {
    e.preventDefault();
    // Fancy firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src={logo} alt='brand-logo' />
      </Link>
      <div className='login__container'>
        <h1>Login</h1>
        <form>
          <h4>Email or mobile phone number</h4>
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h4>Password</h4>
          <input
            type='password'
            name='email'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className='login__signinbutton'
            type='submit'
            onClick={signIn}>
            SignIn
          </button>
        </form>

        <p>
          By continuing, you agree to EzyCart's Conditions of Use and Privacy
          Notice.
        </p>
        <p>New to EzyCart?</p>
        <button
          className='login__registerbutton'
          type='submit'
          onClick={signUp}>
          Create your EzyCart account
        </button>
      </div>
    </div>
  );
}
