import React from 'react';
import { Input } from 'react-bootstrap';
import { insertDocument } from '../../api/documents/methods.js';

const handleInsertDocument = (event) => {
  const target = event.target;
  const title = target.value.trim();

  if (title !== '' && event.keyCode === 13) {
    insertDocument.call({
      title,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        target.value = '';
        Bert.alert('Patient added!', 'success');
      }
    });
  }
};

export const AddPatient = () => (
  <Input
    type="text"
    onKeyUp={ handleInsertDocument }
    placeholder="Patient eintragen und mit Enter bestätigen"
  />
);
