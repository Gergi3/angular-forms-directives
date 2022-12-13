import { InjectionToken, Provider, StaticProvider } from "@angular/core";

export const MyWindowValueToken = new InjectionToken('MyWindowValue');
export function createMyWindowValueProvider(value: string): StaticProvider {
  return {
    provide: MyWindowValueToken,
    useValue: value
  }
}