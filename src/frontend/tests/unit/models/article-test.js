import { module, test } from 'qunit';

import { setupTest } from 'frontend/tests/helpers';

module('Unit | Model | article', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('article', {});
    assert.ok(model);
  });
});
