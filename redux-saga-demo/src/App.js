import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

import logo from './logo.svg';
import './App.css';

const errorMap = {
  INVALIDPWD: 'Invalid Password!',
  INVALIDUSERNAME: 'Invalid Username!',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pwd: '',
    };
  }
  static get defaultProps() {
    return {error: {}};
  }
  render() {
    let usernameError = this.props.error === 'INVALIDUSERNAME';
    let pwdError = this.props.error === 'INVALIDPWD';
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
                  onChange={(event) => this.setState({username:event.target.value})}
                  error={this.props.error === 'INVALIDUSERNAME'}
                  helperText={usernameError ? 'Invalid Username!': ''}
                />
               </Grid>
              <Grid item xs={12}>
                <TextField
                  InputLabelProps={{shrink:true}}
                  placeholder={'Password'}
                  label={'Password'}
                  type={'password'}
                  error={this.props.error === 'INVALIDPWD'}
                  helperText={pwdError ? 'Invalid Password!': ''}
                  onChange={(event) => this.setState({pwd:event.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <Button raised style={{backgroundColor: '#b9bf33', color:'white'}} onClick={() => this.props.dispatchLogin(this.state.username, this.state.pwd)}>
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

const AppStructure = (props) => {
  return (
    <div className="App" style={{backgroundColor: '#552d7c', height:'100%', width:'100%'}}>
        <AutoGridWithStyles>
          <CustomPaperWithStyles>
            {props.children}
          </CustomPaperWithStyles>
        </AutoGridWithStyles>
      </div>
  );
};

const SuccessComponent = (props) => {
  return (
    <AppStructure>
       <CardGrid>
          <Grid item xs={12}>
            <Typography type={'headline'} align={'center'}>
              {'Success'}
            </Typography>
          </Grid>
        </CardGrid>
    </AppStructure>
  );
};

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

export {
  SuccessComponent,
}