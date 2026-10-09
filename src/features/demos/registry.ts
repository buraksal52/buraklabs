import { demoRegistry as rawRegistry, getDemo as rawGetDemo, isApprovedDemoUrl as rawIsApprovedDemoUrl } from './registry.mjs';

export type DemoDefinition =
  | { kind: 'native'; id: string; componentKey: string }
  | { kind: 'embedded'; id: string; url: string; title: string }
  | { kind: 'external'; id: string; url: string };

/**
 * Deliberately empty until owner-approved demo URLs/components are supplied.
 * No untrusted URL is accepted by default.
 */
export const demoRegistry: readonly DemoDefinition[] = rawRegistry;

export function getDemo(id: string): DemoDefinition | undefined {
  return rawGetDemo(id) as DemoDefinition | undefined;
}

export function isApprovedDemoUrl(value: string, allowedHosts: readonly string[] = []): boolean {
  return rawIsApprovedDemoUrl(value, [...allowedHosts]);
}
