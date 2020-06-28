import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';
import Header from './UI/layout/Header';
import User from './login/User';
import Routes from './UI/layout/Routes';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { loadUser } from '../src/database/dbUtils';
import { firebaseConfig } from '../src/database/firebaseConfig';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[700] },
  },
  secondary: pink,
});

function App() {
  const [user, setUser] = useState(null);

  const onLogout = () => {
    setUser(null);
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(response => {
      if (response) {
        // leer datos del usuario
        loadUser(response.uid)
        .then(data => { setUser(data); });
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Header>
          {user && <User user={user} onLogout={onLogout} />}
        </Header>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
