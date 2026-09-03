# ServiceHub

ServiceHub is a self-contained Angular service booking marketplace for people who want a trusted local professional without making a phone call.

## Features

- Home discovery with category shortcuts, local provider recommendations, and service search
- Searchable, filterable, sortable service and provider directory
- Provider profiles with availability, pricing, experience, and reviews
- Reactive booking form with validation and instant confirmation IDs
- Upcoming, completed, and cancelled bookings with cancellation and rescheduling
- Dashboard metrics, next appointment, and recent activity
- Editable profile stored locally on the device
- Seed data on first launch without overwriting existing LocalStorage data

## Technology

Angular, TypeScript, HTML, CSS, Angular Router, Reactive Forms, dependency-injected Angular services, RxJS, and LocalStorage. The Vite adapter keeps the project compatible with the artifact workflow and writes production output to `dist/public`.

## Angular concepts

Standalone components keep the UI modular; `provideRouter` supplies route-level pages; `ServiceService`, `ProviderService`, `BookingService`, and `StorageService` separate data concerns through dependency injection; `BehaviorSubject` updates booking views after mutations; and Reactive Forms provide typed validation and controlled submission.