// Types pour les plages de la Mer Morte

export interface DeadSeaBeach {
  id: number
  name: string
  hebrewName: string
  description: string
  images: string[]
  location: {
    latitude: number
    longitude: number
    address: string
  }
  hours: {
    opening: string
    closing: string
    notes?: string
  }
  entranceFee: string
  facilities: BeachFacility[]
  salinity: {
    level: string
    properties: string
  }
  accessibility: {
    wheelchairAccess: boolean
    parking: string
    publicTransport: string
  }
  bestTimeToVisit: string
  type: BeachType
}

export enum BeachType {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}

export enum BeachFacility {
  SHOWERS = 'Douches',
  CHANGING_ROOMS = 'Vestiaires',
  RESTAURANTS = 'Restaurants',
  LIFEGUARD = 'Surveillance',
  SPA = 'Spa',
  SHOPS = 'Boutiques',
  FIRST_AID = 'Premiers secours',
  WIFI = 'WiFi',
  BAR = 'Bar',
  PARKING = 'Parking'
}

export interface ReligiousBeach {
  id: number
  name: string
  hebrewName: string
  description: string
  images: string[]
  location: {
    latitude: number
    longitude: number
    address: string
  }
  separationSchedule: {
    men: string
    women: string
    notes?: string
  }
  dressCode: string
  specialFacilities: string[]
  specialRules: string[]
  facilities: BeachFacility[]
  entranceFee: string
  accessibility: {
    wheelchairAccess: boolean
    parking: string
    publicTransport: string
  }
  type: BeachType
}

export interface SafetyTip {
  id: number
  icon: string
  title: string
  description: string
  severity: 'critical' | 'high' | 'medium' | 'low'
}

export interface HealthBenefit {
  icon: string
  title: string
  description: string
  tips: string[]
}

export interface TransportOption {
  type: string
  icon: string
  duration: string
  cost: string
  advantages: string[]
  route: string
  tips: string
  color: string
}

export interface EmergencyContact {
  service: string
  number: string
  description: string
}

export interface ParkingInfo {
  location: string
  cost: string
  capacity: string
  notes: string
}

export interface BeachFilters {
  searchTerm: string
  typeFilter: BeachType | 'ALL'
  facilityFilter: BeachFacility | 'ALL'
  wheelchairFilter: boolean
}