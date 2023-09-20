import { User } from './user.js';

export enum Facility {
  Breakfast = 'Breakfast',
  AirConditioning = 'Air conditioning',
  LaptopFriendlyWorkspace = 'Laptop friendly workspace',
  BabySeat = 'Baby seat',
  Washer = 'Washer',
  Towels = 'Towels',
  Fridge = 'Fridge',
}

export enum ApartmentType {
  Apartment = 'apartment',
  House = 'house',
  Room = 'room',
  Hotel = 'hotel',
}

export type Advert = {
  title: string;
  description: string;
  date: Date;
  city: string;
  preview: string;
  photos: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rate: number;
  type: ApartmentType;
  roomCount: number;
  guestCount: number;
  cost: number;
  facilities: Facility[];
  author: User;
};
