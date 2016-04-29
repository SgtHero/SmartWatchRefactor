/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Patients } from './patients.js';
import { insertPatient, updatePatient, removePatient } from './methods.js';

describe('Patients methods', function () {
  beforeEach(function () {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a document into the Patients collection', function () {
    insertPatient.call({ title: 'You can\'t arrest me, I\'m the Cake Boss!' });
    const getDocument = Patients.findOne({ title: 'You can\'t arrest me, I\'m the Cake Boss!' });
    assert.equal(getDocument.title, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('updates a document in the Patients collection', function () {
    const { _id } = Factory.create('document');

    updatePatient.call({
      _id,
      update: {
        title: 'You can\'t arrest me, I\'m the Cake Boss!',
      },
    });

    const getDocument = Patients.findOne(_id);
    assert.equal(getDocument.title, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('removes a document from the Patients collection', function () {
    const { _id } = Factory.create('document');
    removePatient.call({ _id });
    const getDocument = Patients.findOne(_id);
    assert.equal(getDocument, undefined);
  });
});
