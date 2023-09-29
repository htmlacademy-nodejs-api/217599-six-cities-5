import { Advert, ApartmentType, Facility, UserType } from '../types/index.js';
import { Symbols } from '../constants.js';

export const createAdvert = (advertRawData: string): Advert[] =>
  advertRawData
    .split(Symbols.NEW_LINE)
    .filter((row) => row.trim().length > 0)
    .map((line) => line.split(Symbols.TAB))
    .map(
      ([
        title,
        description,
        date,
        city,
        preview,
        photos,
        isPremium,
        isFavorite,
        rate,
        type,
        roomCount,
        guestCount,
        cost,
        facilities,
        authorName,
        authorEmail,
        authorAvatar,
        authorPassword,
        authorType,
      ]) => ({
        title,
        description,
        date: new Date(date),
        city,
        preview,
        photos: photos.split(';').map((photo) => photo),
        isPremium: isPremium === 'true',
        isFavorite: isFavorite === 'true',
        rate: parseInt(rate, 10),
        type: type as ApartmentType,
        roomCount: parseInt(roomCount, 10),
        guestCount: parseInt(guestCount, 10),
        cost: parseInt(cost, 10),
        facilities: facilities.split(';').map((facility) => facility) as Facility[],
        author: {
          name: authorName,
          email: authorEmail,
          avatar: authorAvatar,
          password: authorPassword,
          type: authorType as UserType,
        },
      }),
    );
