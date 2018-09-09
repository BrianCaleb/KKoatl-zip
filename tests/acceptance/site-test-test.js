import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, currentURL, click } from '@ember/test-helpers';

module('Acceptance | site test', function(hooks) {
  setupApplicationTest(hooks);

  test('should show nacional as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(),'/nacional', 'should redirect automatically');
  });


  test('should link to international newspapers.', async function (assert) {
    await visit('/');
    await click(".menu-internacional");
    assert.equal(currentURL(), '/internacional', 'should navigate to internacional');
  });
  test('should link to national newspapers.', async function (assert) {
    await visit('/');
    await click(".menu-nacional");
    assert.equal(currentURL(), '/nacional', 'should navigate to nacional');
  });
  test('should link to information about the company.', async function (assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
  test('should link to contact information.', async function (assert) {
    await visit('/');
    await click(".menu-contact");
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });

  test('should list available newspapers.', async function (assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.listing').length, 3,'should list 3 newspapers');
  });

 test('should filter the list of newspapers by city.', async function (assert) {
   });

  test('should show details for a selected newspaper.', async function (assert) {
  });
});
