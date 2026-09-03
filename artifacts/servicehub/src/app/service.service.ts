import { Injectable } from '@angular/core';
import { SERVICES } from './data';
import { Service } from './models';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class ServiceService {
  readonly services: Service[];
  constructor(storage: StorageService) {
    this.services = storage.get<Service[]>('services', SERVICES);
    if (!storage.has('services')) storage.set('services', this.services);
  }
  getById(id: string): Service | undefined { return this.services.find(service => service.id === id); }
}