import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pwd: '',
    };
  }
  static get defaultProps() {
    return {error: {invalidPassword: {}}};
  }
  render() {
    let errorMessage;
    let passwordError;
    if (this.props.error.invalidPassword) {
       errorMessage = 'Invalid Password!';
       passwordError = true;
    }
    // this "form" should be in an actual form
    return (
      <div className="App" style={{backgroundColor: '#552d7c', height:'100%', width:'100%'}}>
        <AutoGridWithStyles>
          <CustomPaperWithStyles>
            <CardGrid>
              <Grid item xs={12}>
                <TextField
                  InputLabelProps={{shrink:true}}
                  placeholder={'Username'}
                  label={'Username'}
                />
               </Grid>
              <Grid item xs={12}>
                <TextField
                  InputLabelProps={{shrink:true}}
                  placeholder={'Password'}
                  label={'Password'}
                  type={'password'}
                  error={passwordError}
                  helperText={errorMessage}
                />
              </Grid>
              <Grid item xs={12}>
                <Button raised style={{backgroundColor: '#b9bf33', color:'white'}}>
                  {'Log In'}
                </Button>
              </Grid>
            </CardGrid>
          </CustomPaperWithStyles>
        </AutoGridWithStyles>
      </div>
    );
  }
}

export default App;

const styleSheet = createStyleSheet(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function AutoGrid(props) {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <Grid container gutter={24}>
        <Grid item xs>
        </Grid>
        <Grid item xs={6}>
          {props.children}
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>
    </div>
  );
}

const CustomPaper = (props) => {
  const classes = props.classes;
  return (
    <Paper className={classes.paper}>
      {props.children}
    </Paper>
  );
};
const AutoGridWithStyles = withStyles(styleSheet)(AutoGrid);
const CustomPaperWithStyles = withStyles(styleSheet)(CustomPaper);

const CardGridBasic = (props) => {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <Grid container gutter={24}>
        {props.children}
      </Grid>
    </div>
  );
};


const CardGridStyles = createStyleSheet(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  }
}));

const CardGrid = withStyles(CardGridStyles)(CardGridBasic);