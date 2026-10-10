export const demoRegistry = [
  { kind: 'native', id: 'ghostellar-lifecycle', componentKey: 'ghostellar-lifecycle' },
  { kind: 'native', id: 'physim-mastery', componentKey: 'physim-mastery' }
];

export function getDemo(id) {
  return demoRegistry.find((demo) => demo.id === id);
}

export function isApprovedDemoUrl(value, allowedHosts = []) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && allowedHosts.includes(url.hostname);
  } catch {
    return false;
  }
}
