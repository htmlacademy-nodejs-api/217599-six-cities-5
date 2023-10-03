import { AdvertGenerator } from './advert-generator.interface.js';
import { ApartmentType, Facility, MockServerData, UserType } from '../../types/index.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../helpers/index.js';
import { Symbols } from '../../constants.js';

const PredefinedValues = {
  BOOLEAN: {
    TRUE: 1,
    FALSE: 0,
  },
  RATE: {
    MIN: 1,
    MAX: 5,
  },
  ROOM: {
    MIN: 1,
    MAX: 4,
  },
  GUEST: {
    MIN: 1,
    MAX: 10,
  },
  PRICE: {
    MIN: 1000,
    MAX: 100000,
  },
};

export class TSVAdvertGenerator implements AdvertGenerator {
  constructor(private readonly mockData: MockServerData) {}

  generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const date = getRandomItem<Date>(this.mockData.dates);
    const city = getRandomItem<string>(this.mockData.cities);
    const preview = getRandomItem<string>(this.mockData.previews);
    const photos = getRandomItems<string>(this.mockData.photos).join(';');
    const isPremium = Boolean(
      generateRandomValue(PredefinedValues.BOOLEAN.FALSE, PredefinedValues.BOOLEAN.TRUE),
    );
    const isFavorite = Boolean(
      generateRandomValue(PredefinedValues.BOOLEAN.FALSE, PredefinedValues.BOOLEAN.TRUE),
    );
    const rate = generateRandomValue(PredefinedValues.RATE.MIN, PredefinedValues.RATE.MAX);
    const type = getRandomItem<ApartmentType>(this.mockData.types);
    const roomCount = generateRandomValue(PredefinedValues.ROOM.MIN, PredefinedValues.ROOM.MAX);
    const guestCount = generateRandomValue(PredefinedValues.GUEST.MIN, PredefinedValues.GUEST.MAX);
    const cost = generateRandomValue(PredefinedValues.PRICE.MIN, PredefinedValues.PRICE.MAX);
    const facilities = getRandomItems<Facility>(this.mockData.facilities).join(';');
    const authorName = getRandomItem<string>(this.mockData.author.names);
    const authorEmail = getRandomItem<string>(this.mockData.author.emails);
    const authorAvatar = getRandomItem<string>(this.mockData.author.avatars);
    const authorPassword = getRandomItem<string>(this.mockData.author.passwords);
    const authorType = getRandomItem<UserType>(this.mockData.author.types);

    return [
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
    ].join(Symbols.TAB);
  }
}
