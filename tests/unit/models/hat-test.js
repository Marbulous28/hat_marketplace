import { moduleForModel, test } from 'ember-qunit';

moduleForModel('hat', 'Unit | Model | hat', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
