import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';

import { SignUpLink } from './signup';
import { auth } from '../firebase';
import * as routes from '../pages/routes';

const SignInPage = ({ history }) =>

  <div>
       <h1 style={{color:"white"}}>Iniciar sesi&oacute;n</h1>

    <SignInForm history={history} />
    
  </div>
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {

    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
    <div>
        <div class="card card-login mx-auto mt-5">
          <div class="card-header">Ingresar datos</div>
            <div class="card-body">
                  <form onSubmit={this.onSubmit}>
                    <div class="form">
					    <label for="exampleInputEmail1">Correo electronico</label>
                        <input
                            class="form-control"
                            value={email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            type="text"
                            placeholder="ejemplo@hotmail.com"
                        />					
                    </div><br></br>
					<div class="form-group">
					    <label for="exampleInputPassword1">Contrase&ntilde;a</label>
                        <input
                          class="form-control"
                          value={password}
                          onChange={event => this.setState(byPropKey('password', event.target.value))}
                          type="password"
                          placeholder="Ingresar contraseña"
                        />
					</div>    
                    <button class="btn btn-primary btn-block" disabled={isInvalid} type="submit">
                      Entrar
                    </button>
                   { error && <p>{error.message}</p> }
                </form><br></br>
                <SignUpLink />
            </div>
      </div>
            <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
      </div>
    );
  }
}

const SignInLink = () =>
  <p>
    Ya tienes una cuenta?
    {' '}
    <Link to={routes.SIGN_IN}>Regresa para ingresar</Link>
  </p>

export {SignInPage};

export default withRouter(SignInPage);

export {
  SignInForm,
  SignInLink,
};