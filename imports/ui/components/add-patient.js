import React from 'react';
//import {Input, Row, Col} from 'react-bootstrap';

import {insertPatient} from '../../api/documents/methods.js';

class AddPatient extends React.Component {
  handleInsertPatient(event) {
    event.preventDefault();
    var title = this.refs.firstName.value;

    if (title !== '' ) {
      insertPatient.call({
        title,
      }, (error) => {
        if (error) {
          Bert.alert(error.reason, 'danger');
        } else {
          target.value = '';
          Bert.alert('Patient hinzugefügt!', 'success');
        }
      });
    }
  }

  render() {
    return (
      <form ref="patientForm" onSubmit={this.handleInsertPatient.bind(this)}>
        <input
          type="text"
          ref="firstName"
          placeholder="Vorname"/>
        <button type="submit">Patient hinzufügen</button>
      </form>
    );
  }
}

export default AddPatient;
