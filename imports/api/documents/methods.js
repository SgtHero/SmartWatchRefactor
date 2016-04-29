import { Patients } from './patients';

export const insertPatient = new ValidatedMethod({
  name: 'patients.insert',
  validate: new SimpleSchema({
    title: { type: String },
  }).validator(),
  run(patient) {
    Patients.insert(patient);
  },
});

export const updatePatient = new ValidatedMethod({
  name: 'patients.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.title': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Patients.update(_id, { $set: update });
  },
});

export const removePatient = new ValidatedMethod({
  name: 'patients.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Patients.remove(_id);
  },
});
