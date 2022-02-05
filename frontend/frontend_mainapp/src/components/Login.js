import React, { Children } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/AuthActions';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from './UI/button/Button';

function Login(props) {
  const [username, setuserName] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const handleFormFieldChange = (event) => {
    switch (event.target.id) {
      case 'username': setuserName(event.target.value); break;
      case 'password': setPassword(event.target.value); break;
      default: return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAuth(username, password);
  }

  return (
    <Container component="main" maxWidth="xs">
        <Button>LOGIN</Button>
    </Container>
  );
}

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
  }
}

export default connect(null, mapDispatchToProps)(Login);