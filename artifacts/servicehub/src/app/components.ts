import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Booking, Provider, Service } from './models';

@Component({
  selector:'app-service-card', standalone:true, imports:[CommonModule, RouterLink],
  template:`<article class="card service-card" [attr.data-testid]="'card-service-'+service.id">
    <div class="service-symbol">{{ service.icon }}</div><div class="eyebrow">{{ service.category }}</div>
    <h3>{{ service.name }}</h3><p>{{ service.description }}</p>
    <div class="service-bottom"><div class="price"><small>starting at</small>&#36;{{ service.basePrice }}</div><a class="btn btn-quiet btn-small" [routerLink]="['/book-service']" [queryParams]="{service:service.id}">Book now</a></div>
  </article>`
})
export class ServiceCardComponent { @Input({required:true}) service!: Service; }

@Component({
  selector:'app-provider-card', standalone:true, imports:[CommonModule, RouterLink],
  template:`<article class="card provider-card" [attr.data-testid]="'card-provider-'+provider.id">
    <div class="provider-top"><div class="provider-identity"><div class="provider-avatar">{{ provider.avatar }}</div><div><h3>{{ provider.name }}</h3><div class="specialty">{{ provider.specialty }}</div></div></div><div class="rating"><b>★</b> {{ provider.rating }}</div></div>
    <div class="provider-meta"><div>Experience<strong>{{ provider.experience }} years</strong></div><div>From<strong>&#36;{{ provider.price }}/hr</strong></div><div>Area<strong>{{ provider.location.split(' · ')[0] }}</strong></div></div>
    <div class="card-actions"><a class="btn btn-outline btn-small" [routerLink]="['/services',provider.id]">View profile</a><a class="btn btn-primary btn-small" [routerLink]="['/book-service']" [queryParams]="{provider:provider.id}">Book</a></div>
  </article>`
})
export class ProviderCardComponent { @Input({required:true}) provider!: Provider; }

@Component({
  selector:'app-booking-card', standalone:true, imports:[CommonModule],
  template:`<article class="card booking-card" [attr.data-testid]="'card-booking-'+booking.id">
    <div class="booking-info"><div class="booking-date"><span>{{ booking.date | date:'MMM' }}</span><strong>{{ booking.date | date:'d' }}</strong></div><div><h3>{{ serviceName }}</h3><p>with {{ providerName }} · {{ booking.time }}</p><p>{{ booking.address }}</p></div></div>
    <div><span class="status" [class.status-upcoming]="booking.status==='upcoming'" [class.status-completed]="booking.status==='completed'" [class.status-cancelled]="booking.status==='cancelled'">{{ booking.status }}</span><div class="booking-actions"><ng-content></ng-content></div></div>
  </article>`
})
export class BookingCardComponent { @Input({required:true}) booking!: Booking; @Input() serviceName = ''; @Input() providerName = ''; }

@Component({
  selector:'app-summary-card', standalone:true,
  template:`<article class="card summary-card" [attr.data-testid]="'card-summary-'+label"><div class="eyebrow">{{ eyebrow }}</div><span class="metric">{{ value }}</span><p>{{ label }}</p></article>`
})
export class SummaryCardComponent { @Input() eyebrow = 'OVERVIEW'; @Input() value: string | number = ''; @Input() label = ''; }