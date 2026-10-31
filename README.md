# ServiceHub – Service Booking Platform

ServiceHub is a web-based service booking platform designed to help users discover service providers, explore available services, schedule appointments, and manage their bookings through a simple and responsive interface.

## Features

- **Service Discovery:** Browse available services and service providers.
- **Search and Filtering:** Search for services and filter available options.
- **Appointment Scheduling:** Schedule appointments based on service requirements.
- **Booking Management:** View and manage service bookings.
- **Responsive Interface:** User-friendly interface designed for different screen sizes.
- **Reusable Components:** Modular components for maintainable frontend development.
- **Client-Side Storage:** Uses LocalStorage for storing frontend application data.

## Technology Stack

**Frontend**
- Angular 19
- TypeScript
- HTML
- CSS
- Angular Router
- Angular Reactive Forms

**Backend**
- Node.js
- Express.js
- TypeScript

**Database and Data Tools**
- Drizzle ORM
- PostgreSQL-related database workspace package

**Development Tools**
- pnpm
- Git
- GitHub
- Vite
- Visual Studio Code

## Project Structure

```text
ServiceHub-Booking-Platform/
│
├── artifacts/
│   ├── servicehub/       # Angular frontend application
│   ├── api-server/      # Express backend application
│   └── mockup-sandbox/  # UI mockup workspace
│
├── lib/
│   ├── api-client-react/
│   ├── api-spec/
│   ├── api-zod/
│   └── db/
│
├── scripts/
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have installed:
- Node.js
- pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Deepthi-priya2005/service-booking-hub.git
```

2. Navigate to the project folder:

```bash
cd service-booking-hub
```

3. Install dependencies:

```bash
pnpm install
```

### Frontend Development

Navigate to the Angular application:

```bash
cd artifacts/servicehub
```

Run the development server using the configured Angular development script:

```bash
pnpm dev
```

## Learning Outcomes

- Developed practical experience with Angular and TypeScript.
- Worked with reusable components and frontend application structure.
- Practiced routing and reactive form handling.
- Implemented search, filtering, and booking-related user interactions.
- Gained experience working with a multi-package project structure.

## Future Enhancements

- Complete backend integration with the frontend.
- Add user authentication and authorization.
- Integrate persistent database storage.
- Add booking confirmation and notification features.
- Deploy the application for public access.

## Author

**Attili Deepthi Priya**

GitHub: [Deepthi-priya2005](https://github.com/Deepthi-priya2005)

## Project Repository

[ServiceHub – Booking Platform](https://github.com/Deepthi-priya2005/service-booking-hub)
