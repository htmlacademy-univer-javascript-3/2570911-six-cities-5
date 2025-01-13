import { CityType } from "../types/city-type";

export const CITIES = [
    {
        name : 'Paris'
    },
     {
        name : 'Cologne'
    },
      {
        name: 'Brussels'
      },
      {
        name: 'Amsterdam'
      },
      {
        name: 'Hamburg'
      },
      {
        name: 'Dusseldorf'
      },
];

export const CITIESFULLINFO : Record<string, CityType> = {
    'Paris': {
            name: 'Paris',
            id: 1,
            location: { latitude: 48.856663, longitude: 2.351556},
            },
    'Cologne': {
            name: 'Cologne',
            id: 2,
            location: { latitude: 50.930779, longitude: 6.938399 },
            },
    'Brussels': {
            name: 'Brussels',
            id: 3,
            location: { latitude: 50.846697, longitude: 4.352544 },
            },
    'Amsterdam': {
            name: 'Amsterdam',
            id: 4,
            location: { latitude: 52.373036, longitude: 4.892413 },
            },
    'Hamburg': {
            name: 'Hamburg',
            id: 5,
            location: { latitude: 53.550688, longitude: 9.992895 },
            },
    'Dusseldorf': {
            name: 'Dusseldorf',
            id: 6,
            location: { latitude: 51.230569, longitude: 6.787428 },
            }
}