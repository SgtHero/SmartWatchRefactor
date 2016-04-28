import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Input, Button } from 'react-bootstrap';
import { handleSignup } from '../../modules/signup';

export class Signup extends React.Component {
  componentDidMount() {
    handleSignup({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Row>
      <Col xs={ 12 } sm={ 6 } md={ 4 }>
        <h4 className="page-header">Registrieren</h4>
        <form ref="signup" className="signup" onSubmit={ this.handleSubmit }>
          <Row>
            <Col xs={ 6 } sm={ 6 }>
              <Input
                type="text"
                label="Vorname"
                ref="firstName"
                name="firstName"
                placeholder="Vorname"
              />
            </Col>
            <Col xs={ 6 } sm={ 6 }>
              <Input
                type="text"
                label="Nachname"
                ref="lastName"
                name="lastName"
                placeholder="Nachname"
              />
            </Col>
          </Row>
          <Input
            type="email"
            label="Email Addresse"
            ref="emailAddress"
            name="emailAddress"
            placeholder="Email Addresse"
          />
          <Input
            type="password"
            label="Passwort"
            ref="password"
            name="password"
            placeholder="Passwort"
          />
          <Button type="submit" bsStyle="success">Registrieren</Button>
        </form>
        <p>Account bereits erstellt? <Link to="/login">Anmelden</Link>.</p>
      </Col>
    </Row>;
  }
}
