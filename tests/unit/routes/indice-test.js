import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | indice', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:indice');
    assert.ok(route);
  });
});
