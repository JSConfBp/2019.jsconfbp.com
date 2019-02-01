import React from 'react'
import styles from './ambassadorform.module.scss'
import Button from '../Button';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

import { withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: red,
  },
});

const customStyles = {
  input: {
    borderRadius: 0,
  }
}


class AmbassadorForm extends React.Component {
  constructor () {
		super()
		this.state = {
			community: {
				value: '',
				error: false
			},
			city: {
				value: '',
				error: false
			},
			email: {
				value: '',
				error: false
			},
			name: {
				value: '',
				error: false
			},
			description: {
				value: '',
				error: false
			}
		}
  }

  submit () {

return false;

		const data = Object.entries(this.state).reduce((obj, [key, val]) => {
			obj[key] = val.value

			return obj
		},{})

		fetch('https://ambassador-program-service.herokuapp.com/register', {
			method: 'post',
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			}
		})
	}

	onChange(prop, value) {
		this.setState({
			[prop]: {
				value,
				error: this.state[prop].error
			}
		})
	}

	onKeyUp ({ keyCode }) {
		if (13 === keyCode) this.submit()
	}

  render() {
    return <form className={styles.ambassador_form}>
      <MuiThemeProvider theme={theme}>
        <TextField
          required
          id="community"
          label="Community name"
          className={styles.ambassador_textfield}
          margin="normal"
          variant="filled"
          error={ this.state.community.error }
          helperText="For example: JS Meetup in Rivet City"
          onKeyUp={ e => this.onKeyUp(e) }
          onChange={e => this.onChange('community', e.target.value) }
        />

      <TextField
          required
          id="city"
          label="City & Country you located in"
          className={styles.ambassador_textfield}
          margin="normal"
          variant="filled"
          error={ this.state.city.error }
          onKeyUp={ e => this.onKeyUp(e) }
          onChange={e => this.onChange('city', e.target.value) }
        />

      <TextField
          required
          id="email"
          label="Contact Email"
          type="email"
          className={styles.ambassador_textfield}
          margin="normal"
          variant="filled"
          error={ this.state.email.error }
          onKeyUp={ e => this.onKeyUp(e) }
          onChange={e => this.onChange('email', e.target.value) }
        />

      <TextField
          id="name"
          label="Contact Name"
          className={styles.ambassador_textfield}
          margin="normal"
          variant="filled"
          error={ this.state.name.error }
          onKeyUp={ e => this.onKeyUp(e) }
          onChange={e => this.onChange('name', e.target.value) }
        />

      <TextField
          id="description"
          multiline
          rowsMax="4"
          label="About your community"
          className={styles.ambassador_textarea}
          margin="normal"
          variant="filled"
          error={ this.state.description.error }
          onKeyUp={ e => this.onKeyUp(e) }
          onChange={e => this.onChange('description', e.target.value) }
        />
</MuiThemeProvider>

        <Button
          color="red"
          fill={true}
          onClick={ e => this.submit() }
          className={styles.ambassador_button}>
            Apply
        </Button>



    </form>
  }

}

export default withStyles(customStyles)(AmbassadorForm)
