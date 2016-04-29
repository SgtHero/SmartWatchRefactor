import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PatientsList from '../containers/patients-list.js';
import { AddPatient } from '../components/add-patient.js';

export const Documents = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Patienten</h4>
      <AddPatient />
      <PatientsList />
    </Col>
  </Row>
);
