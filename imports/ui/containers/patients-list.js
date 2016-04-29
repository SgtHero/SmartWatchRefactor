import { composeWithTracker } from 'react-komposer';
import { Patients } from '../../api/documents/patients.js';
import { PatientsList } from '../components/patients-list.js';
import { Loading } from '../components/loading.js';

const composer = (params, onReady) => {
  const subscription = Meteor.subscribe('patients');
  if (subscription.ready()) {
    const patients = Patients.find().fetch();
    onReady(null, { patients });
  }
};

export default composeWithTracker(composer, Loading)(PatientsList);
