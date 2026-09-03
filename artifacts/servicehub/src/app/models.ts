export interface Service {
  id: string; name: string; category: string; description: string; icon: string;
  basePrice: number; duration: number;
}
export interface Review {
  id: string; providerId: string; author: string; rating: number; comment: string; date: string;
}
export interface Provider {
  id: string; name: string; serviceIds: string[]; specialty: string; rating: number;
  reviewCount: number; experience: number; price: number; location: string; avatar: string;
  bio: string; availableSlots: string[]; reviews: Review[];
}
export type BookingStatus = 'upcoming' | 'completed' | 'cancelled';
export interface Booking {
  id: string; customerName: string; phone: string; serviceId: string; providerId: string;
  date: string; time: string; address: string; notes: string; status: BookingStatus; createdAt: string;
}
export interface User { name: string; email: string; phone: string; address: string; avatar: string; }