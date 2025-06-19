// src/types/mediterraneanBeach.ts
export interface MediterraneanBeach {
  id: number;
  name: string;
  hebrewName: string;
  description: string;
  images: (string | { src: string })[];
  type: BeachType[];
  location: {
    city: string;
    latitude: number;
    longitude: number;
    address: string;
  };
  hours: {
    opening: string;
    closing: string;
    notes: string;
  };
  entranceFee: string;
  facilities: BeachFacility[];
  waterQuality: {
    rating: number;
    description: string;
  };
  sand: {
    type: string;
    color: string;
    quality: string;
  };
  waves: {
    size: WaveSize;
    surfingConditions: string;
  };
  accessibility: {
    wheelchairAccess: boolean;
    parking: string;
    publicTransport: string;
  };
  crowdLevel: {
    lowSeason: string;
    highSeason: string;
  };
  nearbyAttractions: string[];
  bestTimeToVisit: string;
}

export enum BeachType {
  CITY = "Urbaine",
  NATURE = "Nature",
  FAMILY = "Familiale",
  SPORTS = "Sports",
  DOG_FRIENDLY = "Chiens autorisés",
  PUBLIC = "Publique",
  RELIGIOUS = "Religieuse"
}

export interface MediterraneanReligiousBeach extends Omit<MediterraneanBeach, 'hours'> {
  separationSchedule: {
    men: string;
    women: string;
    notes: string;
  };
  dressCode: string;
  specialFacilities: string[];
  specialRules: string[];
}

export interface TransportOption {
  type: string;
  details: string;
  price: string;
  frequency: string;
}

export interface TransportationCity {
  id: number;
  toCity: string;
  options: TransportOption[];
}

export interface SafetyTip {
  id: number;
  title: string;
  description: string;
}

export interface PracticalTip {
  id: number;
  title: string;
  description: string;
}

export enum BeachFacility {
  SHOWERS = "Douches",
  CHANGING_ROOMS = "Vestiaires",
  TOILETS = "Toilettes",
  PARKING = "Parking",
  RESTAURANT = "Restaurant",
  RESTAURANTS = "Restaurants",
  LIFEGUARD = "Maître-nageur",
  SURF_RENTAL = "Location surf",
  VOLLEYBALL = "Volley-ball",
  BEACH_VOLLEYBALL = "Volley-ball",
  WHEELCHAIR_ACCESS = "Accès handicapés",
  KIOSK = "Kiosque",
  UMBRELLAS = "Parasols",
  PARASOLS = "Parasols",
  CHAIRS = "Chaises longues",
  BEACH_CHAIRS = "Chaises longues",
  PLAYGROUND = "Aire de jeux",
  PROMENADE = "Promenade",
  FIRST_AID = "Premiers secours",
  WIFI = "Wi-Fi",
  BAR = "Bar",
  WATER_SPORTS = "Sports nautiques",
  MARINA = "Marina"
}

export enum WaveSize {
  SMALL = "Petites",
  MEDIUM = "Moyennes",
  LARGE = "Grandes",
  VARIABLE = "Variables"
}