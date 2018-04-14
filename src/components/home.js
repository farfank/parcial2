import React, { Component } from 'react';
import { SignUpLink } from './signup';
import withAuthorization from './withAuthorization';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import * as routes from '../pages/routes';


class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1 style={{color:"white"}}>Bienvenido</h1>
        { !!users && <UserList users={users} /> }

      </div>
    );
  }
}


const UserList = ({ users }) =>
  <div style={{color:"white"}}>
  <br></br>
  <br></br>
    <h2 >Lista de usuarios</h2>
    <br></br>
    <div class="form-group">
            <div class="form-row">
              <div class="col-md-3">
                <label for="revistaInput">Nombre de usuario</label>
                {Object.keys(users).map(key =>
                <div style={{color:"white"}} key={key}>{users[key].username}</div>
                )}
              </div>

              <div class="col-md-3">
                <label for="volumenInput">Correo electr&oacute;nico</label>
                {Object.keys(users).map(key =>
                <div style={{color:"white"}} key={key}>{users[key].email}</div>
                )}
              </div>
            </div>
    </div>
    
    
    <br></br>
    <Link to={routes.SIGN_UP}>Agregar usuario</Link>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </div>


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);