import test from 'node:test';
import assert from 'node:assert/strict';

const registryModule = await import('../src/features/demos/registry.mjs');

test('demo registry contains only approved local simulations', () => {
  assert.deepEqual(registryModule.demoRegistry.map((demo) => demo.id), ['ghostellar-lifecycle', 'physim-mastery']);
  assert.equal(registryModule.demoRegistry.every((demo) => demo.kind === 'native'), true);
});

test('demo URL allowlist rejects unsafe or unapproved URLs', () => {
  assert.equal(registryModule.isApprovedDemoUrl('javascript:alert(1)', ['example.com']), false);
  assert.equal(registryModule.isApprovedDemoUrl('https://unapproved.example', ['example.com']), false);
  assert.equal(registryModule.isApprovedDemoUrl('https://example.com/demo', ['example.com']), true);
});
