import { readFileSync } from 'node:fs';

import { FileReader } from './file-reader.interface.js';
import { Advert, ApartmentType, Facility } from 'src/shared/types/advert.js';
import { UserType } from 'src/shared/types/user.js';
import { Symbols } from '../../constants.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(private readonly filename: string) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, 'utf-8');
  }

  public toArray(): Advert[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
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
  }
}
