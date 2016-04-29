import React from 'react';
import { Input } from 'react-bootstrap';
import { insertPatient } from '../../api/documents/methods.js';

const handleInsertPatient = (event) => {
  const target = event.target;
  const title = target.value.trim();

  if (title !== '' && event.keyCode === 13) {
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
};

export const AddPatient = () => (
  <Input
    type="text"
    onKeyUp={ handleInsertPatient }
    placeholder="Patient eintragen und mit Enter bestätigen"
  />
);
