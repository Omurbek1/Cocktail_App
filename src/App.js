import { AppBar, Container, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

import Main from './components/Main'
import './App.css'

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  Button: {
    width: 80,
    height: 50,
    margin: '20px',
    paddingTop: -20,
    paddingBottom: 10,
  },
  title: {
    flexGrow: 1
  },
  h6: {
    marginRight: 400

  }
}))

function App() {
  const classes = useStyle();

  return (
    <>
      <AppBar position="absolute" >
        <Container fixed>
          <Toolbar>

            <Typography variant="h6" className={classes.h6}>
              Powered by Mamytbekov Omurbek
          </Typography>

          </Toolbar>

        </Container>

      </AppBar>
      <div className='App'>
        <Main />
      </div>
    </>


  )

}
export default App;
