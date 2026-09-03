import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { INITIAL_BOOKINGS } from './data';
import { Booking } from './models';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private readonly subject: BehaviorSubject<Booking[]>;
  readonly bookings$: Observable<Booking[]>;
  constructor(private storage: StorageService) {
    const saved = storage.get<Booking[]>('bookings', INITIAL_BOOKINGS);
    if (!storage.has('bookings')) storage.set('bookings', saved);
    this.subject = new BehaviorSubject(saved);
    this.bookings$ = this.subject.asObservable();
  }
  get bookings(): Booking[] { return this.subject.value; }
  create(data: Omit<Booking,'id'|'createdAt'|'status'>): Booking {
    const booking: Booking = { ...data, id:`SH-${Math.floor(1000 + Math.random()*8999)}`, createdAt:new Date().toISOString(), status:'upcoming' };
    const next = [booking, ...this.bookings]; this.save(next); return booking;
  }
  update(id: string, patch: Partial<Booking>): void { this.save(this.bookings.map(item => item.id === id ? {...item, ...patch} : item)); }
  cancel(id: string): void { this.update(id, {status:'cancelled'}); }
  private save(bookings: Booking[]): void { this.storage.set('bookings', bookings); this.subject.next(bookings); }
}