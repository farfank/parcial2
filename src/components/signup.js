import React, { Component } from 'react';
import { Link,
    withRouter,
} from 'react-router-dom';
import { auth, db } from '../firebase';
import './App.css';
import './sb-admin.css';
import * as routes from '../pages/routes';

import { SignInLink } from './signin';

const SignUpPage = ({history}) =>
  <div>
    <h1 style={{color:"white"}}>Crear cuenta</h1>
    <SignUpForm history={history}/>
  </div>


const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };
  
  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };

  }

  onSubmit = (event) => {
    const {
        username,
        email,
        passwordOne,
      } = this.state;

      const {
        history,
      } = this.props;
  
      auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.uid, username, email)
        .then(() => {
          this.setState(() => ({ ...INITIAL_STATE }));
          history.push(routes.HOME);
        })
        .catch(error => {
          this.setState(byPropKey('error', error));
        });
        })
        .catch(error => {
          this.setState(byPropKey('error', error));
        });
  
      event.preventDefault();
  }

  render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;

      const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
  
    return (
      <body class="bg-dark">
      <div class="container">
        <div class="card card-register mx-auto mt-5">
          <div class="card-header">Registrar cuenta</div>
            <div class="card-body">
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <label for="exampleInputUserName">Nombre de usuario</label><br></br>
                  <input
                    class="form-control"
                    value={username}
                    onChange={event => this.setState(byPropKey('username', event.target.value))}
                    type="text"
                    placeholder="Ingresar nombre de usuario"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleInputEmail">Correo electronico</label><br></br>
                  <input
                    class="form-control"
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="ejemplo@hotmail.com"
                  />
                </div>

                <div class="form-group">
                  <div class="form-row">
                    <div class="col-md-6">
                      <label for="exampleInputPassword1">Contrase&ntilde;a</label><br></br>
                      <input
                        class="form-control"
                        value={passwordOne}
                        onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                        type="password"
                       placeholder="Ingresar contraseña"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="exampleConfirmPassword">Confirmar contrase&ntilde;a</label>
                      <input
                        class="form-control"
                        value={passwordTwo}
                        onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                        type="password"
                       placeholder="Confirmar contraseña"
                      />
                    </div>
                  </div>
                </div>
       
        <button class="btn btn-primary btn-block" disabled={isInvalid} type="submit">
          Registrarse
        </button>
        <br></br>
        <SignInLink />
        { error && <p>{error.message}</p> }
      </form>
      </div>
      </div>
      </div>
      </body>
    );
  }
}

const SignUpLink = () =>
  <p>
    Todav&iacute;a no tienes una cuenta? 
    {' '}
    <Link to={routes.SIGN_UP}>Registrarse ahora</Link>
  </p>

export {SignUpPage};

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};