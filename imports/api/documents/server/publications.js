import { Patients } from '../patients';

Meteor.publish('patients', () => Patients.find());
