import { Mongo } from 'meteor/mongo';
import faker from 'faker';

export const Patients = new Mongo.Collection('Patients');

Patients.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the document.',
  },
});

Patients.attachSchema(Patients.schema);

Factory.define('document', Patients, {
  title: () => faker.hacker.phrase(),
});
