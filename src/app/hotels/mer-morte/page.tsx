'use client';
import React, { useState, useEffect } from 'react';
import { Search, Filter, Star, MapPin, Wifi, Car, Coffee, Dumbbell, Waves, Users, Calendar, ArrowRight, Check, X, ChevronDown, ChevronUp, Heart, Share2, Phone, Mail, Shield, Award, Sparkles } from 'lucide-react';

// Types pour les hôtels
interface Hotel {
  id: number;
  name: string;
  stars: number;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  gallery: string[];
  location: string;
  coordinates: [number, number];
  description: string;
  amenities: string[];
  features: string[];
  reviews: {
    average: number;
    total: number;
    categories: {
      cleanliness: number;
      comfort: number;
      location: number;
      service: number;
      value: number;
    };
  };
  bookingInfo: {
    cancellation: string;
    breakfast: boolean;
    wifi: boolean;
    parking: boolean;
  };
  specialOffers?: string[];
  nearbyAttractions: string[];
  roomTypes: {
    name: string;
    size: string;
    capacity: number;
    price: number;
    amenities: string[];
  }[];
}

// Données des hôtels de la Mer Morte
const deadSeaHotels: Hotel[] = [
  {
    id: 1,
    name: "Herods Dead Sea",
    stars: 5,
    price: 320,
    originalPrice: 420,
    discount: 24,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
    ],
    location: "Ein Bokek, Mer Morte",
    coordinates: [31.1997, 35.3567],
    description: "Complexe hôtelier de luxe situé directement sur les rives de la Mer Morte, offrant des vues spectaculaires et un accès direct aux eaux thérapeutiques.",
    amenities: ["Spa", "Piscine", "Restaurant", "Wifi gratuit", "Parking", "Centre de fitness", "Plage privée", "Service en chambre"],
    features: ["Accès direct Mer Morte", "Spa thérapeutique", "Cuisine casher", "Vue panoramique", "Service de luxe"],
    reviews: {
      average: 4.7,
      total: 1245,
      categories: {
        cleanliness: 4.8,
        comfort: 4.7,
        location: 4.9,
        service: 4.6,
        value: 4.5
      }
    },
    bookingInfo: {
      cancellation: "Annulation gratuite jusqu'à 24h avant",
      breakfast: true,
      wifi: true,
      parking: true
    },
    specialOffers: ["Séjour 3 nuits = 4ème nuit offerte", "Spa package inclus"],
    nearbyAttractions: ["Ein Bokek Beach", "Massada", "Ein Gedi", "Parc national Qumran"],
    roomTypes: [
      {
        name: "Chambre Standard Vue Mer",
        size: "35 m²",
        capacity: 2,
        price: 320,
        amenities: ["Balcon vue mer", "Minibar", "Climatisation", "TV satellite"]
      },
      {
        name: "Suite Junior Vue Mer",
        size: "50 m²", 
        capacity: 3,
        price: 450,
        amenities: ["Salon séparé", "Balcon vue mer", "Minibar", "Peignoirs", "Machine Nespresso"]
      }
    ]
  },
  {
    id: 2,
    name: "Isrotel Dead Sea",
    stars: 5,
    price: 280,
    originalPrice: 350,
    discount: 20,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800"
    ],
    location: "Ein Bokek, Mer Morte",
    coordinates: [31.2012, 35.3589],
    description: "Hôtel moderne avec design contemporain offrant une expérience de bien-être exceptionnelle dans un cadre luxueux face à la Mer Morte.",
    amenities: ["Spa premium", "3 Piscines", "5 Restaurants", "Wifi gratuit", "Parking", "Centre de fitness", "Kids club", "Plage privée"],
    features: ["Design moderne", "Spa de luxe", "Restaurants variés", "Animation", "Famille friendly"],
    reviews: {
      average: 4.5,
      total: 892,
      categories: {
        cleanliness: 4.6,
        comfort: 4.5,
        location: 4.7,
        service: 4.4,
        value: 4.3
      }
    },
    bookingInfo: {
      cancellation: "Annulation gratuite jusqu'à 48h avant",
      breakfast: true,
      wifi: true,
      parking: true
    },
    specialOffers: ["All-inclusive disponible", "Réduction famille"],
    nearbyAttractions: ["Ein Bokek Beach", "Massada", "Ein Gedi"],
    roomTypes: [
      {
        name: "Chambre Deluxe",
        size: "32 m²",
        capacity: 2,
        price: 280,
        amenities: ["Vue mer ou montagne", "Minibar", "Climatisation", "Coffre-fort"]
      }
    ]
  },
  {
    id: 3,
    name: "David Dead Sea Resort & Spa",
    stars: 5,
    price: 395,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800"
    ],
    location: "Ein Bokek, Mer Morte",
    coordinates: [31.2034, 35.3601],
    description: "Resort de prestige avec spa révolutionnaire utilisant les minéraux uniques de la Mer Morte pour des soins thérapeutiques d'exception.",
    amenities: ["Spa thérapeutique", "Piscines minérales", "Restaurant gastronomique", "Wifi gratuit", "Valet parking", "Concierge", "Plage privée"],
    features: ["Spa révolutionnaire", "Soins thérapeutiques", "Service personnalisé", "Luxe absolu"],
    reviews: {
      average: 4.8,
      total: 567,
      categories: {
        cleanliness: 4.9,
        comfort: 4.8,
        location: 4.8,
        service: 4.9,
        value: 4.6
      }
    },
    bookingInfo: {
      cancellation: "Annulation gratuite jusqu'à 24h avant",
      breakfast: true,
      wifi: true,
      parking: true
    },
    specialOffers: ["Package spa inclus", "Transfert aéroport gratuit"],
    nearbyAttractions: ["Ein Bokek Beach", "Massada", "Ein Gedi", "Réserve naturelle Ein Feshkha"],
    roomTypes: [
      {
        name: "Chambre Supérieure Vue Mer",
        size: "40 m²",
        capacity: 2,
        price: 395,
        amenities: ["Vue mer", "Marble bathroom", "Minibar premium", "Machine à café"]
      }
    ]
  },
  {
    id: 4,
    name: "Leonardo Plaza Dead Sea",
    stars: 4,
    price: 210,
    originalPrice: 260,
    discount: 19,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800"
    ],
    location: "Ein Bokek, Mer Morte",
    coordinates: [31.1978, 35.3545],
    description: "Hôtel confortable offrant un excellent rapport qualité-prix avec accès direct à la Mer Morte et installations modernes.",
    amenities: ["Spa", "Piscine", "2 Restaurants", "Wifi gratuit", "Parking", "Centre de fitness", "Plage privée"],
    features: ["Bon rapport qualité-prix", "Emplacement central", "Installations complètes"],
    reviews: {
      average: 4.2,
      total: 734,
      categories: {
        cleanliness: 4.3,
        comfort: 4.2,
        location: 4.5,
        service: 4.1,
        value: 4.4
      }
    },
    bookingInfo: {
      cancellation: "Annulation gratuite jusqu'à 24h avant",
      breakfast: true,
      wifi: true,
      parking: true
    },
    nearbyAttractions: ["Ein Bokek Beach", "Massada", "Ein Gedi"],
    roomTypes: [
      {
        name: "Chambre Standard",
        size: "28 m²",
        capacity: 2,
        price: 210,
        amenities: ["Vue mer ou jardin", "Minibar", "Climatisation", "TV"]
      }
    ]
  },
  {
    id: 5,
    name: "Prima Oasis Dead Sea",
    stars: 4,
    price: 185,
    originalPrice: 230,
    discount: 20,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800"
    ],
    location: "Ein Bokek, Mer Morte",
    coordinates: [31.1989, 35.3556],
    description: "Hôtel familial moderne avec excellent service et installations complètes pour un séjour relaxant à la Mer Morte.",
    amenities: ["Spa", "Piscine", "Restaurant", "Wifi gratuit", "Parking", "Kids club", "Plage privée"],
    features: ["Familial", "Service attentionné", "Ambiance détendue"],
    reviews: {
      average: 4.3,
      total: 456,
      categories: {
        cleanliness: 4.4,
        comfort: 4.3,
        location: 4.4,
        service: 4.2,
        value: 4.5
      }
    },
    bookingInfo: {
      cancellation: "Annulation gratuite jusqu'à 48h avant",
      breakfast: true,
      wifi: true,
      parking: true
    },
    nearbyAttractions: ["Ein Bokek Beach", "Massada", "Ein Gedi"],
    roomTypes: [
      {
        name: "Chambre Familiale",
        size: "35 m²",
        capacity: 4,
        price: 185,
        amenities: ["Lits jumeaux + canapé-lit", "Minibar", "Climatisation", "Balcon"]
      }
    ]
  },
  {
    id: 6,
    name: "Crowne Plaza Jordan Dead Sea",
    stars: 5,
    price: 245,
    originalPrice: 310,
    discount: 21,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800"
    ],
    location: "Sweimeh, Jordanie (côté jordanien)",
    coordinates: [31.7167, 35.5833],
    description: "Hôtel international de luxe côté jordanien offrant une perspective unique sur la Mer Morte avec service haut de gamme.",
    amenities: ["Spa de luxe", "Piscine infinity", "4 Restaurants", "Wifi gratuit", "Valet parking", "Centre de fitness", "Plage privée"],
    features: ["Vue panoramique", "Service international", "Côté jordanien", "Expérience unique"],
    reviews: {
      average: 4.6,
      total: 689,
      categories: {
        cleanliness: 4.7,
        comfort: 4.6,
        location: 4.5,
        service: 4.7,
        value: 4.4
      }
    },
    bookingInfo: {
      cancellation: "Annulation gratuite jusqu'à 24h avant",
      breakfast: true,
      wifi: true,
      parking: true
    },
    specialOffers: ["Vue côté jordanien", "Excursions Pétra disponibles"],
    nearbyAttractions: ["Bethany Beyond Jordan", "Mont Nebo", "Madaba", "Pétra (excursion)"],
    roomTypes: [
      {
        name: "Chambre Vue Mer Morte",
        size: "38 m²",
        capacity: 2,
        price: 245,
        amenities: ["Vue panoramique", "Minibar", "Climatisation", "Bureau"]
      }
    ]
  }
];

// Composant principal
const HotelsDeadSeaPage: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>(deadSeaHotels);
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(deadSeaHotels);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  
  // États des filtres
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    stars: [] as number[],
    amenities: [] as string[],
    rating: 0
  });

  // Fonction pour appliquer les filtres
  useEffect(() => {
    let filtered = hotels.filter(hotel => {
      // Filtre par recherche
      const searchMatch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hotel.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Filtre par prix
      const priceMatch = hotel.price >= filters.priceRange[0] && hotel.price <= filters.priceRange[1];
      
      // Filtre par étoiles
      const starsMatch = filters.stars.length === 0 || filters.stars.includes(hotel.stars);
      
      // Filtre par équipements
      const amenitiesMatch = filters.amenities.length === 0 || 
                            filters.amenities.every(amenity => hotel.amenities.includes(amenity));
      
      // Filtre par note
      const ratingMatch = hotel.reviews.average >= filters.rating;
      
      return searchMatch && priceMatch && starsMatch && amenitiesMatch && ratingMatch;
    });
    
    setFilteredHotels(filtered);
  }, [searchTerm, filters, hotels]);

  // Fonction pour basculer les favoris
  const toggleFavorite = (hotelId: number) => {
    setFavorites(prev => 
      prev.includes(hotelId) 
        ? prev.filter(id => id !== hotelId)
        : [...prev, hotelId]
    );
  };

  // Fonction pour réinitialiser les filtres
  const resetFilters = () => {
    setFilters({
      priceRange: [0, 500],
      stars: [],
      amenities: [],
      rating: 0
    });
    setSearchTerm('');
  };

  // Rendu des étoiles
  const renderStars = (rating: number, size: string = "w-4 h-4") => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`${size} ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hôtels de la <span className="text-teal-300">Mer Morte</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Découvrez les meilleurs hôtels avec spa et accès direct aux eaux thérapeutiques de la Mer Morte
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{filteredHotels.length}</div>
                    <div className="text-sm">Hôtels disponibles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">À partir de {Math.min(...filteredHotels.map(h => h.price))}€</div>
                    <div className="text-sm">par nuit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section de recherche et filtres */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Barre de recherche */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un hôtel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            
            {/* Bouton filtres */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
            >
              <Filter size={20} />
              Filtres
            </button>
            
            {/* Bouton reset */}
            {(searchTerm || filters.stars.length > 0 || filters.amenities.length > 0 || filters.rating > 0) && (
              <button
                onClick={resetFilters}
                className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Réinitialiser
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Panel de filtres */}
      {showFilters && (
        <section className="py-6 bg-gray-100 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Filtre prix */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget par nuit (€)
                </label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      min="0"
                      max="500"
                      value={filters.priceRange[0]}
                      onChange={(e) => setFilters(prev => ({
                        ...prev,
                        priceRange: [parseInt(e.target.value) || 0, prev.priceRange[1]]
                      }))}
                      className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                    <span>-</span>
                    <input
                      type="number"
                      min="0"
                      max="500"
                      value={filters.priceRange[1]}
                      onChange={(e) => setFilters(prev => ({
                        ...prev,
                        priceRange: [prev.priceRange[0], parseInt(e.target.value) || 500]
                      }))}
                      className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                  </div>
                </div>
              </div>
              
              {/* Filtre étoiles */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie
                </label>
                <div className="space-y-2">
                  {[4, 5].map(star => (
                    <label key={star} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.stars.includes(star)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters(prev => ({
                              ...prev,
                              stars: [...prev.stars, star]
                            }));
                          } else {
                            setFilters(prev => ({
                              ...prev,
                              stars: prev.stars.filter(s => s !== star)
                            }));
                          }
                        }}
                        className="mr-2"
                      />
                      <div className="flex">
                        {renderStars(star)}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Filtre équipements */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Équipements
                </label>
                <div className="space-y-2">
                  {['Spa', 'Piscine', 'Wifi gratuit', 'Parking', 'Restaurant'].map(amenity => (
                    <label key={amenity} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.amenities.includes(amenity)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters(prev => ({
                              ...prev,
                              amenities: [...prev.amenities, amenity]
                            }));
                          } else {
                            setFilters(prev => ({
                              ...prev,
                              amenities: prev.amenities.filter(a => a !== amenity)
                            }));
                          }
                        }}
                        className="mr-2"
                      />
                      <span className="text-sm">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Filtre note */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Note minimum
                </label>
                <select
                  value={filters.rating}
                  onChange={(e) => setFilters(prev => ({
                    ...prev,
                    rating: parseFloat(e.target.value)
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value={0}>Toutes les notes</option>
                  <option value={4}>4+ étoiles</option>
                  <option value={4.5}>4.5+ étoiles</option>
                </select>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Résultats */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {filteredHotels.length} hôtel{filteredHotels.length > 1 ? 's' : ''} trouvé{filteredHotels.length > 1 ? 's' : ''}
            </h2>
            
            {/* Tri */}
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Trier par prix croissant</option>
              <option>Trier par prix décroissant</option>
              <option>Trier par note</option>
              <option>Trier par étoiles</option>
            </select>
          </div>
          
          {/* Grille des hôtels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-64">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {hotel.discount && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                        -{hotel.discount}%
                      </span>
                    )}
                    {hotel.specialOffers && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                        Offre spéciale
                      </span>
                    )}
                  </div>
                  
                  {/* Favoris */}
                  <button
                    onClick={() => toggleFavorite(hotel.id)}
                    className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${favorites.includes(hotel.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`}
                    />
                  </button>
                </div>
                
                {/* Contenu */}
                <div className="p-6">
                  {/* En-tête */}
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{hotel.name}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {renderStars(hotel.stars)}
                        </div>
                        <span className="text-sm text-gray-600">{hotel.stars} étoiles</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Localisation */}
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{hotel.location}</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {hotel.description}
                  </p>
                  
                  {/* Équipements */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 4).map((amenity, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded-md"
                      >
                        {amenity === 'Wifi gratuit' && <Wifi size={12} className="mr-1" />}
                        {amenity === 'Parking' && <Car size={12} className="mr-1" />}
                        {amenity === 'Restaurant' && <Coffee size={12} className="mr-1" />}
                        {amenity === 'Centre de fitness' && <Dumbbell size={12} className="mr-1" />}
                        {amenity === 'Spa' && <Sparkles size={12} className="mr-1" />}
                        {amenity === 'Plage privée' && <Waves size={12} className="mr-1" />}
                        {amenity}
                      </span>
                    ))}
                    {hotel.amenities.length > 4 && (
                      <span className="text-xs text-gray-500">
                        +{hotel.amenities.length - 4} autres
                      </span>
                    )}
                  </div>
                  
                  {/* Avis */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {renderStars(Math.round(hotel.reviews.average))}
                      </div>
                      <span className="font-semibold text-gray-800">
                        {hotel.reviews.average}
                      </span>
                      <span className="text-sm text-gray-600">
                        ({hotel.reviews.total} avis)
                      </span>
                    </div>
                  </div>
                  
                  {/* Prix et CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      {hotel.originalPrice && (
                        <span className="text-sm text-gray-500 line-through mr-2">
                          {hotel.originalPrice}€
                        </span>
                      )}
                      <span className="text-2xl font-bold text-teal-600">
                        {hotel.price}€
                      </span>
                      <span className="text-sm text-gray-600 ml-1">/ nuit</span>
                    </div>
                    
                    <button
                      onClick={() => setSelectedHotel(hotel)}
                      className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors font-semibold"
                    >
                      Voir détails
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Message si aucun résultat */}
          {filteredHotels.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">
                <Search size={48} className="mx-auto mb-4" />
                <p className="text-lg">Aucun hôtel ne correspond à vos critères</p>
                <p className="text-sm">Essayez de modifier vos filtres</p>
              </div>
              <button
                onClick={resetFilters}
                className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal détails hôtel */}
      {selectedHotel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* En-tête du modal */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedHotel.name}</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex">
                    {renderStars(selectedHotel.stars)}
                  </div>
                  <span className="text-sm text-gray-600">{selectedHotel.location}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedHotel(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>
            
            {/* Contenu du modal */}
            <div className="p-6">
              {/* Galerie d'images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {selectedHotel.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedHotel.name} - Image ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
              
              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Description</h3>
                <p className="text-gray-700">{selectedHotel.description}</p>
              </div>
              
              {/* Équipements */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Équipements</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {selectedHotel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <Check size={16} className="text-green-500 mr-2" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Avis détaillés */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Avis clients</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl font-bold text-teal-600">
                        {selectedHotel.reviews.average}
                      </span>
                      <div>
                        <div className="flex">
                          {renderStars(Math.round(selectedHotel.reviews.average))}
                        </div>
                        <span className="text-sm text-gray-600">
                          Basé sur {selectedHotel.reviews.total} avis
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(selectedHotel.reviews.categories).map(([category, rating]) => (
                      <div key={category} className="flex justify-between items-center">
                        <span className="text-sm text-gray-700 capitalize">
                          {category === 'cleanliness' && 'Propreté'}
                          {category === 'comfort' && 'Confort'}
                          {category === 'location' && 'Emplacement'}
                          {category === 'service' && 'Service'}
                          {category === 'value' && 'Rapport qualité-prix'}
                        </span>
                        <span className="font-semibold">{rating}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Types de chambres */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Types de chambres</h3>
                <div className="space-y-4">
                  {selectedHotel.roomTypes.map((room, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-800">{room.name}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span>{room.size}</span>
                            <span className="flex items-center">
                              <Users size={14} className="mr-1" />
                              {room.capacity} personnes
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold text-teal-600">{room.price}€</span>
                          <span className="text-sm text-gray-600 block">/ nuit</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {room.amenities.map((amenity, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Attractions à proximité */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">À proximité</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedHotel.nearbyAttractions.map((attraction, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <MapPin size={14} className="text-teal-500 mr-2" />
                      {attraction}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Offres spéciales */}
              {selectedHotel.specialOffers && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Offres spéciales</h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    {selectedHotel.specialOffers.map((offer, index) => (
                      <div key={index} className="flex items-center text-sm text-green-800">
                        <Award size={14} className="text-green-600 mr-2" />
                        {offer}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Actions */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <div className="text-center md:text-left">
                    <div className="flex items-center space-x-2 mb-2">
                      {selectedHotel.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          {selectedHotel.originalPrice}€
                        </span>
                      )}
                      <span className="text-3xl font-bold text-teal-600">
                        {selectedHotel.price}€
                      </span>
                      <span className="text-gray-600">/ nuit</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Check size={16} className="text-green-500 mr-2" />
                      {selectedHotel.bookingInfo.cancellation}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <Share2 size={18} className="mr-2" />
                      Partager
                    </button>
                    <a
                      href="https://elynortours.com/hotels/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors font-semibold"
                    >
                      Réserver maintenant
                      <ArrowRight size={18} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section informations pratiques */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Tout savoir sur les hôtels de la Mer Morte
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Sparkles className="text-teal-500 mr-2" />
                  Bienfaits thérapeutiques
                </h3>
                <p className="text-gray-700 mb-4">
                  Les hôtels de la Mer Morte offrent un accès unique aux propriétés thérapeutiques des eaux et boues riches en minéraux. 
                  Idéal pour les traitements de la peau, l'arthrite et la relaxation.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    Soins spa aux minéraux de la Mer Morte
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    Piscines d'eau salée chauffées
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    Traitements dermatologiques
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <MapPin className="text-blue-500 mr-2" />
                  Emplacement privilégié
                </h3>
                <p className="text-gray-700 mb-4">
                  Situés à Ein Bokek, les hôtels offrent un accès direct à la Mer Morte et se trouvent à proximité de sites historiques majeurs.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    30 min de Massada
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    45 min d'Ein Gedi
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    1h30 de Jérusalem
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt pour votre séjour bien-être à la Mer Morte ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Réservez dès maintenant votre hôtel avec Elynor Tours et bénéficiez des meilleurs tarifs et d'un service personnalisé.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
              <Shield className="h-5 w-5 mr-2" />
              <span>Annulation gratuite</span>
            </div>
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
              <Award className="h-5 w-5 mr-2" />
              <span>Meilleurs prix garantis</span>
            </div>
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
              <Phone className="h-5 w-5 mr-2" />
              <span>Support 24/7</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://elynortours.com/hotels/"
              className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Réserver maintenant
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="tel:+33182836729"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-teal-600 transition-colors"
            >
              <Phone className="mr-2" size={20} />
              Appeler un conseiller
            </a>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            "name": "Hôtels de la Mer Morte - Elynor Tours",
            "description": "Découvrez les meilleurs hôtels de la Mer Morte avec spa et accès direct aux eaux thérapeutiques",
            "url": "https://elynortours.com/hotels/mer-morte",
            "areaServed": {
              "@type": "Place",
              "name": "Ein Bokek, Mer Morte, Israël"
            },
            "amenityFeature": [
              { "@type": "LocationFeatureSpecification", "name": "Spa" },
              { "@type": "LocationFeatureSpecification", "name": "Piscine" },
              { "@type": "LocationFeatureSpecification", "name": "Restaurant" },
              { "@type": "LocationFeatureSpecification", "name": "Wifi gratuit" },
              { "@type": "LocationFeatureSpecification", "name": "Parking" },
              { "@type": "LocationFeatureSpecification", "name": "Plage privée" }
            ],
            "priceRange": "€€€",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "reviewCount": "4583"
            }
          })
        }}
      />
    </div>
  );
};

export default HotelsDeadSeaPage;