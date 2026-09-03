import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  get<T>(key: string, fallback: T): T {
    try { const value = localStorage.getItem(`servicehub_${key}`); return value ? JSON.parse(value) as T : fallback; }
    catch { return fallback; }
  }
  set<T>(key: string, value: T): void { localStorage.setItem(`servicehub_${key}`, JSON.stringify(value)); }
  has(key: string): boolean { return localStorage.getItem(`servicehub_${key}`) !== null; }
}