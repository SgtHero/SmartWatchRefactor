import React from 'react';
import { Row, Col, ListGroupItem, Input, Button } from 'react-bootstrap';
import { updateDocument, removeDocument } from '../../api/documents/methods.js';

const handleUpdateDocument = (patientId, event) => {
  const title = event.target.value.trim();
  if (title !== '' && event.keyCode === 13) {
    updateDocument.call({
      _id: patientId,
      update: { title },
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Patient aktualisiert!', 'success');
      }
    });
  }
};

const handleRemoveDocument = (patientId, event) => {
  event.preventDefault();
  if (confirm('Sind Sie sicher? Die Aktion ist permanent')) {
    removeDocument.call({
      _id: patientId,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Patient gelöscht!', 'success');
      }
    });
  }
};

export const Patient = ({ patient }) => (
  <ListGroupItem key={ patient._id }>
    <Row>
      <Col xs={ 8 } sm={ 10 }>
        <Input
          type="text"
          standalone
          defaultValue={ patient.title }
          onKeyUp={ handleUpdateDocument.bind(this, patient._id) }
        />
      </Col>
      <Col xs={ 4 } sm={ 2 }>
        <Button
          bsStyle="danger"
          className="btn-block"
          onClick={ handleRemoveDocument.bind(this, patient._id) }>
          Entfernen
        </Button>
      </Col>
    </Row>
  </ListGroupItem>
);
