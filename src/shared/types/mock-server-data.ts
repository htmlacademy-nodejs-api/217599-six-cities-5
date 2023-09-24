import { ApartmentType, Facility } from './advert.js';
import { UserType } from './user.js';

export type Author = {
  names: string[];
  emails: string[];
  avatars: string[];
  passwords: string[];
  types: UserType[];
};

export type MockServerData = {
  titles: string[];
  descriptions: string[];
  dates: Date[];
  cities: string[];
  previews: string[];
  photos: string[];
  types: ApartmentType[];
  facilities: Facility[];
  author: Author;
};
