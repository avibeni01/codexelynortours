'use client';

import React, { useState } from 'react';
import { Search, MapPin, Calendar, Check, Info, ChevronDown, Star, Clock, Users } from 'lucide-react';

// Types pour les plages religieuses méditerranéennes
interface ReligiousSchedule {
  men: string;
  women: string;
  notes: string;
  exceptions?: string[];
}

interface MediterraneanReligiousBeach {
  id: number;
  name: string;
  hebrewName: string;
  description: string;
  detailedDescription: string;
  location: {
    city: string;
    address: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  images: string[];
  separationSchedule: ReligiousSchedule;
  specialFacilities: string[];
  specialRules: string[];
  accessibility: {
    wheelchairAccess: boolean;
    familyFriendly: boolean;
  };
  seasons: {
    summer: boolean;
    winter: boolean;
  };
  contact?: {
    phone?: string;
    website?: string;
  };
}

// Données des plages religieuses méditerranéennes
const mediterraneanReligiousBeaches: MediterraneanReligiousBeach[] = [
  {
    id: 1,
    name: "Plage Nordau",
    hebrewName: "חוף נורדאו",
    description: "Plage urbaine de Tel Aviv avec section séparée très fréquentée, offrant des installations modernes et un accès facile depuis le centre-ville.",
    detailedDescription: "La plage Nordau est l'une des plages les plus populaires de Tel Aviv pour les visiteurs religieux. Située dans le nord de la ville, elle offre une section séparée bien organisée avec des horaires stricts. Les installations incluent des vestiaires privés, des douches séparées, et une zone de restauration casher.",
    location: {
      city: "Tel Aviv",
      address: "Derech Ben Gurion, Tel Aviv",
      coordinates: {
        latitude: 32.0853,
        longitude: 34.7818
      }
    },
    images: [
      "https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg",
      "https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg"
    ],
    separationSchedule: {
      men: "Dimanche, Mardi, Jeudi : 6h00-13h00",
      women: "Lundi, Mercredi, Vendredi : 6h00-13h00",
      notes: "Fermeture le Shabbat et jours de fête. Horaires d'été prolongés jusqu'à 14h00.",
      exceptions: ["Fermeture pendant Yom Kippour", "Horaires spéciaux pendant Rosh Hashana"]
    },
    specialFacilities: [
      "Vestiaires séparés avec casiers",
      "Douches privées chaudes/froides",
      "Zone de restauration casher",
      "Parasols et transats",
      "Surveillance maritime",
      "Accès handicapés",
      "Aire de jeux pour enfants"
    ],
    specialRules: [
      "Tenue de bain modeste obligatoire",
      "Pas de musique forte",
      "Respect des horaires stricts",
      "Zones familiales dédiées"
    ],
    accessibility: {
      wheelchairAccess: true,
      familyFriendly: true
    },
    seasons: {
      summer: true,
      winter: true
    },
    contact: {
      phone: "+972-3-521-8388",
      website: "www.tel-aviv.gov.il"
    }
  },
  {
    id: 2,
    name: "Plage Bat Yam Séparée",
    hebrewName: "חוף בת ים מופרד",
    description: "Plage familiale de Bat Yam avec excellentes installations pour familles religieuses et espaces séparés bien aménagés.",
    detailedDescription: "Cette plage de Bat Yam est spécialement aménagée pour les familles religieuses. Elle propose des espaces généreux, des installations de qualité et un environnement paisible, idéal pour les familles avec enfants.",
    location: {
      city: "Bat Yam",
      address: "Promenade Ben Gurion, Bat Yam",
      coordinates: {
        latitude: 32.0213,
        longitude: 34.7506
      }
    },
    images: [
      "https://images.pexels.com/photos/1024969/pexels-photo-1024969.jpeg",
      "https://images.pexels.com/photos/1024968/pexels-photo-1024968.jpeg"
    ],
    separationSchedule: {
      men: "Dimanche, Mardi, Jeudi : 7h00-14h00",
      women: "Lundi, Mercredi, Vendredi : 7h00-14h00",
      notes: "Zones familiales mixtes disponibles certains jours. Vérifier les horaires saisonniers.",
      exceptions: ["Activités familiales mixtes le vendredi matin", "Fermeture pendant les fêtes"]
    },
    specialFacilities: [
      "Grandes zones ombragées",
      "Vestiaires familiaux",
      "Aire de jeux sécurisée",
      "Snack-bar casher",
      "Parking gratuit à proximité",
      "Douches eau douce",
      "Location matériel plage"
    ],
    specialRules: [
      "Zone familiale disponible",
      "Activités organisées pour enfants",
      "Respect du code vestimentaire",
      "Pas d'alcool autorisé"
    ],
    accessibility: {
      wheelchairAccess: true,
      familyFriendly: true
    },
    seasons: {
      summer: true,
      winter: false
    },
    contact: {
      phone: "+972-3-507-4444"
    }
  },
  {
    id: 3,
    name: "Plage Netanya Religieuse",
    hebrewName: "חוף נתניה דתי",
    description: "Section séparée de la plage principale de Netanya, avec vue panoramique sur la Méditerranée et installations adaptées.",
    detailedDescription: "Située sur les falaises de Netanya, cette section séparée offre une vue imprenable sur la Méditerranée. Les installations sont modernes et bien entretenues, avec un accès facile par ascenseur depuis la promenade.",
    location: {
      city: "Netanya",
      address: "Promenade Herzl, Netanya",
      coordinates: {
        latitude: 32.3215,
        longitude: 34.8532
      }
    },
    images: [
      "https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg",
      "https://images.pexels.com/photos/1024966/pexels-photo-1024966.jpeg"
    ],
    separationSchedule: {
      men: "Dimanche, Mardi, Jeudi, Samedi soir : 6h30-13h30",
      women: "Lundi, Mercredi, Vendredi : 6h30-13h30",
      notes: "Accès par ascenseur depuis la promenade. Horaires étendus en été.",
      exceptions: ["Ouverture le samedi soir après Shabbat", "Fermeture pendant tempêtes"]
    },
    specialFacilities: [
      "Accès par ascenseur",
      "Vue panoramique exceptionnelle",
      "Vestiaires modernes",
      "Café casher sur la promenade",
      "Sauveteurs qualifiés",
      "Éclairage nocturne sécurisé",
      "Espace pique-nique couvert"
    ],
    specialRules: [
      "Utilisation obligatoire de l'ascenseur",
      "Pas d'accès direct depuis la plage principale",
      "Surveillance stricte des horaires",
      "Zone de prière disponible"
    ],
    accessibility: {
      wheelchairAccess: true,
      familyFriendly: true
    },
    seasons: {
      summer: true,
      winter: true
    },
    contact: {
      phone: "+972-9-882-4444"
    }
  },
  {
    id: 4,
    name: "Plage Herzliya Séparée",
    hebrewName: "חוף הרצליה מופרד",
    description: "Section religieuse de la célèbre plage d'Herzliya, alliant luxe et respect des traditions religieuses.",
    detailedDescription: "Cette section séparée de la prestigieuse plage d'Herzliya maintient les standards élevés de la région tout en respectant les exigences religieuses. Installations haut de gamme et service de qualité.",
    location: {
      city: "Herzliya",
      address: "Herzliya Pituach Beach, Herzliya",
      coordinates: {
        latitude: 32.1614,
        longitude: 34.8003
      }
    },
    images: [
      "https://images.pexels.com/photos/1024965/pexels-photo-1024965.jpeg",
      "https://images.pexels.com/photos/1024964/pexels-photo-1024964.jpeg"
    ],
    separationSchedule: {
      men: "Dimanche, Mardi, Jeudi : 7h00-15h00",
      women: "Lundi, Mercredi, Vendredi : 7h00-15h00",
      notes: "Standards élevés d'Herzliya maintenus. Réservation recommandée en haute saison.",
      exceptions: ["Service de voiturier disponible", "Fermeture pendant événements privés"]
    },
    specialFacilities: [
      "Service de qualité supérieure",
      "Vestiaires de luxe",
      "Restaurant casher gastronomique",
      "Service de location équipement haut de gamme",
      "Parking valet disponible",
      "Wifi gratuit",
      "Espaces VIP"
    ],
    specialRules: [
      "Dress code élégant requis",
      "Réservation recommandée",
      "Pas d'enfants non accompagnés",
      "Respect absolu des horaires"
    ],
    accessibility: {
      wheelchairAccess: true,
      familyFriendly: true
    },
    seasons: {
      summer: true,
      winter: true
    },
    contact: {
      phone: "+972-9-950-4444",
      website: "www.herzliya-beach.co.il"
    }
  }
];

const MediterraneanReligiousBeachesSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedBeach, setExpandedBeach] = useState<number | null>(null);
  const [cityFilter, setCityFilter] = useState<string>('ALL');

  // Get unique cities
  const cities = ['ALL', ...new Set(mediterraneanReligiousBeaches.map(beach => beach.location.city))];

  const filteredBeaches = mediterraneanReligiousBeaches.filter(beach => {
    const searchMatch = beach.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        beach.location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        beach.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const cityMatch = cityFilter === 'ALL' || beach.location.city === cityFilter;
    
    return searchMatch && cityMatch;
  });

  const toggleExpanded = (id: number) => {
    if (expandedBeach === id) {
      setExpandedBeach(null);
    } else {
      setExpandedBeach(id);
    }
  };

  return (
    <section id="mediterranean-religious-beaches" className="py-20 bg-rose-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Plages Séparées pour Visiteurs Religieux
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Le littoral méditerranéen d'Israël propose également des plages avec séparation hommes-femmes, permettant aux visiteurs observant des pratiques religieuses strictes de profiter des plaisirs de la mer tout en respectant leurs traditions.
        </p>
        
        {/* Information et recherche */}
        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          <div className="lg:w-2/3 bg-white border-l-4 border-rose-500 p-5 rounded-md">
            <h3 className="text-lg font-semibold text-rose-800 mb-2">Information importante</h3>
            <p className="text-gray-700">
              Les plages séparées respectent rigoureusement les horaires de séparation entre hommes et femmes. Veuillez vérifier les jours et heures spécifiques avant votre visite, car ils peuvent varier selon la saison et les fêtes religieuses. Le respect du code vestimentaire et des règles particulières est obligatoire.
            </p>
          </div>
          
          <div className="lg:w-1/3 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une plage séparée..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
            </div>
            
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            >
              {cities.map(city => (
                <option key={city} value={city}>
                  {city === 'ALL' ? 'Toutes les villes' : city}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Beach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBeaches.map((beach) => (
            <div 
              key={beach.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border-l-4 border-rose-500"
            >
              {/* Image */}
              <div className="relative h-56">
                <img
                  src={beach.images[0]}
                  alt={`Plage séparée ${beach.name} pour visiteurs religieux - ${beach.location.city}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-rose-600 text-white px-3 py-1 m-3 rounded-md text-xs font-medium">
                  {beach.location.city}
                </div>
                {beach.accessibility.wheelchairAccess && (
                  <div className="absolute top-0 right-0 bg-green-600 text-white px-2 py-1 m-3 rounded-md text-xs">
                    Accessible
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{beach.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{beach.hebrewName}</p>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {beach.description}
                </p>
                
                {/* Key Information */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-rose-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-1">Horaires de séparation:</h4>
                      <p className="text-xs text-gray-600"><strong>Hommes:</strong> {beach.separationSchedule.men}</p>
                      <p className="text-xs text-gray-600"><strong>Femmes:</strong> {beach.separationSchedule.women}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-1">Adresse:</h4>
                      <p className="text-xs text-gray-600">{beach.location.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {beach.accessibility.familyFriendly ? 'Familles bienvenues' : 'Adultes uniquement'}
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {beach.seasons.winter ? 'Toute année' : 'Été seulement'}
                    </div>
                  </div>
                </div>
                
                {/* Expand Button */}
                <button
                  onClick={() => toggleExpanded(beach.id)}
                  className="flex items-center justify-center w-full py-2 bg-rose-100 text-rose-700 rounded-md hover:bg-rose-200 transition-colors text-sm font-medium"
                >
                  {expandedBeach === beach.id ? "Voir moins" : "Voir plus"}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`ml-1 h-4 w-4 transition-transform ${expandedBeach === beach.id ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Expanded Content */}
                {expandedBeach === beach.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Description complète:</h4>
                      <p className="text-sm text-gray-600">{beach.detailedDescription}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Installations spéciales:</h4>
                      <ul className="grid grid-cols-1 gap-1">
                        {beach.specialFacilities.map((facility: string, index: number) => (
                          <li key={index} className="flex items-start text-sm">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-600">{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Règles particulières:</h4>
                      <ul className="grid grid-cols-1 gap-1">
                        {beach.specialRules.map((rule: string, index: number) => (
                          <li key={index} className="flex items-start text-sm">
                            <Info className="w-4 h-4 text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-600">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Notes complémentaires:</h4>
                      <p className="text-sm text-gray-600">{beach.separationSchedule.notes}</p>
                      {beach.separationSchedule.exceptions && (
                        <div className="mt-2">
                          <p className="text-xs font-medium text-orange-600 mb-1">Exceptions:</p>
                          <ul className="text-xs text-gray-600">
                            {beach.separationSchedule.exceptions.map((exception, index) => (
                              <li key={index}>• {exception}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    {beach.contact && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Contact:</h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          {beach.contact.phone && <p>📞 {beach.contact.phone}</p>}
                          {beach.contact.website && (
                            <p>🌐 <a href={`https://${beach.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{beach.contact.website}</a></p>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* Map Button */}
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${beach.location.coordinates.latitude},${beach.location.coordinates.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-orange-500 text-white text-center py-2 rounded-md hover:bg-orange-600 transition-colors mt-4"
                    >
                      Voir sur Google Maps
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* No results message */}
        {filteredBeaches.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucune plage trouvée selon vos critères de recherche.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setCityFilter('ALL');
              }}
              className="mt-4 px-6 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
        
        {/* Elynor Tours Banner */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6 border-t border-rose-200 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/4 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-xl font-bold text-rose-700 mb-3">Services adaptés pour les visiteurs religieux</h3>
              <p className="text-gray-700 mb-4">
                Elynor Tours propose des services spécialement adaptés aux besoins des voyageurs religieux. 
                Notre offre comprend:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Location de véhicules avec GPS pré-programmé vers les plages séparées</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Hébergements à distance de marche des plages séparées</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Informations à jour sur les horaires de séparation</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Services respectant les contraintes du Shabbat</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://elynortours.com/location-de-voiture/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors text-center font-medium"
                >
                  Location de voiture adaptée
                </a>
                <a 
                  href="https://elynortours.com/hotels/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-center font-medium"
                >
                  Hôtels recommandés
                </a>
              </div>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-rose-50 p-4 rounded-full">
                <svg className="w-20 h-20 text-rose-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediterraneanReligiousBeachesSection;