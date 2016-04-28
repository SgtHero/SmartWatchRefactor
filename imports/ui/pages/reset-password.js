import React from 'react';
import { Row, Col, Alert, Input, Button } from 'react-bootstrap';
import { handleResetPassword } from '../../modules/reset-password';

export class ResetPassword extends React.Component {
  componentDidMount() {
    handleResetPassword({
      component: this,
      token: this.props.params.token,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Row>
      <Col xs={ 12 } sm={ 6 } md={ 4 }>
        <h4 className="page-header">Reset Password</h4>
        <Alert bsStyle="info">
          Um ein Passwort zurückzusetzen, einfach ein neues hier eintragen und abschicken
        </Alert>
        <form ref="resetPassword" className="reset-password" onSubmit={ this.handleSubmit }>
          <Input
            label="New Password"
            type="password"
            ref="newPassword"
            name="newPassword"
            placeholder="Neues Passwort"
          />
          <Input
            label="Repeat New Password"
            type="password"
            ref="repeatNewPassword"
            name="repeatNewPassword"
            placeholder="Wiederhole neues Passwort"
          />
          <Button type="submit" bsStyle="success">Passwort zurücksetzen &amp; Anmelden</Button>
        </form>
      </Col>
    </Row>;
  }
}

ResetPassword.propTypes = {
  params: React.PropTypes.object,
};
