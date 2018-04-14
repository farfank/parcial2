import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
  <button
    class="btn btn-primary pull-right" 
    type="button"
    onClick={auth.doSignOut}
  >
    Cerrar sesi&oacute;n
  </button>

export default SignOutButton;