import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Patient } from './patient.js';

export const PatientsList = ({ patients }) => (
  patients.length > 0 ? <ListGroup className="documents-list">
    {patients.map((pat) => (
      <Patient key={ pat._id } patient={ pat } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">Keine Patienten vorhanden</Alert>
);

PatientsList.propTypes = {
  patients: React.PropTypes.array,
};
