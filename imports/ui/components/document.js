import React from 'react';
import { Row, Col, ListGroupItem, Input, Button } from 'react-bootstrap';
import { updateDocument, removeDocument } from '../../api/documents/methods.js';

const handleUpdateDocument = (documentId, event) => {
  const title = event.target.value.trim();
  if (title !== '' && event.keyCode === 13) {
    updateDocument.call({
      _id: documentId,
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

const handleRemoveDocument = (documentId, event) => {
  event.preventDefault();
  if (confirm('Sind Sie sicher? Die Aktion ist permanent')) {
    removeDocument.call({
      _id: documentId,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Patient gelöscht!', 'success');
      }
    });
  }
};

export const Document = ({ document }) => (
  <ListGroupItem key={ document._id }>
    <Row>
      <Col xs={ 8 } sm={ 10 }>
        <Input
          type="text"
          standalone
          defaultValue={ document.title }
          onKeyUp={ handleUpdateDocument.bind(this, document._id) }
        />
      </Col>
      <Col xs={ 4 } sm={ 2 }>
        <Button
          bsStyle="danger"
          className="btn-block"
          onClick={ handleRemoveDocument.bind(this, document._id) }>
          Entfernen
        </Button>
      </Col>
    </Row>
  </ListGroupItem>
);
