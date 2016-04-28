import React from 'react';
import { Alert } from 'react-bootstrap';

export const NotFound = () => (
  <Alert bsStyle="danger">
    <p><strong>Fehler [404]</strong>: { window.location.pathname } existiert nicht.</p>
  </Alert>
);
