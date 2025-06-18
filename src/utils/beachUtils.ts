import { DeadSeaBeach, BeachType, BeachFacility, BeachFilters } from '@/types/deadSeaBeach'

// Filtrer les plages selon les critères
export const filterBeaches = (beaches: DeadSeaBeach[], filters: BeachFilters): DeadSeaBeach[] => {
  return beaches.filter(beach => {
    // Filtre de recherche
    const searchMatch = beach.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) || 
                        beach.description.toLowerCase().includes(filters.searchTerm.toLowerCase())
    
    // Filtre de type
    const typeMatch = filters.typeFilter === 'ALL' || beach.type === filters.typeFilter
    
    // Filtre d'installation
    const facilityMatch = filters.facilityFilter === 'ALL' || beach.facilities.includes(filters.facilityFilter)
    
    // Filtre accessibilité
    const wheelchairMatch = !filters.wheelchairFilter || beach.accessibility.wheelchairAccess
    
    return searchMatch && typeMatch && facilityMatch && wheelchairMatch
  })
}

// Obtenir toutes les installations uniques
export const getAllFacilities = (beaches: DeadSeaBeach[]): BeachFacility[] => {
  const facilitiesSet = new Set<BeachFacility>()
  beaches.forEach(beach => {
    beach.facilities.forEach(facility => facilitiesSet.add(facility))
  })
  return Array.from(facilitiesSet)
}

// Obtenir la couleur de bordure selon le type de plage
export const getBorderColor = (type: BeachType): string => {
  return type === BeachType.PUBLIC ? 'border-teal-500' : 'border-blue-500'
}

// Obtenir la couleur de fond du badge selon le type
export const getTypeColor = (type: BeachType): string => {
  return type === BeachType.PUBLIC ? 'bg-teal-500' : 'bg-blue-500'
}

// Obtenir les couleurs selon la sévérité des conseils de sécurité
export const getSeverityColor = (severity: string): string => {
  switch (severity) {
    case 'critical': return 'bg-red-500'
    case 'high': return 'bg-orange-500'
    case 'medium': return 'bg-yellow-500'
    default: return 'bg-blue-500'
  }
}

export const getSeverityBorder = (severity: string): string => {
  switch (severity) {
    case 'critical': return 'border-red-200 bg-red-50'
    case 'high': return 'border-orange-200 bg-orange-50'
    case 'medium': return 'border-yellow-200 bg-yellow-50'
    default: return 'border-blue-200 bg-blue-50'
  }
}

// Ouvrir Google Maps avec les coordonnées
export const openGoogleMaps = (latitude: number, longitude: number): void => {
  const url = `https://www.google.com/maps?q=${latitude},${longitude}`
  window.open(url, '_blank')
}

// Formater les horaires
export const formatHours = (opening: string, closing: string): string => {
  return `${opening} - ${closing}`
}

// Vérifier si une plage est ouverte maintenant
export const isBeachOpen = (opening: string, closing: string): boolean => {
  const now = new Date()
  const currentTime = now.getHours() * 100 + now.getMinutes()
  
  const openTime = parseInt(opening.replace(':', ''))
  const closeTime = parseInt(closing.replace(':', ''))
  
  return currentTime >= openTime && currentTime <= closeTime
}

// Calculer la distance entre deux points géographiques
export const calculateDistance = (
  lat1: number, 
  lon1: number, 
  lat2: number, 
  lon2: number
): number => {
  const R = 6371 // Rayon de la Terre en km
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  const d = R * c // Distance en km
  return Math.round(d * 10) / 10 // Arrondir à 1 décimale
}

const deg2rad = (deg: number): number => {
  return deg * (Math.PI/180)
}

// Trier les plages par distance depuis un point
export const sortBeachesByDistance = (
  beaches: DeadSeaBeach[], 
  userLat: number, 
  userLon: number
): DeadSeaBeach[] => {
  return [...beaches].sort((a, b) => {
    const distanceA = calculateDistance(userLat, userLon, a.location.latitude, a.location.longitude)
    const distanceB = calculateDistance(userLat, userLon, b.location.latitude, b.location.longitude)
    return distanceA - distanceB
  })
}

// Obtenir les plages recommandées selon les critères
export const getRecommendedBeaches = (beaches: DeadSeaBeach[]): DeadSeaBeach[] => {
  // Critères : plages avec spa, accessibles handicapés, bonnes notes
  return beaches.filter(beach => 
    beach.facilities.includes(BeachFacility.SPA) || 
    beach.accessibility.wheelchairAccess ||
    beach.entranceFee === "Gratuit"
  ).slice(0, 3) // Top 3
}

// Obtenir les statistiques des plages
export const getBeachStats = (beaches: DeadSeaBeach[]) => {
  const totalBeaches = beaches.length
  const publicBeaches = beaches.filter(b => b.type === BeachType.PUBLIC).length
  const privateBeaches = beaches.filter(b => b.type === BeachType.PRIVATE).length
  const accessibleBeaches = beaches.filter(b => b.accessibility.wheelchairAccess).length
  const freeBeaches = beaches.filter(b => b.entranceFee === "Gratuit").length
  const spaBeaches = beaches.filter(b => b.facilities.includes(BeachFacility.SPA)).length

  return {
    total: totalBeaches,
    public: publicBeaches,
    private: privateBeaches,
    accessible: accessibleBeaches,
    free: freeBeaches,
    withSpa: spaBeaches
  }
}

// Valider les données d'une plage
export const validateBeach = (beach: DeadSeaBeach): boolean => {
  return !!(
    beach.id &&
    beach.name &&
    beach.description &&
    beach.images.length > 0 &&
    beach.location.latitude &&
    beach.location.longitude &&
    beach.entranceFee &&
    beach.facilities.length > 0
  )
}

// Convertir le prix en nombre pour comparaison
export const extractPrice = (priceString: string): number => {
  if (priceString === "Gratuit") return 0
  const match = priceString.match(/(\d+)/)
  return match ? parseInt(match[1]) : 999
}

// Trier les plages par prix
export const sortBeachesByPrice = (beaches: DeadSeaBeach[], ascending: boolean = true): DeadSeaBeach[] => {
  return [...beaches].sort((a, b) => {
    const priceA = extractPrice(a.entranceFee)
    const priceB = extractPrice(b.entranceFee)
    return ascending ? priceA - priceB : priceB - priceA
  })
}

// Recherche avancée dans les plages
export const searchBeaches = (beaches: DeadSeaBeach[], query: string): DeadSeaBeach[] => {
  const searchTerms = query.toLowerCase().split(' ')
  
  return beaches.filter(beach => {
    const searchText = `
      ${beach.name} 
      ${beach.hebrewName} 
      ${beach.description} 
      ${beach.location.address}
      ${beach.facilities.join(' ')}
      ${beach.salinity.properties}
    `.toLowerCase()

    return searchTerms.every(term => searchText.includes(term))
  })
}

// Obtenir les plages par salinité
export const getBeachesBySalinity = (beaches: DeadSeaBeach[]): { high: DeadSeaBeach[], medium: DeadSeaBeach[], low: DeadSeaBeach[] } => {
  const high = beaches.filter(b => parseFloat(b.salinity.level) >= 34)
  const medium = beaches.filter(b => parseFloat(b.salinity.level) >= 33 && parseFloat(b.salinity.level) < 34)
  const low = beaches.filter(b => parseFloat(b.salinity.level) < 33)

  return { high, medium, low }
}

// Générer un slug URL à partir du nom de la plage
export const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Supprimer les caractères spéciaux
    .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
    .trim()
}

// Vérifier si une plage est adaptée aux familles
export const isFamilyFriendly = (beach: DeadSeaBeach): boolean => {
  const familyFacilities = [
    BeachFacility.CHANGING_ROOMS,
    BeachFacility.SHOWERS,
    BeachFacility.RESTAURANTS,
    BeachFacility.LIFEGUARD
  ]
  
  return familyFacilities.every(facility => beach.facilities.includes(facility)) &&
         beach.accessibility.wheelchairAccess
}

// Obtenir le niveau de luxe d'une plage
export const getLuxuryLevel = (beach: DeadSeaBeach): 'basic' | 'standard' | 'premium' | 'luxury' => {
  const luxuryFacilities = [BeachFacility.SPA, BeachFacility.BAR, BeachFacility.WIFI]
  const luxuryCount = luxuryFacilities.filter(facility => beach.facilities.includes(facility)).length
  const price = extractPrice(beach.entranceFee)

  if (luxuryCount >= 3 && price > 80) return 'luxury'
  if (luxuryCount >= 2 && price > 50) return 'premium'
  if (luxuryCount >= 1 || price > 0) return 'standard'
  return 'basic'
}

// Formater les coordonnées pour l'affichage
export const formatCoordinates = (latitude: number, longitude: number): string => {
  const latDirection = latitude >= 0 ? 'N' : 'S'
  const lonDirection = longitude >= 0 ? 'E' : 'W'
  
  return `${Math.abs(latitude).toFixed(4)}°${latDirection}, ${Math.abs(longitude).toFixed(4)}°${lonDirection}`
}

// Obtenir l'heure locale en Israël
export const getIsraeliTime = (): string => {
  return new Date().toLocaleTimeString('he-IL', {
    timeZone: 'Asia/Jerusalem',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Vérifier si c'est actuellement le Shabbat
export const isShabbat = (): boolean => {
  const now = new Date()
  const israelTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Jerusalem"}))
  const day = israelTime.getDay()
  const hour = israelTime.getHours()
  
  // Vendredi soir (18h) au samedi soir (20h)
  return (day === 5 && hour >= 18) || (day === 6 && hour < 20)
}

// Export de toutes les fonctions utilitaires
export default {
  filterBeaches,
  getAllFacilities,
  getBorderColor,
  getTypeColor,
  getSeverityColor,
  getSeverityBorder,
  openGoogleMaps,
  formatHours,
  isBeachOpen,
  calculateDistance,
  sortBeachesByDistance,
  getRecommendedBeaches,
  getBeachStats,
  validateBeach,
  extractPrice,
  sortBeachesByPrice,
  searchBeaches,
  getBeachesBySalinity,
  generateSlug,
  isFamilyFriendly,
  getLuxuryLevel,
  formatCoordinates,
  getIsraeliTime,
  isShabbat
}