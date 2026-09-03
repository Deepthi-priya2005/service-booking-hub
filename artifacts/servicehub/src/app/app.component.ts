import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StorageService } from './storage.service';

@Component({
  selector:'app-root',
  standalone:true,
  imports:[CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template:`<div class="shell"><header class="topbar"><a routerLink="/" class="brand" data-testid="link-home"><span class="brand-mark">S</span><span>servicehub</span></a><button class="mobile-menu" (click)="menuOpen=!menuOpen" aria-label="Toggle navigation" data-testid="button-menu">Menu</button><nav class="main-nav" [class.open]="menuOpen"><a routerLink="/dashboard" routerLinkActive="active" data-testid="link-dashboard">Dashboard</a><a routerLink="/services" routerLinkActive="active" data-testid="link-services">Find a pro</a><a routerLink="/bookings" routerLinkActive="active" data-testid="link-bookings">Bookings</a><a routerLink="/profile" routerLinkActive="active" data-testid="link-profile">Profile</a></nav><div class="nav-right"><a class="btn btn-primary btn-small" routerLink="/book-service" data-testid="button-book-service">Book a service <span>→</span></a><a class="avatar" routerLink="/profile" data-testid="link-avatar">{{ initials }}</a></div></header><router-outlet></router-outlet></div>`
})
export class AppComponent {
  menuOpen=false; initials='AM';
  constructor(private storage:StorageService){const user=this.storage.get<{name:string}>('user',{name:'Alex Morgan'});this.initials=this.getInitials(user.name);}
  private getInitials(name:string):string{return name.split(' ').map(part=>part[0]).join('').slice(0,2).toUpperCase();}
}