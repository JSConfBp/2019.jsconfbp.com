import React from 'react'
import styles from './ambassadorform.module.scss'
import JSConfButton from '../Button'
import TextField from '@material-ui/core/TextField'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import red from '@material-ui/core/colors/red'

import { withStyles } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: red,
  },
})

const customStyles = {
  input: {
    borderRadius: 0,
  },
}

class AmbassadorForm extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      dialog: {
        open: false,
      },
      community: {
        value: '',
        error: false,
      },
      city: {
        value: '',
        error: false,
      },
      email: {
        value: '',
        error: false,
      },
      name: {
        value: '',
        error: false,
      },
      description: {
        value: '',
        error: false,
      },
    }
  }

  isInvalid() {
    const required = ['community', 'city', 'email']

    return Object.entries(this.state).reduce((invalid, [key, val]) => {
      if (invalid) return invalid

      if (required.includes(key) && !val.value) return true

      return invalid
    }, false)
  }

  async submit(e) {
    e.preventDefault()

    //if(this.isInvalid()) return false;

    const data = Object.entries(this.state).reduce((obj, [key, val]) => {
      obj[key] = val.value

      return obj
    }, {})

    this.setState({ loading: true })

    const result = await fetch(
      'https://ambassador-program-service.herokuapp.com/register',
      {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      }
    )

    if (result.status < 300) {
      this.setState({
        dialog: {
          title: 'Application sent!',
          text: "Thank you, we'll send you an email soon!",
          open: true,
        },
      })
    } else {
      this.setState({
        dialog: {
          title: 'There was an error, sorry!',
          text: 'Please contact us at team@jsconfbp.com!',
          open: true,
        },
      })
    }

    return false
  }

  onChange(prop, value) {
    this.setState({
      [prop]: {
        value,
        error: this.state[prop].error,
      },
    })
  }

  onKeyUp({ keyCode }) {
    if (13 === keyCode) this.submit()
  }

  closeDialog() {
    this.setState({
      loading: false,
      dialog: Object.assign({}, this.state.dialog, {
        open: false,
      }),
    })
  }

  render() {
    return (
      <form className={styles.ambassador_form} onSubmit={() => false}>
        <MuiThemeProvider theme={theme}>
          {this.state.loading ? (
            <CircularProgress
              className={styles.ambassador_loading_indicator}
              color="primary"
            />
          ) : (
            ''
          )}
          <div
            className={this.state.loading ? styles.ambassador_form_loading : ''}
          >
            <TextField
              required
              id="community"
              label="Community name"
              className={styles.ambassador_textfield}
              disabled={this.state.loading}
              margin="normal"
              variant="filled"
              error={this.state.community.error}
              helperText="For example: JS Meetup in Rivet City"
              onKeyUp={e => this.onKeyUp(e)}
              onChange={e => this.onChange('community', e.target.value)}
            />

            <TextField
              required
              id="city"
              label="City & Country you located in"
              disabled={this.state.loading}
              className={styles.ambassador_textfield}
              margin="normal"
              variant="filled"
              error={this.state.city.error}
              onKeyUp={e => this.onKeyUp(e)}
              onChange={e => this.onChange('city', e.target.value)}
            />

            <TextField
              required
              id="email"
              label="Contact Email"
              type="email"
              className={styles.ambassador_textfield}
              margin="normal"
              variant="filled"
              error={this.state.email.error}
              onKeyUp={e => this.onKeyUp(e)}
              onChange={e => this.onChange('email', e.target.value)}
            />

            <TextField
              id="name"
              label="Contact Name"
              disabled={this.state.loading}
              className={styles.ambassador_textfield}
              margin="normal"
              variant="filled"
              error={this.state.name.error}
              onKeyUp={e => this.onKeyUp(e)}
              onChange={e => this.onChange('name', e.target.value)}
            />

            <TextField
              id="description"
              multiline
              disabled={this.state.loading}
              rowsMax="4"
              label="About your community"
              className={styles.ambassador_textarea}
              margin="normal"
              variant="filled"
              error={this.state.description.error}
              onKeyUp={e => this.onKeyUp(e)}
              onChange={e => this.onChange('description', e.target.value)}
            />

            <JSConfButton
              color="red"
              disabled={this.state.loading}
              fill={true}
              onClick={e => this.submit(e)}
              className={styles.ambassador_button}
            >
              Apply
            </JSConfButton>
          </div>

          <Dialog
            open={this.state.dialog.open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {this.state.dialog.title}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {this.state.dialog.text}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={e => this.closeDialog(e)}
                color="primary"
                autoFocus
              >
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </MuiThemeProvider>
      </form>
    )
  }
}

export default withStyles(customStyles)(AmbassadorForm)
