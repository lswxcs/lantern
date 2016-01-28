/*
 * Home Screen for Free Users
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { translate } from 'react-i18next/lib';
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button'
import IconEmail from 'material-ui/lib/svg-icons/communication/email'

import styles from '../../constants/Styles'

class ScreenFree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMail: '',
    }
    this._emailValidation = this._emailValidation.bind(this)
    this.getCode = this.getCode.bind(this)
  }

  getCode() {

  }

  _emailValidation() {
    const { t } = this.props
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test( this.refs.email.getValue() )) {
      this.setState({ errorMail: '' })
    } else {
      this.setState({ errorMail: t('free.use_valid_email') })
    }
  }

  render() {
    const { t } = this.props
    return (
      <div>
        <section id="middle_sheet">
          <h2>{t('free.upgrade_headline')}</h2>
          <ul>
            <li>{t('free.li1')}</li>
            <li>{t('free.li2')}</li>
            <li>{t('free.li3')}</li>
            <li>{t('free.li4')}</li>
          </ul>
          <div id="get_pro">
            <RaisedButton label={t('free.upgrade_button')} />
          </div>
        </section>
        <section id="bottom_sheet">
          <h3>{t('free.get_months_headline')}</h3>
          <p>{t('free.get_months_p')}</p>
          <div id="get_code">
            <IconEmail style={styles.iconStyles} color="white" />
            <TextField
              hintText={t('free.enter_email')}
              floatingLabelText={t('free.email')}
              errorText={this.state.errorMail}
              onBlur={this._emailValidation}
              ref="email" />
            <br />
            <RaisedButton label={t('free.get_code')} onTouchTap={this.getCode} />
          </div>
        </section>
      </div>
    )
  }
}

ScreenFree.propTypes = {
  t: React.PropTypes.func,
  dispatch: React.PropTypes.func,
  data: React.PropTypes.object,
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state,
  }
}


// Wrap the component to inject dispatch and state into it
export default translate(['translation'])(connect(select)(ScreenFree))
