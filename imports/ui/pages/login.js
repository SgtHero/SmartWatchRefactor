import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Input, Button } from 'react-bootstrap';
import { handleLogin } from '../../modules/login';

export class Login extends React.Component {
  componentDidMount() {
    handleLogin({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Row>
      <Col xs={ 12 } sm={ 6 } md={ 4 }>
        <h4 className="page-header">Anmelden</h4>
        <form ref="login" className="login" onSubmit={ this.handleSubmit }>
          <Input
            type="email"
            label="Email Addresse"
            ref="emailAddress"
            name="emailAddress"
            placeholder="Email Addresse"
          />
          <div className="form-group">
            <label htmlFor="password">
              <span className="pull-left">Passwort</span>
              <Link className="pull-right" to="/recover-password">Passwort vergessen?</Link>
            </label>
            <input
              type="password"
              className="form-control"
              ref="password"
              name="password"
              placeholder="Passwort"
            />
          </div>
          <Button type="submit" bsStyle="success">Anmelden</Button>
        </form>
      </Col>
    </Row>;
  }
}
