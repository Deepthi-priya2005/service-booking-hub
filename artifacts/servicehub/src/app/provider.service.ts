import { Injectable } from '@angular/core';
import { PROVIDERS } from './data';
import { Provider } from './models';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class ProviderService {
  readonly providers: Provider[];
  constructor(storage: StorageService) {
    this.providers = storage.get<Provider[]>('providers', PROVIDERS);
    if (!storage.has('providers')) storage.set('providers', this.providers);
  }
  getById(id: string): Provider | undefined { return this.providers.find(provider => provider.id === id); }
}